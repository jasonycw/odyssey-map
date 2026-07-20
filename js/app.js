let currentIndex = 0;
let isPlaying = false;
let playInterval = null;

// State
const markers = [];
const arrowMarkers = [];
let pathLine = null;
let stillIndex = 0;
let stillImages = [];
let stillCaptions = [];

// Initialize Map
const map = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([38.0, 18.0], 5);

// Dark Tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
}).addTo(map);

// Elements
const sidebarIcon = document.getElementById('sidebar-icon');
const sidebarName = document.getElementById('sidebar-name');
const sidebarBook = document.getElementById('sidebar-book');
const sidebarPeriod = document.getElementById('sidebar-period');
const sidebarRegion = document.getElementById('sidebar-region');
const sidebarDesc = document.getElementById('sidebar-desc');
const sidebarDetail = document.getElementById('sidebar-detail');
const sidebarStatsSection = document.getElementById('sidebar-stats-section');
const sidebarStats = document.getElementById('sidebar-stats');
const sidebarSourcesSection = document.getElementById('sidebar-sources-section');
const sidebarSources = document.getElementById('sidebar-sources');
const sidebarStillSection = document.getElementById('sidebar-still-section');
const stillImg = document.getElementById('still-img');
const stillCaption = document.getElementById('still-caption');
const stillCounter = document.getElementById('still-counter');
const stillPrev = document.getElementById('still-prev');
const stillNext = document.getElementById('still-next');
const timelineScroll = document.getElementById('timeline-scroll');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const autoplayBtn = document.getElementById('autoplay-btn');

// Custom Marker Function — Pin-shaped with clear anchor point
function createCustomMarker(stop, index) {
    const icon = L.divIcon({
        className: 'marker-container',
        html: [
            '<div class="marker-pin" id="pin-' + index + '">',
                '<div class="marker-emoji">' + stop.icon + '</div>',
                '<div class="marker-point"></div>',
            '</div>',
            '<div class="marker-pulse" id="pulse-' + index + '"></div>'
        ].join(''),
        iconSize: [32, 42],
        iconAnchor: [16, 42]
    });
    return L.marker(stop.coords, { icon: icon });
}

// Initialize UI
function init() {
    // Create Timeline
    journeyStops.forEach(function (stop, index) {
        var item = document.createElement('div');
        item.className = 'timeline-item';
        item.id = 'timeline-item-' + index;
        item.innerText = stop.name;
        item.addEventListener('click', function () { goToStop(index); });
        timelineScroll.appendChild(item);

        // Create Marker
        var marker = createCustomMarker(stop, index);
        marker.on('click', function () { goToStop(index); });
        marker.addTo(map);
        markers.push(marker);
    });

    // Create Path (empty initially, animated below)
    var latlngs = journeyStops.map(function (s) { return s.coords; });
    pathLine = L.polyline([], {
        color: '#cc0809',
        weight: 2,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(map);

    // Animate Path on Load
    animatePath(latlngs);

    // Initial State
    goToStop(0);
}

// Calculate bearing between two latlng points
function bearing(from, to) {
    var dLon = (to[1] - from[1]) * Math.PI / 180;
    var lat1 = from[0] * Math.PI / 180;
    var lat2 = to[0] * Math.PI / 180;
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

// Create a directional arrow marker at a point
function createArrowMarker(at, angle) {
    var icon = L.divIcon({
        className: 'route-arrow-container',
        html: '<div class="route-arrow" style="transform:rotate(' + angle + 'deg)">&#9654;</div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
    });
    return L.marker(at, { icon: icon, interactive: false });
}

// Path Animation (Simulated tracing)
function animatePath(latlngs) {
    var currentPoints = [];
    var i = 0;

    // Reset path to empty
    pathLine.setLatLngs([]);

    function step() {
        if (i < latlngs.length) {
            currentPoints.push(latlngs[i]);
            pathLine.setLatLngs(currentPoints);
            i++;
            setTimeout(step, 400);
        } else {
            // Path fully drawn — add arrow at end of each segment
            for (var j = 0; j < latlngs.length - 1; j++) {
                var p1 = latlngs[j];
                var p2 = latlngs[j + 1];
                var ang = bearing(p1, p2);
                // CSS rotate(0deg) = right (east), nav bearing 0° = north → subtract 90
                var arrow = createArrowMarker(p2, ang - 90);
                arrow.addTo(map);
                arrowMarkers.push(arrow);
            }
        }
    }
    step();
}

function goToStop(index) {
    if (index < 0 || index >= journeyStops.length) return;

    currentIndex = index;
    var stop = journeyStops[index];

    // Update Map
    map.flyTo(stop.coords, 6, {
        animate: true,
        duration: 1.5
    });

    // Update Sidebar
    sidebarIcon.innerText = stop.icon;
    sidebarName.innerText = stop.name;
    sidebarBook.innerText = stop.book;
    sidebarPeriod.innerText = stop.period ? '\u{1F4C5} ' + stop.period : '';
    sidebarRegion.innerText = stop.region ? '\u{1F30D} ' + stop.region : '';
    sidebarDesc.innerText = stop.description;
    sidebarDetail.innerText = stop.detail;

    // Update Movie Still
    if (stop.movieImg && stop.movieImg.length > 0) {
        stillImages = Array.isArray(stop.movieImg) ? stop.movieImg : [stop.movieImg];
        stillCaptions = Array.isArray(stop.movieImgCaption) ? stop.movieImgCaption : [stop.movieImgCaption || ''];
        stillIndex = 0;
        showStill();
        sidebarStillSection.style.display = 'block';
    } else {
        stillImages = [];
        stillCaptions = [];
        stillImg.src = '';
        stillCaption.textContent = '';
        stillCounter.textContent = '';
        sidebarStillSection.style.display = 'none';
    }

    // Update Stats
    if (stop.stats) {
        sidebarStats.innerHTML = '';
        var keys = Object.keys(stop.stats);
        for (var k = 0; k < keys.length; k++) {
            var key = keys[k];
            var item = document.createElement('div');
            item.className = 'stat-item';
            item.innerHTML = '<div class="stat-label">' + key + '</div><div class="stat-value">' + stop.stats[key] + '</div>';
            sidebarStats.appendChild(item);
        }
        sidebarStatsSection.style.display = 'block';
    } else {
        sidebarStatsSection.style.display = 'none';
    }

    // Update Sources
    if (stop.sources && stop.sources.length) {
        sidebarSources.innerHTML = '';
        stop.sources.forEach(function (src) {
            var li = document.createElement('li');
            li.textContent = src;
            sidebarSources.appendChild(li);
        });
        sidebarSourcesSection.style.display = 'block';
    } else {
        sidebarSourcesSection.style.display = 'none';
    }

    // Update Timeline
    document.querySelectorAll('.timeline-item').forEach(function (el, idx) {
        el.classList.toggle('active', idx === index);
    });

    // Scroll timeline to active item
    var activeItem = document.getElementById('timeline-item-' + index);
    if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Update Progress
    var progress = ((index + 1) / journeyStops.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.innerText = 'Stop ' + (index + 1) + ' of ' + journeyStops.length;

    // Update Markers (Pulse + highlight)
    markers.forEach(function (m, idx) {
        var pulse = document.getElementById('pulse-' + idx);
        if (pulse) {
            pulse.classList.toggle('active', idx === index);
        }
        var pin = document.getElementById('pin-' + idx);
        if (pin) {
            pin.classList.toggle('active-marker', idx === index);
        }
    });

    // Update Buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === journeyStops.length - 1;
}

function nextStop() {
    if (currentIndex < journeyStops.length - 1) {
        goToStop(currentIndex + 1);
    } else {
        stopAutoplay();
    }
}

function prevStop() {
    if (currentIndex > 0) {
        goToStop(currentIndex - 1);
    }
}

function toggleAutoplay() {
    if (isPlaying) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
}

function startAutoplay() {
    isPlaying = true;
    autoplayBtn.innerText = '⏸';
    autoplayBtn.classList.add('playing');
    playInterval = setInterval(nextStop, 5000);
}

function stopAutoplay() {
    isPlaying = false;
    autoplayBtn.innerText = '▶';
    autoplayBtn.classList.remove('playing');
    clearInterval(playInterval);
}

// Intro Overlay
var introOverlay = document.getElementById('intro-overlay');
var introBtn = document.getElementById('intro-btn');
introBtn.addEventListener('click', function () {
    introOverlay.classList.add('hidden');
});

// Sidebar Toggle
var infoHeader = document.querySelector('.info-header');
var appMain = document.querySelector('main');
var sidebarVisible = true;

// Desktop: clicking the info-header header does nothing (sidebar always visible on desktop)

// Mobile: tapping the collapsed sidebar header expands it
infoHeader.addEventListener('click', function (e) {
    // Only on mobile (sidebar is absolute positioned) and when collapsed
    if (window.innerWidth <= 768 && !sidebarVisible) {
        sidebarVisible = true;
        appMain.classList.remove('sidebar-collapsed');
    }
});

// Mobile: swipe up on collapsed sidebar expands it
var sidebarEl = document.getElementById('sidebar');
var sidebarTouchStartY = 0;
sidebarEl.addEventListener('touchstart', function (e) {
    sidebarTouchStartY = e.changedTouches[0].screenY;
}, { passive: true });
sidebarEl.addEventListener('touchmove', function (e) {
    if (window.innerWidth <= 768 && !sidebarVisible) {
        var dy = sidebarTouchStartY - e.changedTouches[0].screenY;
        if (dy > 30) {
            sidebarVisible = true;
            appMain.classList.remove('sidebar-collapsed');
        }
    }
}, { passive: true });

// Still Carousel
function showStill() {
    if (stillIndex < 0) stillIndex = 0;
    if (stillIndex >= stillImages.length) stillIndex = stillImages.length - 1;
    stillImg.src = stillImages[stillIndex];
    stillCaption.textContent = stillCaptions[stillIndex] || '';
    stillCounter.textContent = stillImages.length > 1 ? (stillIndex + 1) + ' / ' + stillImages.length : '';
    stillPrev.style.display = stillImages.length > 1 ? '' : 'none';
    stillNext.style.display = stillImages.length > 1 ? '' : 'none';
}
stillPrev.addEventListener('click', function () {
    stillIndex = (stillIndex - 1 + stillImages.length) % stillImages.length;
    showStill();
});
stillNext.addEventListener('click', function () {
    stillIndex = (stillIndex + 1) % stillImages.length;
    showStill();
});

// Touch swipe for carousel — simple translate with slide-out/in
(function() {
    var img = document.getElementById('still-img');
    var wrap = document.querySelector('.still-image-wrap');
    var startX = 0, currentX = 0, dragging = false;
    var threshold = 50;

    function go(direction) {
        // direction: -1 = next (left), 1 = prev (right)
        var outDir = direction === -1 ? '-' : '';
        var inDir = direction === -1 ? '' : '-';
        var newIdx = direction === -1 ? stillIndex + 1 : stillIndex - 1;
        if (newIdx < 0 || newIdx >= stillImages.length) {
            img.style.transition = 'transform 0.25s ease';
            img.style.transform = 'translateX(0)';
            return;
        }
        // Slide current out
        img.style.transition = 'transform 0.2s ease';
        img.style.transform = 'translateX(' + outDir + '100%)';
        setTimeout(function() {
            stillIndex = newIdx;
            showStill();
            // Position new image off-screen opposite side
            img.style.transition = 'none';
            img.style.transform = 'translateX(' + inDir + '100%)';
            void img.offsetWidth;
            img.style.transition = 'transform 0.25s ease';
            img.style.transform = 'translateX(0)';
        }, 220);
    }

    if (wrap) {
        wrap.addEventListener('touchstart', function(e) {
            if (stillImages.length <= 1) return;
            startX = e.touches[0].clientX;
            currentX = startX;
            dragging = true;
            img.style.transition = 'none';
        }, { passive: true });

        wrap.addEventListener('touchmove', function(e) {
            if (!dragging || stillImages.length <= 1) return;
            currentX = e.touches[0].clientX;
            var dx = currentX - startX;
            img.style.transform = 'translateX(' + dx + 'px)';
        }, { passive: true });

        wrap.addEventListener('touchend', function() {
            if (!dragging || stillImages.length <= 1) return;
            dragging = false;
            var dx = currentX - startX;
            if (dx < -threshold) {
                go(-1);
            } else if (dx > threshold) {
                go(1);
            } else {
                img.style.transition = 'transform 0.2s ease';
                img.style.transform = 'translateX(0)';
            }
            startX = 0;
            currentX = 0;
        }, { passive: true });
    }
})();

// Event Listeners
prevBtn.addEventListener('click', prevStop);
nextBtn.addEventListener('click', nextStop);
autoplayBtn.addEventListener('click', toggleAutoplay);

// Start
window.onload = init;
