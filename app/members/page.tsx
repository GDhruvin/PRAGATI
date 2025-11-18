"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const clubMembers = [
  // ... your full 15 members array remains exactly the same ...
  {
    name: "Aarav Sharma",
    role: "Portfolio Manager",
    batch: "Batch 2021",
    location: "Mumbai",
    email: "aarav@financeclub.in",
    phone: "+91 98765 43210",
    avatar: "https://i.pravatar.cc/150?img=1",
    initials: "AS",
  },
  {
    name: "Priya Mehta",
    role: "Head of Research",
    batch: "Batch 2020",
    location: "Delhi",
    email: "priya@financeclub.in",
    phone: "+91 87654 32109",
    avatar: "https://i.pravatar.cc/150?img=5",
    initials: "PM",
  },
  {
    name: "Rohan Kapoor",
    role: "Equity Analyst",
    batch: "Batch 2022",
    location: "Bangalore",
    email: "rohan@financeclub.in",
    phone: "+91 76543 21098",
    avatar: "https://i.pravatar.cc/150?img=12",
    initials: "RK",
  },
  {
    name: "Ananya Singh",
    role: "Risk Manager",
    batch: "Batch 2021",
    location: "Pune",
    email: "ananya@financeclub.in",
    phone: "+91 65432 10987",
    avatar: "https://i.pravatar.cc/150?img=8",
    initials: "AS",
  },
  {
    name: "Vikram Desai",
    role: "Quantitative Analyst",
    batch: "Batch 2023",
    location: "Hyderabad",
    email: "vikram@financeclub.in",
    phone: "+91 54321 09876",
    avatar: "https://i.pravatar.cc/150?img=15",
    initials: "VD",
  },
  {
    name: "Isha Patel",
    role: "Macro Strategist",
    batch: "Batch 2022",
    location: "Chennai",
    email: "isha@financeclub.in",
    phone: "+91 43210 98765",
    avatar: "https://i.pravatar.cc/150?img=3",
    initials: "IP",
  },
  {
    name: "Arjun Verma",
    role: "Fixed Income Specialist",
    batch: "Batch 2021",
    location: "Mumbai",
    email: "arjun@financeclub.in",
    phone: "+91 91234 56789",
    avatar: "https://i.pravatar.cc/150?img=16",
    initials: "AV",
  },
  {
    name: "Neha Gupta",
    role: "Derivatives Trader",
    batch: "Batch 2023",
    location: "Delhi",
    email: "neha@financeclub.in",
    phone: "+91 82345 67890",
    avatar: "https://i.pravatar.cc/150?img=32",
    initials: "NG",
  },
  {
    name: "Siddharth Jain",
    role: "ESG Analyst",
    batch: "Batch 2022",
    location: "Ahmedabad",
    email: "siddharth@financeclub.in",
    phone: "+91 73456 78901",
    avatar: "https://i.pravatar.cc/150?img=28",
    initials: "SJ",
  },
  {
    name: "Kavya Reddy",
    role: "Behavioral Finance Lead",
    batch: "Batch 2021",
    location: "Hyderabad",
    email: "kavya@financeclub.in",
    phone: "+91 64567 89012",
    avatar: "https://i.pravatar.cc/150?img=47",
    initials: "KR",
  },
  {
    name: "Yash Malhotra",
    role: "Tech & Fintech Analyst",
    batch: "Batch 2024",
    location: "Bangalore",
    email: "yash@financeclub.in",
    phone: "+91 55678 90123",
    avatar: "https://i.pravatar.cc/150?img=19",
    initials: "YM",
  },
  {
    name: "Tanya Khanna",
    role: "Compliance & Legal",
    batch: "Batch 2020",
    location: "Mumbai",
    email: "tanya@financeclub.in",
    phone: "+91 46789 01234",
    avatar: "https://i.pravatar.cc/150?img=38",
    initials: "TK",
  },
  {
    name: "Aditya Nair",
    role: "Data Scientist",
    batch: "Batch 2023",
    location: "Kochi",
    email: "aditya@financeclub.in",
    phone: "+91 37890 12345",
    avatar: "https://i.pravatar.cc/150?img=25",
    initials: "AN",
  },
  {
    name: "Riya Thakur",
    role: "Member Relations",
    batch: "Batch 2024",
    location: "Jaipur",
    email: "riya@financeclub.in",
    phone: "+91 28901 23456",
    avatar: "https://i.pravatar.cc/150?img=52",
    initials: "RT",
  },
  {
    name: "Devansh Goel",
    role: "Treasury & Operations",
    batch: "Batch 2022",
    location: "Noida",
    email: "devansh@financeclub.in",
    phone: "+91 19012 34567",
    avatar: "https://i.pravatar.cc/150?img=11",
    initials: "DG",
  },
];

function MemberCard({ member }: { member: (typeof clubMembers)[0] }) {
  return (
    <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border border-border/50 overflow-hidden">
      <CardHeader className="text-center pb-6 pt-8">
        <div className="flex flex-col items-center gap-5">
          {/* Larger Avatar with Enhanced Hover Ring */}
          <Avatar className="h-32 w-32 ring-4 ring-primary/10 group-hover:ring-primary/40 group-hover:scale-105 transition-all duration-300 shadow-xl">
            <AvatarImage
              src={member.avatar}
              alt={member.name}
              className="object-cover"
            />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary/20 to-primary/10">
              {member.initials}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-base font-medium text-primary">{member.role}</p>
          </div>

          <Badge
            variant="secondary"
            className="text-sm px-4 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            {member.batch}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 pb-8 text-sm">
        <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{member.location}</span>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
          <Mail className="h-4 w-4 flex-shrink-0" />
          <a
            href={`mailto:${member.email}`}
            className="hover:text-primary transition-colors truncate block"
          >
            {member.email}
          </a>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
          <Phone className="h-4 w-4 flex-shrink-0" />
          <span>{member.phone}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ClubMembersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <div className="border-b bg-muted/50 py-16">
          <div className="container px-4 text-center">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-4 mb-4 justify-center">
                <User className="h-12 w-12 text-primary" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Our Club Members
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Meet the passionate finance enthusiasts driving PRAGATI Fund’s
                research, analysis, and investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="py-16 px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clubMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground">
              Total Active Members:{" "}
              <strong className="text-2xl font-bold text-primary">
                {clubMembers.length}
              </strong>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
