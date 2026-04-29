import { BRANDS } from "../../../mocks/siteData";
import { useRef } from "react";

export default function BrandsBar() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="bg-[#F5F3EF] pt-8 pb-0 lg:pt-10 border-b border-[#EAE8E3]/80"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Label */}
          <div className="shrink-0 text-center lg:text-left">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C4902A] mb-1">
              Trusted Brands
            </p>
            <p className="text-[#8A8A8A] text-xs leading-snug max-w-[120px] lg:max-w-[130px]">
              We install &amp; service the best
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-[#D0CCC8] shrink-0" />

          {/* Brands */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-10">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center h-10 opacity-40 hover:opacity-75 transition-all duration-300 grayscale hover:grayscale-0"
                title={brand.name}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} HVAC — installed by Park Lawn Heating Etobicoke`}
                    className="h-9 w-auto object-contain max-w-[100px]"
                  />
                ) : (
                  <span className="text-[#1A1A1A] font-bold text-sm tracking-wide uppercase whitespace-nowrap">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
