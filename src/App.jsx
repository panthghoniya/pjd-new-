import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AboutUs from './pages/Aboutus/aboutus';
import Contact from './pages/Contact/contact';
import Innerproduct from './pages/homepage/Innerproduct';
import Gallery from './pages/Gallery/gallery';
import ProductListing from './pages/Product/product';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import ScrollToTop from './common components/layout/ScrollToTop';
import FloatingButtons from './common components/layout/FloatingButtons';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingButtons />
      <div className="bg-brand-background min-h-screen text-brand-dark font-sans antialiased">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/product/:id" element={<Innerproduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
