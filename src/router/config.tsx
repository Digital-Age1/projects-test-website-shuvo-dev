import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import PrivacyPage from '../pages/privacy/page';

const HomePage = lazy(() => import('../pages/home/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const LocationsPage = lazy(() => import('../pages/locations/page'));
const HistoryPage = lazy(() => import('../pages/history/page'));
const OurWorkPage = lazy(() => import('../pages/our-work/page'));
const SpeedtestPage = lazy(() => import('../pages/speedtest/page'));
const UpdatesPage = lazy(() => import('../pages/updates/page'));
const WolfRadioPage = lazy(() => import('../pages/wolf-radio/page'));
const ServiceAreasPage = lazy(() => import('../pages/service-areas/page'));
const CityPage = lazy(() => import('../pages/service-areas/CityPage'));
const CityServicePage = lazy(() => import('../pages/service-areas/CityServicePage'));
const PetCarePage = lazy(() => import('../pages/pet-care/page'));
const TechnologyPage = lazy(() => import('../pages/technology/page'));
const LawnMowingPage = lazy(() => import('../pages/services/lawn-mowing/page'));
const LandscapeDesignPage = lazy(() => import('../pages/services/landscape-design/page'));
const TreeShrubCarePage = lazy(() => import('../pages/services/tree-shrub-care/page'));
const SeasonalCleanupsPage = lazy(() => import('../pages/services/seasonal-cleanups/page'));
const MulchingBedMaintenancePage = lazy(() => import('../pages/services/mulching-bed-maintenance/page'));
const CommercialLandscapingPage = lazy(() => import('../pages/services/commercial-landscaping/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogPostPage = lazy(() => import('../pages/blog/post/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const RedirectHandler = lazy(() => import('../pages/RedirectHandler'));

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/services/lawn-mowing', element: <LawnMowingPage /> },
  { path: '/services/landscape-design', element: <LandscapeDesignPage /> },
  { path: '/services/tree-shrub-care', element: <TreeShrubCarePage /> },
  { path: '/services/seasonal-cleanups', element: <SeasonalCleanupsPage /> },
  { path: '/services/mulching-bed-maintenance', element: <MulchingBedMaintenancePage /> },
  { path: '/services/commercial-landscaping', element: <CommercialLandscapingPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/locations', element: <LocationsPage /> },
  { path: '/history', element: <HistoryPage /> },
  { path: '/our-work', element: <OurWorkPage /> },
  { path: '/speedtest', element: <SpeedtestPage /> },
  { path: '/updates', element: <UpdatesPage /> },
  { path: '/wolf-radio', element: <WolfRadioPage /> },
  { path: '/service-areas', element: <ServiceAreasPage /> },
  { path: '/service-areas/:citySlug', element: <CityPage /> },
  { path: '/service-areas/:citySlug/:serviceSlug', element: <CityServicePage /> },
  { path: '/pet-care', element: <PetCarePage /> },
  { path: '/technology', element: <TechnologyPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:slug', element: <BlogPostPage /> },
  { path: '/contact-us', element: <ContactPage /> },
  { path: '/terms-and-conditions', element: <TermsPage /> },
  { path: '/privacy-policy', element: <PrivacyPage /> },
  { path: '*', element: <RedirectHandler /> },
];

export default routes;