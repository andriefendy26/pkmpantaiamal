"use client";
// import { color } from "motion";x`
import { useState } from "react";

export default function PortalSistemInformasi() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const sistemInformasi = [
    {
      id: 1,
      name: "E-Puskesmas",
      fullName: "Sistem Informasi Manajemen Puskesmas",
      description: "Sistem informasi untuk mengelola data pasien, rekam medis, dan administrasi puskesmas",
      icon: "🏥",
      img : 'https://www.epuskesmas.id/wp-content/uploads/2023/12/Logo-ePuskesmas-Putih.png',
      url: "https://kotatarakan.epuskesmas.id",
      category: "pelayanan",
      status: "aktif"
    },
    {
      id: 2,
      name: "Arsip Digital PUSPA",
      fullName: "Sistem Informasi Manajemen Arsip Digital Puskesmas",
      description: "Sistem informasi untuk mengelola arsip digital puskesmas secara terstruktur dan aman",
      icon: "🏥",
      img : 'https://arsip.pkmpantaiamal.com/images/logo-puskesmas.png',
      url: "https://arsip.pkmpantaiamal.com/admin",
      category: "Managemen",
      status: "aktif"
    },
    {
      id: 3,
      name: "Surat Keterangan PUSPA",
      fullName: "Sistem Informasi Manajemen Surat Keterangan Puskesmas",
      description: "Managemen surat keterangan, mengelola, menerbitkan, dan mengarsipkan surat",
      icon: "🏥",
      img : "",
      url: "https://sk.pkmpantaiamal.com/admin",
      category: "Managemen",
      status: "aktif"
    },
    {
      id: 4,
      name: "Sistem Informasi RKBU",
      fullName: "Sistem Informasi Manajemen RKBU",
      description: "Sistem informasi untuk mengelola data RKBU secara efisien",
      icon: "🏥",
      img : "",
      url: "https://rkbu.pkmpantaiamal.com/admin",
      category: "Managemen",
      status: "aktif"
    },
  ];

  const categories = [
    { id: "semua", name: "Semua", icon: "●" },
    { id: "pelayanan", name: "Pelayanan", icon: "●" },
    { id: "internal", name: "Internal", icon: "●" },
    // { id: "pelaporan", name: "Pelaporan", icon: "●" },
    // { id: "logistik", name: "Logistik", icon: "●" },
    // { id: "kepegawaian", name: "Kepegawaian", icon: "●" },
    // { id: "keuangan", name: "Keuangan", icon: "●" }
  ];

  const filteredSistem = sistemInformasi.filter((sistem) => {
    const matchSearch = sistem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       sistem.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       sistem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "semua" || sistem.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const stats = [
    { label: "Total Sistem", value: sistemInformasi.length, color: "bg-orange-700" },
    { label: "Sistem Aktif", value: sistemInformasi.filter(s => s.status === "aktif").length, color: "bg-green-700" },
    { label: "Maintenance", value: sistemInformasi.filter(s => s.status === "maintenance").length, color: "bg-yellow-700" },
    { label: "Kategori", value: categories.length - 1, color: "bg-blue-700" }
  ];

  return (
    <div className="min-h-screen mx-auto max-w-7xl">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-20 pt-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl edu-vic-wa-nt-hand  md:text-6xl font-bold mb-6 tracking-tight">
              Portal Sistem<br />Informasi
            </h1>
            <p className="text-md md:text-xl roboto-mono text-gray-300 mb-8 max-w-2xl">
              Akses mudah ke semua sistem informasi Puskesmas dalam satu platform terpadu
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Cari sistem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 border border-gray-800 px-6 py-4 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500">
                ⌘
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${stat.color} border rounded-lg p-6 hover:border-gray-700 transition-colors`}>
                <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm text-gray-200 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      {/* <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-white text-black"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                }`}
              >
                <span className="mr-2 text-xs">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Systems Grid */}
      <div className="container mx-auto px-4 py-16">
        {filteredSistem.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6 opacity-20">◯</div>
            <h3 className="text-2xl font-semibold mb-2">
              Sistem tidak ditemukan
            </h3>
            <p className="text-gray-500">
              Coba gunakan kata kunci lain atau pilih kategori berbeda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSistem.map((sistem) => (
              <a
                key={sistem.id}
                href={sistem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-white transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  {/* <div className="text-4xl">{sistem.icon}</div> */}
                  {
                    sistem.img == null ? 
                    (
                      <div className="text-white">
                        <img src="./assets/logo-puskesmas.png" alt="" />
                        <p>Image</p>
                      </div>
                    ) : 
                    (
                        // <img className="w-40" src={sistem.img} alt={sistem.name} />
                        null
                    )
                  }
                  {/* <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    sistem.status === "aktif" 
                      ? "bg-white text-black" 
                      : "bg-gray-800 text-gray-400 border border-gray-700"
                  }`}>
                    {sistem.status === "aktif" ? "● Aktif" : "● Maintenance"}
                  </span> */}
                </div>

                <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  {sistem.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4 font-medium">
                  {sistem.fullName}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {sistem.description}
                </p>
                
                <div className="flex items-center text-sm text-white group-hover:translate-x-1 transition-transform">
                  Buka Sistem
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Footer Help */}
      <div className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Butuh Bantuan?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Jika mengalami kesulitan mengakses sistem informasi, silakan hubungi admin atau bagian IT
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=6282255187877&text=Halo%2C+aplikasi+saya+bermasalah.&type=phone_number&app_absent=0"
                className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Hubungi Admin
              </a>
              <a
                href="/informasi/faq"
                className="px-8 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg font-medium hover:border-gray-700 transition-colors"
              >
                Lihat FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}