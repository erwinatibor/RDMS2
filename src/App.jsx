import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { WhoWeAre, WhatWeDo, Programs, WhoWeServe, WhyItMatters, FAQ, Contact, Footer } from './components/Sections';

import AboutPage from './pages/About';
import EducationPage from './pages/Education';
import PartnershipPage from './pages/Partnership';
import FAQPage from './pages/FAQ';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhoWeServe />
      <WhyItMatters />
      <Programs />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
