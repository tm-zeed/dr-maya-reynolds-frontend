// app/page.jsx
import HomeHero from '@/components/home/HomeHero';
import HomeSpecialtiesGrid from '@/components/home/HomeSpecialtiesGrid';
import HomeApproach from '@/components/home/HomeApproach';
import Link from 'next/link';

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy Santa Monica',
  description: 'Specialized therapy for high-achieving adults, professionals, and creatives in Santa Monica. Find grounding through EMDR, CBT, and mindful practices.',
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section: The Hook & Location */}
      <HomeHero />

      {/* 2. Welcome/Introduction: Building Connection */}
      <section className="py-20 bg-white px-6 lg:px-20 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-serif text-moss-green mb-6">You deserve to feel fully present in your own life.</h2>
          <p className="text-lg text-charcoal leading-relaxed opacity-80 mb-8">
            Many of the people I work with are high-achieving and thoughtful—but internally 
            feel exhausted, stuck in overthinking, or emotionally on edge. I provide a 
            space to slow down, process, and develop sustainable ways of living.
          </p>
          <div className="h-px w-20 bg-oak-accent mx-auto"></div>
        </div>
      </section>

      {/* 3. Specialties Grid: Addressing Specific Needs */}
      <HomeSpecialtiesGrid />

      {/* 4. Approach Section: Modalities (EMDR, CBT, Mindfulness) */}
      <HomeApproach />

      {/* 5. Final Grounding CTA */}
      <section className="py-24 px-6 bg-sand-bg border-t border-oak-accent/10">
        <div className="container mx-auto text-center max-w-xl">
          <h3 className="text-3xl font-serif text-moss-green mb-6">Ready to find your grounding?</h3>
          <p className="text-charcoal/70 mb-10 italic">
            Currently accepting new clients for in-person sessions in Santa Monica and 
            telehealth throughout California.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}