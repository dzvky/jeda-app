'use client';

interface CatatanItem {
  id: number;
  teks: string;
  suasana: string;
  waktu: string;
  tanggal: string;
  rawDate: string;
  tagOtomatis?: string[];
  isPinned?: boolean;
}

interface StreakHeatmapProps {
  riwayat: CatatanItem[];
  isDarkMode: boolean;
}

export default function StreakHeatmap({ riwayat, isDarkMode }: StreakHeatmapProps) {
  // Ambil tanggal unik yang ada catatan
  const activeDates = new Set(riwayat.map(item => item.rawDate || item.tanggal));

  // Buat array 14 hari ke belakang untuk visualisasi mini heatmap
  const generateDays = () => {
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateString = d.toISOString().split('T')[0];
      const displayLabel = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
      days.push({
        dateString,
        displayLabel,
        hasActivity: activeDates.has(dateString),
      });
    }
    return days;
  };

  const daysList = generateDays();

  return (
    <div className={`p-5 rounded-2xl border space-y-3 transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-black/20 border-[#7A8A76]/25 text-[#E2E8E0]' 
        : 'bg-white/60 border-[#8A9A86]/20 text-[#3D3A36]'
    }`}>
      <div className="flex justify-between items-center">
        <h2 className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>
          🔥 Jejak Konsistensi (14 Hari Terakhir)
        </h2>
      </div>

      <div className="flex justify-between items-center gap-1.5 pt-1">
        {daysList.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
            <div 
              title={`${day.displayLabel}: ${day.hasActivity ? 'Ada catatan' : 'Tidak ada catatan'}`}
              className={`w-full h-6 rounded-md transition-all duration-300 ${
                day.hasActivity 
                  ? isDarkMode ? 'bg-[#7A8A76] shadow-xs' : 'bg-[#6E7D6A] shadow-xs'
                  : isDarkMode ? 'bg-white/5 border border-[#7A8A76]/15' : 'bg-[#8A9A86]/10 border border-[#8A9A86]/20'
              }`}
            />
            <span className="text-[9px] opacity-55 font-mono text-center truncate w-full">
              {day.displayLabel.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}