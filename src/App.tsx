import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import AppTitle from "./components/Title/AppTitle";
import Footer from "./components/Footer/Footer";
import FilterComponent from "./components/Filters/FilterComponent";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <AppTitle title="Bikes" />
      <FilterComponent />
      <Footer />
    </div>
  );
}

export default App;
