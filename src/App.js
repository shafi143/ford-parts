import Navbar from "./Layouts/Navbar";
import "./App.css"
import FirstSection from "./pages/LandingFirst"
import Footer from "./Layouts/Footer"
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import WatsapIcon from "./Layouts/watsapIcon" 
import ProductPage from "./pages/productPage"
import Registeration from "./pages/Registeration"
import Jsoncheck from "./pages/jsoncheck";
import StoreData from "./pages/storeData";
import DetailPage from "./pages/detailPage";
import ScrollToTop from "./scrollTTop";

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<FirstSection/>}/>
      <Route path="/product-page" element={<ProductPage/>}/>
      <Route path="/registeration" element={<Registeration/>}/>
      <Route path="/apiintegration" element={<Jsoncheck/>}/>
      <Route path="/storedata" element={<StoreData/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
    </Routes>
    <WatsapIcon/>
    <Footer/>
    </BrowserRouter>
  
    </>
  );
}

export default App;
