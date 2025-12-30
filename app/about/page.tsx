"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award, Lightbulb } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <div className="border-b bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12">
                    <div className="container px-4 mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
                            About The Finance Club
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            A student-driven initiative at IIM Kashipur, fostering a culture of finance through
                            knowledge-sharing, events, and real-world investment experience.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Home to <span className="font-semibold text-primary">P₹AGATI</span> - IIM Kashipur's student-run investment fund since 2019
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container px-4 mx-auto py-16 space-y-12">
                    {/* About The Finance Club */}
                    <Card className="border-2 hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-8 w-8 text-primary" />
                                <CardTitle className="text-3xl">The Finance Club of IIM Kashipur</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Finance Club of IIM Kashipur is a student-driven initiative dedicated to fostering
                                a culture of finance among students. Established to enhance financial knowledge through
                                various events, activities, workshops, and knowledge-sharing sessions, the club has
                                continuously evolved to meet the changing requirements and skill sets of incoming students.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Over the years, we have adapted our scope to help establish a strong foundation of
                                financial knowledge outside the classroom, preparing students for real-world challenges
                                in the finance industry.
                            </p>
                        </CardContent>
                    </Card>

                    {/* About P₹AGATI */}
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="border-2 hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Target className="h-8 w-8 text-primary" />
                                    <CardTitle className="text-3xl">About P₹AGATI</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In 2019, The Finance Club launched <span className="font-semibold text-primary">P₹AGATI</span>,
                                    IIM Kashipur's student-run investment fund. P₹AGATI is operated by club members as a
                                    professional investment fund, with guidance from faculty in the finance area.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Lightbulb className="h-8 w-8 text-primary" />
                                    <CardTitle className="text-3xl">Our Objective</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The fund's main objective is to provide students with real-life experience of managing
                                    funds by applying academic theories to practice. P₹AGATI serves as an educational tool
                                    to enhance the financial knowledge of both fund managers and investors.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* How P₹AGATI Works */}
                    <Card className="border-2">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingUp className="h-8 w-8 text-primary" />
                                <CardTitle className="text-3xl">How P₹AGATI Works</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                P₹AGATI manages money entrusted by students and alumni of IIM Kashipur, allotting
                                them units of the fund. The Finance Club operates the fund professionally while
                                maintaining its core educational mission.
                            </p>

                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-primary">Knowledge Sharing</h3>
                                    <p className="text-muted-foreground">
                                        Regular sessions to share investment strategies and market insights with the community.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-primary">Monthly Factsheets</h3>
                                    <p className="text-muted-foreground">
                                        Published monthly to highlight fund performance and keep investors informed.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-primary">Real-World Experience</h3>
                                    <p className="text-muted-foreground">
                                        Hands-on fund management experience applying academic theories to practice.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Our Commitment */}
                    <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Award className="h-8 w-8 text-primary" />
                                <CardTitle className="text-3xl">Our Commitment</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Finance Club will always follow its goal to enhance the financial knowledge of
                                students and will continue to utilize P₹AGATI as an educational tool to support and
                                enhance the knowledge of its investors.
                            </p>
                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-primary">Education First</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Using the fund as a learning platform for practical financial education.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-primary">Continuous Evolution</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Adapting to changing market requirements and student skill sets.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-primary">Community Focus</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Building a strong foundation of financial knowledge for all members.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Team Structure */}
                    <Card className="border-2">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-8 w-8 text-primary" />
                                <CardTitle className="text-3xl">Student-Run Excellence</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                P₹AGATI is entirely managed by Finance Club members - students from various batches
                                at IIM Kashipur who work together under faculty guidance to operate the fund professionally
                                while gaining invaluable real-world investment experience.
                            </p>
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                                    <h4 className="font-semibold text-lg mb-2">Fund Managers</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Student members managing the fund with professional discipline and academic rigor
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                                    <h4 className="font-semibold text-lg mb-2">Faculty Guidance</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Expert mentorship from IIM Kashipur's finance faculty members
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                                    <h4 className="font-semibold text-lg mb-2">Investor Community</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Students and alumni of IIM Kashipur who trust and invest in the fund
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}
