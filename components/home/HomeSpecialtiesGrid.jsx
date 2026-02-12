// components/home/HomeSpecialtiesGrid.jsx
import Link from 'next/link';
import { services } from '@/data/services';

export default function HomeSpecialtiesGrid() {
  return (
    <section className="bg-sand-bg py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-moss-green mb-4">Areas of Expertise</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Providing a grounded, evidence-based approach to mental health for professionals and creatives in California.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.slug} className="bg-white p-12 text-center shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-oak-accent/20">
              
              {/* FIX: Instead of an Arch, we use a subtle, elegant circle with an initial */}
              <div className="w-20 h-20 rounded-full border border-oak-accent/30 mx-auto mb-8 flex items-center justify-center group-hover:bg-oak-accent group-hover:text-white transition-all duration-500">
                <span className="text-2xl font-serif text-oak-accent group-hover:text-white">
                  {item.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-serif text-moss-green mb-4">{item.title}</h3>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-8">
                {item.shortDesc}
              </p>

              <Link 
                href={`/services/${item.slug}`} 
                className="cursor-pointer text-xs uppercase tracking-widest font-bold text-oak-accent border-b border-oak-accent pb-1 hover:text-moss-green hover:border-moss-green transition-all"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}