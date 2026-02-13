
import React, { useState } from 'react';
import { 
  Smile, 
  BookOpen, 
  Wind, 
  Moon, 
  Sparkles, 
  Plus, 
  Play,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { PSYCHOEDUCATION_ARTICLES } from '../data';

const MentalWellness: React.FC = () => {
  const [mood, setMood] = useState<string | null>(null);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingStep, setBreathingStep] = useState('Siap?');

  const startBreathing = () => {
    setIsBreathing(true);
    let count = 0;
    const steps = ['Tarik Napas (4s)', 'Tahan (4s)', 'Hembuskan (6s)'];
    const run = () => {
      setBreathingStep(steps[count % 3]);
      count++;
      if (count < 10) setTimeout(run, 4000);
      else {
        setIsBreathing(false);
        setBreathingStep('Selesai!');
      }
    };
    run();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold text-charcoal font-heading">Mental & Emosional</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Mood Tracker */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-charcoal mb-6">Bagaimana perasaanmu hari ini?</h3>
            <div className="flex justify-between gap-4">
              {[
                { emoji: "😊", label: "Hebat", color: "hover:bg-success/10" },
                { emoji: "🙂", label: "Baik", color: "hover:bg-primary/10" },
                { emoji: "😐", label: "Biasa", color: "hover:bg-warning/10" },
                { emoji: "😟", label: "Rendah", color: "hover:bg-orange/10" },
                { emoji: "😢", label: "Sedih", color: "hover:bg-error/10" },
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={() => setMood(item.label)}
                  className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl transition-all border-2 ${mood === item.label ? 'bg-primary/5 border-primary scale-105' : 'bg-gray-50 border-transparent ' + item.color}`}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <span className="text-xs font-bold text-mediumGrey">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Breathing Exercise */}
          <div className="bg-primary text-white p-10 rounded-3xl shadow-xl flex flex-col items-center text-center space-y-8 overflow-hidden relative">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Latihan Pernapasan</h3>
              <p className="text-white/80 max-w-sm">Tenangkan pikiranmu sejenak dengan teknik Box Breathing.</p>
              
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className={`absolute inset-0 bg-white/10 rounded-full border-2 border-white/20 transition-all duration-1000 ${isBreathing ? 'animate-breathe' : ''}`}></div>
                <div className={`w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/40 transition-all duration-1000 ${isBreathing ? 'scale-125' : ''}`}>
                  <span className="text-lg font-bold">{breathingStep}</span>
                </div>
              </div>

              {!isBreathing ? (
                <button 
                  onClick={startBreathing}
                  className="bg-secondary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-all shadow-lg flex items-center gap-2 mx-auto"
                >
                  <Play size={20} /> Mulai Sekarang
                </button>
              ) : (
                <button 
                  onClick={() => setIsBreathing(false)}
                  className="bg-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all border border-white/30 mx-auto"
                >
                  Berhenti
                </button>
              )}
            </div>
            <Wind size={300} className="absolute -bottom-20 -left-20 text-white/5 rotate-12" />
          </div>

          {/* Psychoeducation */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-charcoal">Edukasi & Insight</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PSYCHOEDUCATION_ARTICLES.map((article) => (
                <div key={article.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 group cursor-pointer hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-mediumGrey uppercase tracking-widest">{article.category}</span>
                    <h4 className="font-bold text-charcoal mt-1 group-hover:text-primary transition-colors">{article.title}</h4>
                    <p className="text-xs text-mediumGrey mt-2">{article.readTime} waktu baca</p>
                  </div>
                  <ChevronRight size={18} className="text-mediumGrey self-center" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Daily Journal */}
          <div className="bg-surface p-8 rounded-3xl shadow-sm border border-secondary/10 space-y-6">
            <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
              <Sparkles className="text-secondary" /> Journaling
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-mediumGrey italic">"Apa satu hal yang paling kamu syukuri hari ini?"</p>
              <textarea 
                className="w-full h-40 p-4 bg-white/50 border-none rounded-2xl focus:ring-2 focus:ring-secondary text-sm custom-scrollbar resize-none"
                placeholder="Tuliskan pikiranmu di sini..."
              ></textarea>
              <button className="w-full py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary/90 shadow-md transition-all">
                Simpan Jurnal
              </button>
            </div>
          </div>

          {/* Sleep Tracker Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-charcoal flex items-center gap-2">
                <Moon size={20} className="text-primary" /> Tidur Semalam
              </h3>
              <button className="text-primary hover:bg-primary-light p-1.5 rounded-lg transition-all">
                <Plus size={18} />
              </button>
            </div>
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-3xl font-bold text-charcoal">7j 20m</span>
                <p className="text-xs text-mediumGrey">Kualitas: <span className="text-success font-bold">Bagus</span></p>
              </div>
              <div className="flex gap-1 h-12 items-end">
                {[4, 6, 8, 5, 7, 6, 7.5].map((h, i) => (
                  <div key={i} className="w-2 bg-primary-light rounded-t" style={{ height: `${(h/10)*100}%` }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Stress Level Mini-Assessment */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-bold text-charcoal">Tingkat Stres Saat Ini</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold text-mediumGrey">
                <span>Rileks</span>
                <span>Sangat Stres</span>
              </div>
              <input type="range" className="w-full accent-primary" />
              <div className="p-4 bg-primary-light rounded-2xl text-[11px] text-primary font-medium leading-relaxed">
                Anda berada di zona hijau. Tetap pertahankan keseimbangan kerja-hidup Anda!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalWellness;
