
import React from 'react';
/* Added Sparkles to imports */
import { 
  Compass, 
  Activity, 
  Brain, 
  HeartPulse, 
  MessageSquare, 
  ShieldCheck,
  ChevronRight,
  Clock,
  Star,
  Sparkles
} from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    { title: "Intensive Fit&Well", desc: "Program intensif 12 minggu untuk penurunan berat badan & metabolisme.", icon: ShieldCheck, duration: "12 Weeks", category: "Advanced" },
    { title: "Diet Program 3 Bulan", desc: "Konsultasi gizi rutin dan meal plan kustom sesuai kebutuhan.", icon: HeartPulse, duration: "3 Months", category: "Nutrition" },
    { title: "Workout & Exercise 4 Weeks", desc: "Latihan beban terstruktur untuk pembentukan otot & postur tubuh.", icon: Activity, duration: "4 Weeks", category: "Fitness" },
    { title: "Life Balance Workshop", desc: "Workshop mingguan mengelola stres dan kebahagiaan di kantor.", icon: Brain, duration: "Lifetime", category: "Mental" },
    { title: "Telehealth Consultation", desc: "Konsultasi 24/7 with doctor and psychologists.", icon: MessageSquare, duration: "Unlimited", category: "Health" },
    { title: "Capitation Gold", desc: "Comprehensive health protection for employee families.", icon: Star, duration: "Annual", category: "Premium" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-charcoal font-heading">Program Wellness</h2>
          <p className="text-mediumGrey">Temukan program yang paling sesuai dengan tujuan kesehatan Anda.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-primary-light text-primary font-bold rounded-full text-sm">Semua</button>
          <button className="px-6 py-2 hover:bg-gray-100 text-mediumGrey font-bold rounded-full text-sm">Terpopuler</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((prog, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all">
            <div className="p-8 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <prog.icon size={30} />
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-mediumGrey uppercase tracking-widest">{prog.category}</span>
                <div className="flex items-center gap-1 text-[10px] text-primary font-bold">
                  <Clock size={12} /> {prog.duration}
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">{prog.title}</h3>
              <p className="text-sm text-mediumGrey leading-relaxed">{prog.desc}</p>
            </div>
            <div className="p-6 bg-gray-50/50 border-t border-gray-50 mt-auto">
              <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark shadow-lg transition-all flex items-center justify-center gap-2">
                Lihat Detail <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended for You */}
      <div className="bg-secondary/10 p-10 rounded-3xl border border-secondary/20 relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
            <Compass size={14} /> DIREKOMENDASIKAN
          </div>
          <h3 className="text-3xl font-bold text-charcoal">Simple Fit&Well Community</h3>
          <p className="text-charcoal/70">
            Berdasarkan pre-assessment Anda, program komunitas ini paling cocok untuk menjaga kestabilan energi harian dengan dukungan grup sebaya.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg">
            Daftar Sekarang
          </button>
        </div>
        <Sparkles size={200} className="absolute -bottom-20 -right-20 text-secondary/20 rotate-12" />
      </div>
    </div>
  );
};

export default Programs;
