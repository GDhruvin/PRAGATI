"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, TrendingUp } from "lucide-react"

const newsData = [
  {
    id: 1,
    headline: "Sensex ends flat after volatile session; banks and autos lend support",
    summary: "Indian benchmark indices closed marginally flat on Thursday after a day of high volatility. Strong buying in banking and auto stocks helped offset losses in IT and FMCG sectors. Market participants remain cautious ahead of key economic data releases.",
    date: "Oct 28, 2025",
  },
  {
    id: 2,
    headline: "Rupee hits record low as global oil prices surge",
    summary: "The Indian rupee depreciated to an all-time low of 88.8 against the US dollar amid rising crude oil prices and persistent foreign institutional outflows. The central bank is expected to intervene to stabilize the currency in coming sessions.",
    date: "Oct 27, 2025",
  },
  {
    id: 3,
    headline: "IT sector under pressure as US clients delay projects",
    summary: "Major IT companies face headwinds as American clients postpone or scale down project implementations amid economic uncertainty. Analysts expect subdued earnings growth for the sector in the upcoming quarter, leading to a broader market correction.",
    date: "Oct 26, 2025",
  },
  {
    id: 4,
    headline: "Retail investors continue to show strong inflows into mutual funds",
    summary: "Despite market volatility, retail participation in equity mutual funds remains robust with SIP flows crossing ₹18,000 crore for the third consecutive month. Financial advisors attribute this to growing financial literacy and long-term wealth creation goals.",
    date: "Oct 25, 2025",
  },
  {
    id: 5,
    headline: "Infrastructure sector rallies on government spending boost",
    summary: "Infrastructure stocks surged up to 5% after the government announced an additional allocation of ₹1.2 lakh crore for capital expenditure. Construction, cement, and engineering firms are expected to be the primary beneficiaries of this fiscal push.",
    date: "Oct 24, 2025",
  },
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="border-b bg-muted/50 py-12">
          <div className="container px-4">
            <div className="flex items-center gap-3 mb-3">
              <Newspaper className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Market News & Insights</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest market developments and analysis
            </p>
          </div>
        </div>

        <div className="container space-y-6 py-8 px-4">
          {newsData.map((news) => (
            <Card key={news.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{news.headline}</CardTitle>
                    <CardDescription className="text-sm">{news.date}</CardDescription>
                  </div>
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{news.summary}</p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
