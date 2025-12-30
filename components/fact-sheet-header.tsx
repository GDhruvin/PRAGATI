import Image from "next/image";
import { Triangle } from "lucide-react";

export function FactSheetHeader() {
    return (
        <div className="w-full bg-card relative overflow-hidden border-b border-border">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />

            <div className="container mx-auto px-4 py-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left Logo */}
                    <div className="flex-shrink-0">
                        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-primary bg-popover overflow-hidden shadow-lg">
                            <Image
                                src="/finance-club-logo.jpg"
                                alt="The Finance Club IIM Kashipur"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-foreground">

                        {/* Title Section */}
                        <div className="text-center md:text-left">
                            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-foreground">
                                P<span className="inline-flex items-center justify-center">₹</span>AGATI
                            </h1>
                            <p className="text-lg md:text-xl font-semibold tracking-wide mt-1 text-muted-foreground">
                                IIM Kashipur
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1 text-foreground">
                                Student Managed Investment Fund
                            </h2>
                        </div>

                        {/* NAV Section */}
                        <div className="flex items-center gap-6 bg-popover p-4 rounded-xl backdrop-blur-sm shadow-sm border border-border">
                            <div className="text-center">
                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                                    NAV Per Unit
                                </p>
                                <div className="bg-card px-6 py-2 rounded-lg border-l-4 border-accent">
                                    <span className="text-5xl font-bold text-accent tracking-tight">
                                        ₹22.10
                                    </span>
                                </div>
                                <p className="text-xs font-bold text-muted-foreground mt-1">
                                    as on 31st Oct 2025
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-16 w-px bg-border hidden md:block" />

                            {/* Last Month Stat */}
                            <div className="flex flex-col items-center justify-center min-w-[100px]">
                                <Triangle className="h-8 w-8 text-success fill-success mb-1" />
                                <span className="text-3xl font-bold text-foreground">21.16</span>
                                <span className="text-xs font-bold text-muted-foreground">Last Month</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Logo */}
                    <div className="flex-shrink-0">
                        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-primary bg-popover overflow-hidden shadow-lg">
                            <Image
                                src="/pragati-logo.jpg"
                                alt="Pragati Logo"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
