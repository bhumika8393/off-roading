"use client";

import { motion } from "framer-motion";

const classes = [
    { name: "Trees", color: "#22c55e" },
    { name: "Lush Bushes", color: "#10b981" },
    { name: "Dry Grass", color: "#d97706" },
    { name: "Dry Bushes", color: "#b45309" },
    { name: "Ground Clutter", color: "#57534e" },
    { name: "Flowers", color: "#ec4899" },
    { name: "Logs", color: "#78350f" },
    { name: "Rocks", color: "#475569" },
    { name: "Landscape", color: "#92400e" },
    { name: "Sky", color: "#3b82f6" },
];

export default function SegmentationClasses() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Segmentation Classes</h2>
                <p className="text-foreground/50 text-xl max-w-3xl mx-auto">
                    10 distinct terrain and object categories for comprehensive scene understanding
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {classes.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center group"
                    >
                        <div
                            className="aspect-video rounded-xl mb-4 shadow-inner"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="font-bold text-sm tracking-wide text-foreground/80 group-hover:text-white transition-colors">
                            {item.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
