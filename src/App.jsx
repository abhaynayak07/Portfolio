import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoogleClassroom from "./components/Projects/Pages/GoogleClassroom";
import RentMyRide from "./components/Projects/Pages/RentMyRide";
import KiteByZerodha from "./components/Projects/Pages/KiteByZerodha";
import AarogyaGuru from "./components/Projects/Pages/AarogyaGuru";
import CanvasAndCode from "./components/Projects/Pages/CanvasAndCode";
import WhatsApp from "./components/Projects/Pages/WhatsApp";
import Youtube from "./components/Projects/Pages/Youtube";
import Coolzee from "./components/Projects/Pages/Coolzee";
import UrbanMonkey from "./components/Projects/Pages/UrbanMonkey";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="projects/google_classroom"
            element={<GoogleClassroom />}
          />
          <Route path="projects/rent_my_ride" element={<RentMyRide />} />
          <Route path="projects/kite_by_zerodha" element={<KiteByZerodha />} />
          <Route path="projects/aarogya_guru" element={<AarogyaGuru />} />
          <Route path="projects/canvas_and_code" element={<CanvasAndCode />} />
          <Route path="projects/whatsapp" element={<WhatsApp />} />
          <Route path="projects/youtube" element={<Youtube />} />
          <Route path="projects/coolzee" element={<Coolzee />} />
          <Route path="projects/urban_monkey" element={<UrbanMonkey />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
