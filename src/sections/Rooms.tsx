import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Wifi, Coffee, Monitor, Bath } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const rooms = [
  {
    id: 1,
    name: 'Traditional Guest Room',
    description: 'Perfect for short business trips with king or double queen beds, ergonomic workspace, and premium WiFi.',
    image: '/images/room-double.jpg',
    amenities: ['Ergonomic Desk', 'Premium WiFi', 'Coffee Maker'],
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Spacious suite with separate living area, ideal for extended stays and executive travelers.',
    image: '/images/suite.jpg',
    amenities: ['Separate Living Area', 'Wet Bar', 'Premium WiFi'],
  },
  {
    id: 3,
    name: 'Club Level Access',
    description: 'Enhanced accommodations with exclusive Club Lounge access for breakfast and evening hors d\'oeuvres.',
    image: '/images/club-lounge.jpg',
    amenities: ['Club Lounge Access', 'Complimentary Breakfast', 'Business Center'],
  },
];

const roomFeatures = [
  { icon: Wifi, label: 'Complimentary High-Speed WiFi' },
  { icon: Monitor, label: '42" Flat-Screen TV' },
  { icon: Coffee, label: 'In-Room Coffee & Tea' },
  { icon: Bath, label: 'Premium Bath Amenities' },
];

export default function Rooms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark leading-[1.15] mb-4">
            Rooms & Suites
          </h2>
          <p className="text-dark-secondary max-w-2xl mx-auto">
            Designed for the modern business traveler. All rooms feature ergonomic workspaces, 
            premium WiFi, and the comforts you need for productive stays.
          </p>
        </SectionReveal>

        {/* Room Features */}
        <SectionReveal delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {roomFeatures.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2">
                <feature.icon size={18} className="text-gold" />
                <span className="text-dark-secondary text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Room Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <h3 className="font-serif text-2xl text-dark mb-2 group-hover:text-gold transition-colors">
                {room.name}
              </h3>
              <p className="text-dark-secondary text-sm leading-relaxed mb-4">
                {room.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="text-xs bg-warm-white text-dark-secondary px-3 py-1 rounded-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended Stay CTA */}
        <SectionReveal delay={0.4} className="mt-16 bg-warm-white p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl text-dark mb-3">
                Extended Stay Rates Available
              </h3>
              <p className="text-dark-secondary mb-6">
                Planning a longer assignment in the Parsippany area? Our extended stay 
                packages offer significant savings for stays of 7 nights or more, with 
                additional perks like laundry service and room upgrades.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="border-dark text-dark hover:bg-dark hover:text-white px-6 py-5 text-sm font-medium group"
                >
                  Learn More
                  <ChevronRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-8">
              <div className="text-center">
                <p className="font-serif text-4xl text-gold">15%</p>
                <p className="text-dark-secondary text-sm">Off 7+ Nights</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl text-gold">25%</p>
                <p className="text-dark-secondary text-sm">Off 30+ Nights</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
