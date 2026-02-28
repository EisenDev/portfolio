"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Figma, Code, Box, Target, ShieldCheck, Database, Server, Globe, Cpu, ArrowRight } from "lucide-react";
import { GitHubZenUtility, IPGeolocationUtility, HardwareGeolocationUtility, SpaceStationUtility } from "./LiveUtilities";

const PROJECTS = [
    {
        id: "iris-ts",
        title: "IRIS-TS",
        desc: "Intelligent Rapid Interface Synthesizer - Atmosphere Engine.",
        tech: ["Vue 3", "Tailwind CSS", "Gemini Flash", "Vercel"],
        href: "/project/iris-ts"
    },
    {
        id: "omni-hand",
        title: "Omni-Hand AI",
        desc: "Stealthy desktop overlay utilizing Generative AI screen analysis.",
        tech: ["Python", "Gemini API", "OpenCV"],
        href: "/project/omni-hand"
    },
    {
        id: "zeraynce",
        title: "Zeraynce Studio",
        desc: "Freelancer and Studio connection platform with booking systems.",
        tech: ["Laravel", "Supabase", "R2", "Blade"],
        href: "/project/zeraynce"
    }
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

                {/* THE FLAGSHIP: LUMECORE */}
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-8 border-l-4 border-[var(--color-brand-500)] pl-4">The Flagship Project</h4>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[linear-gradient(to_bottom_right,#050505,rgba(16,185,129,0.05))] border border-[var(--color-brand-600)] p-8 lg:p-12 xl:p-16 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.1)] mb-16 relative overflow-hidden group"
                >
                    {/* Decorative Overlay */}
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--color-brand-500)]/10 blur-[80px] rounded-full group-hover:bg-[var(--color-brand-500)]/20 transition-all duration-700" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="w-8 h-8 text-[var(--color-brand-500)]" />
                                <h3 className="text-3xl font-extrabold text-[var(--color-text-primary)]">LUMECORE Security</h3>
                            </div>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                My crown jewel architecture. A real-time synchronization engine bridging GitHub repositories and Penetration Testing tools. It orchestrates Python-based CPU-heavy vulnerability scanners via Node.js Edge backends.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Laravel 11", "Vue 3", "Python", "Supabase", "Gemini 2.5 Flash"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-[var(--color-bg-secondary)] border border-[var(--color-brand-500)]/30 text-[var(--color-brand-400)] rounded-md text-xs font-mono font-bold tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href="/project/lumecore" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-500)] text-white font-bold rounded-xl hover:bg-[var(--color-brand-600)] hover:scale-105 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all">
                                Access Live System Scan <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-6 rounded-2xl shadow-xl flex flex-col gap-4 font-mono text-sm group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)]/50 to-transparent pointer-events-none" />
                            {/* Simulation Window */}
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[var(--color-border-subtle)] relative z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-gray-500 ml-2 tracking-wider text-xs">lumecore-edge-v1</span>
                            </div>
                            <div className="text-blue-400">~ $ lumecore sync --repo org/core</div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative z-10">
                                <span className="text-[var(--color-text-secondary)]">[info] Diffing commit 8f3b9c2 vs main...</span>
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
