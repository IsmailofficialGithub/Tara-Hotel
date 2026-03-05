import { motion } from 'framer-motion';
import { Waves, Dumbbell, Calendar, Crown } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const amenities = [
  {
    id: 1,
    name: 'Indoor Pool & Spa',
    description:
      'Relax and rejuvenate in our serene pool and wellness facilities',
    icon: Waves,
  },
  {
    id: 2,
    name: 'Fitness Center',
    description:
      'State-of-the-art equipment for your workout routine',
    icon: Dumbbell,
  },
  {
    id: 3,
    name: 'Event Spaces',
    description:
      'Elegant venues for meetings, weddings, and celebrations',
    icon: Calendar,
  },
  {
    id: 4,
    name: 'Club Lounge',
    description:
      'Exclusive access for executive guests with premium amenities',
    icon: Crown,
  },
];

export default function Amenities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark leading-[1.15]">
            Thoughtfully Curated For You
          </h2>
        </SectionReveal>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={itemVariants}
              className="group flex gap-6 p-6 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <amenity.icon
                    size={24}
                    className="text-gold group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-dark mb-2 group-hover:text-gold transition-colors">
                  {amenity.name}
                </h3>
                <p className="text-dark-secondary text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
