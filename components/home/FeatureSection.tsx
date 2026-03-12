import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckAlt,
    faAward,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

const FeatureSection = () => {
    const features = [
        {
            icon: faMoneyCheckAlt,
            title: "Competitive Pricing",
            description: "We offer safari packages, hotel reservations and air ticketing at best rates with great value for money and time spent with us"
        },
        {
            icon: faAward,
            title: "Packages",
            description: "We offer a variety of tour packages that comes with life memorable experiences."
        },
        {
            icon: faGlobe,
            title: "Motor Vehicle Hire",
            description: "We offer a variety of tourist customized vehicles at good rates."
        },
    ];

    return (
        <div className="w-full pb-5" id="features">
            <div className="max-w-[1140px] mx-auto px-[15px] pb-5">
                <div className="flex flex-wrap -mx-[15px]">
                    {features.map((f, idx) => (
                        <div key={idx} className="md:w-1/3 w-full px-[15px]">
                            <div className="flex mb-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center bg-[#7AB730] mr-3 h-[100px] w-[100px]"
                                >
                                    <FontAwesomeIcon
                                        icon={f.icon}
                                        className="text-white text-[2em]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="mb-2 text-[1.25rem] font-medium leading-[1.2] text-[#212121]">
                                        {f.title}
                                    </h5>
                                    <p className="m-0 text-[#6c757d]">
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