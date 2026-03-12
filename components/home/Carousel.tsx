import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@/models/Slide";
import Link from "next/link";
import siteConfig from "@/app/siteConfig";

export const slides: Slide[] = [
    {
        id: 1,
        img: "/img/gallery/lodges.jpg",
        title: "Ngiris Lodge",
        description: "Get up close with Uganda's graceful giants at Murchison Falls National Park. A safari experience you will never forget!",
        link: "#special-offer",
    },
    {
        id: 2,
        img: "/img/carousel-2.jpeg",
        title: "Hotel Reservations",
        description: "Relax in top-notch hotels as you enjoy breathtaking sunsets and delicious local cuisine along Lake Victoria or in Kampala.",
        link: "#special-offer",
    },
    {
        id: 3,
        img: "/img/gallery/lodge-compound.jpg",
        title: "Ngirisi Hill",
        description: "Experience the thrill of watching majestic elephants roam the savannah during golden hour at Queen Elizabeth National Park.",
        link: "#special-offer",
    },
    {
        id: 5,
        img: "/img/gallery/lodge-bedroom.jpeg",
        title: "Ngirisi Hill Silverback Gorilla Lodge",
        description: "Marvel at iconic acacia trees silhouetted against dramatic Ugandan sunsets. Perfect moments for photography and reflection.",
        link: "#special-offer",
    },
];

const Carousel: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <div className="w-full p-0">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative">
                        <Image
                            width="1920"
                            height="600"
                            className="w-full"
                            src={slide.img}
                            alt={`Slide ${slide.id}`}
                            style={{ height: '600px', objectFit: 'cover' }}
                        />
                        {/* Gradient overlay for better text readability */}
                        <div
                            className="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
                            }}
                        />
                        <div
                            className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-[2]"
                        >
                            <div className="p-3 max-w-[900px]">
                                <h4
                                    className="text-white uppercase mb-0 md:mb-3 text-lg"
                                    style={{
                                        letterSpacing: '3px',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                    }}
                                >
                                    {siteConfig.company.name} - Uganda
                                </h4>
                                <h1
                                    className="text-[3.5rem] max-[1200px]:text-[calc(1.475rem_+_2.7vw)] font-light leading-[1.2] text-white mb-0 md:mb-4"
                                    style={{
                                        textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {slide.title}
                                </h1>
                                <Link
                                    href={slide.link || "#special-offer"}
                                    className="inline-block font-normal text-center align-middle select-none bg-[#7AB730] border border-[#7AB730] text-white py-[0.375rem] px-[0.75rem] md:py-3 md:px-5 text-base leading-[1.5] mt-2 no-underline hover:bg-[#669928] hover:border-[#5f8f25] hover:text-white transition-[color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out]"
                                    style={{
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    Book Now
                                </Link>
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
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
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
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
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