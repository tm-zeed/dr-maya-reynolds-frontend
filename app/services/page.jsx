
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata = {
  title: 'Therapy Services | Dr. Maya Reynolds',
  description: 'Specialized therapy for high-achieving adults in Santa Monica. Explore our focus areas: Anxiety, Trauma (EMDR), and Professional Burnout.',
};

export default function ServicesPage() {
  return (
    <div className="bg-sand-bg min-h-screen pt-32 pb-15 px-6 lg:px-20">
      <div className="container mx-auto">
        <header className="text-center mb-15">
          <h1 className="text-4xl lg:text-5xl font-serif text-moss-green mb-6 italic">Areas of Expertise</h1>
          <div className="h-px w-24 bg-oak-accent mx-auto mb-6"></div>
          <p className="text-charcoal max-w-2xl mx-auto opacity-80">
            Providing a grounded, evidence-based approach to mental health for professionals and creatives in California.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.slug} className="group bg-white p-10 shadow-sm border border-transparent hover:border-oak-accent/20 transition-all duration-500 flex flex-col items-center text-center">
              
              {/* FIXED: Removed <img> and added a Stylized Arch with Icon */}
              <div className="w-25 h-25 rounded-t-full mb-8 border border-oak-accent/20 flex flex-col items-center justify-center bg-sand-bg/30 group-hover:bg-sand-bg/50 transition-colors">
                {/* Minimalist SVG Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B7E6A" strokeWidth="1.2" className="opacity-60 mb-2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-[10px] uppercase tracking-[0.3em] text-oak-accent font-bold">Focus</span>
              </div>

              <h2 className="text-2xl font-serif text-moss-green mb-4">{service.title}</h2>
              
              <p className="text-sm text-charcoal/70 mb-8 leading-relaxed">
                {service.shortDesc}
              </p>

              <Link 
                href={`/services/${service.slug}`} 
                className="mt-auto text-[10px] uppercase tracking-[0.2em] font-bold text-oak-accent border-b border-oak-accent pb-1 hover:text-moss-green hover:border-moss-green transition-all"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}