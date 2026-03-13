import Image from "next/image";
import { BlogPost } from "@/models/BlogPost";

import siteConfig from "@/app/siteConfig";

const BlogSection = () => {
    const blogPosts = siteConfig.images.blog;

    return (
        <div className="w-full py-20 bg-brand-bone/10" id="blog">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h6 className="text-brand-gold uppercase tracking-[4px] font-bold text-sm mb-2">
                    {siteConfig.home.blog.badge}
                </h6>
                <h1 className="text-[2.5rem] md:text-[3rem] font-serif font-bold leading-[1.2] text-brand-green mb-12">
                    {siteConfig.home.blog.title}
                </h1>

                <div className="flex flex-wrap -mx-4">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8"
                        >
                            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-bone/30">
                                <div className="relative overflow-hidden h-64">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 flex flex-col items-center justify-center bg-brand-green text-white px-3 py-1 rounded-sm shadow-md">
                                        <span className="font-serif font-bold text-lg leading-tight">
                                            {post.date.day}
                                        </span>
                                        <span className="uppercase text-[10px] font-bold tracking-widest text-brand-gold">
                                            {post.date.month}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 text-left">
                                    <div className="flex items-center mb-4 text-xs font-bold text-brand-charcoal/60 uppercase tracking-widest">
                                        <span>By {post.author}</span>
                                        <span className="mx-2 text-brand-gold">•</span>
                                        <span className="text-brand-gold">{post.category}</span>
                                    </div>
                                    <a
                                        className="text-xl font-serif font-bold text-brand-green hover:text-brand-gold transition-colors duration-300 block leading-[1.3] mb-4"
                                        href={post.link}
                                    >
                                        {post.title}
                                    </a>
                                    <a
                                        href={post.link}
                                        className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green border-b-2 border-brand-gold hover:text-brand-gold transition-all duration-300 pb-1"
                                    >
                                        Read Selection
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;