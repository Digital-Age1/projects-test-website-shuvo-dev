import { useState, FormEvent, useRef, useEffect } from "react";
import { SITE } from "../../../mocks/siteData";

const FORM_URL = "https://readdy.ai/api/form/d72l1gcmc4tbhfnc6h4g";

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateX(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  useReveal(leftRef as React.RefObject<HTMLElement>, 0);
  useReveal(rightRef as React.RefObject<HTMLElement>, 180);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (res.ok) setSubmitted(true);
      else setError("Something went wrong. Please call us directly at " + SITE.phone);
    } catch {
      setError("Network error. Please call us at " + SITE.phone);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      id="lead-form"
      style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #111108 100%)" }}
    >
      {/* Background image — subtle */}
      <div className="absolute inset-0">
        <img
          src="https://public.readdy.ai/ai/img_res/edited_c3dd45033656a23b2ea842b0b3791c3e_048cff2b.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.08]"
        />
      </div>
      {/* Gold glow — left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 70% at 20% 50%, rgba(196,144,42,0.06) 0%, transparent 65%)" }}
      />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4902A]/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT — Contact info */}
          <div
            ref={leftRef}
            className="lg:col-span-5"
            style={{ opacity: 0, transform: "translateX(-24px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Contact Us</p>
            </div>
            <h2
              className="font-serif text-white leading-tight mb-5"
              style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Request Service or a Free Quote
            </h2>
            <p className="text-white/45 leading-relaxed mb-10 text-sm max-w-sm">
              Fill out the form and we&apos;ll respond promptly. For emergencies, call us directly — available 24/7.
            </p>

            {/* Contact list */}
            <div className="space-y-5 mb-10">
              <a href={`tel:${SITE.phonePlain}`} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C4902A]/10 border border-[#C4902A]/20 group-hover:bg-[#C4902A]/20 transition-colors shrink-0">
                  <i className="ri-phone-line text-[#C4902A] text-lg"></i>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium mb-0.5">Phone</p>
                  <p className="text-white font-semibold text-base">{SITE.phone}</p>
                </div>
              </a>

              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C4902A]/10 border border-[#C4902A]/20 group-hover:bg-[#C4902A]/20 transition-colors shrink-0">
                  <i className="ri-mail-line text-[#C4902A] text-lg"></i>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium mb-0.5">Email</p>
                  <p className="text-white font-semibold text-sm">{SITE.email}</p>
                </div>
              </a>

              <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C4902A]/10 border border-[#C4902A]/20 group-hover:bg-[#C4902A]/20 transition-colors shrink-0">
                  <i className="ri-map-pin-line text-[#C4902A] text-lg"></i>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium mb-0.5">Address</p>
                  <p className="text-white font-medium text-sm">{SITE.address}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C4902A]/10 border border-[#C4902A]/20 shrink-0">
                  <i className="ri-time-line text-[#C4902A] text-lg"></i>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium mb-0.5">Hours</p>
                  <p className="text-white/65 text-sm">{SITE.hours.weekday}</p>
                  <p className="text-white/65 text-sm">{SITE.hours.weekend}</p>
                  <p className="text-[#C4902A] text-sm font-semibold">{SITE.hours.emergency}</p>
                </div>
              </div>
            </div>

            {/* Promo badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#C4902A]/10 border border-[#C4902A]/25 rounded-full px-5 py-2.5">
              <i className="ri-price-tag-3-line text-[#C4902A] text-sm"></i>
              <span className="text-[#C4902A] text-xs font-semibold">$50 Off — New Client Offer</span>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            ref={rightRef}
            className="lg:col-span-7"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-white/10">
              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C4902A]/10 mx-auto mb-5">
                    <i className="ri-check-line text-[#C4902A] text-2xl"></i>
                  </div>
                  <h3 className="font-serif text-[#1A1A1A] text-2xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Message Sent!
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you for reaching out. Our team will contact you shortly. For urgent service, call&nbsp;
                    <a href={`tel:${SITE.phonePlain}`} className="text-[#C4902A] font-semibold">{SITE.phone}</a>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  data-readdy-form
                  id="park-lawn-contact-form"
                  className="space-y-5"
                >
                  <div className="mb-7">
                    <h3
                      className="font-serif text-[#1A1A1A] text-xl mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Send Us a Message
                    </h3>
                    <p className="text-[#8A8A8A] text-xs">We respond within 1 business day. Emergencies answered 24/7.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#8A8A8A] uppercase tracking-[0.18em] mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        required
                        className="w-full border border-[#E5E2DD] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C5C2BD] focus:outline-none focus:border-[#C4902A] focus:ring-1 focus:ring-[#C4902A]/20 transition-all bg-[#FAFAF9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#8A8A8A] uppercase tracking-[0.18em] mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(416) 000-0000"
                        className="w-full border border-[#E5E2DD] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C5C2BD] focus:outline-none focus:border-[#C4902A] focus:ring-1 focus:ring-[#C4902A]/20 transition-all bg-[#FAFAF9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#8A8A8A] uppercase tracking-[0.18em] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full border border-[#E5E2DD] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C5C2BD] focus:outline-none focus:border-[#C4902A] focus:ring-1 focus:ring-[#C4902A]/20 transition-all bg-[#FAFAF9]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#8A8A8A] uppercase tracking-[0.18em] mb-2">Service Needed</label>
                    <select
                      name="service"
                      className="w-full border border-[#E5E2DD] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4902A] focus:ring-1 focus:ring-[#C4902A]/20 transition-all bg-[#FAFAF9]"
                    >
                      <option value="">Select a service...</option>
                      <option>Emergency Repair</option>
                      <option>Furnace Repair</option>
                      <option>AC Repair</option>
                      <option>HVAC Installation</option>
                      <option>Maintenance Service</option>
                      <option>Condo Fan Coil / Heat Pump</option>
                      <option>Hot Water Repair</option>
                      <option>Indoor Air Quality</option>
                      <option>Free Estimate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#8A8A8A] uppercase tracking-[0.18em] mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={500}
                      placeholder="Describe your HVAC issue or what you need help with..."
                      className="w-full border border-[#E5E2DD] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#C5C2BD] focus:outline-none focus:border-[#C4902A] focus:ring-1 focus:ring-[#C4902A]/20 transition-all resize-none bg-[#FAFAF9]"
                    />
                  </div>

                  {error && <p className="text-red-500 text-xs">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C4902A] text-white font-bold py-4 rounded-full hover:bg-[#d4a030] active:scale-[0.98] transition-all disabled:opacity-60 whitespace-nowrap tracking-wider text-sm shadow-lg shadow-[#C4902A]/20"
                  >
                    {loading ? "Sending..." : "Send Message — We Respond Promptly"}
                  </button>

                  <p className="text-center text-xs text-[#8A8A8A]">
                    Emergency? Call directly:&nbsp;
                    <a href={`tel:${SITE.phonePlain}`} className="text-[#C4902A] font-bold">{SITE.phone}</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
