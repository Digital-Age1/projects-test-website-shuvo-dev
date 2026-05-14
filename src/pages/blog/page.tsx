import { useEffect } from 'react';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';
import BlogFAQ from './components/BlogFAQ';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'Lawn Care & Landscaping Blog | Trimming Edge Western MA',
    description: 'Expert lawn care tips, landscaping advice, and seasonal guides for Western Massachusetts homeowners. Learn from the pros at Trimming Edge.',
    keywords: 'lawn care blog, landscaping tips Western MA, lawn maintenance advice, Trimming Edge blog',
    canonical: '/blog',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog`,
      url: `${SITE_URL}/blog`,
      name: 'Trimming Edge Lawn Care & Landscaping Blog',
      description: 'Expert lawn care tips, landscaping advice, and seasonal guides for Western Massachusetts homeowners.',
      publisher: {
        '@type': 'Organization',
        name: 'Trimming Edge',
        url: `${SITE_URL}/`,
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <BlogHero />
        <BlogGrid />
        <BlogFAQ />
      </main>
      <PageFooter />
    </div>
  );
}
