"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, DollarSign, Package } from "lucide-react"

const currentIPOs = [
  {
    company: "Nova Tech Ltd",
    openDate: "Oct 28, 2025",
    closeDate: "Oct 31, 2025",
    priceRange: "₹150–₹160",
    lotSize: "100 shares",
    issueSize: "₹500 Cr",
    status: "Open",
    statusColor: "bg-green-500",
  },
  {
    company: "Stellar Manufacturing",
    openDate: "Oct 25, 2025",
    closeDate: "Oct 30, 2025",
    priceRange: "₹320–₹340",
    lotSize: "50 shares",
    issueSize: "₹750 Cr",
    status: "Open",
    statusColor: "bg-green-500",
  },
  {
    company: "Urban Logistics Co",
    openDate: "Oct 26, 2025",
    closeDate: "Oct 29, 2025",
    priceRange: "₹200–₹215",
    lotSize: "75 shares",
    issueSize: "₹350 Cr",
    status: "Open",
    statusColor: "bg-green-500",
  },
]

const upcomingIPOs = [
  {
    company: "GreenVolt Energy Ltd",
    openDate: "Nov 10, 2025",
    closeDate: "Nov 14, 2025",
    priceRange: "₹220–₹230",
    lotSize: "50 shares",
    issueSize: "₹800 Cr",
    status: "Upcoming",
    statusColor: "bg-blue-500",
  },
  {
    company: "Digital Payments Inc",
    openDate: "Nov 15, 2025",
    closeDate: "Nov 19, 2025",
    priceRange: "₹450–₹480",
    lotSize: "30 shares",
    issueSize: "₹1,200 Cr",
    status: "Upcoming",
    statusColor: "bg-blue-500",
  },
  {
    company: "Healthcare Solutions",
    openDate: "Nov 20, 2025",
    closeDate: "Nov 24, 2025",
    priceRange: "₹180–₹195",
    lotSize: "80 shares",
    issueSize: "₹600 Cr",
    status: "Upcoming",
    statusColor: "bg-blue-500",
  },
]

function IPOCard({ ipo }: { ipo: typeof currentIPOs[0] }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{ipo.company}</CardTitle>
          <Badge className={ipo.statusColor}>{ipo.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">IPO Dates</p>
              <p className="text-sm text-muted-foreground">
                {ipo.openDate} - {ipo.closeDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Price Band</p>
              <p className="text-sm text-muted-foreground">{ipo.priceRange}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Package className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Lot Size</p>
              <p className="text-sm text-muted-foreground">{ipo.lotSize}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Issue Size</p>
              <p className="text-sm text-muted-foreground">{ipo.issueSize}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function IPOPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="border-b bg-muted/50 py-12">
          <div className="container px-4">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">IPO Information</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Track current and upcoming Initial Public Offerings
            </p>
          </div>
        </div>

        <div className="container py-8 px-4">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="current">Current IPOs</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming IPOs</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentIPOs.map((ipo) => (
                  <IPOCard key={ipo.company} ipo={ipo} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingIPOs.map((ipo) => (
                  <IPOCard key={ipo.company} ipo={ipo} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
