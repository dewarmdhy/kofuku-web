
import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Droplet, 
  ShoppingCart, 
  Lightbulb, 
  Flame,
  Info
} from 'lucide-react';
import { SAMPLE_MEALS } from '../data';

const MealPlan: React.FC = () => {
  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const [selectedDay, setSelectedDay] = React.useState(0);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-charcoal font-heading">Meal Plan</h2>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-dark shadow-lg transition-all">
          <Plus size={20} /> Log Makanan
        </button>
      </div>

      {/* Week Calendar */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4 px-2">
          <span className="font-bold text-charcoal text-lg">Maret 2024</span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg text-mediumGrey"><ChevronLeft size={20}/></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-mediumGrey"><ChevronRight size={20}/></button>
          </div>
        </div>
        <div className="flex justify-between gap-2 overflow-x-auto pb-2 custom-scrollbar">
          {days.map((day, idx) => (
            <button 
              key={day}
              onClick={() => setSelectedDay(idx)}
              className={`flex-1 min-w-[60px] py-4 rounded-2xl flex flex-col items-center gap-1 transition-all ${selectedDay === idx ? 'bg-primary text-white shadow-md' : 'bg-gray-50 text-mediumGrey hover:bg-gray-100'}`}
            >
              <span className="text-[10px] uppercase font-bold tracking-widest">{day}</span>
              <span className="text-lg font-bold">{18 + idx}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Meal List */}
        <div className="lg:col-span-2 space-y-6">
          {SAMPLE_MEALS.map((meal) => (
            <div key={meal.id} className="bg-white overflow-hidden rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row group">
              <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-primary-light text-primary text-[10px] font-bold uppercase rounded-full">{meal.type}</span>
                    <button className="text-mediumGrey hover:text-primary"><Plus size={20} /></button>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">{meal.name}</h3>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-50">
                  <div className="text-center">
                    <p className="text-[10px] text-mediumGrey font-bold uppercase">Kalori</p>
                    <p className="font-bold text-charcoal">{meal.calories}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-mediumGrey font-bold uppercase">Protein</p>
                    <p className="font-bold text-success">{meal.protein}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-mediumGrey font-bold uppercase">Karbo</p>
                    <p className="font-bold text-warning">{meal.carbs}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-mediumGrey font-bold uppercase">Lemak</p>
                    <p className="font-bold text-error">{meal.fat}g</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Trackers */}
        <div className="space-y-6">
          {/* Calorie Progress */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-charcoal mb-6 flex items-center gap-2">
              <Flame size={20} className="text-error" /> Kalori Harian
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-mediumGrey">Terkonsumsi</span>
                <span className="font-bold text-charcoal">1,250 / 2,000 kcal</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '62%' }}></div>
              </div>
            </div>
            <p className="text-xs text-mediumGrey">Sisa 750 kcal untuk makan malam & snack.</p>
          </div>

          {/* Water Tracker */}
          <div className="bg-primary text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <Droplet size={20} /> Water Tracker
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`h-14 rounded-xl flex items-center justify-center border-2 transition-all ${i < 5 ? 'bg-white text-primary border-white' : 'bg-white/10 border-white/20'}`}>
                    <Droplet size={24} className={i < 5 ? 'fill-primary' : ''} />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/80">Anda sudah minum 1.2L air. 3 gelas lagi untuk mencapai target!</p>
            </div>
            <Droplet size={200} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
          </div>

          {/* Grocery List Teaser */}
          <div className="bg-surface p-6 rounded-3xl border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-surface/80 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <ShoppingCart size={24} />
              </div>
              <div>
                <h4 className="font-bold text-charcoal">Daftar Belanja</h4>
                <p className="text-xs text-mediumGrey">12 Item ditambahkan</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-mediumGrey group-hover:translate-x-1 transition-all" />
          </div>

          {/* Daily Tip */}
          <div className="bg-secondary/10 p-6 rounded-3xl border border-secondary/20 space-y-3">
            <div className="flex items-center gap-2 text-secondary">
              <Lightbulb size={20} />
              <span className="font-bold text-sm">Tips Gizi Harian</span>
            </div>
            <p className="text-sm text-charcoal leading-relaxed">
              "Cobalah untuk mengganti nasi putih dengan nasi merah atau ubi untuk serat yang lebih tinggi dan energi yang lebih stabil sepanjang hari."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
