"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faArrowRight,
    faPhone,
    faEnvelope,
    faClock,
    faStar,
    faQuoteLeft,
    faCar,
    faUsers,
    faShieldAlt,
    faMapMarkedAlt,
    faHeart,
    faHotel,
    faUmbrellaBeach,
    faPlane,
    faGlobe,
    faLightbulb,
    faBriefcase,
    faChartLine,
    faCamera
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import type { Service } from './types';
import siteConfig from "../siteConfig";

interface ServicePageProps {
    service: Service;
}

const iconMap: Record<string, IconDefinition> = {
    faCar,
    faUsers,
    faShieldAlt,
    faMapMarkedAlt,
    faHeart,
    faHotel,
    faUmbrellaBeach,
    faPlane,
    faGlobe,
    faLightbulb,
    faBriefcase,
    faChartLine,
    faStar,
    faClock,
    faCamera
};

const getIcon = (icon: string | IconDefinition): any => {
    if (typeof icon === 'string') {
        return iconMap[icon] || faCheckCircle;
    }
    return icon;
};

const ServicePage = ({ service }: ServicePageProps) => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-brand-bone/30 font-sans pb-20">
            {/* Hero Section */}
            <div className="relative h-[500px] bg-brand-green overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-brand-gold text-brand-green text-[10px] font-bold px-6 py-2 rounded-full mb-8 tracking-[4px] uppercase shadow-xl transform hover:scale-105 transition-transform">
                        {service.badge}
                    </div>
                    <p className="text-brand-gold font-serif text-lg tracking-[5px] uppercase mb-6 opacity-90">
                        {siteConfig.company.name}
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 italic tracking-tight drop-shadow-lg">{service.title}</h1>
                    <div className="w-24 h-1 bg-brand-gold mb-8"></div>
                    <p className="text-white/90 max-w-3xl text-xl lg:text-2xl font-serif italic leading-relaxed px-4">{service.subtitle}</p>
                </div>
            </div>

            {/* Trust Bar */}
            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10 mb-20">
                <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden border border-brand-bone/50">
                    {service.trustBadges.map((badge, i) => (
                        <div key={i} className={`text-center group p-10 transition-colors duration-500 hover:bg-brand-bone/20 ${i < service.trustBadges.length - 1 ? 'lg:border-r border-brand-bone' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-brand-bone' : ''}`}>
                            <div className="w-16 h-16 bg-brand-bone text-brand-green rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-brand-green group-hover:text-white shadow-xl group-hover:shadow-brand-green/30">
                                <FontAwesomeIcon icon={getIcon(badge.icon)} className="text-xl transition-transform duration-500 group-hover:scale-125" />
                            </div>
                            <h3 className="font-serif font-bold text-brand-green text-base lg:text-lg mb-2">{badge.title}</h3>
                            <p className="text-[10px] text-brand-charcoal/50 uppercase font-bold tracking-[2px] leading-relaxed">{badge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Tabs Navigation */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-brand-bone/50">
                            <div className="flex border-b border-brand-bone">
                                {["overview", "features", "pricing"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 py-5 px-6 font-bold text-xs uppercase tracking-[3px] transition-all duration-300 ${activeTab === tab
                                            ? "bg-brand-green text-white shadow-inner"
                                            : "bg-white text-brand-charcoal/40 hover:bg-brand-bone/30 hover:text-brand-green"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="p-10 lg:p-12">
                                {activeTab === "overview" && (
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-1 bg-brand-gold"></div>
                                                <span className="text-brand-gold font-bold uppercase tracking-[3px] text-xs">
                                                    Overview
                                                </span>
                                            </div>
                                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-green mb-6 leading-tight">
                                                {service.overviewTitle}
                                            </h2>
                                            <p className="text-brand-charcoal/80 leading-relaxed font-serif text-lg lg:text-xl italic border-l-4 border-brand-gold pl-6 py-2 mb-8">
                                                {service.overviewText}
                                            </p>
                                        </div>

                                        <div className="bg-brand-bone/30 rounded-xl p-8 border border-brand-gold/20 shadow-inner">
                                            <h3 className="font-serif font-bold text-xl text-brand-green mb-6 flex items-center gap-3">
                                                <div className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faStar} className="text-brand-gold text-xs" />
                                                </div>
                                                Key Benefits
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-center gap-4 text-brand-charcoal/80 font-medium text-sm">
                                                        <div className="w-5 h-5 bg-brand-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-[10px] shadow-md">
                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                        </div>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "features" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-1 bg-brand-gold"></div>
                                            <span className="text-brand-gold font-bold uppercase tracking-[3px] text-xs">
                                                Services
                                            </span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-green mb-8">
                                            Premium Inclusions
                                        </h2>
                                        <div className="grid grid-cols-1 gap-6">
                                            {service.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-white border-2 border-brand-bone group hover:border-brand-gold rounded-xl p-8 transition-all duration-300 hover:shadow-2xl flex items-start gap-6 group"
                                                >
                                                    <div className="w-16 h-16 bg-brand-bone text-brand-green rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white shadow-inner">
                                                        <FontAwesomeIcon icon={getIcon(feature.icon)} className="text-2xl" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-serif font-bold text-xl text-brand-green mb-2 lg:text-2xl">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-brand-charcoal/70 text-sm font-medium leading-relaxed group-hover:text-brand-charcoal">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "pricing" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-1 bg-brand-gold"></div>
                                            <span className="text-brand-gold font-bold uppercase tracking-[3px] text-xs">
                                                Options
                                            </span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-green mb-10">
                                            Service Packages
                                        </h2>
                                        <div className="grid gap-8">
                                            {service.packages.map((pkg, i) => (
                                                <div
                                                    key={i}
                                                    className="relative bg-white border-2 border-brand-bone rounded-xl p-10 hover:border-brand-gold transition-all duration-500 hover:shadow-2xl group"
                                                >
                                                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8 pb-8 border-b border-brand-bone">
                                                        <div>
                                                            <h3 className="text-2xl font-serif font-bold text-brand-green mb-2 lg:text-3xl">
                                                                {pkg.name}
                                                            </h3>
                                                            <p className="text-brand-charcoal/60 text-sm font-medium">{pkg.description}</p>
                                                        </div>
                                                        <div className="flex items-baseline gap-2">
                                                            <span className="text-brand-charcoal/40 text-xs font-bold uppercase tracking-widest">Starts at</span>
                                                            <p className="text-4xl font-serif font-bold text-brand-green group-hover:text-brand-gold transition-colors">
                                                                {pkg.price}
                                                            </p>
                                                            <p className="text-xs text-brand-charcoal/40 font-bold uppercase tracking-widest">/ {pkg.unit}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-10">
                                                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-6">Package Highlights</h4>
                                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            {pkg.includes.map((item, j) => (
                                                                <li key={j} className="flex items-center gap-3 text-sm font-medium text-brand-charcoal/80">
                                                                    <div className="w-5 h-5 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">
                                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                                    </div>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <button className="w-full bg-brand-green hover:bg-brand-gold text-white hover:text-brand-green font-bold py-5 rounded-lg transition-all duration-300 uppercase tracking-[3px] text-xs shadow-xl">
                                                        Custom Quote Request
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="bg-white rounded-xl shadow-xl p-12 lg:p-16 border border-brand-bone/50">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-1 bg-brand-gold"></div>
                                <span className="text-brand-gold font-bold uppercase tracking-[3px] text-xs">Testimonials</span>
                            </div>
                            <h3 className="text-4xl font-serif font-bold text-brand-green mb-12 italic">
                                Client Experiences
                            </h3>
                            <div className="grid gap-10">
                                {service.testimonials.map((testimonial, i) => (
                                    <div
                                        key={i}
                                        className="bg-brand-bone/30 rounded-2xl p-10 relative group hover:bg-white hover:shadow-2xl transition-all duration-300 hover:border-brand-gold border-2 border-transparent"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FontAwesomeIcon icon={faQuoteLeft} className="text-6xl text-brand-green" />
                                        </div>
                                        <p className="text-brand-charcoal/80 mb-10 text-lg lg:text-xl font-serif leading-relaxed italic pr-12">
                                            &ldquo;{testimonial.text}&ldquo;
                                        </p>
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold border-4 border-brand-bone">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-serif font-bold text-brand-green text-xl">{testimonial.name}</p>
                                                <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[3px] mt-1">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">
                        {/* Quick Contact */}
                        <div className="bg-brand-green rounded-xl shadow-2xl p-10 text-white relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Plan Your Safari</h3>
                            <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
                                Contact us now for professional advice on our {service.title.toLowerCase()} service.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-gold/30">
                                        <FontAwesomeIcon icon={faPhone} className="text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">Call Now</p>
                                        <p className="text-sm font-bold tracking-wider">{siteConfig.contacts.phoneNumber}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-gold/30">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">Email Us</p>
                                        <p className="text-xs font-bold truncate tracking-wider">{siteConfig.contacts.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-gold/30">
                                        <FontAwesomeIcon icon={faClock} className="text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">Availability</p>
                                        <p className="text-sm font-bold tracking-wider">{siteConfig.contacts.businessHours}</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact" className="w-full bg-brand-gold text-brand-green font-bold py-5 rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl uppercase tracking-[2px] text-xs">
                                Request Quote <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-brand-charcoal rounded-xl shadow-xl p-10 text-white">
                            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">Why Choose Us?</h3>
                            <ul className="space-y-5">
                                {[
                                    "10+ years of local expertise",
                                    "Fully licensed tour operator",
                                    "Transparent & competitive pricing",
                                    "Tailor-made itineraries",
                                    "Professional expert guides",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/70 text-sm font-medium">
                                        <div className="w-5 h-5 bg-brand-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-[10px] shadow-md">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Destinations */}
                        <div className="bg-white rounded-xl shadow-xl p-8 border-l-8 border-brand-gold border border-brand-bone/50">
                            <h4 className="font-serif font-bold text-2xl text-brand-green mb-8">Popular Regions</h4>
                            <div className="grid gap-3">
                                {["Bwindi Impenetrable", "Kibale Rainforest", "Murchison Falls", "Queen Elizabeth", "Lake Mburo"].map(
                                    (dest, i) => (
                                        <div
                                            key={i}
                                            className="group flex items-center justify-between py-4 border-b border-brand-bone last:border-0 hover:bg-brand-bone/20 px-2 rounded transition-colors"
                                        >
                                            <span className="text-brand-charcoal font-medium text-sm transition-colors group-hover:text-brand-green">{dest}</span>
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="text-brand-gold text-[10px] transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className="bg-brand-bone/50 rounded-xl shadow-md p-10 text-center border-t-4 border-brand-gold border border-brand-bone">
                            <div className="flex justify-center gap-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className="text-brand-gold text-lg drop-shadow"
                                    />
                                ))}
                            </div>
                            <p className="font-serif font-bold text-brand-green text-3xl mb-1">4.9/5.0</p>
                            <p className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-widest mt-2">Based on 500+ Verified reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;