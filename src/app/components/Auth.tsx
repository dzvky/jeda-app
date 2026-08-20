'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface AuthProps {
  isDarkMode: boolean;
  onLoginSuccess: () => void;
}

export default function Auth({ isDarkMode, onLoginSuccess }: AuthProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pesanError, setPesanError] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPesanError('');

    if (isRegistering) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setPesanError(error.message);
      } else {
        alert('Pendaftaran berhasil! Silakan periksa email Anda atau langsung masuk.');
        setIsRegistering(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setPesanError(error.message);
      } else {
        onLoginSuccess();
      }
    }
    setLoading(false);
  };

  return (
    <div className={`max-w-md w-full p-8 rounded-[2rem] border backdrop-blur-md space-y-6 shadow-xl transition-colors duration-500 ${
      isDarkMode ? 'bg-[#222522]/90 border-[#7A8A76]/20 text-[#E2E8E0]' : 'bg-[#FAF8F5]/90 border-[#8A9A86]/20 text-[#3D3A36]'
    }`}>
      <div className="text-center space-y-2">
        <h1 className={`text-4xl font-serif italic tracking-wide ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}>Jeda.</h1>
        <p className="text-xs opacity-75">
          {isRegistering ? 'Buat akun baru untuk ruang refleksi Anda' : 'Masuk untuk mengakses jejak refleksi Anda'}
        </p>
      </div>

      {pesanError && (
        <div className="p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center">
          {pesanError}
        </div>
      )}

      <form onSubmit={handleAuth} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[11px] font-medium opacity-80">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@email.com"
            className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
              isDarkMode ? 'border-[#7A8A76]/30 bg-black/20 text-white focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'
            }`}
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-medium opacity-80">Kata Sandi</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
              isDarkMode ? 'border-[#7A8A76]/30 bg-black/20 text-white focus:border-[#A2B59F]' : 'border-[#8A9A86]/25 bg-white/60 text-[#3D3A36] focus:border-[#6E7D6A]'
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2.5 rounded-xl text-xs font-medium transition cursor-pointer shadow-sm ${
            isDarkMode ? 'bg-[#7A8A76] hover:bg-[#6A7A66] text-white' : 'bg-[#6E7D6A] hover:bg-[#5E6D5A] text-white'
          }`}
        >
          {loading ? 'Memproses...' : isRegistering ? 'Daftar Sekarang' : 'Masuk'}
        </button>
      </form>

      <div className="text-center pt-2">
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className={`text-[11px] underline cursor-pointer ${isDarkMode ? 'text-[#A2B59F]' : 'text-[#6E7D6A]'}`}
        >
          {isRegistering ? 'Sudah punya akun? Masuk di sini' : 'Belum punya akun? Daftar di sini'}
        </button>
      </div>
    </div>
  );
}