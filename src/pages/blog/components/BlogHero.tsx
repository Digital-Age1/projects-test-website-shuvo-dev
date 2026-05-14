export default function BlogHero() {
  return (
    <section className="relative h-72 md:h-96 overflow-hidden bg-gray-900">
      <img
        src="https://readdy.ai/api/search-image?query=professional%20landscaper%20hands%20in%20green%20gloves%20planting%20colorful%20flowers%20into%20rich%20dark%20mulch%20garden%20bed%2C%20close%20up%20detail%20shot%2C%20autumn%20leaves%20in%20background%2C%20warm%20golden%20hour%20light%2C%20bokeh%20effect&width=1920&height=700&seq=blog_hero_main_02&orientation=landscape"
        alt="Trimming Edge Blog"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            Trimming Edge: Blog
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Lawn care tips, company updates, and expert advice from your local Western MA landscaping team.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white text-sm font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Schedule a Service
          </a>
        </div>
      </div>
    </section>
  );
}
