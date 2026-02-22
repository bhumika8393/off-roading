"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Problem", href: "/about" },
    { name: "Methodology", href: "/methodology" },
    { name: "AI Engineering", href: "/model" },
    { name: "Results", href: "/results" },
    { name: "Challenges", href: "/challenges" },
    { name: "Future Work", href: "/future-work" },
    { name: "Team", href: "/team" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue flex items-center justify-center font-bold text-white shadow-lg shadow-accent-blue/20">
                        AI
                    </div>
                    <div className="flex flex-col -gap-1">
                        <span className="font-bold text-lg leading-tight">Offroad</span>
                        <span className="font-bold text-lg leading-tight">Segmentation</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[13px] font-semibold text-foreground/70 hover:text-accent-cyan transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4">
                        <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-foreground/70 hover:text-white transition-colors">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            GitHub
                        </a>
                        <Link
                            href="/report"
                            className="px-5 py-2.5 rounded-lg bg-accent-cyan text-black text-[13px] font-bold flex items-center gap-2 hover:bg-accent-cyan/90 transition-all shadow-lg shadow-accent-cyan/10"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            Report
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-medium text-foreground/80"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/demo"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-center px-5 py-3 rounded-xl bg-accent-blue text-white font-semibold"
                    >
                        Try Demo
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
