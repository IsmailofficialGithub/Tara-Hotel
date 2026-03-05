import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, Utensils, Coffee } from 'lucide-react';

export default function Dining() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

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
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="dining"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <img
          src="/images/dining.jpg"
          alt="Tara Hotel Dining"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4 font-medium"
          >
            Dining
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-6"
          >
            On-Site Dining & Bar
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg leading-relaxed mb-8"
          >
            Whether you need a quick breakfast before meetings, a working lunch, 
            or a relaxed dinner after a long day, our on-site restaurant and bar 
            offer convenient, quality dining options for busy professionals.
          </motion.p>

          {/* Dining Options */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm">
              <Coffee size={24} className="text-gold mx-auto mb-3" />
              <h3 className="text-white font-medium mb-2">Breakfast</h3>
              <p className="text-white/60 text-sm">6:00 AM - 10:00 AM</p>
              <p className="text-white/60 text-sm">Club Lounge available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm">
              <Utensils size={24} className="text-gold mx-auto mb-3" />
              <h3 className="text-white font-medium mb-2">Lunch & Dinner</h3>
              <p className="text-white/60 text-sm">11:00 AM - 10:00 PM</p>
              <p className="text-white/60 text-sm">Full menu & bar</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm">
              <Clock size={24} className="text-gold mx-auto mb-3" />
              <h3 className="text-white font-medium mb-2">Room Service</h3>
              <p className="text-white/60 text-sm">6:00 AM - 11:00 PM</p>
              <p className="text-white/60 text-sm">In-room dining</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              className="bg-white text-dark hover:bg-white/90 px-8 py-6 text-sm font-medium tracking-wide group"
            >
              View Menu
              <ChevronRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
