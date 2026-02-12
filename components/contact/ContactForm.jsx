"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isPending) return; // Guard clause

    setIsPending(true);
    setStatus(null);

    // Simulate API call to your MongoDB backend
    try {
      // Logic would go here to send data to your Next.js API route
      // which should have a Unique Index on 'email' in MongoDB.
      await new Promise((res) => setTimeout(res, 2000));
      setStatus("success");
    } catch (err) {
      setStatus("error");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="bg-white p-8 lg:p-12 shadow-sm border border-sand-bg">
      <h2 className="text-2xl font-serif text-moss-green mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-oak-accent font-bold mb-2">Name</label>
            <input required type="text" className="w-full border-b border-sand-bg py-2 focus:border-moss-green outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-oak-accent font-bold mb-2">Email</label>
            <input required type="email" className="w-full border-b border-sand-bg py-2 focus:border-moss-green outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-oak-accent font-bold mb-2">Message</label>
          <textarea required rows="4" className="w-full border-b border-sand-bg py-2 focus:border-moss-green outline-none transition-colors resize-none"></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className={`w-full py-4 uppercase tracking-[0.2em] text-sm font-bold transition-all ${
            isPending ? 'bg-sand-bg text-charcoal cursor-not-allowed' : 'bg-moss-green text-white hover:bg-oak-accent'
          }`}
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && <p className="text-green-600 text-sm text-center">Thank you. I will reach out within 48 hours.</p>}
      </form>
    </div>
  );
}