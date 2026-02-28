"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Terminal, PenTool } from "lucide-react";

export default function TechStack() {
    const skills = [
        { category: "Frontend", icon: Code, items: ["TypeScript", "Next.js & React", "Vue.js", "TailwindCSS v4", "Framer Motion", "Three.js"] },
        { category: "Backend & Edge", icon: Server, items: ["Node.js & Hono.js", "Laravel (PHP)", "Blade", "Python", "Cloudflare Workers"] },
        { category: "Databases", icon: Database, items: ["Supabase", "PostgreSQL", "MySQL", "Server Database"] },
        { category: "Cloud & AI", icon: Cloud, items: ["AWS CDK (IaC)", "Azure", "Digital Ocean", "OpenAI / Gemini APIs"] },
        { category: "Design Tools", icon: PenTool, items: ["Figma", "Canva", "UI/UX Prototyping", "Interactive Design"] },
        { category: "Practices", icon: Terminal, items: ["Prompt-Driven Development", "Vibe Coding", "System Architecture", "Zero-Day Vuln Scanning"] }
    ];

    return (
        <section id="tech-stack" className="py-24 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-600)]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-mono font-bold tracking-widest text-[var(--color-brand-500)] uppercase mb-2">
                        The Arsenal
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6">
                        Tech Stack & Skills
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        A curated selection of modern technologies and methodologies I use to orchestrate high-performance, scalable ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => {
                        const Icon = skillGroup.icon;
                        return (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] p-8 rounded-2xl shadow-xl hover:border-[var(--color-brand-500)]/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-brand-500)]/10 group-hover:border-[var(--color-brand-500)]/30 transition-all">
                                    <Icon className="w-6 h-6 text-[var(--color-brand-500)]" />
                                </div>
                                <h4 className="text-xl font-mono font-bold text-white mb-4">{skillGroup.category}</h4>
                                <ul className="space-y-3">
                                    {skillGroup.items.map(item => (
                                        <li key={item} className="flex items-center gap-3 text-[var(--color-text-secondary)] font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)] opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_8px_var(--color-brand-500)] transition-all" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
