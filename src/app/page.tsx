'use client';

import { useState, useEffect, useRef } from 'react';
import data from './data.json';
import BreathingModal from './components/BreathingModal';
import ReflectionCard from './components/ReflectionCard';
import JournalForm from './components/JournalForm';
import MoodChart from './components/MoodChart';
import StreakHeatmap from './components/StreakHeatmap';
import Auth from './components/Auth';
import { supabase } from './lib/supabase';

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

const emojiSuasanaMap: { [key: string]: string } = {
  "Tenang dan damai": "🌿",
  "Gelisah": "🍂",
  "Semangat": "☀️",
  "Lelah": "🌙",
  "Bersyukur": "✨",
  "Sedih": "💧",
};

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [catatan, setCatatan] = useState('');
  const [suasanaPilihan, setSuasanaPilihan] = useState(data.pilihanSuasana[0]);
  const [riwayat, setRiwayat] = useState<CatatanItem[]>([]);
  const [filterSuasana, setFilterSuasana] = useState('Semua');
  const [filterTanggal, setFilterTanggal] = useState('Semua');
  const [pencarian, setPencarian] = useState('');
  const [pesanTersimpan, setPesanTersimpan] = useState(false);
  const [streak, setStreak] = useState(0);
  const [kutipanAktif, setKutipanAktif] = useState(data.kutipanHariIni);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [promptAktif, setPromptAktif] = useState<string | null>(null);

  const daftarPrompt = [
    "Apa hal kecil hari ini yang membuatmu tersenyum?",
    "Apa satu hal yang ingin kamu lepaskan dari pikiranmu hari ini?",
    "Apa pencapaian terkecil yang layak kamu syukuri hari ini?",
    "Jika hari ini adalah sebuah bab, apa judul bab tersebut?",
    "Apa satu hal baru yang kamu pelajari tentang dirimu hari ini?",
    "Apa yang sedang membuat hatimu merasa tenang saat ini?"
  ];

  const [isBreathingOpen, setIsBreathingOpen] = useState(false);
  const [breathPhase, setBreathPhase] = useState('Tarik napas perlahan...');
  const [breathScale, setBreathScale] = useState('scale-100');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Periksa status sesi login pengguna
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingAuth(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Ambil data dari Supabase saat sesi aktif
  useEffect(() => {
    if (session) {
      fetchCatatanFromSupabase();
    }

    const savedTheme = localStorage.getItem('jeda_dark_mode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
    }

    audioRef.current = new Audio('https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [session]);

  const fetchCatatanFromSupabase = async () => {
    try {
      const { data: supabaseData, error } = await supabase
        .from('catatan')
        .select('*')
        .order('id', { ascending: false });

     if (error) {
        console.error('Gagal mengambil data dari Supabase:', (error as any).message);
        return;
      }git add .

      if (supabaseData) {
        const formattedData: CatatanItem[] = supabaseData.map((item: any) => ({
          id: Number(item.id),
          teks: item.teks,
          suasana: item.suasana,
          waktu: item.waktu || '00:00',
          tanggal: item.tanggal,
          rawDate: item.raw_date || item.tanggal,
          tagOtomatis: deteksiTagOtomatis(item.teks),
          isPinned: item.is_pinned || false,
        }));
        setRiwayat(formattedData);
        hitungStreak(formattedData);
      }
    } catch (err) {
      console.error('Error koneksi:', err);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathingOpen) {
      const runBreathCycle = () => {
        setBreathPhase('Tarik Napas (4 detik)');
        setBreathScale('scale-150');

        setTimeout(() => {
          if (!isBreathingOpen) return;
          setBreathPhase('Tahan Napas (7 detik)');
          setBreathScale('scale-150');
        }, 4000);

        setTimeout(() => {
          if (!isBreathingOpen) return;
          setBreathPhase('Hembuskan Perlahan (8 detik)');
          setBreathScale('scale-100');
        }, 11000);
      };

      runBreathCycle();
      interval = setInterval(runBreathCycle, 19000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isBreathingOpen]);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem('jeda_dark_mode', String(nextMode));
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.log("Audio play error:", err));
      setIsAudioPlaying(true);
    }
  };

  const handleLogout = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }
    await supabase.auth.signOut();
    setRiwayat([]);
    setStreak(0);
  };

  const hitungStreak = (items: CatatanItem[]) => {
    if (items.length === 0) {
      setStreak(0);
      return;
    }
    const uniqueDates = Array.from(new Set(items.map(item => item.rawDate || item.tanggal)));
    setStreak(uniqueDates.length);
  };

  const deteksiTagOtomatis = (teks: string): string[] => {
    const t = teks.toLowerCase();
    const tags: string[] = [];
    if (t.includes('kerja') || t.includes('tugas') || t.includes('proyek') || t.includes('kantor') || t.includes('deadline')) tags.push('💼 Pekerjaan');
    if (t.includes('lelah') || t.includes('capek') || t.includes('istirahat') || t.includes('tidur') || t.includes('santai')) tags.push('☕ Istirahat');
    if (t.includes('syukur') || t.includes('alhamdulillah') || t.includes('terima kasih') || t.includes('senang') || t.includes('bahagia')) tags.push('💡 Refleksi Positif');
    if (t.includes('cemas') || t.includes('bingung') || t.includes('takut') || t.includes('khawatir') || t.includes('stress')) tags.push('🌧️ Kecemasan');
    if (t.includes('belajar') || t.includes('baca') || t.includes('paham') || t.includes('ilmu') || t.includes('tumbuh')) tags.push('📚 Pembelajaran');
    return tags;
  };

  const handleSimpan = async () => {
    if (!catatan.trim() || !session?.user) return;

    const now = new Date();
    const tanggalFormatted = now.toLocaleDateString('id-ID', { 
      day: 'numeric', month: 'short', year: 'numeric' 
    });
    const rawDateString = now.toISOString().split('T')[0];
    const waktuSekarang = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newId = Date.now();

    const catatanBaru: CatatanItem = {
      id: newId,
      teks: catatan,
      suasana: suasanaPilihan,
      waktu: waktuSekarang,
      tanggal: tanggalFormatted,
      rawDate: rawDateString,
      tagOtomatis: deteksiTagOtomatis(catatan),
      isPinned: false,
    };

    // Simpan ke Supabase dengan menyertakan user_id
    const { error } = await supabase.from('catatan').insert([
      {
        id: newId,
        teks: catatan,
        suasana: suasanaPilihan,
        waktu: waktuSekarang,
        tanggal: tanggalFormatted,
        raw_date: rawDateString,
        is_pinned: false,
        user_id: session.user.id,
      }
    ]);

    if (error) {
      alert("Gagal menyimpan ke cloud: " + error.message);
      return;
    }

    const riwayatBaru = [catatanBaru, ...riwayat];
    setRiwayat(riwayatBaru);
    hitungStreak(riwayatBaru);

    setCatatan('');
    setPesanTersimpan(true);
    setTimeout(() => setPesanTersimpan(false), 3000);
  };

  const handleHapus = async (id: number) => {
    const { error } = await supabase.from('catatan').delete().eq('id', id);
    if (error) {
      alert("Gagal menghapus catatan: " + error.message);
      return;
    }

    const riwayatBaru = riwayat.filter((item) => item.id !== id);
    setRiwayat(riwayatBaru);
    hitungStreak(riwayatBaru);
  };

  const handleHapusSemua = async () => {
    if (confirm("Apakah kamu yakin ingin menghapus seluruh jejak catatan di cloud?")) {
      const { error } = await supabase.from('catatan').delete().neq('id', 0);
      if (error) {
        alert("Gagal menghapus semua data: " + error.message);
        return;
      }
      setRiwayat([]);
      setStreak(0);
    }
  };

  const handleTogglePin = async (id: number) => {
    const targetItem = riwayat.find(item => item.id === id);
    if (!targetItem) return;
    const nextPinnedStatus = !targetItem.isPinned;

    const { error } = await supabase
      .from('catatan')
      .update({ is_pinned: nextPinnedStatus })
      .eq('id', id);

    if (error) {
      console.error("Gagal memperbarui status pin:", error.message);
      return;
    }

    const riwayatBaru = riwayat.map((item) => {
      if (item.id === id) {
        return { ...item, isPinned: nextPinnedStatus };
      }
      return item;
    });
    riwayatBaru.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
    setRiwayat(riwayatBaru);
  };

  const handleEkspor = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(riwayat, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `jejak_jeda_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImpor = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0] && session?.user) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = async (event) => {
        try {
          const parsedData = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsedData) && (parsedData.length === 0 || ('id' in parsedData[0] && 'teks' in parsedData[0]))) {
            
            for (const item of parsedData) {
              await supabase.from('catatan').upsert([
                {
                  id: item.id,
                  teks: item.teks,
                  suasana: item.suasana,
                  waktu: item.waktu,
                  tanggal: item.tanggal,
                  raw_date: item.rawDate,
                  is_pinned: item.isPinned || false,
                  user_id: session.user.id,
                }
              ]);
            }

            fetchCatatanFromSupabase();
            alert("Berhasil memulihkan dan menyinkronkan cadangan catatan ke cloud!");
          } else {
            alert("Format file JSON tidak valid.");
          }
        } catch (error) {
          console.error(error);
          alert("Gagal membaca file JSON.");
        }
      };
    }
  };

  const handleUnduhKartu = (item: CatatanItem) => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = isDarkMode ? '#1E211E' : '#FAF8F5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = isDarkMode ? '#7A8A76' : '#8A9A86';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    ctx.fillStyle = isDarkMode ? '#A2B59F' : '#6E7D6A';
    ctx.font = 'italic 32px serif';
    ctx.fillText('Jeda.', 65, 88);

    ctx.font = '18px sans-serif';
    ctx.fillText('🌿', 145, 86);

    ctx.fillStyle = isDarkMode ? '#C5CDC2' : '#5F6E5B';
    ctx.font = '14px sans-serif';
    const emoji = emojiSuasanaMap[item.suasana] || "🍃";
    ctx.fillText(`${emoji} ${item.suasana}  •  ${item.tanggal} (${item.waktu})`, 65, 128);

    ctx.strokeStyle = isDarkMode ? 'rgba(122, 138, 118, 0.2)' : 'rgba(138, 154, 134, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(65, 150);
    ctx.lineTo(735, 150);
    ctx.stroke();

    ctx.fillStyle = isDarkMode ? '#E2E8E0' : '#3D3A36';
    ctx.font = '22px sans-serif';
    const maxWidth = 670;
    const lineHeight = 36;
    const words = item.teks.split(' ');
    let line = '';
    let y = 205;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, 65, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 65, y);

    ctx.fillStyle = isDarkMode ? '#7A8A76' : '#8A9A86';
    ctx.font = 'italic 13px serif';
    ctx.fillText('Ruang aman untuk dirimu sendiri.', 65, 435);

    const link = document.createElement('a');
    link.download = `kartu_jeda_${item.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleAmbilPrompt = () => {
    const promptAcak = daftarPrompt[Math.floor(Math.random() * daftarPrompt.length)];
    setPromptAktif(promptAcak);
  };

  const handleGunakanPrompt = () => {
    if (promptAktif) {
      setCatatan(prev => prev + (prev ? "\n" : "") + promptAktif + "\n");
      setPromptAktif(null);
    }
  };

  const handleAcakKutipan = () => {
    const daftarKutipanAlternatif = [
      data.kutipanHariIni,
      "Berhenti sejenak bukan berarti menyerah, ini tentang mengumpulkan tenaga untuk melangkah lebih baik.",
      "Ketenangan bukanlah ketiadaan ketegangan, tetapi kemampuan untuk tetap tenang di tengah badai.",
      "Ruang terbaik untuk menemukan jawaban adalah saat kamu memberi hatimu waktu untuk bernapas.",
      "Hari yang baik dimulai dari keheningan yang jujur dengan diri sendiri."
    ];
    const kutipanAcak = daftarKutipanAlternatif[Math.floor(Math.random() * daftarKutipanAlternatif.length)];
    setKutipanAktif(kutipanAcak);
  };

  const totalCatatan = riwayat.length;
  
  const hitungStatistikSuasana = () => {
    const statistik: { [key: string]: number } = {};
    riwayat.forEach(item => {
      statistik[item.suasana] = (statistik[item.suasana] || 0) + 1;
    });
    return statistik;
  };

  const hitungWawasanBulanan = () => {
    const bulanan: { [key: string]: { total: number; suasanaList: string[] } } = {};
    riwayat.forEach(item => {
      const bulanKey = item.tanggal.split(' ').slice(1).join(' ');
      if (!bulanan[bulanKey]) {
        bulanan[bulanKey] = { total: 0, suasanaList: [] };
      }
      bulanan[bulanKey].total += 1;
      bulanan[bulanKey].suasanaList.push(item.suasana);
    });
    return bulanan;
  };

  const statistikSuasana = hitungStatistikSuasana();
  const wawasanBulanan = hitungWawasanBulanan();
  const daftarTanggalUnik = Array.from(new Set(riwayat.map(item => item.tanggal)));

  const riwayatTampil = riwayat.filter((item) => {
    const sesuaiSuasana = filterSuasana === 'Semua' || item.suasana === filterSuasana;
    const sesuaiTanggal = filterTanggal === 'Semua' || item.tanggal === filterTanggal;
    const sesuaiPencarian = item.teks.toLowerCase().includes(pencarian.toLowerCase());
    return sesuaiSuasana && sesuaiTanggal && sesuaiPencarian;
  });

  if (loadingAuth) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F4F1EA] text-[#3D3A36]">
        <p className="text-xs italic font-serif">Memuat sesi...</p>
      </main>
    );
  }

  // Jika belum login, tampilkan komponen Auth
  if (!session) {
    return (
      <main className={`min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isDarkMode ? 'bg-[#181A18] text-[#E2E8E0]' : 'bg-[#F4F1EA] text-[#3D3A36]'
      }`}>
        <Auth isDarkMode={isDarkMode} onLoginSuccess={() => {}} />
      </main>
    );
  }

  return (
    <main className={`min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
      isDarkMode 
        ? 'bg-[#181A18] text-[#E2E8E0] selection:bg-[#7A8A76]/30' 
        : 'bg-[#F4F1EA] text-[#3D3A36] selection:bg-[#8A9A86]/20'
    }`}>
      
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)'};
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'};
        }
      `}</style>

      <BreathingModal 
        isOpen={isBreathingOpen}
        onClose={() => setIsBreathingOpen(false)}
        breathPhase={breathPhase}
        breathScale={breathScale}
        isDarkMode={isDarkMode}
      />

      <div className={`max-w-md w-full p-8 rounded-[2rem] border backdrop-blur-md space-y-6 transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#222522]/90 border-[#7A8A76]/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)]' 
          : 'bg-[#FAF8F5]/90 border-[#8A9A86]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
      }`}>
        
        {/* Baris Atas */}
        <div className="flex justify-between items-center pb-1 border-b border-current/10">
          <span className={`text-[11px] font-medium px-3 py-1 rounded-full tracking-wide ${
            isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'
          }`}>
            🌿 {streak} Hari Refleksi
          </span>
          
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsBreathingOpen(true)}
              aria-label="Buka latihan pernapasan relaksasi"
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                isDarkMode ? 'bg-white/5 text-[#A2B59F] hover:bg-white/10' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'
              }`}
              title="Latihan pernapasan relaksasi"
            >
              <span>🫁 Napas</span>
            </button>

            <button
              onClick={toggleAudio}
              aria-label={isAudioPlaying ? "Matikan suara hujan latar" : "Nyalakan suara hujan latar"}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                isAudioPlaying 
                  ? 'bg-[#7A8A76] text-white shadow-xs animate-pulse' 
                  : isDarkMode ? 'bg-white/5 text-[#A2B59F] hover:bg-white/10' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'
              }`}
              title="Putar suara hujan latar"
            >
              <span>{isAudioPlaying ? '🔊' : '🔇'}</span>
            </button>

            <button
              onClick={toggleDarkMode}
              aria-label="Ubah mode tema terang dan gelap"
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                isDarkMode 
                  ? 'bg-[#7A8A76] text-white shadow-xs' 
                  : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'
              }`}
              title="Ubah tema terang/gelap"
            >
              <span>{isDarkMode ? '🌙' : '☀️'}</span>
            </button>

            <button
              onClick={handleLogout}
              aria-label="Keluar akun"
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 text-red-500 hover:bg-red-500/10`}
              title="Keluar akun"
            >
              <span>🚪 Keluar</span>
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="text-center space-y-3 pt-1">
          <h1 className={`text-5xl font-serif italic tracking-wide ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>Jeda.</h1>
          
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xs ${
            isDarkMode 
              ? 'bg-black/30 border-[#7A8A76]/30 text-[#A2B59F]' 
              : 'bg-white/80 border-[#8A9A86]/25 text-[#5F6E5B]'
          }`}>
            <span className="text-xs">📅</span>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em]">
              {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          
          <div 
            onClick={handleAcakKutipan}
            className="group cursor-pointer pt-1 transition"
            title="Klik untuk menyegarkan kutipan"
          >
            <blockquote className={`text-xs font-serif italic opacity-75 px-4 leading-relaxed group-hover:opacity-100 transition ${
              isDarkMode ? 'text-[#C5CDC2]' : 'text-[#5A5550]'
            }`}>
              &ldquo;{kutipanAktif}&rdquo;
            </blockquote>
            <span className={`text-[9px] opacity-40 tracking-wider uppercase block pt-1 ${isDarkMode ? 'group-hover:text-[#A2B59F]' : 'group-hover:text-[#6E7D6A]'}`}>
              ketuk untuk kutipan lain ↻
            </span>
          </div>
        </header>

        {/* Kartu Refleksi */}
        <ReflectionCard 
          promptAktif={promptAktif}
          onAmbilPrompt={handleAmbilPrompt}
          onGunakanPrompt={handleGunakanPrompt}
          onTutupPrompt={() => setPromptAktif(null)}
          isDarkMode={isDarkMode}
        />

        {/* Streak Heatmap */}
        <StreakHeatmap 
          riwayat={riwayat}
          isDarkMode={isDarkMode}
        />

        {/* Grafik Suasana */}
        <MoodChart 
          totalCatatan={totalCatatan}
          statistikSuasana={statistikSuasana}
          wawasanBulanan={wawasanBulanan}
          emojiSuasanaMap={emojiSuasanaMap}
          isDarkMode={isDarkMode}
        />

        {/* Form Jurnal */}
        <JournalForm 
          suasanaPilihan={suasanaPilihan}
          setSuasanaPilihan={setSuasanaPilihan}
          pilihanSuasana={data.pilihanSuasana}
          emojiSuasanaMap={emojiSuasanaMap}
          catatan={catatan}
          setCatatan={setCatatan}
          handleSimpan={handleSimpan}
          pesanTersimpan={pesanTersimpan}
          isDarkMode={isDarkMode}
        />

        {/* Daftar Riwayat & Filter */}
        <section className={`space-y-3 pt-4 border-t ${isDarkMode ? 'border-[#7A8A76]/25' : 'border-[#8A9A86]/20'}`}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h2 className={`text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>Jejak Refleksi</h2>
              
              <input
                type="text"
                placeholder="Cari kata..."
                value={pencarian}
                onChange={(e) => setPencarian(e.target.value)}
                className={`w-28 border rounded-lg px-2 py-1 text-[11px] focus:outline-none ${
                  isDarkMode 
                    ? 'border-[#7A8A76]/30 bg-black/20 text-[#E2E8E0] focus:border-[#A2B59F] placeholder-[#E2E8E0]/30' 
                    : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <select
                value={filterSuasana}
                onChange={(e) => setFilterSuasana(e.target.value)}
                className={`border rounded-lg px-2 py-1 text-[11px] focus:outline-none cursor-pointer ${
                  isDarkMode 
                    ? 'border-[#7A8A76]/30 bg-[#222522] text-[#E2E8E0] focus:border-[#A2B59F]' 
                    : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'
                }`}
              >
                <option value="Semua">Semua Suasana</option>
                {data.pilihanSuasana.map((s, idx) => (
                  <option key={idx} value={s}>{s}</option>
                ))}
              </select>

              <select
                value={filterTanggal}
                onChange={(e) => setFilterTanggal(e.target.value)}
                className={`border rounded-lg px-2 py-1 text-[11px] focus:outline-none cursor-pointer ${
                  isDarkMode 
                    ? 'border-[#7A8A76]/30 bg-[#222522] text-[#E2E8E0] focus:border-[#A2B59F]' 
                    : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'
                }`}
              >
                <option value="Semua">Semua Tanggal</option>
                {daftarTanggalUnik.map((tgl, idx) => (
                  <option key={idx} value={tgl}>{tgl}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
            {riwayat.length === 0 ? (
              <p className="text-xs text-center opacity-40 py-6 italic font-serif">Belum ada jejak pikiran yang tersimpan di cloud. Mulailah menulis di atas.</p>
            ) : riwayatTampil.length === 0 ? (
              <p className="text-xs text-center opacity-40 py-4 italic font-serif">Tidak ada catatan yang cocok dengan filter.</p>
            ) : (
              riwayatTampil.map((item) => (
                <div key={item.id} className={`p-3.5 rounded-2xl border text-xs space-y-2 shadow-2xs relative group transition-all duration-300 ${
                  item.isPinned 
                    ? isDarkMode ? 'border-[#A2B59F]/60 bg-black/40 shadow-sm' : 'border-[#6E7D6A]/60 bg-white shadow-sm'
                    : isDarkMode 
                      ? 'border-[#7A8A76]/20 bg-black/30 hover:bg-black/50 text-[#E2E8E0]' 
                      : 'border-[#8A9A86]/15 bg-white/80 hover:bg-white text-[#3D3A36] hover:shadow-md'
                }`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-1 ${
                        isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'
                      }`}>
                        <span>{emojiSuasanaMap[item.suasana] || "🍃"}</span>
                        <span>{item.suasana}</span>
                      </span>
                      {item.isPinned && (
                        <span className="text-[10px]" title="Disematkan">📌</span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] opacity-40 font-mono hidden sm:inline">{item.tanggal}</span>
                      <button 
                        onClick={() => handleTogglePin(item.id)}
                        className={`transition text-[10px] underline cursor-pointer font-medium ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}
                        title={item.isPinned ? "Lepas semat" : "Sematkan di atas"}
                      >
                        {item.isPinned ? 'Lepas' : 'Semat'}
                      </button>
                      <button 
                        onClick={() => handleUnduhKartu(item)}
                        className={`transition text-[10px] underline cursor-pointer font-medium ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}
                        title="Unduh sebagai kartu gambar"
                      >
                        Kartu
                      </button>
                      <button 
                        onClick={() => handleHapus(item.id)}
                        className="transition text-[10px] underline cursor-pointer font-medium text-red-500 hover:text-red-600"
                        title="Hapus catatan"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>

                  <p className={`whitespace-pre-wrap leading-relaxed ${isDarkMode ? 'text-[#E2E8E0]' : 'text-[#3D3A36]'}`}>
                    {item.teks}
                  </p>

                  {item.tagOtomatis && item.tagOtomatis.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.tagOtomatis.map((tag, tIdx) => (
                        <span key={tIdx} className={`text-[9px] px-2 py-0.5 rounded-md ${
                          isDarkMode ? 'bg-white/5 text-[#A2B59F]' : 'bg-[#8A9A86]/10 text-[#5F6E5B]'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {totalCatatan > 0 && (
            <div className="flex items-center justify-between pt-2 text-[11px]">
              <div className="flex gap-2">
                <button
                  onClick={handleEkspor}
                  className={`underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}
                >
                  Ekspor JSON
                </button>
                <label className={`underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>
                  Impor
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImpor}
                    accept=".json"
                    className="hidden"
                  />
                </label>
              </div>
              <button
                onClick={handleHapusSemua}
                className="text-red-500 hover:text-red-600 underline cursor-pointer"
              >
                Hapus Semua
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}