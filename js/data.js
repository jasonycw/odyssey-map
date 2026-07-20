const journeyStops = [
    {
        id: 'troy',
        name: 'Troy',
        coords: [39.957, 26.238],
        book: 'The Iliad / Odyssey Book 9 (backstory)',
        icon: '\u{1F3DB}\uFE0F',
        description: 'After ten years of war, the Greeks triumph through Odysseus\'s cunning Trojan Horse stratagem. He departs with 12 ships and 600 men, eager to return to Ithaca — unknowingly beginning a decade-long ordeal.',
        detail: 'Troy (modern Hisarlik, Turkey) was the stage for the Trojan War. Odysseus, King of Ithaca, was one of the war\'s greatest heroes — renowned not for brute strength but for his sharp mind and silver tongue. His invention of the Trojan Horse ended the war and sealed Troy\'s fate, but it also earned him the enmity of several gods who favored the city.',
        period: 'c. 1184 BCE (traditional fall of Troy)',
        region: 'Troas, Anatolia (modern Turkey)',
        stats: {
            'Crew': '600 men (12 ships × 50 crew)',
            'Duration': '10 years of war',
            'Distance from Ithaca': '~700 km (sailing route)'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BN2Y1YWNiMDYtYTA3Zi00ZjBlLThlNWUtMzkzNDNhMzFlMTI3XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYWZiMDAyZDItMWIzNC00YTRmLTlmZjEtMzUyZTcwNTZlZmViXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNjA1ZTg3NmItNDllNi00ZDljLWJmNTktMzRlYmU2NDJmMWRhXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYjZlOTNjNmQtZGMwMS00YzVmLTgyMGItNGVkNjdhMGMyZDZmXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BOWVlNzQ2NjktZjRmNy00ZjVlLTg5MDUtYTUxNmM5NGJlMzJmXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BN2ZhODhiYzAtZjNjMS00OTJlLWFjN2MtMWRlMzZmM2E3NzRkXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMjZmZjcwZTUtNjA2My00YzAzLWI2ZjQtZGJkNTY5YzFiYTFiXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BODI0ZDE0ZWMtYTc4Mi00ZjlhLTg2OTEtNzY5MTQwYzYyMTcxXkEyXkFqcGc@._V1',
            'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-odyssey/images/gallery/image4.jpg',
            'https://cdn.britannica.com/84/280884-050-21B963FD/Publicity-The-Odyssey-2026-Directed-By-Christopher-Nolan-Starring-Matt-Damon.jpg',
            'https://cdn.britannica.com/85/280885-050-1B83FBB3/The-Odyssey-2026-Directed-By-Christopher-Nolan-Starring-Matt-Damon-Odysseus.jpg',
            'https://m.media-amazon.com/images/M/MV5BZDA2YThhN2YtNGVkYi00MTYzLWJjNjEtYmI5ODFkZTgyNzQ1XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYjU2ODQ2MmItOTA1OC00NWNkLTk3Y2UtMjJjYzBhODk0ZjUyXkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'The Trojan Horse being pulled through the gates of Troy',
            'Greek warriors standing among the ruins of the fallen city',
            'Flames engulfing the city of Troy at night',
            'Greek soldiers advancing through the burning streets',
            'Survivors being led out of the devastated city',
            'Sinon bound and beaten after revealing the Trojan Horse',
            'Menelaus confronting Odysseus after the fall of Troy',
            'Grave markers dotting the battlefield outside the city walls',
            'Odysseus leading Greek troops through the conquered city',
            'Odysseus standing alone amid the wreckage of Troy',
            'Odysseus on the battlefield before departing for home',
            'Greek soldiers maneuvering the Trojan Horse into position',
            'The Greek generals planning the final assault on Troy'
        ],
        sources: [
            'Homer, Iliad, Books 1–24',
            'Homer, Odyssey, Book 8.499–520',
            'Virgil, Aeneid, Book 2',
            'Archaeology: Hisarlik, Troy VIIa layer',
            'Strabo, Geography, 13.1.25'
        ]
    },
    {
        id: 'cicones',
        name: 'Cicones (Ismarus)',
        coords: [40.874, 25.536],
        book: 'Odyssey Book 9',
        icon: '\u2694\uFE0F',
        description: 'The first stop after Troy. Odysseus sacks the city of Ismarus, but his men linger to feast and drink. The Cicones regroup and counterattack, killing six men from each ship — a costly lesson in discipline.',
        detail: 'This raid reveals a pattern that will repeat throughout the journey: Odysseus\'s men lack restraint. Despite his orders to leave quickly after taking supplies, they stay to celebrate. The counterattack costs 72 lives (six per ship). It\'s an early warning about the crew\'s fatal flaw — one they never truly overcome.',
        period: 'First month after departure',
        region: 'Thrace, northern Aegean (modern Greece)',
        stats: {
            'Crew lost': '72 men (6 per ship)',
            'Ships remaining': '12',
            'Crew remaining': '~528 men',
            'Distance from Troy': '~180 km NE'
        },
        movieImg: [],
        movieImgCaption: [],
        sources: [
            'Homer, Odyssey, Book 9.39–61',
            'Euripides, Rhesus (Cicones as Thracian allies of Troy)',
            'Thucydides, History of the Peloponnesian War 7.29'
        ]
    },
    {
        id: 'lotus',
        name: 'Lotus Eaters',
        coords: [33.867, 10.850],
        book: 'Odyssey Book 9',
        icon: '\u{1F338}',
        description: 'A peaceful people whose lotus fruit induces blissful forgetfulness. The men who eat it lose all desire to return home. Odysseus drags them back to the ships by force, tied to their benches.',
        detail: 'The Lotus Eaters (likely Djerba Island, off modern Tunisia) represent the temptation of escape — a drug-induced paradise where all ambition dissolves. The lotus isn\'t dangerous in itself, but it erases identity and purpose. Odysseus\'s forceful rescue of his men shows his unwavering commitment to home, even when his crew doesn\'t share it.',
        period: '~7–10 days',
        region: 'North African coast (modern Tunisia/Djerba)',
        stats: {
            'Crew lost': '0 (recovered by force)',
            'Ships remaining': '12',
            'Crew remaining': '~528 men',
            'Distance from Cicones': '~1,200 km SW'
        },
        sources: [
            'Homer, Odyssey, Book 9.82–104',
            'Herodotus, Histories, 4.177 (identification)',
            'Pliny the Elder, Natural History, 5.4',
            'Strabo, Geography, 1.2.15'
        ]
    },
    {
        id: 'cyclops',
        name: 'Cyclops (Polyphemus)',
        coords: [37.563, 15.162],
        book: 'Odyssey Book 9',
        icon: '\u{1F441}\uFE0F',
        description: 'The most famous episode. Polyphemus, the one-eyed son of Poseidon, traps Odysseus and his men in his cave, devouring them two at a time. Odysseus gets the giant drunk, blinds him, and escapes hidden under sheep — but his pride costs him dearly when he shouts his real name as he sails away.',
        detail: 'This is the defining moment of the Odyssey. Odysseus introduces himself as "Nobody" to the Cyclops, executes a brilliant escape — and then ruins it by shouting his true name in victory. Polyphemus prays to his father Poseidon to curse Odysseus, and Poseidon obliges. Every subsequent hardship traces back to this moment of hubris. The episode is traditionally located on the eastern coast of Sicily (Aci Castello/Aci Trezza area), near Mount Etna.',
        period: '~3 days (1 day trapped, 1 night of escape)',
        region: 'Sicily, near Mount Etna (modern Italy)',
        stats: {
            'Crew lost': '6 men devoured',
            'Ships remaining': '12',
            'Crew remaining': '~522 men',
            'Cave dimensions': 'Described as large enough for 600 sheep'
        },
        movieImg: [
            'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-odyssey/images/gallery/image6.jpg',
            'https://m.media-amazon.com/images/M/MV5BYTY2MTE0MGEtMmE0My00ZWRiLWJlMzMtYzYyNDYyMDMwYzhhXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNzE5YTNlOWMtMTUxNy00NWUyLTg4YTMtNTJjZDAwY2NiNDUxXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMWY3NzdmY2UtNTliZC00MGZiLTk4ZjQtYTBiZDdiOGU1NGI5XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BZTkyNzM2ZjAtNGNjYy00M2Y4LTk1MDMtMTYzOGU2MzY2M2E2XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BZDFkODQ2NzUtZGZlZi00YjA0LWE5NTktZTI1NTA0NmFkZGFiXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNGFjN2M1OTQtMzBjNC00YWUxLWIxMGYtNzNhY2IzYzEyZDBmXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYzI0NjZhMWYtYzc0YS00ZjUyLWIwZGYtZGRlYTY2ODdlNWY5XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNjVhNWVhNzItYTVkMi00NzVjLTlkMDQtYjYwMDBmODU4NjM5XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNGYyYmU5OWQtZDI4OC00NzMwLWE2ODUtMzMxNmIzNDY4MTI4XkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Odysseus approaching the entrance of the Cyclops\' cave',
            'The Cyclops Polyphemus inside his cave with the sheep',
            'Polyphemus blocking the cave entrance with a boulder',
            'Odysseus offering wine to the drunken Polyphemus',
            'Polyphemus collapsing in a drunken stupor',
            'Odysseus and his men sharpening the stake to blind the Cyclops',
            'Odysseus driving the heated stake into Polyphemus\'s eye',
            'The blinded Polyphemus groping in agony inside the cave',
            'Odysseus and his men escaping under the bellies of sheep',
            'Odysseus shouting his name from the ship as Polyphemus hurls rocks'
        ],
        sources: [
            'Homer, Odyssey, Book 9.105–566',
            'Euripides, Cyclops (satyr play)',
            'Ovid, Metamorphoses, Book 13.738–897',
            'Virgil, Aeneid, Book 3.613–683',
            'Strabo, Geography, 1.2.9'
        ]
    },
    {
        id: 'aeolus',
        name: 'Aeolus (Aeolian Islands)',
        coords: [38.467, 14.954],
        book: 'Odyssey Book 10',
        icon: '\u{1F32C}\uFE0F',
        description: 'The wind god Aeolus gives Odysseus a leather bag containing all adverse winds, allowing him to sail straight home. Within sight of Ithaca, his greedy crew opens the bag, thinking it holds treasure. The winds burst out, driving them all the way back to Aeolus — who refuses to help a second time.',
        detail: 'The island of Aeolia (Lipari, north of Sicily) was ruled by Aeolus, keeper of the winds. The bag was a gift of unbelievable generosity — Odysseus was so close to home he could see the smoke from his own palace. The crew\'s greed and distrust cost them everything. Aeolus\'s refusal to help again is devastating: "Begone. The gods hate you."',
        period: '1 month as guest + 9 days sailing + 1 day blown back',
        region: 'Aeolian Islands (Lipari, modern Italy)',
        stats: {
            'Crew lost': '0',
            'Ships remaining': '12',
            'Crew remaining': '~522 men',
            'Distance covered': '~1,300 km (to Ithaca and back)',
            'Close to home': 'Within sight of Ithaca\'s smoke'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BNDE5NDU4OTctNWI1OC00MjYwLWJmNGEtMzM1OTYyMGU4MzAwXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BODViMWM3N2YtYWFiYy00OWU5LThmYWYtMmEwOTI5ZDMyNDViXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMzJmODU5ZTktZjAxZC00YTc1LTlhMDgtYjc5NWZiMjUzNDMxXkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Odysseus\'s crew rowing toward the island of Aeolia in rough seas',
            'The fortress of Aeolus rising above the Aeolian Islands',
            'Aeolus presenting the bag of winds to Odysseus at his palace'
        ],
        sources: [
            'Homer, Odyssey, Book 10.1–79',
            'Strabo, Geography, 6.2.10 (Lipari)',
            'Diodorus Siculus, Library of History, 5.7',
            'Pliny the Elder, Natural History, 3.92'
        ]
    },
    {
        id: 'laestrygonians',
        name: 'Laestrygonians',
        coords: [41.256, 13.608],
        book: 'Odyssey Book 10',
        icon: '\u{1FAA8}',
        description: 'Giant cannibals who destroy eleven of Odysseus\'s twelve ships. The fleet sails into a protected harbor — a deadly trap. The Laestrygonians hurl massive boulders, smashing the ships and devouring the crews. Only Odysseus\'s ship survives, moored outside the harbor.',
        detail: 'This is the single greatest catastrophe of the journey. 11 ships and perhaps 500 men are lost in a single day. Odysseus survives only because he sensed danger and kept his ship outside the narrow harbor entrance. The location is traditionally identified as Formia, Italy, or the mountainous coast of Sardinia.',
        period: '~1 day (the massacre)',
        region: 'Formia / Terracina coast, Latium (modern Italy) or Sardinia',
        stats: {
            'Crew lost': '~500 men (11 ships destroyed)',
            'Ships remaining': '1',
            'Crew remaining': '~42–50 men',
            'Ships destroyed': '11 of 12',
            'Death toll': 'Highest single-day loss of the journey'
        },
        movieImg: [
            'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-odyssey/images/gallery/image_giants.jpg',
            'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-odyssey/images/gallery/image5.jpg',
            'https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-odyssey/images/gallery/image7.jpg',
            'https://m.media-amazon.com/images/M/MV5BNGQ4MDU1ZWMtM2JlOS00ZmI5LTllZmEtODVkYmU3ZDNiMzUzXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMzJlYWFlOWYtNGRiYi00YTk0LTg4ZDAtZTFhZjA0NWEyNjJkXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMGQ3ZjcxNjYtZmE4ZS00NDM0LWI2MGItYTgzYTM1MjQ5YzQwXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMDQwMDFlZWQtMDQyMy00OTgyLTkyZDctM2Q4NTA1ZThlMTg5XkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'The Laestrygonian giants attacking Odysseus\'s fleet with boulders',
            'Odysseus drawing his sword against the giant cannibals',
            'Crew members fighting desperately against the Laestrygonians',
            'The Laestrygonians hurling rocks from the cliffs onto the ships',
            'Giant Laestrygonian figures standing atop the harbor cliffs',
            'Shattered ships sinking in the harbor as giants attack',
            'Odysseus\'s lone ship escaping the harbor while the others burn'
        ],
        sources: [
            'Homer, Odyssey, Book 10.80–132',
            'Strabo, Geography, 5.3.6 (Formia)',
            'Pliny the Elder, Natural History, 3.59',
            'Cicero, Letters to Atticus, 2.13'
        ]
    },
    {
        id: 'circe',
        name: 'Circe (Aeaea)',
        coords: [41.233, 13.100],
        book: 'Odyssey Books 10–12',
        icon: '\u{1F437}',
        description: 'The enchantress Circe turns Odysseus\'s scouting party into pigs. Protected by the herb moly (given by Hermes), Odysseus forces her to restore his men. He remains on her island for a year as her lover, and she becomes his most valuable advisor.',
        detail: 'Circe\'s island (Mount Circeo, Italy) represents both temptation and transformation. Odysseus\'s year with her is the longest single stop of his journey. She gives him the knowledge he needs to survive everything that follows: how to consult Tiresias in Hades, how to resist the Sirens, how to navigate Scylla and Charybdis.',
        period: '12 months (1 year)',
        region: 'Mount Circeo, Latium (modern Italy)',
        stats: {
            'Crew lost': '0 (pigs restored)',
            'Ships remaining': '1',
            'Crew remaining': '~42–50 men',
            'Duration': 'Longest single stop of the journey',
            'Moly herb': 'White flower with black root, given by Hermes'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BNDhiMWZiYzEtYWI1My00OTgxLTg1MTEtZTg0YzdiZDYzYjdjXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BZTBjNzRiNTgtOTIwNi00NzA1LWFjY2MtZDdkZTJlZDhlYTljXkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Circe\'s island of Aeaea shrouded in mist',
            'Circe standing at the entrance of her palace'
        ],
        sources: [
            'Homer, Odyssey, Book 10.133–574',
            'Homer, Odyssey, Book 10.575–11.50 (Underworld preparation)',
            'Homer, Odyssey, Book 12.1–152 (advice for dangers ahead)',
            'Ovid, Metamorphoses, Book 14.242–319',
            'Strabo, Geography, 5.3.6 (Circeo)',
            'Pliny the Elder, Natural History, 25.14 (moly)'
        ]
    },
    {
        id: 'underworld',
        name: 'The Underworld (Hades)',
        coords: [40.840, 14.070],
        book: 'Odyssey Book 11',
        icon: '\u{1F480}',
        description: 'Odysseus travels to the land of the dead to consult the prophet Tiresias. He encounters the shades of his mother, his fallen comrades, and the great heroes of the Trojan War — including Achilles, who says he would rather be a living slave than king of all the dead.',
        detail: 'Book 11, the Nekyia, is the emotional and philosophical heart of the Odyssey. Tiresias warns Odysseus about the Cattle of Helios and prophesies his eventual peaceful death in old age. Odysseus speaks with his mother Anticleia, who died of grief waiting for him. The Underworld teaches Odysseus what mortality means.',
        period: '~1 day and night',
        region: 'Traditionally near Lake Averno, Campania (Italy) or Tartessos, Spain',
        stats: {
            'Crew lost': '0 (but Elpenor died at Circe\'s)',
            'Ships remaining': '1',
            'Crew remaining': '~42–50 men',
            'Dead encountered': 'Elpenor, Tiresias, Anticleia, Achilles, Agamemnon, Ajax, Minos, Orion, Tantalus, Sisyphus, Heracles'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BMjBlYTBkZGUtOGUwMC00MDI5LWFhZjQtMzhkMzNhNjFjMGIxXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYzFjZmZjYzEtYWFkZS00OGVkLWEwMTAtM2FlMWZhNWRkZjkwXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYjVlNDQxNTUtZDExOS00NzY5LWEzOTktZGJiNDcyNTIxYjg4XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYjYxZGExYjktYmI3OS00ZTliLTk3ZTItOThlMzBkMTBkNTEyXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMjQ0ODM2NmYtZGZkZC00NWUzLTllZTMtNzdlMDRmYmJkNmIzXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BY2FhN2RlYTQtODc0MC00ODM5LTgyYzctZmQxYzQ3MDMwMDY0XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYjJlZmM3YzMtZGUxNy00Y2Q4LThiN2MtYmVkOTlhZTk3MzQ3XkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Odysseus\'s boat sailing toward the misty shores of the Underworld',
            'Odysseus preparing to enter the realm of the dead',
            'The king of the dead enthroned in the Underworld',
            'Souls of the dead gathered at the entrance to Hades',
            'Odysseus among the shades of the departed heroes',
            'The dark river Styx winding through the Underworld',
            'The prophet Tiresias appearing to Odysseus in the Underworld'
        ],
        sources: [
            'Homer, Odyssey, Book 11.1–640',
            'Cicero, Tusculan Disputations, 1.16',
            'Virgil, Aeneid, Book 6',
            'Dante, Inferno (structural inspiration)',
            'Strabo, Geography, 5.4.5 (Lake Averno)'
        ]
    },
    {
        id: 'sirens',
        name: 'The Sirens',
        coords: [40.584, 14.443],
        book: 'Odyssey Book 12',
        icon: '\u{1F3B5}',
        description: 'Creatures whose enchanting song promises knowledge of all things — but lures sailors to their deaths on the rocks. Odysseus orders his crew to plug their ears with wax and tie him to the mast. He becomes the only mortal to hear the Sirens\' song and survive.',
        detail: 'The Sirens (the Galli Islands, off Italy\'s Amalfi Coast) sing of omniscience. Odysseus\'s choice to hear their song while physically restrained is a paradox — he satisfies his boundless curiosity while acknowledging his limits.',
        period: '~1 afternoon',
        region: 'Galli Islands, Amalfi Coast, Campania (modern Italy)',
        stats: {
            'Crew lost': '0',
            'Ships remaining': '1',
            'Crew remaining': '~42–50 men',
            'Method': 'Ears plugged with wax, Odysseus tied to mast'
        },
        sources: [
            'Homer, Odyssey, Book 12.153–200',
            'Apollodorus, Library, Epitome 7.18–19',
            'Ovid, Metamorphoses, Book 5.551–563',
            'Pliny the Elder, Natural History, 10.136',
            'Strabo, Geography, 1.2.12'
        ]
    },
    {
        id: 'scylla',
        name: 'Scylla & Charybdis',
        coords: [38.250, 15.717],
        book: 'Odyssey Book 12',
        icon: '\u{1F30A}',
        description: 'A six-headed monster (Scylla) and a whirlpool (Charybdis) flanking a narrow strait. Circe advised Odysseus to steer toward Scylla, losing six men, rather than risk Charybdis destroying the entire ship. Six men are snatched from the deck and devoured alive.',
        detail: 'The Strait of Messina (between Italy and Sicily) is the real-world location. Odysseus chooses the lesser evil, but he must live with the screams of his dying men — men who didn\'t know what he had chosen for them. This is leadership at its most brutal and lonely.',
        period: '~1 hour (the passage)',
        region: 'Strait of Messina between Calabria and Sicily (modern Italy)',
        stats: {
            'Crew lost': '6 men (one per head of Scylla)',
            'Ships remaining': '1',
            'Crew remaining': '~36–44 men',
            'Charybdis cycle': 'Thrice daily whirlpool',
            'Scylla\'s reach': 'Six heads from sea-level cave'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BM2RkMDA0OGItZGYwMi00OWNjLWJiNGMtMDg4MzFkMzVjNTg1XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BZDE1NTBkMDYtYmViZS00ODQxLWJjZWQtNmVkMjczMWJiN2ZmXkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Navigating the narrow strait between Scylla\'s cliff and Charybdis\'s whirlpool',
            'Odysseus steering the ship past the jagged rocks of the strait'
        ],
        sources: [
            'Homer, Odyssey, Book 12.201–259',
            'Homer, Odyssey, Book 12.260–420',
            'Ovid, Metamorphoses, Book 13.730–739',
            'Strabo, Geography, 6.2.11',
            'Thucydides, History of the Peloponnesian War, 4.24',
            'Pliny the Elder, Natural History, 3.73'
        ]
    },
    {
        id: 'thrinacia',
        name: 'Thrinacia (Cattle of Helios)',
        coords: [37.100, 15.250],
        book: 'Odyssey Book 12',
        icon: '\u{1F402}',
        description: 'The sun god\'s sacred island. Despite being warned by both Tiresias and Circe, Odysseus\'s starving men slaughter and eat Helios\'s cattle while he sleeps. Helios demands vengeance. Zeus destroys their ship with a thunderbolt. Odysseus alone survives, clinging to wreckage.',
        detail: 'Thrinacia (Sicily) is where Odysseus\'s journey as a captain ends. Every warning pointed to this moment: touch the cattle and lose everything. The thunderbolt from Zeus is the cosmic consequence. He loses his ship, his crew, his status — everything except his will to live and return home.',
        period: '1 month (trapped by adverse winds)',
        region: 'Sicily (modern Italy)',
        stats: {
            'Crew lost': 'All remaining ~36–44 men',
            'Ships remaining': '0 (destroyed by thunderbolt)',
            'Crew remaining': '1 (Odysseus alone)',
            'Days adrift': '9 days on makeshift raft',
            'Cattle of Helios': '7 herds of 50 (350 cattle total)'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BNmQyYzM0ZTgtZWJhMC00ODNhLThlMmQtZGZlZjIwZGIwYTMzXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNjM4ODdlZTItMTM2Zi00OTQ2LWEwMTUtYjU5YTUwZmNiZWE4XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BOGZiYmJjZmYtZDNlMy00NGEwLTk5ZGMtZjBiMDg5ZGFhNDY3XkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'The sacred Cattle of Helios grazing on the fields of Thrinacia',
            'Zeus\'s thunderbolt striking Odysseus\'s ship, shattering the hull',
            'Odysseus washed ashore after the shipwreck, alone and devastated'
        ],
        sources: [
            'Homer, Odyssey, Book 12.260–453',
            'Hesiod, Theogony, 956–962',
            'Apollodorus, Library, Epitome 7.22',
            'Ovid, Metamorphoses, Book 14.441–444',
            'Servius, Commentary on Virgil\'s Aeneid, 1.34'
        ]
    },
    {
        id: 'calypso',
        name: 'Calypso (Ogygia)',
        coords: [36.050, 14.250],
        book: 'Odyssey Books 1, 5',
        icon: '\u{1F3DD}\uFE0F',
        description: 'The nymph Calypso holds Odysseus captive on her island for seven years, offering him immortality and eternal youth if he stays. But Odysseus sits on the shore every day, gazing at the sea, weeping for home. Zeus finally sends Hermes to order his release.',
        detail: 'Ogygia (traditionally identified with Malta or Gozo) is a paradise, but it is not Ithaca. Calypso offers Odysseus everything a man could want — except what he actually wants. Her name means "the concealer." His daily tears on the shore define him: he chooses mortality with his family over immortality without them.',
        period: '7 years',
        region: 'Ogygia — traditionally Malta or Gozo',
        stats: {
            'Crew lost': '0 (alone since Thrinacia)',
            'Ships remaining': '0',
            'Crew remaining': '1 (Odysseus)',
            'Duration': 'Longest single location of the epic',
            'Immortality offered': 'Yes — refused by Odysseus',
            'Craft built': 'Raft of 20 trees (oak, pine, alder, poplar, fir)'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BMzM0Nzc5OTgtN2YxMC00MzM0LTkwNDYtZGQ2ODFlMjhmZTM4XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BYjZjZjg1YjUtMWUzNi00ZDBiLWE5MDctM2NiNzcwZmRmNWY5XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BY2I0NGNmM2QtOGE0Yi00YTIzLThlNWEtNmZhNDM3NmE0ZjBiXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BZjdmYWYwYjgtYmZiMS00N2QzLTllOTQtODI0ZjgzYjQzMDllXkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Calypso gazing out over the sea from her island of Ogygia',
            'The lush shores and caves of Calypso\'s island paradise',
            'Calypso approaching Odysseus on the beach of Ogygia',
            'Odysseus sitting alone on the shore, longing for Ithaca'
        ],
        sources: [
            'Homer, Odyssey, Book 1.11–21',
            'Homer, Odyssey, Book 5.1–269',
            'Homer, Odyssey, Book 5.270–493',
            'Hesiod, Theogony, 359',
            'Strabo, Geography, 1.2.15',
            'Plutarch, Moralia, 941B (Gozo)'
        ]
    },
    {
        id: 'phaeacia',
        name: 'Phaeacia (Scheria)',
        coords: [39.620, 19.920],
        book: 'Odyssey Books 6–8, 13',
        icon: '\u26F5',
        description: 'Shipwrecked and exhausted, Odysseus washes ashore on Scheria, home of the Phaeacians — master seafarers. He is welcomed by Princess Nausicaa and King Alcinous. At a great feast, he reveals his identity and narrates his entire journey (Books 9–12). The Phaeacians carry him home to Ithaca in a magical ship while he sleeps.',
        detail: 'Scheria (Corfu, Greece) represents the ideal civilization — prosperous, hospitable, and generous. The Phaeacians honor xenia (guest-friendship) above all. Odysseus\'s storytelling here is the pinnacle of his fame: he becomes the singer of his own epic. But their kindness costs them — Poseidon turns their ship to stone and walls off their harbor forever.',
        period: '~3–4 days',
        region: 'Scheria — Corfu, Ionian Islands (modern Greece)',
        stats: {
            'Crew lost': '0',
            'Ships remaining': '0 (Phaeacian ship)',
            'Crew remaining': '1 (Odysseus)',
            'Gifts received': 'Bronze, gold, robes, food, wine',
            'Phaeacian ship': 'Magical — self-navigating, thought-reading'
        },
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BNDE5YjVmZDktMzcxMi00MjQ2LWExOTQtZTMxYjFlMmZhZTg0XkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Odysseus meeting Athena in disguise on the shores of Scheria'
        ],
        sources: [
            'Homer, Odyssey, Book 6.1–331 (Nausicaa)',
            'Homer, Odyssey, Book 7.1–347 (Alcinous)',
            'Homer, Odyssey, Book 8.1–586 (games)',
            'Homer, Odyssey, Book 13.1–187 (departure)',
            'Thucydides, History, 1.25 (Corcyra/Corfu)',
            'Strabo, Geography, 7.3.6'
        ]
    },
    {
        id: 'ithaca',
        name: 'Ithaca',
        coords: [38.370, 20.720],
        book: 'Odyssey Books 13–24',
        icon: '\u{1F3E0}',
        description: 'Home at last after 20 years. Odysseus arrives in disguise, aided by Athena. With his son Telemachus, he infiltrates his own palace, strings his great bow (which only he can), and slaughters the 108 suitors who have been consuming his wealth and pressing Penelope to remarry.',
        detail: 'Ithaca (Ithaki, Greece) is the destination — and also the real test. The hero who defeated monsters and resisted goddesses must now reclaim his household. The second half of the Odyssey (Books 13–24) is a domestic epic: a father and son fighting for their home. The restoration is violent but necessary. Athena herself intervenes to stop the cycle of revenge.',
        movieImg: [
            'https://m.media-amazon.com/images/M/MV5BNjZhM2Q5NWYtZWY2Ni00ZmQ4LTgzOGEtMWI4MmM1Yzk1YWJhXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BOTlkNGQ0MWMtOGQyMC00MWJlLWI5NDItMDM4MmVhZWRiZjA4XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNGQzYWI3NzYtZGQ4NC00M2UwLWJiYjItMGJlYTc4M2IyYWFkXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNTUzNzAxYjQtODczNi00MzFlLWE5NTYtYTY4MGNlOWI5Mzc5XkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMjM4OWNiNzUtY2YzNS00NjIxLWFlZDYtNGUxNTdmMjQwYTIzXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNGNlZjY1NGMtNmNkNS00ZWJlLTg5NjMtYzNjYWQyNGM3MzVjXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BNTQwNjEwNjktNzVkNi00NzM2LTk4MmUtZWU1MWNiYTljNmVmXkEyXkFqcGc@._V1',
            'https://m.media-amazon.com/images/M/MV5BMmIwN2Q5YjctODI3NS00OTM1LWI5ZTEtOGFlZWVkNzMxZWMyXkEyXkFqcGc@._V1'
        ],
        movieImgCaption: [
            'Telemachus standing in the palace of Ithaca, awaiting his father\'s return',
            'The palace of Ithaca preparing for the suitors\' feast',
            'The church of Ithaca on the hillside overlooking the sea',
            'Telemachus welcoming the disguised Odysseus to the palace',
            'Odysseus walking through the rugged terrain of Ithaca',
            'Odysseus hiking the rocky paths of Ithaca toward the palace',
            'The ruins of the palace courtyard in Ithaca',
            'The great hall of the palace where Odysseus will confront the suitors'
        ],
        period: 'c. 1164 BCE (20 years after departure)',
        region: 'Ithaki, Ionian Islands (modern Greece)',
        stats: {
            'Crew lost': '600 (all original crew)',
            'Ships remaining': '0',
            'Crew remaining': '0',
            'Suitors killed': '108',
            'Faithful servants': 'Eumaeus, Philoetius, Eurycleia',
            'Total journey': '20 years (10 war + 10 voyage)'
        },
        sources: [
            'Homer, Odyssey, Books 13–24',
            'Homer, Odyssey, Book 21.1–434 (the bow)',
            'Homer, Odyssey, Book 22.1–501 (the slaughter)',
            'Homer, Odyssey, Book 23.1–348 (reunion)',
            'Homer, Odyssey, Book 24.1–548 (peace)',
            'Ovid, Heroides, 1',
            'Strabo, Geography, 10.2.10',
            'Pausanias, Description of Greece, 8.14.5–6'
        ]
    }
];
