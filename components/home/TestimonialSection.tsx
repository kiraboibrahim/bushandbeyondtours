import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import siteConfig from "@/app/siteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialSection = () => {
    const { badge, title, items } = siteConfig.home.testimonials;

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="py-24 bg-brand-bone relative overflow-hidden" id="testimonials">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h6 className="text-brand-gold uppercase tracking-[4px] font-bold text-sm mb-3">
                        {badge}
                    </h6>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                </div>

                <div className="testimonial-slider-container pb-12">
                    <Slider {...settings}>
                        {items.map((t: any, idx: number) => (
                            <div key={idx} className="px-4 h-full py-8">
                                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-brand-bone/50 h-full flex flex-col relative group hover:border-brand-gold transition-all duration-500">
                                    <div className="absolute top-6 right-8 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-500">
                                        <FontAwesomeIcon icon={faQuoteRight} className="text-4xl" />
                                    </div>

                                    <div className="flex-grow">
                                        <p className="text-brand-charcoal/80 italic font-serif text-lg leading-relaxed mb-8">
                                            &quot;{t.text}&quot;
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto pt-8 border-t border-brand-bone">
                                        <div className="relative w-14 h-14 flex-shrink-0">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="rounded-full object-cover border-2 border-brand-gold/20"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-brand-green text-lg leading-none mb-1">
                                                {t.name}
                                            </h4>
                                            <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
                .testimonial-slider-container .slick-dots {
                    bottom: -20px;
                }
                .testimonial-slider-container .slick-dots li {
                    margin: 0 4px;
                }
                .testimonial-slider-container .slick-dots li button:before {
                    content: '';
                    width: 12px;
                    height: 12px;
                    background: #d4d4d4;
                    border-radius: 50%;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .testimonial-slider-container .slick-dots li.slick-active button:before {
                    background: #c5a059;
                    width: 24px;
                    border-radius: 6px;
                }
            `}</style>
        </section>
    );
};

export default TestimonialSection;