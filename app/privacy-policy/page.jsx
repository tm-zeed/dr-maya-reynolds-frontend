import { legalContent } from '@/data/legal';

export default function PrivacyPolicy() {
  const { privacy } = legalContent;

  return (
    <div className="bg-sand-bg min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto bg-white p-12 shadow-sm border border-oak-accent/10">
        <h1 className="text-4xl font-serif text-moss-green mb-2">{privacy.title}</h1>
        <p className="text-xs uppercase tracking-widest text-oak-accent mb-12">
          Last Updated: {privacy.lastUpdated}
        </p>

        <div className="prose prose-charcoal">
          <section className="mb-10">
            <h2 className="text-xl font-serif text-moss-green mb-4 italic">Confidentiality & HIPAA</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Information shared during therapy sessions is confidential and protected by state law and the Health Insurance Portability and Accountability Act (HIPAA). 
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-serif text-moss-green mb-4 italic">Information Collection</h2>
            <p className="text-charcoal/80 leading-relaxed">
              We collect information provided through our contact forms and during intake to provide the best possible care. This information is stored in a secure, encrypted Electronic Health Record (EHR) system.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}