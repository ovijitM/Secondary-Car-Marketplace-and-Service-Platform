import "bootstrap/dist/css/bootstrap.min.css";
import Customnavbar from "./components/Customnavbar";
import Carousel from "./components/Carousels";
import Cards from "./components/Cards";
import ProductList from "./components/ProductList";
import CompareProducts from "./components/CompareProducts";
import SecureTransaction from './components/SecureTransaction';
import CarAvailability from "./components/CarAvailability";
import ScheduleRepair from "./components/ScheduleRepair";
import MaintenanceHistory from "./components/MaintenanceHistory"; 
import PartsCostManagement from "./components/PartsCostManagement";

function App() {
  return (
    <>
      <div>
        <Customnavbar />
      </div>
      <div className="h-[600px]">
        <Carousel />
      </div>
      <div>
        <ProductList />
        <CompareProducts />
        <SecureTransaction />
      </div>
      <div>
        <ScheduleRepair />
        <CarAvailability />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="maintenance-section">
        <MaintenanceHistory />
        <PartsCostManagement />
      </div>
    </>
  );
}

export default App;
