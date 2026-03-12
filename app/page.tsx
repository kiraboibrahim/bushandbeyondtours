"use client";

import Head from "next/head";
import { motion, Variants } from "framer-motion";

import Carousel from "@/components/home/Carousel";
import BookingForm from "@/components/home/BookingForm";
import AboutSection from "@/components/home/AboutSection";
import FeatureSection from "@/components/home/FeatureSection";
import DestinationSection from "@/components/home/DestinationSection";
import ServicesSection from "@/components/home/ServicesSection";
import PackagesSection from "@/components/home/PackagesSection";
import SpecialOffer from "@/components/home/SpecialOffer";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/common/Footer";
import Gallery from "@/components/home/Gallery";
import BackToTopFAB from "@/components/home/BackToTop";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
        },
    }),
};

export default function Home() {
    const sections = [
        <Carousel key="carousel" />,
        <BookingForm key="booking" />,
        <AboutSection key="about" />,
        <FeatureSection key="feature" />,
        <Gallery key="gallery" />,
        <DestinationSection key="destination" />,
        <ServicesSection key="services" />,
        <PackagesSection key="packages" />,
        <SpecialOffer key="registration" />,
        <TeamSection key="team" />,
        <BlogSection key="blog" />,
    ];

    return (
        <>
            <Head>
                <title>Traveler | Explore the World</title>
            </Head>

            {sections.map((Section, i) => (
                <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={i}
                    variants={fadeUp}
                >
                    {Section}
                </motion.div>
            ))}
            <BackToTopFAB />
        </>
    );
}