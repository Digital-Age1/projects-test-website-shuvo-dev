import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import TrustBar from "@/components/feature/sections/TrustBar";
import TestimonialsSection from "@/components/feature/sections/TestimonialsSection";
import FAQSection from "@/components/feature/sections/FAQSection";
import FinalCTA from "@/components/feature/sections/FinalCTA";
import { SITE } from "@/mocks/siteData";

export interface CityServiceConfig {
  city: string;
  citySlug: string;
  serviceTitle: string;
  serviceSlug: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  introHeading: string;
  introBody: string[];
  whyHeading: string;
  whyBullets?: { title: string; body: string }[];
  systemsGrid: { icon: string; title: string; description: string; image: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  nearbyAreas: string[];
}

interface Props {
  config: CityServiceConfig;
}

const ALL_SERVICES = [
  { label: "AC Repair", slug: "air-conditioning-repair" },
  { label: "Furnace Repair", slug: "furnace-repair" },
  { label: "Heating & Cooling", slug: "heating-and-cooling-service" },
  { label: "Residential HVAC", slug: "residential-hvac-services" },
  { label: "Commercial HVAC", slug: "commercial-hvac-services" },
  { label: "Boiler Services", slug: "boiler-services" },
  { label: "Water Heater", slug: "water-heater-services" },
  { label: "Gas Line", slug: "gas-line-services" },
  { label: "Pool Heater", slug: "pool-heater-services" },
];

export default function CityServicePage({ config }: Props) {
  const otherServices = ALL_SERVICES.filter((s) => s.slug !== config.serviceSlug);

  return (
    <>
      <title>{config.metaTitle}</title>
      <meta name="description" content={config.metaDescription} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={config.heroImage}
              alt={`${config.serviceTitle} in ${config.city}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/30" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <i className="ri-arrow-right-s-line text-white/30"></i>
              <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <i className="ri-arrow-right-s-line text-white/30"></i>
              <Link to={`/${config.citySlug}`} className="hover:text-white transition-colors">{config.city}</Link>
              <i className="ri-arrow-right-s-line text-white/30"></i>
              <span className="text-white/70">{config.serviceTitle}</span>
            </nav>
            <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#C4902A]"></span>
              {config.city} HVAC Specialists
            </p>
            <h1
              className="text-white font-serif leading-tight mb-6 max-w-2xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Playfair Display', Georgia, serif", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
              dangerouslySetInnerHTML={{ __html: config.heroHeadline }}
            />
            <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-medium" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
              {config.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-all whitespace-nowrap text-sm shadow-lg"
              >
                <i className="ri-phone-fill"></i>
                Call {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all whitespace-nowrap text-sm"
              >
                Get a Free Estimate
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Intro + sidebar */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  {config.city} HVAC Experts
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-8"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {config.introHeading}
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  {config.introBody.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Why choose */}
                {config.whyBullets && config.whyBullets.length > 0 && (
                  <div className="mt-12">
                    <h3 className="font-serif text-[#1A1A1A] text-xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {config.whyHeading}
                    </h3>
                    <ul className="space-y-3">
                      {config.whyBullets.map((b) => (
                        <li key={b.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#EAE8E3]">
                          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C4902A]/10 shrink-0 mt-0.5">
                            <i className="ri-check-line text-[#C4902A] text-xs"></i>
                          </div>
                          <div>
                            <span className="font-semibold text-[#1A1A1A] text-sm">{b.title}: </span>
                            <span className="text-[#6B6B6B] text-sm leading-relaxed">{b.body}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Systems grid */}
                {config.systemsGrid.length > 0 && (
                  <div className="mt-14">
                    <h3 className="font-serif text-[#1A1A1A] text-xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      All Systems We Service in {config.city}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {config.systemsGrid.map((item) => (
                        <article
                          key={item.title}
                          className="bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden hover:border-[#C4902A]/30 transition-colors group"
                        >
                          <div className="w-full h-40 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#C4902A]/10 shrink-0">
                                <i className={`${item.icon} text-[#C4902A] text-sm`}></i>
                              </div>
                              <h4 className="font-semibold text-[#1A1A1A] text-sm">{item.title}</h4>
                            </div>
                            <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.description}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA card */}
                <div className="bg-[#0D0D0D] rounded-2xl p-7 text-white">
                  <p className="text-[#C4902A] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">24/7 Emergency Service</p>
                  <h3 className="font-serif text-lg mb-3 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Need {config.serviceTitle} in {config.city}?
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-6">
                    Our licensed technicians are ready to help. Same-week estimates, transparent pricing, no surprises.
                  </p>
                  <a
                    href={`tel:${SITE.phonePlain}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm mb-3 whitespace-nowrap"
                  >
                    <i className="ri-phone-fill"></i>
                    {SITE.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 border border-white/15 text-white/70 font-semibold py-3.5 rounded-full hover:bg-white/[0.05] hover:text-white transition-colors text-sm whitespace-nowrap"
                  >
                    Book Online
                    <i className="ri-arrow-right-line text-xs"></i>
                  </Link>
                </div>

                {/* Other services */}
                <div className="bg-white rounded-2xl border border-[#EAE8E3] p-6">
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-4">More Services in {config.city}</h4>
                  <div className="space-y-1">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${config.citySlug}/${s.slug}`}
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg text-[#6B6B6B] text-xs hover:bg-[#FAF8F5] hover:text-[#C4902A] transition-colors group"
                      >
                        <span>{s.label}</span>
                        <i className="ri-arrow-right-line text-[#C4902A] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Nearby areas */}
                <div className="bg-white rounded-2xl border border-[#EAE8E3] p-6">
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-4">Nearby Areas We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {config.nearbyAreas.map((area) => (
                      <span
                        key={area}
                        className="bg-[#FAF8F5] text-[#6B6B6B] text-xs px-3 py-1.5 rounded-full border border-[#EAE8E3]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Emergency strip */}
        <div className="bg-[#0D0D0D] py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Available 24 Hours a Day</p>
              <h3
                className="text-white font-serif"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                HVAC emergency in {config.city}? Don&apos;t wait — call now
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill"></i>
                {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/[0.07] transition-colors whitespace-nowrap text-sm"
              >
                Book Online
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <TestimonialsSection />

        <FAQSection
          faqs={config.faqs}
          headline={`${config.serviceTitle} in ${config.city} — FAQ`}
          subheadline={`Common questions from ${config.city} homeowners`}
        />

        <FinalCTA
          headline={`${config.serviceTitle} in ${config.city} — We&apos;re Ready`}
          subheadline="Licensed technicians, transparent pricing, same-week estimates. Call or book online today."
          ctaLabel={`Call ${SITE.phone}`}
          ctaHref={`tel:${SITE.phonePlain}`}
        />
      </main>
      <Footer />
    </>
  );
}
