
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, User, Activity, Ruler, Target, CheckCircle2 } from 'lucide-react';

const Onboarding: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { title: "Data Pribadi", icon: User },
    { title: "Riwayat Kesehatan", icon: Activity },
    { title: "Ukuran Tubuh", icon: Ruler },
    { title: "Gaya Hidup", icon: Activity },
    { title: "Tujuan Anda", icon: Target },
  ];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else onFinish();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-10 space-y-8 animate-in zoom-in duration-500">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Langkah {step} dari {totalSteps}</span>
            <span className="text-sm font-bold text-charcoal">{steps[step - 1].title}</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="py-4">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-charcoal">Ceritakan tentang Anda</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Nama Lengkap" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
                <div className="flex gap-4">
                  <input type="number" placeholder="Usia" className="flex-1 p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
                  <select className="flex-1 p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary">
                    <option>Jenis Kelamin</option>
                    <option>Pria</option>
                    <option>Wanita</option>
                  </select>
                </div>
                <input type="text" placeholder="Pekerjaan" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-charcoal">Ukuran Tubuh</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-mediumGrey block mb-2">Tinggi Badan (cm)</label>
                  <input type="range" min="100" max="220" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  <div className="text-center font-bold text-primary mt-2">175 cm</div>
                </div>
                <div>
                  <label className="text-sm font-bold text-mediumGrey block mb-2">Berat Badan (kg)</label>
                  <input type="range" min="30" max="150" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                  <div className="text-center font-bold text-primary mt-2">72 kg</div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-charcoal">Apa tujuan utama Anda?</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Menurunkan Berat', 'Meningkatkan Energi', 'Kelola Stres', 'Bentuk Otot', 'Tidur Nyenyak', 'Makan Sehat'].map((goal) => (
                  <button key={goal} className="p-4 border-2 border-gray-100 rounded-2xl hover:border-primary hover:bg-primary-light text-sm font-bold text-charcoal text-center transition-all">
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {(step === 2 || step === 4) && (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="w-20 h-20 bg-primary-light text-primary rounded-full flex items-center justify-center">
                {React.createElement(steps[step - 1].icon, { size: 40 })}
              </div>
              <h2 className="text-xl font-bold">Lengkapi Profil {steps[step - 1].title}</h2>
              <p className="text-mediumGrey text-sm">Informasi ini akan membantu kami menyesuaikan program wellness untuk Anda.</p>
              <button className="text-primary font-bold hover:underline">Klik untuk mengisi</button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          {step > 1 && (
            <button 
              onClick={handleBack}
              className="flex-1 py-4 border-2 border-primary/20 text-primary font-bold rounded-2xl hover:bg-primary-light transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft size={20} /> Kembali
            </button>
          )}
          <button 
            onClick={handleNext}
            className="flex-[2] py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center gap-2"
          >
            {step === totalSteps ? 'Selesai & Lihat Dashboard' : 'Lanjut'} <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
