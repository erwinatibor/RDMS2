import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Stethoscope, BookOpen, Microscope, Megaphone, Scale, Heart, Activity, Shield, ArrowRight, MapPin, Globe, Phone, Mail, Plus, Minus, Truck, GraduationCap, FileText, ClipboardList } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-[2px] w-10 bg-gold-600"></div>
    <span className="text-sm font-bold tracking-widest text-gold-600 uppercase">{title}</span>
  </div>
);



export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-28 lg:py-36 bg-[#FAF7F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[150%] bg-forest-50/50 rounded-bl-[150px] -z-10 rotate-6 transform origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-forest-900 mb-8 leading-[1.1] tracking-tight">
                Rwanda's <br className="hidden lg:block"/> <span className="text-gold-600 italic font-normal">Oral–Systemic</span> <br className="hidden lg:block"/> Health Movement.
              </h2>
              <p className="text-forest-800/80 text-lg md:text-xl mb-6 leading-relaxed max-w-xl">
                Dento-Medical Society Rwanda (RDMS) is a registered non-profit organization founded on 1 July 2024, headquartered in Huye, Rwanda.
              </p>
              <p className="text-forest-800/70 text-lg mb-10 leading-relaxed max-w-xl">
                Founded by Igisubizo Jimmy Confiance, operating under RDB registration code 143885158.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Excellence', 'Integrity', 'Compassion', 'Innovation', 'Collaboration'].map((v, i) => (
                  <motion.span 
                    key={v} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-5 py-2.5 bg-white shadow-md text-forest-900 font-bold rounded-full text-sm tracking-wide border border-forest-100"
                  >
                    {v}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[650px] w-full">
              <div className="absolute top-0 right-0 w-3/4 h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-700">
                <img src={`${import.meta.env.BASE_URL}assets/Gallery/RDMS (10).png`} alt="Community Outreach" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-forest-950/10 mix-blend-multiply"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-3/5 h-[55%] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-[#FAF7F0] z-20 hover:scale-[1.05] transition-transform duration-700">
                <img src={`${import.meta.env.BASE_URL}assets/Gallery/RDMS (28).png`} alt="Clinical Care" className="w-full h-full object-cover" />
              </div>

              {/* Floating Vision Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/2 -left-8 lg:-left-16 transform -translate-y-1/2 glass-card-dark rounded-2xl p-6 lg:p-8 text-white shadow-[0_20px_50px_rgba(26,71,49,0.3)] z-30 max-w-[280px]"
              >
                <div className="h-1 w-10 bg-gold-500 mb-4 rounded-full"></div>
                <p className="font-display text-xl font-medium italic mb-4 leading-relaxed">"A Rwanda where every person has access to quality oral healthcare."</p>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gold-400" />
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Our Vision</p>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhatWeDo() {
  const services = [
    { id: 'mobile', icon: Users, title: 'Mobile Clinics', desc: 'Free and low-cost dental outreach through mobile community clinics', colSpan: 'md:col-span-2 lg:col-span-2', rowSpan: 'lg:row-span-2', theme: 'image', img: 'RDMS (33).png' },
    { id: 'edu', icon: Megaphone, title: 'Education Campaigns', desc: 'Public oral health education campaigns', colSpan: 'md:col-span-1 lg:col-span-1', rowSpan: 'lg:row-span-1', theme: 'light' },
    { id: 'school', icon: Heart, title: 'School Programs', desc: 'School-based dental hygiene programs', colSpan: 'md:col-span-1 lg:col-span-1', rowSpan: 'lg:row-span-1', theme: 'light' },
    { id: 'research', icon: Microscope, title: 'Research & Collaboration', desc: 'Research collaboration with academic institutions', colSpan: 'md:col-span-2 lg:col-span-2', rowSpan: 'lg:row-span-1', theme: 'image-dark', img: 'RDMS (17).png' },
    { id: 'training', icon: Stethoscope, title: 'Professional Training', desc: 'Professional training and interdisciplinary workshops', colSpan: 'md:col-span-1 lg:col-span-1', rowSpan: 'lg:row-span-1', theme: 'light' },
    { id: 'mentor', icon: BookOpen, title: 'Mentorship', desc: 'Mentorship and student development programs', colSpan: 'md:col-span-1 lg:col-span-1', rowSpan: 'lg:row-span-1', theme: 'light' },
    { id: 'policy', icon: Scale, title: 'Policy Dialogue', desc: 'Policy dialogue to integrate dentistry into Rwanda’s national health agenda', colSpan: 'md:col-span-2 lg:col-span-2', rowSpan: 'lg:row-span-1', theme: 'gold' }
  ];

  return (
    <section id="what-we-do" className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-6 max-w-3xl leading-tight tracking-tight">
          Delivering care, education, and advocacy.
        </h2>
        <p className="text-forest-800/80 text-lg md:text-xl mb-16 max-w-4xl leading-relaxed">
          RDMS delivers dental services, interdisciplinary training, community mobile clinics, public health campaigns, research collaborations, and policy advocacy. RDMS publishes the Dental Medicine Chronicles, runs a student research academy, and operates mentorship programs for dental and medical students across Rwanda.
        </p>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]"
        >
          {services.map((s, i) => {
            const isImage = s.theme.includes('image');
            const isDark = s.theme === 'image-dark' || s.theme === 'forest';
            const isGold = s.theme === 'gold';
            
            return (
              <motion.div 
                key={s.id} 
                variants={fadeUp} 
                whileHover={{ scale: 1.02 }}
                className={`group rounded-3xl p-8 relative overflow-hidden transition-all duration-500 flex flex-col justify-end ${s.colSpan} ${s.rowSpan} ${
                  !isImage && !isGold ? 'bg-forest-50 hover:bg-forest-100' : ''
                } ${isGold ? 'bg-gold-500 text-forest-950' : ''} ${!isImage && !isGold && !isDark ? 'text-forest-900' : 'text-white'}`}
              >
                {isImage && (
                  <>
                    <img src={`${import.meta.env.BASE_URL}assets/Gallery/${s.img}`} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className={`absolute inset-0 ${s.theme === 'image-dark' ? 'bg-forest-950/80' : 'bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent'}`}></div>
                  </>
                )}
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm backdrop-blur-md border ${
                    isImage || isDark ? 'bg-white/10 border-white/20 text-white' : 
                    isGold ? 'bg-white/20 border-white/30 text-forest-950' : 
                    'bg-white border-forest-100 text-forest-700'
                  }`}>
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className={`font-display text-2xl font-bold mb-3 ${isGold ? 'text-forest-950' : ''}`}>{s.title}</h3>
                  <p className={`leading-relaxed ${
                    isImage || isDark ? 'text-white/80' : 
                    isGold ? 'text-forest-950/80 font-medium' : 
                    'text-forest-800/70'
                  }`}>{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function WhoWeServe() {
  const groups = [
    { title: "Marginalized Communities", desc: "Reaching individuals in rural districts who otherwise lack access to dental facilities.", icon: MapPin },
    { title: "School Children", desc: "Providing early interventions and toothbrushing programs to establish lifelong habits.", icon: Activity },
    { title: "Healthcare Workers", desc: "Equipping localized medics with the knowledge to spot oral signs of systemic disease.", icon: Heart }
  ];

  return (
    <section id="who-we-serve" className="py-32 lg:py-48 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}assets/Gallery/RDMS (24).png`} alt="Community Outreach" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-950/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Empowering vulnerable <span className="text-gold-500 italic font-normal">populations.</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            RDMS serves patients seeking oral health guidance, dental and medical students, healthcare professionals, partner organizations, donors, and underserved and rural communities in Rwanda who lack access to preventive dental care.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {groups.map((g, i) => (
            <motion.div key={i} variants={fadeUp} className="group glass-card-dark p-8 md:p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:-translate-y-2 backdrop-blur-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/20 flex items-center justify-center mb-8 group-hover:bg-gold-500 group-hover:text-forest-900 transition-colors text-gold-400 shadow-[0_0_30px_rgba(201,152,58,0.2)]">
                <g.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{g.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{g.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-32 lg:py-48 bg-forest-950 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl aspect-square bg-gold-600/10 rounded-full blur-[150px] animate-blob z-0"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-14 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-gold-500 mb-8 flex justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="opacity-50"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
            The Mouth is the <br className="hidden md:block"/> <span className="text-gold-500 italic font-normal">Mirror</span> of the Body.
          </h2>
          <p className="text-white/60 text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Dentistry is consistently underfunded and overlooked in Rwanda’s healthcare system. Fragmented services and limited preventive care result in preventable diseases. <br className="hidden md:block"/><br className="hidden md:block"/><span className="text-white font-medium text-2xl lg:text-3xl">RDMS exists to close that gap.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Programs() {
  const programs = [
    { icon: Truck, title: 'Community Mobile Clinics', desc: 'Preventive and curative dental services in rural and underserved areas' },
    { icon: GraduationCap, title: 'Research Academy', desc: 'Resources and training for dental and medical students' },
    { icon: FileText, title: 'Dental Medicine Chronicles', desc: 'Educational content on oral-systemic health' },
    { icon: Stethoscope, title: 'Interdisciplinary Workshops', desc: 'Integrated training for healthcare professionals' },
    { icon: Megaphone, title: 'Public Health Campaigns', desc: 'Oral hygiene awareness for schools and communities' },
  ];

  return (
    <section id="programs" className="py-28 lg:py-36 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-3xl mb-16">
          <SectionHeader title="Programs" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-forest-900 mb-8 leading-tight tracking-tight">
            Our flagship initiatives <br className="hidden lg:block"/> <span className="text-gold-600 italic font-normal">on the ground.</span>
          </h2>
          <p className="text-forest-800/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            From mobile clinics serving rural villages to a peer-reviewed publication reaching practitioners nationwide — each programme is built around one goal: integrating oral care into Rwanda's health system.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02, y: -5 }} className="group glass-card p-8 rounded-3xl transition-all duration-300 flex flex-col gap-6 items-start relative overflow-hidden bg-white border border-forest-100 shadow-[0_10px_40px_rgba(26,71,49,0.05)] hover:shadow-[0_20px_50px_rgba(201,152,58,0.15)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-forest-50 rounded-2xl flex items-center justify-center shrink-0 text-forest-700 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors border border-forest-100 shadow-sm z-10">
                <p.icon className="w-8 h-8" />
              </div>
              <div className="z-10">
                <h3 className="font-display text-2xl font-bold text-forest-900 mb-3">{p.title}</h3>
                <p className="text-forest-800/70 leading-relaxed text-lg">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



export function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: 'What is RDMS?', a: 'RDMS stands for Dento-Medical Society Rwanda. It is a registered non-profit organization uniting dental surgeons, dental therapists, and public health professionals to improve oral health access in Rwanda.' },
    { q: 'Does RDMS run free dental services?', a: 'Yes. RDMS operates community mobile clinics offering preventive and curative dental services to underserved and rural populations at no cost.' },
    { q: 'Can students join RDMS?', a: 'Yes. RDMS offers student membership, mentorship programs, and a Research Academy for dental and medical students across Rwanda.' },
    { q: 'Does RDMS do outreach in rural areas?', a: 'Yes. Mobile clinic outreach to underserved and rural communities is one of RDMS\'s core activities, primarily across Rwanda\'s Southern Province and expanding nationwide.' },
    { q: 'What is the Dental Medicine Chronicles?', a: 'It is RDMS\'s educational publication covering oral-systemic health topics for both healthcare professionals and the general public.' },
    { q: 'How can I partner with RDMS?', a: 'Partner organizations can contact RDMS via rdmspresident13@gmail.com to discuss outreach collaboration, research initiatives, and joint programming.' },
    { q: 'Does RDMS diagnose dental conditions?', a: 'No. RDMS provides education and referral guidance. Diagnosis and treatment require an in-person consultation with a licensed dental professional.' },
    { q: 'What languages does RDMS operate in?', a: 'English, Kinyarwanda, and French.' },
    { q: 'Where is RDMS headquartered?', a: 'Ngoma, Huye, Southern Province, Rwanda.' },
    { q: 'How is RDMS funded?', a: 'RDMS is sustained through partnerships with government institutions, NGOs, dental associations, and international partners, as well as membership contributions.' },
  ];

  return (
    <section id="faq" className="py-28 lg:py-36 bg-[#FAF7F0] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-14 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-gold-600"></div>
            <span className="text-sm font-bold tracking-widest text-gold-600 uppercase">FAQ</span>
            <div className="h-[2px] w-10 bg-gold-600"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-4 leading-tight">
            Frequently asked questions.
          </h2>
          <p className="text-forest-800/70 text-lg">
            Everything you need to know about RDMS, our services, and how to get involved.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-xl border border-forest-800/5 shadow-sm overflow-hidden">
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-forest-50/50 transition-colors">
                  <span className="font-display font-bold text-forest-900 text-lg">{f.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center text-forest-700">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-forest-800/70 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-3xl mb-16">
          <SectionHeader title="Contact & Pricing" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-6 leading-tight">
            Let's build healthier smiles together.
          </h2>
          <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-10 text-left">
            <h3 className="font-display text-xl font-bold text-forest-900 mb-2">Pricing Information</h3>
            <p className="text-forest-800/80 leading-relaxed">
              RDMS is a non-profit organization. Services are provided free or at subsidized cost to underserved communities. Membership, partnership, and program fees vary. Contact RDMS directly for current rates.
            </p>
          </div>
          <p className="text-forest-800/70 text-lg">
            Whether you're a partner organization, a student seeking mentorship, or a community that needs a mobile clinic — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.a whileHover={{ scale: 1.02, y: -5 }} href="tel:+250791853120" className="group glass-card p-8 rounded-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-colors"></div>
            <div className="w-14 h-14 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-forest-700 shadow-sm group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors border border-white/50 relative z-10">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-sm font-bold text-forest-700/60 uppercase tracking-widest mb-2 relative z-10">Phone</h3>
            <p className="font-display text-xl font-bold text-forest-900 relative z-10">+250 791 853 120</p>
          </motion.a>

          <motion.a whileHover={{ scale: 1.02, y: -5 }} href="mailto:rdmspresident13@gmail.com" className="group glass-card p-8 rounded-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-colors"></div>
            <div className="w-14 h-14 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-forest-700 shadow-sm group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors border border-white/50 relative z-10">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-display text-sm font-bold text-forest-700/60 uppercase tracking-widest mb-2 relative z-10">Email</h3>
            <p className="font-display text-xl font-bold text-forest-900 break-all relative z-10">rdmspresident13@gmail.com</p>
          </motion.a>

          <motion.a whileHover={{ scale: 1.02, y: -5 }} href="https://maps.app.goo.gl/cMVGs3eTfQViYqng8" target="_blank" rel="noopener noreferrer" className="group glass-card p-8 rounded-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-colors"></div>
            <div className="w-14 h-14 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-forest-700 shadow-sm group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors border border-white/50 relative z-10">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display text-sm font-bold text-forest-700/60 uppercase tracking-widest mb-2 relative z-10">Headquarters</h3>
            <p className="font-display text-xl font-bold text-forest-900 relative z-10">Ngoma, Huye</p>
            <p className="text-forest-800/70 text-sm mt-1 relative z-10">Southern Province, Rwanda</p>
          </motion.a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-forest-800/60">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 rounded-full">
            <Shield className="w-4 h-4 text-gold-600" />
            RDB Registered · 143885158
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 rounded-full">
            <Globe className="w-4 h-4 text-gold-600" />
            English · Kinyarwanda · French
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 rounded-full">
            <ClipboardList className="w-4 h-4 text-gold-600" />
            Founded 1 July 2024
          </span>
        </div>
      </div>
    </section>
  );
}



export function Footer() {
  return (
    <footer className="bg-forest-950 py-16 border-t border-white/5 text-center md:text-left relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-white font-display font-bold text-2xl">RDMS</h2>
          <p className="text-white/40 text-sm mt-1">Dento-Medical Society Rwanda</p>
          <p className="text-white/40 text-xs mt-1"><a href="mailto:rdmspresident13@gmail.com" className="hover:text-gold-400 transition-colors">rdmspresident13@gmail.com</a> | +250 791 853 120</p>
        </div>
        <div className="text-white/30 text-sm text-right">
          © {new Date().getFullYear()} RDMS. All rights reserved.<br/>
          <span className="text-xs">Based in Huye, Southern Province, RW</span>
        </div>
      </div>
    </footer>
  );
}
