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

    return (
        <div className="min-h-screen bg-brand-bone font-sans">
            {/* Hero */}
            <div className="relative h-[400px] bg-brand-charcoal overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-brand-gold text-brand-charcoal text-[10px] font-bold px-3 py-1 rounded-full mb-6 tracking-[0.2em] uppercase">
                        SECURE PAYMENT GATEWAY
                    </div>
                    <p className="text-brand-gold font-serif italic tracking-widest mb-2">{siteConfig.company.name}</p>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Complete Your <span className="text-brand-gold">Booking</span></h1>
                    <p className="text-gray-300 max-w-2xl font-light text-lg">Safe, secure, and seamless payment processing for your upcoming safari adventure.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Security Features Bar */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 -mt-24 relative z-10 mb-16 border border-brand-charcoal/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {siteConfig.payment.securityFeatures.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                                    <FontAwesomeIcon icon={feature.icon === 'shield-alt' ? faShieldAlt : feature.icon === 'lock' ? faLock : faHeadset} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-brand-charcoal">{feature.title}</h4>
                                    <p className="text-xs text-gray-500 font-light uppercase tracking-wider">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-10 border border-brand-charcoal/5">
                            {/* Step Indicators */}
                            <div className="flex items-center justify-between mb-12 relative">
                                {stepItems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center relative z-10" style={{ width: `${100 / stepItems.length}%` }}>
                                        <div className={`w-14 h-14 flex items-center justify-center text-sm font-bold rounded-full transition-all duration-500 shadow-md ${step >= item.num
                                            ? "bg-brand-green text-white"
                                            : "bg-brand-bone text-gray-400 border border-gray-200"
                                            }`}>
                                            {step > item.num ? (
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            ) : (
                                                <FontAwesomeIcon icon={item.icon} />
                                            )}
                                        </div>
                                        <p className={`mt-4 text-xs font-bold uppercase tracking-[0.15em] text-center ${step === item.num ? "text-brand-green" : step > item.num ? "text-brand-charcoal" : "text-gray-400"
                                            }`}>
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                                {/* Connecting Lines */}
                                <div className="absolute top-7 left-0 right-0 flex items-center justify-center px-16 -z-0">
                                    <div className={`h-[2px] flex-1 transition-all duration-500 ${step > 1 ? "bg-brand-green" : "bg-gray-200"}`}></div>
                                    <div className={`h-[2px] flex-1 transition-all duration-500 ${step > 2 ? "bg-brand-green" : "bg-gray-200"}`}></div>
                                </div>
                            </div>

                            {/* STEP 1 */}
                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-[2px] bg-brand-gold"></div>
                                        <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Guest Information</span>
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-8">Personal Details</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="col-span-1">
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Salutation</label>
                                            <select
                                                name="salutation"
                                                value={form.salutation}
                                                onChange={updateField}
                                                className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 outline-none transition-all font-light"
                                            >
                                                <option value="">Select</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Ms">Ms</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Dr">Dr</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-1">
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">First Name</label>
                                            <input
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={updateField}
                                                type="text"
                                                className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 outline-none transition-all font-light"
                                                placeholder="e.g. John"
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Last Name</label>
                                            <input
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={updateField}
                                                type="text"
                                                className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 outline-none transition-all font-light"
                                                placeholder="e.g. Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={updateField}
                                                className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 outline-none transition-all font-light"
                                                placeholder="john.doe@luxury.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Phone Number</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={updateField}
                                                className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 outline-none transition-all font-light"
                                                placeholder="+1 234 567 890"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            onClick={next}
                                            className="w-full bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group shadow-lg"
                                        >
                                            Continue to Payment <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-[2px] bg-brand-gold"></div>
                                        <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Amount & Purpose</span>
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-8">Payment Details</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Select Currency</label>
                                            <select
                                                name="currency"
                                                value={form.currency}
                                                onChange={updateField}
                                                className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 outline-none transition-all font-light"
                                            >
                                                {siteConfig.payment.acceptedCurrencies.map(curr => (
                                                    <option key={curr} value={curr}>{curr}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Amount to Pay</label>
                                            <div className="relative">
                                                <input
                                                    name="amount"
                                                    type="number"
                                                    value={form.amount}
                                                    onChange={updateField}
                                                    className="w-full border-b-2 border-brand-bone focus:border-brand-gold bg-transparent py-3 pl-8 outline-none transition-all font-light"
                                                    placeholder="0.00"
                                                />
                                                <span className="absolute left-0 top-3 text-gray-400 font-bold">$</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-bold text-[10px] text-brand-charcoal uppercase tracking-widest">Payment Description</label>
                                        <textarea
                                            name="description"
                                            value={form.description}
                                            onChange={updateField}
                                            rows={4}
                                            className="w-full border border-brand-bone focus:border-brand-gold bg-brand-bone/30 rounded-xl p-4 outline-none transition-all font-light resize-none mt-2"
                                            placeholder="What is this payment for? (e.g. Deposit for 8-Day Safari)"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                        <button
                                            onClick={back}
                                            className="flex-1 border-2 border-brand-charcoal/10 hover:border-brand-charcoal text-brand-charcoal font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3"
                                        >
                                            <FontAwesomeIcon icon={faArrowLeft} /> Previous Step
                                        </button>
                                        <button
                                            onClick={next}
                                            className="flex-1 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group shadow-lg"
                                        >
                                            Review Details <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="text-center mb-10">
                                        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mx-auto mb-6">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-4xl" />
                                        </div>
                                        <h2 className="text-4xl font-serif font-bold text-brand-charcoal">Review Your Payment</h2>
                                        <p className="text-gray-500 font-light mt-3 max-w-md mx-auto italic text-lg line-clamp-2">"Confirm your details below to proceed to our secure checkout."</p>
                                    </div>

                                    <div className="bg-brand-bone/50 rounded-2xl p-8 space-y-4 border border-brand-charcoal/5 group hover:bg-brand-bone transition-colors duration-500">
                                        {[
                                            { label: "Guest Name", value: `${form.salutation} ${form.firstName} ${form.lastName}`.trim() || "—" },
                                            { label: "Email Address", value: form.email || "—" },
                                            { label: "Phone Number", value: form.phone || "—" },
                                            { label: "Total Amount", value: form.amount ? `${form.currency} ${Number(form.amount).toLocaleString()}` : "—", highlight: true },
                                            { label: "Description", value: form.description || "—" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-brand-charcoal/5 last:border-0">
                                                <span className="text-brand-charcoal/50 text-[10px] uppercase font-bold tracking-widest mb-1 sm:mb-0">{item.label}</span>
                                                <span className={`font-serif text-brand-charcoal ${item.highlight ? 'text-2xl text-brand-green' : 'text-sm'} text-right max-w-sm`}>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            onClick={back}
                                            className="flex-1 border-2 border-brand-charcoal/10 hover:border-brand-charcoal text-brand-charcoal font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3"
                                        >
                                            <FontAwesomeIcon icon={faArrowLeft} /> Modify Details
                                        </button>
                                        <button className="flex-1 bg-brand-green hover:bg-brand-green/90 text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-brand-green/20">
                                            Authorize Payment
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Why Pay Online */}
                        <div className="bg-brand-charcoal rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700"></div>
                            <h3 className="text-2xl font-serif font-bold mb-8 relative z-10 underline decoration-brand-gold underline-offset-8">Online Advantages</h3>
                            <ul className="space-y-5 relative z-10">
                                {siteConfig.payment.reasonsToPayOnline.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-brand-green text-[10px]" />
                                        </div>
                                        <span className="text-gray-300 text-sm font-light leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Need Help */}
                        <div className="bg-brand-gold rounded-2xl shadow-xl p-8 text-brand-charcoal">
                            <h3 className="text-2xl font-serif font-bold mb-4">Concierge Support</h3>
                            <p className="text-brand-charcoal/70 text-sm mb-8 leading-relaxed italic">
                                "Our dedicated travel specialists are standing by to assist with your transaction."
                            </p>
                            <div className="space-y-4">
                                <a href={`tel:${siteConfig.contacts.phoneNumber}`} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-brand-charcoal/10 rounded-full flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-white transition-all">
                                        <FontAwesomeIcon icon={faHeadset} className="text-sm" />
                                    </div>
                                    <span className="font-bold text-sm">{siteConfig.contacts.phoneNumber}</span>
                                </a>
                                <a href={`mailto:${siteConfig.contacts.email}`} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-brand-charcoal/10 rounded-full flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-white transition-all">
                                        <FontAwesomeIcon icon={faLock} className="text-sm" />
                                    </div>
                                    <span className="font-bold text-sm lowercase truncate max-w-[150px]">{siteConfig.contacts.email}</span>
                                </a>
                            </div>
                        </div>

                        {/* Accepted Currencies */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-brand-charcoal/5">
                            <h4 className="font-bold text-brand-charcoal text-[10px] uppercase tracking-widest mb-6">Global Currencies</h4>
                            <div className="flex flex-wrap gap-3">
                                {siteConfig.payment.acceptedCurrencies.map((curr, i) => (
                                    <span key={i} className="bg-brand-bone text-brand-charcoal/70 px-4 py-2 rounded-lg text-xs font-bold border border-brand-charcoal/5">
                                        {curr}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest">Converted at live market rates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayUsPage;