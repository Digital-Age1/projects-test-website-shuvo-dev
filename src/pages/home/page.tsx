import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const services = [
  { icon: 'ri-vip-crown-fill', title: 'Executive & VIP Protection', slug: '#contact' },
  { icon: 'ri-search-eye-fill', title: 'Private Investigations', slug: '#contact' },
  { icon: 'ri-radar-fill', title: 'Site Security Advances and Advance Threat Protection', slug: '#contact' },
  { icon: 'ri-spy-fill', title: 'Proactive Intelligence & Security Concierge', slug: '#contact' },
  { icon: 'ri-shield-check-fill', title: 'Physical, Threat, and Vulnerability Assessments', slug: '#contact' },
];

const teamMembers = [
  {
    name: 'John Beegle',
    title: 'Founder & President',
    image: 'https://jnbprotectiongroup.com/images/JohnBeegle.jpg',
    bio: [
      'John Beegle brings over 28 years of comprehensive experience in law enforcement, criminal and civil investigations, private investigations, advanced threat protection, site vulnerability assessments, and executive protection. He is the Founder and President of JNB Protection Group, where he leads the delivery of proactive, intelligence-driven security and concierge protection services to clients worldwide.',
      'Mr. Beegle specializes in site security assessments, in-depth threat and vulnerability analysis, secure transportation, and close protection operations. Following a distinguished career in law enforcement, he transitioned into the private sector to pursue his expertise in personal protection. Over the years, he has cultivated an extensive network of elite professionals, enabling collaboration with some of the most highly trained protection agents globally, including former members of federal agencies and specialized law enforcement units.',
      'His client portfolio includes Fortune 50 corporations and their executive leadership, high-profile and ultra-high-net-worth individuals and families, celebrities, foreign dignitaries, U.S. Senators, presidential candidates, and Royal family members.',
      'Prior to founding JNB Protection Group, Mr. Beegle served as a sworn police officer and Domestic Violence Detective, where he specialized in investigating domestic violence cases. He holds a Bachelor of Science degree in Social Justice from Olivet Nazarene University.',
    ],
  },
  {
    name: 'Kevin Cote',
    title: 'senior protection professional',
    image: 'https://jnbprotectiongroup.com/images/Mr.Cote.jpg',
    bio: [
      'Kevin Cote is a seasoned law enforcement and protective services professional with more than 33 years of experience spanning criminal investigations, law enforcement operations, and executive protection. He concluded his distinguished law enforcement career as a Police Detective assigned to the Violent Crimes Unit.',
      'Over the past 15+ years, Kevin has delivered elite executive and close protection services to Fortune 100 corporations, C-suite executives and their families, high-profile entertainers, ultra-high-net-worth individuals, and both domestic and international political figures. His extensive field experience is complemented by a disciplined approach to risk mitigation and personal security.',
      'Kevin serves as a Lead Protective Agent with JNB Protection Group, where he directs protective teams in the execution of complex and highly sensitive assignments. He is recognized for his leadership under pressure, operational precision, and commitment to client safety and confidentiality.',
      'He holds an Executive Protection Certification from LaSorsa & Associates, further underscoring his expertise and professionalism in the field.',
    ],
  },
  {
    name: 'Christopher Sanchez',
    title: 'Director of Intelligence & Advance Threat Protection — Senior Associate',
    image: 'https://jnbprotectiongroup.com/picsLg/5ef665febdb10CHRISTOPHER-SANCHEZ.jpg',
    bio: [
      "Christopher has over 28 years of national security, crisis management, forensic investigations, advance threat protection and site vulnerability assessments. He is currently the Director of Intelligence & Advance Threat Protection for JNB Protection Group. He is helping clients in all industries manage a myriad of business, financial, legal, regulatory and reputational risk. Christopher specializes in conducting site security advances and criminal investigations, as well as physical, threat and vulnerability assessments to include protective intelligence investigations. He also assists clients in achieving their desired protection from the Department of Homeland Security's SAFETY Act.",
      'Christopher is also part of the Intelligence practice group that offers a full spectrum of governance, compliance, investigative, anti-corruption and intelligence services across all sectors of business — both public and private. In addition he heads JNB Protection Group Sports Intelligence practice which helps professional sports teams manage threats and increase opportunities to teams, players, ownership organizations, and events by integrating key capabilities to help sports organizations and event venues manage threats to their brand, their teams and their fans.',
      "Prior to joining JNB Protection Group, Christopher was a Managing Director for the Mintz Group, and a Director with PwC in the Global Intelligence Practice where he lead PWC's Sports Intelligence team as well as the Enterprise Physical Security practice.",
      'Christopher was a Special Agent for the United States Secret Service, where he investigated crimes against the government, acts of terrorism, and spent 5 years on the Presidential Protection Detail. Christopher has conducted numerous security advances for the first family both domestically and internationally, throughout Europe and the Middle East.',
      'Before the Secret Service, he was a Police Officer with the Houston Police Department, enforcing federal, state and local laws. Christopher has a Criminal Justice degree from Texas State University where he played Division I college football.',
    ],
  },
];

function AboutSection() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section id="about" className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-sm font-medium tracking-[5px] uppercase">About</span>
        </div>
        <h2 className="font-heading text-white font-bold text-2xl mb-5">JNB Protection Group</h2>
        <div className="space-y-5">
          <p className="text-white/50 text-base leading-relaxed">
            Today&apos;s global executives and high-profile individuals are faced with unprecedented risks that require not only immediate on-the-ground protection, but also a high level of thorough security planning, coordination and management. JNB Protection Group provides intelligence-based protection services supported by intelligence information, situational awareness, emergency response coordination, and security concierge services to clients around the country.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            We specialize in personal risk assessment, threat analysis, secure transportation, discreet operations and protecting not only people, but those people&apos;s private information and reputations.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            JNB Protection Groups&apos; protection and secure transportation services are consistent with the rigorous security standards used by the world&apos;s best agencies. The goal of all assignments is to deploy the most threat-appropriate protective measures while minimizing intrusions into the clients&apos; schedule and, when necessary, minimizing public exposure. We work with our clients to identify their own personal threat profile and develop a customized strategic security plan that includes logistics and operations.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            Our team will formulate advance site survey reports, or more in-depth risk assessments in anticipation of your arrival. Our advance personnel are specifically trained in this subject matter and are prepared to identify, investigate and report events that could hinder your ability to achieve your objectives.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            Our clients include Fortune 50 companies, C-Suite executives representing multinational companies and high-profile/ultra-high net-worth individuals and their families who rely on our discreet, personal, professional and confidential protection services to facilitate their business careers, public appearances, social activities and private lives, all while protecting their privacy, property, assets, information and reputation.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            JNB Protection Group is comprised of and supported by a network of former U.S. Secret Service Agents, former U.S. Special Forces personnel, and career law enforcement personnel from across the country.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row gap-10 xl:gap-14 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${index < teamMembers.length - 1 ? 'pb-14 mb-14 border-b border-[#1C1C1C]' : ''}`}
    >
      {/* Photo column */}
      <div className="shrink-0 w-full lg:w-[260px] xl:w-[300px]">
        <div className="w-full lg:w-[260px] xl:w-[300px] h-[360px] overflow-hidden bg-[#111]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="mt-4 border-l-2 border-[#C9A84C] pl-3">
          <p className="text-white font-heading font-bold text-xl leading-tight">{member.name}</p>
          <p className="text-[#C9A84C] text-sm tracking-[2px] uppercase mt-1 leading-snug">{member.title}</p>
        </div>
      </div>

      {/* Bio column */}
      <div className="flex-1 space-y-4">
        {member.bio.map((paragraph, i) => (
          <p key={i} className="text-white/55 text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#060606] py-20 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[2px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[5px] uppercase">Leadership</span>
          </div>

        </div>

        <div>
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section id="services" className="bg-[#0A0A0A] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base font-medium tracking-[5px] uppercase">Services</span>
        </div>
        <h2 className="font-heading text-white font-bold text-3xl mb-8">What We Do</h2>

        {/* Services list */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {services.map((s, i) => (
            <a
              key={s.title}
              href={s.slug}
              className="group flex items-center justify-between py-5 border-b border-[#1C1C1C] first:border-t first:border-[#1C1C1C] hover:border-[#C9A84C]/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <span className="font-heading text-[#C9A84C]/40 text-sm font-bold tracking-widest group-hover:text-[#C9A84C] transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <i className={`${s.icon} text-[#C9A84C]/60 text-base group-hover:text-[#C9A84C] transition-colors`} />
                </div>
                <h3 className="font-heading text-white/80 font-semibold text-lg tracking-wide uppercase group-hover:text-white transition-colors leading-snug">
                  {s.title}
                </h3>
              </div>
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <i className="ri-arrow-right-line text-[#C9A84C]/0 group-hover:text-[#C9A84C] text-lg transition-all translate-x-0 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Proactive Protection To Manage &amp; Mitigate Risk"
        subheadline="Intelligence-led protection for executives, public figures, and high-value individuals."
        ctaPrimary={{ label: 'Request Service', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
      />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
