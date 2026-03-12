import siteConfig from "@/app/siteConfig";

const AboutSection = () => (
    <div className="w-full py-5" id="about">
        <div className="max-w-[1140px] mx-auto px-[15px] pt-5">
            <div className="flex flex-wrap -mx-[15px]">
                <div className="lg:w-1/2 w-full px-[15px] min-h-[500px]">
                    <div className="relative h-full">
                        <img
                            className="absolute w-full h-full object-cover"
                            src="/img/about.jpg"
                            alt="About Trip Tonic Safaris"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full px-[15px] pt-5 lg:pb-5">
                    <div className="bg-white p-4 lg:p-5 lg:my-5 lg:-ml-[120px] relative z-10 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
                        <h6
                            className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                            style={{ letterSpacing: 5 }}
                        >
                            About Us
                        </h6>
                        <h1 className="mb-3 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2] text-[#212121]">
                            Experience Uganda&lsquo;s Wonders with Our Expertly Curated Safari Packages
                        </h1>
                        <p className="mt-0 mb-4 text-[#6c757d]">
                            {siteConfig.company.name} specializes in creating unforgettable safari adventures
                            in Uganda&lsquo;s national parks. From wildlife encounters and scenic landscapes
                            to luxury lodges and guided tours. We offer personalized experiences
                            tailored to your budget and schedule.
                        </p>
                        <div className="flex flex-wrap -mx-[15px] mb-4">
                            <div className="w-1/2 px-[15px]">
                                <img
                                    className="max-w-full h-auto"
                                    src="/img/spacious-rides.jpeg"
                                    alt="Spacious safari rides"
                                />
                            </div>
                            <div className="w-1/2 px-[15px]">
                                <img
                                    className="max-w-full h-auto"
                                    src="/img/hotel-view-with-sunset.jpeg"
                                    alt="Luxury lodge view at sunset"
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="inline-block font-normal text-white text-center align-middle select-none bg-[#7AB730] border border-[#7AB730] py-[0.375rem] px-[0.75rem] text-base leading-[1.5] mt-1 no-underline transition-[color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] hover:bg-[#669928] hover:border-[#5f8f25] hover:text-white focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(142,194,79,0.5)]"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutSection;