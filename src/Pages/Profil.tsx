"use client";
import { useState } from "react";
// import Link from "next/link";

export default function ProfilPuskesmas() {
  const [activeTab, setActiveTab] = useState("tentang");

  const tabs = [
    { id: "tentang", label: "Tentang Kami", icon: "🏥" },
    { id: "visi-misi", label: "Visi & Misi", icon: "🎯" },
    { id: "struktur", label: "Struktur Organisasi", icon: "👥" },
    { id: "fasilitas", label: "Fasilitas", icon: "🏢" }
  ];

//   const stats = [
//     { label: "Tenaga Medis", value: "45+", icon: "👨‍⚕️" },
//     { label: "Pasien/Bulan", value: "2,500+", icon: "🏥" },
//     { label: "Tahun Beroperasi", value: "25+", icon: "📅" },
//     { label: "Layanan", value: "15+", icon: "💉" }
//   ];

  const fasilitas = [
    { name: "Ruang Poli Umum", desc: "Pelayanan kesehatan umum" },
    { name: "Ruang KIA/KB", desc: "Kesehatan ibu dan anak" },
    { name: "Ruang Gigi", desc: "Pelayanan kesehatan gigi" },
    { name: "Laboratorium", desc: "Pemeriksaan lab lengkap" },
    { name: "Farmasi", desc: "Apotek dan obat-obatan" },
    { name: "Ruang IGD", desc: "Instalasi gawat darurat" },
    // { name: "Ruang Rawat Inap", desc: "20 tempat tidur" },
    // { name: "Ambulance", desc: "Layanan 24 jam" }
  ];

  const strukturOrganisasi = [
    { jabatan: "Kepala Puskesmas", nama: "drg. Desianti", foto: "👨‍⚕️" },
    { jabatan: "Kepala TU", nama: "Yeni Nurlaili, S.KM", foto: "👩‍💼" },
    { jabatan: "Koordinator Pelayanan", nama: "-", foto: "👨‍⚕️" },
    { jabatan: "Koordinator UKM", nama: "-", foto: "👩‍💼" }
  ];

  return (
    <div className="min-h-screen text-white mx-auto max-w-7xl py-16">
      {/* Hero Section */}
      <div className="relative  from-gray-900 to-black border-b border-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wider edu-vic-wa-nt-hand text-black dark:text-white">
              Profil UPTD<br />Puskesmas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unit Pelaksana Teknis Daerah Puskesmas yang berkomitmen memberikan pelayanan kesehatan berkualitas untuk masyarakat
            </p>
          </div>
        </div>
      </div>

      {/* Stats
      <div className="border-b border-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Tabs */}
      <div className="border-b border-gray-900 sticky mb-4 top-0 bg-black/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-10">
        {activeTab === "tentang" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Tentang UPTD Puskesmas</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  UPTD Puskesmas merupakan unit pelaksana teknis daerah yang menyelenggarakan pelayanan kesehatan tingkat pertama secara menyeluruh, terpadu, dan berkesinambungan. Puskesmas kami telah melayani masyarakat dengan dedikasi penuh untuk meningkatkan derajat kesehatan masyarakat.
                </p>
                <p>
                  Dengan didukung oleh tenaga kesehatan profesional dan fasilitas yang memadai, kami berkomitmen untuk memberikan pelayanan kesehatan yang berkualitas, terjangkau, dan merata bagi seluruh lapisan masyarakat.
                </p>
        
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span>Senin - Kamis</span>
                  <span className="font-medium text-white">07:30 - 12:30 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span>Jumat</span>
                  <span className="font-medium text-white">07:30 - 12:30 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span>Sabtu</span>
                  <span className="font-medium text-white">07:30 - 12:30 WIB</span>
                </div>
                {/* <div className="flex justify-between items-center py-2">
                  <span>IGD (Gawat Darurat)</span>
                  <span className="font-medium text-white">24 Jam</span>
                </div> */}
              </div>
            </div>
          </div>
        )}

        {activeTab === "visi-misi" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Visi</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <p className="text-xl leading-relaxed text-gray-300">
                   -
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Misi</h2>
              {/* <div className="space-y-4">
                {[
                  "Menyelenggarakan pelayanan kesehatan yang berkualitas, aman, dan terjangkau",
                  "Meningkatkan kompetensi dan profesionalisme tenaga kesehatan",
                  "Mengembangkan sistem manajemen mutu pelayanan kesehatan",
                  "Memberdayakan masyarakat dalam upaya kesehatan berbasis komunitas",
                  "Mewujudkan kemitraan dengan berbagai pihak untuk meningkatkan derajat kesehatan masyarakat"
                ].map((misi, idx) => (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white text-black w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-gray-300">{misi}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              -
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Nilai-Nilai</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Profesional", icon: "⭐" },
                  { label: "Integritas", icon: "🤝" },
                  { label: "Peduli", icon: "❤️" },
                  { label: "Inovatif", icon: "💡" },
                  { label: "Kolaboratif", icon: "👥" },
                  { label: "Berorientasi Hasil", icon: "🎯" }
                ].map((nilai, idx) => (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
                    <div className="text-3xl mb-3">{nilai.icon}</div>
                    <div className="font-semibold">{nilai.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "struktur" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">Struktur Organisasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strukturOrganisasi.map((person, idx) => (
                <div key={idx} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-3xl shrink-0">
                      {person.foto}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">{person.jabatan}</div>
                      <div className="font-bold text-lg">{person.nama}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Tim Kesehatan</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Dokter Umum", count: "-" },
                  { label: "Dokter Gigi", count: "-" },
                  { label: "Perawat", count: "-" },
                  { label: "Bidan", count: "-" },
                  { label: "Apoteker", count: "-" },
                  { label: "Analis Lab", count: "-" },
                  { label: "Nutrisionis", count: "-" },
                  { label: "Tenaga Administrasi", count: "-" }
                ].map((tim, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold mb-1">{tim.count}</div>
                    <div className="text-sm text-gray-500">{tim.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "fasilitas" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">Fasilitas & Sarana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fasilitas.map((item, idx) => (
                <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg group-hover:text-gray-300 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-2xl">✓</div>
                  </div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Peralatan Medis</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div>• EKG</div>
                <div>• USG</div>
                <div>• X-Ray</div>
                <div>• Nebulizer</div>
                <div>• Autoclave</div>
                <div>• Microscope</div>
                <div>• Dental Unit</div>
                <div>• Patient Monitor</div>
                <div>• Oxygen Concentrator</div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}