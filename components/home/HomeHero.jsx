import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative bg-sand-bg min-h-[90vh] flex items-center px-6 lg:px-20 py-12">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image with Arch Frame like the template */}
        <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
          <div className="w-full h-full rounded-t-full overflow-hidden border-8 border-white shadow-xl">
            <img 
              src="/images/maya-reynolds.png" 
              alt="Dr. Maya Reynolds, PsyD" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: SEO Copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-serif text-moss-green mb-6 leading-tight">
            Live your life <br /> <span className="italic">fully grounded.</span>
          </h1>
          <p className="text-lg text-charcoal mb-8 max-w-xl">
            Specialized therapy for high-achieving adults in Santa Monica. 
            Find your way from feeling overwhelmed to feeling resilient and 
            connected to yourself again.
          </p>
          <Link href="/contact" className="inline-block bg-moss-green text-white px-8 py-4 rounded-sm border border-moss-green hover:bg-transparent hover:text-moss-green transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}