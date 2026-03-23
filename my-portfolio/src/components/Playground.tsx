"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Figma, Code, Box, Target, ShieldCheck, Database, Server, Globe, Cpu, ArrowRight, Github, Lock, BrainCircuit, BarChart3, TerminalSquare } from "lucide-react";
import { GitHubZenUtility, IPGeolocationUtility, HardwareGeolocationUtility, SpaceStationUtility } from "./LiveUtilities";

const PROJECTS = [
    {
        id: "iris-ts",
        title: "IRIS-TS",
        desc: "Intelligent Rapid Interface Synthesizer - Atmosphere Engine.",
        tech: ["Vue 3", "TypeScript", "Tailwind CSS", "Gemini Flash", "Vercel"],
        href: "/project/iris-ts"
    },
    {
        id: "omni-hand",
        title: "Omni-Hand AI",
        desc: "Stealthy desktop overlay utilizing Generative AI screen analysis.",
        tech: ["Python", "Gemini API", "OpenCV"],
        href: "/project/omni-hand"
    }
];

const VERITY_LANG_STACK = [
    { label: "Vue", pct: 76.9, color: "#41b883" },
    { label: "TypeScript", pct: 19.9, color: "#3178c6" },
    { label: "Shell", pct: 1.7, color: "#89e051" },
    { label: "CSS", pct: 0.5, color: "#563d7c" },
    { label: "Dockerfile", pct: 0.4, color: "#384d54" },
    { label: "JavaScript", pct: 0.3, color: "#f1e05a" },
    { label: "HTML", pct: 0.3, color: "#e34c26" },
];

export default function Playground() {
    return (
        <section id="playground" className="min-h-screen py-24 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)] relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-mono font-bold tracking-widest text-[#a855f7] uppercase mb-2">
                        The Playground
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6">
                        R&D and Live Projects
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Prototypes, production deployments, and bleeding-edge system integrations.
                    </p>
                </div>

                {/* THE INFRASTRUCTURE: ZERAYNCE */}
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-8 border-l-4 border-white pl-4 uppercase tracking-widest">The Core Infrastructure</h4>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-black border border-gray-800 p-8 lg:p-12 xl:p-16 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.05)] mb-16 relative overflow-hidden group"
                >
                    {/* Decorative Background Glow */}
                    <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <TerminalSquare className="w-8 h-8 text-white" />
                                <h3 className="text-3xl font-black text-white tracking-widest uppercase">ZERAYNCE</h3>
                            </div>
                            <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                                Industrial-grade Creative Infrastructure Ecosystem designed to bridge the gap between high-level talent and business-critical operations. A node-based OS for the modern creative economy.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Docker", "CI/CD", "Laravel", "Supabase", "Azure", "Secure Node Protocol"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-400 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href="/project/zeraynce" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-sm tracking-widest uppercase hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                                ACCESS INFRASTRUCTURE <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="bg-[#050505] border border-gray-800 p-8 rounded-sm shadow-2xl flex flex-col gap-6 font-mono text-xs text-gray-500 relative overflow-hidden group">
                           <div className="flex items-center justify-between border-b border-gray-900 pb-4">
                               <div className="flex gap-1.5">
                                   <div className="w-2 h-2 rounded-full bg-gray-800" />
                                   <div className="w-2 h-2 rounded-full bg-gray-800" />
                                   <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                               </div>
                               <span className="text-[10px] tracking-widest font-black uppercase">zeraynce_core_v1</span>
                           </div>
                           <div className="space-y-2">
                               <p className="text-white">&gt; initializing secure_node_protocol...</p>
                               <p className="text-gray-600">&gt; creative_marketplace: [online]</p>
                               <p className="text-gray-600">&gt; financial_automation: [active]</p>
                               <p className="text-gray-600">&gt; management_hq: [synced]</p>
                               <p className="text-white font-bold mt-4">&gt; STATUS: INFRASTRUCTURE_STABLE</p>
                           </div>
                        </div>
                    </div>
                </motion.div>

                {/* THE FLAGSHIP: LUMECORE */}
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-8 border-l-4 border-[var(--color-brand-500)] pl-4">The Flagship Project</h4>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#050505] border border-[var(--color-brand-600)] p-8 lg:p-12 xl:p-16 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.1)] mb-16 relative overflow-hidden group"
                >
                    {/* Decorative Overlay */}
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--color-brand-500)]/10 blur-[80px] rounded-full group-hover:bg-[var(--color-brand-500)]/20 transition-all duration-700" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="w-8 h-8 text-[var(--color-brand-500)]" />
                                <h3 className="text-3xl font-extrabold text-white">LUMECORE Security</h3>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                My crown jewel architecture. A real-time synchronization engine bridging GitHub repositories and Penetration Testing tools. It orchestrates Python-based CPU-heavy vulnerability scanners via Node.js Edge backends.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Laravel 11", "TypeScript", "Vue 3", "Python", "Supabase", "Gemini 2.5 Flash"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-[#111] border border-[var(--color-brand-500)]/30 text-[var(--color-brand-400)] rounded-md text-xs font-mono font-bold tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href="/project/lumecore" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-500)] text-white font-bold rounded-xl hover:bg-[var(--color-brand-600)] hover:scale-105 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all">
                                Access Live System Scan <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl shadow-xl flex flex-col gap-4 font-mono text-sm group relative overflow-hidden">
                            {/* Simulation Window */}
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-800 relative z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-gray-500 ml-2 tracking-wider text-xs">lumecore-edge-v1</span>
                            </div>
                            <div className="text-blue-400 relative z-10">~ $ lumecore sync --repo org/core</div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative z-10">
                                <span className="text-gray-400">[info] Diffing commit 8f3b9c2 vs main...</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} className="relative z-10">
                                <span className="text-yellow-500">[warn] Analyzing 42 abstract syntax trees for Zero-Days.</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} className="relative z-10">
                                <span className="text-green-500">[ ok ] Synchronization Complete. Dashboards Updated.</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* VERITY FEATURED CARD */}
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-8 border-l-4 border-amber-500 pl-4">Enterprise SaaS</h4>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 relative"
                >
                    <Link href="/project/verity" className="block group">
                        <div className="bg-gradient-to-br from-[#060810] via-[#080c18] to-[#050709] border border-amber-500/25 rounded-3xl p-8 lg:p-12 hover:border-amber-500/50 hover:shadow-[0_0_60px_rgba(245,158,11,0.12)] transition-all duration-500 relative overflow-hidden">
                            {/* Background Glow */}
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-all duration-700" />
                            <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-amber-900/10 blur-[80px] rounded-full" />

                            {/* Scan line animation */}
                            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                                <motion.div
                                    animate={{ top: ["-2%", "102%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
                                {/* Left: Identity */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                                            <ShieldCheck className="w-7 h-7 text-amber-400" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono font-black tracking-[0.3em] text-amber-500/80 uppercase">Military-Grade B2B SaaS</div>
                                            <h5 className="text-3xl font-extrabold text-white tracking-wide">VERITY</h5>
                                        </div>
                                        <div className="ml-auto flex items-center gap-1.5 px-3 py-1 bg-green-950/50 border border-green-500/30 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-[10px] font-mono font-bold text-green-400 tracking-widest">LIVE</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow">
                                        Sovereign Operational Intelligence for luxury hospitality auditing and forensics. Military-grade RBAC, AI-powered remediation costing via Gemini Intelligence Liaison, and forensic data integrity across 5,000+ global audit records.
                                    </p>

                                    {/* Feature Pillars */}
                                    <div className="grid grid-cols-3 gap-3 mb-8">
                                        {[
                                            { icon: Lock, label: "Sovereign RBAC", color: "text-amber-400" },
                                            { icon: BrainCircuit, label: "AI Liaison", color: "text-blue-400" },
                                            { icon: BarChart3, label: "Risk Matrix", color: "text-rose-400" },
                                        ].map(({ icon: Icon, label, color }) => (
                                            <div key={label} className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/5 rounded-xl">
                                                <Icon className={`w-5 h-5 ${color}`} />
                                                <span className="text-[9px] font-mono text-center text-[var(--color-text-muted)] tracking-wider">{label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-bold text-sm rounded-xl hover:bg-amber-400 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                                            Access System <ExternalLink className="w-4 h-4" />
                                        </span>
                                        <span
                                            onClick={(e) => { e.preventDefault(); window.open("https://github.com/EisenDev/Verity.git", "_blank"); }}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-[var(--color-text-secondary)] font-bold text-sm rounded-xl hover:border-white/30 hover:text-white transition-all"
                                        >
                                            <Github className="w-4 h-4" /> Repository
                                        </span>
                                    </div>
                                </div>

                                {/* Right: Tech Stack Visualizer */}
                                <div className="bg-[#0a0c12] border border-white/5 rounded-2xl p-6 flex flex-col">
                                    {/* Terminal Header */}
                                    <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                        <span className="ml-3 text-[10px] font-mono text-[var(--color-text-muted)] tracking-widest">verity — language matrix</span>
                                    </div>

                                    {/* Stacked Bar */}
                                    <div className="flex rounded-full overflow-hidden h-2.5 mb-6">
                                        {VERITY_LANG_STACK.map(l => (
                                            <div key={l.label} style={{ width: `${l.pct}%`, backgroundColor: l.color }} />
                                        ))}
                                    </div>

                                    {/* Lang Legend */}
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
                                        {VERITY_LANG_STACK.map(l => (
                                            <div key={l.label} className="flex items-center gap-2">
                                                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: l.color }} />
                                                <span className="text-xs font-mono text-[var(--color-text-secondary)]">{l.label}</span>
                                                <span className="text-xs font-mono text-[var(--color-text-muted)] ml-auto">{l.pct}%</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mini stats */}
                                    <div className="mt-auto grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                                        {[
                                            { label: "Audit Records", value: "5,000+" },
                                            { label: "Risk Matrix", value: "$704K" },
                                            { label: "AI Remediation", value: "1,933" },
                                        ].map(s => (
                                            <div key={s.label} className="text-center">
                                                <div className="text-sm font-mono font-bold text-amber-400">{s.value}</div>
                                                <div className="text-[9px] font-mono text-[var(--color-text-muted)] mt-1">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* OTHER CARDS */}
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-8 border-l-4 border-[#a855f7] pl-4">R&D and Freelance Environments</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={project.id}
                        >
                            <Link href={project.href} className="flex flex-col h-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-2xl p-6 shadow-xl hover:-translate-y-2 hover:border-[#a855f7]/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-[var(--color-bg-secondary)] rounded-xl group-hover:bg-[#a855f7]/10 transition-colors">
                                        <Target className="w-6 h-6 text-[#a855f7]" />
                                    </div>
                                    <ExternalLink className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors w-5 h-5" />
                                </div>
                                <h5 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">{project.title}</h5>
                                <p className="text-sm text-[var(--color-text-secondary)] flex-grow mb-6">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-subtle)]">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] rounded text-xs font-mono font-bold">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Live Utilities & API Integrations */}
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-8 border-l-4 border-blue-500 pl-4">Live Utilities & APIs</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <GitHubZenUtility />
                    <IPGeolocationUtility />
                    <HardwareGeolocationUtility />
                    <SpaceStationUtility />

                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/utilities" className="flex items-center gap-3 px-8 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-white hover:border-[#a855f7]/50 hover:bg-[#a855f7]/10 rounded-full font-mono font-bold tracking-widest text-xs transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                        SEE MORE UTILITIES & APIS <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
