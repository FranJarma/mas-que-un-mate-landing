"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "../constants/landingLinks";
import { ClientContactForm } from "./ClientContactForm";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = isScrolled
    ? "bg-mate-black/90 backdrop-blur-md shadow-sm border-b border-white/10"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegacion principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}

          <ClientContactForm
            trigger={<PrimaryButton size="sm">Quiero participar</PrimaryButton>}
          />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menu"
              className="text-white hover:text-white/80 hover:bg-transparent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-mate-cream border-mate-secondary w-[300px]"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col gap-6 pt-8"
              aria-label="Navegacion movil"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-mate-black/70 hover:text-mate-primary transition-colors duration-200 font-medium text-lg uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}

              <ClientContactForm
                trigger={
                  <PrimaryButton className="mt-4 w-full bg-orange-400">
                    Quiero participar
                  </PrimaryButton>
                }
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
