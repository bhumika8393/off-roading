"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-5xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-xs font-mono mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                    </span>
                    ELITE HACK 1.0 - WINNING ENTRY proposal
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight">
                    Training Robust AI Vision for <br />
                    <span className="text-gradient">Off-Road Autonomy</span>
                </h1>

                <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    Leveraging digital twins and synthetic data from Falcon environments to achieve pixel-perfect semantic segmentation in desert terrain.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/demo"
                        className="group px-8 py-4 rounded-full bg-accent-blue text-white font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-accent-blue/20"
                    >
                        Explore Interactive Demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/methodology"
                        className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold flex items-center gap-2 hover:bg-white/10 transition-all font-mono text-sm uppercase"
                    >
                        Technical Report
                        <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </Link>
                </div>
            </motion.div>

            {/* Visual Teaser */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative z-10 mt-20 p-4 glass-card rounded-2xl w-full max-w-6xl aspect-[21/9] overflow-hidden group cursor-pointer shadow-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                <img
                    src="/hero-preview.svg"
                    alt="Semantic Segmentation Preview"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <Play className="fill-white w-8 h-8 ml-1" />
                    </div>
                </div>
                <div className="absolute bottom-10 left-10 z-20">
                    <div className="text-white">
                        <p className="text-xs font-mono uppercase tracking-[0.3em] opacity-60 mb-2">Simulation Engine</p>
                        <h3 className="text-2xl font-bold">Falcon Digital Twin Desert Environment</h3>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
