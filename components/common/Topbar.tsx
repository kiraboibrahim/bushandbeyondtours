import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import siteConfig from "@/app/siteConfig";

const Topbar = () => (
    <div className="w-full bg-brand-green pt-3 hidden lg:block text-brand-bone/80">
        <div className="max-w-[1140px] mx-auto px-[15px]">
            <div className="flex flex-wrap -mx-[15px]">
                <div className="lg:w-2/3 w-full px-[15px] text-center lg:text-left mb-2 lg:mb-0">
                    <div className="inline-flex items-center">
                        <p className="m-0 flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-brand-gold hover:text-white transition-colors" />
                            <span className="font-medium text-sm tracking-wide">{siteConfig.contacts.email}</span>
                        </p>
                        <p className="text-white/20 px-3 m-0">|</p>
                        <p className="m-0 flex items-center">
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-brand-gold hover:text-white transition-colors" />
                            <span className="font-medium text-sm tracking-wide">{siteConfig.contacts.phoneNumber}</span>
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full px-[15px] text-center lg:text-right">
                    <div className="inline-flex items-center">
                        {(
                            Object.entries({
                                facebook: faFacebookF,
                                twitter: faTwitter,
                                linkedin: faLinkedinIn,
                                instagram: faInstagram,
                                youtube: faYoutube,
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            }) as [string, any][]
                        )
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .filter(([key]) => (siteConfig.socials as any)[key])
                            .map(([key, icon]) => (
                                <Link
                                    key={key}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    href={(siteConfig.socials as any)[key]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-bone/60 px-3 hover:text-brand-gold transition-colors"
                                >
                                    <FontAwesomeIcon icon={icon} className="text-sm" />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Topbar;