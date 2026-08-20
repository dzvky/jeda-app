'use client';

interface MoodChartProps {
  totalCatatan: number;
  statistikSuasana: { [key: string]: number };
  wawasanBulanan: { [key: string]: { total: number; suasanaList: string[] } };
  emojiSuasanaMap: { [key: string]: string };
  isDarkMode: boolean;
}

export default function MoodChart({
  totalCatatan,
  statistikSuasana,
  wawasanBulanan,
  emojiSuasanaMap,
  isDarkMode,
}: MoodChartProps) {
  return (
    <div className={`p-5 rounded-2xl border space-y-4 transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-black/20 border-[#7A8A76]/25 text-[#E2E8E0]' 
        : 'bg-white/60 border-[#8A9A86]/20 text-[#3D3A36]'
    }`}>
      <div className="flex justify-between items-center">
        <h2 className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>
          🌿 Rekap Suasana Hati
        </h2>
        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${
          isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'
        }`}>
          Total: {totalCatatan} Refleksi
        </span>
      </div>

      {totalCatatan === 0 ? (
        <p className="text-xs opacity-50 text-center py-3 italic font-serif">
          Belum ada data suasana untuk ditampilkan. Mulai tulis refleksi pertamamu!
        </p>
      ) : (
        <div className="space-y-3">
          {/* Distribusi Suasana Keseluruhan */}
          <div className="space-y-1.5">
            <p className="text-[10px] opacity-75 font-medium">Distribusi Emosi Keseluruhan:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(statistikSuasana).map(([suasana, jumlah], idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-2 rounded-xl border text-[11px] ${
                    isDarkMode ? 'border-[#7A8A76]/20 bg-black/30' : 'border-[#8A9A86]/15 bg-white/70'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span>{emojiSuasanaMap[suasana] || "🍃"}</span>
                    <span className="truncate">{suasana}</span>
                  </div>
                  <span className={`font-semibold px-1.5 py-0.5 rounded-md text-[10px] ${
                    isDarkMode ? 'bg-[#7A8A76]/30 text-[#A2B59F]' : 'bg-[#8A9A86]/20 text-[#5F6E5B]'
                  }`}>
                    {jumlah}x
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ringkasan Bulanan */}
          <div className="pt-2 border-t border-current/10 space-y-1.5">
            <p className="text-[10px] opacity-75 font-medium">Rekap Berdasarkan Bulan:</p>
            <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
              {Object.entries(wawasanBulanan).map(([bulan, dataBulan], idx) => (
                <div 
                  key={idx}
                  className={`flex justify-between items-center p-2 rounded-xl text-[11px] border ${
                    isDarkMode ? 'border-[#7A8A76]/15 bg-black/20' : 'border-[#8A9A86]/10 bg-white/40'
                  }`}
                >
                  <span className="font-medium">{bulan}</span>
                  <div className="flex items-center gap-2">
                    <span className="opacity-75 text-[10px]">{dataBulan.total} catatan</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}