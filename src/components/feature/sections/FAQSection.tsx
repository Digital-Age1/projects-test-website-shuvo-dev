import { useState, useRef, useEffect } from "react";
import { SITE } from "../../../mocks/siteData";

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  headline?: string;
  subheadline?: string;
  bg?: string;
}

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

export default function FAQSection({
  faqs,
  headline = "Frequently Asked Questions",
  subheadline = "Everything you need to know about HVAC service in Etobicoke",
  bg = "bg-[#F7F5F1]",
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  useReveal(leftRef as React.RefObject<HTMLElement>, 0);
  useReveal(rightRef as React.RefObject<HTMLElement>, 160);

  return (
    <section className={`${bg} py-24 lg:py-32 overflow-hidden`} id="faq">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="w-10 h-px bg-[#C4902A]" />
          <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">FAQ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* LEFT — Info panel */}
          <div
            ref={leftRef}
            className="lg:col-span-4 lg:sticky lg:top-36"
            style={{ opacity: 0, transform: "translateX(-24px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <h2
              className="font-serif text-[#1A1A1A] leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {headline}
            </h2>
            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-10">{subheadline}</p>

            {/* Stats panel */}
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6">
              {/* Image inside card */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src="https://public.readdy.ai/ai/img_res/edited_c3dd45033656a23b2ea842b0b3791c3e_b74e7608.jpg"
                  alt="Park Lawn Heating expert technician in Etobicoke"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { val: "10+", lbl: "Years Serving Etobicoke" },
                    { val: "5★", lbl: "Google Rating" },
                    { val: "24/7", lbl: "Emergency Service" },
                    { val: "$50", lbl: "Off First Visit" },
                  ].map(s => (
                    <div key={s.lbl} className="text-center">
                      <p
                        className="text-[#C4902A] font-bold text-xl leading-none mb-1"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >{s.val}</p>
                      <p className="text-white/35 text-[10px] leading-tight">{s.lbl}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={`tel:${SITE.phonePlain}`}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#C4902A] text-white font-bold py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm tracking-wide whitespace-nowrap"
                >
                  <i className="ri-phone-fill text-sm"></i>
                  Call {SITE.phone}
                </a>
              </div>
            </div>

            {/* Trust note */}
            <div className="flex items-start gap-3 p-4 bg-[#C4902A]/6 rounded-xl border border-[#C4902A]/15">
              <i className="ri-shield-check-line text-[#C4902A] text-lg shrink-0 mt-0.5"></i>
              <p className="text-[#5A4A2A] text-xs leading-relaxed font-medium">
                Fully licensed &amp; insured. Serving Etobicoke for nearly 10 years with 5-star reviews.
              </p>
            </div>
          </div>

          {/* RIGHT — Accordion */}
          <div
            ref={rightRef}
            className="lg:col-span-8"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <div
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className={`group border-b transition-colors duration-200 ${
                    open === idx ? "border-[#C4902A]/25" : "border-[#E2DED8]"
                  } ${idx === 0 ? "border-t border-[#E2DED8]" : ""}`}
                >
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-6 py-6 lg:py-7 cursor-pointer"
                    aria-expanded={open === idx}
                  >
                    <div className="flex items-start gap-5">
                      {/* Number */}
                      <span
                        className={`font-serif font-bold leading-none shrink-0 mt-0.5 transition-colors duration-200 text-base ${
                          open === idx ? "text-[#C4902A]" : "text-[#C4902A]/30 group-hover:text-[#C4902A]/60"
                        }`}
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", minWidth: "2.2ch" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {/* Question */}
                      <span
                        className={`font-semibold leading-snug text-sm lg:text-[0.95rem] transition-colors duration-200 ${
                          open === idx ? "text-[#1A1A1A]" : "text-[#2C2C2C] group-hover:text-[#1A1A1A]"
                        }`}
                        itemProp="name"
                      >
                        {faq.q}
                      </span>
                    </div>

                    {/* Toggle icon */}
                    <div
                      className={`w-9 h-9 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${
                        open === idx
                          ? "bg-[#C4902A] text-white"
                          : "bg-[#ECEAE5] text-[#6B6B6B] group-hover:bg-[#E2DED8]"
                      }`}
                    >
                      <i className={`text-sm transition-transform duration-300 ${open === idx ? "ri-subtract-line" : "ri-add-line"}`}></i>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      open === idx ? "max-h-[400px] pb-7" : "max-h-0"
                    }`}
                  >
                    <div className="pl-[3.2ch] lg:pl-[3.5ch]">
                      <div className="w-10 h-px bg-[#C4902A]/35 mb-5" />
                      <p
                        className="text-[#5A5A5A] text-sm leading-[1.8]"
                        itemProp="text"
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-10 pt-8 border-t border-[#E2DED8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <p className="text-[#8A8A8A] text-sm leading-relaxed max-w-sm">
                Have a question not answered here? Our team is ready to help.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] border-b border-[#1A1A1A]/25 hover:border-[#C4902A] hover:text-[#C4902A] pb-0.5 transition-colors whitespace-nowrap"
              >
                <i className="ri-mail-line text-sm"></i>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
