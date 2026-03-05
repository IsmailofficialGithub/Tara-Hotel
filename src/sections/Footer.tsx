import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Award } from 'lucide-react';

const quickLinks = [
  { name: 'Rooms', href: '#rooms' },
  { name: 'Corporate Rates', href: '#corporate' },
  { name: 'Meetings', href: '#meetings' },
  { name: 'Dining', href: '#dining' },
  { name: 'Local Area', href: '#local-area' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="Tara Hotel"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your business home away from home in Parsippany, NJ. 
              Corporate rates, pharma-compliant meetings, and extended stay options available.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <Award size={18} />
              <span className="text-sm">Wyndham Rewards Partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>199 Smith Road</li>
              <li>Parsippany, NJ 07054</li>
              <li className="pt-2">
                <a href="tel:+19735152000" className="hover:text-white transition-colors">
                  +1 973-515-2000
                </a>
              </li>
              <li>
                <a href="mailto:reservations@tarahotel.com" className="hover:text-white transition-colors">
                  reservations@tarahotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:bg-gold transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Tara Hotel. All rights reserved. A Wyndham Hotel.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
