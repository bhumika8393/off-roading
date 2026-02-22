"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const team = [
    {
        name: "Alex River",
        role: "AI Engineer",
        bio: "Specializing in Transformer-based architectures for computer vision and edge-device optimization.",
        image: "/team-1.svg"
    },
    {
        name: "Sarah Chen",
        role: "Documentation Lead",
        bio: "Translating complex engineering pipelines into comprehensive technical research reports.",
        image: "/team-2.svg"
    },
    {
        name: "Marcus Thorne",
        role: "Presentation Lead",
        bio: "Focusing on visualization of AI decision-making processes and project strategy.",
        image: "/team-3.svg"
    }
];

export default function TeamPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">The <span className="text-gradient">Core Team</span></h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                        The minds behind Offroad AI. We're a group of researchers and engineers dedicated to solving autonomous navigation.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-white/10 relative grayscale group-hover:grayscale-0 transition-all">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                            <p className="text-accent-cyan font-mono text-xs uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-foreground/50 text-sm leading-relaxed mb-6 px-4">{member.bio}</p>
                            <div className="flex justify-center gap-4">
                                <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-accent-blue/20 hover:text-accent-blue transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-black hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <section className="p-12 md:p-20 glass-card rounded-[4rem] flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Interested in our research?</h2>
                    <p className="text-foreground/60 max-w-xl mb-10">We're open to collaborations and hiring opportunities within the autonomous vehicle and AI space.</p>
                    <a
                        href="mailto:contact@offroad-ai.com"
                        className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all flex items-center gap-3"
                    >
                        <Mail className="w-6 h-6" />
                        Get in Touch
                    </a>
                </section>
            </div>
        </div>
    );
}
