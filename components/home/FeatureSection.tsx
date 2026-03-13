import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckAlt,
    faAward,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import siteConfig from '@/app/siteConfig';

const FeatureSection = () => {
    const iconMap: Record<string, any> = {
        faMoneyCheckAlt,
        faAward,
        faGlobe
    };

    const features = siteConfig.home.features.map((f: any) => ({
        ...f,
        icon: iconMap[f.icon]
    }));

    return (
        <div className="w-full pb-5" id="features">
            <div className="max-w-[1140px] mx-auto px-[15px] pb-5">
                <div className="flex flex-wrap -mx-[15px]">
                    {features.map((f: any, idx: number) => (
                        <div key={idx} className="md:w-1/3 w-full px-[15px] mb-8">
                            <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-brand-bone/50 transition-all duration-300 hover:shadow-md hover:border-brand-gold/20">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center bg-brand-bone text-brand-gold mr-4 h-[70px] w-[70px] rounded-full shadow-inner transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-green"
                                >
                                    <FontAwesomeIcon
                                        icon={f.icon}
                                        className="text-2xl"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-1 text-lg font-serif font-bold leading-[1.2] text-brand-green">
                                        {f.title}
                                    </h5>
                                    <p className="m-0 text-brand-charcoal/70 text-sm leading-tight">
                                        {f.description}
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

export default FeatureSection;