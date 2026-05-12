import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const credentials = [
  { icon: 'ri-government-fill', label: 'Former Federal & State Law Enforcement', sub: 'Every agent — no civilian hires' },
  { icon: 'ri-shield-star-fill', label: 'Texas State License C12684701', sub: 'Fully licensed, bonded, and insured' },
  { icon: 'ri-global-fill', label: '100+ Countries', sub: 'Global operations and partner network' },
  { icon: 'ri-eye-off-fill', label: 'Discretion First', sub: 'Invisible by design' },
  { icon: 'ri-brain-fill', label: 'Intelligence-Led', sub: 'Prevent incidents before they occur' },
  { icon: 'ri-time-fill', label: '24/7 Availability', sub: 'Rapid response, always on' },
];

const teamMembers = [
  {
    name: 'John Beegle',
    title: 'Founder & President — Close Protection Associate',
    image: 'https://jnbprotectiongroup.com/images/JohnBeegle.jpg',
    bio: [
      'John Beegle has over 28 years of experience in the fields of law enforcement, criminal, civil and private investigations, advance threat protection, site vulnerability assessments and executive/close protection. John is currently the Founder and President of JNB Protection Group, assisting clients around the globe by providing them proactive intelligence-based protection and security concierge services.',
      'John specializes in site security advances, in depth physical, threat and vulnerability assessments, secure transportation and close protection. Since leaving law enforcement to pursue his passion of personal protection, John has built a large network of resources, contacts and partnerships that have enabled him to partner with some of the best and most experienced protection agents in the world, including former United States Secret Service Agents, FBI Agents and DSS Agents.',
      "Mr. Beegle's experience includes Fortune 50 companies and their C-suite executives, celebrities, high profile/ultra-high net-worth individuals and their families, foreign dignitaries, United States Senators, Presidential candidates and Royal families. Prior to working in the private sector John was a Sworn Police Officer and Domestic Violence Detective, specializing in crimes of Domestic Violence. John earned his Bachelor of Science degree in Social Justice from Olivet Nazarene University.",
    ],
  },
  {
    name: 'Kevin Cote',
    title: 'Lead Protective Agent — Close Protection Associate',
    image: 'https://jnbprotectiongroup.com/images/Mr.Cote.jpg',
    bio: [
      'Mr. Cote is a seasoned law enforcement and protective services professional with over 33 years of experience in public safety, criminal investigations, and executive protection. He spent the majority of his career with the Harris County Sheriff\'s Department, where he began as a patrol deputy and later advanced into the Criminal Investigations Division as a detective assigned to the Violent Crimes Unit.',
      'For more than 15 years, Kevin has provided executive and close protection services to Fortune 500 corporations, C-suite executives and their families, high-profile entertainers and celebrities, ultra-high-net-worth individuals, and domestic and foreign political officials.',
      'Kevin currently serves as a Lead Protective Agent with JNB Protection Group, where he leads protective teams through complex, high-risk, and highly sensitive protective assignments. Mr. Cote holds Executive Protection Certification through LaSorsa & Associates.',
    ],
  },
  {
    name: 'Christopher Sanchez',
    title: 'Director of Intelligence & Advance Threat Protection — Senior Associate',
    image: 'https://jnbprotectiongroup.com/picsLg/5ef665febdb10CHRISTOPHER-SANCHEZ.jpg',
    bio: [
      'Christopher has over 28 years of national security, crisis management, forensic investigations, advance threat protection and site vulnerability assessments. He is currently the Director of Intelligence & Advance Threat Protection for JNB Protection Group. He is helping clients in all industries manage a myriad of business, financial, legal, regulatory and reputational risk. Christopher specializes in conducting site security advances and criminal investigations, as well as physical, threat and vulnerability assessments to include protective intelligence investigations. He also assists clients in achieving their desired protection from the Department of Homeland Security\'s SAFETY Act.',
      'Christopher is also part of the Intelligence practice group that offers a full spectrum of governance, compliance, investigative, anti-corruption and intelligence services across all sectors of business — both public and private. In addition he heads JNB Protection Group Sports Intelligence practice which helps professional sports teams manage threats and increase opportunities to teams, players, ownership organizations, and events by integrating key capabilities to help sports organizations and event venues manage threats to their brand, their teams and their fans.',
      'Prior to joining JNB Protection Group, Christopher was a Managing Director for the Mintz Group, and a Director with PwC in the Global Intelligence Practice where he lead PWC\'s Sports Intelligence team as well as the Enterprise Physical Security practice.',
      'Christopher was a Special Agent for the United States Secret Service, where he investigated crimes against the government, acts of terrorism, and spent 5 years on the Presidential Protection Detail. Christopher has conducted numerous security advances for the first family both domestically and internationally, throughout Europe and the Middle East.',
      'Before the Secret Service, he was a Police Officer with the Houston Police Department, enforcing federal, state and local laws. Christopher has a Criminal Justice degree from Texas State University where he played Division I college football.',
    ],
  },
];

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row gap-10 xl:gap-16 items-start transition-all duration-700 delay-${index * 100} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${index < teamMembers.length - 1 ? 'pb-16 mb-16 border-b border-[#1A1A1A]' : ''}`}
    >
      {/* Image */}
      <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
        <div className="w-full lg:w-[280px] xl:w-[320px] h-[340px] lg:h-[380px] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="mt-4 pl-1 border-l-2 border-[#C9A84C]">
          <p className="text-white font-heading font-bold text-lg">{member.name}</p>
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mt-1 leading-snug">{member.title}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="flex-1 space-y-4 pt-1">
        {member.bio.map((paragraph, i) => (
          <p key={i} className="text-white/60 text-base leading-relaxed">
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-[2px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-medium tracking-[5px] uppercase">Leadership</span>
          </div>
          <h2 className="font-heading text-white font-bold text-xl lg:text-2xl">Our Team</h2>
          <p className="text-white/40 text-sm mt-3 max-w-xl leading-relaxed">
            Former federal agents, law enforcement veterans, and intelligence professionals — each bringing decades of real-world field experience.
          </p>
        </div>

        {/* Members */}
        <div>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutContent() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-medium tracking-[5px] uppercase">Who We Are</span>
            </div>
            <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-6 leading-tight">
              Founded on a simple principle:<br />prevent the incident before it occurs.
            </h2>
            <div className="space-y-4 text-white/48 text-base leading-relaxed">
              <p>
                JNB Protection Group is an executive protection firm founded by former Federal, State, and Local Law Enforcement professionals. Every member of our team brings real field experience from careers in law enforcement — not civilian security backgrounds.
              </p>
              <p>
                We operate with a proactive, intelligence-first approach. Before any deployment, we study the environment, map threats, and establish protocols — so your protection is ahead of any situation, not behind it.
              </p>
              <p>
                Headquartered in League City, TX, with a global partner network spanning 100+ countries. Trusted by corporate executives, entertainment clients, private families, and legal professionals.
              </p>
            </div>
            <div className="mt-7 pt-7 border-t border-[#161616] flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+17139068273"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-heading font-bold px-6 py-3 text-xs tracking-widest uppercase transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill" /> 713.906.8273
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-[#C9A84C] text-white/60 hover:text-[#C9A84C] font-heading font-semibold px-6 py-3 text-xs tracking-widest uppercase transition-all cursor-pointer whitespace-nowrap"
              >
                Send a Message
              </a>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-0">
            {credentials.map((c, i) => (
              <div
                key={c.label}
                className={`flex items-start gap-4 py-4 ${i < credentials.length - 1 ? 'border-b border-[#161616]' : ''}`}
              >
                <div className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                  <i className={`${c.icon} text-[#C9A84C] text-sm`} />
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{c.label}</p>
                  <p className="text-white/32 text-sm mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Discreet. Professional. Highly Trained."
        subheadline="Founded by former law enforcement professionals. Built on a simple principle — prevent the incident before it occurs."
        imageSrc="https://public.readdy.ai/ai/img_res/edited_7b9e08c633aad3321501519a1b4ae268_8976c376.jpg"
        badge="About JNB Protection Group"
        ctaPrimary={{ label: 'Contact Us', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <AboutContent />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
