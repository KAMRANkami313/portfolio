import React, { useState, useRef, useCallback } from "react";
import { Share2, Check } from "lucide-react";
import { useToast } from "../../context/ToastContext";

const ShareButton = () => {
  const [shared, setShared] = useState(false);
  const timeoutRef = useRef(null);
  const { addToast } = useToast();

  const handleShare = useCallback(async () => {
    const shareData = {
      title: "Muhammad Kamran — MERN Stack Engineer",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setShared(true);
        addToast("Link copied to clipboard", "info");
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShared(false), 2000);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        addToast("Failed to share", "error");
      }
    }
  }, [addToast]);

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-6 right-20 z-50 flex items-center justify-center w-11 h-11 glass-strong rounded-full shadow-md hover:shadow-lg transition-all"
      aria-label={shared ? "Link copied" : "Share this page"}
    >
      {shared ? (
        <Check size={18} className="text-success" />
      ) : (
        <Share2 size={18} className="text-white" />
      )}
    </button>
  );
};

export default ShareButton;