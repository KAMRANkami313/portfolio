import React, { createContext, useContext, useState, useCallback, useEffect, useRef, useMemo } from "react";
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";

const ToastContext = createContext();

let toastId = 0;

const TOAST_ICONS = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const TOAST_ICON_COLORS = {
  success: "text-success",
  error: "text-error",
  info: "text-accent",
  warning: "text-warning",
};

const TOAST_STYLES = {
  success: "border-success/20 bg-success/10",
  error: "border-error/20 bg-error/10",
  info: "border-accent/20 bg-accent/10",
  warning: "border-warning/20 bg-warning/10",
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
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

  const addToast = useCallback(
    (message, type = "info", duration = 4000) => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type, duration, exiting: false }]);

      scheduleTimeout(() => {
        setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
        scheduleTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 300);
      }, duration);

      return id;
    },
    [scheduleTimeout]
  );

  const removeToast = useCallback(
    (id) => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
      scheduleTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    },
    [scheduleTimeout]
  );

  const value = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="fixed top-6 right-6 z-999 flex flex-col gap-3 pointer-events-none"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((toast) => {
          const Icon = TOAST_ICONS[toast.type] || TOAST_ICONS.info;
          const iconColor = TOAST_ICON_COLORS[toast.type] || TOAST_ICON_COLORS.info;
          const style = TOAST_STYLES[toast.type] || TOAST_STYLES.info;

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-2xl shadow-lg min-w-72 max-w-sm will-animate ${
                toast.exiting ? "opacity-0 translate-x-4" : "animate-slide-in-right"
              } ${style}`}
              style={{ transition: toast.exiting ? "all 0.3s ease-in" : undefined }}
            >
              <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <p className="text-sm text-white/90 font-medium flex-1">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 p-1 text-white/30 hover:text-white transition-colors"
                aria-label="Dismiss notification"
              >
                <X size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);