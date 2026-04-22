import { motion } from 'framer-motion';
import { MapPin, Globe, Shield } from 'lucide-react';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 1, type: "spring", stiffness: 50 } }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest-950">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-forest-600/20 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-gold-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-forest-400/10 rounded-full blur-[120px] animate-blob animation-delay-4000 pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_25%,rgba(42,122,84,0.15)_0%,transparent_60%),radial-gradient(ellipse_45%_65%_at_15%_90%,rgba(201,152,58,0.1)_0%,transparent_55%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(26,71,49,0.2)_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
      <div className="grain"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-32 pb-20 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <motion.div custom={1} initial="hidden" animate="visible" variants={textVariants} className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold-600"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">Est. 2024 · Rwanda</span>
          </motion.div>

          <motion.h1 custom={2} initial="hidden" animate="visible" variants={textVariants} className="font-display font-bold text-white leading-[1.05] tracking-tight mb-8 text-5xl md:text-6xl">
            Dento-Medical Society <span className="text-gold-400 font-normal italic">Rwanda</span> (RDMS)
          </motion.h1>

          <motion.p custom={3} initial="hidden" animate="visible" variants={textVariants} className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-12 text-justify">
            A non-profit organization uniting dental surgeons, therapists, and public health professionals to advance oral and systemic health in Rwanda.
            <br /><br />
            We serve patients, students, healthcare professionals, and underserved communities through dental outreach, public health campaigns, research, and professional education because oral health is not separate from general health.
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="visible" variants={textVariants} className="flex flex-wrap gap-4 mb-14">
            <a href="#who-we-are" className="px-8 py-3.5 bg-gold-600 text-forest-950 font-bold rounded-md hover:bg-gold-500 hover:-translate-y-1 transition-all shadow-[0_0_40px_rgba(201,152,58,0.4)]">
              Discover Our Story
            </a>
            <a href="#what-we-do" className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-md hover:bg-white/10 hover:-translate-y-1 hover:border-white/40 transition-all">
              What We Do
            </a>
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="visible" variants={textVariants} className="flex flex-wrap gap-3">
            {[
              { icon: Shield, text: "RDB Registered" },
              { icon: MapPin, text: "Huye, Rwanda" },
              { icon: Globe, text: "EN · RW · FR" }
            ].map((Badge, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/60 border border-white/10 bg-white/5 backdrop-blur-sm">
                <Badge.icon className="w-3.5 h-3.5 text-gold-500" /> {Badge.text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Video / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gold-500/10 blur-2xl rounded-full z-0"></div>
          <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <video 
              src={`${import.meta.env.BASE_URL}assets/hero.mp4`} 
              autoPlay muted loop playsInline 
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="absolute top-4 left-4 px-3 py-1.5 glass rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[0.65rem] font-bold tracking-wider text-white uppercase">Live Outreach</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
