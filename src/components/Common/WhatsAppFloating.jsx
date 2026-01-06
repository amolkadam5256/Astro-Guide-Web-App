import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "../../constants/siteData";

/**
 * WhatsAppFloating Component
 * Geometric, sharp design for a modern, architectural feel.
 * No rounded corners, small professional typography.
 */
const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const widgetRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  if (!isVisible) return null;

  const whatsappNumber = SITE_DATA.contact.phone.replace(/[^0-9]/g, "");
  const message = encodeURIComponent(
    "Hello AstroGuide! I'd like to know more about your specialized numerology services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <div ref={widgetRef} className="fixed bottom-8 right-8 z-50 font-sans">
      {/* --- Geometric Chat Window --- */}
      <div
        className={`absolute bottom-20 right-0 w-[280px] bg-white dark:bg-[#080c14] shadow-[0_0_50px_rgba(0,0,0,0.2)] border-t-4 border-primary transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-0 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header - Sharp */}
        <div className="bg-dark/5 dark:bg-white/5 p-5 relative border-b border-gray-100 dark:border-white/5">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full">
                <MessageSquare className="text-white w-5 h-5" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 ring-2 ring-white dark:ring-[#080c14]"></div>
            </div>
            <div>
              <h3 className="text-dark dark:text-white font-black uppercase tracking-widest text-[10px]">
                AstroGuide Live
              </h3>
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-green-500"></div>
                <p className="text-gray-400 text-[8px] font-black uppercase tracking-[0.2em]">
                  Response: Instant
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-dark dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Chat Body - Minimalist */}
        <div className="p-5 space-y-4">
          <div className="border-l-2 border-primary pl-4 py-1">
            <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-1">
              System Message
            </p>
            <p className="text-[11px] font-bold text-gray-600 dark:text-gray-300 leading-relaxed uppercase tracking-tight">
              Decoding your path requires focus. Message our experts for deep
              alignment.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <ShieldCheck size={12} />
            <span className="text-[8px] font-black uppercase tracking-[0.2em]">
              Secured Communication
            </span>
          </div>
        </div>

        {/* CTA - Sharp & Bold */}
        <div className="p-5 pt-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-primary hover:bg-primary-dark-1 text-white p-4 transition-all group relative overflow-hidden"
          >
            <span className="font-black uppercase tracking-[0.3em] text-[10px] relative z-10">
              Initiate Chat
            </span>
            <Send
              size={14}
              className="group-hover:translate-x-1 transition-transform relative z-10"
            />
            {/* Hover visual effect */}
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>

      {/* --- Tooltip - Geometric --- */}
      <div
        className={`absolute bottom-full right-0 mb-6 transition-all duration-300 ${
          showTooltip && !isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-dark text-white px-4 py-3 shadow-2xl border-l-4 border-primary min-w-[180px] relative">
          <p className="text-[9px] font-black uppercase tracking-[0.3em]">
            Expert Insight
          </p>
          <p className="text-[10px] text-primary font-black uppercase mt-1 tracking-widest">
            Connect Now
          </p>
        </div>
      </div>

      {/* --- Main Action Button - Sharp --- */}
      <div className="relative group">
        {/* Geometric Background pulse */}
        {!isOpen && (
          <div className="absolute inset-0 bg-primary/20 animate-[ping_3s_infinite] origin-center"></div>
        )}

        <button
          onClick={toggleChat}
          className={`relative w-14 h-14 flex items-center justify-center transition-all duration-500 border-2 rounded-full ${
            isOpen
              ? "bg-dark border-dark rotate-90"
              : "bg-primary border-primary hover:rotate-12"
          }`}
        >
          {isOpen ? (
            <X className="text-white w-6 h-6" strokeWidth={3} />
          ) : (
            <MessageSquare className="text-white w-7 h-7" strokeWidth={2.5} />
          )}
        </button>

        {/* Session Close Button */}
        {!isOpen && (
          <button
            onClick={handleClose}
            className="absolute -top-3 -left-3 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
            title="Dismiss"
          >
            <X size={10} className="text-gray-400" />
          </button>
        )}
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloating;
