import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../../constants';
import { FiMail, FiArrowUpRight, FiSend, FiGlobe, FiSmile, FiCheck, FiUser, FiMessageCircle } from 'react-icons/fi';
import SpotlightCard from '../ui/SpotlightCard';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link as fallback since there's no backend
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Deployment_Ready</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic mb-8">
                Initiate<br />
                <span className="text-gradient">Contact</span>
              </h2>
              
              <p className="text-muted text-lg md:text-xl max-w-md leading-relaxed mb-12">
                Currently scanning for internship opportunities and high-impact engineering collaborations. Let's build something remarkable together.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {CONTACT.socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 p-4 bg-surface/40 border border-white/5 rounded-2xl text-muted hover:text-white hover:border-accent/30 transition-all group"
                  >
                    <span className="text-xl group-hover:text-accent transition-colors">{social.icon}</span>
                    <span className="text-xs font-black uppercase tracking-widest">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <a 
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 p-5 bg-surface/40 border border-white/5 rounded-2xl text-muted hover:text-white hover:border-accent/30 transition-all group max-w-sm"
              >
                <FiMail className="text-accent text-lg" />
                <div>
                  <p className="text-[9px] font-black text-accent uppercase tracking-[0.2em]">Primary_Email</p>
                  <p className="text-sm font-bold text-white break-all">{CONTACT.email}</p>
                </div>
                <FiArrowUpRight className="ml-auto text-lg text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-10 md:p-12 border-white/5 hover:border-accent/40 transition-all">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white text-xl shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <FiSend />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Direct_Link</h3>
                    <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Protocol: SMTP/Secure</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                      <FiUser className="inline mr-2" size={10} />Sender_ID
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full p-4 bg-black/40 border border-white/5 rounded-2xl text-white text-sm placeholder:text-white/20 focus:border-accent/50 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                      <FiMail className="inline mr-2" size={10} />Return_Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full p-4 bg-black/40 border border-white/5 rounded-2xl text-white text-sm placeholder:text-white/20 focus:border-accent/50 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                      <FiMessageCircle className="inline mr-2" size={10} />Payload_Data
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Your message..."
                      className="w-full p-4 bg-black/40 border border-white/5 rounded-2xl text-white text-sm placeholder:text-white/20 focus:border-accent/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-accent text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <FiCheck /> Message_Transmitted
                      </>
                    ) : (
                      <>
                        <FiSend /> Transmit_Message
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                    <FiGlobe className="text-accent text-xl mb-2" />
                    <span className="text-[9px] font-black text-muted uppercase tracking-widest">Availability</span>
                    <span className="text-xs font-bold mt-1 uppercase">Remote / PK</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                    <FiSmile className="text-accent text-xl mb-2" />
                    <span className="text-[9px] font-black text-muted uppercase tracking-widest">Response</span>
                    <span className="text-xs font-bold mt-1 uppercase">&lt; 24 Hours</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-mono text-muted uppercase">Ready_To_Sync</span>
                   </div>
                   <p className="text-[9px] font-mono text-muted">v3.0.0-STABLE</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <span className="text-2xl font-black tracking-tighter">MK.</span>
               <div className="h-4 w-px bg-white/10 hidden md:block" />
               <p className="text-[10px] text-muted font-mono uppercase tracking-widest">
                 Built with React 19 + Framer Motion + Tailwind 4
               </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[10px] text-muted uppercase tracking-[0.4em] font-black">
                &copy; {new Date().getFullYear()} MUHAMMAD KAMRAN. ENGINEERED FOR EXCELLENCE.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl h-125 bg-accent/10 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Contact;