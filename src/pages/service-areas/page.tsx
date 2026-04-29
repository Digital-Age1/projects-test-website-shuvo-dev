import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import TrustBar from "@/components/feature/sections/TrustBar";
import FinalCTA from "@/components/feature/sections/FinalCTA";
import { SITE } from "@/mocks/siteData";

const CITIES = [
  {
    name: "Etobicoke",
    slug: "etobicoke",
    description: "Our home base. Park Lawn Heating has been Etobicoke's trusted HVAC contractor for over 10 years — from Mimico to Rexdale, Long Branch to The Kingsway.",
    image: "https://readdy.ai/api/search-image?query=Etobicoke%20Toronto%20residential%20neighbourhood%20aerial%20view%2C%20suburban%20homes%2C%20tree-lined%20streets%2C%20Lake%20Ontario%20waterfront%2C%20warm%20sunny%20day%2C%20beautiful%20community&width=800&height=500&seq=etobicoke-city&orientation=landscape",
    areas: ["Mimico", "New Toronto", "Long Branch", "Alderwood", "Islington", "Humber Bay", "Stonegate-Queensway", "The Kingsway", "Rexdale", "Sunnylea"],
    highlight: "Primary Service Area",
  },
  {
    name: "Toronto",
    slug: "toronto",
    description: "Serving Toronto homeowners and businesses across the west end and beyond — Parkdale, High Park, Bloor West Village, Junction, Roncesvalles, and more.",
    image: "https://readdy.ai/api/search-image?query=Toronto%20city%20skyline%20with%20CN%20Tower%2C%20residential%20neighbourhoods%2C%20beautiful%20urban%20landscape%2C%20sunny%20day%2C%20vibrant%20city%20view%20from%20above&width=800&height=500&seq=toronto-city&orientation=landscape",
    areas: ["Parkdale", "High Park", "Bloor West Village", "Junction", "Roncesvalles", "North York", "Scarborough", "East York", "Swansea", "Lakeshore"],
    highlight: "Full Coverage",
  },
  {
    name: "Mississauga",
    slug: "mississauga",
    description: "Extending our expert HVAC services to Mississauga — Port Credit, Streetsville, Meadowvale, Erin Mills, Cooksville, and surrounding communities.",
    image: "https://readdy.ai/api/search-image?query=Mississauga%20Ontario%20residential%20neighbourhood%2C%20suburban%20homes%2C%20Port%20Credit%20waterfront%2C%20beautiful%20community%2C%20sunny%20day%2C%20Lake%20Ontario%20shoreline&width=800&height=500&seq=mississauga-city&orientation=landscape",
    areas: ["Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "Cooksville", "Malton", "Lakeview", "Oakville border", "Brampton border", "Clarkson"],
    highlight: "Extended Coverage",
  },
];

const SERVICES = [
  { label: "AC Repair", slug: "air-conditioning-repair", icon: "ri-temp-cold-line" },
  { label: "Furnace Repair", slug: "furnace-repair", icon: "ri-fire-line" },
  { label: "Heating & Cooling", slug: "heating-and-cooling-service", icon: "ri-contrast-2-line" },
  { label: "Residential HVAC", slug: "residential-hvac-services", icon: "ri-home-line" },
  { label: "Commercial HVAC", slug: "commercial-hvac-services", icon: "ri-building-line" },
  { label: "Boiler Services", slug: "boiler-services", icon: "ri-water-flash-line" },
  { label: "Water Heater", slug: "water-heater-services", icon: "ri-drop-line" },
  { label: "Gas Line", slug: "gas-line-services", icon: "ri-gas-station-line" },
  { label: "Pool Heater", slug: "pool-heater-services", icon: "ri-water-percent-line" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[420px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20Etobicoke%20Toronto%20Mississauga%20Greater%20Toronto%20Area%20residential%20neighbourhoods%2C%20Lake%20Ontario%20shoreline%2C%20beautiful%20suburban%20landscape%2C%20sunny%20day%2C%20wide%20panoramic%20view&width=1600&height=600&seq=service-areas-hero&orientation=landscape"
              alt="Service areas map Etobicoke Toronto Mississauga"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-20">
            <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#C4902A]"></span>
              Where We Work
            </p>
            <h1
              className="text-white font-serif leading-tight mb-5 max-w-2xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Playfair Display', Georgia, serif", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              HVAC Service Areas —<br />Etobicoke, Toronto & Mississauga
            </h1>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xl mb-8 font-medium" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
              Park Lawn Heating serves homeowners and businesses across Etobicoke, Toronto, and Mississauga. Licensed technicians, 24/7 emergency service, same-week estimates.
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

        {/* City cards */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Our Coverage
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Three Cities, One Trusted Team
              </h2>
              <p className="text-[#6B6B6B] text-sm max-w-xl mx-auto leading-relaxed">
                Whether you're in Etobicoke, Toronto, or Mississauga, Park Lawn Heating brings the same licensed expertise, transparent pricing, and 24/7 emergency service to your door.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {CITIES.map((city) => (
                <div key={city.slug} className="bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden group hover:border-[#C4902A]/30 transition-colors">
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={city.image}
                      alt={`HVAC service in ${city.name}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C4902A] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                        {city.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-[#1A1A1A] text-xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {city.name}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">{city.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {city.areas.slice(0, 6).map((area) => (
                        <span key={area} className="bg-[#FAF8F5] text-[#6B6B6B] text-[11px] px-2.5 py-1 rounded-full border border-[#EAE8E3]">
                          {area}
                        </span>
                      ))}
                      <span className="bg-[#FAF8F5] text-[#C4902A] text-[11px] px-2.5 py-1 rounded-full border border-[#C4902A]/20 font-medium">
                        +{city.areas.length - 6} more
                      </span>
                    </div>
                    <Link
                      to={`/${city.slug}`}
                      className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-semibold py-3 rounded-full hover:bg-[#C4902A] transition-colors text-sm whitespace-nowrap"
                    >
                      View {city.name} Services
                      <i className="ri-arrow-right-line text-xs"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Services by city grid */}
            <div className="mb-6">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                All Services by City
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight mb-10"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Find Your City &amp; Service
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CITIES.map((city) => (
                <div key={city.slug} className="bg-white rounded-2xl border border-[#EAE8E3] p-7">
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#EAE8E3]">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10 shrink-0">
                      <i className="ri-map-pin-line text-[#C4902A] text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] text-base">{city.name}</h3>
                      <p className="text-[#6B6B6B] text-xs">{city.highlight}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/${city.slug}/${service.slug}`}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[#6B6B6B] text-sm hover:bg-[#FAF8F5] hover:text-[#C4902A] transition-colors group cursor-pointer"
                      >
                        <div className="w-7 h-7 flex items-center justify-center shrink-0">
                          <i className={`${service.icon} text-[#C4902A] text-sm`}></i>
                        </div>
                        <span className="flex-1">{service.label}</span>
                        <i className="ri-arrow-right-line text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map embed */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  Our Location
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-5"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Based in Etobicoke,<br />Serving the GTA
                </h2>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                  Park Lawn Heating and Cooling Inc. is based at 246 Park Lawn Road in Etobicoke — perfectly positioned to serve Etobicoke, Toronto, and Mississauga quickly and efficiently.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <i className="ri-map-pin-line text-[#C4902A]"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A] text-sm">Address</p>
                      <p className="text-[#6B6B6B] text-sm">{SITE.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <i className="ri-phone-line text-[#C4902A]"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A] text-sm">Phone</p>
                      <a href={`tel:${SITE.phonePlain}`} className="text-[#C4902A] text-sm font-semibold hover:underline">{SITE.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <i className="ri-time-line text-[#C4902A]"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A] text-sm">Hours</p>
                      <p className="text-[#6B6B6B] text-sm">{SITE.hours.weekday}</p>
                      <p className="text-[#6B6B6B] text-sm">{SITE.hours.emergency}</p>
                    </div>
                  </div>
                </div>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C4902A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm whitespace-nowrap"
                >
                  <i className="ri-map-pin-line"></i>
                  Get Directions
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#EAE8E3] h-[380px]">
                <iframe
                  src={SITE.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Park Lawn Heating location map"
                />
              </div>
            </div>
          </div>
        </section>

        <FinalCTA
          headline="Ready to Book HVAC Service in Your Area?"
          subheadline="Licensed technicians serving Etobicoke, Toronto, and Mississauga. Call now or book online — same-week estimates available."
          ctaLabel={`Call ${SITE.phone}`}
          ctaHref={`tel:${SITE.phonePlain}`}
        />
      </main>
      <Footer />
    </>
  );
}
