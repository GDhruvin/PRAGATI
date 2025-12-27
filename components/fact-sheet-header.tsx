import Image from "next/image";
import { Triangle } from "lucide-react";

export function FactSheetHeader() {
    return (
        <div className="w-full bg-[#dbeafe] relative overflow-hidden">
            {/* Background Pattern - Optional, can be added if needed, using a simple gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 pointer-events-none" />

            <div className="container mx-auto px-4 py-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left Logo */}
                    <div className="flex-shrink-0">
                        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-[#1e3a5f] bg-white overflow-hidden shadow-lg">
                            <Image
                                src="/finance-club-logo.jpg"
                                alt="The Finance Club IIM Kashipur"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-[#1e3a5f]">

                        {/* Title Section */}
                        <div className="text-center md:text-left">
                            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
                                P<span className="inline-flex items-center justify-center">₹</span>AGATI
                            </h1>
                            <p className="text-lg md:text-xl font-semibold tracking-wide mt-1">
                                IIM Kashipur
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">
                                Student Managed Investment Fund
                            </h2>
                        </div>

                        {/* NAV Section */}
                        <div className="flex items-center gap-6 bg-white/50 p-4 rounded-xl backdrop-blur-sm shadow-sm border border-white/20">
                            <div className="text-center">
                                <p className="text-sm font-bold text-[#1e3a5f]/80 uppercase tracking-wider mb-1">
                                    NAV Per Unit
                                </p>
                                <div className="bg-[#e2e8f0] px-6 py-2 rounded-lg border-l-4 border-[#1e3a5f]">
                                    <span className="text-5xl font-bold text-[#1e3a5f] tracking-tight">
                                        ₹22.10
                                    </span>
                                </div>
                                <p className="text-xs font-bold text-[#1e3a5f] mt-1">
                                    as on 31st Oct 2025
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-16 w-px bg-[#1e3a5f]/20 hidden md:block" />

                            {/* Last Month Stat */}
                            <div className="flex flex-col items-center justify-center min-w-[100px]">
                                <Triangle className="h-8 w-8 text-green-600 fill-green-600 mb-1" />
                                <span className="text-3xl font-bold text-[#1e3a5f]">21.16</span>
                                <span className="text-xs font-bold text-[#1e3a5f]/70">Last Month</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Logo */}
                    <div className="flex-shrink-0">
                        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-[#1e3a5f] bg-white overflow-hidden shadow-lg">
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
