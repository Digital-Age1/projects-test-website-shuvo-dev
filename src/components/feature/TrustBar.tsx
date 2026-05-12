import { useInView } from '../../hooks/useInView';

const stats = [
  {
    number: '100+',
    label: 'Countries Operated In',
    sub: 'Global partner network',
    icon: 'ri-global-fill',
  },
  {
    number: '15+',
    label: 'Years of Experience',
    sub: 'Field-tested expertise',
    icon: 'ri-award-fill',
  },
  {
    number: '24/7',
    label: 'Active Coverage',
    sub: 'Always on, always ready',
    icon: 'ri-time-fill',
  },
  {
    number: '100%',
    label: 'Former Law Enforcement',
    sub: 'Federal, State & Local agents',
    icon: 'ri-shield-star-fill',
  },
];

export default function TrustBar() {
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#080808] border-b border-[#1E1E1E]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-16 section-reveal ${visible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center py-10 px-8 ${i < stats.length - 1 ? 'border-r border-[#1E1E1E]' : ''} ${i >= 2 ? 'border-t border-[#1E1E1E] lg:border-t-0' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-8 h-8 flex items-center justify-center mb-3">
                <i className={`${stat.icon} text-[#C9A84C] text-xl`} />
              </div>
              <p className="font-heading font-bold text-[#C9A84C] leading-none mb-2" style={{ fontSize: '2.8rem' }}>
                {stat.number}
              </p>
              <p className="font-heading text-white font-semibold text-lg leading-tight mb-1">{stat.label}</p>
              <p className="text-white/35 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
