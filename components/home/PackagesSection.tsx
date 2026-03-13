import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faCalendarAlt,
    faUser,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import { Package } from "@/models/Package"; // import your model

import siteConfig from "@/app/siteConfig";

const PackagesSection = () => {
    const packages: Package[] = [
        {
            id: 1,
            title: "Safari Adventure in Murchison Falls National Park",
            location: "Murchison Falls",
            duration: "3 days",
            people: "2 Persons",
            rating: 4.8,
            ratingCount: 120,
            image: siteConfig.images.destinations.murchison,
        },
        {
            id: 2,
            title: "Gorilla Trekking Experience in Bwindi Impenetrable Forest",
            location: "Bwindi",
            duration: "4 days",
            people: "2 Persons",
            rating: 5.0,
            ratingCount: 85,
            image: siteConfig.images.packages.gorilla,
        },
        {
            id: 3,
            title: "Chimpanzee Tracking in Kibale National Park",
            location: "Kibale",
            duration: "3 days",
            people: "2 Persons",
            rating: 4.7,
            ratingCount: 60,
            image: siteConfig.images.packages.chimp,
        },
        {
            id: 5,
            title: "Mountaineering at Rwenzori Mountains",
            location: "Rwenzori Mountains National Park",
            duration: "5 days",
            people: "2 Persons",
            rating: 4.9,
            ratingCount: 70,
            image: siteConfig.images.destinations.rwenzori,
        },
        {
            id: 6,
            title: "Adrenaline Adventure at the Nile",
            location: "Jinja",
            duration: "1 day",
            people: "2 Persons",
            rating: 4.5,
            ratingCount: 100,
            image: siteConfig.images.packages.adventure,
        },
    ];

    return (
        <div className="w-full py-5" id="packages">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-brand-gold uppercase mb-2 text-sm font-bold tracking-[4px]"
                >
                    Featured Journeys
                </h6>
                <h1 className="mb-4 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-serif font-bold leading-[1.2] text-brand-green">
                    Perfect Tour Packages
                </h1>
                <div className="flex flex-wrap -mx-[15px] pt-8">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-8">
                            <div className="bg-white group transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden border border-brand-bone/50">
                                <div className="relative overflow-hidden h-[250px]">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={pkg.image}
                                        alt={pkg.title}
                                    />
                                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-green px-3 py-1 text-xs font-bold rounded-full">
                                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                                        {pkg.rating}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between mb-4 border-b border-brand-bone pb-4">
                                        <small className="text-xs font-medium text-brand-charcoal/60 truncate max-w-[35%]" title={pkg.location}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-brand-gold mr-2" />
                                            {pkg.location}
                                        </small>
                                        <small className="text-xs font-medium text-brand-charcoal/60">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-brand-gold mr-2" />
                                            {pkg.duration}
                                        </small>
                                        <small className="text-xs font-medium text-brand-charcoal/60">
                                            <FontAwesomeIcon icon={faUser} className="text-brand-gold mr-2" />
                                            {pkg.people}
                                        </small>
                                    </div>
                                    <a className="block text-lg font-serif font-bold leading-[1.3] text-brand-green no-underline hover:text-brand-gold h-[3rem] overflow-hidden transition-colors duration-300" href="#" title={pkg.title}>
                                        {pkg.title}
                                    </a>
                                    <div className="mt-6">
                                        <button className="w-full py-3 bg-brand-bone text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;