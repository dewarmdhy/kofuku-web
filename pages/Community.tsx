
import React from 'react';
import { 
  Trophy, 
  Users, 
  MessageSquare, 
  Calendar, 
  Star,
  ChevronRight,
  Plus
} from 'lucide-react';
import { BADGES } from '../data';

const Community: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-charcoal font-heading">Komunitas Kofuku</h2>
        <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-dark shadow-lg transition-all flex items-center gap-2">
          <Plus size={20} /> Buat Thread
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Discussions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
              <MessageSquare size={22} className="text-primary" /> Diskusi Populer
            </h3>
            {[
              { title: "Tips diet keto untuk pemula", author: "Dr. Sarah", replies: 45, category: "Nutrisi" },
              { title: "Latihan beban di rumah tanpa alat", author: "Coach Mike", replies: 120, category: "Olahraga" },
              { title: "Cara mengatasi burnout di akhir bulan", author: "Anna W.", replies: 32, category: "Mental Health" },
            ].map((thread, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-primary-light text-primary text-[10px] font-bold uppercase rounded-full">{thread.category}</span>
                  <span className="text-[10px] text-mediumGrey font-bold uppercase">{thread.replies} Balasan</span>
                </div>
                <h4 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors">{thread.title}</h4>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${thread.author}/100`} alt="author" />
                  </div>
                  <span className="text-xs text-mediumGrey">Diposting oleh <span className="font-bold text-charcoal">{thread.author}</span></span>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
              <Calendar size={22} className="text-primary" /> Event Mendatang
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Yoga Virtual Bersama", date: "Sabtu, 08:00 WIB", icon: Star },
                { title: "Webinar Financial Wellness", date: "Minggu, 19:00 WIB", icon: Star },
              ].map((event, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                    <event.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">{event.title}</h4>
                    <p className="text-sm text-mediumGrey mt-1">{event.date}</p>
                  </div>
                  <button className="w-full py-2.5 bg-primary-light text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm">
                    Daftar Event
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Leaderboard */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
              <Trophy size={22} className="text-secondary" /> Top Wellness
            </h3>
            <div className="space-y-4">
              {[
                { name: "Andy E. Prabowo", points: 1240, rank: 1 },
                { name: "Siti Rahma", points: 1100, rank: 2 },
                { name: "Budi Santoso", points: 950, rank: 3 },
                { name: "Dewi Lestari", points: 880, rank: 4 },
                { name: "Rian Hidayat", points: 820, rank: 5 },
              ].map((user) => (
                <div key={user.rank} className="flex items-center gap-4 py-1 border-b border-gray-50 last:border-none">
                  <span className={`w-6 text-xs font-bold ${user.rank === 1 ? 'text-secondary' : 'text-mediumGrey'}`}>#{user.rank}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${user.name}/100`} alt="profile" />
                  </div>
                  <span className="flex-1 text-sm font-bold text-charcoal truncate">{user.name}</span>
                  <span className="text-sm font-bold text-primary">{user.points} pts</span>
                </div>
              ))}
            </div>
            <button className="w-full text-primary font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
              Lihat Semua <ChevronRight size={16} />
            </button>
          </div>

          {/* Achievement Badges */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-xl font-bold text-charcoal">Badge Saya</h3>
            <div className="grid grid-cols-4 gap-4">
              {BADGES.map((badge) => (
                <div key={badge.id} className="group relative">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform cursor-pointer">
                    {badge.icon}
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-charcoal text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {badge.name}
                  </div>
                </div>
              ))}
              <div className="w-12 h-12 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-300">
                <Plus size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
