"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const clubMembers = [
  // Batch of 2024-2026
  {
    name: "Kamalesh Maharana",
    role: "Secretary",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/kamalesh-maharana-profile/",
    avatar: "/Batch of 2024 - 2026/Kamalesh Maharana.jpg",
    initials: "KM",
  },
  {
    name: "Aniket Nalgune",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/aniketsnalgune/",
    avatar: "/Batch of 2024 - 2026/Aniket Nalgune.jpg",
    initials: "AN",
  },
  {
    name: "Bhupesh Kawdia",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/bhupeshkawdia/",
    avatar: "/Batch of 2024 - 2026/Bhupesh Kawdia.jpg",
    initials: "BK",
  },
  {
    name: "Gaurav Mittal",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/gaurav-mittal-383351227/",
    avatar: "/Batch of 2024 - 2026/Gaurav Mittal.jpg",
    initials: "GM",
  },
  {
    name: "Gaurav Singhania",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/gaurav-singhania-037009250/",
    avatar: "/Batch of 2024 - 2026/Gaurav Singhania.jpg",
    initials: "GS",
  },
  {
    name: "Madhavi Shah",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/madhavishah0425/",
    avatar: "/Batch of 2024 - 2026/Madhavi Shah.jpg",
    initials: "MS",
  },
  {
    name: "Sonia Chauhan",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/sonia-chauhan-33b288216/",
    avatar: "/Batch of 2024 - 2026/Sonia  Chauhan.jpg",
    initials: "SC",
  },
  {
    name: "Nakul Godha",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/nakul-godha/",
    avatar: "/Batch of 2024 - 2026/Nakul Godha.jpg",
    initials: "NG",
  },
  {
    name: "Tushar Gupta",
    role: "Fund Manager",
    batch: "Batch of 2024-2026",
    linkedin: "https://www.linkedin.com/in/tushargupta634/",
    avatar: "/Batch of 2024 - 2026/Tushar Gupta.jpg",
    initials: "TG",
  },
  // Batch of 2025-2027
  {
    name: "Abhinav Jindal",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/abhinav-jindal-6a1ab622a/",
    avatar: "/Batch of 2025-2027/Abhinav Jindal.jpg",
    initials: "AJ",
  },
  {
    name: "Abhishek Kumar",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-64a672303/",
    avatar: "/Batch of 2025-2027/Abhishek Kumar.jpg",
    initials: "AK",
  },
  {
    name: "Aditya Saraf",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/aditya-saraf-as2709/",
    avatar: "/Batch of 2025-2027/Aditya Saraf.jpg",
    initials: "AS",
  },
  {
    name: "Bhavya Bihani",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/bhavya-bihani-82a2a1249/",
    avatar: "/Batch of 2025-2027/Bhavya Bihani.jpg",
    initials: "BB",
  },
  {
    name: "Manasi Banka",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/manasi-banka-b943a2365/",
    avatar: "/Batch of 2025-2027/Manasi Banka.jpg",
    initials: "MB",
  },
  {
    name: "Nischay Goenka",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/nischay-goenka-b606051b0/",
    avatar: "/Batch of 2025-2027/Nischay Goenka.jpg",
    initials: "NG",
  },
  {
    name: "Nishant Bajaj",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/nishant-bajaj-1903bb244/",
    avatar: "/Batch of 2025-2027/Nishant Bajaj.jpg",
    initials: "NB",
  },
  {
    name: "Rishabh Wadhwa",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/rishabh-wadhwa-0a5670205/",
    avatar: "",
    initials: "RW",
  },
  {
    name: "Rupanshi Goel",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/rupanshi-goel-7116b825a/",
    avatar: "/Batch of 2025-2027/Rupanshi Goel.jpg",
    initials: "RG",
  },
  {
    name: "Saksham Gupta",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/sakshamgupta0/",
    avatar: "/Batch of 2025-2027/Saksham Gupta.jpg",
    initials: "SG",
  },
  {
    name: "Shalin Patel",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/shalin-patel-aa6178264/",
    avatar: "/Batch of 2025-2027/Shalin Patel.jpg",
    initials: "SP",
  },
  {
    name: "Sharad Sharma",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/sharadsh/",
    avatar: "/Batch of 2025-2027/Sharad Sharma.jpg",
    initials: "SS",
  },
  {
    name: "Vanshita Sehgal",
    role: "Fund Manager",
    batch: "Batch of 2025-2027",
    linkedin: "https://www.linkedin.com/in/vanshita-sehgal-b32450205/",
    avatar: "/Batch of 2025-2027/Vanshita Sehgal.jpg",
    initials: "VS",
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
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link"
          >
            <Linkedin className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
            <span className="font-medium">View LinkedIn Profile</span>
          </a>
        )}
      </CardContent>
    </Card>
  );
}

export default function ClubMembersPage() {
  const [selectedBatch, setSelectedBatch] = useState<string>("all");

  // Get unique batches
  const batches = Array.from(new Set(clubMembers.map(m => m.batch))).sort();

  // Filter members by batch
  const filteredMembers = selectedBatch === "all"
    ? clubMembers
    : clubMembers.filter(m => m.batch === selectedBatch);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <div className="border-b bg-muted/50 py-6">
          <div className="px-2 text-center">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-4 justify-center">
                <User className="h-12 w-12 text-primary" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Fund Managers
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Meet the passionate finance enthusiasts driving PRAGATI Fund's
                research, analysis, and investment decisions.
              </p>

              {/* Batch Filter */}
              <div className="mt-2 w-full max-w-xs">
                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by Batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Batches</SelectItem>
                    {batches.map((batch) => (
                      <SelectItem key={batch} value={batch}>
                        {batch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="py-16 px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
