import { useState, ChangeEvent } from "react";
import { submitBooking, BookingData } from "@/services/api";


const DESTINATION_OPTIONS = [
    { value: "murchison-falls", label: "Murchison Falls" },
    { value: "queen-elizabeth", label: "Queen Elizabeth" },
    { value: "lake-mburo", label: "Lake Mburo" },
    { value: "bwindi", label: "Bwindi Impenetrable Forest" },
];

const DURATION_OPTIONS = [1, 2, 3, 4, 5, 7, 10, 14];

const BookingForm: React.FC = () => {
    const [form, setForm] = useState<BookingData>({
        destination: "",
        depart_date: "",
        return_date: "",
        duration: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        if (loading) return;
        setLoading(true);

        try {
            // Ensure duration is a number
            const payload: BookingData = {
                ...form,
                duration: Number(form.duration),
            };

            await submitBooking(payload);
            alert("Booking request submitted successfully!");
            setForm({
                destination: "",
                depart_date: "",
                return_date: "",
                duration: "",
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit booking request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mt-5 pb-5" id="booking">
            <div className="max-w-[1140px] mx-auto px-[15px] pb-5">
                <div className="bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] p-4">
                    <div className="flex flex-wrap -mx-[15px] items-center min-h-[60px]">
                        <div className="md:w-[83.33333%] w-full px-[15px]">
                            <div className="flex flex-wrap -mx-[15px]">
                                {/* Destination */}
                                <div className="md:w-1/4 w-full px-[15px] mb-3 md:mb-0">
                                    <select
                                        title="Destination"
                                        name="destination"
                                        className="inline-block w-full h-[47px] px-4 py-[0.375rem] pr-[1.75rem] text-base font-normal leading-[1.5] text-[#495057] align-middle bg-white bg-[url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_width=%274%27_height=%275%27_viewBox=%270_0_4_5%27%3e%3cpath_fill=%27%23343a40%27_d=%27M2_0L0_2h4zm0_5L0_3h4z%27/%3e%3c/svg%3e')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:8px_10px] border border-[#ced4da] appearance-none focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out]"
                                        value={form.destination}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Destination</option>
                                        {DESTINATION_OPTIONS.map((d) => (
                                            <option key={d.value} value={d.value}>
                                                {d.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Depart Date */}
                                <div className="md:w-1/4 w-full px-[15px] mb-3 md:mb-0">
                                    <input
                                        title="Depart Date"
                                        type="date"
                                        name="depart_date"
                                        placeholder="Depart Date"
                                        className="block w-full h-[47px] px-4 py-[0.375rem] text-base font-normal leading-[1.5] text-[#495057] bg-white bg-clip-padding border border-[#ced4da] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] focus:text-[#495057] focus:bg-white focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)]"
                                        value={form.depart_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Return Date */}
                                <div className="md:w-1/4 w-full px-[15px] mb-3 md:mb-0">
                                    <input
                                        title="Return Date"
                                        type="date"
                                        name="return_date"
                                        placeholder="Return Date"
                                        className="block w-full h-[47px] px-4 py-[0.375rem] text-base font-normal leading-[1.5] text-[#495057] bg-white bg-clip-padding border border-[#ced4da] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] focus:text-[#495057] focus:bg-white focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)]"
                                        value={form.return_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Duration */}
                                <div className="md:w-1/4 w-full px-[15px] mb-3 md:mb-0">
                                    <select
                                        title="Duration"
                                        name="duration"
                                        className="inline-block w-full h-[47px] px-4 py-[0.375rem] pr-[1.75rem] text-base font-normal leading-[1.5] text-[#495057] align-middle bg-white bg-[url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_width=%274%27_height=%275%27_viewBox=%270_0_4_5%27%3e%3cpath_fill=%27%23343a40%27_d=%27M2_0L0_2h4zm0_5L0_3h4z%27/%3e%3c/svg%3e')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:8px_10px] border border-[#ced4da] appearance-none focus:border-[#b8e087] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(122,183,48,0.25)] transition-[border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out]"
                                        value={form.duration}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Duration</option>
                                        {DURATION_OPTIONS.map((d) => (
                                            <option key={d} value={d}>
                                                {d} days
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="md:w-[16.66667%] w-full px-[15px]">
                            <button
                                className="block w-full h-[47px] inline-block font-normal text-white text-center align-middle select-none bg-[#7AB730] border border-[#7AB730] py-[0.375rem] px-[0.75rem] text-base leading-[1.5] transition-[color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out] hover:bg-[#669928] hover:border-[#5f8f25] focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(142,194,79,0.5)] disabled:opacity-65"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="inline-block w-8 h-8 align-text-bottom border-[0.2em] border-solid border-current border-r-transparent rounded-full animate-spin"></span>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;