import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-warm-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <SectionReveal direction="left" className="order-2 lg:order-1">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Welcome to Tara
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark leading-[1.15] mb-6">
              A Legacy of Distinction
            </h2>
            <div className="space-y-4 text-dark-secondary leading-relaxed">
              <p>
                Nestled among 19 acres of manicured grounds, Tara embodies the
                perfect blend of historic charm and contemporary luxury. Our
                castle-inspired architecture creates an atmosphere of timeless
                sophistication, while our thoughtfully appointed accommodations
                ensure every modern comfort.
              </p>
              <p>
                From the moment you arrive, you'll discover why discerning
                travelers choose Tara as their sanctuary away from home. Every
                detail has been carefully curated to provide an unforgettable
                experience of elegance and tranquility.
              </p>
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                className="border-dark text-dark hover:bg-dark hover:text-white px-8 py-6 text-sm font-medium tracking-wide group transition-all duration-300"
              >
                Discover Our Story
                <ChevronRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>
          </SectionReveal>

          {/* Image */}
          <SectionReveal
            direction="right"
            delay={0.2}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-square">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <img
                  src="/images/about.jpg"
                  alt="Tara Hotel Lobby"
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
