"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        fundSuggestion: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    toast.success("Message sent successfully!", {
                        description: "We'll get back to you as soon as possible.",
                    });
                    setSubmitted(true);

                    // Reset form after 3 seconds
                    setTimeout(() => {
                        setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            message: "",
                            fundSuggestion: "",
                        });
                        setSubmitted(false);
                    }, 3000);
                } else {
                    toast.error("Failed to send message", {
                        description: data.error || "Please try again later.",
                    });
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Network error", {
                    description: "Please check your connection and try again.",
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Toaster position="top-right" richColors />
            <Navbar />

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <div className="border-b bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Have questions about PRAGATI Fund? We'd love to hear from you.
                                Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container px-4 mx-auto py-12">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>
                                        Reach out to us through any of these channels
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-sm text-muted-foreground">
                                                contact@pragati.fund
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-sm text-muted-foreground">
                                                +91 1234567890
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p className="text-sm text-muted-foreground">
                                                IIM Kashipur
                                                <br />
                                                Bazpur, Uttarakhand
                                                <br />
                                                India
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you shortly
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {submitted ? (
                                        <div className="flex flex-col items-center justify-center py-12 text-center">
                                            <CheckCircle2 className="h-16 w-16 text-green-600 mb-4" />
                                            <h3 className="text-2xl font-bold mb-2">
                                                Thank You!
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Your message has been sent successfully. We'll get back
                                                to you soon.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Name Fields */}
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">
                                                        First Name <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="firstName"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        placeholder="John"
                                                        className={errors.firstName ? "border-red-500" : ""}
                                                    />
                                                    {errors.firstName && (
                                                        <p className="text-sm text-red-500">
                                                            {errors.firstName}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">
                                                        Last Name <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="lastName"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        placeholder="Doe"
                                                        className={errors.lastName ? "border-red-500" : ""}
                                                    />
                                                    {errors.lastName && (
                                                        <p className="text-sm text-red-500">
                                                            {errors.lastName}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Email Field */}
                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    Email Address <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john.doe@example.com"
                                                    className={errors.email ? "border-red-500" : ""}
                                                />
                                                {errors.email && (
                                                    <p className="text-sm text-red-500">{errors.email}</p>
                                                )}
                                            </div>

                                            {/* Phone Field */}
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">
                                                    Phone Number <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="9876543210"
                                                    className={errors.phone ? "border-red-500" : ""}
                                                />
                                                {errors.phone && (
                                                    <p className="text-sm text-red-500">{errors.phone}</p>
                                                )}
                                            </div>

                                            {/* Message Field */}
                                            <div className="space-y-2">
                                                <Label htmlFor="message">
                                                    Message <span className="text-red-500">*</span>
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us how we can help you..."
                                                    rows={5}
                                                    className={errors.message ? "border-red-500" : ""}
                                                />
                                                {errors.message && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Fund Suggestion Field (Optional) */}
                                            <div className="space-y-2">
                                                <Label htmlFor="fundSuggestion">
                                                    Fund Suggestion{" "}
                                                    <span className="text-muted-foreground text-sm">
                                                        (Optional)
                                                    </span>
                                                </Label>
                                                <Textarea
                                                    id="fundSuggestion"
                                                    name="fundSuggestion"
                                                    value={formData.fundSuggestion}
                                                    onChange={handleChange}
                                                    placeholder="Share your ideas or suggestions for fund improvements..."
                                                    rows={3}
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full sm:w-auto"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
