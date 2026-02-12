import Link from 'next/link';
import { services } from '@/data/services';

export const metadata = {
  title: 'Therapy Services | Dr. Maya Reynolds',
  description: 'Specialized therapy for high-achieving adults in Santa Monica. Explore our focus areas: Anxiety, Trauma (EMDR), and Professional Burnout.',
};

export default function ServicesPage() {
  return (
    <div className="bg-sand-bg min-h-screen py-20 px-6 lg:px-20">
      <div className="container mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-serif text-moss-green mb-6">Areas of Expertise</h1>
          <p className="text-charcoal max-w-2xl mx-auto opacity-80">
            Providing a grounded, evidence-based approach to mental health for professionals and creatives in California.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.slug} className="group bg-white p-10 border border-transparent hover:border-oak-accent transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-40 h-56 rounded-t-full overflow-hidden mb-8 border-4 border-sand-bg">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h2 className="text-2xl font-serif text-moss-green mb-4">{service.title}</h2>
              <p className="text-sm text-charcoal/70 mb-8 leading-relaxed">
                {service.shortDesc}
              </p>
              <Link 
                href={`/services/${service.slug}`} 
                className="mt-auto text-xs uppercase tracking-[0.2em] font-bold text-oak-accent border-b border-oak-accent pb-1 hover:text-moss-green hover:border-moss-green transition-colors"
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