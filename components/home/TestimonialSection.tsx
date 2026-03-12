import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "@/models/Testimonial";

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Nakato",
        profession: "Adventure Traveler",
        image: "/img/testimonial-1.jpg",
        text: "The gorilla trekking in Bwindi was a once-in-a-lifetime experience. The guides were knowledgeable and very friendly!",
    },
    {
        id: 2,
        name: "David Okello",
        profession: "Safari Enthusiast",
        image: "/img/testimonial-2.jpg",
        text: "Queen Elizabeth National Park safari exceeded my expectations. We saw lions, elephants, and even hippos in the wild!",
    },
    {
        id: 3,
        name: "Grace Achieng",
        profession: "Cultural Explorer",
        image: "/img/testimonial-3.jpg",
        text: "Visiting the Ssese Islands was amazing. The beaches are pristine and the local community is welcoming and kind.",
    },
    {
        id: 4,
        name: "Michael Kato",
        profession: "Nature Lover",
        image: "/img/testimonial-4.jpg",
        text: "The Rwenzori Mountains hike was challenging but incredibly rewarding. Stunning scenery all the way!",
    },
    {
        id: 5,
        name: "Esther Namutebi",
        profession: "Photographer",
        image: "/img/testimonial-5.jpg",
        text: "Jinja and the Nile adventure sports were thrilling. Kayaking and bungee jumping made it unforgettable.",
    },
    {
        id: 6,
        name: "Joseph Lutaaya",
        profession: "Explorer",
        image: "/img/testimonial-6.jpg",
        text: "Kibale Forest chimpanzee tracking was amazing. The guides ensured we had a safe and educational experience.",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
};

const TestimonialSection = () => (
    <div className="w-full py-12" id="testimonials">
        <div className="max-w-[1140px] mx-auto px-4 py-12 text-center">
            <h6 className="text-[#7AB730] uppercase tracking-[5px] font-medium text-base mb-2">
                Testimonial
            </h6>
            <h1 className="text-[2.5rem] font-bold leading-[1.2] text-[#212121] mb-0">
                What Our Clients Say
            </h1>

            <div className="mt-8">
                <Slider {...settings}>
                    {testimonials.map((t) => (
                        <div key={t.id} className="px-2">
                            <div className="text-center pb-8">
                                <Image
                                    width={80}
                                    height={80}
                                    className="mx-auto rounded-full"
                                    src={t.image}
                                    alt={t.name}
                                />
                                <div
                                    className="bg-white p-4 mt-4 shadow-[0_0_30px_#CCCCCC] transition-shadow duration-500 min-h-[130px] flex flex-col justify-center"
                                >
                                    <p className="mb-2 text-[0.9rem] text-[#656565] leading-[1.5]">
                                        {t.text}
                                    </p>
                                    <h5 className="truncate mb-0 text-xl font-medium text-[#212121] mt-2">
                                        {t.name}
                                    </h5>
                                    <span className="text-[0.8rem] text-[#656565]">
                                        {t.profession}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

        <style jsx global>{`
            /* Testimonial carousel custom styles */
            .slick-dots {
                margin-top: 1.25rem;
                text-align: center;
            }
            
            .slick-dots li button:before {
                position: relative;
                display: inline-block;
                width: 20px;
                height: 20px;
                background: #DDDDDD;
                border-radius: 0;
                content: '';
                transition: all 0.5s;
                opacity: 1;
            }
            
            .slick-dots li.slick-active button:before {
                width: 40px;
                background: #7AB730;
            }
            
            .slick-slide > div > div > div {
                transition: box-shadow 0.5s;
            }
            
            .slick-center .testimonial-text,
            .slick-current .testimonial-text {
                box-shadow: 0 0 30px #CCCCCC;
            }
        `}</style>
    </div>
);

export default TestimonialSection;