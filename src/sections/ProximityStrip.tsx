import { motion } from 'framer-motion';
import { MapPin, Clock, Building2 } from 'lucide-react';

const nearbyCompanies = [
  { name: 'Honeywell', distance: '12 min', icon: Building2 },
  { name: 'ADP', distance: '10 min', icon: Building2 },
  { name: 'Pfizer', distance: '15 min', icon: Building2 },
  { name: 'BASF', distance: '8 min', icon: Building2 },
  { name: 'Teva Pharmaceuticals', distance: '18 min', icon: Building2 },
  { name: 'Novartis', distance: '20 min', icon: Building2 },
];

const transportLinks = [
  { name: 'Newark Airport (EWR)', distance: '25 min', icon: MapPin },
  { name: 'NYC Midtown', distance: '45 min', icon: MapPin },
  { name: 'I-80 / I-287 Interchange', distance: '2 min', icon: MapPin },
];

export default function ProximityStrip() {
  return (
    <section className="bg-dark py-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={20} className="text-gold" />
            <h3 className="text-white font-serif text-xl">Strategically Located</h3>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {nearbyCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-sm p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <company.icon size={16} className="text-gold" />
                  <span className="text-white/60 text-xs">{company.distance}</span>
                </div>
                <p className="text-white text-sm font-medium">{company.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Transport Links */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
            {transportLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <Clock size={14} className="text-gold" />
                <span className="text-white/80 text-sm">{link.name}</span>
                <span className="text-gold text-sm font-medium">{link.distance}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
