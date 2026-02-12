import Link from 'next/link';
export default function HomeApproach() {
  return (
    <section className="bg-moss-green text-sand-bg py-20 lg:py-32 px-6 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-serif mb-8 leading-snug">
            A warm, collaborative, and grounded approach.
          </h2>
          <p className="mb-6 opacity-90 leading-relaxed">
            I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), 
            EMDR, mindfulness, and body-oriented techniques to help you understand 
            both the emotional and physiological sides of your experience.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-oak-accent rounded-full"></span>
              <span>Paced carefully with an emphasis on safety</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-oak-accent rounded-full"></span>
              <span>Practical tools for daily regulation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-oak-accent rounded-full"></span>
              <span>In-person in Santa Monica & Telehealth across CA</span>
            </li>
          </ul>
          <Link href="/about" className="text-oak-accent border-b border-oak-accent pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold">
            Learn more about my process →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Collage of office images to showcase the grounding environment */}
          <div className="rounded-t-full overflow-hidden h-64 bg-sand-bg/10 border border-white/20">
             <img src="/images/office1.jpeg" alt="Office Detail" className="w-full h-full object-cover grayscale-[30%]" />
          </div>
          <div className="rounded-b-full overflow-hidden h-64 mt-8 bg-sand-bg/10 border border-white/20">
             <img src="/images/office2.jpeg" alt="Natural Light Office" className="w-full h-full object-cover grayscale-[30%]" />
          </div>
        </div>
      </div>
    </section>
  );
}