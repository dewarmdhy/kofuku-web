
import React from 'react';
/* Added Utensils to imports */
import { 
  CheckCircle2, 
  Droplet, 
  Flame, 
  Calendar, 
  ArrowRight, 
  Coffee,
  Activity,
  Brain,
  Video,
  Utensils
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Sen', value: 65 },
  { name: 'Sel', value: 80 },
  { name: 'Rab', value: 45 },
  { name: 'Kam', value: 90 },
  { name: 'Jum', value: 70 },
  { name: 'Sab', value: 30 },
  { name: 'Min', value: 0 },
];

const Dashboard: React.FC<{ setCurrentPage: (p: any) => void }> = ({ setCurrentPage }) => {
  const [waterGlasses, setWaterGlasses] = React.useState(5);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome & Streak */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-charcoal font-heading">Halo, Andy! 👋</h2>
          <p className="text-mediumGrey mt-1">Hari ini adalah hari yang tepat untuk menjadi sehat.</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-warning">12</span>
            <Flame className="text-warning fill-warning" size={24} />
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div className="text-sm font-medium text-mediumGrey">Streak Hari Aktif</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wellness Score Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-charcoal mb-6 w-full text-left">Wellness Score</h3>
          <div className="relative w-48 h-48 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 * (1 - 78 / 100)}
                className="text-primary transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-charcoal">78</span>
              <span className="text-sm font-medium text-mediumGrey">Hebat!</span>
            </div>
          </div>
          <p className="text-sm text-mediumGrey">Score meningkat <span className="text-success font-bold">+5%</span> dari minggu lalu.</p>
          <div className="grid grid-cols-3 gap-4 w-full mt-8">
            {['Fisik', 'Mental', 'Sosial'].map((label, idx) => (
              <div key={idx} className="space-y-1">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{ width: `${60 + idx * 10}%` }}></div>
                </div>
                <span className="text-[10px] uppercase font-bold text-mediumGrey tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-charcoal">Tugas Hari Ini</h3>
            <span className="text-sm font-bold text-primary">2/4 Selesai</span>
          </div>
          <div className="space-y-4">
            {[
              { title: "Sarapan Bergizi", time: "07:00 AM", done: true, icon: Coffee },
              { title: "Latihan Peregangan", time: "10:30 AM", done: true, icon: Activity },
              { title: "Makan Siang Sehat", time: "12:30 PM", done: false, icon: Activity },
              { title: "Meditasi Sore", time: "05:00 PM", done: false, icon: Brain },
            ].map((task, idx) => (
              <div key={idx} className={`p-4 rounded-2xl flex items-center justify-between border transition-all ${task.done ? 'bg-primary/5 border-primary/20 opacity-70' : 'bg-white border-gray-100 hover:border-primary/30'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${task.done ? 'bg-primary text-white' : 'bg-primary-light text-primary'}`}>
                    <task.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${task.done ? 'line-through text-mediumGrey' : 'text-charcoal'}`}>{task.title}</h4>
                    <p className="text-[11px] text-mediumGrey">{task.time}</p>
                  </div>
                </div>
                <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${task.done ? 'bg-primary border-primary text-white' : 'border-gray-200 text-transparent'}`}>
                  <CheckCircle2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Water & Weekly Progress */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-charcoal">Minum Air Putih</h3>
              <span className="text-xs text-mediumGrey">{waterGlasses}/8 Gelas</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-6 h-10 rounded-lg transition-all border-2 ${i < waterGlasses ? 'bg-primary border-primary shadow-sm' : 'bg-gray-50 border-gray-100'}`}
                  ></div>
                ))}
              </div>
              <button 
                onClick={() => setWaterGlasses(prev => Math.min(prev + 1, 8))}
                className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all"
              >
                <Droplet size={20} />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-charcoal mb-4">Aktivitas Minggu Ini</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} />
                  <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                    {data.map((entry, index) => (
                      <Cell key={index} fill={entry.value > 70 ? '#0D7377' : '#D4A843'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Meal Plan", icon: Utensils, page: 'meals', color: 'bg-emerald-100 text-emerald-600' },
          { label: "Workout", icon: Activity, page: 'workouts', color: 'bg-blue-100 text-blue-600' },
          { label: "Konsultasi", icon: Video, page: 'programs', color: 'bg-purple-100 text-purple-600' },
          { label: "Hi Kofuku", icon: Brain, page: 'hikofuku', color: 'bg-secondary/20 text-secondary' },
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentPage(item.page)}
            className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all text-left flex flex-col gap-4 group"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
              <item.icon size={24} />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-charcoal">{item.label}</span>
              <ArrowRight size={16} className="text-mediumGrey group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-charcoal mb-6">Jadwal Mendatang</h3>
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex gap-6 min-w-[600px] pb-2">
            {[
              { title: "Webinar: Diet & Puasa", date: "Besok, 10:00", type: "Webinar", color: "bg-blue-50 text-blue-600" },
              { title: "Konsultasi Psikolog", date: "Kamis, 14:00", type: "Telehealth", color: "bg-purple-50 text-purple-600" },
              { title: "MCU Rutin", date: "15 Mei 2024", type: "Kesehatan", color: "bg-emerald-50 text-emerald-600" },
            ].map((event, idx) => (
              <div key={idx} className="flex-1 min-w-[240px] p-5 rounded-2xl border border-gray-50 bg-gray-50/30 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block ${event.color}`}>{event.type}</div>
                  <h4 className="font-bold text-charcoal text-sm mb-1">{event.title}</h4>
                  <p className="text-xs text-mediumGrey">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
