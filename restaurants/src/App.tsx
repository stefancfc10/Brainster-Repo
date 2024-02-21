import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RestaurantDetail from "./components/RestaurantDetail";
import CuisineDetail from "./components/CuisineDetail";
import Favorites from "./components/Favorites";

const App = () => {
  return (<div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/cuisines/:name" element={<CuisineDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<div>Error Page not found</div>} />
      </Routes>
    <Footer/>
    
    </div>);
};

export default App;
