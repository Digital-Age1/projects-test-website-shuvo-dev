import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import LeadFormSection from "@/components/feature/sections/LeadFormSection";
import { SITE } from "@/mocks/siteData";

const BLOG_POSTS = [
  {
    id: 1,
    slug: "heat-pump-rebates-ontario-2024",
    category: "Heat Pumps",
    title: "How to Get Up to $7,500 in Heat Pump Rebates in Ontario",
    excerpt:
      "The Canada Greener Homes Grant and Ontario rebate programs can significantly offset the cost of a new heat pump. Here is everything Etobicoke homeowners need to know about qualifying and applying.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://readdy.ai/api/search-image?query=modern%20heat%20pump%20outdoor%20unit%20at%20residential%20home%20in%20Ontario%20Canada%2C%20professional%20installation%2C%20clean%20backyard%2C%20energy%20efficient%20heating%2C%20clear%20sky&width=800&height=500&seq=blog1&orientation=landscape",
  },
  {
    id: 2,
    slug: "ductless-mini-split-etobicoke",
    category: "Ductless A/C",
    title: "Is a Ductless Mini Split Right for Your Etobicoke Home?",
    excerpt:
      "Ductless mini split systems are one of the most popular HVAC upgrades in Etobicoke. Find out if your home is a good candidate and what to expect from the installation process.",
    date: "February 28, 2024",
    readTime: "6 min read",
    image: "https://readdy.ai/api/search-image?query=ductless%20mini%20split%20air%20conditioner%20wall%20unit%20installed%20in%20modern%20Etobicoke%20home%20interior%2C%20white%20wall%2C%20clean%20living%20room%2C%20professional%20installation&width=800&height=500&seq=blog2&orientation=landscape",
  },
  {
    id: 3,
    slug: "furnace-maintenance-checklist",
    category: "Maintenance",
    title: "Annual Furnace Maintenance Checklist for Etobicoke Homeowners",
    excerpt:
      "Regular furnace maintenance prevents costly breakdowns and extends equipment life. Here is what our technicians check during every annual maintenance visit.",
    date: "February 10, 2024",
    readTime: "4 min read",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20annual%20furnace%20maintenance%20inspection%2C%20checking%20components%2C%20clean%20basement%20utility%20room%2C%20professional%20tools%2C%20detailed%20work&width=800&height=500&seq=blog3&orientation=landscape",
  },
  {
    id: 4,
    slug: "condo-fan-coil-replacement-guide",
    category: "Condos",
    title: "The Complete Guide to Condo Fan Coil Replacement in Toronto",
    excerpt:
      "Fan coil replacement in a condo is different from a house — building regulations, water loops, and space constraints all play a role. Here is what you need to know before booking service.",
    date: "January 22, 2024",
    readTime: "7 min read",
    image: "https://readdy.ai/api/search-image?query=fan%20coil%20unit%20replacement%20in%20Toronto%20condominium%20suite%2C%20HVAC%20technician%20working%2C%20compact%20space%2C%20professional%20installation%2C%20modern%20condo%20interior&width=800&height=500&seq=blog4&orientation=landscape",
  },
  {
    id: 5,
    slug: "emergency-hvac-etobicoke",
    category: "Emergency Service",
    title: "What to Do When Your Furnace Stops Working in Etobicoke",
    excerpt:
      "A furnace failure in winter is a genuine emergency. Here is a step-by-step guide on what to check first, when to call a professional, and how Park Lawn Heating responds to HVAC emergencies.",
    date: "January 8, 2024",
    readTime: "5 min read",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20responding%20to%20emergency%20furnace%20repair%20call%20at%20residential%20home%20in%20winter%2C%20professional%20tools%2C%20urgent%20repair%2C%20Etobicoke%20Toronto&width=800&height=500&seq=blog5&orientation=landscape",
  },
  {
    id: 6,
    slug: "heat-pump-vs-furnace-etobicoke",
    category: "Heat Pumps",
    title: "Heat Pump vs. Furnace: Which is Better for Etobicoke Homes?",
    excerpt:
      "Choosing between a heat pump and a furnace is one of the biggest HVAC decisions Etobicoke homeowners face. We break down the costs, efficiency, and performance of each option.",
    date: "December 18, 2023",
    readTime: "8 min read",
    image: "https://readdy.ai/api/search-image?query=comparison%20of%20heat%20pump%20and%20furnace%20systems%20for%20residential%20home%2C%20modern%20HVAC%20equipment%2C%20professional%20installation%2C%20Etobicoke%20Toronto%20home&width=800&height=500&seq=blog6&orientation=landscape",
  },
  {
    id: 7,
    slug: "indoor-air-quality-tips",
    category: "Air Quality",
    title: "5 Ways to Improve Indoor Air Quality in Your Etobicoke Home",
    excerpt:
      "Indoor air quality affects your health, comfort, and energy bills. From HEPA filters to UV purifiers, here are the most effective upgrades for Etobicoke homes.",
    date: "December 5, 2023",
    readTime: "5 min read",
    image: "https://readdy.ai/api/search-image?query=clean%20modern%20home%20interior%20with%20air%20purifier%20and%20HVAC%20system%2C%20fresh%20air%20quality%2C%20bright%20living%20room%2C%20healthy%20home%20environment%2C%20Etobicoke%20Toronto&width=800&height=500&seq=blog7&orientation=landscape",
  },
  {
    id: 8,
    slug: "ac-installation-etobicoke",
    category: "Installation",
    title: "How to Choose the Right Air Conditioner for Your Etobicoke Home",
    excerpt:
      "With so many AC options available, choosing the right system can be overwhelming. Our guide covers central AC, ductless mini splits, and heat pumps to help you make the best decision.",
    date: "November 20, 2023",
    readTime: "6 min read",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20installing%20new%20air%20conditioning%20system%20at%20Etobicoke%20residential%20home%2C%20professional%20installation%2C%20outdoor%20condenser%20unit%2C%20clear%20sky&width=800&height=500&seq=blog8&orientation=landscape",
  },
  {
    id: 9,
    slug: "boiler-vs-furnace",
    category: "Heating",
    title: "Boiler vs. Furnace: Understanding Your Heating Options",
    excerpt:
      "Many older Etobicoke homes use boilers while newer builds typically have furnaces. Understanding the difference helps you make informed decisions about repairs, maintenance, and upgrades.",
    date: "November 5, 2023",
    readTime: "5 min read",
    image: "https://readdy.ai/api/search-image?query=residential%20boiler%20system%20and%20furnace%20comparison%2C%20clean%20mechanical%20room%2C%20professional%20HVAC%20equipment%2C%20pipes%20and%20connections%2C%20Etobicoke%20home&width=800&height=500&seq=blog9&orientation=landscape",
  },
];

const CATEGORIES = ["All", "Heat Pumps", "Ductless A/C", "Maintenance", "Condos", "Emergency Service", "Air Quality", "Installation", "Heating"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <div
          className="relative pt-[110px] pb-20 lg:pb-28"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1A160A 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,144,42,0.08) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              HVAC Tips & Insights
              <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
            </p>
            <h1
              className="text-white font-serif leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Park Lawn Heating Blog
            </h1>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Expert HVAC tips, guides, and insights for Etobicoke homeowners and condo residents.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="bg-white border-b border-[#EAE8E3] sticky top-[110px] z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#C4902A] text-white"
                      : "bg-[#F5F3F0] text-[#6B6B6B] hover:bg-[#EAE8E3] hover:text-[#1A1A1A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-[#FAF8F5] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            {featured && (
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden mb-12 group hover:border-[#C4902A]/30 transition-colors">
                <div className="w-full h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#C4902A]/10 text-[#C4902A] text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-[#8A8A8A] text-xs">{featured.date}</span>
                    <span className="text-[#8A8A8A] text-xs">· {featured.readTime}</span>
                  </div>
                  <h2
                    className="font-serif text-[#1A1A1A] leading-tight mb-4"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#C4902A] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </article>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden hover:border-[#C4902A]/30 transition-colors group"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#C4902A]/10 text-[#C4902A] text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[#8A8A8A] text-xs">{post.readTime}</span>
                    </div>
                    <h3
                      className="font-serif text-[#1A1A1A] leading-snug mb-3"
                      style={{ fontSize: "1.05rem", fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8A8A8A] text-xs">{post.date}</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-[#C4902A] font-semibold text-xs hover:gap-2 transition-all"
                      >
                        Read More <i className="ri-arrow-right-line text-xs"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <div className="bg-[#0D0D0D] py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Ready to Book?</p>
              <h3
                className="text-white font-serif"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Get expert HVAC service in Etobicoke today
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
              >
                Book Service
                <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/[0.07] transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill text-[#C4902A]"></i>
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
