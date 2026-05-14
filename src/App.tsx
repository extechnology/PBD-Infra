import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import Loader from "./components/feedback/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const JourneyPage = lazy(() => import("./pages/OurJourneyPage"));
const OfferPage = lazy(() => import("./pages/WeOfferPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
