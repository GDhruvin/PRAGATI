"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/#portfolio", scroll: true },
  { name: "Fund Performance", href: "/#fund-performance", scroll: true },
  { name: "News", href: "/news" },
  { name: "Fund Managers", href: "/members" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Our Story", href: "/story" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false); // Close mobile menu after navigation
      } else if (pathname !== "/") {
        window.location.href = href;
      }
    } else {
      setOpen(false); // Close mobile menu on navigation
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/pragati-logo.jpg"
              alt="Pragati Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold leading-none">P₹AGATI</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={(e) => route.scroll && handleScrollClick(e, route.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={(e) => handleScrollClick(e, route.href)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-accent",
                      pathname === route.href
                        ? "text-primary bg-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
