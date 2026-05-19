import { useEffect } from 'react';
import seo from '@/content/seo.json';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
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
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  robots = seo.robots || 'noindex, nofollow',
  schemaJson,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

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

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', robots);

    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', canonicalUrl, true);
    if (ogImage) setMeta('og:image', ogImage, true);

    // Twitter
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);

    // Last modified
    setMeta('last-modified', new Date().toISOString().split('T')[0]);

    // Schema JSON-LD
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
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogType, ogImage, robots, schemaJson]);
}

export { SITE_URL };
