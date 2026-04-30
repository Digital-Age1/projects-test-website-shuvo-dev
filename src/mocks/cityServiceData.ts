import type { CityServiceConfig } from "@/pages/city-service/CityServicePage";

const ETOBICOKE_NEARBY = ["Mimico", "New Toronto", "Long Branch", "Alderwood", "Islington", "Humber Bay", "Stonegate-Queensway", "The Kingsway", "Rexdale", "Sunnylea"];
const TORONTO_NEARBY = ["Etobicoke", "Mississauga", "North York", "Scarborough", "East York", "Parkdale", "Roncesvalles", "High Park", "Junction", "Bloor West Village"];
const MISSISSAUGA_NEARBY = ["Etobicoke", "Brampton", "Oakville", "Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "Cooksville", "Malton", "Lakeview"];

// Shared "Why Choose" bullet points — same across all pages (from live site)
const WHY_CHOOSE_BULLETS = [
  { title: "Local and trusted in South Etobicoke", body: "We live and work in the same community we serve. That means faster response times and service you can rely on." },
  { title: "24/7 emergency HVAC service", body: "Heating or cooling problems don't follow a schedule. So we're available day and night when your system breaks down." },
  { title: "Real experience across all property types", body: "We service condos, houses, and commercial buildings. From in suite condo units to large offices, we know the systems." },
  { title: "Straightforward repairs and replacements", body: "We repair furnaces, air conditioners, boilers, and hot water systems. If a replacement makes more sense, we'll explain why." },
  { title: "Nearly 10 years serving Etobicoke", body: "We've spent close to a decade working in this area. As Etobicoke grows, our services grow with it." },
  { title: "Clear pricing with real savings", body: "We offer $50 off one heating or cooling service. No confusing conditions. Just a simple discount." },
  { title: "Service that respects your space", body: "We show up on time, explain the work, and clean up after. Your home or business matters to us." },
];

// Shared FAQs that appear on every page (from live site)
const SHARED_FAQS = [
  { q: "When should I call for HVAC repair instead of waiting?", a: "Call for HVAC repair as soon as you notice strange noises, weak airflow, uneven temperatures, or higher energy bills. Small issues often turn into bigger and more expensive problems if ignored." },
  { q: "What's included in a standard HVAC installation?", a: "HVAC installation includes removing old equipment, setting up the new system, connecting electrical and gas lines, testing performance, and confirming safe operation. We also walk you through basic system use and care." },
  { q: "How long does HVAC installation usually take?", a: "Most residential HVAC installations are completed in one day. Larger systems or complex setups may take longer. We'll explain the timeline before starting work." },
  { q: "What does HVAC maintenance actually do?", a: "HVAC maintenance helps systems run efficiently and safely. It reduces wear on parts, lowers energy use, and helps prevent unexpected breakdowns during peak seasons." },
  { q: "When should I schedule furnace repair?", a: "Schedule furnace repair if your system struggles to heat, cycles on and off often, makes loud noises, or smells unusual. These are signs something isn't working properly." },
  { q: "Do you offer complete heating and cooling service?", a: "Yes. Our heating and cooling service covers furnaces, air conditioners, heat pumps, boilers, and water heaters. We handle repairs, maintenance, and full replacements." },
  { q: "Can you service boilers and water heaters?", a: "We provide boiler repair, boiler installation, and boiler services. We also handle water heater repair, water heater installation, and hot water repair for homes and businesses." },
  { q: "Do you provide gas line services?", a: "Yes. We offer gas line installation, gas line services, and gas line repair. All work follows safety codes and is properly tested before use." },
  { q: "Do you install and repair pool heaters?", a: "We handle pool heater installation, pool heater repair, and pool heater service. Regular service helps extend the life of the unit and improve performance." },
];

// ─── ETOBICOKE ───────────────────────────────────────────────────────────────

export const etobicokeAcRepair: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Air Conditioning Repair", serviceSlug: "air-conditioning-repair",
  heroHeadline: "Air Conditioning Repair Etobicoke",
  heroSubheadline: "Air conditioner not cooling properly in Etobicoke? Park Lawn Heating provides fast, reliable air conditioning repair to restore comfort. Our local technicians diagnose issues clearly and fix them right the first time, so your system runs smoothly when you need it most.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg",
  introHeading: "Reliable Air Conditioning Repair Etobicoke: Stay Cool All Summer",
  introBody: [
    "When the summer heat in Etobicoke becomes unbearable, Park Lawn Heating stands as your beacon of relief with our reliable air conditioning repair in Etobicoke services. Why suffer through another scorching day when our expert AC repair in Etobicoke team can ensure your home or office remains a sanctuary of coolness?",
    "Our skilled technicians are equipped to handle any issue, big or small, with swift precision, guaranteeing your comfort all summer long. At Park Lawn Heating, we understand the importance of a functioning air conditioner, which is why we prioritize quick, effective solutions to restore your peace and comfort.",
    "Whether it's routine maintenance or emergency repairs, we're the trusted name in AC repair Etobicoke residents turn to. Our commitment to excellence and customer satisfaction makes us the go-to choice for those in need of dependable air conditioning services. Let us help you beat the heat and enjoy a cooler, more comfortable summer.",
  ],
  whyHeading: "Why Homeowners and Businesses Choose Park Lawn Heating?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-temp-cold-line", title: "Furnaces", description: "Furnaces are great for homeowners who experience cold winters with consistently low temperatures to get the heat they need quickly.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg" },
    { icon: "ri-sun-line", title: "Air Conditioning Units", description: "Explore our selection of air conditioning units for large and small spaces to find the best air conditioner for you.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/big-AC-install-q27h5pvvnn7cwnlmefro8n7th16yg5lk7z0d5z2osw.jpg" },
    { icon: "ri-water-flash-line", title: "Boilers", description: "A boiler uses hot water or steam running through pipes to distribute heat throughout your home. Call Us today.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/20221211_153926-1-scaled-q5au042gda7eu72xccvpfwfkcc75t6mahp9t2ar4eo.jpg" },
    { icon: "ri-drop-line", title: "Water Heaters and Tankless Heaters", description: "Water heaters heat and store water, while tankless heaters heat water on demand without storing it.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/gettyimages-903197978-q39s0u8wppfxu60patzeyjmr51yi3qfnv1fpjgg1d8.webp" },
    { icon: "ri-contrast-2-line", title: "Ductless Mini Split", description: "Ductless mini split systems are heating and cooling devices that do not require ductwork to function.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/IMG-20220721-WA0008-1-q1s4ubqkb2d17nclycdddb59l9kxnwvfejkbx664mk.jpg" },
    { icon: "ri-gas-station-line", title: "Gas Lines", description: "Gas piping is a piping system in your house used to carry natural gas from the supply directly to your heating system.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Sediment-Trap-2-1-scaled-q39uxesj16kgrk426f7k1zwtogv8iolvcdylj7lukw.jpg" },
    { icon: "ri-fire-line", title: "Pool Heaters", description: "An electric heat pump pool heater works just like an air conditioning unit but in reverse.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/HollandLakeMichiganWeddingPhotographerMaeStier-027-q39vnd43qi41sjr6ypr6fjz0jbeabpm8ubx2l7nhtk.jpg" },
    { icon: "ri-contrast-drop-line", title: "Heat Pumps", description: "Heat pumps are versatile, efficient cooling and heating systems. Call us today.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Heat_Pump_Installation_51323299230-scaled-q2ua6ur5f8ozta7nho7cp067v1u37zdkm7j216eyog.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "How much does AC repair usually cost?", a: "AC repair pricing depends on the problem and parts needed, but we provide an estimate after diagnosis so you can approve the AC repair before we proceed." },
    { q: "Can low refrigerant cause an AC repair call?", a: "Yes – low refrigerant often leads to poor cooling and can require AC repair to find leaks, fix them, and recharge the system properly." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
  ],
  metaTitle: "Etobicoke Air Conditioning Repair - Park Lawn Heating",
  metaDescription: "Stay cool with expert air conditioning repair in Etobicoke from Park Lawn Heating. Quick response, fast service, honest work. Book your repair today.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeFurnaceRepair: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Furnace Repair", serviceSlug: "furnace-repair",
  heroHeadline: "Furnace Repair Etobicoke",
  heroSubheadline: "Need furnace repair in Etobicoke? Park Lawn Heating fixes heating problems fast, from cold air to system shutdowns. Our experienced technicians restore safe, reliable heat with clear explanations and honest service.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg",
  introHeading: "Reliable Furnace Repair in Etobicoke: Quick Solutions for Cold Nights",
  introBody: [
    "When the chill of Etobicoke's cold nights creeps in, you need a reliable solution at your fingertips. Park Lawn Heating offers just that with our dependable furnace repair in Etobicoke. Why shiver and suffer through the night when our team of experienced technicians can provide quick, efficient repairs to restore warmth and comfort to your home?",
    "Our commitment to excellence and swift service ensures that no matter the issue, big or small, your furnace is in capable hands. As a leading provider of furnace repair in Etobicoke, we understand the importance of a functioning heating system during the colder months. That's why we prioritize your comfort, offering timely solutions to keep your space cozy.",
    "Trust Park Lawn Heating for all your furnace repair needs and experience the peace of mind that comes with knowing you're just a call away from solving any heating challenge.",
  ],
  whyHeading: "Why Homeowners and Businesses Choose Park Lawn Heating?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-fire-line", title: "Furnaces", description: "Furnaces are great for homeowners who experience cold winters with consistently low temperatures to get the heat they need quickly.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg" },
    { icon: "ri-temp-cold-line", title: "Air Conditioning Units", description: "Explore our selection of air conditioning units for large and small spaces to find the best air conditioner for you.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/big-AC-install-q27h5pvvnn7cwnlmefro8n7th16yg5lk7z0d5z2osw.jpg" },
    { icon: "ri-water-flash-line", title: "Boilers", description: "A boiler uses hot water or steam running through pipes to distribute heat throughout your home. Call Us today.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/20221211_153926-1-scaled-q5au042gda7eu72xccvpfwfkcc75t6mahp9t2ar4eo.jpg" },
    { icon: "ri-drop-line", title: "Water Heaters and Tankless Heaters", description: "Water heaters heat and store water, while tankless heaters heat water on demand without storing it.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/gettyimages-903197978-q39s0u8wppfxu60patzeyjmr51yi3qfnv1fpjgg1d8.webp" },
    { icon: "ri-contrast-2-line", title: "Ductless Mini Split", description: "Ductless mini split systems are heating and cooling devices that do not require ductwork to function.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/IMG-20220721-WA0008-1-q1s4ubqkb2d17nclycdddb59l9kxnwvfejkbx664mk.jpg" },
    { icon: "ri-gas-station-line", title: "Gas Lines", description: "Gas piping is a piping system in your house used to carry natural gas from the supply directly to your heating system.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Sediment-Trap-2-1-scaled-q39uxesj16kgrk426f7k1zwtogv8iolvcdylj7lukw.jpg" },
    { icon: "ri-contrast-drop-line", title: "Heat Pumps", description: "Heat pumps are versatile, efficient cooling and heating systems. Call us today.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Heat_Pump_Installation_51323299230-scaled-q2ua6ur5f8ozta7nho7cp067v1u37zdkm7j216eyog.jpg" },
    { icon: "ri-fire-fill", title: "Pool Heaters", description: "An electric heat pump pool heater works just like an air conditioning unit but in reverse.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/HollandLakeMichiganWeddingPhotographerMaeStier-027-q39vnd43qi41sjr6ypr6fjz0jbeabpm8ubx2l7nhtk.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are signs I need furnace repair right away?", a: "If you have no heat, frequent cycling, unusual noises, burning smells, weak airflow, or the furnace won't stay on, you likely need furnace repair." },
    { q: "What happens during a furnace repair visit?", a: "A furnace repair visit includes a full diagnostic, identifying the failed component, and providing upfront pricing before we start any furnace repair." },
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
  ],
  metaTitle: "Furnace Repair in Etobicoke - Park Lawn Heating",
  metaDescription: "Park Lawn Heating offers dependable furnace repair in Etobicoke when your heat stops working. Fast help. No delays. Call now to stay warm.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeHeatingCooling: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Heating and Cooling Service", serviceSlug: "heating-and-cooling-service",
  heroHeadline: "Heating and Cooling Service Etobicoke",
  heroSubheadline: "Looking for reliable heating and cooling service in Etobicoke? Park Lawn Heating keeps your home or business comfortable year round. From repairs to maintenance and new systems, our local team delivers clear advice, dependable service, and solutions that work when you need them.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg",
  introHeading: "Seamless Heating and Cooling Service in Etobicoke: Comfort in Every Season",
  introBody: [
    "At Park Lawn Heating, we understand that maintaining comfort in your home or business through every season is not just a necessity but a priority. That's why our seamless heating and cooling service in Etobicoke is designed to ensure you experience comfort no matter the weather outside.",
    "Why endure the discomfort of a chilly winter or a sweltering summer when our expert team can provide you with the perfect indoor climate year-round? Specializing in both heating and cooling services, we pride ourselves on our ability to quickly diagnose and resolve any HVAC issues, ensuring your system runs efficiently and effectively.",
    "With Park Lawn Heating, you're choosing a partner committed to excellence and reliability. Let us take the worry out of maintaining your ideal indoor environment, proving why we're the go-to choice for heating and cooling service in Etobicoke. Comfort in every season isn't just our promise — it's our guarantee.",
  ],
  whyHeading: "Why Homeowners and Businesses Choose Park Lawn Heating?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-fire-line", title: "Furnaces", description: "Furnaces are great for homeowners who experience cold winters with consistently low temperatures to get the heat they need quickly.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg" },
    { icon: "ri-temp-cold-line", title: "Air Conditioning Units", description: "Explore our selection of air conditioning units for large and small spaces to find the best air conditioner for you.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/big-AC-install-q27h5pvvnn7cwnlmefro8n7th16yg5lk7z0d5z2osw.jpg" },
    { icon: "ri-water-flash-line", title: "Boilers", description: "A boiler uses hot water or steam running through pipes to distribute heat throughout your home. Call Us today.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/20221211_153926-1-scaled-q5au042gda7eu72xccvpfwfkcc75t6mahp9t2ar4eo.jpg" },
    { icon: "ri-drop-line", title: "Water Heaters and Tankless Heaters", description: "Water heaters heat and store water, while tankless heaters heat water on demand without storing it.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/gettyimages-903197978-q39s0u8wppfxu60patzeyjmr51yi3qfnv1fpjgg1d8.webp" },
    { icon: "ri-contrast-2-line", title: "Ductless Mini Split", description: "Ductless mini split systems are heating and cooling devices that do not require ductwork to function.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/IMG-20220721-WA0008-1-q1s4ubqkb2d17nclycdddb59l9kxnwvfejkbx664mk.jpg" },
    { icon: "ri-gas-station-line", title: "Gas Lines", description: "Gas piping is a piping system in your house used to carry natural gas from the supply directly to your heating system.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Sediment-Trap-2-1-scaled-q39uxesj16kgrk426f7k1zwtogv8iolvcdylj7lukw.jpg" },
    { icon: "ri-contrast-drop-line", title: "Heat Pumps", description: "Heat pumps are versatile, efficient cooling and heating systems. Call us today.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Heat_Pump_Installation_51323299230-scaled-q2ua6ur5f8ozta7nho7cp067v1u37zdkm7j216eyog.jpg" },
    { icon: "ri-fire-fill", title: "Pool Heaters", description: "An electric heat pump pool heater works just like an air conditioning unit but in reverse.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/HollandLakeMichiganWeddingPhotographerMaeStier-027-q39vnd43qi41sjr6ypr6fjz0jbeabpm8ubx2l7nhtk.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "How do I schedule heating and cooling services?", a: "You can schedule heating and cooling services by phone or online, and we'll confirm the soonest appointment window that fits your needs." },
    { q: "Can heating and cooling services help reduce energy bills?", a: "Yes, heating and cooling services like tune-ups, filter guidance, and airflow adjustments can improve efficiency and help lower energy costs." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
  ],
  metaTitle: "Etobicoke Heating and Cooling Service - Park Lawn Heating",
  metaDescription: "Heating or cooling acting up? Get fast heating and cooling service in Etobicoke for homes and businesses. Fast repairs, honest pricing. Call today!",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeResidential: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Residential HVAC Services", serviceSlug: "residential-hvac-services",
  heroHeadline: "Etobicoke Residential HVAC Services",
  heroSubheadline: "For reliable residential HVAC services in Etobicoke, homeowners turn to Park Lawn Heating. From furnaces to air conditioners, we keep your systems running smoothly with honest service and local expertise.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/2024/03/cropped-Park-Lawn-Heating-1.png",
  introHeading: "Residential HVAC Services in Etobicoke That Keep Your Home Comfortable",
  introBody: [
    "Heating and cooling problems rarely show up at a good time. A furnace can fail during a cold snap. An AC unit can stop working in the middle of summer. And small issues can grow into big ones when they're ignored.",
    "Our residential HVAC services in Etobicoke cover every major system in your home. We work on older units and modern equipment. We also help homeowners choose better options when replacement makes sense.",
    "As a local HVAC company, we know the climate and common system issues in Etobicoke homes. That helps us diagnose problems faster and recommend solutions that actually fit your space. We explain the issue in plain language. We don't rush decisions. And we never pressure you into work you don't need.",
  ],
  whyHeading: "Why Homeowners Choose Park Lawn Heating",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-fire-line", title: "Furnace Repair and Maintenance", description: "We service gas and electric furnaces of all major brands. Furnace repair is often needed for issues like uneven heating, ignition problems, or airflow loss.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg" },
    { icon: "ri-water-flash-line", title: "Boiler Services", description: "Many Etobicoke homes still rely on boilers. Our team handles boiler repair, boiler installation, and system upgrades for hot water and radiant heating systems.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/20221211_153926-1-scaled-q5au042gda7eu72xccvpfwfkcc75t6mahp9t2ar4eo.jpg" },
    { icon: "ri-temp-cold-line", title: "AC Repair and Installation", description: "We repair common AC issues like frozen coils, low refrigerant, faulty compressors, and thermostat problems. Every installation follows manufacturer guidelines and local codes.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/big-AC-install-q27h5pvvnn7cwnlmefro8n7th16yg5lk7z0d5z2osw.jpg" },
    { icon: "ri-shield-check-line", title: "HVAC Maintenance Plans", description: "Routine HVAC maintenance matters more than most people think. Systems that receive regular service last longer and break down less often.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Heat_Pump_Installation_51323299230-scaled-q2ua6ur5f8ozta7nho7cp067v1u37zdkm7j216eyog.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "How often should I schedule residential HVAC services for maintenance?", a: "Most homeowners should schedule residential HVAC services maintenance twice a year – spring for cooling and fall for heating." },
    { q: "What are signs I need residential HVAC services right away?", a: "If you have uneven temperatures, weak airflow, unusual noises or smells, higher energy bills, or no heating/cooling, you likely need residential HVAC services soon." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
  ],
  metaTitle: "Etobicoke Residential HVAC Services - Park Lawn Heating",
  metaDescription: "HVAC not heating or cooling properly? Get residential hvac services in Etobicoke from Park Lawn Heating. We install & repair home heating and cooling systems.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeCommercial: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Commercial HVAC Services", serviceSlug: "commercial-hvac-services",
  heroHeadline: "Etobicoke Commercial HVAC Services",
  heroSubheadline: "Running a business is hard enough without heating or cooling problems. Park Lawn Heating provides reliable commercial HVAC services in Etobicoke to keep your building comfortable, safe, and operational year round. From fast repairs to full system installs, our licensed technicians are ready to help.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/2024/03/cropped-Park-Lawn-Heating-1.png",
  introHeading: "Commercial HVAC Services in Etobicoke Built for Business Needs",
  introBody: [
    "Commercial HVAC systems work harder than residential ones. They run longer hours and support larger spaces. When something goes wrong, the impact spreads quickly.",
    "Our commercial HVAC services in Etobicoke are designed for real world business demands. We work with property managers, business owners, and facility teams to keep systems running reliably.",
    "As a local HVAC company, we understand Etobicoke buildings. That includes older commercial properties and newer developments. This helps us diagnose issues faster and avoid unnecessary downtime. We focus on clear communication. We explain the issue and your options. And we work efficiently so your business stays on track.",
  ],
  whyHeading: "Why Businesses Choose Park Lawn Heating?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-building-line", title: "Commercial Furnace Repair and Maintenance", description: "We service commercial furnaces used in offices, warehouses, and retail spaces. Routine maintenance helps reduce emergency breakdowns and keeps heating systems running efficiently.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg" },
    { icon: "ri-water-flash-line", title: "Boiler Services for Commercial Properties", description: "Many commercial buildings rely on boiler systems. We provide boiler repair, boiler installation, and system upgrades. Our team works carefully to minimize disruption to daily operations.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/20221211_153926-1-scaled-q5au042gda7eu72xccvpfwfkcc75t6mahp9t2ar4eo.jpg" },
    { icon: "ri-temp-cold-line", title: "Commercial AC Installation and Repair", description: "Our air conditioning repair services help restore cooling fast. We diagnose issues like compressor failure, refrigerant leaks, airflow restrictions, and thermostat problems.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/big-AC-install-q27h5pvvnn7cwnlmefro8n7th16yg5lk7z0d5z2osw.jpg" },
    { icon: "ri-shield-check-line", title: "Preventive Commercial HVAC Maintenance", description: "Commercial HVAC maintenance is one of the smartest investments a business can make. Well maintained systems break down less and last longer.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/hvac-technicians-q27czhcjaxjh8dttohwcpk1jdxoy5r61kd8hrttzbk.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
    { q: "Do you offer a commercial HVAC services maintenance plan?", a: "Yes, we offer commercial HVAC services maintenance plans with scheduled visits, documented service records, and priority scheduling." },
    { q: "What's included in a commercial HVAC services diagnostic?", a: "A commercial HVAC services diagnostic includes system testing, airflow and temperature checks, component inspection, and a clear repair plan with upfront pricing." },
  ],
  metaTitle: "Etobicoke Commercial HVAC Services - Park Lawn Heating",
  metaDescription: "Looking for commercial hvac services in Etobicoke? Park Lawn Heating handles installs, repairs, and commercial hvac systems. Call today.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeBoiler: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Boiler Services", serviceSlug: "boiler-services",
  heroHeadline: "Etobicoke Boiler Services",
  heroSubheadline: "Expert boiler repair and installation from a local team that shows up and does the job right",
  heroImage: "https://parklawnheating.com/wp-content/uploads/2024/03/cropped-Park-Lawn-Heating-1.png",
  introHeading: "Trusted Boiler Repair in Etobicoke for Homes and Businesses",
  introBody: [
    "When your boiler stops working, your whole home feels it. Cold rooms. No hot water. Stress you didn't plan for. That's where Park Lawn Heating comes in. We provide dependable boiler repair in Etobicoke, plus full boiler installation services for homes and businesses. And we do it with clear pricing, honest advice, and technicians who respect your space.",
    "Boilers don't fail on a schedule. They act up on cold mornings or late at night. And when they do, you need fast help from an experienced HVAC contractor. Our team handles boiler services in Etobicoke every day. We work on older systems and newer high-efficiency models. We service residential and commercial boilers across the area.",
    "We don't guess. We inspect the system. We explain the problem in plain terms. Then we walk you through the repair options. Some repairs are simple and quick. Others take more time and parts. If a repair won't last, we'll say so. We won't push a fix that doesn't make sense.",
  ],
  whyHeading: "Why Homeowners and Businesses Choose Park Lawn Heating?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-water-flash-line", title: "Boiler Repair", description: "We fix no heat, uneven heating, leaks, loud banging or whistling sounds, low boiler pressure, and pilot light or ignition issues.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/20221211_153926-1-scaled-q5au042gda7eu72xccvpfwfkcc75t6mahp9t2ar4eo.jpg" },
    { icon: "ri-settings-3-line", title: "Boiler Installation", description: "Replacing a boiler is a big decision. Our boiler installation in Etobicoke starts with a full review of your space, correct sizing, safe gas and vent connections, and system testing.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/f0fd5b82-21ed-476b-bee2-84a168e0f578-q4vjau9vlwwskl2d6b8h7sj2efnzpanh2gis2h58g4.jpg" },
    { icon: "ri-drop-line", title: "Water Heater Services", description: "We also offer water heater repair in Etobicoke, water heater installation, and hot water repair for homes and businesses.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/gettyimages-903197978-q39s0u8wppfxu60patzeyjmr51yi3qfnv1fpjgg1d8.webp" },
    { icon: "ri-gas-station-line", title: "Gas Line Services", description: "We also handle gas line installation in Etobicoke and gas line services if upgrades are needed during boiler installation.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Sediment-Trap-2-1-scaled-q39uxesj16kgrk426f7k1zwtogv8iolvcdylj7lukw.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
    { q: "Do your boiler services include emergency no-heat calls?", a: "Yes, our boiler services include emergency support for no-heat issues and sudden system shutdowns, based on availability." },
  ],
  metaTitle: "Etobicoke Boiler Services | Installation | Repair",
  metaDescription: "Park Lawn Heating offers reliable boiler services in Etobicoke, including boiler repair and installation. Local experts. Same day help. Call now.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeWaterHeater: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Water Heater Services", serviceSlug: "water-heater-services",
  heroHeadline: "Etobicoke Water Heater Services",
  heroSubheadline: "Fast repairs. Clean installations. Hot water when you need it.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/2024/03/cropped-Park-Lawn-Heating-1.png",
  introHeading: "Fast & Reliable Water Heater Repair in Etobicoke",
  introBody: [
    "Hot water problems don't wait, and neither should you. At Park Lawn Heating, we provide trusted water heater repair in Etobicoke, complete water heater installation, and fast hot water repair for both homes and businesses. Cold showers, rusty water, or strange noises from your tank can disrupt your day quickly, and these issues often get worse when ignored.",
    "Our licensed technicians fix problems clearly and correctly, explain what's wrong, share the cost upfront, and never push services you don't need.",
    "Water heaters work every day, and over time, internal parts wear down. Sediment builds up inside the tank, heating elements fail, and gas components stop working properly. Our technicians specialize in hot water repair in Etobicoke for gas, electric, and tankless systems. We service all major brands and arrive prepared to diagnose and repair the issue during the first visit whenever possible.",
  ],
  whyHeading: "Why Choose Park Lawn Heating in Etobicoke?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-drop-line", title: "Water Heater Repair", description: "We fix no hot water, inconsistent temperature, leaking tanks, rust-colored water, loud noises, and pilot light or ignition problems.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/gettyimages-903197978-q39s0u8wppfxu60patzeyjmr51yi3qfnv1fpjgg1d8.webp" },
    { icon: "ri-settings-3-line", title: "Water Heater Installation", description: "We install standard hot water tanks, high-efficiency gas water heaters, electric water heaters, and tankless systems for on-demand hot water.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/f0fd5b82-21ed-476b-bee2-84a168e0f578-q4vjau9vlwwskl2d6b8h7sj2efnzpanh2gis2h58g4.jpg" },
    { icon: "ri-alert-line", title: "Emergency Hot Water Repair", description: "Water heater failures rarely happen at a convenient time. Our HVAC emergency repair service responds quickly and focuses on restoring service as fast as possible.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Heat_Pump_Installation_51323299230-scaled-q2ua6ur5f8ozta7nho7cp067v1u37zdkm7j216eyog.jpg" },
    { icon: "ri-fire-line", title: "Full HVAC Support", description: "Many customers first call us for water heater service and continue working with us for all their heating and cooling needs.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/3427-bryant-brand-hg6c6536_ret_v1-q3wt20rotl7zw27swgqmpk3ad36mrlrpaqq9pswnww.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
    { q: "My water heater isn't producing hot water - what could be wrong?", a: "Common causes include a failed heating element, tripped breaker, faulty thermostat, pilot/ignition issues, gas valve problems, or sediment buildup." },
    { q: "Should I repair or replace my water heater?", a: "If it's older (often 8–12+ years), leaking, or needs frequent repairs, replacement is usually more cost-effective and reliable." },
  ],
  metaTitle: "Etobicoke Water Heater Services | Installation | Repair",
  metaDescription: "Need water heater services in Etobicoke? Park Lawn Heating offers expert water heater repair, installation, and hot water repair. Call today.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokeGasLine: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Gas Line Services", serviceSlug: "gas-line-services",
  heroHeadline: "Etobicoke Gas Line Services",
  heroSubheadline: "Safe gas line installation and repair for homes and businesses. Done right. Done on time.",
  heroImage: "https://parklawnheating.com/wp-content/uploads/2024/03/cropped-Park-Lawn-Heating-1.png",
  introHeading: "Gas Line Installation in Etobicoke",
  introBody: [
    "Gas lines power your furnace, water heater, stove, and pool heater. When something feels off, you need help fast. And you need it done safely. At Park Lawn Heating, we provide clear, dependable gas line services in Etobicoke. That includes new gas line installation, repairs, and upgrades for residential and commercial spaces.",
    "If you smell gas, hear hissing, or plan a new appliance install, call us. We'll explain the next steps. And we'll take care of the work without the runaround.",
    "Installing a gas line is not a guesswork job. It needs proper sizing, correct materials, and code compliant connections. And it must be tested before use. We handle gas line installation in Etobicoke for new builds, renovations, and appliance upgrades. That includes lines for furnaces, boilers, water heaters, stoves, dryers, fireplaces, and pool heaters.",
  ],
  whyHeading: "Why Homeowners Choose Park Lawn Heating",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-gas-station-line", title: "Gas Line Installation", description: "We handle gas line installation for furnaces, boilers, water heaters, stoves, dryers, fireplaces, and pool heaters. We follow all safety standards and local codes.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Sediment-Trap-2-1-scaled-q39uxesj16kgrk426f7k1zwtogv8iolvcdylj7lukw.jpg" },
    { icon: "ri-tools-line", title: "Gas Line Repair", description: "Gas line issues need quick action. Even small leaks matter. We provide fast gas line repair in Etobicoke for homes and businesses. After the repair, we test the line again.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/hvac-technicians-q27czhcjaxjh8dttohwcpk1jdxoy5r61kd8hrttzbk.jpg" },
    { icon: "ri-search-eye-line", title: "Full Gas Line Services", description: "Our services include new gas line installation, gas line relocation, gas line upgrades, leak detection and testing, appliance hookups, and code compliance checks.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/f0fd5b82-21ed-476b-bee2-84a168e0f578-q4vjau9vlwwskl2d6b8h7sj2efnzpanh2gis2h58g4.jpg" },
    { icon: "ri-fire-fill", title: "Fireplaces", description: "A fireplace makes a home. We handle gas line connections for gas fireplaces, wood burning fireplaces, and electric fireplaces.", image: "https://parklawnheating.com/wp-content/uploads/2023/02/electric-fireplace-logs-320826394030-64_1000.webp" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
    { q: "What should I do if I smell gas?", a: "Leave the area immediately, avoid using switches or open flames, and call your gas utility/emergency line from a safe location. Once it's safe, we can inspect, locate the leak, and complete repairs as needed." },
    { q: "Do I need a bigger gas line for a tankless water heater or generator?", a: "Often, yes. High-demand appliances may require upsizing portions of the gas piping and confirming total load capacity with a sizing calculation." },
  ],
  metaTitle: "Etobicoke Gas Line Services | Installation | Repair",
  metaDescription: "Gas line issues? Get expert gas line services in Etobicoke with Park Lawn Heating. From gas line installation to repair, we're ready. Schedule today.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

export const etobicokePoolHeater: CityServiceConfig = {
  city: "Etobicoke", citySlug: "etobicoke",
  serviceTitle: "Pool Heater Services", serviceSlug: "pool-heater-services",
  heroHeadline: "Etobicoke Pool Heater Services",
  heroSubheadline: "Reliable Pool Heater Repair & Installation That Keeps Your Swim Season Going",
  heroImage: "https://parklawnheating.com/wp-content/uploads/2024/03/cropped-Park-Lawn-Heating-1.png",
  introHeading: "Pool Heater Repair & Service in Etobicoke",
  introBody: [
    "A warm pool changes everything. It means earlier swims in spring. It means longer nights in fall. And it means less guessing if the water will feel right today. At Park Lawn Heating, we provide trusted pool heater service in Etobicoke for homes and commercial properties.",
    "If your pool heater won't start, won't stay on, or never reaches temperature, we can help. We also install new pool heaters for homeowners who want better control and lower energy use.",
    "Pool heaters work hard. They run outdoors. They face rain, heat, wind, and debris. Over time, parts wear out. Sensors fail. Gas flow drops. Our team handles pool heater repair in Etobicoke for gas and electric systems. We diagnose the issue first. Then we explain the fix in plain language. No pressure. No confusing terms.",
  ],
  whyHeading: "Why Choose Park Lawn Heating?",
  whyBullets: WHY_CHOOSE_BULLETS,
  systemsGrid: [
    { icon: "ri-water-percent-line", title: "Pool Heater Repair", description: "We fix heaters that turn on but shut off early, water that never reaches set temperature, error codes, gas ignition issues, cracked heat exchangers, and faulty thermostats.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/HollandLakeMichiganWeddingPhotographerMaeStier-027-q39vnd43qi41sjr6ypr6fjz0jbeabpm8ubx2l7nhtk.jpg" },
    { icon: "ri-settings-3-line", title: "Pool Heater Installation", description: "We offer full pool heater installation in Etobicoke. We look at pool size, desired water temperature, how often you swim, energy source availability, and existing gas or electrical setup.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Heat_Pump_Installation_51323299230-scaled-q2ua6ur5f8ozta7nho7cp067v1u37zdkm7j216eyog.jpg" },
    { icon: "ri-shield-check-line", title: "Pool Heater Service", description: "We also provide routine pool heater service in Etobicoke. Regular service helps prevent breakdowns during peak swim season. It also improves efficiency and extends heater life.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/indoor-air-purifier-in-bedroom-2022-06-15-21-31-59-utc-scaled-q2xevxp7w6jrv2ezbfxrcbjs0jg1utorodw259gt88.jpg" },
    { icon: "ri-gas-station-line", title: "Gas Line Services", description: "If the issue connects to gas lines or controls, we handle that too. We provide gas line services, gas line repair, and gas line installation as part of our work.", image: "https://parklawnheating.com/wp-content/uploads/elementor/thumbs/Sediment-Trap-2-1-scaled-q39uxesj16kgrk426f7k1zwtogv8iolvcdylj7lukw.jpg" },
  ],
  faqs: [
    ...SHARED_FAQS,
    { q: "What are common signs I need AC repair?", a: "Warm air, poor airflow, water leaks, or frequent shutdowns are common signs you need AC repair. Ignoring these issues can shorten the system's lifespan." },
    { q: "What's included in residential HVAC services?", a: "Residential HVAC services include system installation, HVAC repair, HVAC maintenance, furnace repair, AC repair, and indoor comfort upgrades for homes and condos." },
    { q: "Do you work on commercial HVAC systems?", a: "Yes. We install, repair, and maintain commercial HVAC systems for offices, retail spaces, and multi unit buildings. Our commercial HVAC services focus on reliability and efficiency." },
    { q: "What pool heating services do you offer?", a: "We install, repair, maintain, and replace pool heaters and heat pumps, diagnose heating issues, and optimize your system for performance and efficiency." },
    { q: "What size pool heater do I need?", a: "Heater sizing depends on pool volume, desired temperature rise, outdoor temperature, wind exposure, and whether you use a pool cover. We'll calculate the right size to avoid slow heating or overspending." },
  ],
  metaTitle: "Etobicoke Pool Heater Services | Installation | Repair",
  metaDescription: "Need pool heater services in Etobicoke? Get fast pool heater repair and installation from Park Lawn Heating. Call now to book service.",
  nearbyAreas: ETOBICOKE_NEARBY,
};

// ─── TORONTO — mirrors Etobicoke content with city substitution ───────────────

function makeTorontoVersion(etobicokeConfig: CityServiceConfig): CityServiceConfig {
  const replace = (s: string) => s
    .replace(/Etobicoke/g, "Toronto")
    .replace(/etobicoke/g, "toronto")
    .replace(/South Etobicoke/g, "South Toronto")
    .replace(/Nearly 10 years serving Etobicoke/g, "Nearly 10 years serving the Toronto area")
    .replace(/As Etobicoke grows/g, "As Toronto grows");

  return {
    ...etobicokeConfig,
    city: "Toronto",
    citySlug: "toronto",
    heroHeadline: replace(etobicokeConfig.heroHeadline),
    heroSubheadline: replace(etobicokeConfig.heroSubheadline),
    introHeading: replace(etobicokeConfig.introHeading),
    introBody: etobicokeConfig.introBody.map(replace),
    whyHeading: replace(etobicokeConfig.whyHeading),
    whyBullets: etobicokeConfig.whyBullets?.map((b) => ({ title: replace(b.title), body: replace(b.body) })),
    systemsGrid: etobicokeConfig.systemsGrid.map((s) => ({ ...s, title: replace(s.title), description: replace(s.description) })),
    faqs: etobicokeConfig.faqs.map((f) => ({ q: replace(f.q), a: replace(f.a) })),
    metaTitle: replace(etobicokeConfig.metaTitle),
    metaDescription: replace(etobicokeConfig.metaDescription),
    nearbyAreas: TORONTO_NEARBY,
  };
}

export const torontoAcRepair = makeTorontoVersion(etobicokeAcRepair);
export const torontoFurnaceRepair = makeTorontoVersion(etobicokeFurnaceRepair);
export const torontoHeatingCooling = makeTorontoVersion(etobicokeHeatingCooling);
export const torontoResidential = makeTorontoVersion(etobicokeResidential);
export const torontoCommercial = makeTorontoVersion(etobicokeCommercial);
export const torontoBoiler = makeTorontoVersion(etobicokeBoiler);
export const torontoWaterHeater = makeTorontoVersion(etobicokeWaterHeater);
export const torontoGasLine = makeTorontoVersion(etobicokeGasLine);
export const torontoPoolHeater = makeTorontoVersion(etobicokePoolHeater);

// ─── MISSISSAUGA — mirrors Etobicoke content with city substitution ───────────

function makeMississaugaVersion(etobicokeConfig: CityServiceConfig): CityServiceConfig {
  const replace = (s: string) => s
    .replace(/Etobicoke/g, "Mississauga")
    .replace(/etobicoke/g, "mississauga")
    .replace(/South Etobicoke/g, "South Mississauga")
    .replace(/Nearly 10 years serving Etobicoke/g, "Nearly 10 years serving the Mississauga area")
    .replace(/As Etobicoke grows/g, "As Mississauga grows");

  return {
    ...etobicokeConfig,
    city: "Mississauga",
    citySlug: "mississauga",
    heroHeadline: replace(etobicokeConfig.heroHeadline),
    heroSubheadline: replace(etobicokeConfig.heroSubheadline),
    introHeading: replace(etobicokeConfig.introHeading),
    introBody: etobicokeConfig.introBody.map(replace),
    whyHeading: replace(etobicokeConfig.whyHeading),
    whyBullets: etobicokeConfig.whyBullets?.map((b) => ({ title: replace(b.title), body: replace(b.body) })),
    systemsGrid: etobicokeConfig.systemsGrid.map((s) => ({ ...s, title: replace(s.title), description: replace(s.description) })),
    faqs: etobicokeConfig.faqs.map((f) => ({ q: replace(f.q), a: replace(f.a) })),
    metaTitle: replace(etobicokeConfig.metaTitle),
    metaDescription: replace(etobicokeConfig.metaDescription),
    nearbyAreas: MISSISSAUGA_NEARBY,
  };
}

export const mississaugaAcRepair = makeMississaugaVersion(etobicokeAcRepair);
export const mississaugaFurnaceRepair = makeMississaugaVersion(etobicokeFurnaceRepair);
export const mississaugaHeatingCooling = makeMississaugaVersion(etobicokeHeatingCooling);
export const mississaugaResidential = makeMississaugaVersion(etobicokeResidential);
export const mississaugaCommercial = makeMississaugaVersion(etobicokeCommercial);
export const mississaugaBoiler = makeMississaugaVersion(etobicokeBoiler);
export const mississaugaWaterHeater = makeMississaugaVersion(etobicokeWaterHeater);
export const mississaugaGasLine = makeMississaugaVersion(etobicokeGasLine);
export const mississaugaPoolHeater = makeMississaugaVersion(etobicokePoolHeater);
