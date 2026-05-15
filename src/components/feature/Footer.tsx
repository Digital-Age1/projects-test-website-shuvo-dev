export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand + contact */}
        <div>
          <img
            src="/uploads/logo-trimming-edge.png"
            alt="JNB Protection Group"
            className="h-36 w-auto object-contain mb-4"
          />
          <div className="flex flex-col gap-1.5">
            <a href="tel:+17139068273" className="flex items-center gap-2 text-white/40 hover:text-[#C9A84C] text-sm transition-colors cursor-pointer">
              <i className="ri-phone-fill text-[#C9A84C] text-sm" />
              713.906.8273
            </a>
            <a href="mailto:jbeegle@jnbprotectiongroup.com" className="flex items-center gap-2 text-white/40 hover:text-[#C9A84C] text-sm transition-colors cursor-pointer">
              <i className="ri-mail-fill text-[#C9A84C] text-sm" />
              jbeegle@jnbprotectiongroup.com
            </a>
            <p className="flex items-center gap-2 text-white/30 text-sm">
              <i className="ri-map-pin-fill text-[#C9A84C]/60 text-sm" />
              League City, TX 77573 &bull; State License: C12684701
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-start sm:items-end">
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} JNB Protection Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
