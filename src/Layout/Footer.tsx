"use client";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="text-white border-t border-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold text-black dark:text-white">Puskesmas Pantai Amal</span>
            </div>
            <p className="text-sm text-gray-500">
              Melayani dengan sepenuh hati untuk kesehatan masyarakat
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-xl text-black dark:text-white">Profil</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/profil/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/profil/visi-misi" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              <li><Link to="/profil/struktur-organisasi" className="hover:text-white transition-colors">Struktur Organisasi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-xl text-black dark:text-white">Layanan</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/layanan/poli" className="hover:text-white transition-colors">Layanan Poli</Link></li>
              <li><Link to="/jadwal/dokter" className="hover:text-white transition-colors">Jadwal Dokter</Link></li>
              <li><Link to="/daftar-online" className="hover:text-white transition-colors">Daftar Online</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-xl text-black dark:text-white ">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>📞 (0551) 123-4567</li>
              <li>✉️ info@puskesmas.id</li>
              <li>📍 Jl. Kesehatan No. 123, Tarakan</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© 2025 UPTD Puskesmas. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}