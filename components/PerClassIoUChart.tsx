"use client";

import { motion } from "framer-motion";

const iouData = [
    { label: "Sky", value: 95.0, color: "#3b82f6" },
    { label: "Landscape", value: 88.0, color: "#d97706" },
    { label: "Trees", value: 82.0, color: "#22c55e" },
    { label: "Rocks", color: "#a855f7", value: 79.0 }, // Adjusted to match image colors approximately
    { label: "Dry Grass", value: 76.0, color: "#ca8a04" },
    { label: "Lush Bushes", value: 74.0, color: "#10b981" },
    { label: "Dry Bushes", value: 72.0, color: "#84cc16" },
    { label: "Ground Clutter", value: 68.0, color: "#78350f" },
    { label: "Flowers", value: 65.0, color: "#ec4899" },
    { label: "Logs", value: 63.0, color: "#92400e" },
];

export default function PerClassIoUChart() {
    return (
        <div className="glass-card p-12 rounded-[2.5rem] w-full max-w-5xl mx-auto">
            <h3 className="font-mono text-xl mb-12 text-foreground/90 tracking-tighter self-start">
        // Per-Class IoU Scores
            </h3>

            <div className="space-y-6">
                {iouData.map((item, index) => (
                    <div key={item.label} className="grid grid-cols-[140px_1fr_60px] items-center gap-6">
                        <span className="text-sm font-semibold text-foreground/60">{item.label}</span>
                        <div className="h-4 bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.value}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                        </div>
                        <span className="text-sm font-bold text-right">{item.value.toFixed(1)}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
