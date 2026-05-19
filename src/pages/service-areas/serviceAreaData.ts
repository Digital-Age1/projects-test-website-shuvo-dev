import serviceAreas from '@/content/serviceAreas.json';

export const landing = serviceAreas.landing;
export const locationsContent = serviceAreas.locations;
export const cities = serviceAreas.cities;
export const services = serviceAreas.services;
export const cityServices = serviceAreas.cityServices;

export const serviceIcons = Object.fromEntries(
  services.map((service) => [service.slug, service.icon])
) as Record<string, string>;

export const serviceDescriptions = Object.fromEntries(
  services.map((service) => [service.slug, service.description])
) as Record<string, string>;

export function getCity(citySlug?: string) {
  return cities.find((city) => city.slug === citySlug);
}

export function getService(serviceSlug?: string) {
  return services.find((service) => service.slug === serviceSlug);
}

export function getCityService(citySlug?: string, serviceSlug?: string) {
  return cityServices.find(
    (entry) => entry.citySlug === citySlug && entry.serviceSlug === serviceSlug
  );
}
