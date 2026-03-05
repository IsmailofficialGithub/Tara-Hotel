import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Rooms', href: '#rooms' },
  { name: 'Corporate Rates', href: '#corporate' },
  { name: 'Meetings', href: '#meetings' },
  { name: 'Dining', href: '#dining' },
  { name: 'Local Area', href: '#local-area' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#333333]/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'bg-[#4a4a4a]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <a href="#" className="flex items-center group">
              <span className="font-serif text-2xl tracking-widest text-white uppercase group-hover:text-gold transition-colors">
                Tara Hotel
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[13px] font-medium tracking-widest uppercase text-white/80 hover:text-white link-underline transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#rooms')}
                className="bg-gold hover:bg-gold/90 text-white border-none rounded-none px-8 py-6 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-neutral-900 shadow-2xl border-l border-neutral-800"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <div className="pt-24 px-8">
                <div className="mb-12">
                  <span className="font-serif text-xl tracking-widest text-white uppercase">
                    Tara Hotel
                  </span>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-sm font-medium tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors py-2"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <Button
                    onClick={() => scrollToSection('#rooms')}
                    className="w-full bg-gold hover:bg-gold/90 text-white border-none rounded-none py-6 text-xs font-bold tracking-[0.2em] uppercase"
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
