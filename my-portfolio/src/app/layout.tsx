import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingPreferences from "@/components/FloatingPreferences";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arjayescabas.me"),
    title: "Arjay Escabas - Systems Architect",
    description: "Prompt-Driven Development and Heuristic Engineering",
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-brand-500 selection:text-white`}>
                {children}
                <FloatingPreferences />
            </body>
        </html>
    );
}
