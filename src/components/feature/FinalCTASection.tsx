import { useState, FormEvent } from 'react';
import { useInView } from '../../hooks/useInView';

const FORM_URL = 'https://readdy.ai/api/form/d6uq7m7b245v7h34og00';

const serviceOptions = [
  'Executive / Close Protection (EP)',
  'Site Security Advances',
  'Intelligence-Based Protection',
  'Threat & Vulnerability Assessment',
  'Private Investigations',
  'Crisis Management & Consulting',
  'Unsure — Need Guidance',
];

interface FinalCTASectionProps {
  heading?: string;
  subheading?: string;
}

export default function FinalCTASection({
  heading = 'Protect What Matters — Start With a Private Consultation',
  subheading = 'Confidential. Professional. No Obligation. Our close protection specialists respond within 2 business hours.',
}: FinalCTASectionProps) {
  const [ref, visible] = useInView<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as URLSearchParams);
    try {
      await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#080808] py-0 border-t border-[#1A1A1A]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 section-reveal ${visible ? 'visible' : ''}`}
        >
          {/* Left: Contact Info */}
          <div className="bg-[#0D0D0D] border-r border-[#1A1A1A] px-10 lg:px-16 py-20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-10 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">Private Consultation</span>
            </div>

            <h2
              className="font-heading text-white font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {heading}
            </h2>
            <p className="text-white/48 text-lg leading-relaxed mb-12 max-w-sm">{subheading}</p>

            {/* Phone CTA */}
            <a
              href="tel:+17139068273"
              className="group inline-flex items-center gap-5 mb-10 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#C9A84C] group-hover:bg-[#E2C97E] transition-colors shrink-0">
                <i className="ri-phone-fill text-black text-2xl" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Speak With a Specialist</p>
                <p className="font-heading text-white font-bold text-3xl leading-none group-hover:text-[#C9A84C] transition-colors">
                  713.906.8273
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:jbeegle@jnbprotectiongroup.com"
              className="flex items-center gap-4 text-white/45 hover:text-[#C9A84C] transition-colors mb-4 cursor-pointer"
            >
              <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <i className="ri-mail-line text-[#C9A84C]" />
              </div>
              <span className="text-sm">jbeegle@jnbprotectiongroup.com</span>
            </a>

            <div className="flex items-start gap-4 text-white/45 mb-12">
              <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <i className="ri-map-pin-line text-[#C9A84C]" />
              </div>
              <div className="text-sm leading-relaxed">
                <p>2951 Marina Bay Dr. Suite 130-#376</p>
                <p>League City, TX 77573</p>
              </div>
            </div>

            {/* Credentials */}
            <div className="border-t border-[#1A1A1A] pt-8">
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: 'ri-shield-check-line', text: 'TX License C12684701' },
                  { icon: 'ri-global-line', text: '100+ Countries' },
                  { icon: 'ri-government-line', text: 'Former Law Enforcement' },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2 text-white/35 text-sm">
                    <i className={`${c.icon} text-[#C9A84C] text-base`} />
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0A0A0A] px-10 lg:px-16 py-20">
            <h3 className="font-heading text-white font-bold text-2xl mb-2">Request a Private Consultation</h3>
            <p className="text-white/35 text-sm mb-8">All inquiries are 100% confidential. We respond within 2 business hours.</p>

            {submitted ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 flex items-center justify-center mx-auto bg-[#C9A84C]/10 border border-[#C9A84C]/30 mb-6">
                  <i className="ri-checkbox-circle-line text-[#C9A84C] text-4xl" />
                </div>
                <h4 className="font-heading text-white text-2xl mb-3">Request Received</h4>
                <p className="text-white/45 text-base max-w-xs mx-auto leading-relaxed">
                  A JNB Protection Group specialist will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-sm uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C]/50 px-4 py-3 text-white text-base placeholder-white/15 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-sm uppercase tracking-widest mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(713) 000-0000"
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C]/50 px-4 py-3 text-white text-base placeholder-white/15 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-sm uppercase tracking-widest mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C]/50 px-4 py-3 text-white text-base placeholder-white/15 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-sm uppercase tracking-widest mb-2">Service Needed</label>
                    <select
                      name="service_needed"
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C]/50 px-4 py-3 text-white text-base outline-none transition-colors cursor-pointer appearance-none"
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/40 text-sm uppercase tracking-widest mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, State"
                      className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C]/50 px-4 py-3 text-white text-base placeholder-white/15 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-sm uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Describe your security needs or situation…"
                    className="w-full bg-[#111111] border border-[#222222] focus:border-[#C9A84C]/50 px-4 py-3 text-white text-base placeholder-white/15 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#C9A84C] hover:bg-[#E2C97E] disabled:opacity-50 text-black font-heading font-bold py-4 text-base tracking-widest uppercase transition-colors cursor-pointer whitespace-nowrap"
                >
                  {submitting ? 'Sending…' : 'Secure Your Environment Today →'}
                </button>

                <p className="text-white/22 text-sm text-center">
                  TX License C12684701 · All inquiries are strictly confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
