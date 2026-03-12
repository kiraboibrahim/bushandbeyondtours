import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import siteConfig from "@/app/siteConfig";

const Topbar = () => (
    <div className="w-full bg-white pt-3 hidden lg:block">
        <div className="max-w-[1140px] mx-auto px-[15px]">
            <div className="flex flex-wrap -mx-[15px]">
                <div className="lg:w-2/3 w-full px-[15px] text-center lg:text-left mb-2 lg:mb-0">
                    <div className="inline-flex items-center">
                        <p className="m-0">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#7AB730] hover:text-[#527a20]" />
                            <span className="font-semibold text-[#212121] text-sm">{siteConfig.contacts.email}</span>
                        </p>
                        <p className="text-[#656565] px-3 m-0">|</p>
                        <p className="m-0">
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-[#7AB730] hover:text-[#527a20]" />
                            <span className="font-semibold text-[#212121] text-sm">{siteConfig.contacts.phoneNumber}</span>
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
                                    className="text-[#7AB730] px-3 hover:text-[#527a20] hover:underline"
                                >
                                    <FontAwesomeIcon icon={icon} />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Topbar;