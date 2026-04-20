"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

function PulseNode() {
    const meshRef = useRef<any>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
            <MeshDistortMaterial
                color="#10b981"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                wireframe={true}
            />
        </Sphere>
    );
}

export default function CommandCenter() {
    const [ticker, setTicker] = useState("Initializing Nodes...");

    useEffect(() => {
        const statuses = [
            "Checking AWS Relays...",
            "Cloudflare Edge Active",
            "LUMECORE Status: Operational",
            "Systems Self-Healing...",
        ];
        let i = 0;
        const interval = setInterval(() => {
            setTicker(statuses[i]);
            i = (i + 1) % statuses.length;
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="command-center" className="min-h-screen relative flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[var(--color-bg-primary)]">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.05),transparent_40%)]" />

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
                {/* Texts */}
                <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h2 className="text-sm font-mono font-semibold tracking-widest text-[var(--color-brand-500)] uppercase flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            {ticker}
                        </h2>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)]">
                            I design and build{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-emerald-300">
                                AI-integrated systems.
                            </span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl font-light text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                        Specializing in Prompt Engineering, Agentic Development, and System Architecture using TypeScript. Expertise in integrating APIs with Cloudflare, Azure, Digital Ocean, and AWS.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="/dossier" className="px-6 py-3 bg-[var(--color-brand-500)] text-white font-bold rounded-lg hover:bg-[var(--color-brand-600)] transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                            :: VIEW DOSSIER
                        </Link>
                        <Link href="/logs" className="px-6 py-3 border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] rounded-lg hover:bg-[#1a1a1c] transition-colors font-semibold">
                            SYSTEM LOGS
                        </Link>
                    </div>
                </div>

                {/* Visuals */}
                <div className="relative flex items-center justify-center order-1 lg:order-2 h-[40vh] lg:h-auto min-h-[400px]">
                    {/* 3D Pulse Element Background */}
                    <div className="absolute inset-0 w-full h-full opacity-60">
                        <Canvas camera={{ position: [0, 0, 5] }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <PulseNode />
                        </Canvas>
                    </div>

                    {/* Arjay Portrait Overlay */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-[var(--color-bg-secondary)]"
                    >
                        <Image
                            src="/profile.png"
                            alt="Arjay FF - Systems Architect"
                            width={350}
                            height={450}
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="px-3 py-1 bg-[var(--color-bg-secondary)]/60 backdrop-blur-md rounded border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-primary)] font-mono tracking-widest uppercase items-center justify-center flex text-center">
                                Arjay Escabas • System Architect
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
