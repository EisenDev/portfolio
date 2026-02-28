"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LiveStats() {
    const pathname = usePathname();
    const [viewers, setViewers] = useState(1);
    const [hearts, setHearts] = useState(0);
    const [hasHearted, setHasHearted] = useState(false);

    useEffect(() => {
        const userHearted = localStorage.getItem('user_has_hearted');
        if (userHearted === 'true') {
            setHasHearted(true);
        }

        const fetchStats = async () => {
            try {
                const res = await fetch('/api/stats');
                const data = await res.json();
                setHearts(data.hearts);
                setViewers(data.viewers);
            } catch (e) {
                console.error("Failed to fetch live stats", e);
            }
        };

        // Try hitting data once right away
        fetchStats();

        // Setup polling every 5s
        const interval = setInterval(fetchStats, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleHeartClick = async () => {
        if (!hasHearted) {
            setHasHearted(true);
            setHearts(prev => prev + 1); // Optimistic UI update
            localStorage.setItem('user_has_hearted', 'true');

            try {
                await fetch('/api/stats', { method: 'POST' });
            } catch (e) {
                console.error("Failed to sync heart", e);
            }
        }
    };

    if (pathname === '/project/lumecore' || pathname === '/project/omni-hand' || pathname === '/project/zeraynce' || pathname === '/logs' || pathname === '/dossier') {
        return null;
    }

    return (
        <div className="absolute top-24 right-6 lg:right-12 z-[50] flex items-center gap-3">
            {/* Live Viewers */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:flex items-center gap-2 bg-[#121214]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-lg"
            >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-white flex items-center gap-1">
                    <Users className="w-3 h-3 text-[var(--color-text-muted)]" />
                    {viewers} <span className="text-[var(--color-text-muted)] font-normal">Live</span>
                </span>
            </motion.div>

            {/* Heart Counter */}
            <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleHeartClick}
                className={`flex items-center gap-2 bg-[#121214]/80 backdrop-blur-md border px-3 py-1.5 rounded-full shadow-lg transition-colors ${hasHearted ? "border-red-500/50" : "border-white/10 hover:border-red-500/30 cursor-pointer"
                    }`}
                disabled={hasHearted}
            >
                <Heart className={`w-4 h-4 transition-colors ${hasHearted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                <span className={`font-mono text-xs font-bold ${hasHearted ? "text-white" : "text-gray-400"}`}>
                    {hearts > 0 ? hearts : "Like"}
                </span>
            </motion.button>
        </div>
    );
}
