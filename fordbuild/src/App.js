import Navbar from "./Layouts/Navbar";
import "./App.css"
import "./spinner.css"
// import FirstSection from "./pages/LandingFirst"
import Footer from "./Layouts/Footer"
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import WatsapIcon from "./Layouts/watsapIcon" 

import ScrollToTop from "./scrollTTop";
import React, { Suspense } from 'react';
const Home = React.lazy(()=>import("./pages/LandingFirst"))
const Registeration = React.lazy(()=>import("./pages/Registeration"))
const Jsoncheck = React.lazy(()=>import("./pages/jsoncheck"))
const StoreData = React.lazy(()=>import("./pages/storeData"))
const DetailPage = React.lazy(()=>import("./pages/detailPage"))
const ProductPage = React.lazy(()=>import("./pages/ProductDetailPage"))
const CarPage = React.lazy(()=>import("./pages/CarPage"))
function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Suspense fallback={<div className="loading-spinner"></div>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/carparts/:category" element={<ProductPage/>}/>
      <Route path="/:carCategory" element={<CarPage/>}/>
      <Route path="/registeration" element={<Registeration/>}/>
      <Route path="/apiintegration" element={<Jsoncheck/>}/>
      <Route path="/storedata" element={<StoreData/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
    </Routes>
    </Suspense>
    <WatsapIcon/>
    <Footer/>
    </BrowserRouter>
  
    </>
  );
}

export default App;
