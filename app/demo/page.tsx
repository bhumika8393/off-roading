"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Camera, Loader2, CheckCircle2, RefreshCcw } from "lucide-react";
import SegmentationSlider from "@/components/SegmentationSlider";
import PerClassIoUChart from "@/components/PerClassIoUChart";

export default function DemoPage() {
    const [isUploading, setIsUploading] = useState(false);
    const [resultReady, setResultReady] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            processImage();
        }
    };

    const processImage = () => {
        setIsUploading(true);
        setResultReady(false);

        // Simulate model inference
        setTimeout(() => {
            setIsUploading(false);
            setResultReady(true);
        }, 2500);
    };

    const reset = () => {
        setPreviewUrl(null);
        setResultReady(false);
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Interactive <span className="text-gradient">Sandbox</span></h1>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Test our SegFormer model. Upload any off-road desert image and watch the model perform pixel-level classification.
                    </p>
                </header>

                <div className="max-w-5xl mx-auto">
                    {!previewUrl ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-video rounded-[3rem] border-2 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer hover:bg-white/[0.04] transition-all group"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="w-20 h-20 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Upload className="text-accent-blue w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Drop your image here</h3>
                            <p className="text-foreground/40 font-mono text-xs mb-8 uppercase tracking-widest">Supported formats: JPG, PNG, WEBP</p>
                            <button className="px-6 py-3 rounded-xl bg-white text-black font-bold">Browse Files</button>
                            <input
                                type="file"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleUpload}
                                accept="image/*"
                            />
                        </motion.div>
                    ) : (
                        <div className="space-y-12">
                            <div className="p-8 glass-card rounded-[3rem]">
                                <AnimatePresence mode="wait">
                                    {isUploading ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="aspect-video flex flex-col items-center justify-center gap-6"
                                        >
                                            <Loader2 className="w-12 h-12 text-accent-cyan animate-spin" />
                                            <div className="text-center">
                                                <p className="text-xl font-bold">Inference in Progress...</p>
                                                <p className="text-sm text-foreground/40 font-mono uppercase tracking-widest mt-2 animate-pulse">Running SegFormer-B5 Backbone</p>
                                            </div>
                                            <div className="w-64 h-1.5 bg-white/5 rounded-full mt-4 relative overflow-hidden">
                                                <motion.div
                                                    initial={{ x: "-100%" }}
                                                    animate={{ x: "100%" }}
                                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                                    className="absolute inset-0 w-1/2 bg-accent-cyan"
                                                />
                                            </div>
                                        </motion.div>
                                    ) : resultReady ? (
                                        <motion.div
                                            key="result"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-16"
                                        >
                                            {/* Side by Side Result Analysis */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-cyan">Original Input</p>
                                                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                                        <img
                                                            src={previewUrl}
                                                            alt="Original"
                                                            className="w-full aspect-square object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-purple">Segmentation Output</p>
                                                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                                        <img
                                                            src="/demo-seg.svg"
                                                            alt="Segmentation"
                                                            className="w-full aspect-square object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Analysis Metrics Section */}
                                            <div className="pt-12 border-t border-white/5">
                                                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                                                    <div className="flex-1 w-full">
                                                        <h3 className="text-2xl font-bold mb-8">Spatial Analysis Metrics</h3>
                                                        <div className="grid grid-cols-2 gap-4 mb-12">
                                                            <div className="p-6 glass-card rounded-2xl">
                                                                <p className="text-[10px] text-accent-cyan font-mono uppercase mb-2">Confidence</p>
                                                                <p className="text-2xl font-black">94.2%</p>
                                                            </div>
                                                            <div className="p-6 glass-card rounded-2xl">
                                                                <p className="text-[10px] text-accent-purple font-mono uppercase mb-2">Latency</p>
                                                                <p className="text-2xl font-black">28ms</p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={reset}
                                                            className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 flex items-center gap-2 transition-all w-full md:w-auto justify-center"
                                                        >
                                                            <RefreshCcw className="w-4 h-4" /> Process New Image
                                                        </button>
                                                    </div>

                                                    <div className="flex-[1.5] w-full">
                                                        <PerClassIoUChart />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Legend/Classes applied to this image */}
                                            <div className="pt-12 border-t border-white/5">
                                                <h4 className="text-sm font-mono text-foreground/40 uppercase tracking-widest mb-8">Detected Terrain Classes</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                                    {[
                                                        { label: "Trees", color: "#22c55e" },
                                                        { label: "Rocks", color: "#64748b" },
                                                        { label: "Dry Bush", color: "#f59e0b" },
                                                        { label: "Sky", color: "#3b82f6" },
                                                        { label: "Ground", color: "#78350f" }
                                                    ].map(cls => (
                                                        <div key={cls.label} className="flex flex-col gap-2 p-3 glass-card rounded-xl">
                                                            <div className="h-2 w-full rounded-full" style={{ backgroundColor: cls.color }} />
                                                            <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">{cls.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>

                            {/* Sample Gallery */}
                            <div className="pt-20">
                                <h2 className="text-2xl font-bold mb-8">Try Example Scenarios</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div
                                            key={i}
                                            className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform border border-white/5"
                                            onClick={() => {
                                                setPreviewUrl(`/sample-${i}.svg`);
                                                processImage();
                                            }}
                                        >
                                            <img src={`/sample-${i}.svg`} alt={`Sample ${i}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
