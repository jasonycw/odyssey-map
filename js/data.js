const journeyStops = [
    {
        id: 'troy',
        name: 'Troy',
        coords: [39.96, 26.24],
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
        coords: [40.88, 25.57],
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
        sources: [
            'Homer, Odyssey, Book 9.39–61',
            'Euripides, Rhesus (Cicones as Thracian allies of Troy)',
            'Thucydides, History of the Peloponnesian War 7.29'
        ]
    },
    {
        id: 'lotus',
        name: 'Lotus Eaters',
        coords: [33.0, 13.0],
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
        coords: [37.5, 14.0],
        book: 'Odyssey Book 9',
        icon: '\u{1F441}\uFE0F',
        description: 'The most famous episode. Polyphemus, the one-eyed son of Poseidon, traps Odysseus and his men in his cave, devouring them two at a time. Odysseus gets the giant drunk, blinds him, and escapes hidden under sheep — but his pride costs him dearly when he shouts his real name as he sails away.',
        detail: 'This is the defining moment of the Odyssey. Odysseus introduces himself as "Nobody" to the Cyclops, executes a brilliant escape — and then ruins it by shouting his true name in victory. Polyphemus prays to his father Poseidon to curse Odysseus, and Poseidon obliges. Every subsequent hardship traces back to this moment of hubris. The episode is located on Sicily, near Mount Etna, in later tradition.',
        period: '~3 days (1 day trapped, 1 night of escape)',
        region: 'Sicily, near Mount Etna (modern Italy)',
        stats: {
            'Crew lost': '6 men devoured',
            'Ships remaining': '12',
            'Crew remaining': '~522 men',
            'Cave dimensions': 'Described as large enough for 600 sheep'
        },
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
        coords: [38.5, 14.5],
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
        coords: [41.0, 13.0],
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
        coords: [42.0, 11.5],
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
        coords: [37.0, -1.0],
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
        coords: [40.5, 14.3],
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
        coords: [38.2, 15.6],
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
        coords: [37.0, 15.0],
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
        coords: [35.9, 14.5],
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
        coords: [39.6, 19.9],
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
        coords: [38.4, 20.6],
        book: 'Odyssey Books 13–24',
        icon: '\u{1F3E0}',
        description: 'Home at last after 20 years. Odysseus arrives in disguise, aided by Athena. With his son Telemachus, he infiltrates his own palace, strings his great bow (which only he can), and slaughters the 108 suitors who have been consuming his wealth and pressing Penelope to remarry.',
        detail: 'Ithaca (Ithaki, Greece) is the destination — and also the real test. The hero who defeated monsters and resisted goddesses must now reclaim his household. The second half of the Odyssey (Books 13–24) is a domestic epic: a father and son fighting for their home. The restoration is violent but necessary. Athena herself intervenes to stop the cycle of revenge.',
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
