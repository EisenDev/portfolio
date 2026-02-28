"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Settings, Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'system' | 'light' | 'dark';

export default function FloatingPreferences() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<Theme>('system');
    const menuRef = useRef<HTMLDivElement>(null);

    // Load theme from localStorage on initial render
    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
        if (savedTheme && ['system', 'light', 'dark'].includes(savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);

    // Apply theme when state changes
    useEffect(() => {
        const root = document.documentElement;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let activeTheme = theme;
        if (theme === 'system') {
            activeTheme = prefersDark ? 'dark' : 'light';
        }

        if (activeTheme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
            root.classList.remove('light');
        }

        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="fixed bottom-6 right-6 z-50" ref={menuRef}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-xl shadow-2xl p-2 w-48 flex flex-col gap-1 overflow-hidden"
                    >
                        <div className="px-3 py-2 text-xs font-mono font-bold tracking-widest text-[var(--color-text-secondary)] border-b border-[var(--color-border-subtle)] mb-1 uppercase">
                            Preferences
                        </div>

                        <button
                            onClick={() => setTheme('light')}
                            className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${theme === 'light' ? 'bg-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-medium' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border-subtle)]/[0.5]'}`}
                        >
                            <Sun className="w-4 h-4" /> Light Mode
                        </button>

                        <button
                            onClick={() => setTheme('dark')}
                            className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${theme === 'dark' ? 'bg-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-medium' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border-subtle)]/[0.5]'}`}
                        >
                            <Moon className="w-4 h-4" /> Dark Mode
                        </button>

                        <button
                            onClick={() => setTheme('system')}
                            className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${theme === 'system' ? 'bg-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-medium' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border-subtle)]/[0.5]'}`}
                        >
                            <Monitor className="w-4 h-4" /> System Mode
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full flex items-center justify-center border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[#a855f7]/50 shadow-lg transition-all ${isOpen ? 'ring-2 ring-[#a855f7]/50 text-[var(--color-text-primary)]' : ''}`}
                aria-label="Toggle Preferences"
            >
                <Settings className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
        </div>
    );
}
