"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCheckCircle, faUser, faCreditCard, faClipboardCheck, faShieldAlt, faLock, faHeadset } from "@fortawesome/free-solid-svg-icons";
import siteConfig from "../siteConfig";

const PayUsPage = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currency: "USD",
        amount: "",
        description: "",
    });

    const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const next = () => setStep(step + 1);
    const back = () => setStep(step - 1);

    const stepItems = [
        { num: 1, label: "Personal Info", icon: faUser },
        { num: 2, label: "Payment Details", icon: faCreditCard },
        { num: 3, label: "Confirm", icon: faClipboardCheck }
    ];

    const securityFeatures = [
        { icon: faShieldAlt, title: "Secure Payments", desc: "256-bit SSL encryption" },
        { icon: faLock, title: "Data Protection", desc: "Your info is safe with us" },
        { icon: faHeadset, title: "24/7 Support", desc: "We're here to help" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero */}
            <div className="relative h-80 bg-gradient-to-br from-[#212121] via-[#2d2d2d] to-[#212121] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-[#7AB730] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">SECURE PAYMENT</div>
                    <p className="text-[#7AB730] font-semibold tracking-widest uppercase mb-2">{siteConfig.company.name}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Pay Here</h1>
                    <p className="text-gray-300 max-w-2xl">Complete your safari booking payment securely and easily</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Security Features Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 mb-12">
                    <div className="grid grid-cols-3 gap-6">
                        {securityFeatures.map((feature, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] mx-auto mb-3">
                                    <FontAwesomeIcon icon={feature.icon} className="text-lg" />
                                </div>
                                <p className="font-semibold text-[#212121] text-sm">{feature.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            {/* Step Indicators */}
                            <div className="flex items-center justify-between mb-10 relative">
                                {stepItems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center relative z-10" style={{ width: `${100 / stepItems.length}%` }}>
                                        <div className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded-full transition-all ${step >= item.num
                                            ? "bg-[#7AB730] text-white"
                                            : "bg-gray-100 text-gray-400 border-2 border-gray-200"
                                            }`}>
                                            {step > item.num ? (
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            ) : (
                                                <FontAwesomeIcon icon={item.icon} />
                                            )}
                                        </div>
                                        <p className={`mt-3 text-sm font-medium text-center ${step === item.num ? "text-[#7AB730]" : step > item.num ? "text-[#212121]" : "text-gray-400"
                                            }`}>
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                                {/* Connecting Lines */}
                                <div className="absolute top-6 left-0 right-0 flex items-center justify-center px-16 -z-0">
                                    <div className={`h-1 flex-1 rounded ${step > 1 ? "bg-[#7AB730]" : "bg-gray-200"}`}></div>
                                    <div className={`h-1 flex-1 rounded ${step > 2 ? "bg-[#7AB730]" : "bg-gray-200"}`}></div>
                                </div>
                            </div>

                            {/* STEP 1 */}
                            {step === 1 && (
                                <div className="space-y-5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-1 bg-[#7AB730]"></div>
                                        <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Step 1</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#212121] mb-6">Personal Information</h2>

                                    <div>
                                        <label className="block mb-2 font-medium text-sm text-[#212121]">Salutation</label>
                                        <select
                                            name="salutation"
                                            value={form.salutation}
                                            onChange={updateField}
                                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                        >
                                            <option value="">Select</option>
                                            <option value="Mr">Mr</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Dr">Dr</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-2 font-medium text-sm text-[#212121]">First Name</label>
                                            <input
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={updateField}
                                                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-medium text-sm text-[#212121]">Last Name</label>
                                            <input
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={updateField}
                                                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium text-sm text-[#212121]">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={updateField}
                                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium text-sm text-[#212121]">Phone Number</label>
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={updateField}
                                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                            placeholder="+256 700 000000"
                                        />
                                    </div>

                                    <button
                                        onClick={next}
                                        className="w-full bg-[#7AB730] hover:bg-[#6a9e2a] text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
                                    >
                                        Continue <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <div className="space-y-5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-1 bg-[#7AB730]"></div>
                                        <span className="text-[#7AB730] font-semibold uppercase tracking-wider text-sm">Step 2</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#212121] mb-6">Payment Details</h2>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-2 font-medium text-sm text-[#212121]">Currency</label>
                                            <select
                                                title="Select currency"
                                                name="currency"
                                                value={form.currency}
                                                onChange={updateField}
                                                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                            >
                                                <option value="USD">USD - US Dollar</option>
                                                <option value="UGX">UGX - Ugandan Shilling</option>
                                                <option value="EUR">EUR - Euro</option>
                                                <option value="GBP">GBP - British Pound</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-medium text-sm text-[#212121]">Amount</label>
                                            <input
                                                name="amount"
                                                type="number"
                                                value={form.amount}
                                                onChange={updateField}
                                                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium text-sm text-[#212121]">Payment Description</label>
                                        <textarea
                                            name="description"
                                            value={form.description}
                                            onChange={updateField}
                                            className="w-full border border-gray-300 rounded-lg p-3 h-32 outline-none focus:border-[#7AB730] focus:ring-2 focus:ring-[#7AB730]/20 transition resize-none"
                                            placeholder="Describe what the payment is for (e.g., 3-Day Gorilla Safari deposit)..."
                                        />
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button
                                            onClick={back}
                                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#212121] font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faArrowLeft} /> Back
                                        </button>
                                        <button
                                            onClick={next}
                                            className="flex-1 bg-[#7AB730] hover:bg-[#6a9e2a] text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            Continue <FontAwesomeIcon icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <div className="space-y-5">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-[#7AB730]/10 rounded-full flex items-center justify-center text-[#7AB730] mx-auto mb-4">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-3xl" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#212121]">Confirm Your Details</h2>
                                        <p className="text-gray-500 text-sm mt-2">Please review your information before submitting</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                                        {[
                                            { label: "Name", value: `${form.salutation} ${form.firstName} ${form.lastName}`.trim() || "—" },
                                            { label: "Email", value: form.email || "—" },
                                            { label: "Phone", value: form.phone || "—" },
                                            { label: "Amount", value: form.amount ? `${form.currency} ${form.amount}` : "—" },
                                            { label: "Description", value: form.description || "—" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                                                <span className="text-gray-500 text-sm">{item.label}</span>
                                                <span className="font-medium text-[#212121] text-sm text-right max-w-xs">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button
                                            onClick={back}
                                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#212121] font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faArrowLeft} /> Back
                                        </button>
                                        <button className="flex-1 bg-[#7AB730] hover:bg-[#6a9e2a] text-white font-bold py-3 rounded-lg transition-colors">
                                            Submit Payment
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Why Pay Online */}
                        <div className="bg-[#212121] rounded-lg shadow-md p-6 text-white">
                            <h3 className="text-lg font-bold mb-4">Why Pay Online?</h3>
                            <ul className="space-y-3">
                                {[
                                    "Instant payment confirmation",
                                    "Secure encrypted transactions",
                                    "Multiple currency support",
                                    "Email receipt provided",
                                    "24/7 payment processing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#7AB730]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Need Help */}
                        <div className="bg-gradient-to-br from-[#7AB730] to-[#5a8a20] rounded-lg shadow-md p-6 text-white">
                            <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                            <p className="text-white/80 text-sm mb-4">
                                Having trouble with your payment? Our team is here to assist you.
                            </p>
                            <div className="space-y-2 text-sm">
                                <p className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faHeadset} />
                                    +256 700 000000
                                </p>
                                <p>info@triptonicsafaris.com</p>
                            </div>
                        </div>

                        {/* Accepted Currencies */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7AB730]">
                            <h4 className="font-bold text-[#212121] mb-3">Accepted Currencies</h4>
                            <div className="flex flex-wrap gap-2">
                                {["USD", "EUR", "GBP", "UGX"].map((curr, i) => (
                                    <span key={i} className="bg-gray-100 text-[#212121] px-3 py-1 rounded-full text-sm font-medium">
                                        {curr}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayUsPage;