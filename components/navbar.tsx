"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const routes = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Fund Managers", href: "/members" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Our Story", href: "/story" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="/pragati-logo.jpg"
                alt="Pragati Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold leading-none">PRAGATI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
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
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="md:hidden border-t">
        <div className="flex items-center gap-4 overflow-x-auto px-4 py-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
