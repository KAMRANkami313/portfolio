import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiCpu, FiUser } from 'react-icons/fi';
import { CHATBOT_KNOWLEDGE } from '../../constants';
import { useAchievement } from '../../context/AchievementContext';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hey! I'm KAMI_AI, Kamran's portfolio assistant. Ask me about his skills, projects, experience, or anything else!",
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { unlock } = useAchievement();
  const hasChatted = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const findResponse = useCallback((userMessage) => {
    const msg = userMessage.toLowerCase().trim();

    for (const item of CHATBOT_KNOWLEDGE) {
      for (const pattern of item.patterns) {
        if (msg.includes(pattern)) {
          if (Array.isArray(item.responses)) {
            return item.responses[Math.floor(Math.random() * item.responses.length)];
          }
          return item.responses;
        }
      }
    }

    if (/^(hi|hello|hey|sup|yo|assalam|salam|hola)/i.test(msg)) {
      const greetings = [
        "Hey there! Great to see you exploring Kamran's portfolio. What would you like to know?",
        "Hello! Welcome aboard! I can tell you about Kamran's skills, projects, or experience. What interests you?",
        "Hi! I'm KAMI_AI, your guide to everything Kamran. Ask me anything!",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (/^(thanks|thank you|thx|ty|shukriya)/i.test(msg)) {
      return "You're welcome! Feel free to ask anything else or reach out to Kamran directly through the contact section!";
    }

    if (msg.includes('joke') || msg.includes('funny') || msg.includes('humor')) {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "A SQL query walks into a bar, sees two tables and asks... 'Can I JOIN you?'",
        "There are only 10 types of people in the world: those who understand binary and those who don't.",
        "Why did the developer go broke? Because he used up all his cache!",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }

    const defaults = [
      "That's an interesting question! I don't have specific info on that, but you can reach out to Kamran directly through the contact section for more details.",
      "Hmm, I'm not sure about that one. But I can tell you about Kamran's skills, projects, experience, or education! Try asking about those.",
      "I don't have data on that yet, but I'm always learning! Meanwhile, feel free to explore the portfolio or ask about Kamran's tech stack.",
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
  }, []);

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    if (!hasChatted.current) {
      hasChatted.current = true;
      unlock('used_chatbot');
    }

    const userMsg = {
      role: 'user',
      text: trimmed,
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const response = findResponse(trimmed);
      const botMsg = {
        role: 'bot',
        text: response,
        time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, delay);
  }, [input, findResponse, unlock]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: 'Skills', message: 'What are your skills?' },
    { label: 'Projects', message: 'Tell me about your projects' },
    { label: 'Experience', message: 'What is your experience?' },
    { label: 'Contact', message: 'How can I contact you?' },
  ];

  const handleQuickAction = (message) => {
    setInput(message);
    setTimeout(() => {
      const userMsg = {
        role: 'user',
        text: message,
        time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      if (!hasChatted.current) {
        hasChatted.current = true;
        unlock('used_chatbot');
      }

      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        const response = findResponse(message);
        const botMsg = {
          role: 'bot',
          text: response,
          time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        };
        setIsTyping(false);
        setMessages((prev) => [...prev, botMsg]);
      }, delay);
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.4)] hover:shadow-[0_0_50px_rgba(var(--color-accent-rgb),0.6)] transition-shadow group"
            aria-label="Open AI chatbot"
          >
            <FiMessageCircle className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-50 w-95 max-w-[calc(100vw-2rem)] h-130 max-h-[calc(100vh-4rem)] bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-black/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <FiCpu className="text-accent text-lg" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-surface" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white tracking-tight">KAMI_AI</h3>
                  <p className="text-[9px] font-mono text-green-400 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                    Online • GPT-Powered
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all"
                aria-label="Close chatbot"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold ${
                    msg.role === 'bot'
                      ? 'bg-accent/20 text-accent border border-accent/20'
                      : 'bg-white/10 text-white/70 border border-white/10'
                  }`}>
                    {msg.role === 'bot' ? <FiCpu size={12} /> : <FiUser size={12} />}
                  </div>

                  <div className={`max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent text-white rounded-br-md'
                        : 'bg-white/5 text-white/80 border border-white/5 rounded-bl-md'
                    }`}>
                      {msg.text}
                    </div>
                    <p className={`text-[8px] font-mono text-muted mt-1 ${
                      msg.role === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center bg-accent/20 text-accent border border-accent/20">
                    <FiCpu size={12} />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/5 border border-white/5">
                    <div className="flex items-center gap-1.5">
                      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.message)}
                      className="px-3 py-1.5 text-[10px] font-bold bg-accent/5 text-accent/80 border border-accent/10 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="px-4 py-3 border-t border-white/5 bg-black/20">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  aria-label="Chat message input"
                  className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-accent/40 focus:outline-none transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                  className={`p-2.5 rounded-xl transition-all ${
                    input.trim()
                      ? 'bg-accent text-white shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)]'
                      : 'bg-white/5 text-muted cursor-not-allowed'
                  }`}
                  aria-label="Send message"
                >
                  <FiSend className="text-lg" />
                </motion.button>
              </div>
              <p className="text-[8px] text-muted/40 mt-2 text-center font-mono uppercase tracking-widest">
                KAMI_AI v2.0 • Pattern-Based Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;