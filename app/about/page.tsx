import Link from "next/link";

import siteConfig from "../siteConfig";

const AboutUs = () => {
    const values = [
        {
            title: "Excellence",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
            description: "Our team of expert travel specialists brings over 15 years of combined safari experience across East Africa. We partner exclusively with top-tier guides known for their professionalism and deep local knowledge, ensuring every journey is infused with authentic insights. From your first inquiry to your final farewell, you're in capable, seasoned hands."
        },
        {
            title: "Passion",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            ),
            description: "Your safari will be 100% tailor-made, designed around your interests, dreams, and budget. We don't take you on 'our safaris' – instead, you create the perfect trip with guidance from our specialists. Leveraging our wealth of experience, we provide insights and recommendations to ensure your journey is crafted precisely to your desires."
        },
        {
            title: "Authenticity",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ),
            description: "Proudly Ugandan-owned and managed, we bring authentic local perspective to every safari we craft. With deep roots in the region, we understand the land, the culture, and the people. Our service guides you through genuine experiences that connect you with the real heart of East Africa."
        },
        {
            title: "Community",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            ),
            description: "Tourism is a powerful tool for improving livelihoods in local communities. We actively participate in enriching the lives of communities we interact with – offering training to young people, sourcing produce locally, and contributing to economic growth and empowerment in the regions where we operate."
        },
        {
            title: "Responsibility",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ),
            description: "While delivering extraordinary African experiences, we are equally dedicated to sustainability and preserving wildlife, natural environments, and cultural heritage. We carefully select eco-conscious lodges, promote responsible tourism practices, and provide reusable water bottles to all guests – because protecting Africa's wilderness is everyone's responsibility."
        }
    ];

    const stats = [
        { num: "10+", label: "Years Experience" },
        { num: "500+", label: "Happy Travelers" },
        { num: "50+", label: "Safari Packages" },
        { num: "100%", label: "Tailor-Made" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-96 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">ABOUT US</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">{siteConfig.company.name}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiences · People · Places</h1>
                    <p className="text-gray-300 max-w-2xl">Crafting unforgettable African adventures since 2014</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Stats Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="border-r last:border-r-0 border-gray-200">
                                <p className="text-[#7AB730] font-bold text-2xl md:text-3xl">{stat.num}</p>
                                <p className="text-gray-500 text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Who We Are */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-1 bg-[#7AB730]"></div>
                        <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Who We Are</span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#212121] bg-gradient-to-r from-[#7AB730] to-[#527a20] bg-clip-text text-transparent mb-6">
                        {siteConfig.company.name}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                TripTonic Safaris was founded in 2014 by passionate Ugandan travel enthusiasts with a bold vision: to share the breathtaking beauty of East Africa with the world. Over a decade later, we have grown into one of Uganda&lsquo;s trusted tour operators, specializing in gorilla tracking, wildlife safaris, and authentic cultural experiences.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our name reflects our philosophy – we believe travel should be invigorating, energizing, and transformative. Like a tonic for the soul, our safaris are designed to refresh your spirit, broaden your horizons, and create memories that last a lifetime.
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Drawing on extensive experience and in-depth knowledge of the region&lsquo;s diverse attractions, we are committed to curating unique and authentic safari experiences that transcend the ordinary. Whether you&lsquo;re seeking your first African wildlife encounter, an adrenaline-fueled adventure, serene relaxation, or a special occasion like a honeymoon, our team creates personalized itineraries tailored to your preferences and budget.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We invite you to embark on a journey of discovery across the breathtaking landscapes of Uganda and beyond. Your adventure begins here with us.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-8">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-[#7AB730]"></div>
                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Our Values</span>
                            <div className="w-12 h-1 bg-[#7AB730]"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#212121]">What Drives Us</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 bg-[#7AB730]/10 rounded-lg flex items-center justify-center text-[#7AB730] mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#212121] mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#212121] rounded-lg shadow-md p-8 text-white">
                        <div className="w-14 h-14 bg-[#7AB730] rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To create extraordinary safari experiences that transcend the ordinary by blending extensive regional knowledge, personalized service, and a commitment to sustainability. Our goal is to craft memorable adventures that inspire, educate, and delight our clients while fostering respect for the environment and local communities.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#7AB730] to-[#5a8a20] rounded-lg shadow-md p-8 text-white">
                        <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-white/90 leading-relaxed">
                            To be a leading catalyst for sustainable tourism in East Africa, creating unparalleled safari experiences that not only showcase the natural and cultural wonders of the region but also drive conservation efforts and community empowerment for generations to come.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="relative overflow-hidden bg-gray-100 rounded-xl p-8 text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#7AB730]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7AB730]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative">
                        <h3 className="text-2xl font-bold text-[#212121] mb-4">Ready to Start Your Adventure?</h3>
                        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                            Let us craft your perfect East African safari. Contact our team today and begin planning the journey of a lifetime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-[#7AB730] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#6a9e2a] transition-colors">
                                Plan Your Safari
                            </Link>
                            <Link href="/contact" className="bg-[#212121] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#333] transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;