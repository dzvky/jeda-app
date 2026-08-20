module.exports = [
"[project]/src/app/data.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "kutipanHariIni": "Berhenti sejenak bukan berarti menyerah, ini tentang mengumpulkan tenaga untuk melangkah lebih baik.",
    "pilihanSuasana": [
        "Tenang dan damai",
        "Sedikit lelah",
        "Bersemangat"
    ]
};
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.json.[json].cjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const emojiSuasanaMap = {
    "Tenang dan damai": "🌿",
    "Gelisah": "🍂",
    "Semangat": "☀️",
    "Lelah": "🌙",
    "Bersyukur": "✨",
    "Sedih": "💧"
};
function Home() {
    const [catatan, setCatatan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [suasanaPilihan, setSuasanaPilihan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pilihanSuasana[0]);
    const [riwayat, setRiwayat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterSuasana, setFilterSuasana] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Semua');
    const [filterTanggal, setFilterTanggal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Semua');
    const [pencarian, setPencarian] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [pesanTersimpan, setPesanTersimpan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [kutipanAktif, setKutipanAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].kutipanHariIni);
    const [isAudioPlaying, setIsAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // State untuk Kartu Refleksi / Prompt
    const [promptAktif, setPromptAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const daftarPrompt = [
        "Apa hal kecil hari ini yang membuatmu tersenyum?",
        "Apa satu hal yang ingin kamu lepaskan dari pikiranmu hari ini?",
        "Apa pencapaian terkecil yang layak kamu syukuri hari ini?",
        "Jika hari ini adalah sebuah bab, apa judul bab tersebut?",
        "Apa satu hal baru yang kamu pelajari tentang dirimu hari ini?",
        "Apa yang sedang membuat hatimu merasa tenang saat ini?"
    ];
    // State untuk Mode Pernapasan
    const [isBreathingOpen, setIsBreathingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [breathPhase, setBreathPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Tarik napas perlahan...');
    const [breathScale, setBreathScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('scale-100');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dataTersimpan = localStorage.getItem('jeda_riwayat');
        if (dataTersimpan) {
            try {
                const parsedRiwayat = JSON.parse(dataTersimpan);
                setRiwayat(parsedRiwayat);
                hitungStreak(parsedRiwayat);
            } catch (error) {
                console.error("Gagal memuat riwayat:", error);
            }
        }
        const savedTheme = localStorage.getItem('jeda_dark_mode');
        if (savedTheme === 'true') {
            setIsDarkMode(true);
        }
        audioRef.current = new Audio('https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg');
        audioRef.current.loop = true;
        return ()=>{
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);
    // Efek Animasi Siklus Pernapasan 4-7-8
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (isBreathingOpen) {
            const runBreathCycle = ()=>{
                setBreathPhase('Tarik Napas (4 detik)');
                setBreathScale('scale-150');
                setTimeout(()=>{
                    if (!isBreathingOpen) return;
                    setBreathPhase('Tahan Napas (7 detik)');
                    setBreathScale('scale-150');
                }, 4000);
                setTimeout(()=>{
                    if (!isBreathingOpen) return;
                    setBreathPhase('Hembuskan Perlahan (8 detik)');
                    setBreathScale('scale-100');
                }, 11000);
            };
            runBreathCycle();
            interval = setInterval(runBreathCycle, 19000);
        }
        return ()=>{
            clearInterval(interval);
        };
    }, [
        isBreathingOpen
    ]);
    const toggleDarkMode = ()=>{
        const nextMode = !isDarkMode;
        setIsDarkMode(nextMode);
        localStorage.setItem('jeda_dark_mode', String(nextMode));
    };
    const toggleAudio = ()=>{
        if (!audioRef.current) return;
        if (isAudioPlaying) {
            audioRef.current.pause();
            setIsAudioPlaying(false);
        } else {
            audioRef.current.play().catch((err)=>console.log("Audio play error:", err));
            setIsAudioPlaying(true);
        }
    };
    const hitungStreak = (items)=>{
        if (items.length === 0) {
            setStreak(0);
            return;
        }
        const uniqueDates = Array.from(new Set(items.map((item)=>item.rawDate || item.tanggal)));
        setStreak(uniqueDates.length);
    };
    const deteksiTagOtomatis = (teks)=>{
        const t = teks.toLowerCase();
        const tags = [];
        if (t.includes('kerja') || t.includes('tugas') || t.includes('proyek') || t.includes('kantor') || t.includes('deadline')) tags.push('💼 Pekerjaan');
        if (t.includes('lelah') || t.includes('capek') || t.includes('istirahat') || t.includes('tidur') || t.includes('santai')) tags.push('☕ Istirahat');
        if (t.includes('syukur') || t.includes('alhamdulillah') || t.includes('terima kasih') || t.includes('senang') || t.includes('bahagia')) tags.push('💡 Refleksi Positif');
        if (t.includes('cemas') || t.includes('bingung') || t.includes('takut') || t.includes('khawatir') || t.includes('stress')) tags.push('🌧️ Kecemasan');
        if (t.includes('belajar') || t.includes('baca') || t.includes('paham') || t.includes('ilmu') || t.includes('tumbuh')) tags.push('📚 Pembelajaran');
        return tags;
    };
    const handleSimpan = ()=>{
        if (!catatan.trim()) return;
        const now = new Date();
        const tanggalFormatted = now.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        const rawDateString = now.toISOString().split('T')[0];
        const waktuSekarang = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        const catatanBaru = {
            id: Date.now(),
            teks: catatan,
            suasana: suasanaPilihan,
            waktu: waktuSekarang,
            tanggal: tanggalFormatted,
            rawDate: rawDateString,
            tagOtomatis: deteksiTagOtomatis(catatan),
            isPinned: false
        };
        const riwayatBaru = [
            catatanBaru,
            ...riwayat
        ];
        setRiwayat(riwayatBaru);
        localStorage.setItem('jeda_riwayat', JSON.stringify(riwayatBaru));
        hitungStreak(riwayatBaru);
        setCatatan('');
        setPesanTersimpan(true);
        setTimeout(()=>setPesanTersimpan(false), 3000);
    };
    const handleHapus = (id)=>{
        const riwayatBaru = riwayat.filter((item)=>item.id !== id);
        setRiwayat(riwayatBaru);
        localStorage.setItem('jeda_riwayat', JSON.stringify(riwayatBaru));
        hitungStreak(riwayatBaru);
    };
    const handleHapusSemua = ()=>{
        if (confirm("Apakah kamu yakin ingin menghapus seluruh jejak catatan?")) {
            setRiwayat([]);
            localStorage.removeItem('jeda_riwayat');
            setStreak(0);
        }
    };
    const handleTogglePin = (id)=>{
        const riwayatBaru = riwayat.map((item)=>{
            if (item.id === id) {
                return {
                    ...item,
                    isPinned: !item.isPinned
                };
            }
            return item;
        });
        riwayatBaru.sort((a, b)=>(b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
        setRiwayat(riwayatBaru);
        localStorage.setItem('jeda_riwayat', JSON.stringify(riwayatBaru));
    };
    const handleEkspor = ()=>{
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(riwayat, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `jejak_jeda_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };
    const handleImpor = (e)=>{
        const fileReader = new FileReader();
        if (e.target.files && e.target.files[0]) {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = (event)=>{
                try {
                    const parsedData = JSON.parse(event.target?.result);
                    if (Array.isArray(parsedData)) {
                        setRiwayat(parsedData);
                        localStorage.setItem('jeda_riwayat', JSON.stringify(parsedData));
                        hitungStreak(parsedData);
                        alert("Berhasil memulihkan cadangan catatan!");
                    } else {
                        alert("Format file tidak valid.");
                    }
                } catch (error) {
                    console.error(error);
                    alert("Gagal membaca file JSON.");
                }
            };
        }
    };
    const handleUnduhKartu = (item)=>{
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
        for(let n = 0; n < words.length; n++){
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
    const handleAmbilPrompt = ()=>{
        const promptAcak = daftarPrompt[Math.floor(Math.random() * daftarPrompt.length)];
        setPromptAktif(promptAcak);
    };
    const handleGunakanPrompt = ()=>{
        if (promptAktif) {
            setCatatan((prev)=>prev + (prev ? "\n" : "") + promptAktif + "\n");
            setPromptAktif(null);
        }
    };
    const handleAcakKutipan = ()=>{
        const daftarKutipanAlternatif = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].kutipanHariIni,
            "Berhenti sejenak bukan berarti menyerah, ini tentang mengumpulkan tenaga untuk melangkah lebih baik.",
            "Ketenangan bukanlah ketiadaan ketegangan, tetapi kemampuan untuk tetap tenang di tengah badai.",
            "Ruang terbaik untuk menemukan jawaban adalah saat kamu memberi hatimu waktu untuk bernapas.",
            "Hari yang baik dimulai dari keheningan yang jujur dengan diri sendiri."
        ];
        const kutipanAcak = daftarKutipanAlternatif[Math.floor(Math.random() * daftarKutipanAlternatif.length)];
        setKutipanAktif(kutipanAcak);
    };
    const totalCatatan = riwayat.length;
    const hitungStatistikSuasana = ()=>{
        const statistik = {};
        riwayat.forEach((item)=>{
            statistik[item.suasana] = (statistik[item.suasana] || 0) + 1;
        });
        return statistik;
    };
    // Logika Wawasan Jurnal Bulanan
    const hitungWawasanBulanan = ()=>{
        const bulanan = {};
        riwayat.forEach((item)=>{
            // Ambil string Bulan Tahun (contoh: "Agustus 2026" atau dari rawDate)
            const bulanKey = item.tanggal.split(' ').slice(1).join(' '); // Mengambil "Bulan Tahun" dari format id-ID
            if (!bulanan[bulanKey]) {
                bulanan[bulanKey] = {
                    total: 0,
                    suasanaList: []
                };
            }
            bulanan[bulanKey].total += 1;
            bulanan[bulanKey].suasanaList.push(item.suasana);
        });
        return bulanan;
    };
    const statistikSuasana = hitungStatistikSuasana();
    const wawasanBulanan = hitungWawasanBulanan();
    const daftarTanggalUnik = Array.from(new Set(riwayat.map((item)=>item.tanggal)));
    const riwayatTampil = riwayat.filter((item)=>{
        const sesuaiSuasana = filterSuasana === 'Semua' || item.suasana === filterSuasana;
        const sesuaiTanggal = filterTanggal === 'Semua' || item.tanggal === filterTanggal;
        const sesuaiPencarian = item.teks.toLowerCase().includes(pencarian.toLowerCase());
        return sesuaiSuasana && sesuaiTanggal && sesuaiPencarian;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "f9f05848fb6da628",
                [
                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                ]
            ]
        ]) + " " + `min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center transition-colors duration-500 ${isDarkMode ? 'bg-[#181A18] text-[#E2E8E0] selection:bg-[#7A8A76]/30' : 'bg-[#F4F1EA] text-[#3D3A36] selection:bg-[#8A9A86]/20'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "f9f05848fb6da628",
                dynamic: [
                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                ],
                children: `::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:${isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)'};border-radius:10px}::-webkit-scrollbar-thumb:hover{background:${isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'}}`
            }, void 0, false, void 0, this),
            isBreathingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "f9f05848fb6da628",
                        [
                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                        ]
                    ]
                ]) + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "f9f05848fb6da628",
                            [
                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                            ]
                        ]
                    ]) + " " + `max-w-xs w-full p-8 rounded-[2rem] border text-center space-y-6 shadow-2xl relative ${isDarkMode ? 'bg-[#222522] border-[#7A8A76]/30 text-[#E2E8E0]' : 'bg-[#FAF8F5] border-[#8A9A86]/30 text-[#3D3A36]'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "f9f05848fb6da628",
                                    [
                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                    ]
                                ]
                            ]) + " " + "text-sm font-semibold uppercase tracking-widest opacity-80",
                            children: "Pernapasan 4-7-8"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 398,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "f9f05848fb6da628",
                                    [
                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                    ]
                                ]
                            ]) + " " + "flex items-center justify-center py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + `w-32 h-32 rounded-full bg-[#7A8A76]/30 border-2 border-[#7A8A76] flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${breathScale}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + "w-16 h-16 rounded-full bg-[#7A8A76] opacity-65 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 401,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "f9f05848fb6da628",
                                    [
                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                    ]
                                ]
                            ]) + " " + "text-sm font-medium font-serif italic min-h-[2rem]",
                            children: breathPhase
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsBreathingOpen(false),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "f9f05848fb6da628",
                                    [
                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                    ]
                                ]
                            ]) + " " + "w-full py-2.5 bg-[#7A8A76] text-white rounded-full text-xs font-medium tracking-wide hover:bg-[#6E7D6A] transition cursor-pointer",
                            children: "Selesai & Kembali 🌿"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 395,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 394,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "f9f05848fb6da628",
                        [
                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                        ]
                    ]
                ]) + " " + `max-w-md w-full p-8 rounded-[2rem] border backdrop-blur-md space-y-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#222522]/90 border-[#7A8A76]/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)]' : 'bg-[#FAF8F5]/90 border-[#8A9A86]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + "flex justify-between items-center pb-1 border-b border-current/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + `text-[11px] font-medium px-3 py-1 rounded-full tracking-wide ${isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'}`,
                                children: [
                                    "🌿 ",
                                    streak,
                                    " Hari Refleksi"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsBreathingOpen(true),
                                        title: "Latihan pernapasan relaksasi",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${isDarkMode ? 'bg-white/5 text-[#A2B59F] hover:bg-white/10' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "f9f05848fb6da628",
                                                    [
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                    ]
                                                ]
                                            ]),
                                            children: "🫁 Napas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleAudio,
                                        title: "Putar suara hujan latar",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${isAudioPlaying ? 'bg-[#7A8A76] text-white shadow-xs animate-pulse' : isDarkMode ? 'bg-white/5 text-[#A2B59F] hover:bg-white/10' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "f9f05848fb6da628",
                                                    [
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                    ]
                                                ]
                                            ]),
                                            children: isAudioPlaying ? '🔊' : '🔇'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleDarkMode,
                                        title: "Ubah tema terang/gelap",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${isDarkMode ? 'bg-[#7A8A76] text-white shadow-xs' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "f9f05848fb6da628",
                                                    [
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                    ]
                                                ]
                                            ]),
                                            children: isDarkMode ? '🌙' : '☀️'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + "text-center space-y-3 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + `text-5xl font-serif italic tracking-wide ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                children: "Jeda."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + `inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xs ${isDarkMode ? 'bg-black/30 border-[#7A8A76]/30 text-[#A2B59F]' : 'bg-white/80 border-[#8A9A86]/25 text-[#5F6E5B]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "text-xs",
                                        children: "📅"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "text-[11px] font-medium uppercase tracking-[0.15em]",
                                        children: new Date().toLocaleDateString('id-ID', {
                                            weekday: 'long',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleAcakKutipan,
                                title: "Klik untuk menyegarkan kutipan",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "group cursor-pointer pt-1 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-xs font-serif italic opacity-75 px-4 leading-relaxed group-hover:opacity-100 transition ${isDarkMode ? 'text-[#C5CDC2]' : 'text-[#5A5550]'}`,
                                        children: [
                                            "“",
                                            kutipanAktif,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[9px] opacity-40 tracking-wider uppercase block pt-1 ${isDarkMode ? 'group-hover:text-[#A2B59F]' : 'group-hover:text-[#6E7D6A]'}`,
                                        children: "ketuk untuk kutipan lain ↻"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + "pt-2 text-center",
                        children: !promptAktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAmbilPrompt,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "f9f05848fb6da628",
                                    [
                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                    ]
                                ]
                            ]) + " " + `text-[10px] uppercase tracking-widest font-medium border px-4 py-1.5 rounded-full transition-all cursor-pointer ${isDarkMode ? 'border-[#7A8A76]/30 text-[#A2B59F] hover:bg-[#7A8A76]/20' : 'border-[#8A9A86]/30 text-[#6E7D6A] hover:bg-[#8A9A86]/10'}`,
                            children: "🎴 Ambil Kartu Refleksi"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "f9f05848fb6da628",
                                    [
                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                    ]
                                ]
                            ]) + " " + `p-4 rounded-2xl border ${isDarkMode ? 'bg-black/20 border-[#A2B59F]/30' : 'bg-white/60 border-[#6E7D6A]/30'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + `text-xs font-serif italic mb-3 ${isDarkMode ? 'text-[#E2E8E0]' : 'text-[#3D3A36]'}`,
                                    children: [
                                        "“",
                                        promptAktif,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + "flex gap-2 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleGunakanPrompt,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "f9f05848fb6da628",
                                                    [
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                    ]
                                                ]
                                            ]) + " " + "text-[10px] underline cursor-pointer font-medium",
                                            children: "Gunakan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPromptAktif(null),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "f9f05848fb6da628",
                                                    [
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                    ]
                                                ]
                                            ]) + " " + "text-[10px] opacity-50 underline cursor-pointer",
                                            children: "Lewati"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 514,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    totalCatatan > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + `p-4 rounded-2xl border space-y-3 ${isDarkMode ? 'bg-black/20 border-[#7A8A76]/15' : 'bg-white/60 border-[#8A9A86]/15'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[10px] font-semibold uppercase tracking-wider block ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                        children: "Grafik Tren Suasana Hati"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "text-[10px] opacity-50 font-mono",
                                        children: [
                                            totalCatatan,
                                            " Total Jejak"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 531,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "space-y-2 pt-1",
                                children: Object.entries(statistikSuasana).map(([suasana, jumlah], idx)=>{
                                    const persentase = Math.round(jumlah / totalCatatan * 100);
                                    const emoji = emojiSuasanaMap[suasana] || "🍃";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "flex justify-between items-center text-[10px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + `font-medium flex items-center gap-1 ${isDarkMode ? 'text-[#C5CDC2]' : 'text-[#5F6E5B]'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]),
                                                                children: emoji
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]),
                                                                children: suasana
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "opacity-60 font-mono",
                                                        children: [
                                                            jumlah,
                                                            " (",
                                                            persentase,
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-white/5' : 'bg-[#8A9A86]/15'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: `${persentase}%`
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "f9f05848fb6da628",
                                                            [
                                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                            ]
                                                        ]
                                                    ]) + " " + "h-full bg-[#7A8A76] rounded-full transition-all duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 528,
                        columnNumber: 11
                    }, this),
                    totalCatatan > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + `p-4 rounded-2xl border space-y-3 ${isDarkMode ? 'bg-black/20 border-[#7A8A76]/15' : 'bg-white/60 border-[#8A9A86]/15'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex justify-between items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + `text-[10px] font-semibold uppercase tracking-wider block ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                    children: "📊 Wawasan Jurnal Bulanan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "space-y-2 pt-1 text-[11px]",
                                children: Object.entries(wawasanBulanan).map(([bulan, dataBulan], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `p-2.5 rounded-xl border flex justify-between items-center ${isDarkMode ? 'border-[#7A8A76]/20 bg-white/5' : 'border-[#8A9A86]/20 bg-white/40'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "font-medium",
                                                children: bulan
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "opacity-70 font-mono",
                                                children: [
                                                    dataBulan.total,
                                                    " Catatan Refleksi"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 580,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 566,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + "space-y-4 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `block text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                        children: "Bagaimana suasanamu hari ini?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "grid grid-cols-2 gap-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pilihanSuasana.map((suasana, index)=>{
                                            const isSelected = suasanaPilihan === suasana;
                                            const emoji = emojiSuasanaMap[suasana] || "🍃";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSuasanaPilihan(suasana),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer active:scale-95 ${isSelected ? 'bg-[#7A8A76] text-white shadow-md translate-y-[-1px]' : isDarkMode ? 'bg-black/20 border border-[#7A8A76]/20 text-[#E2E8E0] hover:bg-white/5' : 'bg-white/60 border border-[#8A9A86]/25 text-[#3D3A36] hover:bg-[#8A9A86]/10'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "text-sm",
                                                        children: emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "truncate",
                                                        children: suasana
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 599,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "space-y-1.5 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `block text-xs font-medium ${isDarkMode ? 'text-[#E2E8E0]/90' : 'text-[#3D3A36]/90'}`,
                                                children: "Apa yang sedang bergemuruh di pikiranmu?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "text-[10px] opacity-40 font-mono",
                                                children: [
                                                    catatan.length,
                                                    " karakter"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: catatan,
                                        onChange: (e)=>setCatatan(e.target.value),
                                        placeholder: "Tuliskan dengan jujur di sini...",
                                        rows: 3,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `w-full bg-transparent border-b-2 focus:outline-none resize-none pb-2 text-xs transition-colors leading-relaxed ${isDarkMode ? 'border-[#7A8A76]/30 focus:border-[#A2B59F] text-[#E2E8E0] placeholder-[#E2E8E0]/30' : 'border-[#8A9A86]/30 focus:border-[#6E7D6A] text-[#3D3A36] placeholder-[#3D3A36]/30'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 619,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSimpan,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "w-full py-3 bg-[#7A8A76] text-white rounded-full text-xs font-medium tracking-wide hover:bg-[#6E7D6A] transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98]",
                                children: "Simpan ke Jeda ✨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 639,
                                columnNumber: 11
                            }, this),
                            pesanTersimpan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + `text-[11px] text-center font-medium animate-pulse pt-1 ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                children: "Catatan berhasil disimpan ke dalam ruang tenangmu. 🍃"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + `space-y-3 pt-4 border-t ${isDarkMode ? 'border-[#7A8A76]/25' : 'border-[#8A9A86]/20'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                children: "Jejak Refleksi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Cari kata...",
                                                value: pencarian,
                                                onChange: (e)=>setPencarian(e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `w-28 border rounded-lg px-2 py-1 text-[11px] focus:outline-none ${isDarkMode ? 'border-[#7A8A76]/30 bg-black/20 text-[#E2E8E0] focus:border-[#A2B59F] placeholder-[#E2E8E0]/30' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 659,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "grid grid-cols-2 gap-1.5 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterSuasana,
                                                onChange: (e)=>setFilterSuasana(e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `border rounded-lg px-2 py-1 text-[11px] focus:outline-none cursor-pointer ${isDarkMode ? 'border-[#7A8A76]/30 bg-[#222522] text-[#E2E8E0] focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Semua",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "Semua Suasana"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 17
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pilihanSuasana.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: s,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "f9f05848fb6da628",
                                                                    [
                                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: s
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterTanggal,
                                                onChange: (e)=>setFilterTanggal(e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `border rounded-lg px-2 py-1 text-[11px] focus:outline-none cursor-pointer ${isDarkMode ? 'border-[#7A8A76]/30 bg-[#222522] text-[#E2E8E0] focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Semua",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "Semua Tanggal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 17
                                                    }, this),
                                                    daftarTanggalUnik.map((tgl, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: tgl,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "f9f05848fb6da628",
                                                                    [
                                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: tgl
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 688,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "space-y-2.5 max-h-48 overflow-y-auto pr-1",
                                children: riwayat.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + "text-xs text-center opacity-40 py-6 italic font-serif",
                                    children: "Belum ada jejak pikiran yang tersimpan. Mulailah menulis di atas."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 707,
                                    columnNumber: 15
                                }, this) : riwayatTampil.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + "text-xs text-center opacity-40 py-4 italic font-serif",
                                    children: "Tidak ada catatan yang cocok dengan filter."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this) : riwayatTampil.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `p-3.5 rounded-2xl border text-xs space-y-2 shadow-2xs relative group transition-all duration-300 ${item.isPinned ? isDarkMode ? 'border-[#A2B59F]/60 bg-black/40 shadow-sm' : 'border-[#6E7D6A]/60 bg-white shadow-sm' : isDarkMode ? 'border-[#7A8A76]/20 bg-black/30 hover:bg-black/50 text-[#E2E8E0]' : 'border-[#8A9A86]/15 bg-white/80 hover:bg-white text-[#3D3A36] hover:shadow-md'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + `px-2 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-1 ${isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "f9f05848fb6da628",
                                                                                [
                                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                                ]
                                                                            ]
                                                                        ]),
                                                                        children: emojiSuasanaMap[item.suasana] || "🍃"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 724,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "f9f05848fb6da628",
                                                                                [
                                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                                ]
                                                                            ]
                                                                        ]),
                                                                        children: item.suasana
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                title: "Disematkan",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + "text-[10px]",
                                                                children: "📌"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + "text-[10px] opacity-40 font-mono hidden sm:inline",
                                                                children: item.tanggal
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 733,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleTogglePin(item.id),
                                                                title: item.isPinned ? "Lepas semat" : "Sematkan di atas",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + `transition text-[10px] underline cursor-pointer font-medium ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                                children: item.isPinned ? 'Lepas' : 'Semat'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 734,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleUnduhKartu(item),
                                                                title: "Unduh sebagai kartu gambar",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + `transition text-[10px] underline cursor-pointer font-medium ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                                children: "Kartu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>navigator.clipboard.writeText(item.teks),
                                                                title: "Salin teks",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + `transition text-[10px] underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F] opacity-70' : 'text-[#6E7D6A] opacity-70'}`,
                                                                children: "Salin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 748,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleHapus(item.id),
                                                                title: "Hapus catatan",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + "text-red-400 hover:text-red-500 opacity-60 hover:opacity-100 transition text-xs font-bold px-1 cursor-pointer",
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 755,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 719,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "opacity-90 pr-4 leading-relaxed font-normal",
                                                children: item.teks
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 765,
                                                columnNumber: 19
                                            }, this),
                                            item.tagOtomatis && item.tagOtomatis.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "flex flex-wrap gap-1.5 pt-1",
                                                children: item.tagOtomatis.map((tag, tIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + `text-[9px] px-2 py-0.5 rounded-md ${isDarkMode ? 'bg-white/5 text-[#A2B59F]' : 'bg-[#8A9A86]/10 text-[#5F6E5B]'}`,
                                                        children: tag
                                                    }, tIdx, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 768,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 712,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "pt-2 flex flex-wrap justify-between items-center gap-2 text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "flex items-center gap-3",
                                        children: [
                                            riwayat.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleEkspor,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `underline cursor-pointer opacity-70 hover:opacity-100 ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                children: "Unduh Cadangan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 787,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `underline cursor-pointer opacity-70 hover:opacity-100 ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                children: [
                                                    "Pulihkan Data",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: fileInputRef,
                                                        onChange: handleImpor,
                                                        accept: ".json",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 785,
                                        columnNumber: 13
                                    }, this),
                                    riwayat.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleHapusSemua,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "text-red-400 hover:text-red-500 opacity-70 hover:opacity-100 underline cursor-pointer font-medium",
                                        children: "Hapus Semua"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 654,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_09_j_0z._.js.map