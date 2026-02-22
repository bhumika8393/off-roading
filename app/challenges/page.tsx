"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldAlert, Cpu, Zap } from "lucide-react";

const challenges = [
    {
        icon: ShieldAlert,
        title: "Class Imbalance",
        problem: "Desert terrain is 80% ground/sand, causing the model to ignore small classes like flowers or debris.",
        solution: "Implemented Weighted Cross-Entropy loss and oversampling of rare terrain features in the synthetic data generation phase."
    },
    {
        icon: Zap,
        title: "Domain Shift",
        problem: "Models trained on 'perfect' synthetic data often fail on 'noisy' real-world sensors.",
        solution: "Added sensor-noise augmentation (Dust, Motion Blur, Lens Flare) to the simulator and used Image-to-Image translation for domain adaptation."
    },
    {
        icon: Cpu,
        title: "Inference Latency",
        problem: "High-resolution segmentation is computationally expensive for mobile UGV processors.",
        solution: "Used TensorRT quantization (INT8) and optimized the MLP decoder to maintain 30+ FPS on edge-grade hardware."
    },
    {
        icon: Lightbulb,
        title: "Occlusion Robustness",
        problem: "Bushes and rocks overlapping make it hard to define exact boundaries.",
        solution: "Leveraged multi-view consistency where the model correlates information from previous frames to refine current segmentation masks."
    }
];

export default function ChallengesPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Technical <br /><span className="text-gradient">Challenges</span></h1>
                    <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
                        Every breakthrough came with its own set of problems. Here's how we solved them.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {challenges.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 glass-card rounded-[3rem] border-white/5 group hover:border-accent-blue/30 transition-all"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-accent-cyan group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-colors">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[10px] uppercase font-mono text-rose-400 mb-2 tracking-widest">Problem Case</h4>
                                    <p className="text-foreground/70 leading-relaxed font-medium">{item.problem}</p>
                                </div>
                                <div className="pt-6 border-t border-white/5">
                                    <h4 className="text-[10px] uppercase font-mono text-emerald-400 mb-2 tracking-widest">Architectural Solution</h4>
                                    <p className="text-foreground/70 leading-relaxed">{item.solution}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
