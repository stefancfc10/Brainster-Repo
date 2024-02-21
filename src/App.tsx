import { Banner } from "./components/banner/Banner";
import { DetailsBlock } from "./components/details-block/Details-block";
import { Footer } from "./components/footer/Footer";
import { Place } from "./components/places-container/Places";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
     <Banner />
     <DetailsBlock 
    img="https://images.unsplash.com/photo-1686922187671-510b88dfc927?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Stories of Adventure" />
    <Place/>
    <DetailsBlock 
    img="https://images.unsplash.com/photo-1698840473362-5a73b1fa7eaf?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Popular Adventures" />
    <Footer/>
    
    </div>
  );
};

export default App;
