import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SchoolMate from "./components/Projects/Pages/SchoolMate";
import QEasy from "./components/Projects/Pages/QEasy";
import GoogleClassroom from "./components/Projects/Pages/GoogleClassroom";
import RentMyRide from "./components/Projects/Pages/RentMyRide";
import KiteByZerodha from "./components/Projects/Pages/KiteByZerodha";
import AarogyaGuru from "./components/Projects/Pages/AarogyaGuru";
import CanvasAndCode from "./components/Projects/Pages/CanvasAndCode";
import WhatsApp from "./components/Projects/Pages/WhatsApp";
import Youtube from "./components/Projects/Pages/Youtube";
import Coolzee from "./components/Projects/Pages/Coolzee";
import UrbanMonkey from "./components/Projects/Pages/UrbanMonkey";
import OlliePets from "./components/Projects/Pages/OlliePets";
import SaveLife from "./components/Projects/Pages/SaveLife";
import NirvanHealth from "./components/Projects/Pages/NirvanaHealthCare";
import FigmaStatusLogs from "./components/Projects/Pages/FigmaStatusLogs";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/nirvana_health_care" element={<NirvanHealth />} />
            <Route path="projects/figma_status_logs" element={<FigmaStatusLogs />} />
            <Route path="projects/school_mate" element={<SchoolMate />} />
            <Route path="projects/q_easy" element={<QEasy />} />
            <Route
              path="projects/google_classroom"
              element={<GoogleClassroom />}
            />
            <Route path="projects/rent_my_ride" element={<RentMyRide />} />
            <Route
              path="projects/kite_by_zerodha"
              element={<KiteByZerodha />}
            />
            <Route path="projects/aarogya_guru" element={<AarogyaGuru />} />
            <Route
              path="projects/canvas_and_code"
              element={<CanvasAndCode />}
            />
            <Route path="projects/whatsapp" element={<WhatsApp />} />
            <Route path="projects/youtube" element={<Youtube />} />
            <Route path="projects/coolzee" element={<Coolzee />} />
            <Route path="projects/urban_monkey" element={<UrbanMonkey />} />
            <Route path="projects/ollie_pets" element={<OlliePets />} />
            <Route path="projects/save_life" element={<SaveLife />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
