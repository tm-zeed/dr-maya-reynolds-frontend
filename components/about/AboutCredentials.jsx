"use client";
import { useState } from 'react';

const credentialData = [
  {
    category: "Education",
    details: "Doctor of Psychology (PsyD) in Clinical Psychology. Extensive training at leading clinical institutions focusing on adult mental health."
  },
  {
    category: "Licensure",
    details: "Licensed Clinical Psychologist in the State of California. Authorized to provide in-person therapy in Santa Monica and telehealth statewide."
  },
  {
    category: "Specialized Training",
    details: "Certified EMDR Therapist, advanced training in Cognitive Behavioral Therapy (CBT), Mindfulness-Based Stress Reduction (MBSR), and Somatic (body-oriented) techniques."
  }
];

export default function AboutCredentials() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-moss-green mb-4">Professional Background</h2>
          <div className="h-px w-20 bg-oak-accent mx-auto"></div>
        </div>

        <div className="border-t border-sand-bg">
          {credentialData.map((item, idx) => (
            <div key={idx} className="border-b border-sand-bg">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className={`text-xl font-serif transition-colors ${openIndex === idx ? 'text-oak-accent' : 'text-moss-green group-hover:text-oak-accent'}`}>
                  {item.category}
                </span>
                <span className="text-2xl text-oak-accent">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-40 pb-8' : 'max-h-0'}`}>
                <p className="text-charcoal leading-relaxed opacity-80">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}