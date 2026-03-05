import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, MapPin, Building2, Briefcase } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] mt-[50px]"
      >
        <img
          src="/images/Brighten_and_illuminate_all_the_hotel_windows_thro-1772672689631.png"
          alt="Tara Hotel Illuminated Exterior"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Google Reviews Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-white text-sm font-medium">4.2</span>
              <span className="text-white/70 text-sm">|</span>
              <span className="text-white/70 text-sm">1,847 Google Reviews</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-sm tracking-[0.2em] uppercase mb-4 font-medium"
            >
              Corporate Travel Preferred
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
            >
              Your Business Home Away From Home
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl"
            >
              Just 15 minutes from Honeywell, ADP, and Pfizer. Tara Hotel offers 
              corporate travelers seamless access to Parsippany's business district 
              with premium amenities and extended-stay comfort.
            </motion.p>

            {/* Corporate Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-sm">
                <Building2 size={18} className="text-gold" />
                <span className="text-white text-sm">Corporate Rates Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-sm">
                <Briefcase size={18} className="text-gold" />
                <span className="text-white text-sm">Pharma-Compliant Meetings</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-sm">
                <MapPin size={18} className="text-gold" />
                <span className="text-white text-sm">I-80 & I-287 Access</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection('#rooms')}
                className="bg-white text-dark hover:bg-white/90 px-8 py-6 text-sm font-medium tracking-wide group"
              >
                Book Your Stay
                <ChevronRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                onClick={() => scrollToSection('#corporate')}
                variant="outline"
                className="border-white/50 text-black hover:bg-white/10 hover:border-white px-8 py-6 text-sm font-medium tracking-wide"
              >
                Corporate Rates
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
