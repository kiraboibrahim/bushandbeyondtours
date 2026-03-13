import { useState, ChangeEvent } from "react";
import { submitBooking, BookingData } from "@/services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faCalendarAlt,
    faClock,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

import siteConfig from "@/app/siteConfig";

const BookingForm: React.FC = () => {
    const DESTINATION_OPTIONS = siteConfig.home.bookingForm.destinations;
    const DURATION_OPTIONS = siteConfig.home.bookingForm.durations;
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
        <section className="relative z-10 -mt-12 md:-mt-16 px-4" id="booking">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-2xl p-2 md:p-3 border border-brand-bone/20">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">

                        {/* Destination */}
                        <div className="flex-1 min-w-[200px]">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold group-focus-within:text-brand-green transition-colors">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                                </span>
                                <select
                                    name="destination"
                                    className="w-full bg-brand-bone/10 border-0 pl-11 pr-4 py-4 rounded-lg text-brand-charcoal focus:ring-2 focus:ring-brand-gold outline-none appearance-none transition-all font-medium"
                                    value={form.destination}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Where to?</option>
                                    {DESTINATION_OPTIONS.map((d) => (
                                        <option key={d.value} value={d.value}>{d.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Depart Date */}
                        <div className="flex-1 min-w-[180px]">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold group-focus-within:text-brand-green transition-colors pointer-events-none">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                                </span>
                                <input
                                    type="date"
                                    name="depart_date"
                                    className="w-full bg-brand-bone/10 border-0 pl-11 pr-4 py-4 rounded-lg text-brand-charcoal focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium block h-full"
                                    value={form.depart_date}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider hidden md:block pointer-events-none">Depart</span>
                            </div>
                        </div>

                        {/* Return Date */}
                        <div className="flex-1 min-w-[180px]">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold group-focus-within:text-brand-green transition-colors pointer-events-none">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                                </span>
                                <input
                                    type="date"
                                    name="return_date"
                                    className="w-full bg-brand-bone/10 border-0 pl-11 pr-4 py-4 rounded-lg text-brand-charcoal focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium block h-full"
                                    value={form.return_date}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider hidden md:block pointer-events-none">Return</span>
                            </div>
                        </div>

                        {/* Duration */}
                        <div className="flex-1 min-w-[150px]">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold group-focus-within:text-brand-green transition-colors">
                                    <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                                </span>
                                <select
                                    name="duration"
                                    className="w-full bg-brand-bone/10 border-0 pl-11 pr-4 py-4 rounded-lg text-brand-charcoal focus:ring-2 focus:ring-brand-gold outline-none appearance-none transition-all font-medium"
                                    value={form.duration}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Duration</option>
                                    {DURATION_OPTIONS.map((d) => (
                                        <option key={d} value={d}>{d} Days</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="lg:ml-2">
                            <button
                                className="w-full lg:w-auto bg-brand-green text-brand-gold px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-brand-charcoal transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faSearch} />
                                        <span>Explore</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;