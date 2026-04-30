import { SITE } from "../../../mocks/siteData";

const TRUST_ITEMS = [
  {
    icon: "ri-star-fill",
    value: "5-Star",
    label: "Google Rating",
    sub: "Verified Reviews",
    accent: true,
  },
  {
    icon: "ri-time-line",
    value: "24/7",
    label: "Emergency Service",
    sub: "Always Available",
    accent: false,
  },
  {
    icon: "ri-calendar-check-line",
    value: SITE.yearsServing,
    label: "Years Serving",
    sub: "Etobicoke",
    accent: false,
  },
  {
    icon: "ri-shield-check-line",
    value: "Licensed",
    label: "& Fully Insured",
    sub: "Ontario Certified",
    accent: false,
  },
  {
    icon: "ri-building-2-line",
    value: "Condo",
    label: "Specialists",
    sub: "In-Suite Experts",
    accent: false,
  },
  {
    icon: "ri-price-tag-3-line",
    value: "$50 Off",
    label: "First Service",
    sub: "New Client Offer",
    accent: true,
  },
];

export default function TrustBar() {
  return (
    <section
      className="relative border-y border-white/[0.05] overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Top edge gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4902A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-white/[0.05]">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`group flex flex-col items-center justify-center text-center py-6 px-4 transition-colors hover:bg-white/[0.02] ${item.accent ? "bg-[#C4902A]/[0.04]" : ""}`}
            >
              <div className="w-8 h-8 flex items-center justify-center mb-3">
                <i className={`${item.icon} text-xl ${item.accent ? "text-[#C4902A]" : "text-[#C4902A]/65"}`}></i>
              </div>
              <p
                className={`font-bold text-lg leading-none mb-1 ${item.accent ? "text-[#C4902A]" : "text-white"}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {item.value}
              </p>
              <p className={`text-xs font-medium leading-none mb-0.5 ${item.accent ? "text-[#C4902A]/80" : "text-white/50"}`}>
                {item.label}
              </p>
              <p className="text-white/20 text-[10px] leading-none">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4902A]/30 to-transparent" />
    </section>
  );
}
