import services from '@/content/services.json';
import gallery from '@/content/gallery.json';
import testimonialsContent from '@/content/testimonials.json';
import faqContent from '@/content/faq.json';

export const mainServices = services;

export const whyChooseUs = [
  {
    id: 1,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your complete peace of mind and property protection.',
    icon: 'ri-shield-check-line',
  },
  {
    id: 2,
    title: 'Women-Owned Business',
    description: 'Proudly women-owned and operated, bringing care, dedication, and a personal touch to every property we serve.',
    icon: 'ri-heart-line',
  },
  {
    id: 3,
    title: '5-Star Google Rating',
    description: 'Rated 5.0 out of 5 stars on Google by real customers across Westfield, Huntington, Russell, and Montgomery, MA.',
    icon: 'ri-star-fill',
  },
  {
    id: 4,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee. Your happiness is our priority.',
    icon: 'ri-thumb-up-line',
  },
];

export const testimonials = testimonialsContent;

export const serviceAreas = [
  'Huntington, MA',
  'Montgomery, MA',
  'Russell, MA',
  'Westfield, MA',
];

export const processSteps = [
  {
    id: 1,
    title: 'Contact Us',
    description: 'Call, text, or fill out our form to request your free estimate. We respond quickly.',
    icon: 'ri-phone-line',
  },
  {
    id: 2,
    title: 'Free Estimate',
    description: 'We visit your property, assess your needs, and provide a detailed no-obligation quote.',
    icon: 'ri-file-list-line',
  },
  {
    id: 3,
    title: 'Quality Service',
    description: 'Our professional team completes the work on schedule with exceptional attention to detail.',
    icon: 'ri-checkbox-circle-line',
  },
];

export const faqItems = faqContent;

export const galleryImages = gallery;
