"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Blueprint() {
    return (
        <section id="blueprint" className="min-h-screen py-24 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-subtle)]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-mono font-bold tracking-widest text-blue-400 uppercase mb-2">
                        The Blueprint
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6">
                        Cloud & Cognitive Stacks
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        I don't just write isolated functions; I design interconnected ecosystems. Here is how I orchestrate full-stack applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Vibe Coding & TS Focus */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-8 rounded-2xl shadow-xl hover:border-blue-500/50 transition-colors"
                        >
                            <h4 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">TypeScript End-to-End</h4>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                From the Drizzle ORM schemas in the backend, through the tRPC/API layer, all the way to the Next.js frontend state. If a database property changes, the UI throws a compiler error.
                                <strong className="text-blue-400 block mt-2">Zero runtime surprises.</strong>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[var(--color-bg-secondary)] border border-[var(--color-brand-600)] p-8 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-brand-500)]/20 blur-[50px] rounded-full" />
                            <h4 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                                <span className="text-[var(--color-brand-500)]">✦</span> Vibe Coding Methodology
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic border-l-2 border-[var(--color-brand-500)] pl-4">
                                "I use Prompt-Driven Development (AI Agents like GitHub Copilot/Cursor) to bulldoze through boilerplate and trivial UI scaffolding. This accelerates dev cycles by 3x, allowing me to shift 100% of my cognitive load onto complex System Design, Data Heuristics, and Business Scaling."
                            </p>
                        </motion.div>
                    </div>

                    {/* Ecosystem Map with Framer Motion SVG and Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-6 lg:h-[600px] overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent)] pointer-events-none transition-all group-hover:scale-110" />

                        <h4 className="text-blue-300 font-mono text-sm tracking-widest text-center">THE ECOSYSTEM</h4>

                        <div className="w-full h-full relative z-10 flex flex-col justify-between items-center top-6">

                            {/* Animated SVG Connections overlay */}
                            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
                                <svg className="w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="none">
                                    {/* Source to Edge line */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        d="M 200 40 L 200 160"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.2)"
                                        strokeWidth="2"
                                    />
                                    {/* Glowing Pulse on path */}
                                    <motion.circle
                                        animate={{ y: [40, 160], opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                        cx="200" cy="0" r="4" fill="currentColor"
                                        className="text-gray-400 shadow-[0_0_10px_gray]"
                                    />

                                    {/* Edge to Compute (Branching) */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                        d="M 200 220 L 200 240 Q 200 260 120 260 L 120 280"
                                        fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="2"
                                    />
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                        d="M 200 220 L 200 240 Q 200 260 280 260 L 280 280"
                                        fill="none" stroke="rgba(234,179,8,0.4)" strokeWidth="2"
                                    />

                                    {/* Compute to AI */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                                        d="M 120 340 L 120 360 Q 120 380 200 380 L 200 400"
                                        fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="2"
                                    />
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                                        d="M 280 340 L 280 360 Q 280 380 200 380 L 200 400"
                                        fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="2"
                                    />

                                    {/* Pulses */}
                                    <motion.circle animate={{ pathOffset: [0, 1] }} cx="200" cy="0" r="3" fill="#3b82f6" style={{ offsetPath: "path('M 200 220 L 200 240 Q 200 260 120 260 L 120 280')" }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }} />
                                    <motion.circle animate={{ pathOffset: [0, 1] }} cx="200" cy="0" r="3" fill="#eab308" style={{ offsetPath: "path('M 200 220 L 200 240 Q 200 260 280 260 L 280 280')" }} transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.8 }} />
                                </svg>
                            </div>

                            {/* Nodes overlaying the SVG */}
                            <div className="z-10 w-full flex justify-center mt-0 absolute top-0">
                                <div className="text-center w-64 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-lg py-3 shadow-lg border-t-[var(--color-text-primary)] border-t-2">
                                    <span className="font-bold text-[var(--color-text-primary)] text-sm">GitHub Actions (Source/CI)</span>
                                </div>
                            </div>

                            <div className="z-10 w-full flex justify-center absolute top-[160px]">
                                <div className="text-center w-64 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-lg py-3 shadow-lg border-t-orange-500 border-t-2">
                                    <span className="font-bold text-orange-500 text-sm">Cloudflare (Edge/Security)</span>
                                </div>
                            </div>

                            <div className="z-10 w-full flex justify-around px-4 absolute top-[280px]">
                                <div className="text-center w-40 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-lg py-3 shadow-lg border-t-blue-500 border-t-2">
                                    <span className="font-bold text-blue-500 text-sm">DigitalOcean VMs</span>
                                </div>
                                <div className="text-center w-40 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-lg py-3 shadow-lg border-t-yellow-500 border-t-2">
                                    <span className="font-bold text-yellow-500 text-sm">AWS DB/Queue</span>
                                </div>
                            </div>

                            <div className="z-10 w-full flex justify-center absolute top-[400px]">
                                <div className="text-center w-64 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-lg py-3 shadow-lg border-t-[var(--color-brand-500)] border-t-2 relative">
                                    <span className="absolute -left-3 -top-3 flex h-6 w-6">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-400)] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-6 w-6 bg-[var(--color-brand-500)] border-2 border-[var(--color-bg-primary)]"></span>
                                    </span>
                                    <span className="font-bold text-[var(--color-brand-500)] text-sm">LLM APIs (Cognitive Core)</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
