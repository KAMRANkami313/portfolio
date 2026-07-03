import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import { CONTACT } from "../../constants";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);
  const { addToast } = useToast();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      addToast("Email copied to clipboard", "info");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      addToast("Failed to copy email", "error");
    }
  }, [addToast]);

  return (
    <button
      onClick={handleCopy}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-3 py-2 glass-strong rounded-full text-sm shadow-md hover:shadow-lg transition-all will-animate"
      aria-label={copied ? "Email copied" : "Copy email to clipboard"}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Check size={14} className="text-success" />
            <span className="text-success font-medium">Copied!</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Mail size={14} className="text-accent" />
            <span className="text-white font-medium hidden sm:inline">Copy Email</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default CopyEmail;