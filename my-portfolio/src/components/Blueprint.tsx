"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Server, Lock, BrainCircuit } from "lucide-react";

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
                    {/* Agentic Development & TS Focus */}
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
                                <span className="text-[var(--color-brand-500)]">✦</span> Agentic Development Methodology
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic border-l-2 border-[var(--color-brand-500)] pl-4">
                                "I use Prompt-Driven Development (AI Agents like GitHub Copilot/Cursor) to bulldoze through boilerplate and trivial UI scaffolding. This accelerates dev cycles by 3x, allowing me to shift 100% of my cognitive load onto complex System Design, Data Heuristics, and Business Scaling."
                            </p>
                        </motion.div>
                    </div>

                    {/* Ecosystem Map with Enhanced Fluid Connections */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-[#02040a] border border-blue-900/30 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[550px] md:min-h-[650px] overflow-hidden group shadow-[0_0_100px_rgba(30,58,138,0.2)]"
                    >
                        {/* Blueprint Grid Background */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
                            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

                        <div className="relative z-10 w-full h-full flex flex-col items-center">
                            <h4 className="text-blue-400 font-mono text-[10px] font-black tracking-[0.5em] text-center mb-12 uppercase">
                                SYSTEM_ORCHESTRATION_CORE
                            </h4>

                            <div className="relative w-full flex flex-col items-center gap-16">
                                {/* Top: Source Entry */}
                                <EcosystemNode 
                                    label="GitHub Actions (Source/CI)" 
                                    icon={<Github className="w-5 h-5 text-white" />}
                                    color="border-white/40 bg-white/10"
                                    textColor="text-white"
                                />

                                {/* Middle Section: Distributed Intelligence */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-lg">
                                    <EcosystemNode 
                                        label="Cloudflare (Edge Context)" 
                                        icon={<Lock className="w-5 h-5 text-orange-400" />}
                                        color="border-orange-500/40 bg-orange-950/20"
                                        textColor="text-orange-400"
                                    />
                                    <EcosystemNode 
                                        label="AWS / DigitalOcean" 
                                        icon={<Server className="w-5 h-5 text-blue-400" />}
                                        color="border-blue-500/40 bg-blue-950/20"
                                        textColor="text-blue-400"
                                    />
                                </div>

                                {/* Bottom: The Brain */}
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 40px rgba(16,185,129,0.4)", "0 0 20px rgba(16,185,129,0.2)"] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="p-1 px-1 rounded-2xl bg-gradient-to-br from-emerald-500/50 to-blue-500/50"
                                >
                                    <EcosystemNode 
                                        label="LLM APIs (Cognitive Core)" 
                                        icon={<BrainCircuit className="w-6 h-6 text-emerald-400" />}
                                        color="border-emerald-500/40 bg-[#02040a] rounded-xl"
                                        textColor="text-emerald-400"
                                        active
                                    />
                                </motion.div>

                                {/* SVG Connections (Refactored for reliability) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible" viewBox="0 0 400 500">
                                    {/* Central Vertical Trunk */}
                                    <motion.line 
                                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                                        x1="200" y1="40" x2="200" y2="440" stroke="rgba(59,130,246,0.1)" strokeWidth="1" strokeDasharray="4 4" 
                                    />
                                    
                                    {/* Data Stream Pulses */}
                                    {[0, 1.5, 3].map((delay) => (
                                        <motion.circle 
                                            key={delay}
                                            animate={{ cy: [40, 440], opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 3, ease: "linear", delay }}
                                            cx="200" cy="40" r="3" fill="#3b82f6"
                                        />
                                    ))}
                                </svg>
                            </div>

                            <div className="mt-16 text-[9px] font-mono text-blue-700/50 uppercase tracking-widest text-center">
                                HEURISTIC_MAPPING_ACTIVE // 99.9% SYNC_UPTIME
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function EcosystemNode({ label, icon, color, textColor, active = false }: any) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className={`w-full max-w-[280px] p-4 rounded-xl border backdrop-blur-md shadow-2xl relative group ${color}`}
        >
            <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 group-hover:border-white/20 transition-colors">
                    {icon}
                </div>
                <div className="flex flex-col">
                    <span className={`text-[11px] font-black font-mono tracking-widest uppercase mb-1 ${textColor}`}>
                        {label}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[8px] opacity-40">
                        <span className={`w-1 h-1 rounded-full ${active ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`} />
                        CONNECTED_PORT_80
                    </div>
                </div>
            </div>
            {/* Corner Accents */}
            <div className={`absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity ${color.split(' ')[0]}`} />
            <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity ${color.split(' ')[0]}`} />
        </motion.div>
    );
}
