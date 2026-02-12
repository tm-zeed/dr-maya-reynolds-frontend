import { legalContent } from '@/data/legal';

export default function GoodFaithEstimate() {
  const { goodFaith } = legalContent;

  return (
    <div className="bg-sand-bg min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto">
        {/* Decorative Arch Icon */}
        <div className="w-16 h-20 border-2 border-oak-accent rounded-t-full mx-auto mb-8 flex items-center justify-center text-oak-accent">
          §
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-serif text-moss-green text-center mb-12">
          {goodFaith.title}
        </h1>

        <div className="bg-white p-10 border-t-4 border-moss-green shadow-md">
          <p className="text-lg text-charcoal mb-8 leading-relaxed font-light italic">
            {goodFaith.description}
          </p>
          
          <div className="space-y-6 text-charcoal/80 text-sm leading-relaxed">
            <p>{goodFaith.details}</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service.</li>
              <li>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
              <li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
            </ul>
            <p className="pt-6 border-t border-sand-bg text-xs italic">
              For questions or more information about your right to a Good Faith Estimate, visit www.cms.gov/nosurprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}