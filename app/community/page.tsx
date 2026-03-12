import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faComments, faHeart, faCamera, faGlobe, faQuoteLeft, faPaperPlane, faUserFriends, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import siteConfig from "../siteConfig";

const CommunityPage = () => {
    const socialLinks = [
        { icon: faFacebookF, url: "#", name: "Facebook", followers: "12K", color: "hover:bg-blue-600" },
        { icon: faInstagram, url: "#", name: "Instagram", followers: "8.5K", color: "hover:bg-pink-600" },
        { icon: faTwitter, url: "#", name: "Twitter", followers: "5.2K", color: "hover:bg-sky-500" },
        { icon: faYoutube, url: "#", name: "YouTube", followers: "3.1K", color: "hover:bg-red-600" },
        { icon: faLinkedinIn, url: "#", name: "LinkedIn", followers: "2.8K", color: "hover:bg-blue-700" },
        { icon: faWhatsapp, url: "#", name: "WhatsApp", followers: "Join", color: "hover:bg-green-600" },
    ];

    const communityStats = [
        { icon: faUsers, num: "5,000+", label: "Community Members" },
        { icon: faMapMarkedAlt, num: "500+", label: "Safaris Completed" },
        { icon: faCamera, num: "2,000+", label: "Photos Shared" },
        { icon: faGlobe, num: "45+", label: "Countries Reached" }
    ];

    const testimonials = [
        {
            name: "Sarah Mitchell",
            location: "United States",
            text: `The gorilla trekking experience was absolutely life-changing. ${siteConfig.company.name} made everything seamless from start to finish!`,
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
    ];

    const engagementOptions = [
        {
            icon: faComments,
            title: "Community Forum",
            description: "Engage in discussions, share tips, and connect with fellow travelers who share your passion for African wildlife.",
            buttonText: "Join Discussions",
            color: "bg-[#212121]",
            href: "#"
        },
        {
            icon: faCamera,
            title: "Photo Gallery",
            description: "Share your safari moments and browse stunning wildlife photography from our community members.",
            buttonText: "View Gallery",
            color: "bg-gradient-to-br from-[#7AB730] to-[#5a8a20]",
            href: "/#gallery"
        },
        {
            icon: faUserFriends,
            title: "Travel Buddies",
            description: "Find travel companions for group safaris and share costs while making new friends.",
            buttonText: "Find Buddies",
            color: "bg-[#212121]",
            href: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-96 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">JOIN THE ADVENTURE</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">{siteConfig.company.name}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Community</h1>
                    <p className="text-gray-300 max-w-2xl">Connect with fellow travelers, share experiences, and become part of our growing safari family</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Community Stats Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {communityStats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] mx-auto mb-3">
                                    <FontAwesomeIcon icon={stat.icon} className="text-lg" />
                                </div>
                                <p className="font-bold text-[#212121] text-2xl">{stat.num}</p>
                                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Media & Newsletter Row */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Follow Us */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-1 bg-[#7AB730]"></div>
                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Connect With Us</span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#212121] mb-6">Follow Our Adventures</h2>
                        <p className="text-gray-600 mb-6">Stay updated with the latest safari stories, wildlife photos, and travel inspiration across our social channels.</p>

                        <div className="grid grid-cols-3 gap-3">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:text-white transition-all ${link.color}`}
                                >
                                    <FontAwesomeIcon icon={link.icon} className="text-xl mb-2" />
                                    <span className="text-xs font-medium">{link.name}</span>
                                    <span className="text-xs text-gray-400 mt-1">{link.followers}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-gradient-to-br from-[#7AB730] to-[#5a8a20] rounded-lg shadow-md p-8 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-1 bg-white/50"></div>
                            <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">Stay Updated</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
                        <p className="text-white/80 mb-6">Get exclusive offers, travel tips, and safari stories delivered straight to your inbox. No spam, just adventure!</p>

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 outline-none focus:border-white/50 transition"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 outline-none focus:border-white/50 transition"
                                />
                            </div>
                            <button className="w-full bg-white text-[#7AB730] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                Subscribe Now
                            </button>
                        </div>
                        <p className="text-white/60 text-xs mt-4 text-center">Join 3,000+ subscribers. Unsubscribe anytime.</p>
                    </div>
                </div>

                {/* Community Engagement Options */}
                <div className="mb-12">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-[#7AB730]"></div>
                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Get Involved</span>
                            <div className="w-12 h-1 bg-[#7AB730]"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#212121]">Ways to Engage</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {engagementOptions.map((option, i) => (
                            <div key={i} className={`${option.color} rounded-lg shadow-md p-8 text-white`}>
                                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                                    <FontAwesomeIcon icon={option.icon} className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                                <p className="text-white/80 text-sm mb-6">{option.description}</p>
                                <Link href={option.href} className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition-colors px-3">
                                    {option.buttonText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-12">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-[#7AB730]"></div>
                            <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Testimonials</span>
                            <div className="w-12 h-1 bg-[#7AB730]"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#212121]">What Our Travelers Say</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-[#7AB730] mb-4">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl opacity-50" />
                                </div>
                                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-bold text-[#212121]">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    <span className="inline-block mt-2 bg-[#7AB730]/10 text-[#7AB730] text-xs px-3 py-1 rounded-full">
                                        {testimonial.safari}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative overflow-hidden bg-[#212121] rounded-xl p-8 md:p-12 text-white text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#7AB730]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7AB730]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative">
                        <div className="w-16 h-16 bg-[#7AB730] rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faHeart} className="text-2xl" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join the Adventure?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Become part of our community and start planning your dream safari today. Your African adventure awaits!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-[#7AB730] hover:bg-[#6a9e2a] text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                Plan Your Safari
                            </Link>
                            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;