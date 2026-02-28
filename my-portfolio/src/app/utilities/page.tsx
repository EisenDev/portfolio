import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
    GitHubZenUtility,
    IPGeolocationUtility,
    HardwareGeolocationUtility,
    SpaceStationUtility,
    CatFactUtility,
    UserAgentUtility,
    ScreenMetricsUtility,
    RandomJokeUtility,
    BatteryStatusUtility,
    DNSLookupUtility
} from '@/components/LiveUtilities';

export default function UtilitiesPage() {
    return (
        <main className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-32 relative overflow-hidden">
            {/* Subtle light leak backgrounds */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <Link href="/#playground" className="group flex items-center gap-3 text-sm font-mono font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-16 max-w-max">
                    <div className="p-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded group-hover:border-[var(--color-text-primary)] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    CD .. / RETURN
                </Link>

                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tight mb-6">
                        Live Utilities & APIs
                    </h1>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl font-light leading-relaxed">
                        A 10-module collection of active diagnostic tools, hardware sensor APIs, cryptographically secure generators, and external data streams executing in real-time.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <HardwareGeolocationUtility />
                    <IPGeolocationUtility />
                    <SpaceStationUtility />

                    <BatteryStatusUtility />
                    <UserAgentUtility />
                    <ScreenMetricsUtility />

                    <DNSLookupUtility />
                    <GitHubZenUtility />
                    <RandomJokeUtility />

                    <CatFactUtility />
                </div>
            </div>
        </main>
    );
}
