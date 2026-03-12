import {
    faPlane,
    faHotel,
    faCar,
    faClock,
    faMapMarkedAlt,
    faShieldAlt,
    faUsers,
    faStar,
    faGlobe,
    faUmbrellaBeach,
    faCamera,
    faHeart,
    faLightbulb,
    faBriefcase,
    faChartLine
} from "@fortawesome/free-solid-svg-icons";

import type { Service } from './types';
import siteConfig from "../siteConfig";

const services: Record<string, Service> = {
    carRentals: {
        badge: "VEHICLE HIRE",
        title: "Car Rentals",
        subtitle: "Premium vehicles for your East African adventure",
        trustBadges: [
            { icon: faCar, title: "Modern Fleet", desc: "Well-maintained" },
            { icon: faUsers, title: "Expert Drivers", desc: "Professional team" },
            { icon: faShieldAlt, title: "Fully Insured", desc: "Complete coverage" },
            { icon: faMapMarkedAlt, title: "GPS Equipped", desc: "Navigation ready" },
        ],
        overviewTitle: "Professional Car Rental Services",
        overviewText:
            "Explore East Africa at your own pace with our fleet of well-maintained vehicles. From luxury safari Land Cruisers to comfortable sedans, we offer flexible rental options with or without professional drivers. All vehicles come fully insured, GPS-equipped, and maintained to the highest standards.",
        benefits: [
            "Wide range of vehicles from economy to luxury",
            "Optional professional driver-guides",
            "Unlimited mileage packages available",
            "24/7 roadside assistance",
            "Airport pickup and drop-off",
            "Cross-border travel permits included",
        ],
        features: [
            {
                icon: faCar,
                title: "Safari Land Cruisers",
                description:
                    "4x4 vehicles with pop-up roofs, perfect for game drives and wildlife photography.",
            },
            {
                icon: faUsers,
                title: "Self-Drive Options",
                description:
                    "Flexible self-drive rentals for independent travelers with comprehensive insurance.",
            },
            {
                icon: faShieldAlt,
                title: "Full Insurance",
                description:
                    "Comprehensive coverage including vehicle, passengers, and third-party liability.",
            },
            {
                icon: faMapMarkedAlt,
                title: "GPS & Support",
                description:
                    "All vehicles equipped with GPS navigation and 24/7 emergency support.",
            },
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
                    "24/7 roadside assistance",
                ],
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
                    "Flexible itinerary",
                ],
            },
        ],
        testimonials: [
            {
                name: "Marcus Peterson",
                location: "Stockholm, Sweden",
                text: "The Land Cruiser was in excellent condition and made our safari amazing. Self-drive option gave us great freedom!",
            },
            {
                name: "Rachel Adams",
                location: "Melbourne, Australia",
                text: "Our driver was knowledgeable and friendly. The vehicle was comfortable for our 10-day journey.",
            },
        ],
    },
    honeymoon: {
        badge: "ROMANCE",
        title: "Honeymoon Package",
        subtitle: "Unforgettable romantic adventures in East Africa",
        trustBadges: [
            { icon: faHeart, title: "Romantic", desc: "Curated experiences" },
            { icon: faHotel, title: "Luxury Stays", desc: "Premium lodges" },
            { icon: faUmbrellaBeach, title: "Beach & Safari", desc: "Perfect blend" },
            { icon: faStar, title: "Special Touches", desc: "Memorable moments" },
        ],
        overviewTitle: "Your Dream Honeymoon Awaits",
        overviewText:
            "Celebrate your love with an unforgettable East African honeymoon. We design romantic safari experiences combining thrilling wildlife encounters with luxurious accommodations, intimate dinners under the stars, and pristine beach relaxation. Every detail is crafted to create magical moments for newlyweds.",
        benefits: [
            "Private safari experiences for couples",
            "Luxury lodge accommodations with special honeymoon setups",
            "Romantic candlelit dinners in stunning settings",
            "Spa treatments and couples massages",
            "Beach extensions on Zanzibar or Kenyan coast",
            "Complimentary champagne and special surprises",
        ],
        features: [
            {
                icon: faHeart,
                title: "Romantic Experiences",
                description:
                    "Private game drives, sunset cocktails, bush dinners, and surprise romantic gestures.",
            },
            {
                icon: faHotel,
                title: "Luxury Lodges",
                description:
                    "Hand-picked romantic lodges with private plunge pools and stunning views.",
            },
            {
                icon: faUmbrellaBeach,
                title: "Beach Extensions",
                description:
                    "Add beach relaxation in Zanzibar, Mombasa, or Seychelles to complete your honeymoon.",
            },
            {
                icon: faCamera,
                title: "Photo Moments",
                description:
                    "Capture your love story with optional professional photography sessions.",
            },
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
                    "Champagne on arrival",
                ],
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
                    "All premium experiences",
                ],
            },
        ],
        testimonials: [
            {
                name: "Sophie & James Wilson",
                location: "London, UK",
                text: "Our honeymoon was absolutely perfect! From the intimate game drives to the beachfront villa, every moment was magical.",
            },
            {
                name: "Maria & Carlos Santos",
                location: "Barcelona, Spain",
                text: `${siteConfig.company.name} created the honeymoon of our dreams. The attention to romantic details was incredible!`,
            },
        ],
    },
    airTicketing: {
        badge: "AIR TRAVEL",
        title: "Air Ticketing",
        subtitle: "Seamless flight arrangements for your African journey",
        trustBadges: [
            { icon: faPlane, title: "Best Rates", desc: "Competitive prices" },
            { icon: faGlobe, title: "Global Network", desc: "All airlines" },
            { icon: faShieldAlt, title: "Secure Booking", desc: "Protected payments" },
            { icon: faClock, title: "24/7 Support", desc: "Always available" },
        ],
        overviewTitle: "Professional Flight Booking Services",
        overviewText:
            `Let ${siteConfig.company.name} handle all your flight arrangements. We work with major airlines to secure the best routes and competitive prices for your East African journey. From international connections to regional flights, we ensure smooth travel planning with flexible options and expert guidance.`,
        benefits: [
            "Access to exclusive airline rates",
            "Multi-city and complex itinerary planning",
            "Flexible booking and change policies",
            "Regional flight coordination",
            "Airport transfer arrangements",
            "Travel insurance options",
        ],
        features: [
            {
                icon: faPlane,
                title: "International Flights",
                description:
                    "Book flights from any global destination with optimized connections and minimal layovers.",
            },
            {
                icon: faGlobe,
                title: "Regional Connections",
                description:
                    "Internal flights within East Africa, including charter options to remote locations.",
            },
            {
                icon: faShieldAlt,
                title: "Travel Protection",
                description:
                    "Flexible cancellation policies and comprehensive travel insurance options.",
            },
            {
                icon: faClock,
                title: "Expert Support",
                description:
                    "24/7 assistance for flight changes, delays, or travel emergencies.",
            },
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
                    "Email confirmation",
                ],
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
                    "Travel insurance setup",
                ],
            },
        ],
        testimonials: [
            {
                name: "Thomas Anderson",
                location: "New York, USA",
                text: "They found us great flight deals and handled all the connections perfectly. Very professional service!",
            },
            {
                name: "Yuki Tanaka",
                location: "Tokyo, Japan",
                text: "Excellent service coordinating our complex itinerary across three countries. Made everything so easy!",
            },
        ],
    },
    consultancy: {
        badge: "EXPERT ADVICE",
        title: "Consultancy",
        subtitle: "Professional travel planning and safari expertise",
        trustBadges: [
            { icon: faLightbulb, title: "Expert Advice", desc: "Years of experience" },
            { icon: faBriefcase, title: "Custom Plans", desc: "Tailored solutions" },
            { icon: faChartLine, title: "Best Value", desc: "Optimized budgets" },
            { icon: faUsers, title: "Personal Service", desc: "Dedicated support" },
        ],
        overviewTitle: "Professional Travel Consultancy Services",
        overviewText:
            "Planning a safari can be overwhelming with countless options and considerations. Our expert consultancy services provide professional guidance to design your perfect East African adventure. We leverage our extensive local knowledge and industry connections to create customized itineraries that match your interests, budget, and travel style.",
        benefits: [
            "Personalized itinerary design and planning",
            "Expert advice on destinations and timing",
            "Budget optimization and cost management",
            "Visa and documentation guidance",
            "Cultural insights and local tips",
            "Ongoing support throughout your journey",
        ],
        features: [
            {
                icon: faLightbulb,
                title: "Custom Itinerary Design",
                description:
                    "Create your perfect safari based on your interests, budget, and travel preferences.",
            },
            {
                icon: faBriefcase,
                title: "Expert Destination Advice",
                description:
                    "Get insider knowledge on best times to visit, wildlife migration patterns, and hidden gems.",
            },
            {
                icon: faChartLine,
                title: "Budget Planning",
                description:
                    "Maximize your experience while staying within budget with our cost optimization expertise.",
            },
            {
                icon: faMapMarkedAlt,
                title: "Route Optimization",
                description:
                    "Design efficient routes that maximize wildlife viewing and minimize travel time.",
            },
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
                    "Email follow-up support",
                ],
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
                    "Travel documentation help",
                ],
            },
        ],
        testimonials: [
            {
                name: "Alexandra Brown",
                location: "San Francisco, USA",
                text: "The consultancy service was invaluable! They designed a perfect itinerary that matched our interests and budget.",
            },
            {
                name: "Henrik Nielsen",
                location: "Copenhagen, Denmark",
                text: "Expert advice saved us from costly mistakes. Their local knowledge and planning expertise was outstanding!",
            },
        ],
    },
};

export default services;