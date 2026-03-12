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
            subtext: "Mon-Sat, 8am-6pm EAT"
        },
        {
            icon: faEnvelope,
            label: "Email",
            value: siteConfig.contacts.email,
            subtext: "We reply within 24 hours"
        },
        {
            icon: faLocationDot,
            label: "Address",
            value: siteConfig.contacts.location,
            subtext: "East Africa"
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
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-80 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">GET IN TOUCH</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">{siteConfig.company.name}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-300 max-w-2xl">We&apos;re here to help you plan your next unforgettable safari experience</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Contact Info Cards */}
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {contactInfo.map((info, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] mx-auto mb-3">
                                    <FontAwesomeIcon icon={info.icon} className="text-lg" />
                                </div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{info.label}</p>
                                <p className="font-semibold text-[#212121] text-sm">{info.value}</p>
                                <p className="text-xs text-gray-500 mt-1">{info.subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-1 bg-[#7AB730]"></div>
                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Send a Message</span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#212121] mb-6">We&apos;d Love to Hear From You</h2>

                        <div className="space-y-5">
                            <div>
                                <label className="block mb-2 font-medium text-sm text-[#212121]">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7AB730] focus:border-[#7AB730] outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-sm text-[#212121]">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7AB730] focus:border-[#7AB730] outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-sm text-[#212121]">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7AB730] focus:border-[#7AB730] outline-none transition-all"
                                    placeholder="+256 700 000000"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-sm text-[#212121]">Message</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-[#7AB730] focus:border-[#7AB730] outline-none transition-all resize-none"
                                    placeholder="Tell us about your dream safari..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#7AB730] hover:bg-[#6a9e2a] text-white font-bold py-3 rounded-lg transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Right Side Info */}
                    <div className="space-y-6">
                        {/* Why Contact Us */}
                        <div className="bg-[#212121] rounded-lg shadow-md p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                            <ul className="space-y-3">
                                {contactReasons.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <FontAwesomeIcon icon={faCheck} className="text-[#7AB730] text-sm" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div className="bg-gradient-to-br from-[#7AB730] to-[#5a8a20] rounded-lg shadow-md p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Follow Our Adventures</h3>
                            <p className="text-white/80 mb-6 text-sm">
                                Stay connected and get inspired for your next safari. Follow us on social media for travel tips, wildlife photos, and exclusive offers.
                            </p>
                            <div className="flex gap-3">
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
                                            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                            title={social.name}
                                        >
                                            <FontAwesomeIcon icon={social.icon} className="text-lg" />
                                        </a>
                                    ))}
                            </div>
                        </div>

                        {/* Quick Response */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7AB730]">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] flex-shrink-0">
                                    <FontAwesomeIcon icon={faBolt} className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#212121] mb-1">Quick Response Guaranteed</h4>
                                    <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours. For urgent matters, call us directly or message us on WhatsApp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-200 h-64 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] mx-auto mb-4">
                                <FontAwesomeIcon icon={faMapLocationDot} className="text-2xl" />
                            </div>
                            <p className="text-gray-500 font-medium">Kampala, Uganda</p>
                            <p className="text-gray-400 text-sm">Interactive map can be embedded here</p>
                        </div>
                    </div>
                    <div className="p-6 bg-[#212121] text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="font-bold text-lg">Visit Our Office</h3>
                                <p className="text-gray-400 text-sm">We welcome walk-in visitors during business hours</p>
                            </div>
                            <button className="bg-[#7AB730] hover:bg-[#6a9e2a] text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;