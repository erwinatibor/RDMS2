import { motion } from 'framer-motion';
import htmlContent from '../../public/docs/RDMS_Partnership_Membership.html?raw';
import { Download, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Sections';

export default function Partnership() {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F0] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 lg:px-14 max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-gold-600"></div>
            <span className="text-sm font-bold tracking-widest text-gold-600 uppercase">Partnership & Membership</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-900 leading-tight mb-4">
                Join The Mission
              </h1>
              <p className="text-forest-800/70 text-lg">Detailed information on becoming an RDMS member or corporate partner.</p>
            </div>
            <a href="/docs/RDMS_Partnership_Membership.docx" download className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-white rounded-md hover:bg-forest-800 transition-colors shadow-lg font-bold shrink-0">
              <Download className="w-5 h-5" /> Download Details (DOCX)
            </a>
          </div>

          <article 
            className="prose bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-forest-800/5 w-full max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />

          <div className="bg-forest-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h2 className="font-display text-3xl font-bold mb-6">Partnership Enquiry</h2>
            <p className="text-white/70 mb-8 max-w-2xl">Ready to collaborate? Send us a brief message about your organization and how we can work together to improve oral health in Rwanda.</p>
            <form className="space-y-4 max-w-2xl relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name or Organization" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500 transition-colors" />
              </div>
              <textarea placeholder="Tell us about your proposed partnership..." rows="4" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500 transition-colors"></textarea>
              <button className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-3 px-8 rounded-lg transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
