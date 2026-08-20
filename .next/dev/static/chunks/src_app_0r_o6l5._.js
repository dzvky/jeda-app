(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Auth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Auth({ isDarkMode, onLoginSuccess }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRegistering, setIsRegistering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pesanError, setPesanError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAuth = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setPesanError('');
        if (isRegistering) {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                email,
                password
            });
            if (error) {
                setPesanError(error.message);
            } else {
                alert('Pendaftaran berhasil! Silakan periksa email Anda atau langsung masuk.');
                setIsRegistering(false);
            }
        } else {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                setPesanError(error.message);
            } else {
                onLoginSuccess();
            }
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-md w-full p-8 rounded-[2rem] border backdrop-blur-md space-y-6 shadow-xl transition-colors duration-500 ${isDarkMode ? 'bg-[#222522]/90 border-[#7A8A76]/20 text-[#E2E8E0]' : 'bg-[#FAF8F5]/90 border-[#8A9A86]/20 text-[#3D3A36]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `text-4xl font-serif italic tracking-wide ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                        children: "Jeda."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Auth.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs opacity-75",
                        children: isRegistering ? 'Buat akun baru untuk ruang refleksi Anda' : 'Masuk untuk mengakses jejak refleksi Anda'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Auth.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Auth.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            pesanError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center",
                children: pesanError
            }, void 0, false, {
                fileName: "[project]/src/app/components/Auth.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAuth,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[11px] font-medium opacity-80",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Auth.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                required: true,
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "nama@email.com",
                                className: `w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${isDarkMode ? 'border-[#7A8A76]/30 bg-black/20 text-white focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Auth.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Auth.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[11px] font-medium opacity-80",
                                children: "Kata Sandi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Auth.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                required: true,
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "••••••••",
                                className: `w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${isDarkMode ? 'border-[#7A8A76]/30 bg-black/20 text-white focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Auth.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Auth.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: `w-full py-2.5 rounded-xl text-xs font-medium transition cursor-pointer shadow-sm ${isDarkMode ? 'bg-[#7A8A76] hover:bg-[#6A7A66] text-white' : 'bg-[#6E7D6A] hover:bg-[#5E6D5A] text-white'}`,
                        children: loading ? 'Memproses...' : isRegistering ? 'Daftar Sekarang' : 'Masuk'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Auth.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Auth.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsRegistering(!isRegistering),
                    className: `text-[11px] underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                    children: isRegistering ? 'Sudah punya akun? Masuk di sini' : 'Belum punya akun? Daftar di sini'
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Auth.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Auth.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Auth.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Auth, "N04wqVYTVtmYXI/N+AlyA9fgVko=");
_c = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/BreathingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreathingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function BreathingModal({ isOpen, onClose, breathPhase, breathScale, isDarkMode }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-xs w-full p-8 rounded-[2rem] border text-center space-y-6 shadow-2xl relative ${isDarkMode ? 'bg-[#222522] border-[#7A8A76]/30 text-[#E2E8E0]' : 'bg-[#FAF8F5] border-[#8A9A86]/30 text-[#3D3A36]'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold uppercase tracking-widest opacity-80",
                    children: "Pernapasan 4-7-8"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BreathingModal.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-32 h-32 rounded-full bg-[#7A8A76]/30 border-2 border-[#7A8A76] flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${breathScale}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-[#7A8A76] opacity-65 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/BreathingModal.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/BreathingModal.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BreathingModal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium font-serif italic min-h-[2rem]",
                    children: breathPhase
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BreathingModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full py-2.5 bg-[#7A8A76] text-white rounded-full text-xs font-medium tracking-wide hover:bg-[#6E7D6A] transition cursor-pointer",
                    children: "Selesai & Kembali 🌿"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BreathingModal.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/BreathingModal.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/BreathingModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = BreathingModal;
var _c;
__turbopack_context__.k.register(_c, "BreathingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/JournalForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JournalForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function JournalForm({ suasanaPilihan, setSuasanaPilihan, pilihanSuasana, emojiSuasanaMap, catatan, setCatatan, handleSimpan, pesanTersimpan, isDarkMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4 pt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `block text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                        children: "Bagaimana suasanamu hari ini?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/JournalForm.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: pilihanSuasana.map((suasana, index)=>{
                            const isSelected = suasanaPilihan === suasana;
                            const emoji = emojiSuasanaMap[suasana] || "🍃";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSuasanaPilihan(suasana),
                                className: `flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer active:scale-95 ${isSelected ? 'bg-[#7A8A76] text-white shadow-md translate-y-[-1px]' : isDarkMode ? 'bg-black/20 border border-[#7A8A76]/20 text-[#E2E8E0] hover:bg-white/5' : 'bg-white/60 border border-[#8A9A86]/25 text-[#3D3A36] hover:bg-[#8A9A86]/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/JournalForm.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: suasana
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/JournalForm.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/JournalForm.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/JournalForm.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/JournalForm.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-2xl border space-y-2.5 animate-fadeIn"
            }, void 0, false, {
                fileName: "[project]/src/app/components/JournalForm.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "... transition-all duration-300 active:scale-[0.98] cursor-pointer",
                children: "Tombol Interaktif"
            }, void 0, false, {
                fileName: "[project]/src/app/components/JournalForm.tsx",
                lineNumber: 62,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-xs font-medium ${isDarkMode ? 'text-[#E2E8E0]/90' : 'text-[#3D3A36]/90'}`,
                                children: "Apa yang sedang bergemuruh di pikiranmu?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/JournalForm.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] opacity-40 font-mono",
                                children: [
                                    catatan.length,
                                    " karakter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/JournalForm.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/JournalForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: catatan,
                        onChange: (e)=>setCatatan(e.target.value),
                        className: `w-full bg-transparent border-b-2 focus:outline-none resize-none pb-2 text-xs transition-colors leading-relaxed ${isDarkMode ? 'border-[#7A8A76]/30 focus:border-[#A2B59F] text-[#E2E8E0] placeholder-[#E2E8E0]/30' : 'border-[#8A9A86]/30 focus:border-[#6E7D6A] text-[#3D3A36] placeholder-[#3D3A36]/30'}`,
                        placeholder: "Tuliskan dengan jujur di sini...",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/JournalForm.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/JournalForm.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSimpan,
                className: "w-full py-3 bg-[#7A8A76] text-white rounded-full text-xs font-medium tracking-wide hover:bg-[#6E7D6A] transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98]",
                children: "Simpan ke Jeda ✨"
            }, void 0, false, {
                fileName: "[project]/src/app/components/JournalForm.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            pesanTersimpan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-[11px] text-center font-medium animate-pulse pt-1 ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                children: "Catatan berhasil disimpan ke dalam ruang tenangmu. 🍃"
            }, void 0, false, {
                fileName: "[project]/src/app/components/JournalForm.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/JournalForm.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = JournalForm;
var _c;
__turbopack_context__.k.register(_c, "JournalForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/MoodChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoodChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function MoodChart({ totalCatatan, statistikSuasana, wawasanBulanan, emojiSuasanaMap, isDarkMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-5 rounded-2xl border space-y-4 transition-colors duration-500 ${isDarkMode ? 'bg-black/20 border-[#7A8A76]/25 text-[#E2E8E0]' : 'bg-white/60 border-[#8A9A86]/20 text-[#3D3A36]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                        children: "🌿 Rekap Suasana Hati"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/MoodChart.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] px-2.5 py-0.5 rounded-full font-medium ${isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'}`,
                        children: [
                            "Total: ",
                            totalCatatan,
                            " Refleksi"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/MoodChart.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MoodChart.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            totalCatatan === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs opacity-50 text-center py-3 italic font-serif",
                children: "Belum ada data suasana untuk ditampilkan. Mulai tulis refleksi pertamamu!"
            }, void 0, false, {
                fileName: "[project]/src/app/components/MoodChart.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] opacity-75 font-medium",
                                children: "Distribusi Emosi Keseluruhan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                children: Object.entries(statistikSuasana).map(([suasana, jumlah], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center justify-between p-2 rounded-xl border text-[11px] ${isDarkMode ? 'border-[#7A8A76]/20 bg-black/30' : 'border-[#8A9A86]/15 bg-white/70'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: emojiSuasanaMap[suasana] || "🍃"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/MoodChart.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: suasana
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/MoodChart.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold px-1.5 py-0.5 rounded-md text-[10px] ${isDarkMode ? 'bg-[#7A8A76]/30 text-[#A2B59F]' : 'bg-[#8A9A86]/20 text-[#5F6E5B]'}`,
                                                children: [
                                                    jumlah,
                                                    "x"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/components/MoodChart.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/MoodChart.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 border-t border-current/10 space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] opacity-75 font-medium",
                                children: "Rekap Berdasarkan Bulan:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 max-h-28 overflow-y-auto pr-1",
                                children: Object.entries(wawasanBulanan).map(([bulan, dataBulan], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex justify-between items-center p-2 rounded-xl text-[11px] border ${isDarkMode ? 'border-[#7A8A76]/15 bg-black/20' : 'border-[#8A9A86]/10 bg-white/40'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: bulan
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "opacity-75 text-[10px]",
                                                    children: [
                                                        dataBulan.total,
                                                        " catatan"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/MoodChart.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/components/MoodChart.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/MoodChart.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/MoodChart.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MoodChart.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/MoodChart.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = MoodChart;
var _c;
__turbopack_context__.k.register(_c, "MoodChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ReflectionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReflectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ReflectionCard({ promptAktif, onAmbilPrompt, onGunakanPrompt, onTutupPrompt, isDarkMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-2 text-center",
        children: !promptAktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onAmbilPrompt,
            className: `text-[10px] uppercase tracking-widest font-medium border px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${isDarkMode ? 'border-[#7A8A76]/30 text-[#A2B59F] hover:bg-[#7A8A76]/20' : 'border-[#8A9A86]/30 text-[#6E7D6A] hover:bg-[#8A9A86]/10'}`,
            children: "🎴 Ambil Kartu Refleksi"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ReflectionCard.tsx",
            lineNumber: 16,
            columnNumber: 9
        }, this) : /* Tambahkan kelas animate-fadeIn di sini agar ada gerakan lembut */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `p-4 rounded-2xl border animate-fadeIn transition-all ${isDarkMode ? 'bg-black/20 border-[#A2B59F]/30' : 'bg-white/60 border-[#6E7D6A]/30'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-xs font-serif italic mb-3 ${isDarkMode ? 'text-[#E2E8E0]' : 'text-[#3D3A36]'}`,
                    children: [
                        "“",
                        promptAktif,
                        "”"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ReflectionCard.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onGunakanPrompt,
                            className: "text-[10px] underline cursor-pointer font-medium",
                            children: "Gunakan"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ReflectionCard.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onTutupPrompt,
                            className: "text-[10px] opacity-50 underline cursor-pointer",
                            children: "Lewati"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ReflectionCard.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ReflectionCard.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ReflectionCard.tsx",
            lineNumber: 28,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ReflectionCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ReflectionCard;
var _c;
__turbopack_context__.k.register(_c, "ReflectionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/StreakHeatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StreakHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function StreakHeatmap({ riwayat, isDarkMode }) {
    // Ambil tanggal unik yang ada catatan
    const activeDates = new Set(riwayat.map((item)=>item.rawDate || item.tanggal));
    // Buat array 14 hari ke belakang untuk visualisasi mini heatmap
    const generateDays = ()=>{
        const days = [];
        for(let i = 13; i >= 0; i--){
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateString = d.toISOString().split('T')[0];
            const displayLabel = d.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short'
            });
            days.push({
                dateString,
                displayLabel,
                hasActivity: activeDates.has(dateString)
            });
        }
        return days;
    };
    const daysList = generateDays();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-5 rounded-2xl border space-y-3 transition-colors duration-500 ${isDarkMode ? 'bg-black/20 border-[#7A8A76]/25 text-[#E2E8E0]' : 'bg-white/60 border-[#8A9A86]/20 text-[#3D3A36]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `text-[11px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                    children: "🔥 Jejak Konsistensi (14 Hari Terakhir)"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/StreakHeatmap.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/StreakHeatmap.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center gap-1.5 pt-1",
                children: daysList.map((day, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-1.5 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                title: `${day.displayLabel}: ${day.hasActivity ? 'Ada catatan' : 'Tidak ada catatan'}`,
                                className: `w-full h-6 rounded-md transition-all duration-300 ${day.hasActivity ? isDarkMode ? 'bg-[#7A8A76] shadow-xs' : 'bg-[#6E7D6A] shadow-xs' : isDarkMode ? 'bg-white/5 border border-[#7A8A76]/15' : 'bg-[#8A9A86]/10 border border-[#8A9A86]/20'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/StreakHeatmap.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] opacity-55 font-mono text-center truncate w-full",
                                children: day.displayLabel.split(' ')[0]
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/StreakHeatmap.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/components/StreakHeatmap.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/StreakHeatmap.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/StreakHeatmap.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = StreakHeatmap;
var _c;
__turbopack_context__.k.register(_c, "StreakHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "pilihanSuasana": [
        "Tenang dan damai",
        "Gelisah",
        "Semangat",
        "Lelah",
        "Bersyukur",
        "Sedih"
    ],
    "kutipanHariIni": "Ketenangan bukanlah ketiadaan kebisingan, melainkan kedamaian di tengah hiruk-pikuk."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://lptlomyihmcwmnlaupvr.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdGxvbXlpaG1jd21ubGF1cHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NjQ4OTAsImV4cCI6MjEwMjU0MDg5MH0.d72QkOdr4J7k1i_4FjVWGV88miHIXtVZd8HyzzNo8Lo") || '';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$BreathingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/BreathingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ReflectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ReflectionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$JournalForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/JournalForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MoodChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MoodChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$StreakHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/StreakHeatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
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
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingAuth, setLoadingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [catatan, setCatatan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [suasanaPilihan, setSuasanaPilihan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pilihanSuasana[0]);
    const [riwayat, setRiwayat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterSuasana, setFilterSuasana] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Semua');
    const [filterTanggal, setFilterTanggal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Semua');
    const [pencarian, setPencarian] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pesanTersimpan, setPesanTersimpan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [kutipanAktif, setKutipanAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].kutipanHariIni);
    const [isAudioPlaying, setIsAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [promptAktif, setPromptAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const daftarPrompt = [
        "Apa hal kecil hari ini yang membuatmu tersenyum?",
        "Apa satu hal yang ingin kamu lepaskan dari pikiranmu hari ini?",
        "Apa pencapaian terkecil yang layak kamu syukuri hari ini?",
        "Jika hari ini adalah sebuah bab, apa judul bab tersebut?",
        "Apa satu hal baru yang kamu pelajari tentang dirimu hari ini?",
        "Apa yang sedang membuat hatimu merasa tenang saat ini?"
    ];
    const [isBreathingOpen, setIsBreathingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [breathPhase, setBreathPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Tarik napas perlahan...');
    const [breathScale, setBreathScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('scale-100');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Periksa status sesi login pengguna
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "Home.useEffect": ({ data: { session } })=>{
                    setSession(session);
                    setLoadingAuth(false);
                }
            }["Home.useEffect"]);
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "Home.useEffect": (_event, session)=>{
                    setSession(session);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>subscription.unsubscribe()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Ambil data dari Supabase saat sesi aktif
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (session) {
                fetchCatatanFromSupabase();
            }
            const savedTheme = localStorage.getItem('jeda_dark_mode');
            if (savedTheme === 'true') {
                setIsDarkMode(true);
            }
            audioRef.current = new Audio('https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg');
            audioRef.current.loop = true;
            return ({
                "Home.useEffect": ()=>{
                    if (audioRef.current) {
                        audioRef.current.pause();
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        session
    ]);
    const fetchCatatanFromSupabase = async ()=>{
        try {
            const { data: supabaseData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('catatan').select('*').order('id', {
                ascending: false
            });
            if (error) {
                console.error('Gagal mengambil data dari Supabase:', error.message);
                return;
            }
            if (supabaseData) {
                const formattedData = supabaseData.map((item)=>({
                        id: Number(item.id),
                        teks: item.teks,
                        suasana: item.suasana,
                        waktu: item.waktu || '00:00',
                        tanggal: item.tanggal,
                        rawDate: item.raw_date || item.tanggal,
                        tagOtomatis: deteksiTagOtomatis(item.teks),
                        isPinned: item.is_pinned || false
                    }));
                setRiwayat(formattedData);
                hitungStreak(formattedData);
            }
        } catch (err) {
            console.error('Error koneksi:', err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let interval;
            if (isBreathingOpen) {
                const runBreathCycle = {
                    "Home.useEffect.runBreathCycle": ()=>{
                        setBreathPhase('Tarik Napas (4 detik)');
                        setBreathScale('scale-150');
                        setTimeout({
                            "Home.useEffect.runBreathCycle": ()=>{
                                if (!isBreathingOpen) return;
                                setBreathPhase('Tahan Napas (7 detik)');
                                setBreathScale('scale-150');
                            }
                        }["Home.useEffect.runBreathCycle"], 4000);
                        setTimeout({
                            "Home.useEffect.runBreathCycle": ()=>{
                                if (!isBreathingOpen) return;
                                setBreathPhase('Hembuskan Perlahan (8 detik)');
                                setBreathScale('scale-100');
                            }
                        }["Home.useEffect.runBreathCycle"], 11000);
                    }
                }["Home.useEffect.runBreathCycle"];
                runBreathCycle();
                interval = setInterval(runBreathCycle, 19000);
            }
            return ({
                "Home.useEffect": ()=>{
                    clearInterval(interval);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
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
    const handleLogout = async ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            setIsAudioPlaying(false);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        setRiwayat([]);
        setStreak(0);
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
    const handleSimpan = async ()=>{
        if (!catatan.trim() || !session?.user) return;
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
        const newId = Date.now();
        const catatanBaru = {
            id: newId,
            teks: catatan,
            suasana: suasanaPilihan,
            waktu: waktuSekarang,
            tanggal: tanggalFormatted,
            rawDate: rawDateString,
            tagOtomatis: deteksiTagOtomatis(catatan),
            isPinned: false
        };
        // Simpan ke Supabase dengan menyertakan user_id
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('catatan').insert([
            {
                id: newId,
                teks: catatan,
                suasana: suasanaPilihan,
                waktu: waktuSekarang,
                tanggal: tanggalFormatted,
                raw_date: rawDateString,
                is_pinned: false,
                user_id: session.user.id
            }
        ]);
        if (error) {
            alert("Gagal menyimpan ke cloud: " + error.message);
            return;
        }
        const riwayatBaru = [
            catatanBaru,
            ...riwayat
        ];
        setRiwayat(riwayatBaru);
        hitungStreak(riwayatBaru);
        setCatatan('');
        setPesanTersimpan(true);
        setTimeout(()=>setPesanTersimpan(false), 3000);
    };
    const handleHapus = async (id)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('catatan').delete().eq('id', id);
        if (error) {
            alert("Gagal menghapus catatan: " + error.message);
            return;
        }
        const riwayatBaru = riwayat.filter((item)=>item.id !== id);
        setRiwayat(riwayatBaru);
        hitungStreak(riwayatBaru);
    };
    const handleHapusSemua = async ()=>{
        if (confirm("Apakah kamu yakin ingin menghapus seluruh jejak catatan di cloud?")) {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('catatan').delete().neq('id', 0);
            if (error) {
                alert("Gagal menghapus semua data: " + error.message);
                return;
            }
            setRiwayat([]);
            setStreak(0);
        }
    };
    const handleTogglePin = async (id)=>{
        const targetItem = riwayat.find((item)=>item.id === id);
        if (!targetItem) return;
        const nextPinnedStatus = !targetItem.isPinned;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('catatan').update({
            is_pinned: nextPinnedStatus
        }).eq('id', id);
        if (error) {
            console.error("Gagal memperbarui status pin:", error.message);
            return;
        }
        const riwayatBaru = riwayat.map((item)=>{
            if (item.id === id) {
                return {
                    ...item,
                    isPinned: nextPinnedStatus
                };
            }
            return item;
        });
        riwayatBaru.sort((a, b)=>(b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
        setRiwayat(riwayatBaru);
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
    const handleImpor = async (e)=>{
        const fileReader = new FileReader();
        if (e.target.files && e.target.files[0] && session?.user) {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = async (event)=>{
                try {
                    const parsedData = JSON.parse(event.target?.result);
                    if (Array.isArray(parsedData) && (parsedData.length === 0 || 'id' in parsedData[0] && 'teks' in parsedData[0])) {
                        for (const item of parsedData){
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('catatan').upsert([
                                {
                                    id: item.id,
                                    teks: item.teks,
                                    suasana: item.suasana,
                                    waktu: item.waktu,
                                    tanggal: item.tanggal,
                                    raw_date: item.rawDate,
                                    is_pinned: item.isPinned || false,
                                    user_id: session.user.id
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].kutipanHariIni,
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
    const hitungWawasanBulanan = ()=>{
        const bulanan = {};
        riwayat.forEach((item)=>{
            const bulanKey = item.tanggal.split(' ').slice(1).join(' ');
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
    if (loadingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center bg-[#F4F1EA] text-[#3D3A36]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs italic font-serif",
                children: "Memuat sesi..."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 483,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 482,
            columnNumber: 7
        }, this);
    }
    // Jika belum login, tampilkan komponen Auth
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: `min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isDarkMode ? 'bg-[#181A18] text-[#E2E8E0]' : 'bg-[#F4F1EA] text-[#3D3A36]'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isDarkMode: isDarkMode,
                onLoginSuccess: ()=>{}
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 494,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 491,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "f9f05848fb6da628",
                [
                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                ]
            ]
        ]) + " " + `min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isDarkMode ? 'bg-[#181A18] text-[#E2E8E0] selection:bg-[#7A8A76]/30' : 'bg-[#F4F1EA] text-[#3D3A36] selection:bg-[#8A9A86]/20'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f9f05848fb6da628",
                dynamic: [
                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                ],
                children: `::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:${isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)'};border-radius:10px}::-webkit-scrollbar-thumb:hover{background:${isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'}}`
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$BreathingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isBreathingOpen,
                onClose: ()=>setIsBreathingOpen(false),
                breathPhase: breathPhase,
                breathScale: breathScale,
                isDarkMode: isDarkMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "f9f05848fb6da628",
                        [
                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                        ]
                    ]
                ]) + " " + `max-w-md w-full p-8 rounded-[2rem] border backdrop-blur-md space-y-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#222522]/90 border-[#7A8A76]/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)]' : 'bg-[#FAF8F5]/90 border-[#8A9A86]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + "flex justify-between items-center pb-1 border-b border-current/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                lineNumber: 538,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsBreathingOpen(true),
                                        "aria-label": "Buka latihan pernapasan relaksasi",
                                        title: "Latihan pernapasan relaksasi",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${isDarkMode ? 'bg-white/5 text-[#A2B59F] hover:bg-white/10' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleAudio,
                                        "aria-label": isAudioPlaying ? "Matikan suara hujan latar" : "Nyalakan suara hujan latar",
                                        title: "Putar suara hujan latar",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${isAudioPlaying ? 'bg-[#7A8A76] text-white shadow-xs animate-pulse' : isDarkMode ? 'bg-white/5 text-[#A2B59F] hover:bg-white/10' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleDarkMode,
                                        "aria-label": "Ubah mode tema terang dan gelap",
                                        title: "Ubah tema terang/gelap",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 ${isDarkMode ? 'bg-[#7A8A76] text-white shadow-xs' : 'bg-[#8A9A86]/10 text-[#5F6E5B] hover:bg-[#8A9A86]/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                            lineNumber: 579,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        "aria-label": "Keluar akun",
                                        title: "Keluar akun",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1 text-red-500 hover:bg-red-500/10`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "f9f05848fb6da628",
                                                    [
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                        isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                    ]
                                                ]
                                            ]),
                                            children: "🚪 Keluar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + "text-center space-y-3 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                lineNumber: 595,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + `inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xs ${isDarkMode ? 'bg-black/30 border-[#7A8A76]/30 text-[#A2B59F]' : 'bg-white/80 border-[#8A9A86]/25 text-[#5F6E5B]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                        lineNumber: 603,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 597,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleAcakKutipan,
                                title: "Klik untuk menyegarkan kutipan",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "group cursor-pointer pt-1 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                        lineNumber: 618,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ReflectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        promptAktif: promptAktif,
                        onAmbilPrompt: handleAmbilPrompt,
                        onGunakanPrompt: handleGunakanPrompt,
                        onTutupPrompt: ()=>setPromptAktif(null),
                        isDarkMode: isDarkMode
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$StreakHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        riwayat: riwayat,
                        isDarkMode: isDarkMode
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MoodChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        totalCatatan: totalCatatan,
                        statistikSuasana: statistikSuasana,
                        wawasanBulanan: wawasanBulanan,
                        emojiSuasanaMap: emojiSuasanaMap,
                        isDarkMode: isDarkMode
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$JournalForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        suasanaPilihan: suasanaPilihan,
                        setSuasanaPilihan: setSuasanaPilihan,
                        pilihanSuasana: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pilihanSuasana,
                        emojiSuasanaMap: emojiSuasanaMap,
                        catatan: catatan,
                        setCatatan: setCatatan,
                        handleSimpan: handleSimpan,
                        pesanTersimpan: pesanTersimpan,
                        isDarkMode: isDarkMode
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "f9f05848fb6da628",
                                [
                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                ]
                            ]
                        ]) + " " + `space-y-3 pt-4 border-t ${isDarkMode ? 'border-[#7A8A76]/25' : 'border-[#8A9A86]/20'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Cari kata...",
                                                value: pencarian,
                                                onChange: (e)=>setPencarian(e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                lineNumber: 667,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "grid grid-cols-2 gap-1.5 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterSuasana,
                                                onChange: (e)=>setFilterSuasana(e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `border rounded-lg px-2 py-1 text-[11px] focus:outline-none cursor-pointer ${isDarkMode ? 'border-[#7A8A76]/30 bg-[#222522] text-[#E2E8E0] focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Semua",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                        lineNumber: 690,
                                                        columnNumber: 17
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pilihanSuasana.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: s,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                            lineNumber: 692,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterTanggal,
                                                onChange: (e)=>setFilterTanggal(e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `border rounded-lg px-2 py-1 text-[11px] focus:outline-none cursor-pointer ${isDarkMode ? 'border-[#7A8A76]/30 bg-[#222522] text-[#E2E8E0] focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Semua",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                        lineNumber: 705,
                                                        columnNumber: 17
                                                    }, this),
                                                    daftarTanggalUnik.map((tgl, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: tgl,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                            lineNumber: 707,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 680,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 663,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "space-y-2.5 max-h-48 overflow-y-auto pr-1",
                                children: riwayat.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "f9f05848fb6da628",
                                            [
                                                isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                            ]
                                        ]
                                    ]) + " " + "text-xs text-center opacity-40 py-6 italic font-serif",
                                    children: "Belum ada jejak pikiran yang tersimpan di cloud. Mulailah menulis di atas."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 715,
                                    columnNumber: 15
                                }, this) : riwayatTampil.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    lineNumber: 717,
                                    columnNumber: 15
                                }, this) : riwayatTampil.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + `p-3.5 rounded-2xl border text-xs space-y-2 shadow-2xs relative group transition-all duration-300 ${item.isPinned ? isDarkMode ? 'border-[#A2B59F]/60 bg-black/40 shadow-sm' : 'border-[#6E7D6A]/60 bg-white shadow-sm' : isDarkMode ? 'border-[#7A8A76]/20 bg-black/30 hover:bg-black/50 text-[#E2E8E0]' : 'border-[#8A9A86]/15 bg-white/80 hover:bg-white text-[#3D3A36] hover:shadow-md'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + `px-2 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-1 ${isDarkMode ? 'bg-[#7A8A76]/20 text-[#A2B59F]' : 'bg-[#8A9A86]/15 text-[#5F6E5B]'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                                        lineNumber: 732,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                                        lineNumber: 733,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                title: "Disematkan",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                                lineNumber: 736,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "f9f05848fb6da628",
                                                                [
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                                lineNumber: 741,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleTogglePin(item.id),
                                                                title: item.isPinned ? "Lepas semat" : "Sematkan di atas",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                                lineNumber: 742,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleUnduhKartu(item),
                                                                title: "Unduh sebagai kartu gambar",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                                lineNumber: 749,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleHapus(item.id),
                                                                title: "Hapus catatan",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "f9f05848fb6da628",
                                                                        [
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                                        ]
                                                                    ]
                                                                ]) + " " + "transition text-[10px] underline cursor-pointer font-medium text-red-500 hover:text-red-600",
                                                                children: "Hapus"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 756,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `whitespace-pre-wrap leading-relaxed ${isDarkMode ? 'text-[#E2E8E0]' : 'text-[#3D3A36]'}`,
                                                children: item.teks
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 19
                                            }, this),
                                            item.tagOtomatis && item.tagOtomatis.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + "flex flex-wrap gap-1 pt-1",
                                                children: item.tagOtomatis.map((tag, tIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                        lineNumber: 773,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 771,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 720,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            totalCatatan > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "f9f05848fb6da628",
                                        [
                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                        ]
                                    ]
                                ]) + " " + "flex items-center justify-between pt-2 text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleEkspor,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                children: "Ekspor JSON"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 789,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "f9f05848fb6da628",
                                                        [
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                            isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                        ]
                                                    ]
                                                ]) + " " + `underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`,
                                                children: [
                                                    "Impor",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: fileInputRef,
                                                        onChange: handleImpor,
                                                        accept: ".json",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                                        lineNumber: 797,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 788,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleHapusSemua,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "f9f05848fb6da628",
                                                [
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.3)' : 'rgba(138, 154, 134, 0.25)',
                                                    isDarkMode ? 'rgba(122, 138, 118, 0.6)' : 'rgba(138, 154, 134, 0.5)'
                                                ]
                                            ]
                                        ]) + " " + "text-red-500 hover:text-red-600 underline cursor-pointer",
                                        children: "Hapus Semua"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 787,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 500,
        columnNumber: 5
    }, this);
}
_s(Home, "1ti0K+D/w0nw1nmweADdhTtaeFk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_0r_o6l5._.js.map