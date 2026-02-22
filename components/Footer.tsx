import Link from "next/link";
import { Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Cpu className="w-8 h-8 text-accent-cyan" />
                            <span className="font-bold text-xl">OFFROAD<span className="text-accent-blue font-mono font-medium tracking-widest ml-1">AI</span></span>
                        </Link>
                        <p className="text-foreground/60 max-w-md leading-relaxed">
                            Advancing off-road autonomous navigation through high-fidelity synthetic data and modern semantic segmentation architectures. Developed for the Elite Hack 1.0 Hackathon.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Project</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-foreground/50 hover:text-accent-blue transition-colors">Problem Space</Link></li>
                            <li><Link href="/methodology" className="text-foreground/50 hover:text-accent-blue transition-colors">Methodology</Link></li>
                            <li><Link href="/model" className="text-foreground/50 hover:text-accent-blue transition-colors">AI Models</Link></li>
                            <li><Link href="/results" className="text-foreground/50 hover:text-accent-blue transition-colors">Benchmarks</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Contact</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:team@offroad-ai.com" className="flex items-center gap-2 text-foreground/50 hover:text-accent-blue transition-colors">
                                <Mail className="w-4 h-4" /> team@offroad-ai.com
                            </a>
                            <div className="flex gap-4 pt-2">
                                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-foreground/40">
                        &copy; {new Date().getFullYear()} Offroad AI Research. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-foreground/40 font-mono italic">
                        <span>Powered by Falcon Platforms</span>
                        <span>Made with &hearts; for Elite Hack 1.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
