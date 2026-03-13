import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TeamMember } from '@/models/TeamMember';

import siteConfig from '@/app/siteConfig';

const TeamSection = () => {
    const teamMembers = siteConfig.images.team as TeamMember[];
    const socialIcons: Record<string, IconDefinition> = {
        twitter: faTwitter,
        facebook: faFacebookF,
        instagram: faInstagram,
        linkedin: faLinkedinIn,
    };

    if (!teamMembers || teamMembers.length === 0) {
        return null;
    }

    return (
        <div className="w-full py-16 bg-white" id="team">
            <div className="max-w-[1140px] mx-auto px-[15px] text-center">
                <h6
                    className="text-brand-gold uppercase mb-2 text-sm font-bold tracking-[4px]"
                >
                    {siteConfig.home.team.badge}
                </h6>
                <h1 className="mb-12 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-serif font-bold leading-[1.2] text-brand-green">
                    {siteConfig.home.team.title}
                </h1>
                <div className="flex flex-wrap -mx-[15px] justify-center">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-8">
                            <div className="group bg-brand-bone/10 transition-all duration-500 hover:shadow-2xl rounded-sm overflow-hidden border border-brand-bone/30">
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={member.picture}
                                        alt={member.name}
                                    />
                                    <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {Object.entries(member.socials).map(([key, url], idx) => (
                                                <a key={key}
                                                    className="w-10 h-10 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-green transition-all"
                                                    href={url}
                                                >
                                                    <FontAwesomeIcon icon={socialIcons[key] || faTwitter} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center py-6 px-4">
                                    <h5 className="mb-1 text-xl font-serif font-bold text-brand-green">
                                        {member.name}
                                    </h5>
                                    <p className="m-0 text-brand-gold text-xs font-bold uppercase tracking-widest">
                                        {member.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;