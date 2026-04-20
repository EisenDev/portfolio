"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Eye, TerminalSquare, Activity, Focus, Terminal, Server, Network, Code, ScanFace, Target, Zap, Wind, Laptop, Cloud, Github, Lock, BrainCircuit, BarChart3, Users, BadgeCheck, DollarSign, Globe, Database } from "lucide-react";
import { motion } from "framer-motion";

const PROJECT_DATA: Record<string, any> = {
    "lumecore": {
        id: "lumecore",
        title: "LUME CORE",
        liveUrl: "https://lumecore.tech",
        icon: ShieldCheck,
        themeColor: "var(--color-brand-500)",
        themeGlow: "rgba(16,185,129,0.3)",
        tags: ["Forensic Intelligence", "Sovereign Vault", "AI Mitigation", "Ledger Gateway"],
        overview: "THE STANDARD OF DIGITAL TRUTH. The autonomous forensic engine that verifies codebase integrity, security posture, and ownership provenance in real-time.",
        challenge: "Acquiring or transferring digital assets blindly carries immense risk. Codebases hide zero-day vulnerabilities, IP ownership is fragmented, and manual technical audits take weeks.",
        solution: "Universal Forensic Intelligence. LUME CORE generates complex forensic vectors via Deep-State Code Analysis (SAST/DAST) and Immutable Ledger Settlement to verify the soul of your software before deployment or purchase (Zero-Liability Handover).",
        logs: [
            "~ $ lumecore forensic --audit-level sovereign",
            "[info] Connecting to Sovereign Vault (Isolation: Level 4)...",
            "[warn] Initiating Deep-State Code Analysis...",
            "[info] Mapping Recursive Dependencies for Zero-Days...",
            "[ ok ] Sovereign Audit Complete. Asset Transferred."
        ]
    },
    "omni-hand": {
        id: "omni-hand",
        title: "Omni-Hand AI",
        liveUrl: "https://omni-hand.example.com",
        icon: Eye,
        themeColor: "#a855f7",
        themeGlow: "rgba(168,85,247,0.3)",
        tags: ["Python", "OpenCV", "Gemini 2.5 Flash", "Windows API"],
        overview: "A stealthy, high-discretion desktop overlay process that utilizes Generative AI to perform real-time screen content analysis.",
        challenge: "Traditional screen capture plugins are heavily monitored and easily identifiable by modern Ring-0 anti-cheat systems and proctoring tools.",
        solution: "A raw Python injected overlay (camouflaged as WinStoreSvc) that hooks directly into the Windows GUI thread, capturing localized buffers and running them through the Gemini API with rotating multi-key topologies.",
        logs: [
            "~ $ omni-hand-cli --stealth-mode",
            "[info] Bypassing User-Mode hooks...",
            "[info] WinStoreSvc signature masked.",
            "[warn] Extracting visual buffer frames...",
            "[ ok ] Gemini 2.5 Object Detection Initialized."
        ]
    },
    "zeraynce": {
        id: "zeraynce",
        title: "ZERAYNCE",
        liveUrl: "https://zeraynce.com",
        icon: TerminalSquare,
        themeColor: "#ffffff",
        themeGlow: "rgba(255,255,255,0.1)",
        tags: ["Infrastructure", "Creative Ecosystem", "Node Protocol", "B2B Ops"],
        overview: "INDUSTRIAL-GRADE CREATIVE INFRASTRUCTURE. Zeraynce is an ecosystem designed to bridge the gap between high-level talent (Creatives) and business-critical operations through a secure node-based architecture.",
        challenge: "The creative economy is fragmented. Talent discovery is superficial, financial transactions are high-risk, and project management tools are detached from the actual creative output.",
        solution: "A unified Creative Infrastructure Ecosystem. Zeraynce combines a discovery engine, a built-in financial layer (Secure Node Protocol), and an elite management dashboard into a single, high-performance node for the modern economy.",
        logs: [
            "~ $ zeraynce node --initialize --id creative-01",
            "[info] Establishing Secure Node Protocol (Level 5)...",
            "[info] Synchronizing R&D Modules: Marketplace, Financial, Dashboard...",
            "[warn] Routing Financial Layer through PayCreativeModal...",
            "[ ok ] Infrastructure Active. Node Link Established."
        ]
    },
    "iris-ts": {
        id: "iris-ts",
        title: "IRIS-TS",
        liveUrl: "https://iris-ts.vercel.app",
        icon: Zap,
        themeColor: "#06b6d4",
        themeGlow: "rgba(6,182,212,0.3)",
        tags: ["Vue 3", "TypeScript", "Tailwind CSS", "Gemini Flash", "Vercel SDK"],
        overview: "IRIS-TS (Intelligent Rapid Interface Synthesizer - TypeScript) is an advanced, AI-driven architectural synthesizer built to dynamically generate, refine, and deploy completely functioning, ultra-premium front-end web environments.",
        challenge: "Generic prototyping phases are slow, expensive, and often decoupled from the final production codebase, leading to 'design debt' and slow iteration cycles.",
        solution: "Transforming visual input into pixel-perfect Vue 3 codebases. IRIS-TS features Live Lens intake, real-time DOM editing, and one-click Vercel deployments, effectively merging design and development into a single fluid motion.",
        logs: [
            "~ $ iris-ts synthesize --source visual-v4",
            "[info] Extracting design heuristics and color hexes...",
            "[info] Initializing Atmosphere Engine (Gemini Flash)...",
            "[warn] Repairing malformed AI payloads (jsonrepair)...",
            "[ ok ] UI Synthesized. Deploying to Vercel Edge..."
        ]
    },
    "verity": {
        id: "verity",
        title: "VERITY",
        liveUrl: "https://verityphi.app/dashboard",
        githubUrl: "https://github.com/EisenDev/Verity.git",
        icon: ShieldCheck,
        themeColor: "#f59e0b",
        themeGlow: "rgba(245,158,11,0.3)",
        tags: ["Sovereign RBAC", "AI Liaison", "Forensic Intelligence", "B2B SaaS"],
        overview: "SOVEREIGN OPERATIONAL INTELLIGENCE. A military-grade B2B SaaS platform for luxury hospitality auditing and forensics, delivering state-of-the-art operational risk management and AI-automated remediation costing.",
        challenge: "Luxury hospitality operations generate thousands of audit findings that require real-time financial risk assessment, strict data access governance, and intelligent remediation cost estimation — all currently done manually.",
        solution: "VERITY enforces a deep Role-Based Access Control matrix with automatic field-level redaction for Department Leads, while the Gemini-powered Intelligence Liaison (verity.txt-grounded) auto-generates itemized remediation cost lists from raw audit findings.",
        logs: [
            "~ $ verity audit --access sovereign --dept all",
            "[info] Connecting to RBAC Matrix (Admin Protocol)...",
            "[info] Loading 5,000+ Global Audit Records...",
            "[warn] Financial Risk Exposure Detected: $704K",
            "[info] Routing findings to Intelligence Liaison (Gemini)...",
            "[ ok ] Remediation Cost Matrix Generated. 1,933 Pending."
        ]
    },
    "sqauto": {
        id: "sqauto",
        title: "SQAUTO",
        liveUrl: "http://sqauto.zeraynce.com/",
        icon: Database,
        themeColor: "#3b82f6",
        themeGlow: "rgba(59,130,246,0.3)",
        tags: ["SQL Migration", "AI Profiling", "Data Normalization", "Staging Ops"],
        overview: "INDUSTRIAL-GRADE SQL MIGRATION. SQAUTO is a specialized platform designed to handle massive SQL dumps, providing real-time analysis, automated cleaning, and safe migration into modern architectures.",
        challenge: "Legacy databases often contain fragmented relations, inconsistent formatting, and are too large (5GB+) for standard manual auditing tools, leading to high failure rates during migration.",
        solution: "A service-oriented migration pipeline utilizing Python (Polars) for heavy lifting and Gemini AI for intelligent schema profiling. It ensures a read-only source of truth while performing all transformations in an isolated, auditable staging environment.",
        logs: [
            "~ $ sqauto restore --file master_v4_2026.sql",
            "[info] Restoring SQL dump to staging (5.4GB)...",
            "[info] Initializing Schema Profiler (Gemini 2.5)...",
            "[warn] 42 orphaned foreign key relations detected.",
            "[info] Running deterministic cleaning on 'users' table...",
            "[ ok ] Migration Pipeline Ready. Exporting to Clean SQL."
        ]
    }
};

const LUMECORE_TECH_STACK = [
    { name: "Laravel", category: "FRAMEWORK", version: "12.0 / 11.x", color: "#f87171" },
    { name: "Vue.js", category: "FRONTEND", version: "3.4 / 3.x", color: "#4ade80" },
    { name: "Tailwind CSS", category: "CSS", version: "4.0 / 3.4", color: "#38bdf8" },
    { name: "Filament", category: "ADMIN PANEL", version: "3.x", color: "#fbbf24" },
    { name: "Inertia.js", category: "BRIDGE", version: "2.0 / 1.x", color: "#c084fc" },
    { name: "Gemini AI API", category: "AI/LLM", version: "2.0 Flash", color: "#60a5fa" },
    { name: "PostgreSQL", category: "DATABASE", version: "15 / 16", color: "#9ca3af" },
    { name: "pgvector", category: "VECTOR EXTENSION", version: "Latest", color: "#d1d5db" },
    { name: "Cloudflare R2", category: "STORAGE", version: "S3-Compatible", color: "#fb923c" },
    { name: "Spatie Browsershot", category: "HEADLESS BROWSER", version: "Latest", color: "#c084fc" },
    { name: "Laravel Reverb", category: "WEBSOCKETS", version: "1.x", color: "#f87171" },
    { name: "Python", category: "FORENSIC ENGINE", version: "3.10+", color: "#facc15" },
    { name: "Smalot PDF Parser", category: "LIBRARY", version: "Latest", color: "#a78bfa" },
    { name: "Barryvdh DomPDF", category: "LIBRARY", version: "Latest", color: "#a78bfa" },
    { name: "Guzzle", category: "HTTP CLIENT", version: "7.x", color: "#f87171" },
    { name: "Ziggy", category: "ROUTING", version: "Latest", color: "#d1d5db" },
    { name: "Chart.js", category: "VISUALIZATION", version: "4.x", color: "#f472b6" },
    { name: "Lucide Vue Next", category: "ICONS", version: "Latest", color: "#f87171" },
];

export default function ProjectDetail() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const project = id ? PROJECT_DATA[id] : null;

    if (!project) {
        return (
            <div className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4 font-mono tracking-widest uppercase">404: ARCHIVE NOT FOUND</h1>
                <p className="text-[var(--color-text-secondary)] mb-8">The requested project ID does not map to a recognized system index.</p>
                <Link href="/" className="px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-[4px] font-bold font-mono tracking-widest transition-colors">
                    CD .. / ROOT
                </Link>
            </div>
        );
    }

    if (project.id === "lumecore") {
        return <LumecoreFlagship project={project} />;
    }

    if (project.id === "omni-hand") {
        return <OmniHandOverlay project={project} />;
    }



    if (project.id === "iris-ts") {
        return <AtmosphereEngine project={project} />;
    }

    if (project.id === "zeraynce") {
        return <ZeraynceStudioOverlay project={project} />;
    }

    if (project.id === "verity") {
        return <VerityCommandCenter project={project} />;
    }

    return <StandardProject project={project} />;
}

// --------------------------------------------------------------------------------------
// LUMECORE FLAGSHIP LAYOUT - CYBER-INDUSTRIAL UI MATCHING IMAGE
// --------------------------------------------------------------------------------------
function LumecoreFlagship({ project }: { project: any }) {
    return (
        <main className="min-h-screen bg-[#070b14] pt-24 pb-32 overflow-hidden relative">

            {/* Background Grid & Subtle Details */}
            <div className="fixed inset-0 bg-[#070b14]" />

            {/* Simulated Cyber Lines Background (Top) */}
            <div className="absolute top-10 left-0 right-0 h-40 opacity-30 pointer-events-none overflow-hidden flex justify-center">
                <svg width="1200" height="150" viewBox="0 0 1200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20 H300 L350 50 H850 L900 20 H1200" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M0 40 H280 L330 70 H870 L920 40 H1200" stroke="#10b981" strokeWidth="1" />
                    <path d="M0 60 H260 L310 90 H890 L940 60 H1200" stroke="#10b981" strokeWidth="1" strokeDasharray="2 6" />
                    <path d="M0 80 H280 L350 110 H850 L920 80 H1200" stroke="#3b82f6" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

                {/* Back Button */}
                <div className="flex justify-center mb-8 relative z-20">
                    <Link href="/#playground" className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#64748b] hover:text-emerald-400 transition-colors uppercase">
                        <ArrowLeft className="w-4 h-4" /> Return to Command
                    </Link>
                </div>

                {/* Header Section */}
                <header className="mb-16 text-center flex flex-col items-center relative">

                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600 tracking-widest uppercase mb-2">
                        LUMECORE
                    </h1>

                    <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-2 font-bold">
                        V6.6 LIVE <span className="opacity-50">|</span> SOVEREIGN EDITION
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase mb-4">
                        THE STANDARD OF DIGITAL TRUTH.
                    </h2>

                    <p className="text-sm text-[#94a3b8] font-light max-w-2xl leading-relaxed mb-8">
                        LUMECORE is a magnum opus interpreting the standard of digital security, professional integrations, real-time analytics, and data provenance.
                    </p>

                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-[#070b14] rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all">
                        GET ACCESS <ExternalLink className="w-4 h-4 ml-1" />
                    </a>

                    {/* Badge Container */}
                    <div className="flex items-center justify-center gap-4 mt-8 relative z-20 w-full max-w-lg mx-auto">

                        <div className="px-6 py-3 bg-[#0c1f2d] border border-emerald-500/50 rounded-lg text-emerald-400 text-xs font-bold font-mono tracking-widest text-center w-64" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}>
                            ENTERPRISE FORENSIC<br />SUITE SAAS
                        </div>
                        <div className="px-8 py-3 bg-[#3a2211] border border-orange-500/50 rounded-lg text-orange-400 text-xs font-bold font-mono tracking-widest text-center" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}>
                            ACTION<br />REQUIRED
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Layout Area */}
                <div className="relative mt-20 flex flex-col xl:flex-row items-center justify-between gap-8 max-w-[1100px] mx-auto">

                    {/* Connecting Circuit Lines (Desktop only visualization) */}
                    <div className="absolute top-1/2 left-[300px] right-[340px] h-[1px] hidden xl:flex items-center justify-between pointer-events-none z-0">
                        <div className="w-[80px] h-[1px] bg-emerald-500/50 relative">
                            <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="w-[80px] h-[1px] bg-emerald-500/50 relative">
                            <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                    </div>

                    {/* LEFT COLUMN: Sensors / Signals */}
                    <div className="w-full xl:w-[280px] flex gap-4 relative z-10">

                        {/* Vertical Sliders / Indicators (Visual Flair) */}
                        <div className="hidden md:flex flex-col items-center justify-center gap-4 w-8 shrink-0">
                            <div className="w-2.5 h-32 bg-[#1e293b] rounded-full p-[1px] border border-[#334155] relative shadow-inner flex flex-col justify-end">
                                <div className="w-full h-[70%] bg-emerald-400 rounded-full" />
                            </div>
                            <div className="w-2.5 h-24 bg-[#1e293b] rounded-full p-[1px] border border-[#334155] relative shadow-inner flex flex-col justify-end">
                                <div className="w-full h-[40%] bg-emerald-400 rounded-full" />
                            </div>
                            <div className="text-emerald-500 opacity-50 mt-2">
                                <Activity className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Panels */}
                        <div className="space-y-6 flex-grow">
                            {/* Languages Panel */}
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#0f172a]/80 backdrop-blur-md border border-emerald-900/50 p-5 rounded-xl relative overflow-hidden">
                                <h3 className="text-[10px] text-white font-mono font-bold tracking-widest mb-4">LANGUAGES</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between text-xs font-mono mb-2 text-white">
                                            <span className="flex items-center gap-2"><div className="w-5 h-5 rounded-md bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-[8px] text-blue-300">PHP</div> PHP</span>
                                            <span>55%</span>
                                        </div>
                                        <div className="h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-600 w-[55%]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs font-mono mb-2 text-white">
                                            <span className="flex items-center gap-2"><div className="w-5 h-5 rounded-md bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-[8px] text-blue-300">TS</div> TypeScript</span>
                                            <span>45%</span>
                                        </div>
                                        <div className="h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-400 w-[45%]" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Network Signals Panel */}
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-[#0f172a]/80 backdrop-blur-md border border-emerald-900/50 p-5 rounded-xl">
                                <h3 className="text-[10px] text-white font-mono font-bold tracking-widest mb-4">NETWORK SIGNALS</h3>
                                <div className="space-y-4 font-mono text-xs">
                                    <div className="flex justify-between items-center border-b border-[#1e293b] pb-2">
                                        <div className="flex items-center gap-2 text-[#64748b]"><ShieldCheck className="w-4 h-4 text-emerald-500" /> HTTPS / TLS 1.3</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-[#1e293b] pb-2">
                                        <div className="flex items-center gap-2 text-[#64748b]"><Network className="w-4 h-4 text-emerald-500" /> DNS Authority:</div>
                                        <span className="text-white">Unknown</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 text-[#64748b]"><Eye className="w-4 h-4 text-emerald-500" /> Server Signature:</div>
                                        <span className="text-white">Hidden</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* CENTER COLUMN: The Digital Core (Visual Sphere) */}
                    <div className="w-[350px] h-[350px] relative flex items-center justify-center shrink-0 my-8 xl:my-0 z-10">
                        {/* Outer Glowing Rings */}
                        <div className="absolute inset-0 rounded-full border border-emerald-500/30" />
                        <div className="absolute inset-2 rounded-full border border-emerald-800/80" />
                        <div className="absolute inset-8 rounded-full border-[2px] border-emerald-900/40 border-dashed animate-[spin_60s_linear_infinite]" />

                        {/* Circular Text */}
                        <div className="absolute inset-[-10px] w-[370px] h-[370px] pointer-events-none animate-[spin_30s_linear_infinite]">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-100 fill-current text-[3.5px] tracking-widest font-mono font-bold">
                                <path id="curve" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="transparent" />
                                <text><textPath href="#curve" startOffset="0%">DIGITAL FOOTPRINT ANALYSIS • DIGITAL FOOTPRINT ANALYSIS • DIGITAL FOOTPRINT ANALYSIS • </textPath></text>
                            </svg>
                        </div>

                        {/* Central Galaxy / Hexagon Core */}
                        <div className="absolute inset-12 rounded-full flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Central main hex */}
                                <div className="absolute z-20 w-16 h-16 bg-blue-900 border-2 border-blue-400 flex items-center justify-center text-white font-bold text-xl shadow-inner" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                                    TS
                                </div>

                                {/* Satellite hexes */}
                                <div className="absolute z-10 top-6 left-16 w-10 h-10 bg-purple-900 border border-purple-400 flex items-center justify-center text-white text-xs" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}><Code className="w-4 h-4" /></div>

                                <div className="absolute z-10 top-10 right-14 w-12 h-12 bg-emerald-900 border border-emerald-400 flex items-center justify-center text-white text-xs" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}><Activity className="w-5 h-5" /></div>

                                <div className="absolute z-10 bottom-14 left-10 w-10 h-10 bg-indigo-900 border border-indigo-400 flex items-center justify-center text-white text-xs" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>JS</div>

                                <div className="absolute z-10 bottom-6 right-16 w-10 h-10 bg-orange-900 border border-orange-400 flex items-center justify-center text-white" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>PHP</div>

                                <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-900 border border-green-400 flex items-center justify-center text-white" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}><Terminal className="w-3 h-3" /></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Repository Analyst */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="w-full xl:w-[320px] relative z-10">
                        <div className="bg-[#0f172a]/80 backdrop-blur-md border border-emerald-900/50 p-6 rounded-xl relative overflow-hidden">

                            <h3 className="text-[10px] text-white font-mono font-bold tracking-widest mb-4 uppercase">GITHUB REPOSITORY ANALYST</h3>

                            {/* Score */}
                            <div className="text-center mb-6 pt-2">
                                <div className="text-6xl font-mono text-emerald-400 font-bold mb-2">
                                    88<span className="text-3xl text-emerald-600">/100</span>
                                </div>
                                <div className="text-[10px] text-[#64748b] font-mono">
                                    repo link: <a href="https://github.com/EisenDev" className="text-emerald-500 hover:text-emerald-300 transition-colors border-b border-emerald-500/30">https://github.com/es/repo</a>
                                </div>
                            </div>

                            {/* App Grid */}
                            <div className="bg-[#0b111a] border border-[#1e293b] rounded-xl p-4 mt-8 relative">

                                {/* Connector Lines behind icons */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                                    <path d="M 40 40 L 80 40 M 120 40 L 160 40 M 200 40 L 240 40" stroke="#1e293b" strokeWidth="2" />
                                    <path d="M 40 100 L 80 100 M 120 100 L 160 100 M 200 100 L 240 100" stroke="#1e293b" strokeWidth="2" />
                                    <path d="M 40 40 L 40 100 M 140 40 L 140 100 M 240 40 L 240 100" stroke="#1e293b" strokeWidth="2" />
                                </svg>

                                <div className="grid grid-cols-4 gap-y-6 gap-x-2 relative z-10">
                                    {[
                                        { name: 'PHP', icon: Code, color: 'text-[#818cf8]' },
                                        { name: 'TypeScript', icon: Terminal, color: 'text-blue-400' },
                                        { name: 'Tech Stack', icon: Server, color: 'text-green-500' },
                                        { name: 'Oncallor', icon: Activity, color: 'text-orange-500' },

                                        { name: 'Tech Stack', icon: Network, color: 'text-emerald-400' },
                                        { name: 'JavaScrip Back', icon: Code, color: 'text-yellow-400' },
                                        { name: 'Python', icon: Focus, color: 'text-blue-300' },
                                        { name: 'Sosoker', icon: ShieldCheck, color: 'text-[#94a3b8]' },

                                        { name: 'GitHub', icon: TerminalSquare, color: 'text-orange-600' },
                                        { name: 'Repo', icon: Code, color: 'text-white' },
                                        { name: 'Comments', icon: Activity, color: 'text-red-500' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center gap-1.5 group">
                                            <div className={`w-8 h-8 rounded-lg bg-[#111827] border border-[#334155] flex items-center justify-center group-hover:border-emerald-500 group-hover:scale-110 transition-all ${item.color}`}>
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[8px] text-[#64748b] font-mono text-center leading-tight truncate w-full">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* LUMECORE SYSTEM CAPABILITIES & ROADMAP (Based on lumecore.tech) */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
                >
                    {/* Left: Core Capabilities */}
                    <div className="bg-[#0f172a]/80 backdrop-blur-md border border-emerald-900/50 rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                        <h3 className="text-xl font-black text-white tracking-widest uppercase mb-6 flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                            Core Architecture
                        </h3>

                        <div className="space-y-6">
                            <div className="border-l-2 border-emerald-500 pl-4 py-1">
                                <h4 className="text-emerald-300 font-mono text-[10px] tracking-widest font-bold mb-2">UNIVERSAL FORENSIC INTELLIGENCE</h4>
                                <p className="text-[#cbd5e1] text-sm font-light leading-relaxed">
                                    High-speed, automated codebase verification engine. Real-time analysis of repositories generating up to 98%+ integrity scores, validating that the live production environment matches the exact source code—leaving no ghosts in the machine.
                                </p>
                            </div>
                            <div className="border-l-2 border-purple-500 pl-4 py-1">
                                <h4 className="text-purple-300 font-mono text-[10px] tracking-widest font-bold mb-2">SOVEREIGN VAULT & REPO SYNC</h4>
                                <p className="text-[#cbd5e1] text-sm font-light leading-relaxed">
                                    A pristine technical enclosure for asset isolation, verifying ownership provenance. Perfect alignment is guaranteed between live web presence and technical repositories.
                                </p>
                            </div>
                            <div className="border-l-2 border-orange-500 pl-4 py-1">
                                <h4 className="text-orange-300 font-mono text-[10px] tracking-widest font-bold mb-2">ASSET LEDGER & CREDITS</h4>
                                <p className="text-[#cbd5e1] text-sm font-light leading-relaxed">
                                    Powered by LUME Credits for settling global forensic operations. Built-in credit system facilitating direct monetization of your digital intellectual property.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Roadmap & Pricing Grid */}
                    <div className="flex flex-col gap-8">
                        {/* The Vision Roadmap */}
                        <div className="bg-[#0f172a]/80 backdrop-blur-md border border-[#1e293b] rounded-2xl p-8 relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                            <h3 className="text-xl font-black text-white tracking-widest uppercase mb-6 flex items-center gap-3">
                                <Network className="w-5 h-5 text-emerald-400" />
                                Strategic Vision
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#0b1118] p-5 border border-[#1e293b] rounded-xl flex flex-col gap-2 relative group hover:border-emerald-500/30 transition-colors">
                                    <div className="text-[10px] text-emerald-500 font-mono font-bold tracking-widest">TARGET: Q3 2026</div>
                                    <div className="text-white text-sm font-bold tracking-wide">Autonomous Mitigation</div>
                                    <div className="text-xs text-[#64748b] font-light mt-1">Transitioning from simple detection to AI-driven automated remediation of systemic threats.</div>
                                </div>
                                <div className="bg-[#0b1118] p-5 border border-[#1e293b] rounded-xl flex flex-col gap-2 relative group hover:border-emerald-500/30 transition-colors">
                                    <div className="text-[10px] text-emerald-500 font-mono font-bold tracking-widest">TARGET: Q1 2027</div>
                                    <div className="text-white text-sm font-bold tracking-wide">Ledger Gateway</div>
                                    <div className="text-xs text-[#64748b] font-light mt-1">Integration with institutional-grade settlement layers to facilitate asset liquidity.</div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                            <div className="bg-[#0f172a]/80 backdrop-blur-md border border-[#1e293b] p-6 text-center rounded-xl flex flex-col items-center justify-center hover:bg-[#1e293b] transition-colors shadow-lg">
                                <div className="text-[10px] text-[#94a3b8] font-mono tracking-widest uppercase mb-2">Single Load</div>
                                <div className="text-2xl text-white font-bold font-mono">1 CR</div>
                                <div className="text-[9px] text-emerald-400 mt-2 uppercase tracking-widest bg-emerald-900/40 px-2 py-1 rounded">Pay-as-you-go</div>
                            </div>
                            <div className="bg-[#0f172a]/80 backdrop-blur-md border border-emerald-500/50 p-6 text-center rounded-xl flex flex-col items-center justify-center relative">
                                <div className="absolute -top-2.5 px-3 py-0.5 bg-gradient-to-r from-emerald-600 to-emerald-400 text-[#070b14] text-[9px] font-bold font-mono tracking-widest rounded-sm">DEVELOPER</div>
                                <div className="text-[10px] text-emerald-300 font-mono tracking-widest uppercase mb-2">Monthly Tier</div>
                                <div className="text-3xl text-white font-bold font-mono">$19</div>
                                <div className="text-[9px] text-[#94a3b8] mt-2 uppercase tracking-widest">USD / Month</div>
                            </div>
                            <div className="bg-[#0f172a]/80 backdrop-blur-md border border-[#1e293b] p-6 text-center rounded-xl flex flex-col items-center justify-center hover:bg-[#1e293b] transition-colors shadow-lg">
                                <div className="text-[10px] text-[#eab308] font-mono tracking-widest uppercase mb-2">Sovereign</div>
                                <div className="text-3xl text-white font-bold font-mono">$59</div>
                                <div className="text-[9px] text-[#94a3b8] mt-2 uppercase tracking-widest">USD / Month</div>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}

// --------------------------------------------------------------------------------------
// STANDARD PROJECT LAYOUT
// --------------------------------------------------------------------------------------
function StandardProject({ project }: { project: any }) {
    const [renderedLogs, setRenderedLogs] = useState<string[]>([]);

    useEffect(() => {
        if (!project) return;
        setRenderedLogs([]);
        project.logs.forEach((log: string, index: number) => {
            setTimeout(() => {
                setRenderedLogs(prev => [...prev, log]);
            }, (index + 1) * 800);
        });
    }, [project]);

    const Icon = project.icon;

    return (
        <main className="min-h-screen bg-[var(--color-bg-primary)] pt-24 pb-32 overflow-hidden relative">
            <div
                className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none transition-all duration-1000"
                style={{ backgroundColor: project.themeGlow, opacity: 0.5 }}
            />
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">

                <Link href="/#playground" className="group flex items-center gap-3 text-sm font-mono font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-white transition-colors mb-16 max-w-max">
                    <div className="p-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded group-hover:border-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    CD .. / PLAYGROUND
                </Link>

                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col md:flex-row gap-8 items-start md:items-center"
                    >
                        <div
                            className="w-24 h-24 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0 relative group"
                            style={{ boxShadow: `0 0 30px ${project.themeGlow}` }}
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
                            <Icon className="w-12 h-12" style={{ color: project.themeColor }} />
                        </div>

                        <div>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-black border text-xs font-mono font-bold tracking-wider rounded-md"
                                        style={{ borderColor: project.themeColor, color: project.themeColor }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-4 mt-10"
                    >
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-extrabold text-sm hover:scale-105 transition-transform"
                            style={{ boxShadow: `0 0 20px ${project.themeGlow}` }}
                        >
                            <ExternalLink className="w-5 h-5" /> ACCESS LIVE SYSTEM
                        </a>
                    </motion.div>
                </header>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-16">
                    <section className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute -left-10 -top-10 w-32 h-32 blur-[60px] opacity-20 pointer-events-none" style={{ backgroundColor: project.themeColor }} />
                        <h2 className="text-xl font-mono tracking-widest font-bold text-white mb-6 flex items-center gap-3 uppercase">
                            <Focus className="w-5 h-5" style={{ color: project.themeColor }} /> Executive Overview
                        </h2>
                        <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed font-light">
                            {project.overview}
                        </p>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-black border border-red-900/40 p-10 rounded-2xl shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent)]" />
                            <h3 className="text-lg font-mono tracking-widest font-bold text-red-500 mb-6 flex items-center gap-2 uppercase">
                                <span className="w-2 h-2 rounded-full bg-red-500" /> The Bottleneck
                            </h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg font-light">
                                {project.challenge}
                            </p>
                        </div>
                        <div className="bg-black border p-10 rounded-2xl shadow-2xl relative overflow-hidden" style={{ borderColor: `${project.themeColor}40` }}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--theme-glow),transparent)]" style={{ "--theme-glow": project.themeGlow } as any} />
                            <h3 className="text-lg font-mono tracking-widest font-bold mb-6 flex items-center gap-2 uppercase" style={{ color: project.themeColor }}>
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.themeColor }} /> The Architecture
                            </h3>
                            <p className="text-white leading-relaxed text-lg font-light">
                                {project.solution}
                            </p>
                        </div>
                    </section>

                    <section className="mt-16 bg-[#0a0a0b] border border-[#222] rounded-2xl flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
                        <div className="bg-[#111] px-6 py-4 border-b border-[#222] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-green-500" />
                                <span className="font-mono text-xs font-bold tracking-widest text-[#666] uppercase">Active Edge Container</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                        <div className="p-8 h-[350px] font-mono text-sm space-y-3 overflow-y-auto w-full relative">
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-px blur-[1px] z-0"
                                style={{ backgroundColor: project.themeColor, opacity: 0.3 }}
                            />
                            {renderedLogs.map((log, i) => {
                                let colorClass = "text-[#888]";
                                if (log.includes("[info]")) colorClass = "text-blue-400";
                                if (log.includes("[warn]")) colorClass = "text-yellow-400";
                                if (log.includes("[ ok ]")) colorClass = "text-green-400";
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`${colorClass} relative z-10 flex gap-4`}>
                                        <span className="text-[#333] select-none shrink-0">{i + 1 > 9 ? i + 1 : `0${i + 1}`}</span>
                                        <span className="break-all">{log}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

// --------------------------------------------------------------------------------------
// OMNI-HAND LAYOUT - STEALTH / GHOST UI
// --------------------------------------------------------------------------------------
function OmniHandOverlay({ project }: { project: any }) {
    return (
        <main className="min-h-screen bg-[var(--color-bg-primary)] pt-24 pb-32 overflow-hidden relative selection:bg-[#a855f7]/30 selection:text-white">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <Link href="/#playground" className="group flex items-center gap-3 text-sm font-mono font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-white transition-colors mb-16 max-w-max">
                    <div className="p-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded group-hover:border-[#a855f7]/50 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    CD .. / PLAYGROUND
                </Link>

                {/* Header */}
                <header className="mb-20 text-center flex flex-col items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                        <div className="mb-6 px-4 py-1.5 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-xs font-mono tracking-widest flex items-center gap-3">
                            <Target className="w-4 h-4 text-[#a855f7]" />
                            R&D ENVIRONMENT
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#e2e8f0] tracking-tight mb-4">
                            Omni-Hand AI
                        </h1>
                        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mt-4">
                            Stealthy desktop overlay utilizing Generative AI screen analysis.
                        </p>

                        <div className="mt-12 group">
                            <a
                                href="/omni-hand.zip"
                                download
                                className="relative flex items-center gap-3 px-8 py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[#e2e8f0] rounded-xl text-sm font-bold tracking-widest transition-colors hover:border-[#a855f7]/50 hover:bg-[#a855f7]/10"
                            >
                                GET FILE ACCESS <ExternalLink className="w-4 h-4 text-[#a855f7]" />
                            </a>
                        </div>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-8 rounded-2xl shadow-xl">
                        <h3 className="text-xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-3">
                            <Focus className="w-5 h-5 text-[#a855f7]" /> What is it?
                        </h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-base">
                            Omni-Hand is a localized desktop overlay application that operates entirely in stealth.
                            It floats transparently on your screen, remaining invisible to screen capture tools
                            and monitoring software. By integrating with advanced Generative AI, it reads your
                            screen and provides contextual assistance without leaving a digital footprint.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-8 rounded-2xl shadow-xl">
                        <h3 className="text-xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-[#a855f7]" /> Why use it?
                        </h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-base">
                            When you need access to powerful AI reasoning but cannot risk shifting focus
                            away from a monitored environment. Omni-Hand acts as your invisible assistant—
                            reading complex text directly from your screen and quietly providing the insights
                            you need natively, without raising any alarms.
                        </p>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-10 md:p-14 rounded-2xl shadow-xl relative overflow-hidden">
                    <h3 className="text-2xl font-bold text-[#e2e8f0] mb-10 pb-6 border-b border-[var(--color-border-subtle)] relative z-10">How to Operate</h3>

                    <div className="space-y-10 relative z-10">
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[#a855f7] font-bold shrink-0 shadow-inner">1</div>
                            <div className="pt-1.5">
                                <h4 className="text-[#e2e8f0] text-lg font-bold mb-2">Deploy the executable</h4>
                                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                                    Click the "GET FILE ACCESS" button above to securely download the package. Run the enclosed application. It is camouflaged as a standard system service to remain completely hidden in your Task Manager.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[#a855f7] font-bold shrink-0 shadow-inner">2</div>
                            <div className="pt-1.5">
                                <h4 className="text-[#e2e8f0] text-lg font-bold mb-2">Configure hotkeys</h4>
                                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                                    The overlay is invisible by default. Use your predefined hotkey combination to activate the capture zone. Draw a box over any text, image, or question currently displayed on your screen.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[#a855f7] font-bold shrink-0 shadow-inner">3</div>
                            <div className="pt-1.5">
                                <h4 className="text-[#e2e8f0] text-lg font-bold mb-2">Receive the ghost response</h4>
                                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                                    The AI processes the captured area instantly. Within seconds, a faint response box will materialize on your screen. It is designed to be barely visible to external observers or cameras, allowing you to read the answer discreetly.
                                </p>
                            </div>
                        </div>

                        {/* Critical Warning Block */}
                        <div className="flex gap-6 items-start mt-10 p-6 md:p-8 border border-red-900/30 bg-red-950/10 rounded-xl">
                            <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-900/50 flex items-center justify-center text-red-500 shrink-0 font-bold">
                                !
                            </div>
                            <div className="pt-1.5">
                                <h4 className="text-red-400 text-sm font-bold mb-2 font-mono uppercase tracking-widest">Initialization Requirement</h4>
                                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                                    Always read the <code className="text-red-300 bg-red-950/50 px-1.5 py-0.5 rounded font-mono text-sm border border-red-900/30">guide.txt</code>. This overlay won't run unless you change the <code className="text-red-300 bg-red-950/50 px-1.5 py-0.5 rounded font-mono text-sm border border-red-900/30">API_KEYS</code> inside <code className="text-red-300 bg-red-950/50 px-1.5 py-0.5 rounded font-mono text-sm border border-red-900/30">config.dat</code>. Failure to supply active keys will result in immediate termination of the ghost process upon injection.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

// --------------------------------------------------------------------------------------
// ZERAYNCE STUDIO LAYOUT - LIGHT THEME & MARKETPLACE AESTHETIC (ZERAYNCE.COM MATCH)
// --------------------------------------------------------------------------------------
function ZeraynceStudioOverlay({ project }: { project: any }) {
    const Icon = project.icon;

    return (
        <main className="min-h-screen bg-[#f8fafc] pt-24 pb-32 overflow-hidden relative selection:bg-blue-600 selection:text-white font-poppins">
            {/* Soft Background Elements */}
            <div className="fixed inset-0 bg-[#f8fafc]" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
            
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                {/* Clean Navigation */}
                <Link href="/#playground" className="group flex items-center gap-3 text-xs font-bold tracking-widest text-slate-400 hover:text-blue-600 transition-all mb-12 max-w-max uppercase">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    BACK TO INFRASTRUCTURE
                </Link>

                {/* Hero Section: The Discovery Engine */}
                <header className="mb-20 text-center max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-[10px] font-black tracking-widest uppercase mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        Creative Infrastructure v1.0
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                        Find the perfect <span className="text-blue-600">creative</span> for your next project.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Zeraynce bridges the gap between high-level talent and business-critical operations through a node-based industrial ecosystem.
                    </p>
                </header>

                {/* Main UI Mockup Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
                    
                    {/* Discovery Engine Layout (Left) */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Featured Talent Card */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden group"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Talent</h2>
                                    <p className="text-slate-500 text-sm">Industrial-grade discovery via Recent Creatives.</p>
                                </div>
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <Users className="w-6 h-6 text-slate-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: "Sovereign Dev", role: "Systems Architect", rate: "$120/hr", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                                    { name: "Elite Motion", role: "Visual Engineer", rate: "$95/hr", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                                ].map((creative, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-200 shrink-0" />
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 text-sm">{creative.name}</h4>
                                            <p className="text-xs text-slate-500">{creative.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-black text-blue-600">{creative.rate}</div>
                                            <div className="text-[10px] text-slate-400">NODE_VERIFIED</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Workflow Manager (Tabs/Calendar) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                    <BarChart3 className="w-6 h-6 text-blue-400" /> Management HQ
                                </h2>
                                <div className="flex gap-4 mb-10 overflow-x-auto pb-4 border-b border-white/5">
                                    {["Pipeline", "Nodes", "Financials", "Creative HQ"].map((tab, i) => (
                                        <button key={tab} className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white'}`}>
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                                <DollarSign className="w-5 h-5 text-orange-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white">Project Milestone Alpha</div>
                                                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Pending_Payout // 4,200 USD</div>
                                            </div>
                                        </div>
                                        <button className="px-5 py-2 bg-white text-black text-[10px] font-black rounded-lg uppercase tracking-widest hover:bg-slate-200 transition-colors">
                                            Execute
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Meta Pillars (Right) */}
                    <div className="lg:col-span-4 space-y-8">
                        <section className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                            <h3 className="text-xs font-black text-slate-400 tracking-[0.3em] uppercase mb-8">System Pillars</h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Financial Layer", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
                                    { title: "AI Companion", icon: BrainCircuit, color: "text-emerald-600", bg: "bg-emerald-50" },
                                    { title: "Sovereign Profile", icon: Globe, color: "text-purple-600", bg: "bg-purple-50" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-center gap-4 group">
                                        <div className={`p-3 rounded-2xl transition-all group-hover:scale-110 ${item.bg}`}>
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <div className="font-bold text-slate-800 tracking-tight">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-600/20">
                            <p className="text-sm font-medium leading-relaxed mb-8">
                                "Zeraynce is the operating system for the modern creative economy—combining hiring, project management, and financial automation into a single, high-performance node."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20" />
                                <div>
                                    <div className="text-xs font-black uppercase tracking-widest">Platform Core</div>
                                    <div className="text-[10px] opacity-70">Infrastructure v1</div>
                                </div>
                            </div>
                        </section>

                        <div className="p-8 bg-slate-100 rounded-[2.5rem] border border-slate-200 border-dashed">
                            <div className="flex items-center gap-2 text-slate-600 mb-4">
                                <TerminalSquare className="w-4 h-4" />
                                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">NODE_STATUS</span>
                            </div>
                            <div className="space-y-2 font-mono text-[9px] text-slate-400">
                                <p>&gt; initializing creative_search...</p>
                                <p>&gt; creative_marketplace: [ONLINE]</p>
                                <p>&gt; node_stability: 99.99%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 border-t border-slate-200 pt-20">
                    <h2 className="text-3xl font-extrabold text-slate-900">Ready to enter the ecosystem?</h2>
                    <a 
                        href="https://zeraynce.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-16 py-6 bg-blue-600 text-white font-black text-sm tracking-[0.2em] rounded-full hover:bg-blue-700 hover:scale-105 transition-all uppercase shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
                    >
                        Access Infrastructure Node
                    </a>
                </div>
            </div>
        </main>
    );
}

// --------------------------------------------------------------------------------------
// IRIS-TS ATMOSPHERE ENGINE LAYOUT - ULTRA-PREMIUM AI SYNTHESIZER
// --------------------------------------------------------------------------------------
function AtmosphereEngine({ project }: { project: any }) {
    const [renderedLogs, setRenderedLogs] = useState<string[]>([]);

    useEffect(() => {
        if (!project) return;
        setRenderedLogs([]);
        project.logs.forEach((log: string, index: number) => {
            setTimeout(() => {
                setRenderedLogs(prev => [...prev, log]);
            }, (index + 1) * 800);
        });
    }, [project]);

    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-32 overflow-hidden relative selection:bg-cyan-500/30 selection:text-white">
            {/* Animated Atmosphere Background */}
            <div className="fixed inset-0 bg-[#020617]" />
            <div className="fixed top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#06b6d4,transparent_50%)] animate-pulse" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="flex justify-center mb-12">
                    <Link href="/#playground" className="group flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] text-[#64748b] hover:text-cyan-400 transition-all uppercase">
                        <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-cyan-500/50 shadow-lg">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        SYSTEM.BACK(ROOT)
                    </Link>
                </div>

                <header className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-8 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-[10px] font-mono font-black tracking-[0.4em] flex items-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.15)] uppercase">
                            <Wind className="w-4 h-4 animate-spin-slow" />
                            Atmosphere Engine v4.0
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-6 relative">
                            IRIS-TS
                            <span className="absolute -right-12 -top-4 text-sm font-mono text-cyan-500 border border-cyan-500/50 px-2 py-1 bg-black shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                SYNTH
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-slate-400 max-w-3xl leading-relaxed mt-4 italic">
                            Intelligent Rapid Interface Synthesizer
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mt-10">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="px-4 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-[11px] font-mono font-bold tracking-widest rounded-md uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-16 group">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="relative flex items-center gap-4 px-10 py-5 bg-white text-slate-950 rounded-full font-black text-sm tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                            >
                                START SYNTHESIS <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
                    {/* Left: Overview */}
                    <motion.section
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-center"
                    >
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />

                        <h2 className="text-xs font-mono tracking-[0.5em] font-black text-cyan-500 mb-8 flex items-center gap-4 uppercase">
                            <Focus className="w-5 h-5" /> Executive Summary
                        </h2>

                        <p className="text-2xl md:text-3xl text-white leading-[1.6] font-light mb-8">
                            {project.overview}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-800">
                            <div>
                                <h3 className="text-xs font-mono font-black text-rose-500 mb-4 tracking-widest uppercase">The Disconnect</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-mono font-black text-cyan-500 mb-4 tracking-widest uppercase">The Synthesis</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Right: Technical Stats / Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-5 flex flex-col gap-8"
                    >
                        {/* Status Terminal */}
                        <div className="bg-black border border-slate-800 rounded-[30px] flex flex-col shadow-2xl overflow-hidden h-full min-h-[400px]">
                            <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4 text-cyan-500" />
                                    <span className="font-mono text-[10px] font-black tracking-widest text-slate-500 uppercase">Atmosphere Engine Logs</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                                </div>
                            </div>
                            <div className="p-8 font-mono text-xs space-y-4 overflow-y-auto w-full relative h-full flex flex-col">
                                {renderedLogs.map((log, i) => {
                                    let textColor = "text-slate-600";
                                    if (log.includes("[info]")) textColor = "text-cyan-400";
                                    if (log.includes("[warn]")) textColor = "text-amber-400";
                                    if (log.includes("[ ok ]")) textColor = "text-emerald-400 font-bold";

                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`${textColor} flex gap-4`}>
                                            <span className="text-slate-800 select-none shrink-0">{`0${i + 1}`}</span>
                                            <span className="break-all">{log}</span>
                                        </motion.div>
                                    );
                                })}
                                {renderedLogs.length < project.logs.length && (
                                    <div className="flex gap-4 animate-pulse">
                                        <span className="text-slate-800 select-none shrink-0">{`0${renderedLogs.length + 1}`}</span>
                                        <span className="text-slate-400">_</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Key Features Section */}
                <h3 className="text-4xl md:text-6xl font-black text-white text-center mb-16 tracking-tighter">
                    Core Capabilities.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            title: "Visual Intake",
                            desc: "Natively extracts mood, layout, and hex codes from screenshots or live webcam feeds.",
                            icon: Laptop,
                            color: "text-cyan-400",
                            bg: "bg-cyan-500/10"
                        },
                        {
                            title: "DOM Manipulation",
                            desc: "Interactive iframe rendering for instant click-to-edit text and asset injection.",
                            icon: Code,
                            color: "text-emerald-400",
                            bg: "bg-emerald-500/10"
                        },
                        {
                            title: "Refinement",
                            desc: "Surgical codebase mutations through conversational AI—preserve edits, change structure.",
                            icon: Activity,
                            color: "text-amber-400",
                            bg: "bg-amber-500/10"
                        },
                        {
                            title: "Cloud Deploy",
                            desc: "Native Vercel SDK integration for one-click publishing to the global edge network.",
                            icon: Cloud,
                            color: "text-blue-400",
                            bg: "bg-blue-500/10"
                        },
                        {
                            title: "Auto-Healing",
                            desc: "Embedded jsonrepair layer converts malformed AI payloads into valid UI architecture.",
                            icon: ShieldCheck,
                            color: "text-indigo-400",
                            bg: "bg-indigo-500/10"
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/30 transition-all group"
                        >
                            <div className={`w-12 h-12 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3 tracking-widest uppercase">{feature.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Atmosphere Engine Architecture Diagram (Simplified) */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

                    <h4 className="text-xs font-mono font-black text-cyan-500 tracking-[0.5em] uppercase mb-6">Synthesis Topology</h4>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">The AI-Native Workflow.</h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center shadow-xl">
                                <Zap className="w-10 h-10 text-cyan-400" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Input Intake</span>
                        </div>
                        <div className="hidden md:block w-24 h-px bg-slate-800 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-cyan-500" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 bg-cyan-950 border border-cyan-400/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-spin-slow">
                                <Wind className="w-12 h-12 text-cyan-400" />
                            </div>
                            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">Atmosphere</span>
                        </div>
                        <div className="hidden md:block w-24 h-px bg-slate-800 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center shadow-xl">
                                <Cloud className="w-10 h-10 text-emerald-400" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Global Deploy</span>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}

// --------------------------------------------------------------------------------------
// VERITY COMMAND CENTER LAYOUT - MILITARY-GRADE SOVEREIGN SaaS
// --------------------------------------------------------------------------------------
function VerityCommandCenter({ project }: { project: any }) {
    const [renderedLogs, setRenderedLogs] = useState<string[]>([]);

    useEffect(() => {
        if (!project) return;
        setRenderedLogs([]);
        project.logs.forEach((log: string, index: number) => {
            setTimeout(() => {
                setRenderedLogs(prev => [...prev, log]);
            }, (index + 1) * 900);
        });
    }, [project]);

    return (
        <main className="min-h-screen bg-[#040509] pt-24 pb-32 overflow-hidden relative selection:bg-amber-500/20 selection:text-white">
            {/* Fixed dark base */}
            <div className="fixed inset-0 bg-[#040509]" />

            {/* Radial gold glow top-right */}
            <div className="fixed top-0 right-0 w-[700px] h-[700px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Subtle grid lines */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)`,
                backgroundSize: "60px 60px"
            }} />

            <div className="container mx-auto px-6 max-w-[1100px] relative z-10">

                {/* Back Button */}
                <div className="flex justify-start mb-12">
                    <Link href="/#playground" className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#64748b] hover:text-amber-400 transition-colors uppercase">
                        <ArrowLeft className="w-4 h-4" /> Return to Playground
                    </Link>
                </div>

                {/* ============ HEADER ============ */}
                <header className="mb-20 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                    >
                        {/* Badge */}
                        <div className="mb-6 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-950/20 text-amber-400 text-[10px] font-mono font-black tracking-[0.4em] flex items-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.1)] uppercase">
                            <ShieldCheck className="w-4 h-4" />
                            Military-Grade B2B SaaS
                        </div>

                        {/* Title */}
                        <h1 className="text-7xl md:text-9xl font-black tracking-widest uppercase mb-3 relative text-white">
                            VERITY
                            <span className="absolute -right-14 top-2 text-[11px] font-mono text-amber-500 border border-amber-500/50 px-2 py-1 bg-black shadow-[0_0_15px_rgba(245,158,11,0.3)] tracking-widest">
                                v2.0
                            </span>
                        </h1>

                        <p className="text-base md:text-lg font-light text-slate-400 max-w-2xl leading-relaxed mt-4 italic">
                            Sovereign Operational Intelligence
                        </p>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">
                            {[
                                { value: "5,000+", label: "Audit Records" },
                                { value: "$704K", label: "Financial Risk" },
                                { value: "1,933", label: "Pending Remediation" },
                                { value: "3.0/5", label: "Quality Score" },
                            ].map(s => (
                                <div key={s.label} className="text-center">
                                    <div className="text-2xl md:text-3xl font-black text-amber-400 font-mono">{s.value}</div>
                                    <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-black rounded-full font-black text-sm tracking-[0.15em] hover:scale-105 hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                            >
                                ACCESS LIVE SYSTEM <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/15 text-slate-300 rounded-full font-bold text-sm tracking-widest hover:border-amber-500/50 hover:text-amber-400 transition-all"
                            >
                                <Github className="w-5 h-5" /> VIEW REPOSITORY
                            </a>
                        </div>
                    </motion.div>
                </header>

                {/* ============ ARCHITECTURE PILLARS ============ */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="text-center mb-10">
                        <span className="text-[10px] font-mono text-amber-500 tracking-[0.5em] uppercase">Core Architectural Pillars</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Pillar 1: Sovereign Governance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-amber-950/10 border border-amber-500/20 rounded-2xl p-7 hover:border-amber-500/40 hover:bg-amber-950/20 transition-all group"
                        >
                            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <Lock className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-sm font-mono font-black text-amber-400 tracking-widest uppercase mb-3">I. Sovereign Governance</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                Deep data sovereignty with a strictly enforced RBAC matrix. Sensitive financial fields are automatically redacted for Department Leads, while Admins maintain full global visibility.
                            </p>
                            <div className="space-y-2">
                                {[
                                    { role: "Admin", desc: "Full visibility & global audit access", color: "text-amber-400 border-amber-500/30" },
                                    { role: "Dept. Lead", desc: "5K+ records — costs redacted", color: "text-slate-300 border-slate-700" },
                                ].map(r => (
                                    <div key={r.role} className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${r.color} bg-black/30`}>
                                        <Users className="w-3.5 h-3.5 shrink-0" />
                                        <span className="text-xs font-mono font-bold">{r.role}</span>
                                        <span className="text-[10px] text-slate-500 ml-auto">{r.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Pillar 2: Forensic Intelligence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-blue-950/10 border border-blue-500/20 rounded-2xl p-7 hover:border-blue-500/40 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <BrainCircuit className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-sm font-mono font-black text-blue-400 tracking-widest uppercase mb-3">II. Forensic Intelligence</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                The Intelligence Liaison is a context-aware AI matrix grounded in custom organizational documentation (<code className="text-blue-300 text-[11px] bg-blue-950/40 px-1 rounded">verity.txt</code>). It provides real-time guidance within authorized operational bounds.
                            </p>
                            <div className="p-3 bg-black/50 border border-blue-500/15 rounded-xl font-mono text-[10px] text-blue-300/80 leading-relaxed">
                                <span className="text-slate-600">&gt; </span>Query routed to Gemini Intelligence Liaison...<br />
                                <span className="text-slate-600">&gt; </span>Context: verity.txt [AUTHORIZED]<br />
                                <span className="text-emerald-400">&gt; </span>Response generated within operational bounds.
                            </div>
                        </motion.div>

                        {/* Pillar 3: Remediation Estimator */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-rose-950/10 border border-rose-500/20 rounded-2xl p-7 hover:border-rose-500/40 transition-all group"
                        >
                            <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <DollarSign className="w-6 h-6 text-rose-400" />
                            </div>
                            <h3 className="text-sm font-mono font-black text-rose-400 tracking-widest uppercase mb-3">III. Remediation Estimator</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                The AI Cost Matrix automatically generates itemized remediation lists from raw audit findings, reducing manual overhead for department managers significantly.
                            </p>
                            <div className="space-y-2">
                                {[
                                    { item: "Broken Bed Frame", cost: "$500.00" },
                                    { item: "Flickering Fixtures", cost: "$1,055.00" },
                                    { item: "F&B Equipment", cost: "$1,650.00" },
                                ].map(r => (
                                    <div key={r.item} className="flex items-center justify-between px-3 py-2 rounded-lg border border-rose-500/15 bg-black/30">
                                        <span className="text-xs font-mono text-slate-400">{r.item}</span>
                                        <span className="text-xs font-mono font-bold text-rose-300">{r.cost}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ============ OVERVIEW + TERMINAL ============ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
                >
                    {/* Left: Challenge & Solution */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-black/50 border border-red-900/30 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.04),transparent)]" />
                            <h3 className="text-[11px] font-mono font-black text-red-500 tracking-[0.4em] uppercase mb-4 flex items-center gap-2 relative z-10">
                                <span className="w-2 h-2 rounded-full bg-red-500" /> The Operational Gap
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-base font-light relative z-10">{project.challenge}</p>
                        </div>
                        <div className="bg-black/50 border border-amber-500/20 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.06),transparent)]" />
                            <h3 className="text-[11px] font-mono font-black text-amber-400 tracking-[0.4em] uppercase mb-4 flex items-center gap-2 relative z-10">
                                <span className="w-2 h-2 rounded-full bg-amber-400" /> The Sovereign Solution
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-base font-light relative z-10">{project.solution}</p>
                        </div>
                    </div>

                    {/* Right: Terminal */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#060709] border border-amber-500/15 rounded-2xl overflow-hidden h-full flex flex-col">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/10 bg-black/40">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4 text-amber-500" />
                                    <span className="font-mono text-[10px] font-black tracking-widest text-slate-500 uppercase">Sovereign Audit Engine</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                                </div>
                            </div>
                            <div className="p-8 font-mono text-xs space-y-4 overflow-y-auto flex-grow">
                                {renderedLogs.map((log, i) => {
                                    let colorClass = "text-slate-600";
                                    if (log.includes("[info]")) colorClass = "text-amber-400";
                                    if (log.includes("[warn]")) colorClass = "text-red-400";
                                    if (log.includes("[ ok ]")) colorClass = "text-emerald-400 font-bold";
                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`${colorClass} flex gap-4`}>
                                            <span className="text-slate-800 select-none shrink-0">{i + 1 > 9 ? i + 1 : `0${i + 1}`}</span>
                                            <span className="break-all">{log}</span>
                                        </motion.div>
                                    );
                                })}
                                {renderedLogs.length < project.logs.length && (
                                    <div className="flex gap-4 animate-pulse">
                                        <span className="text-slate-800 select-none shrink-0">{`0${renderedLogs.length + 1}`}</span>
                                        <span className="text-amber-600">_</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ============ TECH STACK ============ */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#060810] to-[#040509] border border-amber-500/15 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden mb-12"
                >
                    <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
                        backgroundImage: `linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px"
                    }} />

                    <span className="text-[10px] font-mono text-amber-500 tracking-[0.5em] uppercase mb-4 block">Language Matrix</span>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight">Built on Vue. Powered by TypeScript.</h3>

                    {/* Stacked language bar */}
                    <div className="max-w-3xl mx-auto">
                        <div className="flex rounded-full overflow-hidden h-4 mb-8 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                            {[
                                { label: "Vue", pct: 76.9, color: "#41b883" },
                                { label: "TypeScript", pct: 19.9, color: "#3178c6" },
                                { label: "Shell", pct: 1.7, color: "#89e051" },
                                { label: "CSS", pct: 0.5, color: "#563d7c" },
                                { label: "Dockerfile", pct: 0.4, color: "#384d54" },
                                { label: "JS", pct: 0.3, color: "#f1e05a" },
                                { label: "HTML", pct: 0.3, color: "#e34c26" },
                            ].map(l => (
                                <div key={l.label} title={`${l.label} ${l.pct}%`} style={{ width: `${l.pct}%`, backgroundColor: l.color }} />
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                            {[
                                { label: "Vue", pct: 76.9, color: "#41b883" },
                                { label: "TypeScript", pct: 19.9, color: "#3178c6" },
                                { label: "Shell", pct: 1.7, color: "#89e051" },
                                { label: "CSS", pct: 0.5, color: "#563d7c" },
                                { label: "Dockerfile", pct: 0.4, color: "#384d54" },
                                { label: "JavaScript", pct: 0.3, color: "#f1e05a" },
                                { label: "HTML", pct: 0.3, color: "#e34c26" },
                            ].map(l => (
                                <div key={l.label} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
                                    <span className="text-sm font-mono text-slate-300">{l.label}</span>
                                    <span className="text-sm font-mono text-slate-500">{l.pct}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ============ FOOTER CTA ============ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-10 py-5 bg-amber-500 text-black rounded-full font-black text-sm tracking-[0.2em] hover:scale-105 hover:bg-amber-400 transition-all shadow-[0_0_40px_rgba(245,158,11,0.35)]"
                    >
                        ACCESS LIVE SYSTEM <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-10 py-5 border border-white/15 text-slate-300 rounded-full font-bold text-sm tracking-widest hover:border-amber-500/50 hover:text-amber-400 transition-all"
                    >
                        <Github className="w-5 h-5" /> GITHUB REPOSITORY
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
