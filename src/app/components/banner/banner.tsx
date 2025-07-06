"use client";

import "./banner.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "./nav";

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 border-b items-center justify-between web-mobile-start md:border-0">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                  src="/cflogo.png"
                  alt="Creation Foundation Logo"
                  width={51}
                  height={12}
                  className="filter brightness-125"
              />
              <span className="text-xl font-aeonik-pro leading-none">
                Creation
                <br /> 
                Foundation
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-cyan-500">
            <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button size="sm" className="text-white border-0 inset-ring-cyan-500 inset-ring-1 bg-[#00b7eb2a] hover:bg-[#00b7eb2a]">
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-cyan-500 text-white hover:bg-cyan-500">Sign up</Button>
            </Link>
          </div>
          <div className="flex flex-justify-end items-center gap-2 pr-2 md:hidden">
            <Button 
              className={ !isOpen ? 
                  "bg-cyan-500 hover:bg-cyan-500" : 
                  "bg-transparent dark:text-cyan-500 border-cyan-500 inset-ring-2 hover:bg-transparent" } 
              onClick={toggleMenu}>
                { !isOpen ? <Menu /> : <X className="stroke-4"/> }
            </Button>
          </div>
        </div>
        <Nav showNav={isOpen} />
      </header>
  );
}