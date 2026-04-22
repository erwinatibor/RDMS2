import { motion } from 'framer-motion';
import { MapPin, Globe, Shield } from 'lucide-react';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 1, type: "spring", stiffness: 50 } }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest-950">
      {/* Cinematic Full-Screen Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video 
          src={`${import.meta.env.BASE_URL}assets/hero.mp4`} 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-forest-950/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 via-transparent to-forest-950"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(26,71,49,0.2)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0"></div>
      <div className="grain z-0 opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-32 pb-20 w-full flex flex-col justify-center min-h-[80vh]">
        
        {/* Left Content */}
        <div className="max-w-3xl">
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
            We serve patients, students, healthcare professionals, and underserved communities through dental outreach, public health campaigns, research, and professional education — because oral health is not separate from general health.
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
      </div>
    </section>
  );
}
