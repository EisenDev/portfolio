import Nav from "@/components/Nav";
import CommandCenter from "@/components/CommandCenter";
import TechStack from "@/components/TechStack";
import Blueprint from "@/components/Blueprint";
import Playground from "@/components/Playground";
import Manifesto from "@/components/Manifesto";
import Uplink from "@/components/Uplink";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] pt-16 md:pt-0 scroll-smooth">
            <Nav />
            <CommandCenter />
            <TechStack />
            <Blueprint />
            <Playground />
            <Manifesto />
            <Uplink />
        </main>
    );
}
