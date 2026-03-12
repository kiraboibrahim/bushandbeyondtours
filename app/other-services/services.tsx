"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faArrowRight,
    faPhone,
    faEnvelope,
    faClock,
    faStar,
    faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

import type { Service } from './types';
import siteConfig from "../siteConfig";

interface ServicePageProps {
    service: Service;
}
const ServicePage = ({ service }: ServicePageProps) => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
                        {service.badge}
                    </div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">
                        {siteConfig.company.name}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                    <p className="text-gray-300 max-w-2xl text-lg">{service.subtitle}</p>
                </div>
            </div>

            {/* Trust Bar */}
            <div className="bg-white rounded-xl shadow-lg max-w-6xl mx-auto px-4 -mt-16 relative z-10 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                    {service.trustBadges.map((badge, i) => (
                        <div key={i} className="text-center">
                            <div className="w-12 h-12 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] mx-auto mb-3">
                                <FontAwesomeIcon icon={badge.icon} className="text-lg" />
                            </div>
                            <p className="font-semibold text-[#212121] text-sm">{badge.title}</p>
                            <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Tabs */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="flex border-b border-gray-200">
                                {["overview", "features", "pricing"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 py-4 px-6 font-semibold text-sm uppercase tracking-wider transition-colors ${activeTab === tab
                                            ? "bg-[#7AB730] text-white"
                                            : "bg-white text-gray-600 hover:bg-gray-50"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8">
                                {activeTab === "overview" && (
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-1 bg-[#7AB730]"></div>
                                                <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">
                                                    Overview
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-[#212121] mb-4">
                                                {service.overviewTitle}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.overviewText}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-6">
                                            <h3 className="font-bold text-[#212121] mb-4">Key Benefits</h3>
                                            <ul className="space-y-3">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <FontAwesomeIcon
                                                            icon={faCheckCircle}
                                                            className="text-[#7AB730] mt-1 flex-shrink-0"
                                                        />
                                                        <span className="text-gray-700">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "features" && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-1 bg-[#7AB730]"></div>
                                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">
                                                Features
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#212121] mb-6">
                                            What&lsquo;s Included
                                        </h2>
                                        <div className="grid gap-4">
                                            {service.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#7AB730] transition-colors"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 bg-[#7AB730]/10 rounded-lg flex items-center justify-center text-[#7AB730] flex-shrink-0">
                                                            <FontAwesomeIcon icon={feature.icon} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-[#212121] mb-2">
                                                                {feature.title}
                                                            </h4>
                                                            <p className="text-gray-600 text-sm">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "pricing" && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-1 bg-[#7AB730]"></div>
                                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">
                                                Pricing
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#212121] mb-6">
                                            Service Packages
                                        </h2>
                                        <div className="space-y-4">
                                            {service.packages.map((pkg, i) => (
                                                <div
                                                    key={i}
                                                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#7AB730] transition-all"
                                                >
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-[#212121] mb-2">
                                                                {pkg.name}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm">{pkg.description}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-3xl font-bold text-[#7AB730]">
                                                                {pkg.price}
                                                            </p>
                                                            <p className="text-xs text-gray-500">{pkg.unit}</p>
                                                        </div>
                                                    </div>
                                                    <ul className="space-y-2 mb-4">
                                                        {pkg.includes.map((item, j) => (
                                                            <li key={j} className="flex items-center gap-2 text-sm">
                                                                <FontAwesomeIcon
                                                                    icon={faCheckCircle}
                                                                    className="text-[#7AB730] text-xs"
                                                                />
                                                                <span className="text-gray-700">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <button className="w-full bg-[#7AB730] hover:bg-[#6a9e2a] text-white font-bold py-3 rounded-lg transition-colors">
                                                        Request Quote
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-[#212121] mb-6">
                                What Our Clients Say
                            </h3>
                            <div className="space-y-6">
                                {service.testimonials.map((testimonial, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#7AB730]"
                                    >
                                        <FontAwesomeIcon
                                            icon={faQuoteLeft}
                                            className="text-[#7AB730] text-2xl mb-4"
                                        />
                                        <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&ldquo;</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] font-bold">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#212121]">{testimonial.name}</p>
                                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Contact */}
                        <div className="bg-gradient-to-br from-[#7AB730] to-[#5a8a20] rounded-lg shadow-md p-6 text-white">
                            <h3 className="text-lg font-bold mb-4">Get Started Today</h3>
                            <p className="text-white/90 text-sm mb-6">
                                Contact us now to learn more about our {service.title.toLowerCase()}.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faPhone} className="text-white/80" />
                                    <span className="text-sm">+256 700 000000</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white/80" />
                                    <span className="text-sm">info@triptonicsafaris.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faClock} className="text-white/80" />
                                    <span className="text-sm">24/7 Support</span>
                                </div>
                            </div>
                            <button className="w-full bg-white text-[#7AB730] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                Request Quote <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-[#212121] rounded-lg shadow-md p-6 text-white">
                            <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                            <ul className="space-y-3">
                                {[
                                    "15+ years of experience",
                                    "Licensed & certified",
                                    "Competitive pricing",
                                    "Excellent customer service",
                                    "Available 24/7",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#7AB730]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Destinations */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7AB730]">
                            <h4 className="font-bold text-[#212121] mb-4">Popular Destinations</h4>
                            <div className="space-y-2">
                                {["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa"].map(
                                    (dest, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                                        >
                                            <span className="text-gray-700 text-sm">{dest}</span>
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="text-[#7AB730] text-xs"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="flex justify-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className="text-[#7AB730]"
                                    />
                                ))}
                            </div>
                            <p className="font-bold text-[#212121] text-lg">4.9/5.0</p>
                            <p className="text-sm text-gray-500">Based on 500+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default ServicePage;