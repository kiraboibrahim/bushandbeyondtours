"use client";
import { useState } from 'react';

const EightDaysSafari = () => {
    const [activeDay, setActiveDay] = useState(1);

    const itinerary = [
        {
            day: 1,
            title: "Arrival in Entebbe",
            location: "Entebbe International Airport",
            accommodation: "Lake Victoria Serena Golf Resort",
            description: "Welcome to Uganda! Upon arrival at Entebbe International Airport, your TripTonic Safaris guide will be waiting to greet you. Transfer to your luxury lakeside resort on the shores of Lake Victoria, Africa's largest lake. Depending on your arrival time, relax by the pool, enjoy the beautiful gardens, or take a sunset boat cruise on the lake. Join us for a welcome dinner and briefing about your upcoming adventure through the Pearl of Africa.",
            highlights: ["VIP airport meet & greet", "Lake Victoria resort", "Optional sunset boat cruise", "Welcome dinner & briefing"]
        },
        {
            day: 2,
            title: "Transfer to Kibale Forest",
            location: "Entebbe → Fort Portal → Kibale",
            accommodation: "Primate Lodge Kibale",
            description: "Depart early morning for the scenic drive to Kibale Forest National Park, the Primate Capital of the World. The 5-6 hour journey takes you through the heart of Uganda, passing fertile farmlands, crater lakes, and arriving in Fort Portal with its stunning backdrop of the Rwenzori Mountains. Stop at the 'Top of the World' viewpoint for panoramic crater lake views. Continue to your forest lodge, nestled within the ancient rainforest. Evening at leisure with sounds of the jungle as your soundtrack.",
            highlights: ["Scenic western route", "Crater lake viewpoints", "Rwenzori Mountain views", "Forest lodge check-in"]
        },
        {
            day: 3,
            title: "Chimpanzee Tracking & Bigodi Swamp",
            location: "Kibale Forest National Park",
            accommodation: "Primate Lodge Kibale",
            description: "The highlight of Kibale awaits! After breakfast, head to park headquarters for your chimpanzee tracking briefing. Enter the ancient rainforest with expert guides, tracking the habituated chimp communities. The forest is home to 13 primate species and over 370 bird species. Once you find the chimps, enjoy one hour observing their fascinating behaviors. Afternoon, visit the community-run Bigodi Wetland Sanctuary – a birder's paradise with excellent chances of seeing grey-cheeked mangabey, red colobus, and numerous bird species.",
            highlights: ["Chimpanzee tracking", "13 primate species", "Bigodi Swamp walk", "Community conservation"]
        },
        {
            day: 4,
            title: "Queen Elizabeth National Park",
            location: "Kibale → Queen Elizabeth NP",
            accommodation: "Mweya Safari Lodge",
            description: "After breakfast, drive south to Queen Elizabeth National Park, Uganda's most popular savannah park. Check into your lodge perched on the Mweya Peninsula with stunning views over the Kazinga Channel. After lunch, embark on the famous Kazinga Channel boat cruise – a 2-hour journey past hippos, crocodiles, elephants, buffaloes, and an incredible variety of waterbirds. Watch the African sunset paint the sky as you return to your lodge for dinner.",
            highlights: ["Savannah landscapes", "Mweya Peninsula views", "Kazinga Channel cruise", "Hippos & elephants"]
        },
        {
            day: 5,
            title: "Game Drives & Transfer to Bwindi",
            location: "Queen Elizabeth NP → Ishasha → Bwindi",
            accommodation: "Buhoma Lodge",
            description: "Early morning game drive through the Kasenyi Plains in search of lions, leopards, elephants, Uganda kob, and buffaloes. After breakfast, drive south through the Ishasha sector, famous for tree-climbing lions. Stop for game viewing and picnic lunch, scanning the fig trees for these unique big cats. Continue through stunning mountain scenery to Bwindi Impenetrable Forest. Arrive at your lodge surrounded by the ancient forest, home to mountain gorillas. Evening briefing about tomorrow's gorilla trek.",
            highlights: ["Early morning game drive", "Big Five wildlife", "Tree-climbing lions", "Mountain scenery"]
        },
        {
            day: 6,
            title: "Mountain Gorilla Tracking",
            location: "Bwindi Impenetrable Forest",
            accommodation: "Buhoma Lodge",
            description: "Today's experience will stay with you forever – mountain gorilla tracking! After breakfast, head to park headquarters for registration. You'll be assigned to a gorilla family in groups of 8 with an experienced guide. The trek through dense vegetation can take 2-8 hours. Upon finding your gorilla family, spend one magical hour in their presence – watching silverbacks, playful juveniles, and caring mothers. This intimate encounter with our closest relatives is truly life-changing. Return to the lodge for celebration dinner.",
            highlights: ["Gorilla tracking experience", "1 hour with gorillas", "Silverback encounters", "Celebration dinner"]
        },
        {
            day: 7,
            title: "Bwindi to Lake Mburo",
            location: "Bwindi → Lake Mburo National Park",
            accommodation: "Mihingo Lodge",
            description: "Bid farewell to Bwindi and head to Lake Mburo National Park, Uganda's hidden gem. En-route, stop at Igongo Cultural Centre to learn about the fascinating culture of the Ankole people and enjoy lunch. Arrive at your luxury eco-lodge in the afternoon. Lake Mburo is special for being the only park in Uganda where you can walk, cycle, and do night drives. This evening, venture out on a night game drive in an open vehicle with spotlight, searching for leopards, hyenas, and other nocturnal creatures.",
            highlights: ["Cultural center visit", "Lake Mburo arrival", "Luxury eco-lodge", "Night game drive"]
        },
        {
            day: 8,
            title: "Bush Walk & Departure",
            location: "Lake Mburo → Equator → Entebbe",
            accommodation: "End of Safari",
            description: "Start your final day with an early morning guided bush walk – a unique chance to experience the African bush on foot alongside zebras, impalas, and elands. Return for breakfast, then check out and begin your journey to Entebbe. Stop at the Uganda Equator for the famous water experiment, photos, and final souvenir shopping. Enjoy lunch en-route before arriving at Entebbe Airport in the afternoon for your departure flight. Farewell from TripTonic Safaris – until next time!",
            highlights: ["Guided bush walk", "Walking with wildlife", "Equator experience", "Airport transfer"]
        }
    ];

    const includes = [
        "All airport transfers & ground transport",
        "Professional English-speaking guide throughout",
        "7 nights quality accommodation (full board)",
        "1 Gorilla tracking permit (US$800 value)",
        "1 Chimpanzee tracking permit",
        "Kazinga Channel boat cruise",
        "Night game drive at Lake Mburo",
        "Guided bush walk",
        "Bigodi Swamp Walk",
        "All park entrance fees",
        "Bottled water during safari",
        "All meals as per itinerary"
    ];

    const excludes = [
        "International flights",
        "Comprehensive travel insurance",
        "Uganda tourist visa",
        "Personal expenses & shopping",
        "Tips and gratuities",
        "Alcoholic beverages",
        "Optional activities not mentioned",
        "Laundry services",
        "Premium room upgrades"
    ];

    const locations = ["Entebbe", "Kibale Forest", "Queen Elizabeth", "Bwindi Forest", "Lake Mburo"];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-96 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">BEST SELLER</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">TripTonic Safaris</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">8 Day Ultimate Uganda Safari</h1>
                    <p className="text-gray-300 max-w-2xl mb-6">The complete Uganda experience – primates, wildlife, and culture</p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                        {locations.map((loc, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur px-3 py-1 rounded-full">{loc}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Stats Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 mb-8">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                        {[
                            { num: "8", label: "Days" },
                            { num: "7", label: "Nights" },
                            { num: "4", label: "Parks" },
                            { num: "1", label: "Gorilla Trek" },
                            { num: "1", label: "Chimp Trek" },
                            { num: "3", label: "Game Drives" }
                        ].map((stat, i) => (
                            <div key={i} className="border-r last:border-r-0 border-gray-200">
                                <p className="text-[#7AB730] font-bold text-2xl md:text-3xl">{stat.num}</p>
                                <p className="text-gray-500 text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overview */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#212121] mb-4">Safari Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our signature 8-day safari showcases the very best of Uganda in one unforgettable journey. From the chimpanzee-rich forests of Kibale to the savannah plains of Queen Elizabeth, from the misty mountains of Bwindi where mountain gorillas roam to the lakeside tranquility of Lake Mburo – this is Uganda at its finest.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        This carefully crafted itinerary balances adventure with comfort, wildlife encounters with cultural immersion, and active experiences with relaxation. You&lsquo;ll track both chimpanzees and mountain gorillas, cruise alongside hippos, search for tree-climbing lions, walk with zebras, and explore ancient forests. This is the ultimate introduction to the Pearl of Africa.
                    </p>
                </div>

                {/* Accommodation Timeline */}
                <div className="bg-[#212121] rounded-lg shadow-md p-8 mb-8 text-white">
                    <h2 className="text-xl font-bold mb-6">Your Journey & Accommodations</h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#7AB730]/30"></div>
                        <div className="space-y-6">
                            {[
                                { nights: "Night 1", lodge: "Lake Victoria Serena", type: "Luxury Resort" },
                                { nights: "Nights 2-3", lodge: "Primate Lodge Kibale", type: "Forest Lodge" },
                                { nights: "Night 4", lodge: "Mweya Safari Lodge", type: "Safari Lodge" },
                                { nights: "Nights 5-6", lodge: "Buhoma Lodge", type: "Forest Lodge" },
                                { nights: "Night 7", lodge: "Mihingo Lodge", type: "Eco Lodge" }
                            ].map((acc, i) => (
                                <div key={i} className="flex items-center gap-4 pl-8 relative">
                                    <div className="absolute left-2 w-4 h-4 bg-[#7AB730] rounded-full border-4 border-[#212121]"></div>
                                    <div className="flex-1 bg-white/5 rounded-lg p-4">
                                        <p className="text-[#7AB730] text-sm">{acc.nights}</p>
                                        <p className="font-semibold">{acc.lodge}</p>
                                        <p className="text-gray-400 text-sm">{acc.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Itinerary */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#212121] mb-6">Day by Day Itinerary</h2>

                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-6">
                        {itinerary.map((item) => (
                            <button
                                key={item.day}
                                onClick={() => setActiveDay(item.day)}
                                className={`py-3 rounded-lg font-bold transition-all ${activeDay === item.day ? 'bg-[#7AB730] text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {item.day}
                            </button>
                        ))}
                    </div>

                    {itinerary.filter(item => item.day === activeDay).map((day) => (
                        <div key={day.day} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="bg-[#7AB730] text-white text-sm font-bold px-4 py-1 rounded-full">DAY {day.day}</span>
                                <span className="text-gray-400">|</span>
                                <span className="text-[#7AB730] text-sm flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    {day.location}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#212121] mb-4">{day.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{day.description}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <p className="font-semibold text-[#212121] mb-3 text-sm flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                        Highlights
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {day.highlights.map((h, i) => (
                                            <span key={i} className="bg-[#7AB730]/10 text-[#5a8a20] px-3 py-1 rounded-full text-xs">{h}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <p className="font-semibold text-[#212121] mb-3 text-sm flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#7AB730]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        Accommodation
                                    </p>
                                    <p className="text-gray-600 text-sm">{day.accommodation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Includes/Excludes */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#7AB730] rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            What&lsquo;s Included
                        </h3>
                        <ul className="space-y-2">
                            {includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                    <svg className="w-4 h-4 text-[#7AB730] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </span>
                            What&lsquo;s Excluded
                        </h3>
                        <ul className="space-y-2">
                            {excludes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Pricing */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#7AB730] to-[#5a8a20] rounded-xl shadow-xl p-8 text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative md:flex justify-between items-center">
                        <div>
                            <p className="text-white/80 uppercase tracking-wider text-sm mb-1">Complete Package From</p>
                            <p className="text-5xl font-bold">US$ 4,200</p>
                            <p className="text-white/80 text-sm mt-2">Per person sharing | All permits included</p>
                            <div className="flex gap-4 mt-4 text-sm">
                                <span className="bg-white/20 px-3 py-1 rounded-full">✓ Gorilla Permit</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">✓ Chimp Permit</span>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 space-y-3">
                            <button className="w-full md:w-auto bg-white text-[#7AB730] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                                Book This Safari
                            </button>
                            <p className="text-white/60 text-xs text-center">Flexible payment plans available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EightDaysSafari;