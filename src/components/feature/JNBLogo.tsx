export default function JNBLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Shield icon */}
      <div className="w-12 h-12 flex items-center justify-center relative flex-shrink-0">
        <div className="w-11 h-11 bg-[#C9A84C] rounded-sm rotate-45 absolute" />
        <div className="w-9 h-9 bg-[#0A0A0A] rounded-sm rotate-45 absolute" />
        <i className="ri-earth-fill text-[#C9A84C] text-lg relative z-10" />
      </div>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="text-white font-black tracking-widest"
          style={{ fontSize: '2rem', fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.08em' }}
        >
          JNB
        </span>
        <span className="text-[#C9A84C] text-[0.52rem] tracking-[0.22em] uppercase font-semibold">
          Protection Group
        </span>
      </div>
    </div>
  );
}
