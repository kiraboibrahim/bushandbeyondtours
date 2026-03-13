import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faHeart, faLeaf, faUsers, faGlobeAfrica, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import siteConfig from "../siteConfig";

const AboutUs = () => {
    const valueIcons: Record<string, any> = {
        excellence: faGem,
        passion: faHeart,
        authenticity: faGlobeAfrica,
        community: faUsers,
        responsibility: faLeaf
    };

    return (
        <div className="min-h-screen bg-brand-bone/30 font-sans">
            {/* Hero */}
            <div className="relative h-[450px] bg-brand-charcoal overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className="bg-brand-gold text-brand-charcoal text-[10px] font-bold px-4 py-1 rounded-full mb-8 tracking-[0.3em] uppercase">OUR JOURNEY</div>
                    <p className="text-brand-gold font-serif italic tracking-widest text-lg mb-4">{siteConfig.company.name}</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">{siteConfig.about.tagline}</h1>
                    <div className="w-24 h-[1px] bg-brand-gold/50"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Stats Bar */}
                <div className="bg-white rounded-2xl shadow-2xl p-10 -mt-32 relative z-10 mb-20 border border-brand-charcoal/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {siteConfig.about.stats.map((stat, i) => (
                            <div key={i} className="md:border-r last:border-r-0 border-brand-bone/50 px-4">
                                <p className="text-brand-green font-serif font-bold text-4xl md:text-5xl mb-2">{stat.num}</p>
                                <p className="text-brand-charcoal/40 text-[10px] uppercase font-bold tracking-[3px]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Who We Are */}
                <div className="bg-white rounded-3xl shadow-xl p-12 lg:p-20 mb-20 border border-brand-charcoal/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bone rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-16 h-[2px] bg-brand-gold"></div>
                            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs">Genesis</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-12">
                            {siteConfig.about.story.title}
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <p className="text-brand-charcoal leading-relaxed italic text-2xl font-serif border-l-8 border-brand-gold pl-8 py-4 bg-brand-bone/30 rounded-r-2xl">
                                    {siteConfig.about.story.paragraphs[0]}
                                </p>
                                <p className="text-brand-charcoal/70 text-lg font-light leading-loose">
                                    {siteConfig.about.story.paragraphs[1]}
                                </p>
                            </div>
                            <div className="space-y-8">
                                <p className="text-brand-charcoal/70 text-lg font-light leading-loose">
                                    {siteConfig.about.story.paragraphs[2]}
                                </p>
                                <p className="text-brand-charcoal/70 text-lg font-light leading-loose">
                                    {siteConfig.about.story.paragraphs[3]}
                                </p>
                                <div className="pt-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                                            <FontAwesomeIcon icon={faGem} />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-brand-charcoal lowercase italic">Experience Excellence</p>
                                            <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">The Bush & Beyond Standard</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-24">
                    <div className="text-center mb-20">
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="w-16 h-[1px] bg-brand-gold"></div>
                            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">The Soul of Our Journey</span>
                            <div className="w-16 h-[1px] bg-brand-gold"></div>
                        </div>
                        <h2 className="text-5xl font-serif font-bold text-brand-charcoal italic">Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {siteConfig.about.values.map((value, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-500 border-b border-brand-charcoal/5 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-0 bg-brand-gold group-hover:h-full transition-all duration-500"></div>
                                <div className="w-20 h-20 bg-brand-bone text-brand-charcoal rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-brand-gold group-hover:text-brand-charcoal shadow-inner transform group-hover:rotate-6">
                                    <FontAwesomeIcon icon={valueIcons[value.icon]} className="text-3xl" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-6 group-hover:text-brand-gold transition-colors">{value.title}</h3>
                                <p className="text-brand-charcoal/60 text-sm font-light leading-relaxed group-hover:text-brand-charcoal/80 transition-colors">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-10 mb-24">
                    <div className="bg-brand-charcoal rounded-3xl shadow-2xl p-12 lg:p-16 text-white relative overflow-hidden group border border-white/5">
                        <div className="absolute top-0 right-0 p-12 opacity-5 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 translate-x-1/4 -translate-y-1/4">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-[200px]" />
                        </div>
                        <div className="w-16 h-16 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-10 border border-brand-gold/20 backdrop-blur-sm">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-brand-gold text-2xl" />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-brand-gold underline decoration-brand-gold/30 underline-offset-8">Our Mission</h3>
                        <p className="text-white/70 leading-relaxed font-light text-xl italic lg:max-w-md">
                            "{siteConfig.about.mission}"
                        </p>
                    </div>
                    <div className="bg-brand-gold rounded-3xl shadow-2xl p-12 lg:p-16 text-brand-charcoal relative overflow-hidden group border border-brand-charcoal/5">
                        <div className="absolute top-0 right-0 p-12 opacity-5 transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-12 translate-x-1/4 -translate-y-1/4">
                            <FontAwesomeIcon icon={faGlobeAfrica} className="text-[200px]" />
                        </div>
                        <div className="w-16 h-16 bg-brand-charcoal/10 rounded-xl flex items-center justify-center mb-10 border border-brand-charcoal/20 backdrop-blur-sm">
                            <FontAwesomeIcon icon={faGlobeAfrica} className="text-brand-charcoal text-2xl" />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-8 italic">Our Vision</h3>
                        <p className="text-brand-charcoal/80 leading-relaxed font-bold text-xl lg:max-w-md">
                            {siteConfig.about.vision}
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="relative overflow-hidden bg-brand-charcoal rounded-[3rem] p-16 lg:p-24 text-center border border-white/5 shadow-3xl">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
                    <div className="relative z-10">
                        <h3 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-8 italic">Your Legacy Adventure<br /><span className="text-brand-gold underline decoration-brand-gold/30 underline-offset-[12px]">Starts Here</span></h3>
                        <p className="text-white/60 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            Every great story begins with a single step. Let us curate yours in the heart of the wild.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link href="/contact" className="bg-brand-gold text-brand-charcoal px-12 py-5 rounded-full font-bold hover:bg-white transition-all duration-500 uppercase tracking-[0.2em] text-xs shadow-2xl hover:shadow-brand-gold/20 group">
                                Begin Your Safari <FontAwesomeIcon icon={faPaperPlane} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                            <Link href="/contact" className="text-white border-b-2 border-brand-gold/0 hover:border-brand-gold py-2 font-bold transition-all duration-500 uppercase tracking-[0.2em] text-xs">
                                Speak with a Consultant
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;