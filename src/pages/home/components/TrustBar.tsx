export default function TrustBar() {
  return (
    <section className="bg-primary-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center space-x-2">
            <i className="ri-star-fill text-yellow-400 text-lg"></i>
            <div>
              <div className="font-bold text-sm">5.0 Google Rating</div>
              <div className="text-sm text-primary-100">5-Star Google Rating</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-shield-check-line text-primary-400 text-lg"></i>
            <div>
              <div className="font-bold text-sm">Licensed &amp; Insured</div>
              <div className="text-sm text-primary-100">Fully Protected</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-award-line text-primary-400 text-lg"></i>
            <div>
              <div className="font-bold text-sm">Locally Owned</div>
              <div className="text-sm text-primary-100">Family Operated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}