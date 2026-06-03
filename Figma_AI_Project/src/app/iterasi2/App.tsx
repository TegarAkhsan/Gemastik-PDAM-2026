import React, { useState } from 'react';
import {
  Camera, Search, Bell, Droplet, FileText, Calendar, CalendarCheck, Receipt, Layers,
  ChevronDown, Home as HomeIcon, Megaphone, MessageSquare, User, Clock, Edit, FilePlus,
  LineChart, PhoneCall, Smartphone, HelpCircle, Pointer, History, Activity,
  Stethoscope, Info, Paperclip, MapPin, AlertCircle, Plus, ChevronRight, LogOut,
  Chrome, PenSquare, Phone, ClipboardCheck, ChevronLeft, ArrowRight, Image as ImageIcon,
  Truck, Settings, CircleDollarSign, Wrench, ClipboardList, Hourglass, Crosshair, BarChart3
} from 'lucide-react';
import '../styles/globals.css';

// --- HOME COMPONENT ---
function Home({ togglePopup, setActiveTab }: { togglePopup: (id: string) => void, setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="top-wave-bg">
        <svg viewBox="0 0 375 140" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,80 C120,150 250,150 375,50 L375,0 L0,0 Z" fill="#e6f2fb" />
        </svg>
      </div>

      <div className="relative z-10 pt-12 px-6 flex justify-between items-start mb-8">
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 border border-[#a3cc39] rounded-[40%] flex items-center justify-center bg-white shadow-sm overflow-hidden">
            <Droplet className="text-[#2a81d4] w-6 h-6" />
          </div>
          <div>
            <p className="text-[8px] text-gray-500 leading-[0.8] mb-0.5 tracking-wide font-semibold">PERUMDA AIR MINUM</p>
            <h1 className="text-gray-800 font-extrabold text-[14px] leading-none mb-0.5 tracking-tight">SURYA SEMBADA</h1>
            <p className="text-[8px] text-gray-500 leading-none tracking-wide font-semibold">KOTA SURABAYA</p>
          </div>
        </div>

        <div className="flex gap-3 mt-1">
          <button className="w-10 h-10 rounded-[14px] border border-gray-100 flex items-center justify-center text-[#2a81d4] shadow-sm bg-white hover:bg-gray-50 transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-[14px] border border-gray-100 flex items-center justify-center text-[#2a81d4] shadow-sm bg-white hover:bg-gray-50 transition relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 relative z-10">

        <div className="hero-card p-5 mb-8 text-white relative">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="text-blue-100 text-[10px] uppercase tracking-widest font-bold mb-1">Selamat Siang, <span className="font-mono bg-black/10 px-1.5 py-0.5 rounded text-[9px] ml-1">ID: 1234 5678</span></p>
                <h3 className="font-black text-xl leading-tight">Savannah Nguyen 👋</h3>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-[10px] p-1.5 px-2.5 flex items-center gap-1.5 border border-white/20">
                <Droplet className="text-blue-100 w-3 h-3" />
                <span className="font-extrabold text-[10px] uppercase tracking-wider">Aktif</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 flex flex-col gap-1.5 justify-center cursor-pointer hover:bg-white/15 transition" onClick={() => setActiveTab('bayar_tagihan')}>
                <p className="text-blue-50 text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider"><FileText className="w-3 h-3 opacity-80" /> Tagihan</p>
                <h3 className="font-extrabold text-[17px] tracking-tight">Rp 25.000</h3>
              </div>
              <div className="glass-panel p-3 flex flex-col gap-1.5 justify-center cursor-pointer hover:bg-white/15 transition" onClick={() => togglePopup('popup-catat-meter')}>
                <p className="text-blue-50 text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider"><Camera className="w-3 h-3 opacity-80" /> Catat Meter</p>
                <h3 className="font-extrabold text-[17px] text-[#ffd166] tracking-tight">3 Hari Lagi</h3>
              </div>
              <div className="glass-panel p-3 flex flex-col gap-1.5 col-span-2 cursor-pointer hover:bg-white/20 transition" onClick={() => setActiveTab('pengaduan')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-blue-100">
                    <MessageSquare className="w-3 h-3 opacity-80" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Pengaduan</span>
                  </div>
                  <span className="bg-white/20 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">Sedang Diproses</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-[#ffd166] rounded-full animate-pulse shadow-[0_0_0_3px_rgba(255,209,102,0.2)]"></span>
                  <h3 className="font-bold text-sm">1 Laporan: Pipa Bocor</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-6 bg-gradient-to-r from-[#e6f4ff] to-blue-50 border border-blue-100 rounded-[16px] p-4 shadow-sm relative overflow-hidden cursor-pointer group"
          onClick={() => togglePopup('popup-catat-meter')}
        >
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-100/50 to-transparent"></div>
          <div className="flex items-start justify-between relative z-10 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2a81d4] shadow-sm border border-blue-50 group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-extrabold text-[#2a81d4] uppercase tracking-widest mb-0.5">Jadwal Anda</p>
                <h4 className="text-[13px] font-black text-blue-900 leading-tight">Catat Meter Aktif</h4>
              </div>
            </div>
            <div className="bg-green-500 text-white text-[9px] font-extrabold px-2.5 py-1.5 rounded-lg shadow-sm animate-pulse flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div> 15 - 20 Juli
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex justify-between text-[10px] font-bold text-blue-900 mb-1.5">
              <span>Sisa Waktu: <span className="text-orange-600 font-extrabold">3 Hari 14 Jam</span></span>
            </div>
            <div className="w-full bg-blue-200/50 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-[#2a81d4] to-[#47c4f4] h-1.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p className="text-[10px] text-gray-500 font-bold text-center mt-0.5">Hari ke-2 dari 5</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="font-extrabold text-gray-800 text-base">Layanan Kami</h3>
          <a href="#" className="text-gray-400 text-[12px] font-bold hover:text-blue-600 transition">See all</a>
        </div>

        <div className="grid grid-cols-4 gap-y-5 gap-x-2 mb-6 pt-2">
          <div className="menu-item" onClick={() => setActiveTab('bayar_tagihan')}>
            <div className="menu-icon-box"><Receipt className="w-6 h-6" /></div>
            <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">Bayar<br />Tagihan</span>
          </div>
          <div className="menu-item" onClick={() => togglePopup('popup-catat-meter')}>
            <div className="menu-icon-box"><Camera className="w-6 h-6" /></div>
            <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">Catat<br />Meter</span>
          </div>
          <div className="menu-item" onClick={() => setActiveTab('info_gangguan')}>
            <div className="menu-icon-box"><Droplet className="w-6 h-6" /></div>
            <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">Info<br />Gangguan</span>
          </div>
          <div className="menu-item" onClick={() => togglePopup('popup-menu-lainnya')}>
            <div className="menu-icon-box"><Layers className="w-6 h-6" /></div>
            <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">Menu<br />Lainnya</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 px-1 mt-2">
          <h3 className="font-extrabold text-gray-800 text-base">Riwayat Pemakaian</h3>
          <div className="relative">
            <select defaultValue="6 Bulan" className="appearance-none bg-gray-100 text-gray-600 text-[10px] font-semibold px-3 py-1.5 pr-6 rounded-md border-none outline-none cursor-pointer">
              <option>1 Bulan</option>
              <option>3 Bulan</option>
              <option>6 Bulan</option>
              <option>1 Tahun</option>
            </select>
            <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-gray-50 mb-10">
          {/* NEW: Insight Block */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <p className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest mb-1.5">Pemakaian Bulan Ini</p>
              <div className="flex items-end gap-2.5">
                <h3 className="text-3xl font-extrabold text-gray-800 leading-none">25 <span className="text-sm font-bold text-gray-400">m³</span></h3>
                <div className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 mb-0.5 border border-red-100 shadow-sm">
                  ↑ 12%
                </div>
              </div>
              <p className="text-[9px] text-gray-400 font-medium mt-1.5">dibanding bulan lalu</p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl px-3 py-2 border border-gray-100 flex flex-col items-end shadow-sm">
              <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider mb-0.5">Normal</span>
              <span className="text-[12px] font-extrabold text-[#2a81d4]">18-24 m³</span>
            </div>
          </div>

          <div className="flex items-end justify-between h-32 mb-2 gap-2 mt-4">
            {['Jan', 'Feb', 'Mar', 'Apr', 'Mei'].map((month, i) => (
              <div key={month} className="flex flex-col items-center gap-1.5 flex-1 group h-full justify-end">
                <span className="text-[9px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">{12 + i * 2}m³</span>
                <div className="w-full bg-blue-50 rounded-t-md relative overflow-hidden group-hover:bg-[#4798e1] transition-colors cursor-pointer" style={{ height: `${40 + i * 5}%` }}></div>
                <span className="text-[10px] font-semibold text-gray-400">{month}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1.5 flex-1 group h-full justify-end">
              <span className="text-[9px] font-bold text-[#2a81d4]">25m³</span>
              <div className="w-full bg-gradient-to-t from-[#2a81d4] to-[#4798e1] rounded-t-md relative overflow-hidden shadow-md cursor-pointer" style={{ height: '85%' }}></div>
              <span className="text-[10px] font-extrabold text-[#2a81d4]">Jun</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#2a81d4]"></div>
              <span className="text-[10px] text-gray-500 font-medium">Bulan Ini (Tercatat)</span>
            </div>
            <p className="text-[10px] font-semibold text-gray-500">Rata-rata: <span className="font-extrabold text-gray-700">17.6m³/bln</span></p>
          </div>
        </div>

      </div>
    </>
  );
}

// --- BAYAR TAGIHAN COMPONENT ---
function BayarTagihan({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Bayar Tagihan</h1>
      </div>

      <div className="flex-1 px-5 pt-4 pb-8 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
        <div className="bg-gray-100/80 p-1.5 rounded-[18px] flex items-center mx-auto w-full max-w-[280px] border border-gray-200/50">
          <button className="flex-1 bg-white text-[#2a81d4] text-[11px] font-bold py-2.5 rounded-2xl shadow-sm transition">Rekening</button>
          <button className="flex-1 text-gray-500 hover:text-gray-700 text-[11px] font-semibold py-2.5 rounded-2xl transition">Non Rekening</button>
        </div>

        <div className="modern-card p-4 mt-2">
          <div className="relative mb-3">
            <select className="w-full appearance-none bg-gray-50 border border-gray-100 text-gray-800 text-[12px] font-bold px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner">
              <option>Pilih nomor pelanggan</option>
            </select>
            <ChevronDown className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-[#2a81d4] text-white text-[12px] font-bold px-4 py-3 rounded-xl flex justify-between items-center shadow-md shadow-blue-500/20">
              <span>Pilih periode</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-[#84cc16] hover:bg-[#65a30d] text-white text-[12px] font-extrabold px-5 py-3 rounded-xl transition shadow-md shadow-green-500/20">
              Cek Tagihan
            </button>
          </div>
        </div>

        <div className="modern-card p-5 mt-2 relative">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-[#a3cc39] rounded-[40%] flex items-center justify-center bg-white shadow-sm overflow-hidden">
                <Droplet className="text-[#2a81d4] w-4 h-4" />
              </div>
              <div>
                <p className="text-[5px] text-gray-500 leading-[0.8] mb-0.5 tracking-wide font-semibold">PERUMDA AIR MINUM</p>
                <h1 className="text-gray-800 font-extrabold text-[8px] leading-none mb-0.5 tracking-tight">SURYA SEMBADA</h1>
                <p className="text-[5px] text-gray-500 leading-none tracking-wide font-semibold">KOTA SURABAYA</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[90px_auto] gap-y-1.5 gap-x-3 text-[11px] font-bold text-gray-600 mb-5 pl-2">
            <div className="text-gray-500">Periode :</div><div className="text-gray-800">-</div>
            <div className="text-gray-500">Periode Bayar :</div><div className="text-gray-800">-</div>
            <div className="text-gray-500">Kode tarif :</div><div className="text-gray-800">-</div>
          </div>

          <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm mb-4">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="py-2.5 px-4 text-left font-bold">Meter Air</th>
                  <th className="py-2.5 px-4 text-right font-bold">Pemakaian (m³)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 bg-white">
                <tr className="border-b border-gray-50">
                  <td className="py-2.5 px-4 border-r border-gray-50">Meter Lalu</td>
                  <td className="py-2.5 px-4 text-right">0</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-2.5 px-4 border-r border-gray-50">Meter Kini</td>
                  <td className="py-2.5 px-4 text-right">0</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 border-r border-gray-50 font-semibold text-gray-800">Total Pemakaian</td>
                  <td className="py-2.5 px-4 text-right font-semibold text-gray-800">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mb-6">
            <a href="#" className="text-[10px] text-[#2a81d4] font-bold underline decoration-blue-200 underline-offset-2">Lihat detail tagihan</a>
          </div>

          <div className="flex justify-between items-center bg-[#f8fafc] p-4 rounded-xl border border-gray-100">
            <span className="text-gray-500 text-[11px] font-extrabold uppercase tracking-widest">Total Tagihan</span>
            <span className="text-gray-900 text-[16px] font-black">Rp. 0</span>
          </div>
        </div>
      </div>
    </>
  );
}

// --- INFO GANGGUAN COMPONENT ---
function InfoGangguan({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 pt-5 pb-4 flex flex-col gap-4 border-b border-black/5">
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100 flex-shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight flex-1">Gangguan Air</h1>
        </div>

        <div className="relative w-full">
          <input type="text" placeholder="Cari Info Gangguan" className="w-full bg-gray-100 text-gray-800 text-[12px] font-bold px-5 py-3.5 pr-12 rounded-2xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 focus:bg-white transition-all shadow-inner" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#2a81d4] text-white rounded-xl flex items-center justify-center shadow-md cursor-pointer hover:bg-[#1f6db8] transition">
            <Search className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 pt-4 pb-10 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <div className="modern-card p-5">
          <p className="text-[#2a81d4] font-extrabold text-[12px] mb-2">05 Januari 2026 13:53</p>
          <p className="text-gray-700 text-[12px] leading-relaxed mb-3 font-medium">Informasi Gangguan Air Perbaikan Pipa Diameter 250mm di Raya Simogunung</p>
          <div className="flex flex-wrap gap-1 mb-4">
            <span className="text-[#47c4f4] text-[11px] font-bold hover:underline cursor-pointer">#beritapdamsby</span>
            <span className="text-[#47c4f4] text-[11px] font-bold hover:underline cursor-pointer">#infogangguanairpdamsby</span>
          </div>
          <div className="bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 w-full h-48 group overflow-hidden cursor-pointer">
            <ImageIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
          </div>
        </div>

        <div className="modern-card p-5">
          <p className="text-[#2a81d4] font-extrabold text-[12px] mb-2">21 Januari 2025 02:50</p>
          <p className="text-gray-700 text-[12px] leading-relaxed mb-3 font-medium">
            Informasi Gangguan Air Senin, 21 Juli 2025<br /><br />
            Halo <span className="text-[#47c4f4] font-bold">#SobatAir</span> Surabaya!<br />
            Pada Senin, 21 Juli 2025 pukul 10.00 WIB hingga selesai (estimasi pekerjaan +/- 4 jam), akan dilaksanakan Pekerjaan perbaikan pipa bocor diameter 150mm di Jl Kebraon Gang Tomat, Pelayanan distribusi air ke pelanggan akan mengalami kendala (air mengecil sampai dengan tidak keluar) selama proses pekerjaan tersebut.<br /><br />
            Daerah Terdampak :
          </p>
          <div className="bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 w-full h-48 group overflow-hidden cursor-pointer">
            <ImageIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
          </div>
        </div>
      </div>
    </>
  );
}

// --- LAYANAN KOMERSIAL PAGE COMPONENT ---
function LayananKomersial({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4 border-b border-black/5">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Layanan Komersial</h1>
      </div>

      <div className="flex-1 px-5 pt-6 pb-8 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="modern-card p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="w-20 h-14 relative flex items-end justify-center">
              <Truck className="text-[#2a81d4] w-12 h-12" />
              <Droplet className="text-[#47c4f4] w-6 h-6 absolute top-0 right-0" />
            </div>
            <span className="text-[12px] font-extrabold text-gray-700 leading-tight">Tangki Air</span>
          </div>

          <div className="modern-card p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="w-20 h-14 relative flex items-center justify-center">
              <Wrench className="text-gray-400 w-12 h-12" />
              <Settings className="text-red-500 w-6 h-6 absolute top-1 left-2" />
            </div>
            <span className="text-[12px] font-extrabold text-gray-700 leading-tight">Peralatan Air</span>
          </div>
        </div>

        <div className="modern-card p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
          <div className="w-24 h-24 bg-[#2a81d4] rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
            <Droplet className="text-white w-14 h-14 opacity-40" />
            <div className="absolute bottom-2 right-2 bg-[#84cc16] text-white text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
              Rp
            </div>
          </div>
          <span className="text-[13px] font-extrabold text-gray-700">Pembelian Air dengan Tangki Sendiri</span>
        </div>
      </div>
    </>
  );
}

// --- JADWAL CATAT METER ---
function JadwalCatatMeter({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Jadwal Catat Meter</h1>
      </div>

      <div className="flex-1 px-5 pt-4 pb-8 flex flex-col relative z-10 gap-5">
        <div className="modern-card p-4">
          <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Pilih Pelanggan</label>
          <div className="relative">
            <select className="w-full appearance-none bg-gray-50 border-0 text-gray-800 text-[13px] font-bold px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner">
              <option>Nomor Pelanggan (ID: 1234 5678)</option>
            </select>
            <ChevronDown className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center mt-12 text-center">
          <div className="mb-6 relative">
            <div className="w-32 h-32 bg-gradient-to-tr from-blue-50 to-[#e6f4ff] rounded-full flex items-center justify-center shadow-inner mx-auto border border-white">
              <ClipboardList className="w-16 h-16 text-[#2a81d4] opacity-80" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md border border-gray-100">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 shadow-sm">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

          <h3 className="text-[16px] font-extrabold text-gray-800 mb-2">Belum ada pelanggan dipilih</h3>
          <p className="text-[12px] font-medium text-gray-500 mb-8 leading-relaxed max-w-[240px] mx-auto">
            Pilih nomor pelanggan di atas untuk melihat jadwal pencatatan meter Anda.
          </p>

          <button className="bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[13px] font-extrabold py-3.5 px-6 rounded-2xl shadow-[0_8px_20px_rgba(42,129,212,0.25)] transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> Tambah Pelanggan
          </button>
        </div>
      </div>
    </>
  );
}

// --- CATAT METER MANDIRI ---
function CatatMeterMandiri({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [subTab, setSubTab] = useState('catat');

  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Catat Meter Mandiri</h1>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pt-4 pb-10 flex flex-col gap-5">
        <div className="bg-gray-100/80 p-1.5 rounded-[18px] flex items-center mx-auto w-[280px] border border-gray-200/50">
          <button
            className={`flex-1 text-[11px] font-bold py-2.5 rounded-2xl transition ${subTab === 'catat' ? 'bg-white text-[#2a81d4] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setSubTab('catat')}
          >
            Catat Meter
          </button>
          <button
            className={`flex-1 text-[11px] font-bold py-2.5 rounded-2xl transition ${subTab === 'riwayat' ? 'bg-white text-[#2a81d4] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setSubTab('riwayat')}
          >
            Riwayat
          </button>
        </div>

        {subTab === 'catat' ? (
          <div className="flex flex-col gap-5 animate-fade-in">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 text-orange-600">
                <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center">
                  <Hourglass className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-orange-500 mb-0.5">Sisa Waktu</span>
                  <div className="text-sm font-extrabold text-orange-800 leading-none">3 Hari 14 Jam</div>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-[#2a81d4] border border-[#2a81d4] text-[13px] font-extrabold py-3.5 rounded-2xl flex justify-center items-center gap-2 hover:bg-blue-50 transition-all mt-1">
              <Info className="w-4 h-4" />
              Lihat Petunjuk
            </button>

            {/* Wizard Stepper */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col mt-2">
              {/* Progress Circles & Line */}
              <div className="relative flex justify-between items-center px-4 mb-2">
                {/* Absolute Line (Background) */}
                <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                {/* Active Line (Foreground) */}
                <div className="absolute top-1/2 left-8 w-[30%] h-1 bg-gradient-to-r from-[#2a81d4] to-[#47c4f4] -translate-y-1/2 z-0 transition-all duration-500 rounded-r-full shadow-[0_0_8px_rgba(71,196,244,0.6)]"></div>

                {/* Circles */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a81d4] to-[#47c4f4] text-white flex items-center justify-center font-extrabold text-[12px] relative z-10 shadow-md ring-4 ring-white transition-transform transform hover:scale-110">1</div>
                <div className="w-8 h-8 rounded-full bg-white text-[#2a81d4] border-2 border-[#2a81d4] flex items-center justify-center font-extrabold text-[12px] relative z-10 shadow-sm ring-4 ring-white animate-pulse">2</div>
                <div className="w-8 h-8 rounded-full bg-white text-gray-300 border-2 border-gray-200 flex items-center justify-center font-extrabold text-[12px] relative z-10 ring-4 ring-white">3</div>
                <div className="w-8 h-8 rounded-full bg-white text-gray-300 border-2 border-gray-200 flex items-center justify-center font-extrabold text-[12px] relative z-10 ring-4 ring-white">4</div>
              </div>

              {/* Text Labels */}
              <div className="flex justify-between items-center text-[9px] font-extrabold text-gray-400 uppercase tracking-widest px-0">
                <span className="text-[#2a81d4] text-center w-12 ml-2">Pelanggan</span>
                <span className="text-[#2a81d4] text-center w-12">Lokasi</span>
                <span className="text-center w-12">Foto</span>
                <span className="text-center w-12 mr-2">Selesai</span>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                <span className="inline-block bg-blue-50 text-[#2a81d4] text-[10px] font-extrabold px-3 py-1.5 rounded-full">
                  Langkah 2 dari 4: Verifikasi Lokasi Anda
                </span>
              </div>
            </div>

            <div className="modern-card p-4">
              <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Pilih Pelanggan</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border-0 text-gray-800 text-[13px] font-bold px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner">
                  <option>Nomor Pelanggan (ID: 1234 5678)</option>
                </select>
                <ChevronDown className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
              </div>
            </div>

            <div className="modern-card p-4">
              <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-3">Lokasi Anda</label>

              <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-4 flex items-start gap-3 shadow-sm">
                <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </div>
                <p className="text-[11px] leading-snug font-medium text-red-700">
                  Lokasi Anda tidak terbaca. Silakan aktifkan GPS/Lokasi di pengaturan HP Anda dan <a href="#" className="font-extrabold underline text-red-800 hover:text-red-900 transition">Deteksi Ulang</a>.
                </p>
              </div>

              <div className="relative w-full h-[180px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200/50">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.openstreetmap.org/export/embed.html?bbox=112.730,-7.260,112.740,-7.250&amp;layer=mapnik&amp;marker=-7.255,112.735">
                </iframe>

                <div className="absolute right-3 top-3 bg-white/90 backdrop-blur w-9 h-9 rounded-full shadow-md border border-gray-100 flex items-center justify-center text-[#2a81d4] cursor-pointer hover:bg-blue-50 transition">
                  <Crosshair className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="modern-card p-4">
              <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-1.5">Foto Meteran</label>
              <p className="text-[10px] text-gray-500 mb-4 leading-relaxed">Pastikan angka merah dan hitam pada meteran terlihat jelas dan foto diambil di tempat terang.</p>

              <div className="flex gap-3">
                <div className="flex-1 bg-[#f8fbff] border-2 border-dashed border-[#b3d4f5] rounded-2xl flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-[#eaf4ff] hover:border-[#2a81d4] transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2a81d4] shadow-sm mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#2a81d4]">Ambil Foto</span>
                </div>

                <div className="flex-1 bg-gray-50 border border-gray-200/60 rounded-2xl flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-gray-100 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-500 shadow-sm mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold text-gray-600">Buka Galeri</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 animate-fade-in">
            <h3 className="font-extrabold text-gray-800 text-[14px] px-1 mt-1">Riwayat Pencatatan Anda</h3>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <span className="bg-green-100 text-green-600 text-[9px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Terverifikasi</span>
                  <h4 className="text-[13px] font-extrabold text-gray-800">Periode Juni 2026</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">ID Pelanggan: 1234 5678</p>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-black text-[#2a81d4]">25 m³</span>
                  <p className="text-[9px] font-bold text-gray-400 mt-0.5">Angka Meter: 1025</p>
                </div>
              </div>
              <hr className="border-gray-50" />
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-gray-400" /> 20 Jun 2026, 10:30 WIB</span>
                <span className="flex items-center gap-1 text-[#2a81d4] font-bold cursor-pointer hover:underline">Lihat Foto <ChevronRight className="w-3 h-3" /></span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <span className="bg-green-100 text-green-600 text-[9px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Terverifikasi</span>
                  <h4 className="text-[13px] font-extrabold text-gray-800">Periode Mei 2026</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">ID Pelanggan: 1234 5678</p>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-black text-[#2a81d4]">22 m³</span>
                  <p className="text-[9px] font-bold text-gray-400 mt-0.5">Angka Meter: 1000</p>
                </div>
              </div>
              <hr className="border-gray-50" />
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-gray-400" /> 19 Mei 2026, 09:15 WIB</span>
                <span className="flex items-center gap-1 text-[#2a81d4] font-bold cursor-pointer hover:underline">Lihat Foto <ChevronRight className="w-3 h-3" /></span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <span className="bg-green-100 text-green-600 text-[9px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Terverifikasi</span>
                  <h4 className="text-[13px] font-extrabold text-gray-800">Periode April 2026</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">ID Pelanggan: 1234 5678</p>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-black text-[#2a81d4]">20 m³</span>
                  <p className="text-[9px] font-bold text-gray-400 mt-0.5">Angka Meter: 978</p>
                </div>
              </div>
              <hr className="border-gray-50" />
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-gray-400" /> 18 Apr 2026, 11:20 WIB</span>
                <span className="flex items-center gap-1 text-[#2a81d4] font-bold cursor-pointer hover:underline">Lihat Foto <ChevronRight className="w-3 h-3" /></span>
              </div>
            </div>

            <div className="text-center mt-2 mb-4">
              <button className="text-[11px] font-bold text-gray-400 hover:text-[#2a81d4] transition">Tampilkan Lebih Banyak</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// --- SLIP CATAT METER ---
function SlipCatatMeter({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Slip Catat Meter</h1>
      </div>

      <div className="flex-1 px-5 pt-4 pb-8 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <div className="modern-card p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Detail Slip</h2>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-[#a3cc39] rounded-[40%] flex items-center justify-center bg-white shadow-sm overflow-hidden">
                <Droplet className="text-[#2a81d4] w-4 h-4" />
              </div>
              <div>
                <p className="text-[5px] text-gray-500 leading-[0.8] mb-0.5 tracking-wide font-semibold">PERUMDA AIR MINUM</p>
                <h1 className="text-gray-800 font-extrabold text-[8px] leading-none mb-0.5 tracking-tight">SURYA SEMBADA</h1>
                <p className="text-[5px] text-gray-500 leading-none tracking-wide font-semibold">KOTA SURABAYA</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[100px_auto] gap-y-2 gap-x-3 text-[11px] font-bold text-gray-600 mb-6 bg-gray-50 p-3 rounded-xl">
            <div className="text-right text-gray-400">Periode :</div><div className="text-gray-800">-</div>
            <div className="text-right text-gray-400">Tanggal catat :</div><div className="text-gray-800">-</div>
            <div className="text-right text-gray-400">Kode tarif :</div><div className="text-gray-800">-</div>
          </div>

          <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="py-3 px-4 text-left font-extrabold">Meter Air</th>
                  <th className="py-3 px-4 text-right font-extrabold">Pemakaian (m³)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 bg-white">
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4 border-r border-gray-50 font-semibold">Meter Lalu</td>
                  <td className="py-3 px-4 text-right font-bold text-gray-800">0</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4 border-r border-gray-50 font-semibold">Meter Kini</td>
                  <td className="py-3 px-4 text-right font-bold text-gray-800">0</td>
                </tr>
                <tr className="bg-[#f8fbff]">
                  <td className="py-3 px-4 border-r border-gray-50 font-extrabold text-[#2a81d4]">Total Pemakaian</td>
                  <td className="py-3 px-4 text-right font-extrabold text-[#2a81d4]">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="modern-card p-5 mt-auto">
          <div className="relative mb-4">
            <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Pilih Pelanggan</label>
            <select className="w-full appearance-none bg-gray-50 border-0 text-gray-800 text-[13px] font-bold px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner">
              <option>Nomor Pelanggan</option>
            </select>
            <ChevronDown className="text-gray-400 absolute right-4 bottom-4 pointer-events-none w-4 h-4" />
          </div>

          <div className="mb-5">
            <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Periode</label>
            <button className="w-full bg-[#f8fbff] text-[#2a81d4] text-[13px] font-extrabold px-4 py-3.5 rounded-xl flex justify-between items-center shadow-inner border border-[#b3d4f5]">
              <span>Pilih periode</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button className="w-full bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[13px] font-extrabold py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(42,129,212,0.25)] hover:shadow-[0_4px_10px_rgba(42,129,212,0.2)] transition-all">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

// --- GRAFIK TAGIHAN ---
function GrafikTagihan({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Info Grafik</h1>
      </div>

      <div className="flex-1 px-5 pt-4 pb-8 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <div className="bg-gray-100/80 p-1.5 rounded-[18px] flex items-center mx-auto w-[280px] border border-gray-200/50">
          <button className="flex-1 bg-white text-[#2a81d4] text-[11px] font-bold py-2.5 rounded-2xl shadow-sm transition">Tagihan</button>
          <button className="flex-1 text-gray-500 hover:text-gray-700 text-[11px] font-semibold py-2.5 rounded-2xl transition">Pemakaian</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center mt-6">
          <div className="mb-5 text-[#2a81d4]">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center shadow-inner">
              <BarChart3 className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-[#dcfce7] text-[#166534] text-[11px] font-extrabold px-4 py-2.5 rounded-xl border border-[#bbf7d0] shadow-sm">
            Pilih nomor pelanggan dan periode
          </div>
        </div>

        <div className="modern-card p-5 mt-auto">
          <div className="relative mb-4">
            <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Pilih Pelanggan</label>
            <select className="w-full appearance-none bg-gray-50 border-0 text-gray-800 text-[13px] font-bold px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner">
              <option>Nomor Pelanggan</option>
            </select>
            <ChevronDown className="text-gray-400 absolute right-4 bottom-4 pointer-events-none w-4 h-4" />
          </div>

          <div className="mb-5">
            <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Periode</label>
            <button className="w-full bg-[#f8fbff] text-[#2a81d4] text-[13px] font-extrabold px-4 py-3.5 rounded-xl flex justify-between items-center shadow-inner border border-[#b3d4f5]">
              <span>Pilih periode</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button className="w-full bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[13px] font-extrabold py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(42,129,212,0.25)] hover:shadow-[0_4px_10px_rgba(42,129,212,0.2)] transition-all">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

// --- GRAFIK SMART METER ---
function GrafikSmartMeter({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      <div className="glass-header sticky top-0 z-50 px-6 py-4 flex items-center gap-4">
        <button onClick={() => setActiveTab('home')} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition shadow-sm border border-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Info Grafik Smart Meter</h1>
      </div>

      <div className="flex-1 px-5 pt-4 pb-8 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <div className="flex-1 flex flex-col items-center justify-center mt-6">
          <div className="mb-5 text-[#2a81d4]">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center shadow-inner">
              <BarChart3 className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-[#dcfce7] text-[#166534] text-[11px] font-extrabold px-4 py-2.5 rounded-xl border border-[#bbf7d0] shadow-sm text-center">
            Pilih nomor pelanggan dan<br />periode tanggal
          </div>
        </div>

        <div className="modern-card p-5 mt-auto">
          <div className="relative mb-4">
            <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Pilih Pelanggan</label>
            <select className="w-full appearance-none bg-gray-50 border-0 text-gray-800 text-[13px] font-bold px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner">
              <option>Nomor Pelanggan</option>
            </select>
            <ChevronDown className="text-gray-400 absolute right-4 bottom-4 pointer-events-none w-4 h-4" />
          </div>

          <div className="mb-5">
            <label className="block text-gray-400 text-[9px] font-extrabold uppercase tracking-widest mb-2">Pilih Tanggal</label>
            <input type="text" placeholder="Periode tanggal" className="w-full bg-gray-50 border-0 text-gray-800 text-[13px] font-bold px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#2a81d4]/30 transition shadow-inner" />
          </div>

          <button className="w-full bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[13px] font-extrabold py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(42,129,212,0.25)] hover:shadow-[0_4px_10px_rgba(42,129,212,0.2)] transition-all">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

// --- PASANG BARU COMPONENT ---
function PasangBaru() {
  const [subTab, setSubTab] = useState('baru');

  return (
    <>
      <div className="glass-header sticky top-0 z-40 px-6 py-4 flex items-center gap-4">
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Pasang Baru</h1>
      </div>

      <div className="flex-1 px-5 pt-4 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
        <div className="bg-gray-200/50 p-1 rounded-xl flex mb-2 w-full max-w-[320px] mx-auto">
          <button
            className={`flex-1 py-2.5 text-[11px] font-bold rounded-lg transition-all ${subTab === 'baru' ? 'bg-white text-[#47c4f4] shadow-sm font-extrabold' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setSubTab('baru')}
          >
            Pengajuan Pasang Baru
          </button>
          <button
            className={`flex-1 py-2.5 text-[11px] font-bold rounded-lg transition-all ${subTab === 'monitoring' ? 'bg-white text-[#47c4f4] shadow-sm font-extrabold' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setSubTab('monitoring')}
          >
            Monitoring
          </button>
        </div>

        {subTab === 'baru' ? (
          <div className="flex flex-col gap-4 animate-fade-in">
            <input type="text" placeholder="Nama Lengkap Sesuai KTP" className="modern-input" />
            <input type="text" placeholder="Nomor KTP" className="modern-input" />
            <input type="tel" placeholder="Nomor Telepon / WhatsApp" className="modern-input" />
            <textarea placeholder="Alamat Pemasangan" className="modern-input h-24 resize-none"></textarea>
            <button className="w-full bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[14px] font-extrabold py-3.5 rounded-2xl shadow-md transition-all mt-2">
              Kirim Pengajuan
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 animate-fade-in w-full h-full pt-2 pb-20">
            <div className="relative w-full max-w-[320px] mx-auto mb-2">
              <input type="text" defaultValue="PB-20230715-001" placeholder="Nomor pasang baru / nomor telepon Anda" className="w-full bg-white text-gray-800 text-[12px] font-bold px-5 py-4 pr-14 rounded-2xl outline-none focus:ring-2 focus:ring-[#47c4f4]/30 shadow-sm border border-gray-100 transition-all" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#47c4f4] hover:bg-[#20b2eb] text-white rounded-xl flex items-center justify-center shadow-md cursor-pointer transition">
                <Search className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="bg-blue-100 text-[#2a81d4] text-[9px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Dalam Proses</span>
                  <h3 className="text-[14px] font-extrabold text-gray-800">Pendaftaran Budi Santoso</h3>
                  <p className="text-[11px] text-gray-500 font-medium">No. Registrasi: PB-20230715-001</p>
                </div>
                <span className="text-[10px] font-bold text-gray-400">15 Jul</span>
              </div>

              <hr className="border-gray-100 my-4" />

              <h4 className="text-[12px] font-extrabold text-gray-800 mb-4">Status Pengajuan</h4>

              <div className="relative pl-3 space-y-6">
                <div className="absolute left-5 top-2 bottom-6 w-0.5 bg-gray-200"></div>
                <div className="absolute left-5 top-2 h-[75%] w-0.5 bg-[#47c4f4]"></div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#47c4f4] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                    <Activity className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-800 leading-none mb-1">Pengajuan Masuk</h5>
                    <p className="text-[10px] text-gray-500">Berkas pendaftaran diterima sistem.</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">15 Jul 2023, 08:30 WIB</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#47c4f4] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                    <Activity className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-800 leading-none mb-1">Verifikasi Dokumen</h5>
                    <p className="text-[10px] text-gray-500">Dokumen administrasi telah divalidasi.</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">15 Jul 2023, 10:15 WIB</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#47c4f4] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                    <Activity className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-800 leading-none mb-1">Survey Lapangan</h5>
                    <p className="text-[10px] text-gray-500">Petugas telah mengecek kelayakan lokasi.</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">16 Jul 2023, 14:00 WIB</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-[#47c4f4] text-[#47c4f4] flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                    <div className="w-2 h-2 rounded-full bg-[#47c4f4] animate-pulse"></div>
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-[#47c4f4] leading-none mb-1">Pemasangan</h5>
                    <p className="text-[10px] text-gray-500">Proses instalasi meteran sedang dijadwalkan.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-400 leading-none mb-1">Selesai</h5>
                    <p className="text-[10px] text-gray-400">Menunggu pemasangan selesai.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// --- LAPORAN COMPONENT ---
function Laporan() {
  return (
    <>
      <div className="glass-header sticky top-0 z-40 px-6 py-4 flex items-center gap-4">
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Lapor Khusus (WBC)</h1>
      </div>

      <div className="flex-1 px-5 pt-6 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl mb-2 flex gap-3">
          <div className="text-blue-500 mt-1"><Info className="w-4 h-4" /></div>
          <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
            Layanan Lapor Khusus / Whistleblowing Center (WBC) adalah fasilitas bagi Anda untuk melaporkan tindakan pelanggaran yang terjadi di lingkungan kami. Laporan Anda dijamin kerahasiaannya.
          </p>
        </div>

        <div>
          <input type="text" placeholder="Judul Laporan" className="modern-input" />
        </div>
        <div>
          <textarea placeholder="Deskripsi Pelanggaran / Kronologi" className="modern-input h-32 resize-none"></textarea>
        </div>

        <div className="mb-2">
          <div className="relative">
            <span className="absolute -top-2 left-3 bg-[#f8fafc] px-1 text-[10px] font-bold text-[#2a81d4]">Bukti Lampiran (Opsional)</span>
            <div className="w-full h-32 bg-[#e2e8f0]/60 rounded-xl border border-[#cbd5e1] border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition text-gray-400 hover:text-[#2a81d4]">
              <div className="w-10 h-10 rounded-lg bg-gray-200/50 flex items-center justify-center mb-2">
                <Paperclip className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[14px] font-extrabold py-3.5 rounded-2xl shadow-md transition-all mt-2">
          Kirim Laporan Rahasia
        </button>
      </div>
    </>
  );
}

// --- PENGADUAN COMPONENT ---
function Pengaduan() {
  const [subTab, setSubTab] = useState('baru');

  return (
    <>
      <div className="glass-header sticky top-0 z-40 px-6 py-4 flex items-center gap-4">
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Pengaduan</h1>
      </div>

      <div className="flex-1 px-5 pt-4 pb-24 flex flex-col gap-4 overflow-y-auto hide-scrollbar relative">
        <div className="bg-gray-200/50 p-1 rounded-xl flex mb-2 w-full max-w-[320px] mx-auto">
          <button
            className={`flex-1 py-2.5 text-[11px] font-bold rounded-lg transition-all ${subTab === 'baru' ? 'bg-white text-[#47c4f4] shadow-sm font-extrabold' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setSubTab('baru')}
          >
            Pengaduan Baru
          </button>
          <button
            className={`flex-1 py-2.5 text-[11px] font-bold rounded-lg transition-all ${subTab === 'monitoring' ? 'bg-white text-[#47c4f4] shadow-sm font-extrabold' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setSubTab('monitoring')}
          >
            Monitoring
          </button>
        </div>

        {subTab === 'baru' ? (
          <div className="flex flex-col gap-4 animate-fade-in">
            <select defaultValue="" className="modern-input custom-select text-gray-500">
              <option value="" disabled>Pilih nomor pelanggan</option>
              <option value="1">123456789 - John Doe</option>
            </select>

            <select defaultValue="" className="modern-input custom-select text-gray-500">
              <option value="" disabled>Pilih jenis pengaduan</option>
              <option value="air_mati">Air Mati / Tidak Mengalir</option>
              <option value="pipa_bocor">Pipa Bocor</option>
              <option value="air_keruh">Air Keruh</option>
            </select>

            <div>
              <input type="text" placeholder="Nama" className="modern-input" maxLength={30} />
              <div className="text-right mt-1.5"><span className="text-[10px] text-gray-500 font-semibold">0/30</span></div>
            </div>

            <div>
              <h4 className="text-[#47c4f4] font-extrabold text-[12px] mb-2 ml-1">Lokasi anda :</h4>
              <div className="w-full h-48 bg-[#e2e8f0] rounded-2xl border-2 border-white shadow-inner relative overflow-hidden flex items-center justify-center cursor-pointer group">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                <div className="text-center relative z-10 group-hover:scale-110 transition-transform">
                  <MapPin className="text-red-500 w-10 h-10 drop-shadow-md mb-2" />
                </div>
                <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur text-[9px] font-bold px-2 py-1 rounded text-gray-600 flex items-center gap-1">
                  <Chrome className="text-blue-500 w-3 h-3" /> Google
                </div>
              </div>
              <p className="text-[9px] text-gray-500 mt-2 ml-1">*) Ketuk pada peta untuk mengubah lokasi</p>
            </div>

            <div>
              <textarea placeholder="Alamat" className="modern-input h-24 resize-none" maxLength={100}></textarea>
              <div className="text-right mt-1.5"><span className="text-[10px] text-gray-500 font-semibold">0/100</span></div>
            </div>

            <div>
              <input type="tel" placeholder="No.Telp" className="modern-input" maxLength={15} />
              <div className="text-right mt-1.5"><span className="text-[10px] text-gray-500 font-semibold">0/15</span></div>
            </div>

            <div>
              <textarea placeholder="Detail keluhan" className="modern-input h-32 resize-none" maxLength={250}></textarea>
              <div className="text-right mt-1.5"><span className="text-[10px] text-gray-500 font-semibold">0/250</span></div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <span className="absolute -top-2 left-3 bg-[#f8fafc] px-1 text-[10px] font-bold text-[#2a81d4]">Foto keluhan (opsional)</span>
                <div className="w-full h-40 bg-[#e2e8f0]/60 rounded-xl border border-[#cbd5e1] border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition text-gray-400 hover:text-[#2a81d4]">
                  <div className="w-10 h-10 rounded-lg bg-gray-200/50 flex items-center justify-center mb-2">
                    <Camera className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#2a81d4] hover:bg-[#1f6db8] text-white text-[14px] font-extrabold py-3.5 rounded-2xl shadow-md transition-all mt-4 mb-24">
              Kirim Keluhan
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 animate-fade-in w-full h-full pb-20">
            <select defaultValue="" className="modern-input custom-select text-gray-500 w-full">
              <option value="" disabled>Pilih nomor pelanggan</option>
              <option value="1">123456789 - John Doe</option>
            </select>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-2">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="bg-blue-100 text-[#2a81d4] text-[9px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Diproses</span>
                  <h3 className="text-[14px] font-extrabold text-gray-800">Air Mati / Tidak Mengalir</h3>
                  <p className="text-[11px] text-gray-500 font-medium">Tiket: #TK-20230715-001</p>
                </div>
                <span className="text-[10px] font-bold text-gray-400">15 Jul</span>
              </div>

              <hr className="border-gray-100 my-4" />

              <h4 className="text-[12px] font-extrabold text-gray-800 mb-4">Lacak Laporan</h4>

              <div className="relative pl-3 space-y-6">
                <div className="absolute left-5 top-2 bottom-6 w-0.5 bg-gray-200"></div>
                <div className="absolute left-5 top-2 h-1/2 w-0.5 bg-[#47c4f4]"></div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#47c4f4] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                    <Activity className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-800 leading-none mb-1">Laporan Diterima</h5>
                    <p className="text-[10px] text-gray-500">Laporan Anda telah masuk ke sistem kami.</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">15 Jul 2023, 08:30 WIB</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-[#47c4f4] text-[#47c4f4] flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                    <div className="w-2 h-2 rounded-full bg-[#47c4f4] animate-pulse"></div>
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-[#47c4f4] leading-none mb-1">Sedang Diproses</h5>
                    <p className="text-[10px] text-gray-500">Petugas sedang menuju ke lokasi untuk pengecekan.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_4px_white]">
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-400 leading-none mb-1">Selesai</h5>
                    <p className="text-[10px] text-gray-400">Menunggu perbaikan selesai.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// --- PROFIL COMPONENT ---
function Profil() {
  return (
    <>
      <div className="glass-header sticky top-0 z-40 px-6 py-4 flex items-center gap-4">
        <h1 className="text-[17px] font-extrabold text-gray-800 tracking-tight">Akun Saya</h1>
      </div>

      <div className="flex-1 px-5 pt-4 flex flex-col gap-5 overflow-y-auto hide-scrollbar">

        <div className="modern-card p-5">
          <div className="flex items-start justify-between mb-4 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2a81d4] border border-blue-100 shadow-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Nama</p>
                <h2 className="text-[14px] font-extrabold text-gray-800">-</h2>
              </div>
            </div>
            <button className="w-8 h-8 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-[#2a81d4] transition shadow-sm border border-gray-100">
              <PenSquare className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2a81d4] border border-blue-100 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">No. Handphone</p>
                <h2 className="text-[14px] font-extrabold text-gray-800">-</h2>
              </div>
            </div>
            <button className="w-8 h-8 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-[#2a81d4] transition shadow-sm border border-gray-100">
              <PenSquare className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-red-50 rounded-xl p-3.5 mb-5 border border-red-100 flex items-start gap-3">
            <AlertCircle className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-[10.5px] font-bold text-red-600 leading-relaxed">
              Anda belum menghubungkan email Google anda.<br />Hubungkan email Google untuk opsi login lebih mudah.
            </p>
          </div>

          <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[13px] font-extrabold py-3.5 rounded-2xl shadow-sm transition-all flex justify-center items-center gap-2.5">
            <Chrome className="text-red-500 w-4 h-4" />
            Hubungkan Akun Google
          </button>
        </div>

        <div>
          <h3 className="text-[12px] font-extrabold text-[#2a81d4] mb-3 ml-1">Nomor pelanggan terdaftar :</h3>
          <div className="modern-card p-6 flex flex-col items-center justify-center border-2 border-dashed border-[#a3cc39] bg-[#fdfef9] shadow-sm">
            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-[11px] font-bold text-red-500 mb-5 text-center">Anda belum menambahkan nomor pelanggan</p>
            <button className="w-full max-w-[280px] bg-[#a3cc39] hover:bg-[#8eb82e] text-white text-[12px] font-extrabold py-3.5 rounded-2xl shadow-md transition-all flex justify-center items-center gap-2">
              <Plus className="w-4 h-4" />
              Tambahkan Nomor Pelanggan
            </button>
          </div>
        </div>

        <p className="text-[9.5px] text-gray-500 leading-relaxed mx-1 font-medium">
          *) Untuk menghapus nomor pelanggan yang nonaktif, silakan menghubungi Call Center kami via Telp / Whatsapp
        </p>

        <div className="modern-card p-4 mt-2 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-10 h-10 bg-blue-50 text-[#2a81d4] rounded-full flex items-center justify-center border border-blue-100 shadow-sm">
              <Info className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-[13px]">Tentang Kami</span>
          </div>
          <div className="w-6 h-6 bg-gray-50 rounded-full flex items-center justify-center">
            <ChevronRight className="text-gray-400 w-3 h-3" />
          </div>
        </div>

        <button className="w-full bg-[#fff1f2] border border-[#ffe4e6] hover:bg-[#ffe4e6] text-red-500 text-[13px] font-extrabold py-4 rounded-2xl transition-all mt-4 mb-4 flex justify-center items-center gap-2 shadow-sm">
          <LogOut className="w-4 h-4" />
          Keluar dari Akun Anda
        </button>

      </div>
    </>
  );
}


// --- MAIN APP (WRAPPER) ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const togglePopup = (popupId: string) => {
    setActivePopup(activePopup === popupId ? null : popupId);
  };

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    setActivePopup(null); // Close popup if any when navigating
  }

  const hideBottomNav = [
    'bayar_tagihan', 'info_gangguan', 'layanan_komersial',
    'jadwal_catat_meter', 'catat_meter_mandiri', 'slip_catat_meter',
    'grafik_tagihan', 'grafik_smart_meter'
  ].includes(activeTab);

  return (
    <div className={`mobile-container relative ${hideBottomNav ? '' : 'pb-28'}`}>

      {/* Tab Switching Content */}
      {activeTab === 'home' && <Home togglePopup={togglePopup} setActiveTab={handleSetActiveTab} />}
      {activeTab === 'pasang_baru' && <PasangBaru />}
      {activeTab === 'laporan' && <Laporan />}
      {activeTab === 'pengaduan' && <Pengaduan />}
      {activeTab === 'profil' && <Profil />}
      {activeTab === 'bayar_tagihan' && <BayarTagihan setActiveTab={handleSetActiveTab} />}
      {activeTab === 'info_gangguan' && <InfoGangguan setActiveTab={handleSetActiveTab} />}
      {activeTab === 'layanan_komersial' && <LayananKomersial setActiveTab={handleSetActiveTab} />}
      {activeTab === 'jadwal_catat_meter' && <JadwalCatatMeter setActiveTab={handleSetActiveTab} />}
      {activeTab === 'catat_meter_mandiri' && <CatatMeterMandiri setActiveTab={handleSetActiveTab} />}
      {activeTab === 'slip_catat_meter' && <SlipCatatMeter setActiveTab={handleSetActiveTab} />}
      {activeTab === 'grafik_tagihan' && <GrafikTagihan setActiveTab={handleSetActiveTab} />}
      {activeTab === 'grafik_smart_meter' && <GrafikSmartMeter setActiveTab={handleSetActiveTab} />}

      {/* Bottom Navigation Bar */}
      {!hideBottomNav && (
        <div className="bottom-nav">
          <div
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleSetActiveTab('home')}
          >
            <HomeIcon className="w-5 h-5" /><span className="text-[9px] font-bold">Home</span>
          </div>
          <div
            className={`nav-item ${activeTab === 'pasang_baru' ? 'active' : ''}`}
            onClick={() => handleSetActiveTab('pasang_baru')}
          >
            <Stethoscope className="w-5 h-5" /><span className="text-[9px] font-bold">Pasang Baru</span>
          </div>

          {/* Laporan FAB */}
          <div
            className={`nav-fab ${activeTab === 'laporan' ? 'active' : ''}`}
            onClick={() => handleSetActiveTab('laporan')}
          >
            <Megaphone className="w-6 h-6" />
          </div>

          <div
            className={`nav-item ${activeTab === 'pengaduan' ? 'active' : ''}`}
            onClick={() => handleSetActiveTab('pengaduan')}
          >
            <MessageSquare className="w-5 h-5" /><span className="text-[9px] font-bold">Pengaduan</span>
          </div>
          <div
            className={`nav-item ${activeTab === 'profil' ? 'active' : ''}`}
            onClick={() => handleSetActiveTab('profil')}
          >
            <User className="w-5 h-5" /><span className="text-[9px] font-bold">Profil</span>
          </div>
        </div>
      )}


      {/* ============================================== */}
      {/* OVERLAY DAN BOTTOM SHEET UNTUK POPUPS */}
      {/* ============================================== */}

      {/* POPUP: CATAT METER */}
      {activePopup === 'popup-catat-meter' && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity cursor-pointer" onClick={() => togglePopup('popup-catat-meter')}></div>

          <div className="relative w-full bg-white rounded-t-[32px] pt-4 pb-8 px-6 shadow-[0_-10px_50px_rgba(0,0,0,0.15)] flex flex-col animate-slide-up max-w-[480px]">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 cursor-pointer" onClick={() => togglePopup('popup-catat-meter')}></div>

            <h2 className="text-gray-800 font-extrabold text-[15px] mb-5 px-1">Menu Catat Meter</h2>

            <div className="grid grid-cols-2 gap-3 mb-2">
              <div
                className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col gap-3 cursor-pointer group hover:bg-blue-50 transition-colors"
                onClick={() => handleSetActiveTab('jadwal_catat_meter')}
              >
                <div className="w-10 h-10 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight">Jadwal<br />Catat Meter</span>
              </div>

              <div
                className="bg-gradient-to-br from-[#2a81d4] to-[#1f6db8] p-4 rounded-2xl flex flex-col gap-3 cursor-pointer group shadow-md shadow-blue-500/20"
                onClick={() => handleSetActiveTab('catat_meter_mandiri')}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Edit className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold text-white leading-tight">Catat Meter<br />Mandiri</span>
              </div>

              <div
                className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col gap-3 cursor-pointer group hover:bg-blue-50 transition-colors"
                onClick={() => handleSetActiveTab('slip_catat_meter')}
              >
                <div className="w-10 h-10 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <FilePlus className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight">Slip<br />Catat Meter</span>
              </div>

              <div
                className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col gap-3 cursor-pointer group hover:bg-blue-50 transition-colors"
                onClick={() => handleSetActiveTab('grafik_tagihan')}
              >
                <div className="w-10 h-10 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <LineChart className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight">Grafik<br />Tagihan</span>
              </div>

              <div
                className="col-span-2 bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex items-center gap-4 cursor-pointer group hover:bg-blue-50 transition-colors mt-1"
                onClick={() => handleSetActiveTab('grafik_smart_meter')}
              >
                <div className="w-10 h-10 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[12px] font-extrabold text-gray-700 block">Grafik Smart Meter</span>
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5 block">Pantau history pemakaian real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POPUP: MENU LAINNYA */}
      {activePopup === 'popup-menu-lainnya' && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity cursor-pointer" onClick={() => togglePopup('popup-menu-lainnya')}></div>

          <div className="relative w-full bg-white rounded-t-[32px] pt-4 pb-8 px-6 shadow-[0_-10px_50px_rgba(0,0,0,0.15)] flex flex-col animate-slide-up max-w-[480px]">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 cursor-pointer" onClick={() => togglePopup('popup-menu-lainnya')}></div>
            <h2 className="text-gray-800 font-extrabold text-[15px] mb-5 px-1 text-center">Menu Lainnya</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col items-center gap-3 cursor-pointer group hover:bg-blue-50 transition-colors" onClick={() => { setActivePopup('popup-hubungi-kami'); }}>
                <div className="w-12 h-12 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight text-center">Hubungi<br />Kami</span>
              </div>
              <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col items-center gap-3 cursor-pointer group hover:bg-blue-50 transition-colors" onClick={() => { setActivePopup('popup-layanan-komersial'); }}>
                <div className="w-12 h-12 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight text-center">Layanan<br />Komersial</span>
              </div>
              <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col items-center gap-3 cursor-pointer group hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight text-center">Pusat<br />Bantuan</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POPUP: LAYANAN KOMERSIAL */}
      {activePopup === 'popup-layanan-komersial' && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity cursor-pointer" onClick={() => togglePopup('popup-layanan-komersial')}></div>

          <div className="relative w-full bg-white rounded-t-[32px] pt-4 pb-8 px-6 shadow-[0_-10px_50px_rgba(0,0,0,0.15)] flex flex-col animate-slide-up max-w-[480px]">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 cursor-pointer" onClick={() => togglePopup('popup-layanan-komersial')}></div>
            <h2 className="text-gray-800 font-extrabold text-[15px] mb-5 px-1 text-center">Menu Layanan Komersial</h2>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col items-center gap-3 cursor-pointer group hover:bg-blue-50 transition-colors"
                onClick={() => handleSetActiveTab('layanan_komersial')}
              >
                <div className="w-12 h-12 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <Pointer className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight text-center">Layanan<br />Komersial</span>
              </div>
              <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-2xl flex flex-col items-center gap-3 cursor-pointer group hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#e6f4ff] text-[#2a81d4] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <History className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold text-gray-700 leading-tight text-center">Riwayat Layanan<br />Komersial</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
