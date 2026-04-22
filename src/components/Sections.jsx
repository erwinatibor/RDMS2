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
    <section id="who-we-are" className="py-28 lg:py-36 bg-[#FAF7F0] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-50/50 rounded-bl-[100px] -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-8 leading-tight">
                Rwanda's Oral–Systemic Health Movement.
              </h2>
              <p className="text-forest-800/70 text-lg mb-6 leading-relaxed">
                Dento-Medical Society Rwanda (RDMS) is a registered non-profit organization founded on 1 July 2024, headquartered in Huye, Rwanda.
              </p>
              <p className="text-forest-800/70 text-lg mb-10 leading-relaxed">
                RDMS was founded by Igisubizo Jimmy Confiance and operates under RDB registration code 143885158.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Excellence', 'Integrity', 'Compassion', 'Innovation', 'Collaboration'].map((v, i) => (
                  <motion.span 
                    key={v} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm text-forest-800 font-semibold rounded-lg text-sm border border-forest-800/10 shadow-sm"
                  >
                    {v}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="space-y-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-[2rem] blur-xl -z-10"></div>
              <div className="glass-card-dark rounded-2xl p-8 lg:p-12 text-white shadow-[0_20px_50px_rgba(26,71,49,0.2)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="h-1 w-12 bg-gold-500 mb-8 rounded-full"></div>
                <p className="font-display text-2xl lg:text-3xl font-medium italic mb-6 leading-relaxed">"A Rwanda where every person has access to quality oral healthcare, regardless of geography or economic status."</p>
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-gold-400" />
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Our Vision</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhatWeDo() {
  const services = [
    { icon: Users, title: 'Mobile Clinics', desc: 'Free and low-cost dental outreach through mobile community clinics' },
    { icon: Megaphone, title: 'Education Campaigns', desc: 'Public oral health education campaigns' },
    { icon: Heart, title: 'School Programs', desc: 'School-based dental hygiene programs' },
    { icon: Microscope, title: 'Research', desc: 'Research collaboration with academic institutions' },
    { icon: Stethoscope, title: 'Professional Training', desc: 'Professional training and interdisciplinary workshops' },
    { icon: BookOpen, title: 'Mentorship', desc: 'Mentorship and student development programs' },
    { icon: Scale, title: 'Policy Dialogue', desc: 'Policy dialogue to integrate dentistry into Rwanda’s national health agenda' }
  ];

  return (
    <section id="what-we-do" className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <h2 className="font-display text-4xl font-bold text-forest-900 mb-6 max-w-2xl">Delivering care, education, and advocacy.</h2>
        <p className="text-forest-800/70 text-lg mb-16 max-w-4xl">
          RDMS delivers dental services, interdisciplinary training, community mobile clinics, public health campaigns, research collaborations, and policy advocacy. RDMS publishes the Dental Medicine Chronicles, runs a student research academy, and operates mentorship programs for dental and medical students across Rwanda.
        </p>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              whileHover={{ scale: 1.03, y: -8 }}
              className="group glass-card p-8 rounded-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-gradient-to-bl from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl"></div>
              <div className="w-14 h-14 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 text-forest-700 shadow-sm group-hover:text-gold-600 transition-colors border border-white/50">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-forest-900 mb-3">{s.title}</h3>
              <p className="text-forest-800/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
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
    <section id="who-we-serve" className="py-28 lg:py-36 bg-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,71,49,0.8)_0%,rgba(15,31,23,1)_100%)]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-500/15 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-forest-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empowering vulnerable populations.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                RDMS serves patients seeking oral health guidance, dental and medical students, healthcare professionals, partner organizations, donors, and underserved and rural communities in Rwanda who lack access to preventive dental care.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {groups.map((g, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }} transition={{ duration: 0.3 }} className="glass-card-dark p-6 rounded-2xl flex gap-6 items-start cursor-default border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center shrink-0 text-gold-400 border border-gold-500/20">
                    <g.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{g.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{g.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-28 lg:py-36 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-6">The Mouth is the Mirror of the Body.</h2>
          <p className="text-forest-800/70 text-lg max-w-4xl mx-auto">
            Dentistry is consistently underfunded and overlooked in Rwanda’s healthcare system. Fragmented services, low public awareness, and limited preventive care result in preventable diseases and reduced quality of life — disproportionately affecting vulnerable populations. RDMS exists to close that gap.
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-6 leading-tight">
            Our flagship initiatives on the ground.
          </h2>
          <p className="text-forest-800/70 text-lg">
            From mobile clinics serving rural villages to a peer-reviewed publication reaching practitioners nationwide — each programme is built around one goal: integrating oral care into Rwanda's health system.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02, y: -5 }} className="group glass-card p-8 rounded-2xl transition-all duration-300 flex gap-6 items-start relative overflow-hidden">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(201,152,58,0.05)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 text-forest-700 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors border border-white/50 shadow-sm z-10">
                <p.icon className="w-7 h-7" />
              </div>
              <div className="z-10">
                <h3 className="font-display text-xl font-bold text-forest-900 mb-2">{p.title}</h3>
                <p className="text-forest-800/70 leading-relaxed text-sm">{p.desc}</p>
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
