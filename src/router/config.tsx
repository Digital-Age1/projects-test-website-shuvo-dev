import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServicesPage from "../pages/services/page";
import RepairPage from "../pages/repair/page";
import InstallationPage from "../pages/installation/page";
import MaintenancePage from "../pages/maintenance/page";
import AboutPage from "../pages/about/page";
import CondosPage from "../pages/condos/page";
import HeatPumpsPage from "../pages/heat-pumps/page";
import FanCoilsPage from "../pages/fan-coils/page";
import BlogPage from "../pages/blog/page";
import FAQPage from "../pages/faq/page";
import ContactPage from "../pages/contact/page";
import LocationsPage from "../pages/locations/page";
import ServiceAreasPage from "../pages/service-areas/page";

// Etobicoke
import EtobicokeAcRepair from "../pages/etobicoke/air-conditioning-repair/page";
import EtobicokeFurnaceRepair from "../pages/etobicoke/furnace-repair/page";
import EtobicokeHeatingCooling from "../pages/etobicoke/heating-and-cooling-service/page";
import EtobicokeResidential from "../pages/etobicoke/residential-hvac-services/page";
import EtobicokeCommercial from "../pages/etobicoke/commercial-hvac-services/page";
import EtobicokeBoiler from "../pages/etobicoke/boiler-services/page";
import EtobicokeWaterHeater from "../pages/etobicoke/water-heater-services/page";
import EtobicokeGasLine from "../pages/etobicoke/gas-line-services/page";
import EtobicokePoolHeater from "../pages/etobicoke/pool-heater-services/page";

// Toronto
import TorontoAcRepair from "../pages/toronto/air-conditioning-repair/page";
import TorontoFurnaceRepair from "../pages/toronto/furnace-repair/page";
import TorontoHeatingCooling from "../pages/toronto/heating-and-cooling-service/page";
import TorontoResidential from "../pages/toronto/residential-hvac-services/page";
import TorontoCommercial from "../pages/toronto/commercial-hvac-services/page";
import TorontoBoiler from "../pages/toronto/boiler-services/page";
import TorontoWaterHeater from "../pages/toronto/water-heater-services/page";
import TorontoGasLine from "../pages/toronto/gas-line-services/page";
import TorontoPoolHeater from "../pages/toronto/pool-heater-services/page";

// Mississauga
import MississaugaAcRepair from "../pages/mississauga/air-conditioning-repair/page";
import MississaugaFurnaceRepair from "../pages/mississauga/furnace-repair/page";
import MississaugaHeatingCooling from "../pages/mississauga/heating-and-cooling-service/page";
import MississaugaResidential from "../pages/mississauga/residential-hvac-services/page";
import MississaugaCommercial from "../pages/mississauga/commercial-hvac-services/page";
import MississaugaBoiler from "../pages/mississauga/boiler-services/page";
import MississaugaWaterHeater from "../pages/mississauga/water-heater-services/page";
import MississaugaGasLine from "../pages/mississauga/gas-line-services/page";
import MississaugaPoolHeater from "../pages/mississauga/pool-heater-services/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/repair-services", element: <RepairPage /> },
  { path: "/installation", element: <InstallationPage /> },
  { path: "/maintenance", element: <MaintenancePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/condos", element: <CondosPage /> },
  { path: "/heat-pumps", element: <HeatPumpsPage /> },
  { path: "/fan-coils", element: <FanCoilsPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/locations", element: <LocationsPage /> },
  { path: "/service-areas", element: <ServiceAreasPage /> },

  // Etobicoke SEO pages
  { path: "/etobicoke/air-conditioning-repair", element: <EtobicokeAcRepair /> },
  { path: "/etobicoke/furnace-repair", element: <EtobicokeFurnaceRepair /> },
  { path: "/etobicoke/heating-and-cooling-service", element: <EtobicokeHeatingCooling /> },
  { path: "/etobicoke/residential-hvac-services", element: <EtobicokeResidential /> },
  { path: "/etobicoke/commercial-hvac-services", element: <EtobicokeCommercial /> },
  { path: "/etobicoke/boiler-services", element: <EtobicokeBoiler /> },
  { path: "/etobicoke/water-heater-services", element: <EtobicokeWaterHeater /> },
  { path: "/etobicoke/gas-line-services", element: <EtobicokeGasLine /> },
  { path: "/etobicoke/pool-heater-services", element: <EtobicokePoolHeater /> },

  // Toronto SEO pages
  { path: "/toronto/air-conditioning-repair", element: <TorontoAcRepair /> },
  { path: "/toronto/furnace-repair", element: <TorontoFurnaceRepair /> },
  { path: "/toronto/heating-and-cooling-service", element: <TorontoHeatingCooling /> },
  { path: "/toronto/residential-hvac-services", element: <TorontoResidential /> },
  { path: "/toronto/commercial-hvac-services", element: <TorontoCommercial /> },
  { path: "/toronto/boiler-services", element: <TorontoBoiler /> },
  { path: "/toronto/water-heater-services", element: <TorontoWaterHeater /> },
  { path: "/toronto/gas-line-services", element: <TorontoGasLine /> },
  { path: "/toronto/pool-heater-services", element: <TorontoPoolHeater /> },

  // Mississauga SEO pages
  { path: "/mississauga/air-conditioning-repair", element: <MississaugaAcRepair /> },
  { path: "/mississauga/furnace-repair", element: <MississaugaFurnaceRepair /> },
  { path: "/mississauga/heating-and-cooling-service", element: <MississaugaHeatingCooling /> },
  { path: "/mississauga/residential-hvac-services", element: <MississaugaResidential /> },
  { path: "/mississauga/commercial-hvac-services", element: <MississaugaCommercial /> },
  { path: "/mississauga/boiler-services", element: <MississaugaBoiler /> },
  { path: "/mississauga/water-heater-services", element: <MississaugaWaterHeater /> },
  { path: "/mississauga/gas-line-services", element: <MississaugaGasLine /> },
  { path: "/mississauga/pool-heater-services", element: <MississaugaPoolHeater /> },

  { path: "*", element: <NotFound /> },
];

export default routes;
