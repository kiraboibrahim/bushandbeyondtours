"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faCalendarAlt,
    faMapMarkerAlt,
    faBinoculars,
    faCheckCircle,
    faTimesCircle,
    faChevronRight,
    faPaw,
    faHotel,
    faUtensils,
    faStar,
    faCamera
} from '@fortawesome/free-solid-svg-icons';
import siteConfig from '../siteConfig';

interface ItineraryDay {
    day: number;
    title: string;
    location: string;
    accommodation: string;
    description: string;
    highlights: string[];
}

interface SafariStat {
    num: string;
    label: string;
}

interface SafariData {
    id: string;
    title: string;
    tagline: string;
    price: string;
    duration: string;
    locations: string[];
    stats: SafariStat[];
    itinerary: ItineraryDay[];
    includes: string[];
    excludes: string[];
}

interface SafariPageProps {
    safari: SafariData;
}

const SafariPage = ({ safari }: SafariPageProps) => {
    const [activeDay, setActiveDay] = useState(1);

    return (
        <div className="min-h-screen bg-brand-bone/20 font-sans pb-20">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-brand-green overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 to-brand-green"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
                    <div className="bg-brand-gold text-brand-green text-[10px] font-bold px-6 py-2 rounded-full mb-8 tracking-[4px] uppercase shadow-2xl">
                        {safari.duration} EXPEDITION
                    </div>
                    <p className="text-brand-gold font-serif text-lg tracking-[5px] uppercase mb-6 opacity-90">
                        {siteConfig.company.name}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic tracking-tight drop-shadow-2xl">
                        {safari.title}
                    </h1>
                    <div className="w-24 h-1 bg-brand-gold mb-8"></div>
                    <p className="text-white/90 max-w-3xl text-xl lg:text-2xl font-serif italic leading-relaxed px-4">
                        {safari.tagline}
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-3">
                        {safari.locations.map((loc, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Stats Bar */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 -mt-20 relative z-20 mb-16 border border-brand-bone/50">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {safari.stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <p className="text-brand-gold font-serif font-bold text-3xl lg:text-4xl mb-2 transition-transform group-hover:scale-110 duration-300">
                                    {stat.num}
                                </p>
                                <p className="text-brand-charcoal/40 text-[10px] font-bold uppercase tracking-[2px]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-20">
                        {/* Summary/Overview */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-1 bg-brand-gold"></div>
                                <span className="text-brand-gold font-bold uppercase tracking-[4px] text-xs">The Experience</span>
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-brand-green mb-8 italic">Safari Overview</h2>
                            <div className="prose prose-lg text-brand-charcoal/80 font-serif leading-relaxed italic border-l-4 border-brand-gold pl-8">
                                <p>
                                    Experience the magic of the Pearl of Africa on this carefully curated {safari.duration} expedition.
                                    Our signature safaris are designed to showcase Uganda's most iconic landscapes and wildlife,
                                    from the ancient mist-covered forests to the vast savannah plains.
                                </p>
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-1 bg-brand-gold"></div>
                                <span className="text-brand-gold font-bold uppercase tracking-[4px] text-xs">The Journey</span>
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-brand-green mb-10 italic">Day by Day Itinerary</h2>

                            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-12">
                                {safari.itinerary.map((item) => (
                                    <button
                                        key={item.day}
                                        onClick={() => setActiveDay(item.day)}
                                        className={`h-14 rounded-xl font-bold transition-all duration-500 flex items-center justify-center text-sm tracking-widest ${activeDay === item.day
                                                ? 'bg-brand-green text-white shadow-xl scale-110 ring-4 ring-brand-gold/20'
                                                : 'bg-white text-brand-charcoal/40 hover:bg-brand-bone hover:text-brand-green shadow-md'
                                            }`}
                                    >
                                        {item.day}
                                    </button>
                                ))}
                            </div>

                            {safari.itinerary.filter(item => item.day === activeDay).map((day) => (
                                <div key={day.day} className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-brand-bone/50 transform transition-all duration-500">
                                    <div className="flex flex-wrap items-center gap-4 mb-8">
                                        <span className="bg-brand-gold text-brand-green text-[10px] font-bold px-6 py-2 rounded-full tracking-[3px] uppercase">
                                            DAY {day.day}
                                        </span>
                                        <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
                                            {day.location}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-green mb-8">{day.title}</h3>

                                    <p className="text-brand-charcoal/70 leading-relaxed font-serif text-lg lg:text-xl italic mb-10 border-l-2 border-brand-bone pl-6">
                                        {day.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-bone">
                                        <div className="bg-brand-bone/30 rounded-2xl p-6">
                                            <h4 className="font-serif font-bold text-brand-green mb-6 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faStar} className="text-brand-gold text-sm" />
                                                Daily Highlights
                                            </h4>
                                            <div className="grid gap-3">
                                                {day.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-brand-charcoal/80">
                                                        <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
                                                        {h}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-brand-bone/30 rounded-2xl p-6 flex flex-col justify-center">
                                            <h4 className="font-serif font-bold text-brand-green mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faHotel} className="text-brand-gold text-sm" />
                                                Accommodation
                                            </h4>
                                            <p className="text-brand-green font-bold text-lg mb-1">{day.accommodation}</p>
                                            <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Premium Selection</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-12">
                        {/* Booking Card */}
                        <div className="bg-brand-green rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="relative z-10">
                                <p className="text-brand-gold font-bold uppercase tracking-[3px] text-[10px] mb-6">Complete Expedition</p>
                                <div className="mb-8">
                                    <p className="text-xs text-white/60 mb-2 uppercase tracking-widest font-bold">Starts From</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl lg:text-5xl font-serif font-bold text-brand-gold">US$ {safari.price}</span>
                                        <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Per Person</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-5 h-5 bg-brand-gold text-brand-green rounded-full flex items-center justify-center text-[10px]">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Luxury Accommodations
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-5 h-5 bg-brand-gold text-brand-green rounded-full flex items-center justify-center text-[10px]">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Expert Local Guides
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-5 h-5 bg-brand-gold text-brand-green rounded-full flex items-center justify-center text-[10px]">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        All Permits Included
                                    </div>
                                </div>

                                <button className="w-full bg-brand-gold hover:bg-white text-brand-green font-bold py-5 rounded-xl transition-all duration-300 uppercase tracking-[4px] text-[10px] shadow-2xl group">
                                    Reserve Your Journey
                                    <FontAwesomeIcon icon={faChevronRight} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </button>

                                <p className="text-center text-white/40 text-[10px] uppercase tracking-widest font-bold mt-6">
                                    Limited availability for {new Date().getFullYear()}
                                </p>
                            </div>
                        </div>

                        {/* Inclusions Card */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-brand-bone/50">
                            <h3 className="text-2xl font-serif font-bold text-brand-green mb-8 flex items-center gap-3 italic">
                                <FontAwesomeIcon icon={faStar} className="text-brand-gold text-sm" />
                                Package Details
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-[3px] mb-6">What's Included</h4>
                                    <div className="space-y-4">
                                        {safari.includes.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-brand-charcoal/70 font-medium">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-brand-green mt-1 text-xs" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-brand-bone">
                                    <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-[3px] mb-6">What's Excluded</h4>
                                    <div className="space-y-4">
                                        {safari.excludes.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-brand-charcoal/50 font-medium">
                                                <FontAwesomeIcon icon={faTimesCircle} className="text-red-400/50 mt-1 text-xs" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default SafariPage;
