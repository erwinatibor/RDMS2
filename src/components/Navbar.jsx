import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: isHome ? '#who-we-are' : '/about' },
    { name: 'Services', href: isHome ? '#what-we-do' : '/#what-we-do' },
    { name: 'Programs', href: isHome ? '#programs' : '/#programs' },
    { name: 'Resources', href: '/education' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Extract the ID to scroll to (remove leading / and #)
    const id = target.replace('/#', '').replace('#', '');
    
    if (isHome) {
      // If already on the home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 lg:px-14 py-4 ${
          scrolled ? 'glass shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="RDMS Logo" className="h-10 w-auto object-contain" />
            <div className="leading-tight">
              <span className="text-white font-display font-bold text-xl block">RDMS</span>
              <span className="text-white/50 text-[0.65rem] uppercase tracking-widest hidden md:block">Dento-Medical Society</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              link.href.includes('#') ? (
                <button 
                  key={link.name} 
                  onClick={(e) => handleScrollTo(e, link.href)} 
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group cursor-pointer bg-transparent border-none p-0"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link key={link.name} to={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </div>

          <Link to="/partnership" className="hidden lg:inline-block px-6 py-2.5 bg-gold-600 text-forest-950 font-bold text-sm rounded hover:bg-gold-500 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-gold-600/30">
            Partnership & Membership
          </Link>

          <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] glass bg-forest-950/95 flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-12 px-4">
              {links.map((link, i) => (
                link.href.includes('#') ? (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    key={link.name} onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-3xl font-display font-medium text-white/80 hover:text-white border-b border-white/10 pb-4 text-left bg-transparent border-none w-full cursor-pointer"
                  >
                    {link.name}
                  </motion.button>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={link.name}>
                    <Link to={link.href} onClick={handleLinkClick} className="text-3xl font-display font-medium text-white/80 hover:text-white border-b border-white/10 pb-4 block">
                      {link.name}
                    </Link>
                  </motion.div>
                )
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Link to="/partnership" onClick={handleLinkClick} className="mt-8 px-6 py-4 bg-gold-600 text-forest-950 text-center font-bold text-lg rounded-lg block">
                  Partnership & Membership
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
