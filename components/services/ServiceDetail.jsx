import Link from 'next/link';

export default function ServiceDetail({ serviceData }) {
  const { title, longDesc, approach, symptoms = [] } = serviceData;

  return (
    <div className="bg-sand-bg min-h-screen">
      {/* Header Section */}
      <header className="py-24 px-6 lg:px-20 text-center bg-white border-b border-sand-bg">
        <h1 className="text-4xl lg:text-5xl font-serif text-moss-green mb-6 leading-tight">
          {title}
        </h1>
        <div className="h-px w-24 bg-oak-accent mx-auto mb-10"></div>
        <p className="text-charcoal/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
          {longDesc}
        </p>
      </header>

      {/* Symptoms & Signs Section */}
      <section className="py-24 px-6 lg:px-20 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ALTERNATE: Abstract CSS Arch/Circle instead of <img> */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 flex items-center justify-center">
            {/* Main Decorative Circle */}
            <div className="w-full h-full rounded-full bg-moss-green/5 border-[1px] border-moss-green/10 flex items-center justify-center relative overflow-hidden group cursor-pointer transition-all duration-700 hover:bg-moss-green/10">
              
              {/* Inner Minimal Icon (The "◌" symbol) */}
              <span className="text-moss-green/20 text-[12rem] font-light select-none group-hover:scale-110 group-hover:text-moss-green/30 transition-all duration-1000">
                ◌
              </span>

              {/* Centered Title Initial */}
              <span className="absolute text-moss-green font-serif text-6xl opacity-40">
                {title.charAt(0)}
              </span>
            </div>
            
            {/* Decorative Floating Ring */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-oak-accent/40 rounded-full -z-10 animate-pulse"></div>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-moss-green mb-8 italic">How it often feels:</h2>
            <ul className="grid gap-6">
              {symptoms.map((item, idx) => (
                <li key={idx} className="flex items-start gap-5 text-charcoal/90 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-oak-accent/10 flex items-center justify-center text-oak-accent font-bold text-xs transition-colors group-hover:bg-oak-accent group-hover:text-white">
                    ✓
                  </span>
                  <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Therapeutic Approach Section */}
      <section className="bg-moss-green py-24 px-6 lg:px-20 text-sand-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6 italic">Our Work Together</h2>
          <p className="opacity-90 leading-relaxed text-xl font-light mb-12">
            {approach}
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="font-serif text-oak-accent text-xl mb-3">Evidence-Based Tools</h4>
              <p className="text-base opacity-80 leading-relaxed">
                Integrating CBT and EMDR to address the cognitive and physiological roots of your stress.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="font-serif text-oak-accent text-xl mb-3">Paced Progress</h4>
              <p className="text-base opacity-80 leading-relaxed">
                Emphasis on safety and stabilization, ensuring you feel grounded throughout the healing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 text-center bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-moss-green mb-8 italic">
            Ready to start the conversation?
          </h3>
          <Link href="/contact" className="btn-primary px-12 py-5 text-sm cursor-pointer">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}