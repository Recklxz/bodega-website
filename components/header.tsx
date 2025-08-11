"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Instagram } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-[#7A4F32]/95 backdrop-blur-sm shadow-lg py-2 animate-slide-in-down" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-white hover-glow transition-all duration-300 hover:scale-105"
          >
            Bodega
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#D79A3A] transition-all duration-300 text-sm font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D79A3A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918081727780"
              className="text-white hover:text-[#D79A3A] transition-all duration-300 flex items-center gap-2 text-sm hover-lift"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              +91 80817 27780
            </a>
            <Button
              size="sm"
              className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white rounded-full btn-interactive animate-pulse-glow"
              asChild
            >
              <Link href="/reservations">Reserve</Link>
            </Button>
            <a
              href="https://instagram.com/bodega_knp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#D79A3A] transition-all duration-300 hover-rotate"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 transition-all duration-300">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#7A4F32] text-white border-[#D79A3A] animate-slide-in-right">
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-white hover:text-[#D79A3A] transition-all duration-300"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-white/20 animate-fade-in-up">
                  <a
                    href="tel:+918081727780"
                    className="text-white hover:text-[#D79A3A] transition-all duration-300 flex items-center gap-2 mb-4 hover-lift"
                  >
                    <Phone className="w-4 h-4" />
                    +91 80817 27780
                  </a>
                  <Button
                    className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white w-full mb-4 btn-interactive"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/reservations">Reserve Table</Link>
                  </Button>
                  <a
                    href="https://instagram.com/bodega_knp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#D79A3A] transition-all duration-300 flex items-center gap-2 hover-lift"
                  >
                    <Instagram className="w-4 h-4" />
                    Follow Us
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
