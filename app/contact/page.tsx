import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faBolt, faCheck, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import siteConfig from "../siteConfig";
const ContactPage = () => {
    const contactInfo = [
        {
            icon: faPhone,
            label: "Phone",
            value: siteConfig.contacts.phoneNumber,
            subtext: "Primary Support Line"
        },
        {
            icon: faEnvelope,
            label: "Email",
            value: siteConfig.contacts.email,
            subtext: "Inquiries & Bookings"
        },
        {
            icon: faLocationDot,
            label: "Address",
            value: siteConfig.contacts.location,
            subtext: siteConfig.contacts.poBox
        },
        {
            icon: faClock,
            label: "Business Hours",
            value: siteConfig.contacts.businessHours,
            subtext: "Sunday: By appointment"
        }
    ];

    const socialLinks = [
        { name: "Facebook", icon: faFacebook, key: "facebook" },
        { name: "Instagram", icon: faInstagram, key: "instagram" },
        { name: "Twitter", icon: faTwitter, key: "twitter" },
        { name: "WhatsApp", icon: faWhatsapp, key: "whatsapp" }
    ];

    const contactReasons = [
        "Custom safari package inquiries",
        "Gorilla & chimp permit availability",
        "Group booking discounts",
        "Corporate retreat planning",
        "Honeymoon & special occasions",
        "Travel advice & recommendations"
    ];

    return (
        <div className="min-h-screen bg-brand-bone/30 font-sans">
            {/* Hero */}
            <div className="relative h-[400px] bg-brand-charcoal overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.12"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-brand-gold text-brand-charcoal text-[10px] font-bold px-5 py-1.5 rounded-full mb-8 tracking-[0.4em] uppercase shadow-lg">
                        {siteConfig.contacts.hero.badge}
                    </div>
                    <p className="text-brand-gold font-serif italic tracking-widest text-lg mb-4">{siteConfig.company.name}</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 italic">{siteConfig.contacts.hero.title}</h1>
                    <p className="text-white/60 max-w-3xl text-lg font-light leading-relaxed">
                        {siteConfig.contacts.hero.tagline}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Contact Info Cards */}
                <div className="bg-white rounded-2xl shadow-2xl p-10 -mt-24 relative z-10 mb-20 border border-brand-charcoal/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {contactInfo.map((info, i) => (
                            <div key={i} className="text-center group border-b lg:border-b-0 lg:border-r last:border-0 border-brand-bone px-4 pb-8 lg:pb-0">
                                <div className="w-16 h-16 bg-brand-bone text-brand-charcoal rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-brand-charcoal group-hover:text-white shadow-inner transform group-hover:-translate-y-2">
                                    <FontAwesomeIcon icon={info.icon} className="text-2xl" />
                                </div>
                                <p className="text-[10px] text-brand-gold uppercase font-bold tracking-[3px] mb-3">{info.label}</p>
                                <p className="font-serif font-bold text-brand-charcoal text-lg mb-2">{info.value}</p>
                                <p className="text-xs text-brand-charcoal/40 font-medium tracking-wide">{info.subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-16 items-start mb-20">
                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-white rounded-[2rem] shadow-2xl p-12 lg:p-16 border border-brand-charcoal/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-0 bg-brand-gold"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-[2px] bg-brand-gold"></div>
                                <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs font-sans">Reach Out</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-12 italic leading-tight">Send an Inquiry</h2>

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label className="block mb-3 font-bold text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/50 group-focus-within:text-brand-gold transition-colors">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-brand-bone/30 border-b-2 border-brand-bone focus:border-brand-gold py-4 focus:outline-none transition-all placeholder:text-brand-charcoal/20 text-brand-charcoal font-serif text-lg"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block mb-3 font-bold text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/50 group-focus-within:text-brand-gold transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-brand-bone/30 border-b-2 border-brand-bone focus:border-brand-gold py-4 focus:outline-none transition-all placeholder:text-brand-charcoal/20 text-brand-charcoal font-serif text-lg"
                                            placeholder="you@domain.com"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block mb-3 font-bold text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/50 group-focus-within:text-brand-gold transition-colors">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-brand-bone/30 border-b-2 border-brand-bone focus:border-brand-gold py-4 focus:outline-none transition-all placeholder:text-brand-charcoal/20 text-brand-charcoal font-serif text-lg"
                                        placeholder="+256..."
                                    />
                                </div>

                                <div className="group">
                                    <label className="block mb-3 font-bold text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/50 group-focus-within:text-brand-gold transition-colors">Message</label>
                                    <textarea
                                        className="w-full bg-brand-bone/30 border-b-2 border-brand-bone focus:border-brand-gold py-4 h-40 focus:outline-none transition-all resize-none placeholder:text-brand-charcoal/20 text-brand-charcoal font-serif text-lg"
                                        placeholder="Tell us about your dream safari plans..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal font-bold py-6 rounded-2xl transition-all duration-500 uppercase tracking-[0.3em] text-[10px] shadow-3xl hover:shadow-brand-gold/20 flex items-center justify-center gap-4 group"
                                >
                                    Send Message <FontAwesomeIcon icon={faBolt} className="transition-transform group-hover:rotate-12" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side Info */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Why Contact Us */}
                        <div className="bg-brand-charcoal rounded-[2rem] shadow-2xl p-12 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                <FontAwesomeIcon icon={faCheck} className="text-9xl" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-10 text-brand-gold italic px-2 border-l-4 border-brand-gold">Expert Guidance</h3>
                            <ul className="space-y-6">
                                {siteConfig.contacts.reasons.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/70 font-light group/item">
                                        <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1 border border-brand-gold/20 group-hover/item:bg-brand-gold/30 transition-colors">
                                            <FontAwesomeIcon icon={faCheck} className="text-brand-gold text-[8px]" />
                                        </div>
                                        <span className="text-lg leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div className="bg-brand-gold rounded-[2rem] shadow-2xl p-12 text-brand-charcoal">
                            <h3 className="text-3xl font-serif font-bold mb-6 italic underline underline-offset-8 decoration-brand-charcoal/10">Follow Us</h3>
                            <p className="text-brand-charcoal/70 mb-10 text-lg font-light leading-relaxed">
                                Join our community on social media for daily wildlife updates and exclusive travel stories.
                            </p>
                            <div className="flex gap-6">
                                {socialLinks
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .filter(social => (siteConfig.socials as any)[social.key])
                                    .map((social, i) => (
                                        <a
                                            key={i}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            href={(siteConfig.socials as any)[social.key]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 bg-white/40 hover:bg-brand-charcoal hover:text-white rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl backdrop-blur-sm group"
                                            title={social.name}
                                        >
                                            <FontAwesomeIcon icon={social.icon} className="text-xl transition-transform group-hover:scale-110" />
                                        </a>
                                    ))}
                            </div>
                        </div>

                        {/* Quick Response */}
                        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-brand-gold">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-brand-bone text-brand-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                    <FontAwesomeIcon icon={faBolt} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-brand-green text-lg mb-2">Quick Response Guaranteed</h4>
                                    <p className="text-brand-charcoal/70 text-sm font-medium leading-relaxed">We respond to all inquiries within 24 hours. For urgent matters, call us directly or message us on WhatsApp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-brand-charcoal/5">
                    <div className="relative h-[250px] bg-brand-bone/30 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #0B4231 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        <div className="text-center z-10">
                            <div className="w-24 h-24 bg-white text-brand-gold rounded-full flex items-center justify-center shadow-2xl mx-auto mb-8 transform -rotate-12 border border-brand-bone">
                                <FontAwesomeIcon icon={faMapLocationDot} className="text-4xl" />
                            </div>
                            <h3 className="text-4xl font-serif font-bold text-brand-charcoal italic">{siteConfig.contacts.location.split(',')[0]}</h3>
                            <p className="text-brand-charcoal/40 font-medium uppercase tracking-[0.3em] text-[10px] mt-2">Visit our flagship office</p>
                        </div>
                    </div>
                    <div className="bg-brand-charcoal py-10 px-12 text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 max-w-6xl mx-auto">
                            <div className="flex items-center gap-6">
                                <div className="w-px h-12 bg-brand-gold/30"></div>
                                <div>
                                    <h4 className="font-serif font-bold text-2xl text-brand-gold italic mb-1">Corporate Headquarters</h4>
                                    <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">{siteConfig.contacts.location}</p>
                                </div>
                            </div>
                            <button className="bg-brand-gold hover:bg-white text-brand-charcoal font-bold py-5 px-12 rounded-full transition-all duration-500 uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center gap-4 group">
                                Get Directions <FontAwesomeIcon icon={faLocationDot} className="animate-bounce" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;