"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, Database, Zap } from "lucide-react";

const metrics = [
    {
        label: "Mean IoU",
        value: "84.5%",
        change: "+12.3%",
        icon: Activity,
        color: "text-accent-blue",
        bg: "bg-accent-blue/10",
    },
    {
        label: "Inference Speed",
        value: "32 FPS",
        change: "Optimized",
        icon: Zap,
        color: "text-accent-cyan",
        bg: "bg-accent-cyan/10",
    },
    {
        label: "Training Samples",
        value: "142k",
        change: "Synthetic",
        icon: Database,
        color: "text-accent-purple",
        bg: "bg-accent-purple/10",
    },
    {
        label: "Class Accuracy",
        value: "91.2%",
        change: "+4.1%",
        icon: BarChart3,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
];

export default function MetricsDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-6">
            {metrics.map((metric, index) => (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-[2rem] p-8 group hover:border-white/20 transition-all hover:-translate-y-1"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div className={`p-4 rounded-2xl ${metric.bg} ${metric.color}`}>
                            <metric.icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">{metric.change}</span>
                    </div>
                    <p className="text-foreground/50 text-sm font-medium mb-1 uppercase tracking-wider">{metric.label}</p>
                    <h3 className="text-4xl font-black text-foreground">{metric.value}</h3>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-white/10" />
                            ))}
                        </div>
                        <span className="text-[10px] text-foreground/30 font-medium">Verified by Tech Team</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
