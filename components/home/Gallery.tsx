import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
    src: string;
    title?: string;
    location?: string;
}

import siteConfig from "@/app/siteConfig";

export default function Gallery() {
    const images = siteConfig.images.gallery;

    const [selected, setSelected] = useState<GalleryImage | null>(null);

    return (
        <div id="gallery" className="bg-brand-bone/20">
            {/* Page Header */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col items-center mb-12">
                    <h6 className="text-brand-gold uppercase mb-2 text-sm font-bold tracking-[4px]">
                        {siteConfig.home.gallery.badge}
                    </h6>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green text-center">
                        {siteConfig.home.gallery.title}
                    </h1>
                    <div className="w-24 h-1 bg-brand-gold mt-6"></div>
                </div>

                {/* Masonry Gallery */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((img: GalleryImage, i: number) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer group shadow-lg"
                            onClick={() => setSelected(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.title || ""}
                                width={600}
                                height={400}
                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 rounded-xl"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-xl backdrop-blur-[2px]">
                                <div className="text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white text-xl font-serif font-bold mb-1">{img.title}</h3>
                                    {img.location && (
                                        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{img.location}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-brand-green/95 backdrop-blur-md z-[9999] flex items-center justify-center cursor-zoom-out p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="cursor-default max-w-5xl mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative group">
                            <Image
                                src={selected.src}
                                alt={selected.title || ""}
                                width={1200}
                                height={800}
                                className="rounded-xl shadow-2xl w-full max-h-[80vh] object-contain border-4 border-white/10"
                            />

                            <button
                                className="absolute -top-12 -right-0 text-white hover:text-brand-gold transition-colors text-4xl"
                                onClick={() => setSelected(null)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="text-center mt-8">
                            <h3 className="text-white text-3xl font-serif font-bold mb-2">{selected.title}</h3>
                            {selected.location && (
                                <p className="text-brand-gold text-sm font-bold uppercase tracking-[4px]">{selected.location}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
