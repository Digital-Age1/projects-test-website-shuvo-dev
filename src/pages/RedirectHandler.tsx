import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { cities, services } from './service-areas/serviceAreaData';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { useSEO } from '@/hooks/useSEO';

const citySlugs = new Set(cities.map((c) => c.slug));
const serviceSlugs = new Set(services.map((s) => s.slug));

export default function RedirectHandler() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  useSEO({
    title: 'Page Not Found | Trimming Edge Lawn Care',
    description: 'The page you are looking for could not be found. Return to Trimming Edge for professional lawn care and landscaping in Western Massachusetts.',
  });

  // Trailing slash redirect (e.g. /services/ -> /services)
  if (path.endsWith('/') && path !== '/') {
    return <Navigate to={path.slice(0, -1)} replace />;
  }

  // WordPress date archives (e.g. /2024/03/15/, /2024/03/, /2024/)
  if (/^\/\d{4}(\/\d{2})?(\/\d{2})?$/.test(path)) {
    return <Navigate to="/blog" replace />;
  }

  // WordPress category, author, tag archives
  if (/^\/(category|author|tag)\b/.test(path)) {
    return <Navigate to="/blog" replace />;
  }

  // Blog pagination (e.g. /blog/page/2/)
  if (/^\/blog\/page\//.test(path)) {
    return <Navigate to="/blog" replace />;
  }

  // Old direct city-service URLs like /montgomery-ma/lawn-care-services
  const cityServiceMatch = path.match(/^\/([a-z0-9-]+-ma)\/([a-z0-9-]+)$/);
  if (cityServiceMatch) {
    const [, citySlug, serviceSlug] = cityServiceMatch;
    if (citySlugs.has(citySlug) && serviceSlugs.has(serviceSlug)) {
      return <Navigate to={`/service-areas/${citySlug}/${serviceSlug}`} replace />;
    }
    if (citySlugs.has(citySlug)) {
      return <Navigate to={`/service-areas/${citySlug}`} replace />;
    }
  }

  // Old direct city URLs like /montgomery-ma
  const cityMatch = path.match(/^\/([a-z0-9-]+-ma)$/);
  if (cityMatch) {
    const [, citySlug] = cityMatch;
    if (citySlugs.has(citySlug)) {
      return <Navigate to={`/service-areas/${citySlug}`} replace />;
    }
  }

  // No redirect matched — render a proper 404 page with correct SEO signals
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <div className="flex flex-col items-center justify-center py-40 text-center px-4">
        <i className="ri-map-pin-line text-6xl text-gray-300 mb-4"></i>
        <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-2 max-w-md">
          We couldn&apos;t find the page you were looking for. It may have been moved or removed.
        </p>
        <p className="text-sm text-gray-400 mb-6 font-mono">{path}</p>
        <a
          href="/"
          className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
        >
          Return to Home
        </a>
      </div>
      <PageFooter />
    </div>
  );
}
