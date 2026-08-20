'use client';
import React from 'react';

interface ReflectionCardProps {
  promptAktif: string | null;
  onAmbilPrompt: () => void;
  onGunakanPrompt: () => void;
  onTutupPrompt: () => void;
  isDarkMode: boolean;
}

export default function ReflectionCard({ promptAktif, onAmbilPrompt, onGunakanPrompt, onTutupPrompt, isDarkMode }: ReflectionCardProps) {
  return (
    <div className="pt-2 text-center">
      {!promptAktif ? (
        <button 
          onClick={onAmbilPrompt}
          className={`text-[10px] uppercase tracking-widest font-medium border px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${
            isDarkMode 
              ? 'border-[#7A8A76]/30 text-[#A2B59F] hover:bg-[#7A8A76]/20' 
              : 'border-[#8A9A86]/30 text-[#6E7D6A] hover:bg-[#8A9A86]/10'
          }`}
        >
          🎴 Ambil Kartu Refleksi
        </button>
      ) : (
        /* Tambahkan kelas animate-fadeIn di sini agar ada gerakan lembut */
        <div className={`p-4 rounded-2xl border animate-fadeIn transition-all ${isDarkMode ? 'bg-black/20 border-[#A2B59F]/30' : 'bg-white/60 border-[#6E7D6A]/30'}`}>
          <p className={`text-xs font-serif italic mb-3 ${isDarkMode ? 'text-[#E2E8E0]' : 'text-[#3D3A36]'}`}>
            &ldquo;{promptAktif}&rdquo;
          </p>
          <div className="flex gap-2 justify-center">
            <button onClick={onGunakanPrompt} className="text-[10px] underline cursor-pointer font-medium">Gunakan</button>
            <button onClick={onTutupPrompt} className="text-[10px] opacity-50 underline cursor-pointer">Lewati</button>
          </div>
        </div>
      )}
    </div>
  );
}