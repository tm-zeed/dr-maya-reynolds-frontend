import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-bg pt-20 pb-10 px-6 lg:px-20 border-t border-oak-accent/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Practice Info */}
          <div>
            <h4 className="font-serif text-moss-green text-lg mb-4">Dr. Maya Reynolds, PsyD</h4>
            <p className="text-sm text-charcoal/70 leading-relaxed max-w-xs">
              Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout for high-achieving adults.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-oak-accent font-bold mb-2">Navigation</h4>
            <Link href="/about" className="text-sm text-charcoal hover:text-moss-green w-fit">About Me</Link>
            <Link href="/services" className="text-sm text-charcoal hover:text-moss-green w-fit">Specialties</Link>
            <Link href="/contact" className="text-sm text-charcoal hover:text-moss-green w-fit">Contact & Location</Link>
          </div>

          {/* Logistics */}
          <div className="text-sm text-charcoal/80 space-y-2">
            <h4 className="text-xs uppercase tracking-widest text-oak-accent font-bold mb-2">Office Hours</h4>
            <p>Mon — Fri: 9:00 AM – 5:00 PM</p>
            <p className="pt-4">123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
          </div>
        </div>

        {/* Bottom Bar */}
       <div className="flex justify-center gap-8 py-8 border-t border-oak-accent/10">
  <Link href="/privacy-policy" className="cursor-pointer text-xs uppercase tracking-[0.2em] text-charcoal/60 hover:text-moss-green transition-colors">
    Privacy Policy
  </Link>
  <Link href="/good-faith-estimate" className="cursor-pointer text-xs uppercase tracking-[0.2em] text-charcoal/60 hover:text-moss-green transition-colors">
    Good Faith Estimate
  </Link>
</div>
      </div>
    </footer>
  );
}