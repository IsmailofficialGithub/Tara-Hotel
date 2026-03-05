import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '199 Smith Road, Parsippany, NJ 07054',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 973-515-2000',
    href: 'tel:+19735152000',
  },
  {
    icon: Mail,
    label: 'Reservations',
    value: 'reservations@tarahotel.com',
    href: 'mailto:reservations@tarahotel.com',
  },
  {
    icon: Mail,
    label: 'Sales & Events',
    value: 'sales@tarahotel.com',
    href: 'mailto:sales@tarahotel.com',
  },
];

const hours = [
  { label: 'Front Desk', value: '24 Hours' },
  { label: 'Check-in', value: '3:00 PM' },
  { label: 'Check-out', value: '12:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Contact Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark leading-[1.15] mb-4">
            Get in Touch
          </h2>
          <p className="text-dark-secondary max-w-xl mx-auto">
            Have questions about reservations, corporate rates, or event planning? 
            Our team is here to help.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SectionReveal direction="left">
            <div className="bg-warm-white p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-dark mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-dark-tertiary text-xs uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-dark hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dark">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-warm-border pt-6">
                <h4 className="text-dark font-medium mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-gold" />
                  Hours
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {hours.map((hour) => (
                    <div key={hour.label}>
                      <p className="text-dark-tertiary text-xs mb-1">{hour.label}</p>
                      <p className="text-dark text-sm font-medium">{hour.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Quick Contact Form */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="bg-dark p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-white mb-2">Send Us a Message</h3>
              <p className="text-white/60 text-sm mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer">
                    <option value="" className="bg-dark">Select inquiry type</option>
                    <option value="reservation" className="bg-dark">Room Reservation</option>
                    <option value="corporate" className="bg-dark">Corporate Rates</option>
                    <option value="meetings" className="bg-dark">Meetings & Events</option>
                    <option value="extended" className="bg-dark">Extended Stay</option>
                    <option value="other" className="bg-dark">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-dark hover:bg-gold-dark py-5 text-sm font-medium group"
                >
                  Send Message
                  <ChevronRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
