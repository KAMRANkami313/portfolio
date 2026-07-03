import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageCircle, Check, AlertCircle, Copy, Loader2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/BrandIcons";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../../constants";
import { useToast } from "../../context/ToastContext";
import { useAchievement } from "../../context/AchievementContext";
import SpotlightCard from "../ui/SpotlightCard";

const SOCIAL_ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

const Contact = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const { addToast } = useToast();
  const { unlock } = useAchievement();

  const timeoutsRef = useRef(new Set());

  const scheduleTimeout = useCallback((fn, delay) => {
    const id = setTimeout(() => {
      timeoutsRef.current.delete(id);
      fn();
    }, delay);
    timeoutsRef.current.add(id);
  }, []);

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => {
      timeouts.forEach((id) => clearTimeout(id));
      timeouts.clear();
    };
  }, []);

  const isSending = status === STATUS.SENDING;

  const validate = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return "Please fill in all fields.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const sendEmail = async () => {
    const error = validate();
    if (error) {
      addToast(error, "warning");
      return;
    }

    setStatus(STATUS.SENDING);
    setErrorMsg("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus(STATUS.SUCCESS);
      addToast("Message sent successfully!", "success");
      unlock("sent_message");
      onFormSubmit?.();

      setFormData({ name: "", email: "", message: "" });

      scheduleTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch (err) {
      setStatus(STATUS.ERROR);
      setErrorMsg("Failed to send message. Please try again or email me directly.");
      addToast("Failed to send message. Please try again.", "error");

      scheduleTimeout(() => {
        setStatus(STATUS.IDLE);
        setErrorMsg("");
      }, 6000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      addToast("Email copied to clipboard", "info");
      scheduleTimeout(() => setCopied(false), 2000);
    } catch {
      addToast("Failed to copy email", "error");
    }
  };

  const getButtonLabel = () => {
    switch (status) {
      case STATUS.SENDING:
        return "Sending...";
      case STATUS.SUCCESS:
        return "Sent!";
      case STATUS.ERROR:
        return "Try Again";
      default:
        return "Send Message";
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Let's Build Together
              </h2>
            </div>
            <p className="text-sm text-muted md:max-w-xs">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="card p-6">
                <h3 className="text-lg font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  Whether it's a full-time role, freelance project, or a technical
                  discussion — I usually respond within 24 hours.
                </p>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-light">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-white hover:text-accent transition-colors flex-1 truncate"
                  >
                    {CONTACT.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-muted hover:text-white transition-colors shrink-0"
                    aria-label={copied ? "Email copied" : "Copy email to clipboard"}
                  >
                    {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  {CONTACT.socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.name];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-muted hover:text-white bg-surface-light border border-white/10 hover:border-accent/30 rounded-lg transition-all"
                        aria-label={`Visit my ${social.name} profile`}
                      >
                        <Icon size={16} />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">
                    Availability
                  </p>
                  <p className="text-sm font-semibold text-white">Open to work</p>
                </div>
                <div className="card p-4">
                  <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">
                    Response Time
                  </p>
                  <p className="text-sm font-semibold text-white">~ 24 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SpotlightCard className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <span className="chip text-[10px]">EmailJS</span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-muted mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        disabled={isSending}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-muted mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={isSending}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="input pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-muted pointer-events-none" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        disabled={isSending}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="input pl-10 resize-none"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 p-3 rounded-lg bg-error/10 border border-error/20 text-sm text-error"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : status === STATUS.SUCCESS ? (
                      <Check size={16} />
                    ) : (
                      <Send size={16} />
                    )}
                    {getButtonLabel()}
                  </button>
                </form>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;