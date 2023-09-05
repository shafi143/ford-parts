import Navbar from "./Layouts/Navbar";
import "./App.css";
import "./spinner.css";
// import FirstSection from "./pages/LandingFirst"
import Footer from "./Layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatsapIcon from "./Layouts/watsapIcon";

import ScrollToTop from "./scrollTTop";
import React, { Suspense } from "react";
import Spinner from "./spinner";
const Home = React.lazy(() => import("./pages/LandingFirst"));
const Registeration = React.lazy(() => import("./pages/Registeration"));

const StoreData = React.lazy(() => import("./pages/storeData"));
const DetailPage = React.lazy(() => import("./pages/detailPage"));
const ProductPage = React.lazy(() => import("./pages/ProductDetailPage"));
const CarPage = React.lazy(() => import("./pages/CarPage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/carparts/:category"
            element={
              <Suspense fallback={<Spinner />}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="/:carCategory"
            element={
              <Suspense fallback={<Spinner />}>
                <CarPage />
              </Suspense>
            }
          />
          <Route
            path="/registeration"
            element={
              <Suspense fallback={<Spinner />}>
                <Registeration />
              </Suspense>
            }
          />
        
          <Route
            path="/storedata"
            element={
              <Suspense fallback={<Spinner />}>
                <StoreData />
              </Suspense>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <DetailPage />
              </Suspense>
            }
          />
        </Routes>

        <WatsapIcon />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
