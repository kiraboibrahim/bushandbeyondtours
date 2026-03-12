import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRoute,
    faTicketAlt,
    faHotel
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
    const services = [
        { icon: faRoute, title: "Travel Guide", description: "Expert guides to lead you through Uganda's national parks and hidden gems." },
        { icon: faTicketAlt, title: "Ticket Booking", description: "Seamless booking for safaris, park entries, and adventure activities." },
        { icon: faHotel, title: "Hotel Booking", description: "Handpicked luxury lodges and accommodations for an unforgettable stay." },
    ];

    return (
        <div className="w-full py-5" id="services">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                    style={{ letterSpacing: 5 }}
                >
                    Services
                </h6>
                <h1 className="mb-2 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2] text-[#212121]">
                    Tours & Travel Services
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {services.map((s, idx) => (
                        <div key={idx} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-4">
                            <div className="group bg-white text-center mb-2 py-5 px-4 transition-[box-shadow_0.5s] hover:shadow-[0_0_30px_#CCCCCC]">
                                <div className="w-[75px] h-[75px] flex items-center justify-center border-2 border-[#7AB730] bg-white text-[#7AB730] mx-auto mb-4 transition-[background-color_0.5s,color_0.5s] group-hover:bg-[#7AB730] group-hover:text-white">
                                    <FontAwesomeIcon
                                        icon={s.icon}
                                        className="text-[2em]"
                                    />
                                </div>
                                <h5 className="mb-2 text-[1.25rem] font-medium leading-[1.2] text-[#212121]">
                                    {s.title}
                                </h5>
                                <p className="m-0 text-[#6c757d]">
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;