import { motion } from 'framer-motion';
import htmlContent from '../../public/docs/RDMS_Organization_Profile.html?raw';
import { Download, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Sections';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F0] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 lg:px-14 max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-gold-600"></div>
            <span className="text-sm font-bold tracking-widest text-gold-600 uppercase">RDMS Organization Profile</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-900 leading-tight">
              About Us
            </h1>
            <a href="/docs/RDMS_Organization_Profile.docx" download className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-white rounded-md hover:bg-forest-800 transition-colors shadow-lg font-bold">
              <Download className="w-5 h-5" /> Download Full Profile (DOCX)
            </a>
          </div>

          <div className="grid md:grid-cols-[1fr_350px] gap-12 items-start">
            <article 
              className="prose bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-forest-800/5"
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />
            
            <aside className="sticky top-32 space-y-6">
              <div className="glass-card-dark rounded-2xl p-8 text-white shadow-xl bg-forest-900 border border-white/10">
                <Shield className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Officially Registered</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  Dento-Medical Society Rwanda is officially registered with the Rwanda Development Board (RDB).
                </p>
                <div className="bg-white/10 p-3 rounded-lg border border-white/20 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-white/50">RDB Code</span>
                  <span className="font-bold text-gold-400">143885158</span>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
