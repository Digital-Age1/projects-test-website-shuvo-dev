import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';

export default function PetCarePage() {
  return (
    <>
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=happy%20golden%20retriever%20dog%20playing%20in%20a%20lush%20green%20backyard%20lawn%20on%20a%20sunny%20summer%20day%20in%20New%20England%2C%20well-maintained%20grass%2C%20white%20picket%20fence%2C%20bright%20blue%20sky%2C%20warm%20afternoon%20light%2C%20joyful%20pet%2C%20clean%20yard%2C%20Massachusetts%20residential%20home%20background&width=1920&height=800&seq=te_petcare_hero&orientation=landscape"
              alt="Pet Care Services — Trimming Edge"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">
              Serving Clients Throughout Western Massachusetts
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pamper Your Pets Today!
            </h1>
            <a
              href="/contact-us"
              className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Estimate
            </a>
          </div>
        </section>

        {/* Quality Care Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Care For Your Furry Friend.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Trimming Edge is the ultimate destination for premium pet care, where your furry friend's happiness and well-being are our top priorities. Our expert team is dedicated to providing personalized pet care services, ensuring your pet feels comfortable, loved, and cared for every step of the way. We believe every pet deserves the best, so we focus on delivering outstanding pet care that meets the highest standards. With a passion for animals and a commitment to excellence, Trimming Edge pet care is the trusted choice for pet owners throughout Western Massachusetts.
                </p>
                <a
                  href="tel:+14135519653"
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>
              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=woman%20gently%20petting%20a%20fluffy%20dog%20in%20a%20cozy%20home%20setting%2C%20warm%20natural%20light%2C%20comfortable%20living%20room%2C%20caring%20pet%20sitter%2C%20happy%20calm%20dog%2C%20soft%20colors%2C%20Massachusetts%20home%20interior%2C%20trust%20and%20comfort%2C%20professional%20pet%20care&width=800&height=600&seq=te_petcare_02&orientation=landscape"
                  alt="Quality Pet Care"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 25 Years Experience */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Trustworthy, Animal Lover, Over 25 Years of Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you speak to anyone that knows me, they would all say that I am a huge animal lover. Growing up I was never without some kind of pet. You name it, I most likely owned it, except snakes and tarantulas. I grew up with experience with cats, dogs, fish, guinea pigs, hamsters, mice, rabbits and even a pony. I live in a condo and can take small to medium sized dogs in my home. If my cats and your dog(s) are okay with each other, I am able to watch larger dogs in your home. I am open for discussion on staying over night, as I like to think about my cats. I lessen all for my in-laws cats, quite often. I have taken care of many animals at one time.
            </p>
            <a
              href="/contact-us"
              className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </a>
          </div>
        </section>

        {/* What I'd like to know about your pet */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What I would like to know about your pet
            </h2>
            <p className="text-gray-600 mb-6">
              I would like to know a dog's personality and behavior. How the dog interacts around other people, children and other pets. How well they handle on a leash.
            </p>
            <div className="text-left inline-block">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Additional Skills:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2"><i className="ri-checkbox-circle-line text-primary-600 mt-0.5"></i><span>Oral Medication Administration</span></li>
                <li className="flex items-start space-x-2"><i className="ri-checkbox-circle-line text-primary-600 mt-0.5"></i><span>Special Needs Dog Experience</span></li>
                <li className="flex items-start space-x-2"><i className="ri-checkbox-circle-line text-primary-600 mt-0.5"></i><span>Senior Dog Experience</span></li>
                <li className="flex items-start space-x-2"><i className="ri-checkbox-circle-line text-primary-600 mt-0.5"></i><span>Puppy Experience</span></li>
                <li className="flex items-start space-x-2"><i className="ri-checkbox-circle-line text-primary-600 mt-0.5"></i><span>Cat Experience</span></li>
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="tel:+14135519653"
                className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Additional Information
              </a>
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              I Offer the Following Services:
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Please Call Amanda at <a href="tel:+14135519653" className="text-primary-600 font-semibold">(413) 551-9653 (WCE F)</a> For Specialized Services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PAWp-In Services */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className="ri-footprint-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">PAWp-In Services</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>$15</strong> for the first 30 minutes</li>
                  <li><strong>$5</strong> for each additional 15 min</li>
                  <li>2 Special Needs Dog Assistance</li>
                  <li><strong>$25</strong> for the first 30 min</li>
                  <li><strong>$5</strong> for the first 30 min</li>
                </ul>
              </div>

              {/* Overnight Services */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className="ri-moon-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Overnight Services</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>$100</strong> Overnight, 22 Hour Max/ Mid-day PAWp-In Included</li>
                  <li><strong>$200</strong> + Overnight, Includes 2 Hours Per Day Visit</li>
                </ul>
                <p className="text-xs text-gray-400 mt-3">*See Scheduling Info</p>
              </div>

              {/* Pet Taxi */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className="ri-taxi-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Pet Taxi</h3>
                <p className="text-sm text-gray-600 mb-2">Medication pick-ups, vet trips and more.</p>
                <p className="text-sm font-semibold text-gray-900">$45 Minimum</p>
                <p className="text-xs text-gray-500 mt-1">Depending on location &amp; distance so soon as set.</p>
              </div>

              {/* Dog Logs Pick-Ups */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <i className="ri-map-pin-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Dog Logs Pick-Ups Service (New)</h3>
                <p className="text-sm text-gray-600 mb-2">
                  I'll clean up your home and tidying your dog's Logs, Shrub bag and trimmed them into your trash or designated area.
                </p>
                <p className="text-xs text-gray-500">Business partnerships available. Ask Log Pickups. Ask me How.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dog Logs Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Dog Logs Pricing (Biweekly/Left)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Twice a Week Dog Logs Pickups:</li>
                  <li>1 honey hole a Week, with weather permitting:</li>
                  <li>1 Dog $25</li>
                  <li>2 Dogs $35</li>
                  <li>3 Dogs $45</li>
                  <li>Etc. $5 more per dog</li>
                  <li className="mt-3">1 Scoop every Week, with weather permitting:</li>
                  <li>1 Dog $30</li>
                  <li>2 Dogs $40</li>
                  <li>3 Dogs $50</li>
                  <li>Etc. $5 more per dog</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>1 Scoop every other Week, with weather permitting:</li>
                  <li>1 Dog $20</li>
                  <li>2 Dogs $30</li>
                  <li>3 Dogs $40</li>
                  <li>Etc. $5 more per dog</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Spring Pickups */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Spring Pickups</h2>
            <p className="text-gray-600 leading-relaxed">
              Spring Season is between March 1st and April 30th. Spring cleanups are Biweekly and priced in Olmec's yard on $100+Base rates of a Weekly Pickup, based on the number of Dogs.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Get in Touch with us Today!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-time-line text-3xl text-primary-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Time of Operation</h3>
                <p className="text-sm text-gray-600">Mon - Fri: 8:00 am – 6:00 pm</p>
                <p className="text-sm text-gray-600">Saturday: 9:00 am – 5:00 pm</p>
                <p className="text-sm text-gray-600">Sunday: Closed</p>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-phone-line text-3xl text-primary-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Office Phone</h3>
                <a href="tel:4135519653" className="text-primary-600 font-semibold">(413) 551-9653</a>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-star-line text-3xl text-primary-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ready to Begin?</h3>
                <a
                  href="/contact-us"
                  className="inline-block px-5 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request Estimate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
