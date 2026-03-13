import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from 'next/font/google';

import "./global.css";
import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import siteConfig from "./siteConfig";

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
});
const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: siteConfig.company.name,
    description: siteConfig.company.tagline,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`scroll-smooth ${playfair.variable} ${dmSans.variable}`}>
            <body className={`${dmSans.className} antialiased bg-brand-bone text-brand-charcoal`}>
                <Topbar />
                <Navbar />
                {children}

                <Footer />
            </body>
        </html>
    );
}
