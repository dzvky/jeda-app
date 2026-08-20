'use client';
import React from 'react';

interface BreathingModalProps {
  isOpen: boolean;
  onClose: () => void;
  breathPhase: string;
  breathScale: string;
  isDarkMode: boolean;
}

export default function BreathingModal({ isOpen, onClose, breathPhase, breathScale, isDarkMode }: BreathingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className={`max-w-xs w-full p-8 rounded-[2rem] border text-center space-y-6 shadow-2xl relative ${
        isDarkMode ? 'bg-[#222522] border-[#7A8A76]/30 text-[#E2E8E0]' : 'bg-[#FAF8F5] border-[#8A9A86]/30 text-[#3D3A36]'
      }`}>
        <h3 className="text-sm font-semibold uppercase tracking-widest opacity-80">Pernapasan 4-7-8</h3>
        
        <div className="flex items-center justify-center py-6">
          <div className={`w-32 h-32 rounded-full bg-[#7A8A76]/30 border-2 border-[#7A8A76] flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${breathScale}`}>
            <div className="w-16 h-16 rounded-full bg-[#7A8A76] opacity-65 animate-pulse" />
          </div>
        </div>

        <p className="text-sm font-medium font-serif italic min-h-[2rem]">{breathPhase}</p>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#7A8A76] text-white rounded-full text-xs font-medium tracking-wide hover:bg-[#6E7D6A] transition cursor-pointer"
        >
          Selesai & Kembali 🌿
        </button>
      </div>
    </div>
  );
}