"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Terminal, Briefcase } from "lucide-react";

export default function Uplink() {
    const [need, setNeed] = useState<"architecture" | "ux" | "fullstack">("architecture");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [logs, setLogs] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setLogs([]);

        const sequence = [
            "> INITIATING SECURE HANDSHAKE...",
            "> ENCRYPTING PAYLOAD...",
            "> HANDSHAKE ESTABLISHED.",
            "> TRANSMITTING ENCRYPTED LOGS...",
        ];

        // Vibe animation typing effect
        sequence.forEach((log, index) => {
            setTimeout(() => {
                setLogs(prev => [...prev, log]);
            }, (index + 1) * 600);
        });

        try {
            // We use FormSubmit.co for friction-free email routing without a backend dependency
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    objective: need === "architecture" ? "System Architecture" : need === "ux" ? "UX/UI Designing" : "Full-Stack Dev/Team Dev",
                    email: email,
                    name: name,
                    details: details,
                })
            });

            setTimeout(() => {
                setLogs(prev => [...prev, "> MESSAGE TRANSMITTED SUCCESSFULLY.", "> WAITING FOR OPERATOR RESPONSE: [[ OK ]]"]);
                setTimeout(() => {
                    setIsSubmitting(false);
                    setSuccess(true);
                    setEmail(""); setName(""); setDetails("");
                }, 2000);
            }, sequence.length * 600 + 1000);

        } catch (error) {
            setTimeout(() => {
                setLogs(prev => [...prev, "> TRANSMISSION FAILED. PLEASE TRY AGAIN LATER."]);
                setIsSubmitting(false);
            }, sequence.length * 600 + 1000);
        }
    };

    return (
        <section id="uplink" className="py-32 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-subtle)] relative overflow-hidden">
            {/* Futuristic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent)]" />

            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <h2 className="text-sm font-mono font-bold tracking-widest text-[var(--color-brand-500)] uppercase mb-2">
                        The Uplink
                    </h2>
                    <h3 className="text-5xl md:text-6xl font-extrabold text-[var(--color-text-primary)] leading-tight">
                        Let's architect your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-blue-500">next system.</span>
                    </h3>
                    <p className="text-xl text-[var(--color-text-secondary)]">
                        Low friction. High ROI. Initiate the uplink sequence below or connect directly through standard channels.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="https://github.com/EisenDev" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-[var(--color-text-primary)]/5 border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-text-primary)]/10 transition-colors">
                            <Github className="w-5 h-5" /> GitHub Root
                        </a>
                        <a href="https://www.linkedin.com/in/arjay-escabas-8a30413a0/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-[#0a66c2]/10 border border-[#0a66c2]/50 text-[#0a66c2] hover:bg-[#0a66c2]/20 font-bold rounded-lg transition-colors">
                            <Linkedin className="w-5 h-5" /> Signal LinkedIn
                        </a>
                        <a href="https://v2.onlinejobs.ph/jobseekers/info/4691563" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-orange-500/10 border border-orange-500/50 text-orange-500 hover:bg-orange-500/20 font-bold rounded-lg transition-colors">
                            <Briefcase className="w-5 h-5" /> OJ.ph
                        </a>
                    </div>
                </motion.div>

                {/* Conditional Form / Terminal Output */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                >
                    {/* Vibe Terminal Logging Overlay */}
                    {logs.length > 0 && !success && (
                        <div className="absolute inset-0 z-20 bg-[var(--color-bg-primary)]/95 backdrop-blur-md p-8 flex flex-col font-mono text-sm text-[var(--color-brand-500)]">
                            <div className="flex items-center gap-3 mb-6 border-b border-green-900/50 pb-4">
                                <Terminal className="w-5 h-5" />
                                <span className="tracking-widest font-bold">UPLINK ESTABLISHED</span>
                            </div>
                            <div className="space-y-3">
                                {logs.map((log, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                                        {log}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Success Screen Overlay */}
                    {success && (
                        <div className="absolute inset-0 z-20 bg-[var(--color-bg-primary)]/95 backdrop-blur-md p-8 flex flex-col items-center justify-center font-mono text-center space-y-4 shadow-[inset_0_0_50px_rgba(16,185,129,0.2)]">
                            <div className="w-16 h-16 rounded-full border-2 border-[var(--color-brand-500)] flex items-center justify-center text-[var(--color-brand-500)] mb-4">
                                <Send className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-[var(--color-text-primary)] tracking-widest">TRANSMISSION SECURED</h4>
                            <p className="text-[var(--color-brand-500)]">I have received your payload. Expect a response shortly.</p>
                            <button onClick={() => setSuccess(false)} className="mt-8 px-6 py-2 border border-[var(--color-brand-500)] rounded text-[var(--color-brand-500)] text-xs hover:bg-[var(--color-brand-500)] hover:text-white transition-colors">
                                INITIATE NEW COMM-LINK
                            </button>
                        </div>
                    )}

                    <div className="flex items-center gap-3 mb-8 border-b border-[var(--color-border-subtle)] pb-4">
                        <Terminal className="text-[var(--color-brand-500)] w-6 h-6" />
                        <h4 className="text-xl font-mono font-bold text-[var(--color-text-primary)] tracking-widest">/CONTACT ME</h4>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[var(--color-text-secondary)] uppercase">1. IDENTIFY THE OBJECTIVE:</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setNeed("architecture")}
                                    className={`px-4 py-3 rounded text-sm font-bold tracking-wide transition-colors ${need === "architecture"
                                        ? "bg-[var(--color-brand-500)] text-[var(--color-bg-primary)] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                        : "bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                                        }`}
                                >
                                    System Architecture
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setNeed("ux")}
                                    className={`px-4 py-3 rounded text-sm font-bold tracking-wide transition-colors ${need === "ux"
                                        ? "bg-[#f24e1e] text-[var(--color-bg-primary)] shadow-[0_0_15px_rgba(242,78,30,0.3)]"
                                        : "bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                                        }`}
                                >
                                    UX/UI Designing
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setNeed("fullstack")}
                                    className={`px-4 py-3 rounded text-sm font-bold tracking-wide transition-colors ${need === "fullstack"
                                        ? "bg-blue-600 text-[var(--color-bg-primary)] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                                        : "bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                                        }`}
                                >
                                    Full-Stack Dev/Team Dev
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[var(--color-text-secondary)] uppercase">2. SENDER'S EMAIL</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded p-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-brand-500)] focus:ring-1 focus:ring-[var(--color-brand-500)] transition-all"
                                    placeholder="sysadmin@corp.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[var(--color-text-secondary)] uppercase">3. NAME / POSITION</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded p-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-brand-500)] focus:ring-1 focus:ring-[var(--color-brand-500)] transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[var(--color-text-secondary)] uppercase">4. TRANSMISSION DETAILS</label>
                            <textarea
                                required
                                rows={4}
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded p-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-brand-500)] focus:ring-1 focus:ring-[var(--color-brand-500)] transition-all resize-none"
                                placeholder="Please outline the details of what you need..."
                            />
                        </div>

                        <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-extrabold uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 hover:bg-[var(--color-brand-500)] hover:text-[var(--color-bg-primary)] transition-colors disabled:opacity-50">
                            <Send className="w-5 h-5" /> Execute Payload
                        </button>
                    </form>

                </motion.div>
            </div>
        </section>
    );
}
