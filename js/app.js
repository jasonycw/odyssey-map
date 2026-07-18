let currentIndex = 0;
let isPlaying = false;
let playInterval = null;

// State
const markers = [];
let pathLine = null;

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
const timelineScroll = document.getElementById('timeline-scroll');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const autoplayBtn = document.getElementById('autoplay-btn');

// Custom Marker Function
function createCustomMarker(stop, index) {
    const icon = L.divIcon({
        className: 'marker-container',
        html: [
            '<div class="marker-pulse" id="pulse-' + index + '"></div>',
            '<div class="marker-circle">' + stop.icon + '</div>'
        ].join(''),
        iconSize: [32, 32],
        iconAnchor: [16, 16]
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
        color: '#d4a84b',
        weight: 4,
        opacity: 0.7,
        dashArray: '10, 10',
        lineJoin: 'round'
    }).addTo(map);

    // Animate Path on Load
    animatePath(latlngs);

    // Initial State
    goToStop(0);
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
            // Finalize path with glow effect
            pathLine.setStyle({ dashArray: null, weight: 5, opacity: 1 });
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

    // Update Markers (Pulse effect)
    markers.forEach(function (m, idx) {
        var pulse = document.getElementById('pulse-' + idx);
        if (pulse) {
            pulse.style.display = (idx === index) ? 'block' : 'none';
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
var sidebarToggle = document.getElementById('sidebar-toggle');
var appMain = document.querySelector('main');
var sidebarVisible = true;

sidebarToggle.addEventListener('click', function () {
    sidebarVisible = !sidebarVisible;
    appMain.classList.toggle('sidebar-collapsed', !sidebarVisible);
    sidebarToggle.innerText = sidebarVisible ? '☰' : '☷';
});

// Event Listeners
prevBtn.addEventListener('click', prevStop);
nextBtn.addEventListener('click', nextStop);
autoplayBtn.addEventListener('click', toggleAutoplay);

// Start
window.onload = init;
