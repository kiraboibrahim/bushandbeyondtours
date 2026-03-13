import siteConfig from "@/app/siteConfig";

const AboutSection = () => (
    <div className="w-full py-5" id="about">
        <div className="max-w-[1140px] mx-auto px-[15px] pt-5">
            <div className="flex flex-wrap -mx-[15px]">
                <div className="lg:w-1/2 w-full px-[15px] min-h-[500px]">
                    <div className="relative h-full">
                        <img
                            className="absolute w-full h-full object-cover"
                            src={siteConfig.images.about.primary}
                            alt="Experience Wildlife"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full px-[15px] pt-5 lg:pb-5">
                    <div className="bg-white p-4 lg:p-5 lg:my-5 lg:-ml-[120px] relative z-10 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
                        <h6
                            className="text-brand-gold uppercase mb-2 text-sm font-bold tracking-[4px]"
                        >
                            {siteConfig.home.about.badge}
                        </h6>
                        <h1 className="mb-4 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-serif font-bold leading-[1.2] text-brand-green">
                            {siteConfig.home.about.title}
                        </h1>
                        <p className="mt-0 mb-6 text-brand-charcoal/80 leading-relaxed">
                            <span className="font-bold text-brand-green">{siteConfig.company.name}</span> {siteConfig.home.about.description}
                        </p>
                        <div className="flex flex-wrap -mx-[15px] mb-6">
                            <div className="w-1/2 px-[15px]">
                                <img
                                    className="w-full h-40 object-cover rounded-lg shadow-md"
                                    src={siteConfig.images.about.secondary}
                                    alt="Cultural Experience"
                                />
                            </div>
                            <div className="w-1/2 px-[15px]">
                                <img
                                    className="w-full h-40 object-cover rounded-lg shadow-md"
                                    src={siteConfig.images.about.tertiary}
                                    alt="Safari Adventure"
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="inline-block font-bold text-center align-middle select-none bg-brand-gold text-brand-green py-[0.75rem] px-[2rem] text-sm uppercase tracking-widest leading-[1.5] no-underline hover:bg-brand-green hover:text-white transition-all duration-300 rounded-sm"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutSection;