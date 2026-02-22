"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Zap, Search } from "lucide-react";

export default function FutureWorkPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Future <span className="text-gradient">Roadmap</span></h1>
                    <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
                        Our research continues. Here's what we're working on next to push the boundaries of off-road perception.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: Rocket,
                            title: "Adaptive Domain Bridging",
                            desc: "Developing self-supervised learning methods to adapt synthetic pre-training to real-world sensor data with zero human labeling."
                        },
                        {
                            icon: Search,
                            title: "Multi-View Fusion",
                            desc: "Integrating temporal consistency across multiple camera views to improve robustness in high-speed autonomous navigation."
                        },
                        {
                            icon: Zap,
                            title: "Edge Optimization",
                            desc: "Pruning and quantizing our Transformer models specifically for NVIDIA Orin and other edge-compute platforms."
                        },
                        {
                            icon: Lightbulb,
                            title: "Uncertainty Estimation",
                            desc: "Implementing Bayesian neural networks to quantify 'model confidence' in chaotic terrain, crucial for safety."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 glass-card rounded-[3rem] border-white/5"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8">
                                <item.icon className="w-8 h-8 text-accent-blue" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
