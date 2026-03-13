"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { submitNewsletter } from "../../services/api";
import siteConfig from "@/app/siteConfig";

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const socialIcons = [
        { icon: faFacebookF, key: "facebook" },
        { icon: faTwitter, key: "twitter" },
        { icon: faLinkedinIn, key: "linkedin" },
        { icon: faInstagram, key: "instagram" },
    ];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email || loading) return;

        setLoading(true);
        try {
            await submitNewsletter({ email });
            alert("Successfully subscribed to our newsletter!");
            setEmail("");
        } catch (err) {
            console.error(err);
            alert("Failed to subscribe. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="footer">
            <footer
                className="w-full bg-[#212121] text-white/50 py-12 px-6 lg:px-12"
                style={{ marginTop: 90 }}
            >
                <div className="max-w-[1140px] mx-auto pt-12">
                    <div className="flex flex-wrap -mx-4">
                        {/* Brand & Social */}
                        <div className="w-full lg:w-4/12 md:w-1/2 px-4 mb-12">
                            <a href="#" className="inline-block mb-2 text-brand-gold">
                                <h1 className="text-[1.5rem] font-serif font-bold leading-[1.2] mb-2">
                                    {siteConfig.company.name}
                                </h1>
                            </a>
                            <p className="leading-[1.5] mb-4">
                                {siteConfig.company.name} offers immersive safari experiences in Uganda&lsquo;s
                                most iconic national parks. Explore wildlife, breathtaking
                                landscapes, and luxury lodges with expert guides.
                            </p>
                            <h6
                                className="text-white uppercase mt-6 mb-4 text-base font-medium tracking-[5px]"
                            >
                                Follow Us
                            </h6>
                            <div className="flex justify-start">
                                {socialIcons.map(
                                    ({ icon, key }) => {
                                        const url = (siteConfig.socials as any)[key];
                                        return url ? (
                                            <a
                                                key={key}
                                                className="inline-flex items-center justify-center w-[36px] h-[36px] text-center border border-[#7AB730] text-[#7AB730] mr-2 transition-all duration-150 hover:bg-[#7AB730] hover:text-white"
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FontAwesomeIcon icon={icon} />
                                            </a>
                                        ) : null;
                                    }
                                )}
                            </div>
                        </div>

                        {/* Our Services */}
                        <div className="w-full lg:w-2/12 md:w-1/2 px-4 mb-12">
                            <h5
                                className="text-white uppercase mb-6 text-xl font-medium tracking-[5px]"
                            >
                                Our Services
                            </h5>
                            <div className="flex flex-col justify-start">
                                {siteConfig.footer.services.map((link, i) => (
                                    <a
                                        key={i}
                                        className="text-white/50 mb-2 no-underline hover:text-white transition-colors"
                                        href={link.href}
                                    >
                                        <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="w-full lg:w-2/12 md:w-1/2 px-4 mb-12">
                            <h5
                                className="text-white uppercase mb-6 text-xl font-medium tracking-[5px]"
                            >
                                Useful Links
                            </h5>
                            <div className="flex flex-col justify-start">
                                {siteConfig.footer.usefulLinks.map(
                                    (link, i) => (
                                        <a
                                            key={i}
                                            className="text-white/50 mb-2 no-underline hover:text-white transition-colors"
                                            href={link.href}
                                        >
                                            <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                                            {link.label}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Contact & Newsletter */}
                        <div className="w-full lg:w-4/12 md:w-1/2 px-4 mb-12">
                            <h5
                                className="text-white uppercase mb-6 text-xl font-medium tracking-[5px]"
                            >
                                Contact Us
                            </h5>
                            <p className="text-white/60 mb-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-brand-gold" />
                                {siteConfig.contacts.location}
                            </p>
                            <p className="text-white/60 mb-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-brand-gold" />
                                {siteConfig.contacts.phoneNumber}
                            </p>
                            <p className="text-white/60 mb-4">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-brand-gold" />
                                {siteConfig.contacts.email}
                            </p>
                            <p className="text-white/50 mb-4">
                                {siteConfig.contacts.poBox}
                            </p>

                            <h6
                                className="text-white uppercase mt-6 mb-4 text-sm font-semibold tracking-[4px]"
                            >
                                Newsletter
                            </h6>
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="flex">
                                    <input
                                        type="email"
                                        className="flex-1 border border-white/20 bg-white/5 text-white placeholder:text-white/40 px-4 py-[15px] outline-none focus:border-brand-gold transition-all"
                                        placeholder="Your Email Address"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-brand-gold text-brand-green px-6 font-bold text-sm uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-brand-green disabled:opacity-65"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span
                                                className="inline-block w-4 h-4 border-2 border-brand-green border-t-transparent rounded-full animate-spin"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            "Join"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer >

            <div
                className="w-full bg-[#212121] text-white border-t border-white/10 py-6 px-6 md:px-12"
            >
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 text-center md:text-left mb-4 md:mb-0">
                            <p className="m-0 text-white/50">
                                &copy; {new Date().getFullYear()}{" "}
                                <a href="#" className="text-white no-underline hover:underline">
                                    {siteConfig.company.name}
                                </a>
                                . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;