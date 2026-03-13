"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import siteConfig from "@/app/siteConfig";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [safarisOpen, setSafarisOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const navLinks = siteConfig.navigation;

    const handleDropdownToggle = (dropdown: string) => {
        if (dropdown === "safaris") {
            setSafarisOpen(!safarisOpen);
            setServicesOpen(false);
        } else if (dropdown === "services") {
            setServicesOpen(!servicesOpen);
            setSafarisOpen(false);
        }
    };

    const openDropdown = (dropdown: string) => {
        if (dropdown === "safaris") {
            setSafarisOpen(true);
            setServicesOpen(false);
        } else if (dropdown === "services") {
            setServicesOpen(true);
            setSafarisOpen(false);
        }
    };

    const closeDropdown = (dropdown: string) => {
        if (dropdown === "safaris") {
            setSafarisOpen(false);
        } else if (dropdown === "services") {
            setServicesOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setSafarisOpen(false);
        setServicesOpen(false);
    };

    return (
        <div className="w-full relative p-0 lg:before:absolute lg:before:content-[''] lg:before:w-full lg:before:h-1/2 lg:before:top-[50%] lg:before:left-0 lg:before:bg-gray-200 mt-4">
            <div className="lg:max-w-[960px] max-w-full mx-auto relative p-0 lg:px-3" style={{ zIndex: 9 }}>
                <nav className="relative flex flex-wrap items-center justify-between bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.08)] py-2 lg:py-0 px-12 lg:px-4">
                    <Link href="/" className="my-auto py-[0.3125rem] mr-4 leading-[inherit] whitespace-nowrap hover:no-underline">
                        <h1 className="m-0 font-serif font-bold tracking-tight text-3xl leading-[1.2] text-brand-green">
                            {siteConfig.company.name}
                        </h1>
                    </Link>
                    {/* Mobile Toggler */}
                    <button
                        title="Toggle navigation"
                        type="button"
                        className="py-[0.25rem] px-[0.75rem] text-[1.25rem] leading-[1] bg-transparent border border-transparent hover:no-underline lg:hidden inline-block w-[1.5em] h-[1.5em] align-middle bg-[length:100%_100%] bg-no-repeat bg-center"
                        style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280,0,0,0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
                        }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="sr-only">Toggle navigation</span>
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`${mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"} overflow-hidden lg:overflow-visible lg:flex lg:flex-[1_1_auto] lg:items-center basis-full flex-grow px-3 lg:px-0 justify-between transition-all duration-300 ease-in-out`}
                        id="navbarCollapse"
                    >
                        <div className="flex flex-col lg:flex-row pl-0 mb-0 list-none ml-auto py-0">
                            {navLinks.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="relative group"
                                    onMouseEnter={() => {
                                        if (item.dropdown && typeof window !== 'undefined' && window.innerWidth >= 992) {
                                            openDropdown(item.label === "Safaris" ? "safaris" : "services");
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (item.dropdown && typeof window !== 'undefined' && window.innerWidth >= 992) {
                                            closeDropdown(item.label === "Safaris" ? "safaris" : "services");
                                        }
                                    }}
                                >
                                    {/* Main Link */}
                                    {item.dropdown ? (
                                        <button
                                            onClick={() => {
                                                if (typeof window !== 'undefined' && window.innerWidth < 992) {
                                                    handleDropdownToggle(item.label === "Safaris" ? "safaris" : "services");
                                                }
                                            }}
                                            className={`w-full text-left block py-[30px] px-[15px] text-brand-charcoal font-semibold uppercase tracking-widest text-xs outline-none hover:text-brand-gold hover:no-underline lg:pr-2 lg:pl-2 transition-colors duration-150 ${index === 0 ? "text-brand-gold" : ""}`}
                                        >
                                            {item.label}
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className="ml-2 text-[10px] transition-transform duration-200"
                                                style={{
                                                    transform: (item.label === "Safaris" && safarisOpen) || (item.label === "Other Services" && servicesOpen) ? "rotate(180deg)" : "rotate(0deg)"
                                                }}
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className={`block py-[30px] px-[15px] text-brand-charcoal font-semibold uppercase tracking-widest text-xs outline-none hover:text-brand-gold hover:no-underline lg:pr-2 lg:pl-2 transition-colors duration-150 ${index === 0 ? "text-brand-gold" : ""}`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <div
                                            className={`${(item.label === "Safaris" && safarisOpen) || (item.label === "Other Services" && servicesOpen) ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-2"} lg:absolute lg:top-full lg:left-0 lg:min-w-[15rem] lg:bg-white lg:shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:border-t-2 lg:border-brand-gold transition-all duration-300 ease-in-out`}
                                            style={{ zIndex: 1000 }}
                                        >
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    onClick={closeMobileMenu}
                                                    className="block w-full py-3 px-6 font-medium text-xs uppercase tracking-wider text-brand-charcoal hover:bg-brand-bone hover:text-brand-gold transition-colors duration-150"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;