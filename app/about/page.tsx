"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Focus, Map, Mountain } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">The Challenge of <br /><span className="text-gradient">Off-Road Autonomy</span></h1>
                    <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
                        Unlike urban environments with clear lane markings and predictable rules, off-road terrain presents a chaotic, unstructured, and highly variable landscape.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <div className="glass-card p-10 rounded-[2.5rem] border-accent-blue/20">
                        <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8">
                            <AlertTriangle className="w-8 h-8 text-accent-blue" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Why it's Difficult</h3>
                        <ul className="space-y-4 text-foreground/70">
                            <li className="flex gap-3"><span className="text-accent-blue font-bold">01</span> Lack of structured geometry (no roads, no signs).</li>
                            <li className="flex gap-3"><span className="text-accent-blue font-bold">02</span> Extreme lighting variations and dust interference.</li>
                            <li className="flex gap-3"><span className="text-accent-blue font-bold">03</span> Deformable surfaces (sand, mud) affecting traversability.</li>
                            <li className="flex gap-3"><span className="text-accent-blue font-bold">04</span> Class ambiguity between different vegetation types.</li>
                        </ul>
                    </div>

                    <div className="glass-card p-10 rounded-[2.5rem] border-accent-purple/20">
                        <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-8">
                            <Focus className="w-8 h-8 text-accent-purple" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Mission Focus</h3>
                        <p className="text-foreground/70 leading-relaxed">
                            Our project specifically targets the <strong>Elite Hack 1.0 Off-road Challenge</strong>. We aim to bridge the gap between simulation and reality by training models on high-fidelity synthetic data, enabling UGVs to perceive terrain with the same nuance as a human driver.
                        </p>
                    </div>
                </div>

                <section className="py-20 border-t border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Semantic <br />Segmentation</h2>
                            <p className="text-foreground/50">Pixel-level classification that assigns a category to every single pixel in the image.</p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-sm">
                            {[
                                { label: "Trees", desc: "Complex vertical structures with varying density." },
                                { label: "Ground Clutter", desc: "Small debris, logs, and scattered rocks." },
                                { label: "Dry Brushes", desc: "Dehydrated vegetation, high risk for traction." },
                                { label: "Lush Bushes", desc: "Dense green foliage, potential obstacle." }
                            ].map(item => (
                                <div key={item.label} className="p-6 border border-white/10 rounded-2xl">
                                    <h4 className="text-accent-cyan mb-2 font-bold uppercase tracking-widest">{item.label}</h4>
                                    <p className="opacity-60">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
