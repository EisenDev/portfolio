"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, ExternalLink, ShieldCheck, Cpu, Code, Database, Monitor, Search, Layers, X, FileText, Award, FileUser } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const CERTIFICATES: Array<{
    title: string;
    issuer: string;
    date: string;
    image: string;
    category: string;
    pdf?: string;
    highlighted?: boolean;
}> = [
        {
            title: "IT Specialist: HTML and CSS",
            issuer: "Certiport",
            date: "2024",
            image: "/certificates/certiport-ITS-HTMLandCSS.png",
            pdf: "/certificates/certiport-ITS-HTMLandCSS.pdf",
            category: "Development",
            highlighted: true
        },
        {
            title: "Legacy Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2023",
            image: "/certificates/legacy-responsive-web-design-v8.png",
            category: "Development"
        },
        {
            title: "Cyber Threat Management",
            issuer: "Cisco Networking Academy",
            date: "2024",
            image: "/certificates/cyber-threat-management.png",
            category: "Security"
        },
        {
            title: "Network Defense",
            issuer: "Cisco Networking Academy",
            date: "2024",
            image: "/certificates/network-defense.png",
            category: "Security"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "2024",
            image: "/certificates/Introduction-to-cyber-security.png",
            category: "Security"
        },
        {
            title: "Computer Systems Configuration",
            issuer: "TESDA",
            date: "2023",
            image: "/certificates/installing-and-configuring-computer-system.png",
            category: "Infrastructure"
        },
        {
            title: "Maintaining Servers & Networks",
            issuer: "TESDA",
            date: "2023",
            image: "/certificates/maintaining-computer-system-servers-and-networks.png",
            category: "Infrastructure"
        },
        {
            title: "Setting Up Computer Networks",
            issuer: "TESDA",
            date: "2023",
            image: "/certificates/setting-up-computer-networks.png",
            category: "Infrastructure"
        },
        {
            title: "Setting Up Computer Servers",
            issuer: "TESDA",
            date: "2023",
            image: "/certificates/setting-up-computer-servers.png",
            category: "Infrastructure"
        },
        {
            title: "Introduction to CSS",
            issuer: "Great Learning",
            date: "2022",
            image: "/certificates/introduction-to-css.png",
            category: "Development"
        }
    ];

export default function DossierPage() {
    const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handleExportPDF = async () => {
        const element = document.getElementById("dossier-content");
        if (!element) return;

        setIsExporting(true);
        try {
            // Inject a style to force visibility of all elements and handle animations
            const style = document.createElement("style");
            style.id = "pdf-export-style";
            style.innerHTML = `
                .pdf-ignore { display: none !important; }
                #dossier-content * { 
                    opacity: 1 !important; 
                    transform: none !important; 
                    visibility: visible !important;
                    transition: none !important;
                    animation: none !important;
                }
            `;
            document.head.appendChild(style);

            // Wait a bit for styles to apply
            await new Promise(resolve => setTimeout(resolve, 500));

            const dataUrl = await toPng(element, {
                cacheBust: true,
                backgroundColor: "#050505",
                pixelRatio: 2,
                height: element.scrollHeight,
                width: element.clientWidth,
            });

            // Restore hidden elements
            const styleElement = document.getElementById("pdf-export-style");
            if (styleElement) styleElement.remove();

            const pdf = new jsPDF("p", "mm", "a4");
            const imgProps = pdf.getImageProperties(dataUrl);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            const pageHeight = pdf.internal.pageSize.getHeight();
            let heightLeft = pdfHeight;
            let position = 0;

            // Add first page
            pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
            heightLeft -= pageHeight;

            // Add subsequent pages if content exceeds A4 height
            while (heightLeft > 0) {
                position = heightLeft - pdfHeight;
                pdf.addPage();
                pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("ARJAY_ESCABAS_DOSSIER.pdf");
        } catch (error) {
            console.error("PDF Export failed:", error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <main id="dossier-content" className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] pb-32 relative overflow-hidden">

            {/* Ambient Background Grid */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 max-w-6xl relative z-10">

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="pdf-ignore">
                    <Link href="/" className="group inline-flex items-center gap-3 text-xs md:text-sm font-mono font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-brand-400)] transition-colors mb-8 md:mb-16 backdrop-blur-md bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border-subtle)] pr-4 rounded-full">
                        <div className="p-2 bg-[var(--color-brand-500)]/10 rounded-full group-hover:bg-[var(--color-brand-500)]/20 transition-colors text-[var(--color-brand-500)]">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        CD .. / ROOT
                    </Link>
                </motion.div>

                {/* Header Sequence */}
                <header className="mb-12 md:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end border-b border-[var(--color-border-subtle)] pb-8 md:pb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-[var(--color-brand-500)]" />
                            <h2 className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-500)] uppercase">
                                Classified Digital Record
                            </h2>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-text-primary)] tracking-tight uppercase">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-400)] to-[var(--color-brand-600)]">Dossier</span>
                        </h1>
                        <p className="mt-4 md:mt-6 text-sm md:text-lg text-[var(--color-text-secondary)] font-light max-w-xl leading-relaxed">
                            A comprehensive overview of operational capabilities, deployed architectural logic, and validated technical credentials.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex lg:justify-end gap-4 pdf-ignore">
                        <Link
                            href="/Resume/ARJAY_ESCABAS_RESUME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-500)]/50 hover:bg-[var(--color-brand-500)]/10 text-[var(--color-text-primary)] rounded-2xl text-xs md:text-sm font-bold tracking-widest uppercase transition-all shadow-xl group"
                        >
                            <FileUser className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-[var(--color-brand-400)]" />
                            <div className="flex flex-col items-start leading-none gap-1">
                                <span>View Resume</span>
                                <span className="text-[10px] font-mono text-[var(--color-brand-500)]/70">OFFICIAL ARCHIVE</span>
                            </div>
                        </Link>

                        <button
                            onClick={handleExportPDF}
                            disabled={isExporting}
                            className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-500)]/50 hover:bg-[var(--color-brand-500)]/10 text-[var(--color-text-primary)] rounded-2xl text-xs md:text-sm font-bold tracking-widest uppercase transition-all shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            <Download className={`w-5 h-5 ${isExporting ? 'animate-bounce' : 'group-hover:translate-y-1'} transition-transform text-[var(--color-brand-400)]`} />
                            <div className="flex flex-col items-start leading-none gap-1">
                                <span>{isExporting ? "Processing..." : "Export PDF"}</span>
                                <span className="text-[10px] font-mono text-[var(--color-brand-500)]/70">SHA-256 VERIFIED</span>
                            </div>
                        </button>
                    </motion.div>
                </header>

                {/* KPI Dashboard */}
                <section className="mb-24">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { label: "YEARS COMBAT IN PROD", val: "3", icon: Cpu },
                            { label: "PROJECTS DEPLOYED", val: "5", icon: Database },
                            { label: "TECH STACK & APIs", val: "27", icon: Code },
                            { label: "UI COMPONENTS CLONED", val: "50+", icon: Layers }
                        ].map((stat, i) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                                key={stat.label}
                                className="relative overflow-hidden bg-[#111] border border-[var(--color-border-subtle)] p-4 md:p-6 rounded-3xl flex flex-col justify-center items-center text-center hover:border-[var(--color-brand-500)]/50 hover:bg-[#1a1a1a] transition-all shadow-lg group"
                            >
                                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-500)]/0 to-transparent group-hover:via-[var(--color-brand-500)]/50 transition-all opacity-0 group-hover:opacity-100" />
                                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-brand-500)]/50 mb-3 md:mb-4 group-hover:text-[var(--color-brand-400)] transition-colors" />
                                <div className="text-3xl md:text-5xl font-black text-white leading-none mb-2 md:mb-3 tracking-tighter group-hover:scale-110 transition-transform origin-bottom">{stat.val}</div>
                                <div className="text-[9px] md:text-xs text-gray-400 font-mono font-bold tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tactical Roles */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
                        <div className="p-2 md:p-3 bg-[var(--color-brand-500)]/10 rounded-2xl border border-[var(--color-brand-500)]/20">
                            <Monitor className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-brand-400)]" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight">Professional Experience</h3>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {[
                            {
                                role: "FULL STACK DEVELOPER",
                                type: "Independent Consultant",
                                year: "2024 - PRESENT",
                                desc: "Engineering robust web applications and designing scalable system architectures. Leading full development lifecycles from initial wireframes to production deployments.",
                                stack: ["React", "Next.js", "Laravel", "TypeScript"]
                            },
                            {
                                role: "BACK END ARCHITECT",
                                type: "System Engineering",
                                year: "2024 - PRESENT",
                                desc: "Architecting data models, RESTful APIs, and integration layers for real-time web engines. Leveraging backend frameworks to handle intensive data operations globally.",
                                stack: ["Node.js", "PHP", "PostgreSQL", "Supabase"]
                            },
                            {
                                role: "FRONT END INTERFACE DESIGNER",
                                type: "Interface Engineering",
                                year: "2024",
                                desc: "Translating high-level UI specifications into performant, responsive frontend components. Implementing fluid animations and aesthetic consistency.",
                                stack: ["Tailwind", "Framer Motion", "Vue", "CSS"]
                            },
                            {
                                role: "UX UI DESIGNER",
                                type: "Prototyping & Layout",
                                year: "2023",
                                desc: "Defining the core user flow and wireframing digital experiences. Focusing on aesthetic harmony, usability, and modern interface trends.",
                                stack: ["Figma", "Canva", "Design Systems"]
                            }
                        ].map((exp, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                key={exp.role}
                                className="group bg-[#0a0f18] border border-[#1f2937] shadow-xl hover:border-[var(--color-brand-500)]/30 p-5 md:p-8 rounded-3xl transition-all relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start md:items-center"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-brand-500)]/0 group-hover:bg-[var(--color-brand-500)]/50 transition-colors" />

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                        <h4 className="font-extrabold text-white text-lg md:text-2xl tracking-tight">{exp.role}</h4>
                                        <span className="self-start md:self-auto px-3 py-1 bg-black/50 border border-gray-800 rounded-full text-[10px] md:text-xs font-mono text-[var(--color-brand-400)] uppercase tracking-widest">{exp.year}</span>
                                    </div>
                                    <div className="text-xs md:text-sm font-mono text-[var(--color-brand-500)] mb-3 md:mb-4">{exp.type}</div>
                                    <p className="text-gray-300 leading-relaxed font-light max-w-3xl text-sm md:text-base mb-5 md:mb-6">
                                        {exp.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map(tech => (
                                            <span key={tech} className="text-[10px] md:text-xs font-mono font-bold bg-black border border-gray-800 text-gray-300 px-3 py-1.5 rounded-xl">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Accredited Certifications Bento Grid */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="p-2 md:p-3 bg-[var(--color-brand-500)]/10 rounded-2xl border border-[var(--color-brand-500)]/20">
                                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-brand-400)]" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight">Accredited Certifications</h3>
                                <p className="text-[var(--color-text-secondary)] font-mono text-xs md:text-sm mt-1">Verified Digital Credentials & Honors</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {CERTIFICATES.map((cert, i) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                key={cert.title}
                                onClick={() => setSelectedCert(cert)}
                                className={`group relative rounded-3xl overflow-hidden bg-[#111] border ${cert.highlighted ? 'border-[var(--color-brand-500)] shadow-[0_0_30px_rgba(16,185,129,0.2)] md:col-span-2 lg:col-span-2 aspect-auto min-h-[250px] md:min-h-[300px]' : 'border-[#1f2937] hover:border-[var(--color-brand-500)]/50 aspect-[4/3]'} cursor-pointer transition-all`}
                            >
                                {/* Highlight Background Effects */}
                                {cert.highlighted && (
                                    <>
                                        <div className="absolute -inset-[100%] z-0 animate-[spin_10s_linear_infinite] opacity-20 group-hover:opacity-40 transition-opacity bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#10b981_100%)]" />
                                        <div className="absolute inset-[1px] z-0 bg-[#0a0f18] rounded-[23px]" />
                                    </>
                                )}

                                {/* Background Image */}
                                <div className={`absolute inset-0 w-full h-full bg-[#111] ${cert.highlighted ? 'z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500' : ''}`}>
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className={`transition-transform duration-700 ${cert.highlighted ? 'object-contain p-4 md:p-12 group-hover:scale-100' : 'object-cover group-hover:scale-105'}`}
                                    />
                                    {/* Text Placement Shadow ONLY at the bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                                </div>

                                {/* Premium Ribbon for Highlighted */}
                                {cert.highlighted && (
                                    <div className="absolute top-0 right-0 z-20 overflow-hidden w-32 h-32 pointer-events-none">
                                        <div className="absolute transform rotate-45 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-black text-[10px] tracking-widest uppercase py-1.5 right-[-35px] top-[32px] w-[170px] text-center shadow-lg flex items-center justify-center gap-1">
                                            <Award className="w-3 h-3" /> Featured
                                        </div>
                                    </div>
                                )}

                                {/* Content Overlay */}
                                <div className={`absolute inset-0 p-4 md:p-6 flex flex-col justify-end pointer-events-none ${cert.highlighted ? 'z-20' : ''}`}>
                                    <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className={`px-2 py-1 md:px-3 md:py-1.5 border border-gray-700 bg-black/80 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-mono tracking-widest ${cert.highlighted ? 'text-cyan-400' : 'text-[var(--color-brand-400)]'}`}>
                                                {cert.category}
                                            </span>
                                            <span className="font-mono text-[10px] md:text-xs text-white font-bold drop-shadow-md">{cert.date}</span>
                                        </div>
                                        <h4 className={`text-white font-extrabold leading-tight mb-1 drop-shadow-md ${cert.highlighted ? 'text-xl md:text-3xl max-w-lg' : 'text-base md:text-lg'}`}>{cert.title}</h4>
                                        <p className="text-gray-300 font-mono text-[10px] md:text-xs font-bold drop-shadow-md">{cert.issuer}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                                            <Search className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </section>
            </div>

            {/* Modal for full certificate view */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="relative max-w-5xl w-full max-h-screen flex flex-col bg-[#0a0f18] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 md:p-6 border-b border-gray-800 bg-[#111]">
                                <div>
                                    <h3 className="text-white font-bold text-base md:text-xl flex items-center gap-2">
                                        {selectedCert.highlighted && <Award className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-brand-400)]" />}
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-[var(--color-brand-500)] font-mono text-[10px] md:text-xs tracking-widest uppercase mt-1">{selectedCert.issuer} • {selectedCert.date}</p>
                                </div>
                                <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-3">
                                    {selectedCert.pdf && (
                                        <Link href={selectedCert.pdf} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none text-center justify-center flex items-center gap-2 px-4 py-2 md:py-2.5 bg-[#1a1a1a] hover:bg-[#222] border border-gray-800 text-[var(--color-brand-400)] rounded-full transition-all text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest">
                                            <FileText className="w-4 h-4" /> View PDF
                                        </Link>
                                    )}
                                    <button onClick={() => setSelectedCert(null)} className="p-2 md:p-2.5 bg-[#1a1a1a] border border-gray-800 hover:bg-[#222] rounded-full transition-colors group">
                                        <X className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </button>
                                </div>
                            </div>
                            <div className="relative w-full aspect-auto md:aspect-video flex-1 min-h-[300px] md:min-h-[400px]">
                                <Image
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain bg-black/50"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
