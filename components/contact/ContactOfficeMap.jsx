export default function ContactOfficeMap() {
  // Replace with Dr. Maya's actual office address coordinates or Place ID
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.467384351052!2d-118.4911912!3d34.0194543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d000000001%3A0x0!2zMTIzIFN0cmVldCA0NSBXLCBTYW50YSBNb25pY2EsIENBIDkwNDAx!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus";

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-serif text-moss-green mb-2">Santa Monica Office</h3>
        <p className="text-charcoal opacity-80 text-sm leading-relaxed">
          123th Street 45 W<br />
          Santa Monica, CA 90401
        </p>
      </div>
      
      <div className="w-full h-80 bg-sand-bg grayscale opacity-80 hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-inner">
        <iframe 
          src={mapSrc}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      <div className="pt-4 border-t border-sand-bg">
        <h4 className="text-xs uppercase tracking-widest text-oak-accent font-bold mb-2">Availability</h4>
        <p className="text-sm text-charcoal">Monday – Friday: 9:00 AM – 5:00 PM</p>
      </div>
    </div>
  );
}