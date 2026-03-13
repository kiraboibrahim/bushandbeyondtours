import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRoute,
    faTicketAlt,
    faHotel
} from '@fortawesome/free-solid-svg-icons';

import siteConfig from '@/app/siteConfig';

const ServicesSection = () => {
    const iconMap: Record<string, any> = {
        faRoute,
        faTicketAlt,
        faHotel
    };

    const services = siteConfig.home.services.list.map((s: any) => ({
        ...s,
        icon: iconMap[s.icon]
    }));

    return (
        <div className="w-full py-5" id="services">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-brand-gold uppercase mb-2 text-sm font-bold tracking-[4px]"
                >
                    {siteConfig.home.services.badge}
                </h6>
                <h1 className="mb-4 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-serif font-bold leading-[1.2] text-brand-green">
                    {siteConfig.home.services.title}
                </h1>
                <div className="flex flex-wrap -mx-[15px] pt-8">
                    {services.map((s, idx) => (
                        <div key={idx} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-8">
                            <div className="group bg-white text-center mb-2 py-8 px-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-transparent hover:border-brand-bone rounded-sm">
                                <div className="w-[80px] h-[80px] flex items-center justify-center bg-brand-bone text-brand-green mx-auto mb-6 transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-green rounded-full shadow-inner">
                                    <FontAwesomeIcon
                                        icon={s.icon}
                                        className="text-2xl"
                                    />
                                </div>
                                <h5 className="mb-3 text-xl font-serif font-bold leading-[1.2] text-brand-green">
                                    {s.title}
                                </h5>
                                <p className="m-0 text-brand-charcoal/70 text-sm leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;