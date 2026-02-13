
import React from 'react';
import { ShieldCheck, HeartPulse, Brain, Zap, Users, ArrowRight, Instagram, Linkedin, Mail, Phone, MessageSquare, User } from 'lucide-react';
import { Logo } from '../components/Logo';

const Landing: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-6 absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <Logo className="h-12 md:h-16" />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#program" className="text-charcoal font-medium hover:text-primary">Program</a>
          <a href="#about" className="text-charcoal font-medium hover:text-primary">Tentang Kami</a>
          <a href="#stats" className="text-charcoal font-medium hover:text-primary">Statistik</a>
          <button 
            onClick={onStart}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg"
          >
            Mulai Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 px-6 md:px-20 bg-primary-light/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-sm tracking-wide">
              <Zap size={16} />
              #1 EMPLOYEE WELLNESS PLATFORM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary font-heading leading-tight">
              Say Yes to Health,<br />
              <span className="text-secondary">Say Yes to Kofuku</span>
            </h1>
            <p className="text-lg md:text-xl text-mediumGrey max-w-xl mx-auto md:mx-0">
              Membangun budaya gaya hidup sehat di tempat kerja dan keluarga sebagai investasi jangka panjang untuk produktivitas dan kualitas hidup bersama <span className="font-bold text-primary">LEAD</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button 
                onClick={onStart}
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Coba Gratis Sekarang <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-white text-primary border-2 border-primary/20 px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-light transition-all">
                Pelajari Program
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/wellness_hero/800/600" 
              alt="Healthy lifestyle" 
              className="rounded-2xl shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-error text-center space-y-4">
              <h3 className="text-4xl font-bold text-error">70%</h3>
              <p className="text-charcoal font-semibold">Penyakit terkait erat dengan stres kronis di tempat kerja.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-warning text-center space-y-4">
              <h3 className="text-4xl font-bold text-warning">1 in 3</h3>
              <p className="text-charcoal font-semibold">Karyawan mengalami tingkat stres dan kecemasan tinggi.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center space-y-4">
              <h3 className="text-4xl font-bold text-primary">50%</h3>
              <p className="text-charcoal font-semibold">Karyawan memiliki pola makan tidak teratur & kelebihan berat badan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="program" className="py-20 px-6 md:px-20 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary font-heading">Solusi Wellness Holistik</h2>
          <p className="text-mediumGrey text-lg max-w-2xl mx-auto">Pendekatan komprehensif untuk memastikan setiap dimensi kesejahteraan Anda terjaga.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Intensive Program", icon: ShieldCheck, color: "primary" },
            { title: "Life Balance", icon: Brain, color: "secondary" },
            { title: "Vaccination & MCU", icon: HeartPulse, color: "error" },
            { title: "Telehealth", icon: MessageSquare, color: "success" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 transition-all group">
              <div className={`w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={30} />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2">{item.title}</h4>
              <p className="text-sm text-mediumGrey">Program terukur dengan monitoring berkala oleh tenaga ahli medis profesional.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-primary font-heading">Dipercaya oleh 50+ Perusahaan Multinasional</h2>
            <p className="text-mediumGrey text-lg">Kami tidak hanya memberikan saran, kami mendampingi setiap langkah perubahan perilaku sehat karyawan Anda bersama ekosistem <span className="font-bold text-primary">LEAD</span>.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-light p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-primary">15k+</p>
                <p className="text-sm font-medium">User Aktif</p>
              </div>
              <div className="bg-primary-light p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm font-medium">Kepuasan</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-serif">"</div>
              <p className="text-xl text-charcoal italic mb-8">
                "Kofuku benar-benar merubah cara pandang tim kami tentang kesehatan. Produktivitas meningkat 25% sejak kami mengadopsi budaya wellness ini."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/ceo/100" className="w-14 h-14 rounded-full border-2 border-primary" alt="CEO" />
                <div>
                  <p className="font-bold text-charcoal">Budi Santoso</p>
                  <p className="text-sm text-mediumGrey">CEO of Tech Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
               <Logo className="h-16" variant="white" />
            </div>
            <p className="text-white/70">Membangun kebahagiaan dan kesehatan melalui langkah kecil yang konsisten.</p>
            <div className="flex gap-4">
              <Instagram className="cursor-pointer hover:text-secondary" />
              <Linkedin className="cursor-pointer hover:text-secondary" />
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-lg font-bold">Layanan</h5>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white cursor-pointer">Corporate Wellness</li>
              <li className="hover:text-white cursor-pointer">Family Program</li>
              <li className="hover:text-white cursor-pointer">Telehealth 24/7</li>
              <li className="hover:text-white cursor-pointer">Medical Checkup</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-lg font-bold">Tentang</h5>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white cursor-pointer">Karier</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Kemitraan</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-lg font-bold">Kontak Kami</h5>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <User size={18} />
                <span>Andy E. Prabowo</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>andy.prabowo@leadbrokers-id.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+62 813-1473-8050</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-sm">
          © 2024 Kofuku Wellness. All rights reserved. Member of LEAD Brokers Indonesia.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
