import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@/models/Slide";
import Link from "next/link";
import siteConfig from "@/app/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

const Carousel: React.FC = () => {
    const slides = siteConfig.home.carousel.map((slide, index) => ({
        ...slide,
        img: siteConfig.images.carousel[index]
    }));

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        pauseOnHover: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    };

    return (
        <div className="w-full p-0 overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id} className="relative outline-none">
                        <div className="overflow-hidden bg-brand-green">
                            <Image
                                width="1920"
                                height="800"
                                className={`w-full h-[600px] md:h-[800px] object-cover transition-transform duration-[6000ms] ease-linear ${currentSlide === index ? 'scale-110' : 'scale-100'
                                    }`}
                                src={slide.img}
                                alt={slide.title}
                                priority={index === 0}
                            />
                        </div>
                        {/* Gradient overlay for better text readability */}
                        <div
                            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/40 to-black/70"
                        />
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center z-[2] text-center"
                        >
                            <div className="p-4 max-w-[1000px]">
                                <AnimatePresence mode="wait">
                                    {currentSlide === index && (
                                        <div className="flex flex-col items-center text-center">
                                            <motion.h4
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="text-brand-gold uppercase mb-4 text-sm md:text-lg font-bold tracking-[6px]"
                                                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                                            >
                                                {siteConfig.company.name}
                                            </motion.h4>
                                            <motion.h1
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className="text-4xl md:text-7xl font-serif font-bold leading-tight text-white mb-8"
                                                style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.4)' }}
                                            >
                                                {slide.title}
                                            </motion.h1>
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.6 }}
                                                className="text-white/90 text-lg md:text-xl mb-10 max-w-[700px] leading-relaxed hidden md:block"
                                            >
                                                {slide.description}
                                            </motion.p>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: 0.8 }}
                                            >
                                                <Link
                                                    href={slide.link || "#destinations"}
                                                    className="inline-block font-bold text-center align-middle bg-brand-gold text-brand-green py-4 px-10 text-sm uppercase tracking-widest hover:bg-white hover:text-brand-green transition-all duration-300 shadow-2xl rounded-sm"
                                                >
                                                    Start Your Journey
                                                </Link>
                                            </motion.div>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Typed arrow props
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

// Enhanced arrow styles
const arrowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.6)",
    width: 50,
    height: 50,
    borderRadius: "50%",
    zIndex: 2,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
};

// Next arrow
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        style={{ ...arrowStyle, right: 20 }}
        onClick={onClick}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
    >
        <span
            className="inline-block w-5 h-5 bg-no-repeat bg-center bg-[length:100%_100%]"
            style={{
                backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")"
            }}
        />
    </div>
);

// Prev arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        style={{ ...arrowStyle, left: 20 }}
        onClick={onClick}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
    >
        <span
            className="inline-block w-5 h-5 bg-no-repeat bg-center bg-[length:100%_100%]"
            style={{
                backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")"
            }}
        />
    </div>
);

export default Carousel;