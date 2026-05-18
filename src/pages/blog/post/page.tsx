import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import blogContent from '@/content/blog/posts.json';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const blogPosts = blogContent.posts;

function PostContent({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
        <i className="ri-arrow-right-s-line"></i>
        <Link to="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
        <i className="ri-arrow-right-s-line"></i>
        <span className="text-gray-600 truncate">{post.title}</span>
      </nav>

      {/* Category */}
      <span className="inline-block text-xs font-bold text-primary-600 uppercase tracking-widest mb-3">
        {post.category}
      </span>

      {/* Title */}
      <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-4">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center bg-primary-100 rounded-full">
            <i className="ri-user-line text-primary-600 text-sm"></i>
          </div>
          <span>{post.author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="ri-calendar-line"></i>
          <span>{post.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="ri-time-line"></i>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-10 h-64 md:h-80">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content Sections */}
      <div className="prose-custom space-y-5">
        {typeof post.content === 'string' ? (
          post.content.split('\n\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={idx} className="font-display font-bold text-xl md:text-2xl text-gray-900 mt-8 mb-2">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').filter((line) => line.trim().startsWith('- ')).map((line) => line.trim().replace('- ', ''));
              return (
                <ul key={idx} className="space-y-2 pl-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700 text-sm">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-circle-fill text-primary-500 text-base"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-gray-700 text-base leading-relaxed">
                {trimmed}
              </p>
            );
          })
        ) : (
          (post.content as Array<{ type: string; text?: string; items?: string[] }>).map((section, idx) => {
            if (section.type === 'paragraph') {
              return (
                <p key={idx} className="text-gray-700 text-base leading-relaxed">
                  {section.text}
                </p>
              );
            }
            if (section.type === 'heading') {
              return (
                <h2 key={idx} className="font-display font-bold text-xl md:text-2xl text-gray-900 mt-8 mb-2">
                  {section.text}
                </h2>
              );
            }
            if (section.type === 'list' && section.items) {
              return (
                <ul key={idx} className="space-y-2 pl-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700 text-sm">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-circle-fill text-primary-500 text-base"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === 'cta') {
              return (
                <div key={idx} className="bg-primary-50 border border-primary-100 rounded-xl p-6 mt-8 text-center">
                  <p className="text-gray-700 font-medium mb-4">
                    Ready to get started? Contact Trimming Edge today for a free, no-obligation estimate.
                  </p>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center px-8 py-3 bg-primary-600 text-white text-sm font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                  >
                    {section.text}
                  </a>
                </div>
              );
            }
            return null;
          })
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
        {post.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back to Blog</span>
        </Link>
      </div>
    </article>
  );
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">More from the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((post) => (
            <article key={post.id} className="bg-gray-900 rounded-xl overflow-hidden group hover:bg-gray-800 transition-colors">
              <div className="h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">{post.category}</span>
                <h3 className="font-display font-bold text-sm text-white mt-1 mb-2 leading-snug line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors whitespace-nowrap"
                >
                  Read More <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useSEO({
    title: post
      ? `${post.title} | Trimming Edge Blog`
      : 'Blog Post | Trimming Edge Lawn Care',
    description: post
      ? post.excerpt
      : 'Expert lawn care and landscaping tips from Trimming Edge in Western Massachusetts.',
    keywords: post
      ? post.tags.join(', ')
      : 'lawn care tips, landscaping advice, Western Massachusetts',
    canonical: post ? `/blog/${post.slug}` : '/blog',
    ogType: 'article',
    ogImage: post?.image,
    schemaJson: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}`,
          url: `${SITE_URL}/blog/${post.slug}`,
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: {
            '@type': 'Organization',
            name: 'Trimming Edge',
            url: `${SITE_URL}/`,
          },
          keywords: post.tags.join(', '),
          articleSection: post.category,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
            ],
          },
        }
      : undefined,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <PostContent post={post} />
        <RelatedPosts currentSlug={post.slug} />
      </main>
      <PageFooter />
    </div>
  );
}
