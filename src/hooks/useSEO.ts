import { useEffect } from 'react';
import seo from '@/content/seo.json';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  route?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
  schemaJson?: object | object[];
}

const SITE_URL = import.meta.env.VITE_SITE_URL || seo.siteUrl || 'https://trimmingedge.com';

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  route,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  robots,
  schemaJson,
}: SEOProps) {
  useEffect(() => {
    const routeKey = route ?? canonical;
    const routeData = routeKey ? seo.routes?.[routeKey] : undefined;
    const documentTitle = title || routeData?.title || seo.defaultTitle;
    const pageDescription = description || routeData?.description || seo.defaultDescription;
    const pageKeywords = keywords || routeData?.keywords;
    const pageRobots = robots || routeData?.robots || seo.robots || 'noindex, nofollow';
    const canonicalPath = canonical || routeData?.canonical || routeKey || '/';
    const canonicalUrl = canonicalPath.startsWith('http') ? canonicalPath : `${SITE_URL}${canonicalPath}`;
    const imagePath = ogImage || routeData?.ogImage || seo.ogImage;
    const ogImageUrl = imagePath ? (imagePath.startsWith('http') ? imagePath : `${SITE_URL}${imagePath}`) : undefined;
    const openGraphTitle = ogTitle || documentTitle;
    const openGraphDescription = ogDescription || pageDescription;

    document.title = documentTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', pageDescription);
    if (pageKeywords) setMeta('keywords', pageKeywords);
    setMeta('robots', pageRobots);

    setLink('canonical', canonicalUrl);

    setMeta('og:title', openGraphTitle, true);
    setMeta('og:description', openGraphDescription, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', canonicalUrl, true);
    if (ogImageUrl) setMeta('og:image', ogImageUrl, true);

    setMeta('twitter:title', openGraphTitle);
    setMeta('twitter:description', openGraphDescription);
    if (ogImageUrl) setMeta('twitter:image', ogImageUrl);

    setMeta('last-modified', new Date().toISOString().split('T')[0]);

    const schemaId = 'page-schema-jsonld';
    let existingScript = document.getElementById(schemaId);
    if (existingScript) existingScript.remove();

    if (schemaJson) {
      const script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      const schemas = Array.isArray(schemaJson) ? schemaJson : [schemaJson];
      script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, [title, description, keywords, canonical, route, ogTitle, ogDescription, ogType, ogImage, robots, schemaJson]);
}

export { SITE_URL };
