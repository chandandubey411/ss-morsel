// src/components/common/WhatsAppChat.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { BRAND } from '../../utils/constants';

const PHONE = '919650097704'; // WhatsApp number (with country code, no +)

const quickMessages = [
  '🏢 I need office furniture dismantling services',
  '🔧 I want a quote for office reinstatement',
  '🏗️ I need bare shelling of my commercial space',
  '💻 I need IT asset disposal / ITAD services',
  '♻️ I want to sell scrap / e-waste',
];

const WhatsAppChat = ({ activeChat, setActiveChat }) => {
  const isOpen = activeChat === 'whatsapp';
  const setIsOpen = (open) => setActiveChat(open ? 'whatsapp' : null);
  const [customMsg, setCustomMsg] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  // Show attention bubble after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Hide bubble when chat is opened
  useEffect(() => {
    if (isOpen) setShowBubble(false);
  }, [isOpen]);

  const openWhatsApp = (msg) => {
    const text = encodeURIComponent(
      msg || `Hi! I'm interested in SS Morsel India's dismantling and scrap services. Can you help me?`
    );
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* ── Chat Popup Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="fixed bottom-[4.5rem] sm:bottom-24 right-4 sm:right-5 z-[200] w-[calc(100vw-2rem)] max-w-sm sm:max-w-[22rem] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              boxShadow: '0 25px 80px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15)',
              maxHeight: 'min(520px, 80vh)',
            }}
          >
            {/* Header */}
            <div
              className="relative px-5 py-4 flex items-center gap-3 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #075e54 0%, #128c7e 100%)' }}
            >
              {/* Subtle pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />

              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#075e54] rounded-full" />
              </div>

              <div className="relative z-10 flex-1">
                <p className="text-white font-bold text-sm leading-tight">SS Morsel Support</p>
                <p className="text-green-200 text-[11px] mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                  Typically replies in minutes
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <FaTimes className="text-white text-xs" />
              </button>
            </div>

            {/* Chat body */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3" style={{ background: '#ece5dd' }}>
              {/* WhatsApp-style chat bubble from agent */}
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-[#075e54] flex items-center justify-center flex-shrink-0 mb-0.5">
                  <FaWhatsapp className="text-white text-xs" />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
                >
                  <p className="text-gray-800 text-sm leading-relaxed">
                    👋 Hello! Welcome to <strong>SS Morsel India Pvt. Ltd.</strong>
                  </p>
                  <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                    India's leading dismantling, bare-shelling & scrap management company. How can we help you today?
                  </p>
                  <p className="text-gray-400 text-[10px] mt-2 text-right">
                    {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} ✓✓
                  </p>
                </motion.div>
              </div>

              {/* Quick message buttons */}
              <div className="space-y-2 pl-9">
                {quickMessages.map((msg, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    onClick={() => openWhatsApp(msg)}
                    className="w-full text-left text-sm px-3 py-2.5 rounded-xl border-2 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      borderColor: '#25d366',
                      color: '#075e54',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    }}
                  >
                    {msg}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom message input */}
            <div
              className="px-3 py-3 flex items-center gap-2 flex-shrink-0"
              style={{ background: '#f0f0f0', borderTop: '1px solid #d9d9d9' }}
            >
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && customMsg.trim() && openWhatsApp(customMsg)}
                placeholder="Type a message..."
                className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-gray-800 outline-none border border-gray-200 placeholder-gray-400"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => customMsg.trim() && openWhatsApp(customMsg)}
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ background: customMsg.trim() ? '#25d366' : '#aaa' }}
              >
                <FaPaperPlane className="text-white text-sm ml-0.5" />
              </motion.button>
            </div>

            {/* Footer label */}
            <div className="px-4 py-2 text-center text-[10px] text-gray-400 bg-white border-t border-gray-100 flex-shrink-0">
              Powered by <span className="text-green-600 font-semibold">WhatsApp Business</span> · SS Morsel India
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating WhatsApp Button ── */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[200] flex flex-col items-end gap-2 ${
          activeChat === 'ai' ? 'hidden' : ''
        }`}
      >
        {/* Attention bubble tooltip */}
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.85 }}
              transition={{ type: 'spring', damping: 18, stiffness: 250 }}
              className="relative bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-green-100 max-w-[200px] cursor-pointer"
              onClick={() => { setIsOpen(true); setShowBubble(false); }}
              style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
            >
              {/* Tail */}
              <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-green-100 rotate-45" />
              <p className="text-gray-800 text-xs font-semibold leading-snug">
                💬 Need help? Chat with us on WhatsApp!
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              >
                <FaTimes className="text-gray-600 text-[8px]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl relative overflow-visible"
          style={{
            background: 'linear-gradient(135deg, #25d366 0%, #075e54 100%)',
            boxShadow: '0 8px 30px rgba(37,211,102,0.45), 0 4px 12px rgba(0,0,0,0.2)',
          }}
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          {!isOpen && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: 'rgba(37,211,102,0.35)' }}
            />
          )}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="text-white text-xl" />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaWhatsapp className="text-white text-lg sm:text-2xl" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default WhatsAppChat;
