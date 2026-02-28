import { NextResponse } from 'next/server';

// In-memory simulation of a persistence layer for demonstration purposes
let globalHearts = 142;
let globalViewers = 18;

// Simulate organic viewer oscillation over time
setInterval(() => {
    const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
    globalViewers = Math.max(12, Math.min(45, globalViewers + change));
}, 5000);

export async function GET() {
    return NextResponse.json({ hearts: globalHearts, viewers: globalViewers });
}

export async function POST() {
    globalHearts += 1;
    return NextResponse.json({ hearts: globalHearts, viewers: globalViewers });
}
