const siteConfig = {
    company: {
        name: "BUSH & BEYOND TOURS LIMITED",
        tagline: "Your gateway to wonderful adventures",
        logo: "/img/logo.png",
    },
    contacts: {
        email: "info@bushandbeyondtours.com",
        phoneNumber: "+256 772 456789",
        location: "Plot 12, Kampala Road, Kampala",
        poBox: "P.O. Box 1234, Kampala, Uganda",
        businessHours: "Mon-Sat, 8:00 AM - 6:00 PM",
        hero: {
            badge: "Connect With Us",
            title: "Contact Our Experts",
            tagline: "Let us help you craft your perfect Ugandan safari adventure with personalized attention and local expertise."
        },
        reasons: [
            "Custom safari package inquiries",
            "Gorilla & chimp permit availability",
            "Group booking discounts",
            "Corporate retreat planning",
            "Honeymoon & special occasions",
            "Travel advice & recommendations"
        ]
    },
    navigation: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Community", href: "/community" },
        {
            label: "Safaris",
            href: "#safaris",
            dropdown: [
                { label: "Three Days Gorilla Tracking", href: "/safaris/three-days-gorilla-tracking" },
                { label: "Six Days of Gorilla Tracking and Chimp Tracking", href: "/safaris/six-days-gorilla-chimp-tracking" },
                { label: "Eight Days Safari", href: "/safaris/eight-days-safari" },
            ],
        },
        {
            label: "Other Services",
            href: "#services",
            dropdown: [
                { label: "Car Rentals", href: "/other-services/car-rental" },
                { label: "Honeymoon Package", href: "/other-services/honey-moon" },
                { label: "Air Ticketing", href: "/other-services/air-ticketing" },
                { label: "Consultancy", href: "/other-services/consultancy" },
            ],
        },
        { label: "Contact Us", href: "/contact" },
        { label: "Pay Here", href: "/pay" },
    ],
    footer: {
        services: [
            { label: "About", href: "/about" },
            { label: "Destinations", href: "/#destinations" },
            { label: "Safari Packages", href: "/#packages" },
            { label: "Luxury Lodges", href: "/#gallery" },
            { label: "Guided Tours", href: "/#services" },
            { label: "Testimonials", href: "/#testimonials" },
        ],
        usefulLinks: [
            { label: "About", href: "/about" },
            { label: "Destinations", href: "/#destinations" },
            { label: "Services", href: "/#services" },
            { label: "Packages", href: "/#packages" },
            { label: "Guides", href: "/#team" },
            { label: "Blog", href: "/#blog" },
        ]
    },
    home: {
        carousel: [
            {
                id: 1,
                title: "African Wildlife Safari",
                description: "Experience the majestic giants of the pearl of Africa in their natural habitat.",
                link: "#destinations"
            },
            {
                id: 2,
                title: "Majestic Savanna Sunsets",
                description: "Witness the magnificent African sunset over the wild savanna, surrounded by grazing herds and untouched wilderness.",
                link: "#destinations"

            },
            {
                id: 3,
                title: "A Birder's Paradise",
                description: "Explore Uganda's diverse avian species, from the vibrant kingfisher to the rare and magnificent shoebill stork.",
                link: "#destinations"
            }
        ],
        about: {
            badge: "About Our Journey",
            title: "Experience Uganda's Wonders with Our Expertly Curated Safari Packages",
            description: "specializes in creating unforgettable safari adventures in Uganda's national parks. From wildlife encounters and scenic landscapes to cultural heritage and guided tours. We offer personalized experiences tailored to your budget and schedule."
        },
        features: [
            {
                icon: "faMoneyCheckAlt",
                title: "Competitive Pricing",
                description: "We offer safari packages, hotel reservations and air ticketing at best rates with great value for money and time spent with us"
            },
            {
                icon: "faAward",
                title: "Packages",
                description: "We offer a variety of tour packages that comes with life memorable experiences."
            },
            {
                icon: "faGlobe",
                title: "Motor Vehicle Hire",
                description: "We offer a variety of tourist customized vehicles at good rates."
            }
        ],
        destinations: {
            badge: "Discover Uganda",
            title: "Explore Top Destinations",
            list: [
                {
                    id: 1,
                    name: "Murchison Falls",
                    location: "Buluisa District",
                    attractionsCount: 50,
                    imageKey: "murchison"
                },
                {
                    id: 2,
                    name: "Bwindi Impenetrable",
                    location: "South Western Uganda",
                    attractionsCount: 30,
                    imageKey: "bwindi"
                },
                {
                    id: 3,
                    name: "Queen Elizabeth",
                    location: "Kasese District",
                    attractionsCount: 25,
                    imageKey: "queen"
                },
                {
                    id: 4,
                    name: "Kampala City",
                    location: "Central Uganda",
                    attractionsCount: 15,
                    imageKey: "kampala"
                },
                {
                    id: 5,
                    name: "Rwenzori Mountains",
                    location: "West Western Uganda",
                    attractionsCount: 20,
                    imageKey: "rwenzori"
                },
                {
                    id: 6,
                    name: "Mount Elgon",
                    location: "Eastern Uganda",
                    attractionsCount: 10,
                    imageKey: "elgon"
                }
            ]
        },
        services: {
            badge: "Excellence in Travel",
            title: "Tours & Travel Services",
            list: [
                { icon: "faRoute", title: "Travel Guide", description: "Expert guides to lead you through Uganda's national parks and hidden gems." },
                { icon: "faTicketAlt", title: "Ticket Booking", description: "Seamless booking for safaris, park entries, and adventure activities." },
                { icon: "faHotel", title: "Hotel Booking", description: "Handpicked luxury lodges and accommodations for an unforgettable stay." }
            ]
        },
        bookingForm: {
            destinations: [
                { value: "murchison-falls", label: "Murchison Falls" },
                { value: "queen-elizabeth", label: "Queen Elizabeth" },
                { value: "lake-mburo", label: "Lake Mburo" },
                { value: "bwindi", label: "Bwindi Impenetrable Forest" }
            ],
            durations: [1, 2, 3, 4, 5, 7, 10, 14]
        },
        specialOffer: {
            badge: "Group Discounts",
            title: "Get a 10% Discount on Group Safaris",
            description: "Embark on an unforgettable safari in Uganda's most iconic National Parks. Enjoy wildlife, breathtaking landscapes, and guided tours at a special discounted rate for groups of four and above.",
            highlights: [
                "Guided safaris in Murchison Falls & Queen Elizabeth",
                "Luxury lodges with stunning views",
                "Customizable itineraries to fit your schedule"
            ],
            formTitle: "Plan Your Trip",
            destinations: [
                { value: "murchison-falls", label: "Murchison Falls National Park" },
                { value: "queen-elizabeth", label: "Queen Elizabeth National Park" },
                { value: "lake-mburo", label: "Lake Mburo National Park" },
                { value: "bwindi", label: "Bwindi Impenetrable Forest" }
            ]
        },
        gallery: {
            badge: "Visual Journey",
            title: "Travel Moments Gallery"
        },
        team: {
            badge: "Our Experts",
            title: "Meet Our Safari Guides"
        },
        blog: {
            badge: "Insights & Stories",
            title: "Latest From Our Blog"
        },
        testimonials: {
            badge: "Testimonials",
            title: "What Our Clients Say",
            items: [
                {
                    name: "Sarah Nakato",
                    role: "Adventure Traveler",
                    image: "/img/content/wildlife-safari-1.jpg",
                    text: "The gorilla trekking in Bwindi was a once-in-a-lifetime experience. The guides were knowledgeable and very friendly!"
                },
                {
                    name: "David Okello",
                    role: "Safari Enthusiast",
                    image: "/img/content/wildlife-safari-2.jpg",
                    text: "Queen Elizabeth National Park safari exceeded my expectations. We saw lions, elephants, and even hippos in the wild!"
                },
                {
                    name: "Grace Achieng",
                    role: "Cultural Explorer",
                    image: "/img/content/wildlife-safari-3.jpg",
                    text: "Visiting the Ssese Islands was amazing. The beaches are pristine and the local community is welcoming and kind."
                }
            ]
        },
        packages: {
            badge: "Featured Journeys",
            title: "Perfect Tour Packages",
            list: [
                {
                    id: 1,
                    title: "Safari Adventure in Murchison Falls National Park",
                    location: "Murchison Falls",
                    duration: "3 days",
                    people: "2 Persons",
                    rating: 4.8,
                    ratingCount: 120,
                    imageKey: "murchison"
                },
                {
                    id: 2,
                    title: "Gorilla Trekking Experience in Bwindi Impenetrable Forest",
                    location: "Bwindi",
                    duration: "4 days",
                    people: "2 Persons",
                    rating: 5.0,
                    ratingCount: 85,
                    imageKey: "gorilla"
                },
                {
                    id: 3,
                    title: "Chimpanzee Tracking in Kibale National Park",
                    location: "Kibale",
                    duration: "3 days",
                    people: "2 Persons",
                    rating: 4.7,
                    ratingCount: 60,
                    imageKey: "chimp"
                },
                {
                    id: 5,
                    title: "Mountaineering at Rwenzori Mountains",
                    location: "Rwenzori Mountains National Park",
                    duration: "5 days",
                    people: "2 Persons",
                    rating: 4.9,
                    ratingCount: 70,
                    imageKey: "rwenzori"
                },
                {
                    id: 6,
                    title: "Adrenaline Adventure at the Nile",
                    location: "Jinja",
                    duration: "1 day",
                    people: "2 Persons",
                    rating: 4.5,
                    ratingCount: 100,
                    imageKey: "adventure"
                }
            ]
        }
    },
    socials: {
        facebook: "https://facebook.com/bushandbeyondtours",
        instagram: "https://instagram.com/bushandbeyondtours",
        twitter: "https://twitter.com/bushandbeyondtours",
        linkedin: "https://linkedin.com/company/bushandbeyondtours"
    },
    seo: {
        title: "Bush and Beyond Tours Uganda — Uganda Safaris & Adventure Travel",
        description: "Bush and Beyond Tours offers expert-led Uganda safaris, including gorilla trekking, wildlife safaris, and cultural tours. Custom itineraries, experienced guides, and hassle-free booking for an unforgettable East African adventure.",
        keywords: "Uganda tours, safari Uganda, gorilla trekking, wildlife safari, cultural tours, Bush and Beyond Tours, Uganda travel",
        siteUrl: "https://www.bushandbeyondtours.com",
        image: "/img/seo/og-image.jpg"
    },
    images: {
        carousel: [
            "/img/content/hero-wildlife-1.jpg",
            "/img/content/hero-wildlife-2.jpg",
            "/img/content/hero-wildlife-3.jpg",
        ],
        about: {
            primary: "/img/content/gorilla-mother-baby.jpg",
            secondary: "/img/content/cultural-performance.jpg",
            tertiary: "/img/content/wildlife-safari-3.jpg",
        },
        packages: {
            gorilla: "/img/content/gorilla-trekking.jpg",
            chimp: "/img/content/kibale-chimps.jpg",
            adventure: "/img/content/kayaking-nile.webp",
        },
        destinations: {
            rwenzori: "/img/content/destination-rwenzori.jpg",
            kampala: "/img/content/destination-kampala.webp",
            elgon: "/img/content/destination-elgon.jpg",
            murchison: "/img/content/destination-murchison.jpg",
            queen: "/img/content/wildlife-safari-5.jpg",
            bwindi: "/img/content/gorilla-trekking.jpg",
        },
        services: {
            wildlife: "/img/content/wildlife-safari-1.jpg",
            culture: "/img/content/cultural-karimojong.jpg",
            transport: "/img/content/airport-welcome.jpg",
        },
        gallery: [
            { src: "/img/content/wildlife-safari-6.jpg", title: "Lion King", location: "Queen Elizabeth NP" },
            { src: "/img/content/wildlife-safari-7.jpg", title: "White Rhino", location: "Ziwa Rhino Sanctuary" },
            { src: "/img/content/wildlife-safari-8.jpg", title: "Leopard in Wait", location: "Murchison Falls NP" },
            { src: "/img/content/wildlife-safari-9.jpg", title: "African Elephant", location: "Kidepo Valley NP" },
            { src: "/img/content/gorilla-mother-baby.jpg", title: "Mountain Gorillas", location: "Bwindi Impenetrable" },
            { src: "/img/content/kibale-chimps.jpg", title: "Chimpanzee Tracking", location: "Kidepo Valley NP" },
            { src: "/img/content/cultural-performance.jpg", title: "Cultural Heritage", location: "Central Uganda" },
            { src: "/img/content/cultural-karimojong.jpg", title: "Community Tourism", location: "Karamoja Region" },
            { src: "/img/content/rafting-nile.jpg", title: "Nile Rafting", location: "Jinja" },
            { src: "/img/content/birding-finfoot.jpg", title: "Rare African Finfoot", location: "Mabamba Swamp" },
        ],
        team: [],
        blog: [
            {
                id: 1,
                title: "Ultimate Guide to Mountain Gorilla Tracking in Uganda",
                category: "Travel Tips",
                author: "Admin",
                date: { day: "12", month: "Nov" },
                image: "/img/content/gorilla-trekking.jpg",
                link: "#"
            },
            {
                id: 2,
                title: "Exploring the Wonders of Bwindi Impenetrable Forest",
                category: "Adventure",
                author: "Admin",
                date: { day: "20", month: "Oct" },
                image: "/img/content/gorilla-trekking.jpg",
                link: "#"
            },
            {
                id: 3,
                title: "Murchison Falls: The World's Most Powerful Waterfall",
                category: "Culture & Adventure",
                author: "Admin",
                date: { day: "05", month: "Sep" },
                image: "/img/content/destination-murchison.jpg",
                link: "#"
            }
        ]
    },
    about: {
        tagline: "Experience · People · Places",
        stats: [
            { num: "10+", label: "Years Experience" },
            { num: "500+", label: "Happy Travelers" },
            { num: "50+", label: "Safari Packages" },
            { num: "100%", label: "Tailor-Made" }
        ],
        story: {
            title: "Our Story",
            paragraphs: [
                "BUSH & BEYOND TOURS LIMITED was founded in 2014 by passionate Ugandan travel enthusiasts with a bold vision: to share the breathtaking beauty of East Africa with the world.",
                "Over a decade later, we have grown into one of Uganda's trusted tour operators, specializing in gorilla tracking, wildlife safaris, and authentic cultural experiences. Our name reflects our philosophy – we believe travel should be invigorating, energizing, and transformative.",
                "Drawing on extensive experience and in-depth knowledge of the region's diverse attractions, we are committed to curating unique and authentic safari experiences that transcend the ordinary. Whether you're seeking your first African wildlife encounter, an adrenaline-fueled adventure, or a serene honeymoon.",
                "We invite you to embark on a journey of discovery across the breathtaking landscapes of Uganda and beyond. Your adventure begins here with us."
            ]
        },
        values: [
            {
                title: "Excellence",
                icon: "excellence",
                description: "Our team of expert travel specialists brings over 15 years of combined safari experience across East Africa. We partner exclusively with top-tier guides known for their professionalism and deep local knowledge, ensuring every journey is infused with authentic insights."
            },
            {
                title: "Passion",
                icon: "passion",
                description: "Your safari will be 100% tailor-made, designed around your interests, dreams, and budget. We don't take you on 'our safaris' – instead, you create the perfect trip with guidance from our specialists."
            },
            {
                title: "Authenticity",
                icon: "authenticity",
                description: "Proudly Ugandan-owned and managed, we bring authentic local perspective to every safari we craft. With deep roots in the region, we understand the land, the culture, and the people."
            },
            {
                title: "Community",
                icon: "community",
                description: "Tourism is a powerful tool for improving livelihoods in local communities. We actively participate in enriching the lives of communities we interact with – offering training and sourcing produce locally."
            },
            {
                title: "Responsibility",
                icon: "responsibility",
                description: "While delivering extraordinary African experiences, we are equally dedicated to sustainability and preserving wildlife, natural environments, and cultural heritage."
            }
        ],
        mission: "To create extraordinary safari experiences that transcend the ordinary by blending extensive regional knowledge, personalized service, and a commitment to sustainability. Our goal is to craft memorable adventures that inspire, educate, and delight our clients while fostering respect for the environment and local communities.",
        vision: "To be a leading catalyst for sustainable tourism in East Africa, creating unparalleled safari experiences that not only showcase the natural and cultural wonders of the region but also drive conservation efforts and community empowerment for generations to come."
    },
    safaris: {
        ultimateUganda: {
            id: "ultimate-uganda",
            title: "8 Day Ultimate Uganda Safari",
            tagline: "The complete Uganda experience – primates, wildlife, and culture",
            price: "4,200",
            duration: "8 Days",
            locations: ["Entebbe", "Kibale Forest", "Queen Elizabeth", "Bwindi Forest", "Lake Mburo"],
            stats: [
                { num: "8", label: "Days" },
                { num: "7", label: "Nights" },
                { num: "4", label: "Parks" },
                { num: "1", label: "Gorilla Trek" },
                { num: "1", label: "Chimp Trek" },
                { num: "3", label: "Game Drives" }
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Entebbe",
                    location: "Entebbe International Airport",
                    accommodation: "Lake Victoria Serena Golf Resort",
                    description: "Welcome to Uganda! Upon arrival at Entebbe International Airport, your guide will be waiting to greet you. Transfer to your luxury lakeside resort on the shores of Lake Victoria, Africa's largest lake.",
                    highlights: ["VIP airport meet & greet", "Lake Victoria resort", "Sunset boat cruise", "Welcome dinner"]
                },
                {
                    day: 2,
                    title: "Transfer to Kibale Forest",
                    location: "Entebbe → Fort Portal → Kibale",
                    accommodation: "Primate Lodge Kibale",
                    description: "Depart early morning for the scenic drive to Kibale Forest National Park, the Primate Capital of the World. The journey takes you through the heart of Uganda, passing fertile farmlands and crater lakes.",
                    highlights: ["Scenic western route", "Crater lake viewpoints", "Rwenzori Mountain views", "Forest lodge check-in"]
                },
                {
                    day: 3,
                    title: "Chimpanzee Tracking & Bigodi Swamp",
                    location: "Kibale Forest National Park",
                    accommodation: "Primate Lodge Kibale",
                    description: "Enter the ancient rainforest with expert guides, tracking the habituated chimp communities. Afternoon, visit the community-run Bigodi Wetland Sanctuary – a birder's paradise.",
                    highlights: ["Chimpanzee tracking", "Primate species", "Bigodi Swamp walk", "Community conservation"]
                },
                {
                    day: 4,
                    title: "Queen Elizabeth National Park",
                    location: "Kibale → Queen Elizabeth NP",
                    accommodation: "Mweya Safari Lodge",
                    description: "Check into your lodge perched on the Mweya Peninsula. After lunch, embark on the famous Kazinga Channel boat cruise – a journey past hippos, crocodiles, and elephants.",
                    highlights: ["Savannah landscapes", "Mweya Peninsula views", "Kazinga Channel cruise", "Hippos & elephants"]
                },
                {
                    day: 5,
                    title: "Game Drives & Transfer to Bwindi",
                    location: "Queen Elizabeth NP → Ishasha → Bwindi",
                    accommodation: "Buhoma Lodge",
                    description: "Morning game drive through the Kasenyi Plains. Later, drive south through the Ishasha sector, famous for tree-climbing lions, scanning the fig trees for these unique big cats.",
                    highlights: ["Early morning game drive", "Big Five wildlife", "Tree-climbing lions", "Mountain scenery"]
                },
                {
                    day: 6,
                    title: "Mountain Gorilla Tracking",
                    location: "Bwindi Impenetrable Forest",
                    accommodation: "Buhoma Lodge",
                    description: "Track the mountain gorillas! spend one magical hour in their presence – watching silverbacks, playful juveniles, and caring mothers. This intimate encounter is truly life-changing.",
                    highlights: ["Gorilla tracking experience", "1 hour with gorillas", "Silverback encounters", "Celebration dinner"]
                },
                {
                    day: 7,
                    title: "Bwindi to Lake Mburo",
                    location: "Bwindi → Lake Mburo National Park",
                    accommodation: "Mihingo Lodge",
                    description: "Head to Lake Mburo National Park, Uganda's hidden gem. enjoy a night game drive in an open vehicle with spotlight, searching for leopards, hyenas, and nocturnal creatures.",
                    highlights: ["Cultural center visit", "Lake Mburo arrival", "Luxury eco-lodge", "Night game drive"]
                },
                {
                    day: 8,
                    title: "Bush Walk & Departure",
                    location: "Lake Mburo → Equator → Entebbe",
                    accommodation: "End of Safari",
                    description: "Start your final day with a guided bush walk – experience the African bush on foot alongside zebras and impalas. Later, stop at the Uganda Equator for photos and final shopping.",
                    highlights: ["Guided bush walk", "Walking with wildlife", "Equator experience", "Airport transfer"]
                }
            ],
            includes: [
                "All airport transfers & ground transport",
                "Professional English-speaking guide",
                "Quality accommodation (full board)",
                "Gorilla & Chimpanzee permits",
                "Kazinga Channel boat cruise",
                "Night game drive at Lake Mburo",
                "Guided bush walk",
                "All park entrance fees",
                "Bottled water during safari"
            ],
            excludes: [
                "International flights",
                "Travel insurance",
                "Tourist visa",
                "Personal expenses",
                "Tips and gratuities",
                "Alcoholic beverages"
            ]
        },
        gorillaChimp6Days: {
            id: "gorilla-chimp-6-days",
            title: "6 Day Gorilla & Chimp Tracking Safari",
            tagline: "The ultimate primate adventure combining chimpanzee and mountain gorilla tracking",
            price: "2,850",
            duration: "6 Days",
            locations: ["Entebbe", "Kibale Forest", "Queen Elizabeth NP", "Bwindi Forest"],
            stats: [
                { num: "6", label: "Days" },
                { num: "5", label: "Nights" },
                { num: "3", label: "National Parks" },
                { num: "1", label: "Gorilla Trek" },
                { num: "1", label: "Chimp Trek" }
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Entebbe",
                    location: "Entebbe International Airport",
                    accommodation: "Protea Hotel Entebbe",
                    description: "Welcome to Uganda, the Pearl of Africa! Upon arrival at Entebbe International Airport, you'll be warmly received by your representative. Transfer to your lakeside hotel situated on the shores of Lake Victoria.",
                    highlights: ["Airport meet & greet", "Lake Victoria views", "Optional botanical gardens visit", "Welcome dinner"]
                },
                {
                    day: 2,
                    title: "Transfer to Kibale Forest",
                    location: "Entebbe → Fort Portal → Kibale Forest",
                    accommodation: "Primate Lodge Kibale",
                    description: "After an early breakfast, embark on a scenic drive westward to Kibale Forest National Park, known as the 'Primate Capital of the World'.",
                    highlights: ["Scenic countryside drive", "Crater lakes viewpoints", "Fort Portal tea estates", "Forest lodge experience"]
                },
                {
                    day: 3,
                    title: "Chimpanzee Tracking & Bigodi Swamp Walk",
                    location: "Kibale Forest National Park",
                    accommodation: "Primate Lodge Kibale",
                    description: "Rise early for the highlight of Kibale – chimpanzee tracking! After lunch, visit the community-run Bigodi Wetland Sanctuary for a guided swamp walk.",
                    highlights: ["Chimpanzee tracking", "1 hour with chimps", "Bigodi Swamp walk", "Community tourism experience"]
                },
                {
                    day: 4,
                    title: "Transfer to Bwindi via Queen Elizabeth NP",
                    location: "Kibale → Queen Elizabeth NP → Bwindi",
                    accommodation: "Buhoma Lodge",
                    description: "Depart after breakfast for Bwindi Impenetrable Forest, home of the endangered mountain gorillas. En-route, traverse Queen Elizabeth National Park's Ishasha sector, famous for its tree-climbing lions.",
                    highlights: ["Queen Elizabeth NP transit", "Tree-climbing lion search", "Savannah wildlife", "Highland scenery"]
                },
                {
                    day: 5,
                    title: "Mountain Gorilla Tracking",
                    location: "Bwindi Impenetrable Forest National Park",
                    accommodation: "Buhoma Lodge",
                    description: "Today is the pinnacle of your safari – tracking mountain gorillas! Assigned to a gorilla family in groups of 8, you'll trek into the ancient, mist-covered forest.",
                    highlights: ["Gorilla tracking briefing", "Forest trek experience", "1 hour with gorilla family", "Silverback encounter"]
                },
                {
                    day: 6,
                    title: "Return to Entebbe & Departure",
                    location: "Bwindi → Equator → Entebbe Airport",
                    accommodation: "End of Safari",
                    description: "After a final breakfast in the forest, bid farewell to Bwindi and begin your return journey to Entebbe. Stop at the Uganda Equator for photos and souvenir shopping.",
                    highlights: ["Equator crossing experience", "Photo opportunities", "Souvenir shopping", "Airport transfer"]
                }
            ],
            includes: [
                "All airport transfers",
                "Ground transportation in 4x4 safari vehicle",
                "Professional English-speaking driver/guide",
                "5 nights accommodation (full board)",
                "1 Gorilla tracking permit",
                "1 Chimpanzee tracking permit",
                "Bigodi Swamp Walk",
                "All park entrance fees",
                "Bottled water during safari"
            ],
            excludes: [
                "International flights",
                "Travel & medical insurance",
                "Uganda visa fees",
                "Personal expenses",
                "Tips and gratuities",
                "Alcoholic beverages"
            ]
        },
        gorilla3Days: {
            id: "gorilla-3-days",
            title: "3 Day Gorilla Tracking Safari",
            tagline: "A quick but unforgettable encounter with mountain gorillas",
            price: "1,450",
            duration: "3 Days",
            locations: ["Entebbe", "Bwindi Forest"],
            stats: [
                { num: "3", label: "Days" },
                { num: "2", label: "Nights" },
                { num: "1", label: "National Park" },
                { num: "1", label: "Gorilla Trek" }
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Entebbe & Transfer to Bwindi",
                    location: "Entebbe → Bwindi Impenetrable Forest",
                    accommodation: "Buhoma Haven Lodge",
                    description: "Welcome to Uganda! Upon arrival at Entebbe International Airport, you'll be greeted by your guide and begin your scenic drive to Bwindi Impenetrable Forest National Park.",
                    highlights: ["Airport pickup", "Scenic countryside drive", "Tea plantation views", "Traditional village sightings"]
                },
                {
                    day: 2,
                    title: "Gorilla Tracking Experience",
                    location: "Bwindi Impenetrable Forest National Park",
                    accommodation: "Buhoma Haven Lodge",
                    description: "Today is the highlight of your safari – the unforgettable Mountain Gorilla tracking experience! The trek through the dense, misty forest can take 2-8 hours.",
                    highlights: ["Pre-tracking briefing", "Guided forest trek", "1 hour with gorillas", "Professional photography opportunities"]
                },
                {
                    day: 3,
                    title: "Departure to Entebbe",
                    location: "Bwindi → Entebbe International Airport",
                    accommodation: "End of Safari",
                    description: "After a leisurely breakfast, begin your return journey to Entebbe. Stop at the Equator for photo opportunities and souvenir shopping.",
                    highlights: ["Equator crossing", "Photo opportunities", "Souvenir shopping", "Airport drop-off"]
                }
            ],
            includes: [
                "Airport transfers",
                "Ground transportation in 4x4 safari vehicle",
                "Professional English-speaking guide",
                "2 nights accommodation (full board)",
                "Gorilla tracking permit",
                "All park entrance fees",
                "Bottled water during safari"
            ],
            excludes: [
                "International flights",
                "Travel insurance",
                "Visa fees",
                "Personal expenses",
                "Tips and gratuities",
                "Alcoholic beverages"
            ]
        }
    },
    services: {
        carRentals: {
            id: "car-rentals",
            badge: "VEHICLE HIRE",
            title: "Car Rental",
            subtitle: "Premium vehicles for your East African adventure",
            overviewTitle: "Professional Car Rental Services",
            overviewText: "Explore East Africa at your own pace with our fleet of well-maintained vehicles. From luxury safari Land Cruisers to comfortable sedans, we offer flexible rental options with or without professional drivers. All vehicles come fully insured, GPS-equipped, and maintained to the highest standards.",
            benefits: [
                "Wide range of vehicles from economy to luxury",
                "Optional professional driver-guides",
                "Unlimited mileage packages available",
                "24/7 roadside assistance",
                "Airport pickup and drop-off",
                "Cross-border travel permits included"
            ],
            features: [
                {
                    icon: "faCar",
                    title: "Safari Land Cruisers",
                    description: "4x4 vehicles with pop-up roofs, perfect for game drives and wildlife photography."
                },
                {
                    icon: "faUsers",
                    title: "Self-Drive Options",
                    description: "Flexible self-drive rentals for independent travelers with comprehensive insurance."
                },
                {
                    icon: "faShieldAlt",
                    title: "Full Insurance",
                    description: "Comprehensive coverage including vehicle, passengers, and third-party liability."
                },
                {
                    icon: "faMapMarkedAlt",
                    title: "GPS & Support",
                    description: "All vehicles equipped with GPS navigation and 24/7 emergency support."
                }
            ],
            packages: [
                {
                    name: "Self-Drive Package",
                    price: "$80",
                    unit: "per day",
                    description: "Drive yourself, explore freely",
                    includes: [
                        "Vehicle rental (24 hours)",
                        "Unlimited mileage",
                        "Full insurance coverage",
                        "GPS navigation",
                        "24/7 roadside assistance"
                    ]
                },
                {
                    name: "Chauffeur Package",
                    price: "$150",
                    unit: "per day",
                    description: "Relax with a professional driver",
                    includes: [
                        "Vehicle with driver-guide",
                        "Fuel included",
                        "Driver accommodation",
                        "All permits and taxes",
                        "Flexible itinerary"
                    ]
                }
            ],
            trustBadges: [
                { icon: "faCar", title: "Modern Fleet", desc: "Well-maintained" },
                { icon: "faUsers", title: "Expert Drivers", desc: "Professional team" },
                { icon: "faShieldAlt", title: "Fully Insured", desc: "Complete coverage" },
                { icon: "faMapMarkedAlt", title: "GPS Equipped", desc: "Navigation ready" }
            ],
            testimonials: [
                {
                    name: "Marcus Peterson",
                    location: "Stockholm, Sweden",
                    text: "The Land Cruiser was in excellent condition and made our safari amazing. Self-drive option gave us great freedom!"
                },
                {
                    name: "Rachel Adams",
                    location: "Melbourne, Australia",
                    text: "Our driver was knowledgeable and friendly. The vehicle was comfortable for our 10-day journey."
                }
            ]
        },
        testimonials: {
            badge: "Testimonials",
            title: "What Our Clients Say",
            items: [
                {
                    name: "Sarah Nakato",
                    role: "Adventure Traveler",
                    image: "/img/content/wildlife-safari-1.jpg",
                    text: "The gorilla trekking in Bwindi was a once-in-a-lifetime experience. The guides were knowledgeable and very friendly!"
                },
                {
                    name: "David Okello",
                    role: "Safari Enthusiast",
                    image: "/img/content/wildlife-safari-2.jpg",
                    text: "Queen Elizabeth National Park safari exceeded my expectations. We saw lions, elephants, and even hippos in the wild!"
                },
                {
                    name: "Grace Achieng",
                    role: "Cultural Explorer",
                    image: "/img/content/wildlife-safari-3.jpg",
                    text: "Visiting the Ssese Islands was amazing. The beaches are pristine and the local community is welcoming and kind."
                }
            ]
        },
        honeymoon: {
            id: "honeymoon",
            badge: "ROMANCE",
            title: "Honeymoon Packages",
            subtitle: "Unforgettable romantic adventures in East Africa",
            overviewTitle: "Your Dream Honeymoon Awaits",
            overviewText: "Celebrate your love with an unforgettable East African honeymoon. We design romantic safari experiences combining thrilling wildlife encounters with luxurious accommodations, intimate dinners under the stars, and pristine beach relaxation. Every detail is crafted to create magical moments for newlyweds.",
            benefits: [
                "Private safari experiences for couples",
                "Luxury lodge accommodations with special honeymoon setups",
                "Romantic candlelit dinners in stunning settings",
                "Spa treatments and couples massages",
                "Beach extensions on Zanzibar or Kenyan coast",
                "Complimentary champagne and special surprises"
            ],
            features: [
                {
                    icon: "faHeart",
                    title: "Romantic Experiences",
                    description: "Private game drives, sunset cocktails, bush dinners, and surprise romantic gestures."
                },
                {
                    icon: "faHotel",
                    title: "Luxury Lodges",
                    description: "Hand-picked romantic lodges with private plunge pools and stunning views."
                },
                {
                    icon: "faUmbrellaBeach",
                    title: "Beach Extensions",
                    description: "Add beach relaxation in Zanzibar, Mombasa, or Seychelles to complete your honeymoon."
                },
                {
                    icon: "faCamera",
                    title: "Photo Moments",
                    description: "Capture your love story with optional professional photography sessions."
                }
            ],
            packages: [
                {
                    name: "Classic Romance",
                    price: "$3,500",
                    unit: "per couple (7 days)",
                    description: "Perfect safari honeymoon",
                    includes: [
                        "5 days luxury safari",
                        "2 days beach relaxation",
                        "Honeymoon suite upgrades",
                        "Romantic dinners",
                        "Champagne on arrival"
                    ]
                },
                {
                    name: "Ultimate Romance",
                    price: "$6,500",
                    unit: "per couple (10 days)",
                    description: "The ultimate honeymoon experience",
                    includes: [
                        "7 days exclusive safari",
                        "3 days private beach villa",
                        "Couples spa treatments",
                        "Private helicopter transfer",
                        "Professional photoshoot",
                        "All premium experiences"
                    ]
                }
            ],
            trustBadges: [
                { icon: "faHeart", title: "Romantic", desc: "Curated experiences" },
                { icon: "faHotel", title: "Luxury Stays", desc: "Premium lodges" },
                { icon: "faUmbrellaBeach", title: "Beach & Safari", desc: "Perfect blend" },
                { icon: "faStar", title: "Special Touches", desc: "Memorable moments" }
            ],
            testimonials: [
                {
                    name: "Sophie & James Wilson",
                    location: "London, UK",
                    text: "Our honeymoon was absolutely perfect! From the intimate game drives to the beachfront villa, every moment was magical."
                },
                {
                    name: "Maria & Carlos Santos",
                    location: "Barcelona, Spain",
                    text: "Bush & Beyond Tours created the honeymoon of our dreams. The attention to romantic details was incredible!"
                }
            ]
        },
        airTicketing: {
            id: "air-ticketing",
            badge: "AIR TRAVEL",
            title: "Air Ticketing",
            subtitle: "Seamless flight arrangements for your African journey",
            overviewTitle: "Professional Flight Booking Services",
            overviewText: "Let Bush & Beyond Tours handle all your flight arrangements. We work with major airlines to secure the best routes and competitive prices for your East African journey. From international connections to regional flights, we ensure smooth travel planning with flexible options and expert guidance.",
            benefits: [
                "Access to exclusive airline rates",
                "Multi-city and complex itinerary planning",
                "Flexible booking and change policies",
                "Regional flight coordination",
                "Airport transfer arrangements",
                "Travel insurance options"
            ],
            features: [
                {
                    icon: "faPlane",
                    title: "International Flights",
                    description: "Book flights from any global destination with optimized connections and minimal layovers."
                },
                {
                    icon: "faGlobe",
                    title: "Regional Connections",
                    description: "Internal flights within East Africa, including charter options to remote locations."
                },
                {
                    icon: "faShieldAlt",
                    title: "Travel Protection",
                    description: "Flexible cancellation policies and comprehensive travel insurance options."
                },
                {
                    icon: "faClock",
                    title: "Expert Support",
                    description: "24/7 assistance for flight changes, delays, or travel emergencies."
                }
            ],
            trustBadges: [
                { icon: "faPlane", title: "Best Rates", desc: "Competitive prices" },
                { icon: "faGlobe", title: "Global Network", desc: "All airlines" },
                { icon: "faShieldAlt", title: "Secure Booking", desc: "Protected payments" },
                { icon: "faClock", title: "24/7 Support", desc: "Always available" }
            ],
            packages: [
                {
                    name: "Basic Ticketing",
                    price: "$50",
                    unit: "service fee",
                    description: "Single flight booking",
                    includes: [
                        "Flight search & comparison",
                        "Best price guarantee",
                        "Booking assistance",
                        "Email confirmation"
                    ]
                },
                {
                    name: "Premium Service",
                    price: "$150",
                    unit: "service fee",
                    description: "Complex travel arrangements",
                    includes: [
                        "Multi-city planning",
                        "Route optimization",
                        "Transfer coordination",
                        "Priority support",
                        "Travel insurance setup"
                    ]
                }
            ],
            testimonials: [
                {
                    name: "Thomas Anderson",
                    location: "New York, USA",
                    text: "They found us great flight deals and handled all the connections perfectly. Very professional service!"
                },
                {
                    name: "Yuki Tanaka",
                    location: "Tokyo, Japan",
                    text: "Excellent service coordinating our complex itinerary across three countries. Made everything so easy!"
                }
            ]
        },
        consultancy: {
            id: "consultancy",
            badge: "EXPERT ADVICE",
            title: "Travel Consultancy",
            subtitle: "Professional travel planning and safari expertise",
            overviewTitle: "Professional Travel Consultancy Services",
            overviewText: "Planning a safari can be overwhelming with countless options and considerations. Our expert consultancy services provide professional guidance to design your perfect East African adventure. We leverage our extensive local knowledge and industry connections to create customized itineraries that match your interests, budget, and travel style.",
            benefits: [
                "Personalized itinerary design and planning",
                "Expert advice on destinations and timing",
                "Budget optimization and cost management",
                "Visa and documentation guidance",
                "Cultural insights and local tips",
                "Ongoing support throughout your journey"
            ],
            features: [
                {
                    icon: "faLightbulb",
                    title: "Custom Itinerary Design",
                    description: "Create your perfect safari based on your interests, budget, and travel preferences."
                },
                {
                    icon: "faBriefcase",
                    title: "Expert Destination Advice",
                    description: "Get insider knowledge on best times to visit, wildlife migration patterns, and hidden gems."
                },
                {
                    icon: "faChartLine",
                    title: "Budget Planning",
                    description: "Maximize your experience while staying within budget with our cost optimization expertise."
                },
                {
                    icon: "faMapMarkedAlt",
                    title: "Route Optimization",
                    description: "Design efficient routes that maximize wildlife viewing and minimize travel time."
                }
            ],
            trustBadges: [
                { icon: "faLightbulb", title: "Expert Advice", desc: "Years of experience" },
                { icon: "faBriefcase", title: "Custom Plans", desc: "Tailored solutions" },
                { icon: "faChartLine", title: "Best Value", desc: "Optimized budgets" },
                { icon: "faUsers", title: "Personal Service", desc: "Dedicated support" }
            ],
            packages: [
                {
                    name: "Basic Consultation",
                    price: "$100",
                    unit: "per session",
                    description: "One-hour expert advice",
                    includes: [
                        "60-minute video consultation",
                        "Destination recommendations",
                        "Basic itinerary outline",
                        "Email follow-up support"
                    ]
                },
                {
                    name: "Premium Planning",
                    price: "$500",
                    unit: "complete package",
                    description: "Full safari planning service",
                    includes: [
                        "Detailed custom itinerary",
                        "Accommodation recommendations",
                        "Budget breakdown",
                        "Booking assistance",
                        "Ongoing support",
                        "Travel documentation help"
                    ]
                }
            ],
            testimonials: [
                {
                    name: "Alexandra Brown",
                    location: "San Francisco, USA",
                    text: "The consultancy service was invaluable! They designed a perfect itinerary that matched our interests and budget."
                },
                {
                    name: "Henrik Nielsen",
                    location: "Copenhagen, Denmark",
                    text: "Expert advice saved us from costly mistakes. Their local knowledge and planning expertise was outstanding!"
                }
            ]
        }
    },
    community: {
        stats: [
            { icon: "users", num: "5,000+", label: "Community Members" },
            { icon: "map-marked-alt", num: "500+", label: "Safaris Completed" },
            { icon: "camera", num: "2,000+", label: "Photos Shared" },
            { icon: "globe", num: "45+", label: "Countries Reached" }
        ],
        testimonials: [
            {
                name: "Sarah Mitchell",
                location: "United States",
                text: "The gorilla trekking experience was absolutely life-changing. Everything was seamless from start to finish!",
                safari: "3-Day Gorilla Safari"
            },
            {
                name: "James & Emma",
                location: "United Kingdom",
                text: "Our honeymoon safari exceeded all expectations. The team's attention to detail made it truly special.",
                safari: "8-Day Uganda Safari"
            },
            {
                name: "Klaus Weber",
                location: "Germany",
                text: "Professional, knowledgeable guides and incredible wildlife encounters. Highly recommend!",
                safari: "6-Day Gorilla & Chimp Safari"
            }
        ],
        engagement: [
            {
                icon: "comments",
                title: "Community Forum",
                description: "Engage in discussions, share tips, and connect with fellow travelers who share your passion for African wildlife.",
                buttonText: "Join Discussions",
                href: "#"
            },
            {
                icon: "camera",
                title: "Photo Gallery",
                description: "Share your safari moments and browse stunning wildlife photography from our community members.",
                buttonText: "View Gallery",
                href: "/#gallery"
            },
            {
                icon: "user-friends",
                title: "Travel Buddies",
                description: "Find travel companions for group safaris and share costs while making new friends.",
                buttonText: "Find Buddies",
                href: "#"
            }
        ]
    },
    payment: {
        securityFeatures: [
            { icon: "shield-alt", title: "Secure Payments", desc: "256-bit SSL encryption" },
            { icon: "lock", title: "Data Protection", desc: "Your info is safe with us" },
            { icon: "headset", title: "24/7 Support", desc: "We're here to help" }
        ],
        reasonsToPayOnline: [
            "Instant payment confirmation",
            "Secure encrypted transactions",
            "Multiple currency support",
            "Email receipt provided",
            "24/7 payment processing"
        ],
        acceptedCurrencies: ["USD", "EUR", "GBP", "UGX"]
    }
};

export default siteConfig;