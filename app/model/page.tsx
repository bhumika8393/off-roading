"use client";

import { motion } from "framer-motion";
import { BarChart, Code2, LineChart, Network } from "lucide-react";

export default function ModelPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Model <span className="text-gradient">Engineering</span></h1>
                    <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
                        Technical deep-dive into the architectural decisions that power our off-road segmentation engine.
                    </p>
                </header>

                {/* Model Architecture Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                    <div className="lg:col-span-2 glass-card p-12 rounded-[3rem] overflow-hidden group">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                            <Network className="text-accent-cyan" />
                            SegFormer-B5 Architecture
                        </h2>
                        <p className="text-foreground/60 mb-8 leading-relaxed">
                            We chose SegFormer for its efficient multi-scale feature extraction without the need for positional encoding. The hierarchical Transformer encoder captures both local and global context, crucial for identifying large landscape features vs small ground clutter.
                        </p>
                        <div className="relative aspect-video rounded-2xl bg-black/40 border border-white/5 p-8 flex items-center justify-center font-mono text-sm text-accent-cyan/60 group-hover:border-accent-cyan/20 transition-all">
                            {/* Simulated Architecture Diagram */}
                            <div className="flex flex-col gap-4 items-center">
                                <div className="px-6 py-3 border border-accent-cyan/30 rounded-lg">INPUT IMAGE (512x512)</div>
                                <div className="h-8 w-px bg-accent-cyan/30" />
                                <div className="flex gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex flex-col items-center">
                                            <div className="px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/20 rounded-md">STAGE {i}</div>
                                            <div className="h-4 w-px bg-accent-cyan/20" />
                                            <div className="w-20 h-1 bg-accent-cyan/20" />
                                        </div>
                                    ))}
                                </div>
                                <div className="h-8 w-px bg-accent-cyan/30" />
                                <div className="px-6 py-3 bg-accent-blue/20 border border-accent-blue/30 rounded-lg text-white font-bold">MLP DECODER</div>
                                <div className="h-8 w-px bg-accent-blue/30" />
                                <div className="px-6 py-3 border border-accent-blue/30 rounded-lg">PREDICTION MASK</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="glass-card p-8 rounded-[2rem] flex-1">
                            <h3 className="font-bold text-xl mb-4 text-accent-cyan uppercase tracking-tighter">Loss Function</h3>
                            <code className="text-xs bg-black/50 p-4 rounded-xl block mb-4 border border-white/5">
                                loss = CE(y, ŷ) + α * Dice(y, ŷ)
                            </code>
                            <p className="text-sm text-foreground/50">Hybrid combination of Cross-Entropy and Dice loss to handle class imbalance between desert ground (large) and desert flowers (small).</p>
                        </div>
                        <div className="glass-card p-8 rounded-[2rem] flex-1">
                            <h3 className="font-bold text-xl mb-4 text-accent-purple uppercase tracking-tighter">Hyperparameters</h3>
                            <ul className="text-sm space-y-3 font-mono">
                                <li className="flex justify-between"><span>Batch Size:</span> <span className="text-accent-purple">16</span></li>
                                <li className="flex justify-between"><span>LR:</span> <span className="text-accent-purple">6e-5</span></li>
                                <li className="flex justify-between"><span>Optimizer:</span> <span className="text-accent-purple">AdamW</span></li>
                                <li className="flex justify-between"><span>Scheduler:</span> <span className="text-accent-purple">Linear Warp</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="py-20">
                    <h2 className="text-3xl font-bold mb-12">Comparative Analysis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { model: "DeepLabV3+", iou: "78.2%", speed: "24 FPS", notes: "Solid baseline, struggling with fine textures." },
                            { model: "UNet (ResNet50)", iou: "71.5%", speed: "45 FPS", notes: "Very fast, loses global context on large rocks." },
                            { model: "SegFormer (Ours)", iou: "84.5%", speed: "32 FPS", notes: "Best balance of accuracy and efficiency.", active: true }
                        ].map(item => (
                            <div key={item.model} className={`p-8 rounded-[2.5rem] border transition-all ${item.active ? 'bg-accent-blue/5 border-accent-blue/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]' : 'border-white/5 bg-white/[0.01]'}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <h4 className="text-xl font-bold">{item.model}</h4>
                                    {item.active && <span className="px-2 py-1 rounded-md bg-accent-blue text-[10px] uppercase font-bold">Selected</span>}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-[10px] text-foreground/40 uppercase mb-1">mIoU Score</p>
                                        <p className="text-2xl font-black">{item.iou}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-foreground/40 uppercase mb-1">Inference</p>
                                        <p className="text-2xl font-black">{item.speed}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-foreground/50">{item.notes}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
