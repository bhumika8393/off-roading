"use client";

import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { CheckCircle2, TrendingUp } from "lucide-react";
import PerClassIoUChart from "@/components/PerClassIoUChart";

const trainingData = [
    { epoch: 1, iou: 0.32, loss: 0.85 },
    { epoch: 5, iou: 0.55, loss: 0.42 },
    { epoch: 10, iou: 0.68, loss: 0.28 },
    { epoch: 15, iou: 0.76, loss: 0.19 },
    { epoch: 20, iou: 0.82, loss: 0.12 },
    { epoch: 25, iou: 0.845, loss: 0.09 },
];

export default function ResultsPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Benchmarks & <span className="text-gradient">Results</span></h1>
                    <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
                        Quantifying the performance of our semantic segmentation engine across diverse test scenarios.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    {/* Chart 1: mIoU Improvement */}
                    <div className="glass-card p-10 rounded-[3rem]">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-1">mIoU Convergence</h3>
                                <p className="text-sm text-foreground/40">Performance tracking over 25 epochs</p>
                            </div>
                            <div className="p-3 rounded-2xl bg-accent-blue/10">
                                <TrendingUp className="text-accent-blue" />
                            </div>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={trainingData}>
                                    <defs>
                                        <linearGradient id="colorIou" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                    <XAxis dataKey="epoch" stroke="#ffffff40" fontSize={12} />
                                    <YAxis stroke="#ffffff40" fontSize={12} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', borderRadius: '12px' }}
                                        itemStyle={{ color: '#3b82f6' }}
                                    />
                                    <Area type="monotone" dataKey="iou" stroke="#3b82f6" fillOpacity={1} fill="url(#colorIou)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Metrics summary */}
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-6 h-full">
                            {[
                                { label: "Precision", value: "92.4%", desc: "Correct positive detections" },
                                { label: "Recall", value: "88.7%", desc: "Proportion of positives found" },
                                { label: "F1 Score", value: "90.5%", desc: "Harmonic mean of precision/recall" },
                                { label: "Latency", value: "31.2ms", desc: "Per-frame processing time" }
                            ].map(stat => (
                                <div key={stat.label} className="p-8 glass-card rounded-[2rem]">
                                    <p className="text-[10px] text-accent-cyan font-mono uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                                    <h4 className="text-3xl font-black mb-2">{stat.value}</h4>
                                    <p className="text-xs text-foreground/40 leading-relaxed">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mb-32">
                    <PerClassIoUChart />
                </section>

                <section className="bg-white/[0.02] p-12 rounded-[3.5rem] border border-white/5">
                    <h2 className="text-3xl font-bold mb-12">Detailed class analysis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Sky / Horizon", score: 99.2 },
                            { label: "Sand / Ground", score: 96.5 },
                            { label: "Large Rocks", score: 88.4 },
                            { label: "Dry Vegetation", score: 81.2 },
                            { label: "Lush Vegetation", score: 84.7 },
                            { label: "Small Debris", score: 72.1 },
                            { label: "Flowers", score: 68.5 },
                            { label: "Obstacles", score: 89.9 }
                        ].map(item => (
                            <div key={item.label} className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-medium">{item.label}</span>
                                    <span className="text-xs font-mono opacity-40">{item.score}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.score}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-accent-blue"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
