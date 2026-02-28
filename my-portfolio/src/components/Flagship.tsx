"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Flagship() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fade out titles/descriptions as user scrolls down
    const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);

    return (
        <section id="flagship" ref={containerRef} className="scrolly-container relative bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)]">
            <div className="scrolly-sticky w-full flex justify-center items-center h-[100vh] py-20">
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

                    {/* Left: Text & Story */}
                    <motion.div style={{ opacity: opacityText }} className="flex flex-col justify-center h-full max-w-lg">
                        <h3 className="text-sm font-bold tracking-widest text-[var(--color-brand-500)] uppercase mb-4">
                            The Flagship: LUMECORE
                        </h3>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-xl font-bold text-red-400 mb-2">The Problem</h4>
                                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed border-l-2 border-red-500/30 pl-4">
                                    "Security scanning is slow and disconnected. Legacy monoliths produce noisy reports that engineers ignore."
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-green-400 mb-2">The Solution</h4>
                                <p className="text-lg text-[var(--color-text-primary)] leading-relaxed border-l-2 border-green-500/50 pl-4 font-medium">
                                    "A real-time synchronization engine between repos and penetration testing tools, acting as an AI-powered Full-Stack Product Owner."
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-blue-400 mb-2">The Architecture</h4>
                                <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                                    Node.js Edge backends orchestrating isolated Python vulnerability scanners, all surfaced through an end-to-end typed Next.js/TypeScript frontend.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Architecture & Vibe */}
                    <div className="flex flex-col items-center justify-center relative w-full h-[60vh] lg:h-auto border border-[var(--color-border-subtle)] rounded-2xl bg-black/50 p-6 overflow-hidden shadow-2xl">

                        {/* Animated Network Diagram */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.05),transparent)] pointer-events-none" />

                        <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--color-text-muted)" />
                                    <stop offset="100%" stopColor="var(--color-brand-500)" />
                                </linearGradient>
                            </defs>

                            {/* Connections */}
                            <path d="M 100 150 C 200 50, 200 50, 300 100" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5" className="opacity-50 animate-[dash_2s_linear_infinite]" />
                            <path d="M 100 150 C 200 250, 200 250, 300 200" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5" className="opacity-50 animate-[dash_3s_linear_infinite]" />

                            {/* Node 1: App */}
                            <g transform="translate(100, 150)">
                                <circle cx="0" cy="0" r="30" fill="#1e1e24" stroke="var(--color-brand-500)" strokeWidth="2" />
                                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="12" className="font-mono">Next.js</text>
                                <text x="0" y="-45" textAnchor="middle" fill="#64748b" fontSize="10">Frontend</text>
                            </g>

                            {/* Node 2: Node Backend */}
                            <g transform="translate(200, 150)">
                                <circle cx="0" cy="0" r="40" fill="#0f0f12" stroke="var(--color-text-primary)" strokeWidth="2" />
                                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="14" className="font-bold">Hono Edge</text>
                                <circle cx="0" cy="0" r="50" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" className="animate-ping" />
                            </g>

                            {/* Node 3: Python Scanners */}
                            <g transform="translate(300, 100)">
                                <circle cx="0" cy="0" r="25" fill="#1e1e24" stroke="var(--color-border-subtle)" strokeWidth="2" />
                                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" className="font-mono">Python CPU</text>
                            </g>

                            {/* Node 4: DB */}
                            <g transform="translate(300, 200)">
                                <circle cx="0" cy="0" r="25" fill="#1e1e24" stroke="var(--color-border-subtle)" strokeWidth="2" />
                                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" className="font-mono">Drizzle ORM</text>
                            </g>
                        </svg>

                        {/* Terminal Overlay (The "Sync" Vibe) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, margin: "-100px" }}
                            className="absolute bottom-6 w-[80%] bg-black/90 backdrop-blur-md rounded border border-[var(--color-brand-600)] p-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                        >
                            <div className="flex gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            </div>
                            <div className="font-mono text-xs mt-2 overflow-hidden h-[60px]">
                                <motion.div animate={{ y: [0, -40] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                                    <div className="text-gray-400">user@edge ~/lumecore $ sync-repo --force</div>
                                    <div className="text-blue-400">[info] Diffing commit 8f3b9c2 vs main...</div>
                                    <div className="text-yellow-400">[warn] Analyzing 42 abstract syntax trees.</div>
                                    <div className="text-green-400">[ok] Synchronization Complete. Vulns patched.</div>
                                    <div className="text-transparent">.</div>
                                    <div className="text-gray-400">user@edge ~/lumecore $ _</div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Global CSS for dash animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes dash {
            to { stroke-dashoffset: -20; }
        }
      `}} />
        </section>
    );
}
