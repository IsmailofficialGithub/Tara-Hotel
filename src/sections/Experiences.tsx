import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const features = [
  '19 acres of landscaped gardens and walking paths',
  'Indoor pool and comprehensive fitness facilities',
  'Proximity to NYC and local New Jersey attractions',
  'Exceptional service from our dedicated team',
];

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="experiences"
      ref={ref}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <SectionReveal direction="left" className="order-1">
            <div className="relative overflow-hidden aspect-[4/3]">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <img
                  src="/images/pool.jpg"
                  alt="Tara Hotel Pool"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>
            </div>
          </SectionReveal>

          {/* Content */}
          <SectionReveal direction="right" delay={0.2} className="order-2">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Experiences
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark leading-[1.15] mb-6">
              Create Lasting Memories
            </h2>
            <div className="space-y-4 text-dark-secondary leading-relaxed mb-8">
              <p>
                Whether you're seeking a peaceful retreat or an active getaway,
                Tara offers experiences tailored to your desires. Explore our
                scenic grounds, unwind by the pool, or discover local attractions
                just moments away.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-gold" />
                  </div>
                  <span className="text-dark-secondary text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="border-dark text-dark hover:bg-dark hover:text-white px-8 py-6 text-sm font-medium tracking-wide group transition-all duration-300"
            >
              Plan Your Experience
              <ChevronRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
