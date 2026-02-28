"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        const sectionIds = ["command-center", "tech-stack", "blueprint", "playground", "manifesto", "uplink"];
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const navLinks = [
        { name: "Command Center", href: "/#command-center" },
        { name: "Tech Stack", href: "/#tech-stack" },
        { name: "Blueprint", href: "/#blueprint" },
        { name: "Playground", href: "/#playground" },
        { name: "Manifesto", href: "/#manifesto" },
        { name: "Uplink", href: "/#uplink" }
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border-subtle)] py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 group relative">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300">
                            <Image src="/AE-logo.png" alt="Arjay Escabas App Logo" fill className="object-cover" />
                        </div>
                        <span className="text-[var(--color-text-primary)] font-bold tracking-widest text-xl hidden sm:block">
                            ARJAY <span className="text-[var(--color-brand-500)]">ESCABAS</span>
                        </span>
                        <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--color-brand-500)] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-[var(--color-text-secondary)]">
                        {navLinks.map((link) => {
                            const linkId = link.href.replace('/#', '');
                            const isActive = activeSection === linkId;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`transition-all duration-300 ${isActive ? 'text-[var(--color-brand-500)] font-bold' : 'hover:text-[var(--color-text-primary)]'}`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </div>

                    <button
                        className="md:hidden text-[var(--color-text-primary)] hover:text-[var(--color-brand-500)] transition-colors"
                        onClick={() => setMobileOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[60] bg-[var(--color-bg-primary)] flex flex-col">
                    <div className="flex justify-between items-center px-6 py-6 border-b border-[var(--color-border-subtle)]">
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                                <Image src="/AE-logo.png" alt="Arjay Escabas App Logo" fill className="object-cover" />
                            </div>
                            <span className="text-[var(--color-text-primary)] font-bold tracking-widest text-xl">
                                ARJAY <span className="text-[var(--color-brand-500)]">ESCABAS</span>
                            </span>
                        </div>
                        <button
                            className="text-[var(--color-text-primary)] hover:text-red-500 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 p-8 text-2xl font-light text-[var(--color-text-secondary)]">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="hover:text-[var(--color-text-primary)] hover:translate-x-2 transition-all">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
