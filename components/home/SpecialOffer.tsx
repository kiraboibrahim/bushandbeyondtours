import { useState, ChangeEvent } from "react";
import { submitSignup, RegistrationData } from "../../services/api";

const DESTINATION_OPTIONS = [
    { value: "murchison-falls", label: "Murchison Falls National Park" },
    { value: "queen-elizabeth", label: "Queen Elizabeth National Park" },
    { value: "lake-mburo", label: "Lake Mburo National Park" },
    { value: "bwindi", label: "Bwindi Impenetrable Forest" },
];

const SpecialOffer: React.FC = () => {
    const [form, setForm] = useState<RegistrationData>({
        name: "",
        email: "",
        destination: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        try {
            await submitSignup(form);
            alert("You have successfully signed up for the special offer!");
            setForm({ name: "", email: "", destination: "" });
        } catch (err) {
            console.error(err);
            alert("Failed to submit signup. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="w-full py-5 my-5 bg-[#2C3E50]"
            id="special-offer"
        >
            <div className="max-w-[1140px] mx-auto px-[15px] py-5">
                <div className="flex flex-wrap -mx-[15px] items-center">
                    {/* Offer Info */}
                    <div className="lg:w-[58.33333%] w-full px-[15px] mb-5 lg:mb-0">
                        <div className="mb-4">
                            <h6
                                className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                                style={{ letterSpacing: 5 }}
                            >
                                Special Offer
                            </h6>
                            <h1 className="text-white mb-2 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2]">
                                <span className="text-[#7AB730]">10% discount</span> for a group of four and above
                            </h1>
                        </div>
                        <p className="text-white mt-0 mb-4">
                            Embark on an unforgettable safari in Uganda&lsquo;s most iconic
                            National Parks. Enjoy Wildlife, Breathtaking landscapes, and
                            Guided Tours at a special discounted rate.
                        </p>
                        <ul className="pl-0 list-none text-white m-0">
                            <li className="py-2">
                                <i className="fa fa-check text-[#7AB730] mr-3" />
                                Guided safaris in Murchison Falls & Queen Elizabeth
                            </li>
                            <li className="py-2">
                                <i className="fa fa-check text-[#7AB730] mr-3" />
                                Luxury lodges with stunning views
                            </li>
                            <li className="py-2">
                                <i className="fa fa-check text-[#7AB730] mr-3" />
                                Customizable itineraries to fit your schedule
                            </li>
                        </ul>
                    </div>

                    {/* Registration Form */}
                    <div className="lg:w-[41.66667%] w-full px-[15px]">
                        <div className="relative flex flex-col min-w-0 break-words bg-white bg-clip-border border-0">
                            <div className="bg-[#7AB730] text-center p-4 mb-0">
                                <h1 className="text-white m-0 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2]">
                                    Sign Up Now
                                </h1>
                            </div>
                            <div className="flex-auto bg-white p-5 rounded-b">
                                <div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="block w-full h-[calc(1.5em_+_0.75rem_+_2px)] p-4 text-base font-normal leading-[1.5] text-[#495057] bg-white bg-clip-padding border border-[#ced4da] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] focus:text-[#495057] focus:bg-white focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)] placeholder:text-[#6c757d] placeholder:opacity-100"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="block w-full h-[calc(1.5em_+_0.75rem_+_2px)] p-4 text-base font-normal leading-[1.5] text-[#495057] bg-white bg-clip-padding border border-[#ced4da] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] focus:text-[#495057] focus:bg-white focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)] placeholder:text-[#6c757d] placeholder:opacity-100"
                                            placeholder="Your Email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <select
                                            title="Destination"
                                            name="destination"
                                            className="inline-block w-full h-[47px] px-4 py-[0.375rem] pr-[1.75rem] text-base font-normal leading-[1.5] text-[#495057] align-middle bg-white bg-[url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_width=%274%27_height=%275%27_viewBox=%270_0_4_5%27%3e%3cpath_fill=%27%23343a40%27_d=%27M2_0L0_2h4zm0_5L0_3h4z%27/%3e%3c/svg%3e')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:8px_10px] border border-[#ced4da] appearance-none focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out]"
                                            value={form.destination}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a Destination</option>
                                            {DESTINATION_OPTIONS.map((d) => (
                                                <option key={d.value} value={d.value}>
                                                    {d.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="block w-full inline-block font-normal text-white text-center align-middle select-none bg-[#7AB730] border border-[#7AB730] py-3 px-[0.75rem] text-base leading-[1.5] transition-[color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] hover:bg-[#669928] hover:border-[#5f8f25] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(142,194,79,0.5)] disabled:opacity-65"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span
                                                className="inline-block w-4 h-4 align-text-bottom border-[0.2em] border-solid border-current border-r-transparent rounded-full animate-spin"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            "Sign Up Now"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;