import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="location"
      ref={ref}
      className="py-24 lg:py-32 bg-warm-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <SectionReveal direction="left" className="order-2 lg:order-1">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Location
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark leading-[1.15] mb-6">
              Find Your Way to Tara
            </h2>
            <p className="text-dark-secondary leading-relaxed mb-8">
              Conveniently located in Parsippany, New Jersey, Tara offers easy
              access to New York City while providing a peaceful retreat from the
              hustle and bustle.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-dark font-medium">Address</p>
                  <p className="text-dark-secondary text-sm">
                    199 Smith Road, Parsippany, NJ 07054
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-dark font-medium">Phone</p>
                  <p className="text-dark-secondary text-sm">+1 973-515-2000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-dark font-medium">Email</p>
                  <p className="text-dark-secondary text-sm">
                    reservations@tarahotel.com
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="bg-dark text-white hover:bg-dark-secondary px-8 py-6 text-sm font-medium tracking-wide group"
            >
              Get Directions
              <ChevronRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </SectionReveal>

          {/* Image */}
          <SectionReveal
            direction="right"
            delay={0.2}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <img
                  src="/images/location.jpg"
                  alt="Tara Hotel Aerial View"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
