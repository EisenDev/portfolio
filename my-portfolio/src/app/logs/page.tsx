"use client";

import React from "react";
import Link from "next/link";
import { ListTree, LayoutTemplate, Layers, Cpu, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LogsPage() {
    return (
        <main className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] pb-24">
            <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 max-w-4xl">

                <Link href="/" className="group flex items-center gap-3 text-sm font-mono font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-16 max-w-max">
                    <div className="p-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded group-hover:border-[var(--color-text-primary)] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    CD .. / ROOT
                </Link>

                {/* Header System */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-xs font-mono font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-4 flex justify-center items-center gap-2">
                        <ListTree className="w-4 h-4 text-[var(--color-brand-500)]" /> Systems Thinking
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-text-primary)] leading-tight mb-8 tracking-tight">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-emerald-400">Paradigms</span>
                    </h1>
                    <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                        I am Arjay Escabas. I'm a software engineer dedicated to building, refining, and scaling modern digital ecosystems. My approach prioritizes lean architecture, seamless user experiences, and robust backend engineering.
                    </p>
                </div>

                <div className="space-y-12">

                    {/* Log 01 */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-500)]/30 p-8 md:p-10 rounded-3xl transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-[var(--color-bg-primary)] p-4 rounded-2xl border border-[var(--color-border-subtle)] shrink-0 group-hover:scale-110 transition-transform">
                                <Cpu className="w-8 h-8 text-[var(--color-brand-500)]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                                    01. The Future of Engineering
                                </h3>
                                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed font-light">
                                    <p>
                                        The software industry is shifting. The raw mechanics of typing functions are becoming commoditized by AI tooling. The modern developer is no longer just a typist, but an <strong>orchestrator</strong>.
                                    </p>
                                    <p>
                                        I reserve my cognitive overhead for what machines cannot do: translating complex business logic, hardening security architectures, and mapping robust API topologies. I focus on delivering real value at the architectural level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Log 02 */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-500)]/30 p-8 md:p-10 rounded-3xl transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-[var(--color-bg-primary)] p-4 rounded-2xl border border-[var(--color-border-subtle)] shrink-0 group-hover:scale-110 transition-transform">
                                <Layers className="w-8 h-8 text-[var(--color-brand-500)]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                                    02. Performance & Scaling
                                </h3>
                                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed font-light">
                                    <p>
                                        <strong className="text-[var(--color-text-primary)] font-semibold block mb-1">Architecture over Hardware</strong>
                                        Throwing more server RAM at a sluggish application is a temporary band-aid. True scalability comes from deeply analyzing network flow, identifying N+1 query bottlenecks, and leaning heavily into caching logic.
                                    </p>
                                    <p>
                                        By restructuring complex database calls and pushing rendering logic closer to the edge, I transform heavy, monolithic responses into lightning-fast sub-100ms experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Log 03 */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-500)]/30 p-8 md:p-10 rounded-3xl transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-[var(--color-bg-primary)] p-4 rounded-2xl border border-[var(--color-border-subtle)] shrink-0 group-hover:scale-110 transition-transform">
                                <LayoutTemplate className="w-8 h-8 text-[var(--color-brand-500)]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                                    03. Full-Stack Ownership
                                </h3>
                                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed font-light">
                                    <p>
                                        A strict separation of frontend and backend roles often leads to fragmented products. A holistic architect understands how the visual state in Vue or React is directly impacted by the latency of an Eloquent ORM relationship.
                                    </p>
                                    <p>
                                        I build the whole pipe. If there is friction between a Figma wireframe and the automated CI/CD pipeline deploying it, I own the entire lifecycle and engineer the bridge myself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                </div>

            </div>
        </main>
    )
}
