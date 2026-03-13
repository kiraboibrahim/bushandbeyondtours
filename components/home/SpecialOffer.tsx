import { useState, ChangeEvent } from "react";
import { submitSignup, RegistrationData } from "../../services/api";
import siteConfig from "@/app/siteConfig";

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

    const DESTINATION_OPTIONS = siteConfig.home.specialOffer.destinations;

    return (
        <div
            className="w-full py-20 my-10 bg-brand-green"
            id="special-offer"
        >
            <div className="max-w-[1140px] mx-auto px-[15px]">
                <div className="flex flex-wrap -mx-[15px] items-center">
                    {/* Offer Info */}
                    <div className="lg:w-7/12 w-full px-[15px] mb-12 lg:mb-0">
                        <div className="mb-6">
                            <h6
                                className="text-brand-gold uppercase mb-3 text-sm font-bold tracking-[4px]"
                            >
                                {siteConfig.home.specialOffer.badge}
                            </h6>
                            <h1 className="text-white mb-4 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-serif font-bold leading-[1.2]">
                                {siteConfig.home.specialOffer.title}
                            </h1>
                        </div>
                        <p className="text-white/80 mt-0 mb-8 text-lg leading-relaxed max-w-xl">
                            {siteConfig.home.specialOffer.description}
                        </p>
                        <ul className="pl-0 list-none text-white/90 m-0 space-y-4">
                            {siteConfig.home.specialOffer.highlights.map((highlight: string, idx: number) => (
                                <li key={idx} className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center mr-4">
                                        <i className="fa fa-check text-brand-gold text-xs" />
                                    </div>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Registration Form */}
                    <div className="lg:w-5/12 w-full px-[15px]">
                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg shadow-2xl overflow-hidden border border-white/10">
                            <div className="bg-brand-gold text-center py-6 px-4">
                                <h2 className="text-brand-green m-0 text-2xl font-serif font-bold uppercase tracking-wider">
                                    {siteConfig.home.specialOffer.formTitle}
                                </h2>
                            </div>
                            <div className="flex-auto bg-white p-8">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            className="block w-full px-4 py-4 text-sm font-medium text-brand-charcoal bg-brand-bone/30 border border-brand-bone rounded focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-charcoal/40"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            className="block w-full px-4 py-4 text-sm font-medium text-brand-charcoal bg-brand-bone/30 border border-brand-bone rounded focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-charcoal/40"
                                            placeholder="Your Email Address"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select
                                            title="Destination"
                                            name="destination"
                                            className="block w-full px-4 py-4 text-sm font-medium text-brand-charcoal bg-brand-bone/30 border border-brand-bone rounded focus:border-brand-gold focus:outline-none transition-all appearance-none cursor-pointer"
                                            value={form.destination}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Safari Destination</option>
                                            {DESTINATION_OPTIONS.map((d: any) => (
                                                <option key={d.value} value={d.value}>
                                                    {d.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-brand-green text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-brand-gold hover:text-brand-green transition-all duration-300 shadow-md"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span
                                                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            "Submit Inquiry"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;