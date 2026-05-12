import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function ContactSection() {
  const [ref, visible] = useInView<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
      const res = await fetch('https://readdy.ai/api/form/d76l47tr5g02gnd6a2p0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#0A0A0A] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-medium tracking-[5px] uppercase">Contact</span>
            </div>
            <h2 className="font-heading text-white font-bold text-3xl lg:text-4xl mb-3 leading-tight">
              Get in Touch
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-8 max-w-xs">
              All inquiries are confidential. We respond within one business day.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+17139068273"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors shrink-0 mt-0.5">
                  <i className="ri-phone-fill text-[#C9A84C] text-sm" />
                </div>
                <div>
                  <p className="text-white/35 text-sm uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-white font-heading font-semibold text-lg group-hover:text-[#C9A84C] transition-colors">713.906.8273</p>
                </div>
              </a>

              <a
                href="mailto:jbeegle@jnbprotectiongroup.com"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors shrink-0 mt-0.5">
                  <i className="ri-mail-fill text-[#C9A84C] text-sm" />
                </div>
                <div>
                  <p className="text-white/35 text-sm uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-heading font-semibold text-base group-hover:text-[#C9A84C] transition-colors break-all">jbeegle@jnbprotectiongroup.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-[#C9A84C]/30 shrink-0 mt-0.5">
                  <i className="ri-map-pin-fill text-[#C9A84C] text-sm" />
                </div>
                <div>
                  <p className="text-white/35 text-sm uppercase tracking-widest mb-1">Address</p>
                  <p className="text-white/65 text-base leading-relaxed">
                    2951 Marina Bay Dr., Suite 130-#376<br />
                    League City, TX 77573
                  </p>
                  <p className="text-white/28 text-sm mt-1">License: C12684701</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="border border-[#C9A84C]/30 bg-[#C9A84C]/5 p-10 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C9A84C]/50 mb-5">
                  <i className="ri-check-line text-[#C9A84C] text-xl" />
                </div>
                <p className="font-heading text-white font-semibold text-xl mb-2">Message Sent</p>
                <p className="text-white/45 text-sm">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form
                data-readdy-form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/40 text-base uppercase tracking-widest mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C] text-white text-lg px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-base uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C] text-white text-lg px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-base uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C] text-white text-lg px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-white/40 text-base uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C] text-white text-lg px-4 py-3 outline-none transition-colors resize-none placeholder:text-white/20"
                    placeholder="Brief description of your needs"
                  />
                  <p className="text-white/20 text-sm mt-1 text-right">{form.message.length}/500</p>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#C9A84C] hover:bg-[#E2C97E] disabled:opacity-50 text-black font-heading font-bold text-lg tracking-widest uppercase px-8 py-4 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-white/25 text-base text-center">All inquiries are strictly confidential.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
