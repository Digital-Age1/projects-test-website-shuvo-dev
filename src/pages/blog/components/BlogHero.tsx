import blogContent from '@/content/blog/posts.json';
import blogPage from '@/content/blog/blog.json';

export default function BlogHero() {
  const page = (blogPage || (blogContent && blogContent.page) || {}) as any;
  const title = page.heroTitle || 'Trimming Edge: Blog';
  const subtitle = page.heroSubtitle || 'Lawn care tips, company updates, and expert advice from your local Western MA landscaping team.';
  const image = page.heroImage || '/uploads/hero-blog-gardening-flowers.jpg';
  const ctaLabel = page.ctaPrimaryLabel || 'Schedule a Service';
  const ctaHref = page.ctaPrimaryHref || '/contact-us';

  return (
    <section className="relative h-72 md:h-96 overflow-hidden bg-gray-900">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            {title}
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
          <a
            href={ctaHref}
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white text-sm font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
