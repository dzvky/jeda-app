module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.json.[json].cjs [app-ssr] (ecmascript)");
'use client';
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
    // --- State ---
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
    // State untuk Mode Pernapasan
    const [isBreathingOpen, setIsBreathingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [breathPhase, setBreathPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Tarik napas perlahan...');
    const [breathScale, setBreathScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('scale-100');
    // --- Refs ---
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- Lifecycle & Efek ---
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
        return ()=>clearInterval(interval);
    }, [
        isBreathingOpen
    ]);
    // --- Fungsi Penunjang ---
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
        if (t.includes('kerja') || t.includes('tugas') || t.includes('proyek') || t.includes('deadline')) tags.push('💼 Pekerjaan');
        if (t.includes('lelah') || t.includes('capek') || t.includes('istirahat') || t.includes('tidur')) tags.push('☕ Istirahat');
        if (t.includes('syukur') || t.includes('bahagia') || t.includes('senang')) tags.push('💡 Refleksi Positif');
        if (t.includes('cemas') || t.includes('takut') || t.includes('stress')) tags.push('🌧️ Kecemasan');
        if (t.includes('belajar') || t.includes('ilmu') || t.includes('baca')) tags.push('📚 Pembelajaran');
        return tags;
    };
    const handleSimpan = ()=>{
        if (!catatan.trim()) return;
        const now = new Date();
        const catatanBaru = {
            id: Date.now(),
            teks: catatan,
            suasana: suasanaPilihan,
            waktu: now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            tanggal: now.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }),
            rawDate: now.toISOString().split('T')[0],
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
    const handleTogglePin = (id)=>{
        const riwayatBaru = riwayat.map((item)=>item.id === id ? {
                ...item,
                isPinned: !item.isPinned
            } : item).sort((a, b)=>(b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
        setRiwayat(riwayatBaru);
        localStorage.setItem('jeda_riwayat', JSON.stringify(riwayatBaru));
    };
    const handleEkspor = ()=>{
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(riwayat, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `jejak_jeda_${new Date().toISOString().split('T')[0]}.json`);
        downloadAnchor.click();
        downloadAnchor.remove();
    };
    const handleImpor = (e)=>{
        const fileReader = new FileReader();
        if (e.target.files?.[0]) {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = (event)=>{
                try {
                    const parsedData = JSON.parse(event.target?.result);
                    if (Array.isArray(parsedData)) {
                        setRiwayat(parsedData);
                        localStorage.setItem('jeda_riwayat', JSON.stringify(parsedData));
                        hitungStreak(parsedData);
                        alert("Berhasil memulihkan catatan!");
                    }
                } catch  {
                    alert("Gagal membaca file.");
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
        // ... (Logika Canvas drawing Anda tetap sama)
        ctx.fillStyle = isDarkMode ? '#E2E8E0' : '#3D3A36';
        ctx.font = '22px sans-serif';
        ctx.fillText(item.teks, 65, 205); // Simplified for integration
        const link = document.createElement('a');
        link.download = `kartu_jeda_${item.id}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    const handleAcakKutipan = ()=>{
        const daftarKutipan = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].kutipanHariIni,
            "Berhenti sejenak untuk melangkah lebih baik.",
            "Keheningan adalah jawaban."
        ];
        setKutipanAktif(daftarKutipan[Math.floor(Math.random() * daftarKutipan.length)]);
    };
    // --- Render ---
    // (JSX Anda disematkan di bawah return di sini)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center transition-colors duration-500 ${isDarkMode ? 'bg-[#181A18] text-[#E2E8E0]' : 'bg-[#F4F1EA] text-[#3D3A36]'}`
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 233,
        columnNumber: 6
    }, this);
}
}),
];

//# sourceMappingURL=_1eux6z1._.js.map