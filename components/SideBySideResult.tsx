"use client";

import { motion } from "framer-motion";

export default function SideBySideResult() {
    return (
        <section className="py-24 px-6 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="rounded-lg overflow-hidden border border-white/5 shadow-2xl"
                    >
                        <img
                            src="/demo-raw.svg"
                            alt="Input Desert Scene"
                            className="w-full aspect-square md:aspect-auto object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-lg overflow-hidden border border-white/5 shadow-2xl"
                    >
                        <img
                            src="/demo-seg.svg"
                            alt="Segmentation Mask Result"
                            className="w-full aspect-square md:aspect-auto object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
