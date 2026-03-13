import Image from "next/image";
import { Destination } from "@/models/Destination";

import siteConfig from "@/app/siteConfig";

const DestinationSection = () => {
    const destinations = siteConfig.home.destinations.list.map(dest => ({
        ...dest,
        image: (siteConfig.images.destinations as any)[dest.imageKey]
    }));

    return (
        <div className="w-full py-5" id="destinations">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-brand-gold uppercase mb-2 text-sm font-bold tracking-[4px]"
                >
                    {siteConfig.home.destinations.badge}
                </h6>
                <h1 className="mb-4 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-serif font-bold leading-[1.2] text-brand-green">
                    {siteConfig.home.destinations.title}
                </h1>
                <div className="flex flex-wrap -mx-[15px] pt-8">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-8">
                            <div className="group relative overflow-hidden rounded-lg shadow-sm">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    width={500}
                                    height={350}
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/20 to-transparent flex flex-col items-center justify-end pb-10 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h5 className="text-white mb-2 text-xl font-serif font-bold leading-tight text-center">
                                        {dest.name}
                                    </h5>
                                    <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                                        {dest.attractionsCount} Attractions
                                    </span>
                                </div>
                                <div className="absolute bottom-6 left-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                                    <h5 className="text-white mb-0 text-lg font-serif font-bold leading-tight drop-shadow-md">
                                        {dest.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationSection;