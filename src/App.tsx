import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConidtions from "./pages/TermsAndConditions";
import About from "./pages/About";
import DetailPackages from "./pages/DetailPackages";
import PaintCorrection from "./pages/PaintCorrection";
import CeramicCoating from "./pages/CeramicCoating";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound404 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConidtions />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail-packages" element={<DetailPackages />} />
            <Route path="/paint-correction" element={<PaintCorrection />} />
            <Route path="/ceramic-coating" element={<CeramicCoating />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}



