"use client";
import { useState } from 'react';

const SixDaysGorillaChimp = () => {
    const [activeDay, setActiveDay] = useState(1);

    const itinerary = [
        {
            day: 1,
            title: "Arrival in Entebbe",
            location: "Entebbe International Airport",
            accommodation: "Protea Hotel Entebbe",
            description: "Welcome to Uganda, the Pearl of Africa! Upon arrival at Entebbe International Airport, you'll be warmly received by your TripTonic Safaris representative. Transfer to your lakeside hotel situated on the shores of Lake Victoria. Depending on your arrival time, enjoy a relaxed evening, optional bird watching around the botanical gardens, or explore the charming town of Entebbe. Dinner and overnight at your hotel as you prepare for the adventures ahead.",
            highlights: ["Airport meet & greet", "Lake Victoria views", "Optional botanical gardens visit", "Welcome dinner"]
        },
        {
            day: 2,
            title: "Transfer to Kibale Forest",
            location: "Entebbe → Fort Portal → Kibale Forest",
            accommodation: "Primate Lodge Kibale",
            description: "After an early breakfast, embark on a scenic drive westward to Kibale Forest National Park, known as the 'Primate Capital of the World'. The 5-6 hour journey passes through lush green countryside, crater lakes, and the famous tea plantations of Fort Portal beneath the legendary Mountains of the Moon. Arrive at your forest lodge in the afternoon, surrounded by the sounds of the jungle. Settle in and enjoy dinner as anticipation builds for tomorrow's chimpanzee encounter.",
            highlights: ["Scenic countryside drive", "Crater lakes viewpoints", "Fort Portal tea estates", "Forest lodge experience"]
        },
        {
            day: 3,
            title: "Chimpanzee Tracking & Bigodi Swamp Walk",
            location: "Kibale Forest National Park",
            accommodation: "Primate Lodge Kibale",
            description: "Rise early for the highlight of Kibale – chimpanzee tracking! After a briefing at the park headquarters, enter the ancient rainforest with experienced guides. Track the habituated chimpanzee community through dense vegetation, listening for their distinctive calls. Once found, spend one magical hour observing their fascinating social behaviors. After lunch, visit the community-run Bigodi Wetland Sanctuary for a guided swamp walk, spotting numerous primate species, colorful birds, and learning about local conservation efforts.",
            highlights: ["Chimpanzee tracking", "1 hour with chimps", "Bigodi Swamp walk", "Community tourism experience"]
        },
        {
            day: 4,
            title: "Transfer to Bwindi via Queen Elizabeth NP",
            location: "Kibale → Queen Elizabeth NP → Bwindi",
            accommodation: "Buhoma Lodge",
            description: "Depart after breakfast for Bwindi Impenetrable Forest, home of the endangered mountain gorillas. En-route, traverse Queen Elizabeth National Park's Ishasha sector, famous for its tree-climbing lions. Keep your eyes peeled as these unique big cats often lounge in the branches of fig trees. Enjoy a picnic lunch with savannah views before continuing through stunning highland scenery to reach Bwindi by evening. Dinner and briefing about tomorrow's gorilla trek.",
            highlights: ["Queen Elizabeth NP transit", "Tree-climbing lion search", "Savannah wildlife", "Highland scenery"]
        },
        {
            day: 5,
            title: "Mountain Gorilla Tracking",
            location: "Bwindi Impenetrable Forest National Park",
            accommodation: "Buhoma Lodge",
            description: "Today is the pinnacle of your safari – tracking mountain gorillas! After breakfast, head to the park headquarters for registration and briefing. Assigned to a gorilla family in groups of 8, you'll trek into the ancient, mist-covered forest. The hike through dense vegetation can take 2-8 hours depending on gorilla movements. Upon finding your gorilla family, spend an unforgettable hour in the presence of these gentle giants – watching silverbacks, playful juveniles, and nurturing mothers. A life-changing experience you'll never forget.",
            highlights: ["Gorilla tracking briefing", "Forest trek experience", "1 hour with gorilla family", "Silverback encounter"]
        },
        {
            day: 6,
            title: "Return to Entebbe & Departure",
            location: "Bwindi → Equator → Entebbe Airport",
            accommodation: "End of Safari",
            description: "After a final breakfast in the forest, bid farewell to Bwindi and begin your return journey to Entebbe. Stop at the Uganda Equator for the famous water hemisphere demonstration, photo opportunities, and last-minute souvenir shopping. Enjoy lunch at a local restaurant before continuing to Entebbe. Arrive in the late afternoon with time to freshen up before your evening flight, taking home incredible memories of Uganda's primate kingdoms.",
            highlights: ["Equator crossing experience", "Photo opportunities", "Souvenir shopping", "Airport transfer"]
        }
    ];

    const includes = [
        "All airport transfers",
        "Ground transportation in 4x4 safari vehicle",
        "Professional English-speaking driver/guide",
        "5 nights accommodation (full board)",
        "1 Gorilla tracking permit",
        "1 Chimpanzee tracking permit",
        "Bigodi Swamp Walk",
        "All park entrance fees",
        "Bottled water during safari",
        "All meals as indicated"
    ];

    const excludes = [
        "International flights",
        "Travel & medical insurance",
        "Uganda visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Alcoholic beverages",
        "Optional activities",
        "Laundry services"
    ];

    const locations = ["Entebbe", "Kibale Forest", "Queen Elizabeth NP", "Bwindi Forest"];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-96 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">MOST POPULAR</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">TripTonic Safaris</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">6 Day Gorilla & Chimp Tracking Safari</h1>
                    <p className="text-gray-300 max-w-2xl mb-6">The ultimate primate adventure combining chimpanzee and mountain gorilla tracking</p>
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
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
                        {[
                            { num: "6", label: "Days" },
                            { num: "5", label: "Nights" },
                            { num: "3", label: "National Parks" },
                            { num: "1", label: "Gorilla Trek" },
                            { num: "1", label: "Chimp Trek" }
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
                        This comprehensive 6-day primate safari combines Uganda&lsquo;s two most sought-after wildlife experiences: chimpanzee tracking in Kibale Forest and mountain gorilla tracking in Bwindi Impenetrable Forest. Journey through the heart of Uganda&apos;s primate kingdom, from the ancient rainforests teeming with 13 primate species to the misty highlands where half the world&apos;s remaining mountain gorillas reside.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Along the way, transit through Queen Elizabeth National Park with chances to spot the famous tree-climbing lions of Ishasha. This safari offers the perfect balance of adventure and comfort, combining intimate wildlife encounters with quality accommodation in stunning natural settings.
                    </p>
                </div>

                {/* Accommodation Timeline */}
                <div className="bg-[#212121] rounded-lg shadow-md p-8 mb-8 text-white">
                    <h2 className="text-xl font-bold mb-6">Your Journey & Accommodations</h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#7AB730]/30"></div>
                        <div className="space-y-6">
                            {[
                                { nights: "Night 1", lodge: "Protea Hotel Entebbe", type: "Lakeside Hotel" },
                                { nights: "Nights 2-3", lodge: "Primate Lodge Kibale", type: "Forest Lodge" },
                                { nights: "Nights 4-5", lodge: "Buhoma Lodge", type: "Forest Lodge" }
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

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
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
                            What&apos;s Included
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
                            What&apos;s Excluded
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
                            <p className="text-5xl font-bold">US$ 2,850</p>
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

export default SixDaysGorillaChimp;