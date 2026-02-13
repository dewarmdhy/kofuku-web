
import React from 'react';
/* Added Plus to imports */
import { 
  Play, 
  Clock, 
  BarChart3, 
  ChevronRight, 
  Search,
  Filter,
  Trophy,
  Dumbbell,
  Plus
} from 'lucide-react';
import { SAMPLE_EXERCISES, WEEKLY_CHALLENGES } from '../data';

const Workout: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'library' | 'program'>('program');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-charcoal font-heading">Latihan & Olahraga</h2>
        <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex">
          <button 
            onClick={() => setActiveTab('program')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'program' ? 'bg-primary text-white shadow-md' : 'text-mediumGrey hover:text-primary'}`}
          >
            Program Saya
          </button>
          <button 
            onClick={() => setActiveTab('library')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'library' ? 'bg-primary text-white shadow-md' : 'text-mediumGrey hover:text-primary'}`}
          >
            Library
          </button>
        </div>
      </div>

      {activeTab === 'program' ? (
        <>
          {/* 4-Week Tracker */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-charcoal mb-8">Program 4 Minggu: Better Me</h3>
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
              {[
                { week: 1, title: "Initial Setup", done: true },
                { week: 2, title: "Adaptation", active: true },
                { week: 3, title: "Optimization" },
                { week: 4, title: "Better You" }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center gap-3 mb-8 md:mb-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    step.done ? 'bg-success text-white' : 
                    step.active ? 'bg-primary text-white ring-4 ring-primary/20 scale-125' : 
                    'bg-gray-100 text-mediumGrey'
                  }`}>
                    {step.done ? '✓' : step.week}
                  </div>
                  <div className="max-w-[120px]">
                    <p className={`text-xs font-bold uppercase tracking-widest ${step.active ? 'text-primary' : 'text-mediumGrey'}`}>Minggu {step.week}</p>
                    <p className="text-sm font-bold text-charcoal">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
                Latihan Hari Ini <span className="text-sm font-medium text-mediumGrey">(Estimasi 45 Min)</span>
              </h3>
              <div className="space-y-4">
                {SAMPLE_EXERCISES.slice(0, 3).map((ex) => (
                  <div key={ex.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:border-primary/20 transition-all">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <img src={ex.image} alt={ex.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold uppercase rounded">{ex.difficulty}</span>
                        <span className="text-[10px] text-mediumGrey font-bold uppercase">{ex.category}</span>
                      </div>
                      <h4 className="font-bold text-charcoal text-lg">{ex.name}</h4>
                      <div className="flex gap-4 mt-2">
                        <div className="flex items-center gap-1 text-xs text-mediumGrey">
                          <BarChart3 size={14} className="text-primary" /> {ex.sets} Sets
                        </div>
                        <div className="flex items-center gap-1 text-xs text-mediumGrey">
                          <Play size={14} className="text-primary" /> {ex.reps} Reps
                        </div>
                        <div className="flex items-center gap-1 text-xs text-mediumGrey">
                          <Clock size={14} className="text-primary" /> {ex.rest} Rest
                        </div>
                      </div>
                    </div>
                    <button className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                      <Play size={20} className="fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Weekly Challenge */}
              <div className="bg-primary text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Trophy size={20} className="text-secondary" /> Featured Challenge
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{WEEKLY_CHALLENGES[0].title}</h4>
                      <p className="text-xs text-white/70">{WEEKLY_CHALLENGES[0].participants}+ Peserta bergabung</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Progress Anda</span>
                        <span>{WEEKLY_CHALLENGES[0].progress}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: `${WEEKLY_CHALLENGES[0].progress}%` }}></div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg">
                      Lanjutkan Challenge
                    </button>
                  </div>
                </div>
                <Trophy size={180} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
              </div>

              {/* Activity Log Teaser */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-charcoal mb-4 flex items-center justify-between">
                  Log Aktivitas <ChevronRight size={18} className="text-mediumGrey" />
                </h3>
                <div className="space-y-4">
                  {[
                    { type: 'Running', val: '5.2 km', date: 'Tadi Pagi' },
                    { type: 'Yoga', val: '30 min', date: 'Kemarin' },
                  ].map((log, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-none">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-primary">
                          <Dumbbell size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-charcoal">{log.type}</p>
                          <p className="text-[10px] text-mediumGrey uppercase tracking-widest">{log.date}</p>
                        </div>
                      </div>
                      <span className="font-bold text-primary">{log.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-mediumGrey" size={20} />
              <input 
                type="text" 
                placeholder="Cari jenis latihan..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center gap-2 font-bold text-charcoal hover:bg-gray-50 transition-all">
              <Filter size={20} /> Filter
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAMPLE_EXERCISES.map((ex) => (
              <div key={ex.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img src={ex.image} alt={ex.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold rounded-full shadow-sm">{ex.difficulty}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold text-mediumGrey uppercase tracking-widest mb-1">{ex.category}</p>
                  <h4 className="text-lg font-bold text-charcoal mb-4">{ex.name}</h4>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <span className="text-sm text-mediumGrey">{ex.sets} Sets • {ex.reps} Reps</span>
                    <button className="w-10 h-10 bg-primary-light text-primary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Workout;
