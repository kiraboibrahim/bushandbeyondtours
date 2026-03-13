"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faComments,
    faHeart,
    faCamera,
    faGlobe,
    faQuoteLeft,
    faPaperPlane,
    faUserFriends,
    faMapMarkedAlt,
    faShieldAlt,
    faLock,
    faHeadset
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import siteConfig from "../siteConfig";

const iconMap: { [key: string]: any } = {
    "users": faUsers,
    "map-marked-alt": faMapMarkedAlt,
    "camera": faCamera,
    "globe": faGlobe,
    "comments": faComments,
    "user-friends": faUserFriends,
    "shield-alt": faShieldAlt,
    "lock": faLock,
    "headset": faHeadset
};

const CommunityPage = () => {
    const socialLinks = [
        { icon: faFacebookF, url: siteConfig.socials.facebook, name: "Facebook", followers: "12K", color: "hover:bg-brand-green" },
        { icon: faInstagram, url: siteConfig.socials.instagram, name: "Instagram", followers: "8.5K", color: "hover:bg-brand-gold" },
        { icon: faTwitter, url: siteConfig.socials.twitter, name: "Twitter", followers: "5.2K", color: "hover:bg-brand-green" },
        { icon: faLinkedinIn, url: siteConfig.socials.linkedin, name: "LinkedIn", followers: "2.8K", color: "hover:bg-brand-gold" },
        { icon: faWhatsapp, url: "#", name: "WhatsApp", followers: "Join", color: "hover:bg-brand-green" },
    ];

    return (
        <div className="min-h-screen bg-brand-bone/30 font-sans selection:bg-brand-gold/30">
            {/* Hero */}
            <div className="relative h-[60vh] bg-brand-charcoal overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-transparent to-brand-charcoal z-10"></div>
                    <div className="absolute inset-0 bg-brand-charcoal/20 z-10"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-20">
                    <div className="bg-brand-gold text-brand-charcoal text-[10px] uppercase font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest shadow-lg">
                        JOIN THE ADVENTURE
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-2xl">
                        Our <span className="text-brand-gold">Community</span>
                    </h1>
                    <p className="text-brand-bone/80 max-w-2xl text-lg font-light leading-relaxed">
                        Connect with fellow travelers, share unforgettable experiences, and become part of the <span className="font-medium text-brand-gold">{siteConfig.company.name}</span> family.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bone/30 to-transparent z-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 relative -mt-24 z-30">
                {/* Community Stats Bar */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-16 border border-brand-gold/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {siteConfig.community.stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center text-brand-green mx-auto mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-brand-green/20 group-hover:-translate-y-1">
                                    <FontAwesomeIcon icon={iconMap[stat.icon]} className="text-2xl" />
                                </div>
                                <p className="font-serif font-bold text-brand-charcoal text-3xl mb-1">{stat.num}</p>
                                <p className="text-[11px] uppercase tracking-widest text-brand-charcoal/50 font-bold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Media & Newsletter Row */}
                <div className="grid lg:grid-cols-5 gap-8 mb-20">
                    {/* Follow Us */}
                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-10 border border-brand-gold/5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-0.5 bg-brand-gold"></div>
                                <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px]">SOCIAL CONNECTIONS</span>
                            </div>
                            <h2 className="text-4xl font-serif text-brand-charcoal mb-6 leading-tight">Follow Our <span className="italic">Adventures</span></h2>
                            <p className="text-brand-charcoal/60 mb-8 max-w-xl text-lg font-light">
                                Stay inspired with daily glimpses into the Pearl of Africa. From rare bird sightings to sunset savannah views, our social channels are your windows to the wild.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center p-6 bg-brand-bone/20 rounded-xl transition-all duration-500 border border-transparent hover:border-brand-gold/20 hover:text-white group ${link.color}`}
                                >
                                    <FontAwesomeIcon icon={link.icon} className="text-2xl mb-3 text-brand-charcoal group-hover:text-white transition-colors" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal group-hover:text-white">{link.name}</span>
                                    <span className="text-[10px] text-brand-charcoal/40 group-hover:text-white/60 mt-1 font-medium">{link.followers}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2 bg-brand-green rounded-2xl shadow-xl p-10 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-0.5 bg-brand-gold"></div>
                                <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px]">EXCLUSIVE INSIGHTS</span>
                            </div>
                            <h2 className="text-4xl font-serif mb-6 leading-tight">The Safari <span className="italic">Dispatch</span></h2>
                            <p className="text-brand-bone/80 mb-8 font-light text-lg leading-relaxed">
                                Curated safari news, seasonal wildlife migrations, and exclusive member offers delivered to your inbox.
                            </p>

                            <div className="space-y-4 mt-auto">
                                <div className="group/input">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-white/30 outline-none focus:border-brand-gold/50 focus:bg-white/20 transition-all font-light"
                                    />
                                </div>
                                <div className="group/input">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-white/30 outline-none focus:border-brand-gold/50 focus:bg-white/20 transition-all font-light"
                                    />
                                </div>
                                <button className="w-full bg-brand-gold text-brand-charcoal font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-brand-gold/10 group/btn translate-y-2">
                                    <FontAwesomeIcon icon={faPaperPlane} className="group-hover/btn:translate-x-1 transition-transform" />
                                    SUBSCRIBE NOW
                                </button>
                            </div>
                            <p className="text-white/40 text-[10px] uppercase font-bold text-center mt-6 tracking-widest">JOIN 3,000+ EXPLORERS</p>
                        </div>
                    </div>
                </div>

                {/* Ways to Engage */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-0.5 bg-brand-gold"></div>
                            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">COMMUNITY PILLARS</span>
                            <div className="w-12 h-0.5 bg-brand-gold"></div>
                        </div>
                        <h2 className="text-5xl font-serif text-brand-charcoal leading-tight">Elevate Your <span className="italic">Presence</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {siteConfig.community.engagement.map((option, i) => (
                            <div key={i} className="bg-white border border-brand-charcoal/5 rounded-2xl shadow-lg p-10 hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-500 group flex flex-col">
                                <div className="w-16 h-16 bg-brand-bone/50 rounded-2xl flex items-center justify-center mb-8 border border-brand-bone group-hover:border-brand-gold/30 transition-all duration-500">
                                    <FontAwesomeIcon icon={iconMap[option.icon]} className="text-3xl text-brand-charcoal group-hover:text-brand-gold transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{option.title}</h3>
                                <p className="text-brand-charcoal/60 text-base font-light mb-8 leading-relaxed italic">&quot;{option.description}&quot;</p>
                                <div className="mt-auto">
                                    <Link href={option.href} className="inline-flex items-center text-brand-charcoal font-bold text-xs uppercase tracking-widest group-hover:text-brand-gold transition-colors duration-300">
                                        {option.buttonText}
                                        <div className="w-8 h-px bg-brand-gold ml-4 group-hover:w-12 transition-all duration-500"></div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-24 relative overflow-hidden">
                    <div className="text-center mb-16 relative z-10">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-0.5 bg-brand-gold"></div>
                            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">VOICES FROM THE WILD</span>
                            <div className="w-12 h-0.5 bg-brand-gold"></div>
                        </div>
                        <h2 className="text-5xl font-serif text-brand-charcoal leading-tight">Global <span className="italic">Accolades</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {siteConfig.community.testimonials.map((testimonial, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg p-10 border border-brand-bone relative group hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute -top-4 -left-4 text-brand-green/10 mb-6 group-hover:text-brand-gold/10 transition-colors duration-500">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="text-8xl" />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-brand-charcoal/80 mb-8 italic text-lg font-light leading-relaxed font-serif">
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                    <div className="border-t border-brand-bone pt-6 flex items-center justify-between">
                                        <div>
                                            <p className="font-serif font-bold text-lg text-brand-charcoal">{testimonial.name}</p>
                                            <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-brand-charcoal/40 mt-1">{testimonial.location}</p>
                                        </div>
                                        <span className="bg-brand-bone/50 text-brand-charcoal/60 text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-brand-bone">
                                            {testimonial.safari}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative overflow-hidden bg-brand-charcoal rounded-3xl p-12 md:p-20 text-white text-center group shadow-2xl">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-brand-gold/10">
                            <FontAwesomeIcon icon={faHeart} className="text-3xl text-brand-charcoal" />
                        </div>
                        <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready to <span className="italic">Begin</span> Your Legacy?</h3>
                        <p className="text-brand-bone/60 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            Join our community of global explorers and start planning a safari that resonates with your soul. The wild is calling.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-brand-gold hover:bg-white text-brand-charcoal px-10 py-5 rounded-xl font-bold transition-all duration-300 shadow-lg uppercase tracking-widest text-xs">
                                PLAN YOUR EXPERIENCE
                            </Link>
                            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 border border-white/10 uppercase tracking-widest text-xs backdrop-blur-sm">
                                INQUIRE NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;