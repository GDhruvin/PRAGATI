"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Rocket, TrendingUp, Users2, Award } from "lucide-react";

export default function StoryPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <div className="border-b bg-gradient-to-br from-primary/10 via-background to-primary/5 py-8">
                    <div className="container px-4 mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
                            Our Story
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            The journey of P₹AGATI - from an idea to a thriving student-managed investment fund
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="container px-4 mx-auto py-16">
                    <div className="space-y-12">
                        {/* Genesis */}
                        <Card className="border-2 hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Rocket className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl mb-2">The Genesis (2019)</CardTitle>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>August 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    PRAGATI was born from a vision to bridge the gap between theoretical finance
                                    education and real-world investment management. A group of passionate students
                                    at IIM Kashipur, under the Finance Club, came together with a bold idea:
                                    create a student-managed fund that would provide hands-on experience in
                                    portfolio management.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The name "PRAGATI" (प्रगति) means "progress" in Hindi, reflecting our
                                    commitment to continuous growth, learning, and advancement in the field of
                                    investment management.
                                </p>
                            </CardContent>
                        </Card>

                        {/* First Steps */}
                        <Card className="border-2 hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <TrendingUp className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl mb-2">First Investments</CardTitle>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>October 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    On October 1st, 2019, PRAGATI made its first investment, marking the beginning
                                    of our journey in the Indian equity markets. The initial portfolio was carefully
                                    constructed with a focus on large-cap and mid-cap stocks across diverse sectors.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our investment philosophy was clear from day one: rigorous fundamental analysis,
                                    disciplined risk management, and a long-term perspective on wealth creation.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Challenges & Growth */}
                        <Card className="border-2 hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Award className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl mb-2">Navigating Challenges</CardTitle>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>2020-2023</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Like all investors, we faced our share of challenges. The COVID-19 pandemic
                                    in 2020 tested our resolve and risk management strategies. However, these
                                    challenges became valuable learning experiences, teaching us about market
                                    volatility, crisis management, and the importance of staying disciplined.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Through market ups and downs, we remained committed to our investment process,
                                    continuously refining our strategies and learning from both successes and setbacks.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Team Evolution */}
                        <Card className="border-2 hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Users2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-3xl mb-2">Building a Legacy</CardTitle>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>2019-Present</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Over the years, PRAGATI has evolved from a small group of enthusiasts to a
                                    well-structured team of fund managers spanning multiple batches. Each new
                                    batch brings fresh perspectives while learning from the experiences of their
                                    predecessors.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Today, we manage a diversified portfolio of 36+ holdings across various sectors,
                                    with a track record that demonstrates both our learning journey and our commitment
                                    to excellence in investment management.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Looking Forward */}
                        <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
                            <CardHeader>
                                <CardTitle className="text-3xl text-center mb-4">Looking Forward</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                                    As we continue our journey, PRAGATI remains committed to its founding principles:
                                    learning through practice, maintaining the highest standards of integrity, and
                                    creating value through disciplined investment management. We're not just managing
                                    a portfolio; we're building the next generation of investment professionals.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
