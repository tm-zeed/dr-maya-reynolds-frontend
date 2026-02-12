import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sand-bg px-6 lg:px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <Link href="/" className="group">
          <span className="text-xl font-serif text-moss-green tracking-wide block">
            Dr. Maya Reynolds
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-oak-accent font-bold group-hover:text-moss-green transition-colors">
            Psychology & Wellness
          </span>
        </Link>

        {/* Desktop Links */}
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

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-moss-green">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}