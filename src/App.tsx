import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import BookingBar from './components/BookingBar';
import Hero from './sections/Hero';
import ProximityStrip from './sections/ProximityStrip';
import Rooms from './sections/Rooms';
import CorporateRates from './sections/CorporateRates';
import Meetings from './sections/Meetings';
import Dining from './sections/Dining';
import WyndhamRewards from './sections/WyndhamRewards';
import LocalArea from './sections/LocalArea';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-warm-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <img 
              src="/logo.png" 
              alt="Tara Hotel" 
              className="h-16 w-auto mx-auto"
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-warm-white"
        >
          <Navigation />
          <BookingBar />
          <main className="pt-20">
            <Hero />
            <ProximityStrip />
            <Rooms />
            <CorporateRates />
            <Meetings />
            <Dining />
            <WyndhamRewards />
            <LocalArea />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
