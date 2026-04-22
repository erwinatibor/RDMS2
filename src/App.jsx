import { HashRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { WhoWeAre, WhatWeDo, Programs, WhoWeServe, WhyItMatters, FAQ, Contact, Footer } from './components/Sections';

import AboutPage from './pages/About';
import EducationPage from './pages/Education';
import PartnershipPage from './pages/Partnership';
import FAQPage from './pages/FAQ';

function ScrollConnector() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 bottom-0 w-[3px] bg-white/10 z-50 hidden lg:block pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 bg-gold-500 origin-top shadow-[0_0_15px_rgba(201,152,58,0.8)]"
        style={{ scaleY }}
      />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <ScrollConnector />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhoWeServe />
      <WhyItMatters />
      <Programs />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
