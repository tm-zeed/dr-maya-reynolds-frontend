// app/contact/page.jsx
import ContactForm from '@/components/contact/ContactForm';
import ContactOfficeMap from '@/components/contact/ContactOfficeMap';

export const metadata = {
  title: 'Contact Dr. Maya Reynolds | Santa Monica Therapy',
  description: 'Book a free consultation with Dr. Maya Reynolds. Offering in-person therapy in Santa Monica and telehealth sessions across California.',
};

export default function ContactPage() {
  return (
    <div className="bg-sand-bg min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-6 lg:px-20 text-center">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-serif text-moss-green mb-6">Get in Touch</h1>
          <p className="text-charcoal opacity-80 leading-relaxed">
            I offer a free 15-minute consultation to discuss your needs and see if we are a 
            good fit for your journey. Please fill out the form below, and I will 
            get back to you within 48 business hours.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-24 px-6 lg:px-20">
        <div className="container mx-auto grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Side: The Form (Takes up 3/5 of the grid) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right Side: Office Info & Map (Takes up 2/5 of the grid) */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-12">
            <div className="bg-white p-8 border border-sand-bg shadow-sm">
              <ContactOfficeMap />
            </div>
            
            {/* Added Empathy Note */}
            <div className="p-8 bg-moss-green text-sand-bg rounded-sm">
              <h4 className="font-serif text-xl mb-4 text-oak-accent">A Note on Privacy</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                Your confidentiality is my priority. Please use this form for general 
                inquiries and scheduling. We will save deeper clinical discussions 
                for our secure sessions.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}