'use client';
import React from 'react';

interface JournalFormProps {
  suasanaPilihan: string;
  setSuasanaPilihan: (s: string) => void;
  pilihanSuasana: string[];
  emojiSuasanaMap: { [key: string]: string };
  catatan: string;
  setCatatan: (c: string) => void;
  handleSimpan: () => void;
  pesanTersimpan: boolean;
  isDarkMode: boolean;
}

export default function JournalForm({
  suasanaPilihan,
  setSuasanaPilihan,
  pilihanSuasana,
  emojiSuasanaMap,
  catatan,
  setCatatan,
  handleSimpan,
  pesanTersimpan,
  isDarkMode,
}: JournalFormProps) {
  return (
    <section className="space-y-4 pt-2">
      <div className="space-y-2">
        <label className={`block text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>
          Bagaimana suasanamu hari ini?
        </label>
        
        <div className="grid grid-cols-2 gap-2">
          {pilihanSuasana.map((suasana, index) => {
            const isSelected = suasanaPilihan === suasana;
            const emoji = emojiSuasanaMap[suasana] || "🍃";
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSuasanaPilihan(suasana)}
                className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer active:scale-95 ${
                  isSelected 
                    ? 'bg-[#7A8A76] text-white shadow-md translate-y-[-1px]' 
                    : isDarkMode 
                      ? 'bg-black/20 border border-[#7A8A76]/20 text-[#E2E8E0] hover:bg-white/5' 
                      : 'bg-white/60 border border-[#8A9A86]/25 text-[#3D3A36] hover:bg-[#8A9A86]/10'
                }`}
              >
                <span className="text-sm">{emoji}</span>
                <span className="truncate">{suasana}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 rounded-2xl border space-y-2.5 animate-fadeIn">
  {/* Isi komponen */}
</div>
<button className="... transition-all duration-300 active:scale-[0.98] cursor-pointer">
  Tombol Interaktif
</button>

      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between items-center">
          <label className={`block text-xs font-medium ${isDarkMode ? 'text-[#E2E8E0]/90' : 'text-[#3D3A36]/90'}`}>
            Apa yang sedang bergemuruh di pikiranmu?
          </label>
          <span className="text-[10px] opacity-40 font-mono">{catatan.length} karakter</span>
        </div>
        <textarea 
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
          className={`w-full bg-transparent border-b-2 focus:outline-none resize-none pb-2 text-xs transition-colors leading-relaxed ${
            isDarkMode 
              ? 'border-[#7A8A76]/30 focus:border-[#A2B59F] text-[#E2E8E0] placeholder-[#E2E8E0]/30' 
              : 'border-[#8A9A86]/30 focus:border-[#6E7D6A] text-[#3D3A36] placeholder-[#3D3A36]/30'
          }`}
          placeholder="Tuliskan dengan jujur di sini..."
          rows={3}
        />
      </div>
      
      <button 
        onClick={handleSimpan}
        className="w-full py-3 bg-[#7A8A76] text-white rounded-full text-xs font-medium tracking-wide hover:bg-[#6E7D6A] transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98]"
      >
        Simpan ke Jeda ✨
      </button>

      {pesanTersimpan && (
        <p className={`text-[11px] text-center font-medium animate-pulse pt-1 ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>
          Catatan berhasil disimpan ke dalam ruang tenangmu. 🍃
        </p>
      )}
    </section>
  );
}