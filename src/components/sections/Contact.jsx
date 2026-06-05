import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../../constants';
import emailjs from '@emailjs/browser';
import { FiMail, FiSend, FiGlobe, FiSmile, FiCheck, FiUser, FiMessageCircle, FiAlertCircle } from 'react-icons/fi';
import { LuPartyPopper } from 'react-icons/lu';
import SpotlightCard from '../ui/SpotlightCard';

const Contact = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const sendEmail = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
          to_email:   CONTACT.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      if (onFormSubmit) onFormSubmit();
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      const msg = err?.text || err?.message || JSON.stringify(err) || 'Unknown error';
      setErrorMsg(msg);
      setStatus('error');
      setTimeout(() => { setStatus('idle'); setErrorMsg(''); }, 6000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendEmail();
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendEmail();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isSending = status === 'sending';

  const buttonLabel = () => {
    if (status === 'success') return <><LuPartyPopper /> Message_Sent!</>;
    if (status === 'error')   return <><FiAlertCircle /> Failed — See_Error_Below</>;
    if (isSending)            return <>
      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
      Transmitting...
    </>;
    return <><FiSend /> Transmit_Message</>;
  };

  const buttonClass = `w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm
    transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
    ${status === 'success' ? 'bg-green-500 text-white'
    : status === 'error'   ? 'bg-red-500/80 text-white'
    : isSending            ? 'bg-accent/50 text-white/70 cursor-not-allowed'
    : 'bg-accent text-white hover:shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.4)] hover:scale-[1.02] active:scale-[0.98]'}`;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT COLUMN */}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 p-4 bg-surface/40 border border-white/5 rounded-2xl text-muted hover:text-white hover:border-accent/30 transition-all group"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <span className="text-xl group-hover:text-accent transition-colors">{social.icon}</span>
                    <span className="text-xs font-black uppercase tracking-widest">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-3 max-w-sm">
                <div className="flex items-center gap-3 p-5 bg-surface/40 border border-white/5 rounded-2xl">
                  <FiMail className="text-accent text-lg shrink-0" />
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[9px] font-black text-accent uppercase tracking-[0.2em]">Primary_Email</p>
                    <p className="text-sm font-bold text-white break-all">{CONTACT.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    copied
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-accent/5 text-accent border border-accent/10 hover:bg-accent/10'
                  }`}
                  aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
                >
                  {copied
                    ? <><FiCheck size={12} /> Email_Copied</>
                    : <><FiMail size={12} /> Copy_Email_Address</>}
                </button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-10 md:p-12 border-white/5 hover:border-accent/40 transition-all">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white text-xl shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.4)]">
                    <FiSend />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Direct_Link</h3>
                    <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Protocol: EmailJS/Secure</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                      <FiUser className="inline mr-2" size={10} />Sender_ID
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSending}
                      placeholder="Your name"
                      autoComplete="name"
                      className="w-full p-4 bg-black/40 border border-white/5 rounded-2xl text-white text-sm placeholder:text-white/20 focus:border-accent/50 focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                      <FiMail className="inline mr-2" size={10} />Return_Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSending}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className="w-full p-4 bg-black/40 border border-white/5 rounded-2xl text-white text-sm placeholder:text-white/20 focus:border-accent/50 focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                      <FiMessageCircle className="inline mr-2" size={10} />Payload_Data
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSending}
                      rows={4}
                      placeholder="Your message..."
                      className="w-full p-4 bg-black/40 border border-white/5 rounded-2xl text-white text-sm placeholder:text-white/20 focus:border-accent/50 focus:outline-none transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {status === 'error' && errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono break-all" role="alert">
                      <FiAlertCircle className="inline mr-2" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={isSending}
                    onClick={handleButtonClick}
                    className={buttonClass}
                    aria-label={status === 'success' ? 'Message sent successfully' : status === 'error' ? 'Message failed to send' : 'Send message'}
                  >
                    {buttonLabel()}
                  </button>
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