import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { manProcessing as manprocessing, manPurify as manpurify, manWithSalt as manwithsalt } from '../../assets/images';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Manufacturer = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // Data - Updated with Salt/Trade imagery and descriptions to match theme
    const sections = [
        {
            id: 1,
            title: "Massive Production Capacity",
            description: "Built to handle bulk export requirements with consistent quality and uninterrupted supply.",
            image: manprocessing,
            highlights: [
                "1000+ MT Daily Output",
                "Automated Processing",
                "High Volume Dispatch",
                "Continuous Operations"
            ]
        },
        {
            id: 2,
            title: "Modern Refining Process",
            description: "Our advanced processing system ensures purity, free-flowing texture, and export-grade quality.",
            image: manwithsalt,
            highlights: [
                "Multi-Stage Refining",
                "Uniform Grain Size",
                "Moisture Control",
                "Quality Monitoring"
            ]
        },
        {
            id: 3,
            title: "Export Ready Infrastructure",
            description: "Efficient packaging and logistics infrastructure for timely global deliveries.",
            image: manpurify,
            highlights: [
                "Bulk Packaging Solutions",
                "Container Loading Facility",
                "Fast Order Fulfillment",
                "Worldwide Export Support"
            ]
        }
    ];

    useGSAP(() => {
        // Only run on desktop
        if (window.innerWidth < 1024) return;

        const track = trackRef.current;
        const container = containerRef.current;

        // Calculate exact scroll distance needed to see the end of the track
        const totalTranslate = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
            x: -totalTranslate,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1, // Smooth scrub
                start: "top top",
                end: () => `+=${totalTranslate}`, // Pin duration matches translation distance
                invalidateOnRefresh: true, // Recalculate on window resize
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative z-40 bg-brand-background overflow-hidden">

            {/* Desktop: Horizontal Track */}
            <div 
                ref={trackRef}
                className="hidden lg:flex h-screen w-max flex-nowrap will-change-transform"
            >
                {/* Intro Block (Fixed Width) */}
                <div className="w-[50vw] h-full bg-brand-background flex items-center justify-center p-20 border-r border-brand-dark/10 shrink-0 relative z-20">
                    <div className="space-y-8 relative z-10">
                        <h2 className="text-7xl font-heading font-bold text-brand-dark leading-[0.9]">
                            Power of <br /> <span className="text-brand-accent">Production.</span>
                        </h2>
                        <p className="text-brand-dark/60 max-w-sm text-lg">
                            State-of-the-art facilities meeting global standards.
                        </p>
                        <div className="flex items-center gap-2 text-brand-accent animate-pulse mt-8">
                            <span>Scroll Down to Explore</span> <ArrowRight size={20} className="rotate-90" />
                        </div>
                    </div>
                    {/* Decorative Background for Intro */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                </div>

                {/* Cards */}
                {sections.map((item) => (
                    <div key={item.id} className="w-[80vw] h-full relative shrink-0 group border-r border-white/10">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-500" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-24 w-full bg-gradient-to-t from-black/95 via-black/50 to-transparent pt-40">
                            <div className="border-l-4 border-brand-accent pl-8">
                                <span className="text-brand-accent font-bold tracking-[0.2em] text-lg uppercase mb-2 block">0{item.id}</span>
                                <h3 className="text-6xl font-heading font-bold text-white mb-6 uppercase tracking-[0.2rem]">{item.title}</h3>
                                <p className="text-white/90 text-xl max-w-2xl leading-relaxed mb-8">{item.description}</p>
                                <div className="flex flex-row flex-nowrap gap-x-4 lg:gap-x-8 gap-y-4 w-full">
                                    {item.highlights.map(pt => (
                                        <div key={pt} className="flex items-center gap-3 text-white text-base lg:text-lg font-jakarta font-bold whitespace-nowrap">
                                            <div className="w-6 h-6 rounded-full bg-brand-accent/25 text-brand-accent flex items-center justify-center flex-shrink-0 text-xs font-black">
                                                ✓
                                            </div>
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile: Vertical Stack (Normal Layout) */}
            <div className="lg:hidden w-full">
                <div className="bg-brand-background p-8 md:p-12 py-24 md:py-24 border-b border-brand-dark/10">
                    <h2 className="text-4xl font-heading font-bold text-brand-dark leading-tight mb-6">
                        Power of <br /> <span className="text-brand-accent">Production.</span>
                    </h2>
                    <p className="text-brand-dark/60">
                        Our manufacturing capabilities and supply chain excellence.
                    </p>
                </div>

                {sections.map((item) => (
                    <div key={item.id} className="relative h-[65vh] w-full">
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                            <span className="text-brand-accent font-bold mb-1 block">0{item.id}</span>
                            <h3 className="text-2xl font-heading font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/80 text-xs leading-relaxed mb-4">{item.description}</p>
                            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
                                {item.highlights.map(pt => (
                                    <div key={pt} className="flex items-center gap-1.5 text-white/95 text-[10px] font-jakarta font-semibold">
                                        <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0"></span>
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Manufacturer;