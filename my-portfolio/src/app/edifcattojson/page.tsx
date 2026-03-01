"use client";

import React, { useState, useEffect } from "react";
import { parseEDIFACT, EDIFACTMessage } from "@/utils/edifactParser";
import { Terminal, Code, FileJson, Copy, Check, Info } from "lucide-react";

export default function EdifactPage() {
    const defaultEdifact = "UNH+1+ORDERS:D:96A:UN:EAN008'BGM+220+PO-2024-001+9'LIN+1++4006381333931:SRV'QTY+21:50'PRI+AAA:12.50'";
    const [input, setInput] = useState(defaultEdifact);
    const [output, setOutput] = useState<EDIFACTMessage | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        handleParse();
    }, []);

    const handleParse = () => {
        try {
            const parsed = parseEDIFACT(input);
            setOutput(parsed);
        } catch (error) {
            console.error("Parsing failed", error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(output, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-500/10 rounded-lg">
                            <Terminal className="text-indigo-500 w-6 h-6" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight">EDIFACT <span className="text-indigo-500">Parser</span></h1>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-lg">
                        A premium utility for converting EDIFACT messages into structured JSON.
                    </p>
                </div>

                {/* Input Section */}
                <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                            <Code className="w-3 h-3" /> Input EDIFACT Message
                        </label>
                        <button
                            onClick={handleParse}
                            className="text-xs font-bold px-4 py-1.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20"
                        >
                            PARSE MESSAGE
                        </button>
                    </div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-32 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none transition-all"
                        placeholder="Paste your EDIFACT message here..."
                    />
                </div>

                {/* Output Section */}
                {output && (
                    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-2xl p-6 shadow-sm space-y-4 relative group">
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                                <FileJson className="w-3 h-3" /> JSON Output
                            </label>
                            <button
                                onClick={copyToClipboard}
                                className="p-1.5 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors text-[var(--color-text-secondary)] hover:text-emerald-500"
                                title="Copy JSON"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                        <pre className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl p-6 font-mono text-sm overflow-x-auto text-emerald-500/90 leading-relaxed shadow-inner">
                            {JSON.stringify(output, null, 2)}
                        </pre>

                        <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 mt-4">
                            <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                                This parser handles standard segments like <code className="text-blue-500">UNH</code>, <code className="text-blue-500">BGM</code>, <code className="text-blue-500">LIN</code>, <code className="text-blue-500">QTY</code>, and <code className="text-blue-500">PRI</code>.
                                Values are typed correctly: quantities and prices are resolved as numbers.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
