import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      "Tara exceeded every expectation. The attention to detail, the stunning architecture, and the warm hospitality made our stay truly unforgettable.",
    author: 'Sarah M.',
    role: 'Guest Review',
  },
  {
    id: 2,
    quote:
      "A perfect blend of elegance and comfort. The staff went above and beyond to ensure our anniversary celebration was magical.",
    author: 'James & Emily R.',
    role: 'Guest Review',
  },
  {
    id: 3,
    quote:
      "From the moment we arrived, we felt like royalty. The grounds are breathtaking and the rooms are impeccably appointed.",
    author: 'Michael T.',
    role: 'Guest Review',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed italic mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="text-white font-medium">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-white/50 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
