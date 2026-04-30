import CityServicePage from "@/pages/city-service/CityServicePage";
import { torontoHeatingCooling } from "@/mocks/cityServiceData";
export default function Page() { return <CityServicePage config={torontoHeatingCooling} />; }
