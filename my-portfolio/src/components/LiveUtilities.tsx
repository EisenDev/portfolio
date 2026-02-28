"use client";

import React, { useState } from "react";
import { LucideIcon, Server, Globe, Cpu, Code, Target, MapPin, Rocket, Cat, MonitorSmartphone, Key, Network, Smile, Terminal, Search } from "lucide-react";

interface UtilityCardProps {
    category: string;
    categoryIcon: LucideIcon;
    title: string;
    description: React.ReactNode;
    buttonText: string;
    buttonIcon: LucideIcon;
    buttonAction: () => void;
    isExecuting: boolean;
    outputNode?: React.ReactNode;
    colorTheme: "blue" | "orange" | "emerald" | "yellow" | "purple" | "cyan" | "pink" | "red" | "indigo" | "teal";
}

const colorMap = {
    blue: { bg: "rgba(59,130,246,0.1)", borderHover: "hover:border-blue-500", borderDefault: "border-blue-900", text: "text-blue-500", textLight: "text-blue-400", bgLight: "bg-blue-900/30", textOutput: "text-blue-300", btnBorder: "border-blue-500", btnHover: "hover:bg-blue-500 hover:text-white" },
    orange: { bg: "rgba(242,78,30,0.1)", borderHover: "hover:border-orange-500", borderDefault: "border-orange-900", text: "text-orange-500", textLight: "text-orange-400", bgLight: "bg-orange-900/30", textOutput: "text-orange-300", btnBorder: "border-orange-500", btnHover: "hover:bg-orange-500 hover:text-white" },
    emerald: { bg: "rgba(16,185,129,0.1)", borderHover: "hover:border-emerald-500", borderDefault: "border-emerald-900", text: "text-emerald-500", textLight: "text-emerald-400", bgLight: "bg-emerald-900/30", textOutput: "text-emerald-300", btnBorder: "border-emerald-500", btnHover: "hover:bg-emerald-500 hover:text-white" },
    yellow: { bg: "rgba(234,179,8,0.1)", borderHover: "hover:border-yellow-500", borderDefault: "border-yellow-900", text: "text-yellow-500", textLight: "text-yellow-400", bgLight: "bg-yellow-900/30", textOutput: "text-yellow-300", btnBorder: "border-yellow-500", btnHover: "hover:bg-yellow-500 hover:text-white" },
    purple: { bg: "rgba(168,85,247,0.1)", borderHover: "hover:border-purple-500", borderDefault: "border-purple-900", text: "text-purple-500", textLight: "text-purple-400", bgLight: "bg-purple-900/30", textOutput: "text-purple-300", btnBorder: "border-purple-500", btnHover: "hover:bg-purple-500 hover:text-white" },
    cyan: { bg: "rgba(6,182,212,0.1)", borderHover: "hover:border-cyan-500", borderDefault: "border-cyan-900", text: "text-cyan-500", textLight: "text-cyan-400", bgLight: "bg-cyan-900/30", textOutput: "text-cyan-300", btnBorder: "border-cyan-500", btnHover: "hover:bg-cyan-500 hover:text-white" },
    pink: { bg: "rgba(236,72,153,0.1)", borderHover: "hover:border-pink-500", borderDefault: "border-pink-900", text: "text-pink-500", textLight: "text-pink-400", bgLight: "bg-pink-900/30", textOutput: "text-pink-300", btnBorder: "border-pink-500", btnHover: "hover:bg-pink-500 hover:text-white" },
    red: { bg: "rgba(239,68,68,0.1)", borderHover: "hover:border-red-500", borderDefault: "border-red-900", text: "text-red-500", textLight: "text-red-400", bgLight: "bg-red-900/30", textOutput: "text-red-300", btnBorder: "border-red-500", btnHover: "hover:bg-red-500 hover:text-white" },
    indigo: { bg: "rgba(99,102,241,0.1)", borderHover: "hover:border-indigo-500", borderDefault: "border-indigo-900", text: "text-indigo-500", textLight: "text-indigo-400", bgLight: "bg-indigo-900/30", textOutput: "text-indigo-300", btnBorder: "border-indigo-500", btnHover: "hover:bg-indigo-500 hover:text-white" },
    teal: { bg: "rgba(20,184,166,0.1)", borderHover: "hover:border-teal-500", borderDefault: "border-teal-900", text: "text-teal-500", textLight: "text-teal-400", bgLight: "bg-teal-900/30", textOutput: "text-teal-300", btnBorder: "border-teal-500", btnHover: "hover:bg-teal-500 hover:text-white" },
};

function UtilityCard({ category, categoryIcon: CategoryIcon, title, description, buttonText, buttonIcon: ButtonIcon, buttonAction, isExecuting, outputNode, colorTheme }: UtilityCardProps) {
    const theme = colorMap[colorTheme];

    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom right, var(--color-bg-primary), ${theme.bg})` }}
            className={`border ${theme.borderDefault} p-8 rounded-2xl flex flex-col justify-between group ${theme.borderHover} transition-colors min-h-[300px]`}>
            <div className="flex flex-col space-y-4 mb-6">
                <span className={`text-xs font-mono font-bold tracking-widest ${theme.text} uppercase flex items-center gap-2`}>
                    <CategoryIcon className="w-3 h-3" /> {category}
                </span>
                <h5 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                    {title}
                </h5>
                <div className="text-sm text-[var(--color-text-secondary)] min-h-[40px] flex-grow">
                    {outputNode ? (
                        <div className={`font-mono tracking-tight text-xs ${theme.bgLight} p-3 rounded mt-2 border border-transparent ${theme.borderHover} transition-all`}>
                            <span className={theme.textOutput}>{outputNode}</span>
                        </div>
                    ) : description}
                </div>
            </div>
            <button
                onClick={buttonAction}
                disabled={isExecuting}
                className={`w-max px-6 py-2.5 rounded-full border ${theme.btnBorder} ${theme.textLight} ${theme.btnHover} transition-colors text-sm font-bold shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {isExecuting ? <Cpu className="w-4 h-4 animate-spin" /> : <ButtonIcon className="w-4 h-4" />}
                {isExecuting ? "EXECUTING..." : buttonText}
            </button>
        </div>
    );
}

// 1. GitHub Zen
export function GitHubZenUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="RESTful API" categoryIcon={Server} title="GitHub Zen Philosophy" colorTheme="blue"
            description={<>A live <code className="text-blue-300 bg-blue-900/30 px-1 py-0.5 rounded text-xs ml-1">fetch()</code> request to the official <a href="https://api.github.com/zen" target="_blank" className="border-b border-blue-900 hover:text-blue-300">api.github.com/zen</a> endpoint.</>}
            buttonText="EXECUTE REQUEST" buttonIcon={Code} isExecuting={loading} outputNode={output ? `"${output}"` : null}
            buttonAction={async () => {
                setLoading(true);
                try {
                    const res = await fetch("https://api.github.com/zen");
                    setOutput(await res.text());
                } catch { setOutput("Network Error."); }
                setLoading(false);
            }}
        />
    );
}

// 2. IP Geolocation
export function IPGeolocationUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Network Resolution" categoryIcon={Globe} title="Approximate IP Geolocation" colorTheme="orange"
            description={<>Resolves public IP location via <code className="text-orange-300 bg-orange-900/30 px-1 py-0.5 rounded text-xs">ipapi.co</code>. (Note: IP-based location points to your ISP's nearest hub, not your exact physical house).</>}
            buttonText="RESOLVE IP" buttonIcon={Target} isExecuting={loading} outputNode={output}
            buttonAction={async () => {
                setLoading(true);
                try {
                    const res = await fetch("https://ipapi.co/json/");
                    const data = await res.json();
                    if (data.city) {
                        setOutput(`[IP: ${data.ip}] ISP Node Location: ${data.city}, ${data.region}, ${data.country_name}`);
                    } else setOutput("Rate Limited or Error.");
                } catch { setOutput("Network Error."); }
                setLoading(false);
            }}
        />
    );
}

// 3. Hardware Geolocation
export function HardwareGeolocationUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Browser Sensor API" categoryIcon={MapPin} title="Accurate GPS Coordinates" colorTheme="emerald"
            description={<>Requests exact latitude/longitude from your device's hardware sensors via the browser's native <code className="text-emerald-300 bg-emerald-900/30 px-1 py-0.5 rounded text-xs">navigator.geolocation</code> API.</>}
            buttonText="PROMPT GPS SENSOR" buttonIcon={Target} isExecuting={loading} outputNode={output}
            buttonAction={() => {
                setLoading(true);
                if (!navigator.geolocation) {
                    setOutput("Geolocation is not supported by your browser.");
                    setLoading(false);
                    return;
                }
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        setOutput(`Latitude: ${pos.coords.latitude.toFixed(6)}, Longitude: ${pos.coords.longitude.toFixed(6)} (Accuracy: ${pos.coords.accuracy}m)`);
                        setLoading(false);
                    },
                    (err) => {
                        setOutput(`Error: ${err.message}`);
                        setLoading(false);
                    },
                    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                );
            }}
        />
    );
}

// 4. Space Station Tracker (Replaces Crypto)
export function SpaceStationUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Orbital Telemetry" categoryIcon={Rocket} title="ISS Tracker" colorTheme="yellow"
            description={<>Fetches the real-time latitude, longitude, and velocity of the International Space Station via <code className="text-yellow-300 bg-yellow-900/30 px-1 py-0.5 rounded text-xs">wheretheiss.at</code>.</>}
            buttonText="ACQUIRE LOCK" buttonIcon={Target} isExecuting={loading} outputNode={output}
            buttonAction={async () => {
                setLoading(true);
                try {
                    const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
                    const data = await res.json();
                    if (data.latitude) {
                        setOutput(`Lat: ${data.latitude.toFixed(4)}, Lng: ${data.longitude.toFixed(4)}\nVelocity: ${Math.round(data.velocity)} km/h\nAltitude: ${Math.round(data.altitude)} km`);
                    } else {
                        setOutput("API Rate Limited.");
                    }
                } catch { setOutput("Network Error."); }
                setLoading(false);
            }}
        />
    );
}

// 5. Random Cat Fact
export function CatFactUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Data Aggregation" categoryIcon={Cat} title="Feline Intelligence" colorTheme="purple"
            description={<>Pings a lightweight RESTful API at <code className="text-purple-300 bg-purple-900/30 px-1 py-0.5 rounded text-xs">catfact.ninja</code> to retrieve a random, verified cat fact.</>}
            buttonText="GENERATE FACT" buttonIcon={Code} isExecuting={loading} outputNode={output ? `> ${output}` : null}
            buttonAction={async () => {
                setLoading(true);
                try {
                    const res = await fetch("https://catfact.ninja/fact");
                    const data = await res.json();
                    setOutput(data.fact);
                } catch { setOutput("Network Error."); }
                setLoading(false);
            }}
        />
    );
}

// 6. User Agent Parser
export function UserAgentUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Browser Environment" categoryIcon={Terminal} title="Client Signature" colorTheme="cyan"
            description={<>Reads and breaks down the active <code className="text-cyan-300 bg-cyan-900/30 px-1 py-0.5 rounded text-xs">navigator.userAgent</code> string passing data tracking footprints directly from execution.</>}
            buttonText="ANALYZE SIGNATURE" buttonIcon={MonitorSmartphone} isExecuting={loading} outputNode={output}
            buttonAction={() => {
                setLoading(true);
                setTimeout(() => {
                    setOutput(navigator.userAgent);
                    setLoading(false);
                }, 400); // slight simulated delay
            }}
        />
    );
}

// 7. Screen Metrics
export function ScreenMetricsUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Device Introspection" categoryIcon={MonitorSmartphone} title="Viewport Telemetry" colorTheme="pink"
            description={<>Interrogates the DOM <code className="text-pink-300 bg-pink-900/30 px-1 py-0.5 rounded text-xs">window.screen</code> object to report exact physical rendering metrics and color depth.</>}
            buttonText="RUN METRICS" buttonIcon={Target} isExecuting={loading} outputNode={output}
            buttonAction={() => {
                setLoading(true);
                setTimeout(() => {
                    if (typeof window !== "undefined") {
                        setOutput(`Resolution: ${window.screen.width}x${window.screen.height} \nColor Depth: ${window.screen.colorDepth}-bit \nPixel Ratio: ${window.devicePixelRatio}x`);
                    }
                    setLoading(false);
                }, 400);
            }}
        />
    );
}

// 8. Random Joke AI
export function RandomJokeUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="External Microservice" categoryIcon={Smile} title="Algorithmic Humor" colorTheme="red"
            description={<>Executes a GET request to the <code className="text-red-300 bg-red-900/30 px-1 py-0.5 rounded text-xs">official-joke-api</code> appspot backend to parse an algorithmic punchline.</>}
            buttonText="INVOKE HUMOR" buttonIcon={Code} isExecuting={loading} outputNode={output}
            buttonAction={async () => {
                setLoading(true);
                try {
                    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
                    const data = await res.json();
                    setOutput(`Q: ${data.setup}\n\nA: ${data.punchline}`);
                } catch { setOutput("Network Error."); }
                setLoading(false);
            }}
        />
    );
}

// 9. Battery Telemetry (Replaces Crypto Gen)
export function BatteryStatusUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Hardware Telemetry" categoryIcon={Cpu} title="Battery Status API" colorTheme="indigo"
            description={<>Queries your device's native <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">navigator.getBattery()</code> API to retrieve real-time power levels and charging status.</>}
            buttonText="CHECK STATUS" buttonIcon={Cpu} isExecuting={loading} outputNode={output}
            buttonAction={async () => {
                setLoading(true);
                try {
                    if ('getBattery' in navigator) {
                        const battery: any = await (navigator as any).getBattery();
                        const level = Math.round(battery.level * 100);
                        const charging = battery.charging ? "Plugged In" : "Discharging";

                        let timeRemaining = "";
                        if (battery.charging && battery.chargingTime !== Infinity) {
                            timeRemaining = `\nTime until full: ${battery.chargingTime}s`;
                        } else if (!battery.charging && battery.dischargingTime !== Infinity) {
                            timeRemaining = `\nTime remaining: ${battery.dischargingTime}s`;
                        }

                        setOutput(`Power Level: ${level}%\nStatus: ${charging}${timeRemaining}`);
                    } else {
                        setOutput("Battery API not supported on this browser.");
                    }
                } catch {
                    setOutput("Unable to access battery status.");
                }
                setLoading(false);
            }}
        />
    );
}

// 10. DNS Lookup (Replaces Chronology)
export function DNSLookupUtility() {
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    return (
        <UtilityCard
            category="Network Protocol" categoryIcon={Network} title="DoH Resolver" colorTheme="teal"
            description={<>Performs a secure DNS-over-HTTPS (DoH) resolution query against <code className="text-teal-300 bg-teal-900/30 px-1 py-0.5 rounded text-xs">dns.google</code> to resolve records.</>}
            buttonText="RESOLVE GITHUB.COM" buttonIcon={Search} isExecuting={loading} outputNode={output}
            buttonAction={async () => {
                setLoading(true);
                try {
                    const res = await fetch("https://dns.google/resolve?name=github.com&type=A");
                    const data = await res.json();
                    if (data.Answer) {
                        const ips = data.Answer.map((a: any) => a.data).join(", ");
                        setOutput(`Host: github.com\nA Records:\n${ips}`);
                    } else {
                        setOutput("No records found or API error.");
                    }
                } catch { setOutput("Network Error."); }
                setLoading(false);
            }}
        />
    );
}
