import { motion } from 'framer-motion';
import htmlContent from '../../public/docs/RDMS_Oral_Health_Education_Guide.html?raw';
import { Download, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Sections';

export default function Education() {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F0] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 lg:px-14 max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-gold-600"></div>
            <span className="text-sm font-bold tracking-widest text-gold-600 uppercase">Resources</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-900 leading-tight mb-4">
                Oral Health Education Guide
              </h1>
              <p className="text-forest-800/70 text-lg">Your complete guide to understanding the oral-systemic connection.</p>
            </div>
            <a href="/docs/RDMS_Oral_Health_Education_Guide.docx" download className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-white rounded-md hover:bg-forest-800 transition-colors shadow-lg font-bold shrink-0">
              <Download className="w-5 h-5" /> Download Guide (DOCX)
            </a>
          </div>

          <article 
            className="prose bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-forest-800/5 w-full max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
