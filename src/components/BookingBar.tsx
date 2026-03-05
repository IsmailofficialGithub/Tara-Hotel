import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    // In a real implementation, this would redirect to the booking engine
    window.open('https://www.wyndhamhotels.com/tara/parsippany-new-jersey/tara-parsippany/rooms-rates', '_blank');
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="fixed top-20 left-0 right-0 z-40 bg-white shadow-md"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Desktop Booking Bar */}
        <div className="hidden lg:flex items-center justify-between py-3">
          <div className="flex items-center gap-4 flex-1">
            {/* Check-in Date */}
            <div className="relative">
              <label className="text-xs text-dark-tertiary uppercase tracking-wider mb-1 block">
                Check In
              </label>
              <div className="flex items-center gap-2 bg-warm-white px-4 py-2 rounded-sm">
                <Calendar size={18} className="text-gold" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-sm text-dark outline-none w-32"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <label className="text-xs text-dark-tertiary uppercase tracking-wider mb-1 block">
                Check Out
              </label>
              <div className="flex items-center gap-2 bg-warm-white px-4 py-2 rounded-sm">
                <Calendar size={18} className="text-gold" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-sm text-dark outline-none w-32"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="text-xs text-dark-tertiary uppercase tracking-wider mb-1 block">
                Guests
              </label>
              <div className="flex items-center gap-2 bg-warm-white px-4 py-2 rounded-sm">
                <Users size={18} className="text-gold" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-sm text-dark outline-none w-24 cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
            </div>
          </div>

          {/* Corporate Rate Code */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-gold hover:text-gold-dark transition-colors flex items-center gap-1"
            >
              Corporate / Group Code
              <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            <Button
              onClick={handleSearch}
              className="bg-dark text-white hover:bg-dark-secondary px-8 py-2.5 text-sm font-medium"
            >
              Check Availability
            </Button>
          </div>
        </div>

        {/* Expanded Corporate Code Input */}
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden lg:block pb-3"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-warm-white px-4 py-2 rounded-sm">
                <input
                  type="text"
                  placeholder="Enter Corporate Code"
                  className="bg-transparent text-sm text-dark outline-none w-48"
                />
              </div>
              <span className="text-xs text-dark-tertiary">
                Have a corporate or group rate? Enter it here for special pricing.
              </span>
            </div>
          </motion.div>
        )}

        {/* Mobile Booking Bar */}
        <div className="lg:hidden py-3">
          <Button
            onClick={handleSearch}
            className="w-full bg-dark text-white hover:bg-dark-secondary py-3 text-sm font-medium"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
