import Image from 'next/image';

export default function AboutBioSection() {
  return (
    <section className="bg-sand-bg py-20 px-6 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Professional Narrative */}
        <div className="order-2 lg:order-1">
          <h2 className="text-sm uppercase tracking-widest text-oak-accent font-bold mb-4">The Approach</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-moss-green mb-6 leading-snug">
            A Space to Slow Down and Reconnect.
          </h3>
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p>
              I’m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica. 
              I specialize in working with high-achievers—the entrepreneurs, creatives, and 
              professionals who feel "functional" on the outside but are quietly navigating 
              exhaustion and constant internal pressure.
            </p>
            <p>
              My philosophy is simple: therapy works best when you feel respected and understood. 
              Whether we are processing past trauma through EMDR or building practical CBT tools 
              for anxiety, our work is a collaboration. I believe in a pace that feels safe, 
              focusing on stabilization so you can feel regulated in your daily life, not just 
              during our sessions.
            </p>
            <p className="italic font-serif text-moss-green">
              "Therapy is not just about symptom relief; it’s about developing a stronger, 
              more resilient relationship with yourself."
            </p>
          </div>
        </div>

        {/* Right: Personal/Office Aesthetic Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-white shadow-2xl">
             <img 
               src="/images/office2.jpeg" 
               alt="Dr. Maya Reynolds Office in Santa Monica" 
               className="w-full h-full object-cover"
             />
          </div>
          {/* Subtle Accent Box */}
          <div className="absolute -bottom-6 -left-6 bg-oak-accent text-white p-8 hidden md:block max-w-[200px]">
            <p className="text-xs uppercase tracking-tighter leading-tight">
              Located in the heart of Santa Monica, CA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}