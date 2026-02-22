"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface SegmentationSliderProps {
    beforeImage: string;
    afterImage: string;
}

export default function SegmentationSlider({ beforeImage, afterImage }: SegmentationSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = "touches" in e ? e.touches[0].clientX : e.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, position)));
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize border border-white/10"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* Target Image (Base) */}
            <img
                src={beforeImage}
                alt="Original Terrain"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Segmentation Image (Overlay) */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={afterImage}
                    alt="Semantic Segmentation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Divider */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center border-4 border-accent-blue shadow-xl">
                        <div className="flex gap-1">
                            <div className="w-1 h-3 bg-accent-blue rounded-full" />
                            <div className="w-1 h-3 bg-accent-blue rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-mono uppercase tracking-widest pointer-events-none">
                Original Input
            </div>
            <div className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-accent-blue/50 backdrop-blur-md text-white text-xs font-mono uppercase tracking-widest pointer-events-none">
                Segmentation Mask
            </div>
        </div>
    );
}
