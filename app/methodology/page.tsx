"use client";

import { motion } from "framer-motion";
import { ArrowDown, Database, Cpu, TestTube2, Workflow } from "lucide-react";

const steps = [
    {
        icon: Database,
        title: "Falcon Platform Acquisition",
        desc: "Extraction of multi-spectral synthetic data from Falcon engine simulation environments.",
        details: ["142,000 frames", "14 semantic classes", "Diverse weather presets"]
    },
    {
        icon: Workflow,
        title: "Data Preprocessing",
        desc: "Color-to-label mapping and normalization of synthetic desert spectra.",
        details: ["Class balancing", "Mosaic augmentation", "Resolution standardization"]
    },
    {
        icon: Cpu,
        title: "Deep Model Training",
        desc: "Fine-tuning SegFormer and DeepLabV3+ architectures with custom loss functions.",
        details: ["Weighted Cross-Entropy", "Adan Optimizer", "Mixed Precision (FP16)"]
    },
    {
        icon: TestTube2,
        title: "Performance Validation",
        desc: "Testing on held-out desert datasets and unseen environments to ensure generalization.",
        details: ["mIoU Benchmarking", "Latency Analysis", "Edge-case stress testing"]
    }
];

export default function MethodologyPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Pipeline <span className="text-gradient">Architecture</span></h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of our data flow, model engineering, and validation framework.
                    </p>
                </header>

                <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 lg:text-right">
                                    {index % 2 === 0 && (
                                        <div className="inline-block p-4 rounded-3xl bg-accent-blue/10 mb-6 lg:ml-auto">
                                            <step.icon className="w-8 h-8 text-accent-blue" />
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-foreground/60 mb-6 max-w-md ml-auto mr-0">{step.desc}</p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                        {step.details.map(detail => (
                                            <span key={detail} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 w-12 h-12 rounded-full bg-black border-4 border-accent-blue flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>

                                <div className="flex-1 lg:text-left">
                                    {index % 2 !== 0 && (
                                        <div className="inline-block p-4 rounded-3xl bg-accent-purple/10 mb-6">
                                            <step.icon className="w-8 h-8 text-accent-purple" />
                                        </div>
                                    )}
                                    {/* Decorative element for the empty side */}
                                    <div className="hidden lg:block w-full h-[200px] border border-white/5 rounded-3xl bg-white/[0.01]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
