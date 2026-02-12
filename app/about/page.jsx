// app/about/page.js
import AboutBioSection from '@/components/about/AboutBioSection';
import AboutCredentials from '@/components/about/AboutCredentials';
import Link from 'next/link';

export const metadata = {
  title: 'About Dr. Maya Reynolds | Psychologist in Santa Monica',
  description: 'Learn more about Dr. Maya Reynolds, a licensed clinical psychologist specializing in anxiety, trauma, and burnout for professionals in Santa Monica, California.',
};

export default function AboutPage() {
  return (
    <div className="bg-sand-bg min-h-screen">
      {/* Small Breadcrumb/Header for Context */}
      <div className="pt-12 px-6 lg:px-20 text-center lg:text-left container mx-auto">
        <nav className="text-[10px] uppercase tracking-[0.3em] text-oak-accent font-bold mb-4">
          <Link href="/" className="hover:text-moss-green transition-colors">Home</Link>
          <span className="mx-2 text-charcoal/30">/</span>
          <span className="text-moss-green">About Maya</span>
        </nav>
      </div>

      {/* Main Bio Section (Detailed Story) */}
      <AboutBioSection />

      {/* Transition/Quote Section */}
      <section className="py-16 bg-white border-y border-sand-bg">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-serif text-moss-green italic leading-relaxed">
            "I believe therapy is most effective when it is a collaborative partnership—one rooted in safety, respect, and a deep understanding of your unique internal landscape."
          </h2>
        </div>
      </section>

      {/* Professional Credentials (Accordion Section) */}
      <AboutCredentials />

      {/* Final Call to Action */}
      <section className="py-24 px-6 bg-moss-green text-sand-bg text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif mb-6">Take the first step toward reclaiming your balance.</h2>
          <p className="mb-10 opacity-80 leading-relaxed">
            I offer a free 15-minute initial consultation to see if we are a good fit for 
            your therapeutic journey.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-oak-accent text-white px-10 py-4 rounded-sm border border-oak-accent hover:bg-transparent hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            Connect With Me
          </Link>
        </div>
      </section>
    </div>
  );
}