"use client"; // This is critical for the click event to work

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sand-bg px-6 lg:px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Branding */}
        <Link href="/" className="group" onClick={closeMenu}>
          <span className="text-xl font-serif text-moss-green tracking-wide block">
            Dr. Maya Reynolds
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-oak-accent font-bold group-hover:text-moss-green transition-colors">
            Psychology & Wellness
          </span>
        </Link>

        {/* Desktop Links - Visible only on medium screens and up */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/about" className="text-xs uppercase tracking-widest text-charcoal hover:text-oak-accent transition-colors">
            About
          </Link>
          <Link href="/services" className="text-xs uppercase tracking-widest text-charcoal hover:text-oak-accent transition-colors">
            Services
          </Link>
          <Link href="/contact" className="bg-moss-green text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-oak-accent transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle - Visible only on small screens */}
        <button 
          className="md:hidden text-moss-green p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger (3-line) Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Shows only when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-sand-bg shadow-lg py-8 px-6 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link href="/about" onClick={closeMenu} className="text-sm uppercase tracking-widest text-charcoal hover:text-oak-accent">
            About
          </Link>
          <Link href="/services" onClick={closeMenu} className="text-sm uppercase tracking-widest text-charcoal hover:text-oak-accent">
            Services
          </Link>
          <Link href="/contact" onClick={closeMenu} className="w-full text-center bg-moss-green text-white px-6 py-3 text-xs uppercase tracking-widest font-bold">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}