import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopFAB: React.FC = () => {
    const [visible, setVisible] = useState(false);

    // Show button after scrolling down 300px
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-[45px] right-[45px] bg-[#7AB730] text-white w-[46px] h-[46px] inline-flex items-center justify-center text-center border border-[#7AB730] transition-all duration-150 hover:bg-[#669928] hover:border-[#5f8f25] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(142,194,79,0.5)] z-[11]"
            aria-label="Back to top"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default BackToTopFAB;