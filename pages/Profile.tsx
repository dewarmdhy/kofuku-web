
import React from 'react';
import { 
  User, 
  Settings, 
  ShieldCheck, 
  Bell, 
  Moon, 
  Globe, 
  ChevronRight,
  Edit2,
  Camera
} from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-charcoal font-heading">Profil Saya</h2>
        <button className="flex items-center gap-2 bg-white text-primary border border-primary/20 px-6 py-2 rounded-full font-bold hover:bg-primary-light transition-all">
          <Edit2 size={18} /> Edit Profil
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full bg-primary-light border-4 border-white shadow-xl overflow-hidden">
                <img src="https://picsum.photos/seed/andy_profile/300" alt="profile" />
              </div>
              <button className="absolute bottom-1 right-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <Camera size={18} />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-charcoal">Andy E. Prabowo</h3>
            <p className="text-mediumGrey">Product Designer at Lead Brokers</p>
            <div className="mt-6 px-4 py-2 bg-secondary text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-md">
              Premium Member
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-bold text-charcoal">Summary Kesehatan</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] text-mediumGrey font-bold uppercase">BMI</p>
                <p className="text-xl font-bold text-charcoal">23.5</p>
                <p className="text-[10px] text-success font-bold">Normal</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] text-mediumGrey font-bold uppercase">Berat</p>
                <p className="text-xl font-bold text-charcoal">72 kg</p>
                <p className="text-[10px] text-primary font-bold">-2kg vs Bulan lalu</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] text-mediumGrey font-bold uppercase">Tinggi</p>
                <p className="text-xl font-bold text-charcoal">175 cm</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] text-mediumGrey font-bold uppercase">Lingkar Perut</p>
                <p className="text-xl font-bold text-charcoal">85 cm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings & Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {[
              { label: "Informasi Pribadi", icon: User, color: "text-blue-600" },
              { label: "Status Langganan", icon: ShieldCheck, color: "text-emerald-600" },
              { label: "Preferensi Notifikasi", icon: Bell, color: "text-orange-600" },
              { label: "Tampilan & Tema", icon: Moon, color: "text-purple-600" },
              { label: "Bahasa", icon: Globe, color: "text-primary", val: "Bahasa Indonesia" },
              { label: "Pengaturan Akun", icon: Settings, color: "text-mediumGrey" },
            ].map((item, idx) => (
              <button 
                key={idx}
                className="w-full px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-all border-b border-gray-50 last:border-none group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-charcoal">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.val && <span className="text-xs text-mediumGrey font-medium">{item.val}</span>}
                  <ChevronRight size={18} className="text-mediumGrey group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          <div className="bg-error/5 p-8 rounded-3xl border border-error/10">
            <h4 className="font-bold text-error mb-2">Zona Berbahaya</h4>
            <p className="text-sm text-mediumGrey mb-6">Menghapus akun akan menghilangkan seluruh data progres, riwayat kesehatan, dan badge yang telah Anda kumpulkan.</p>
            <button className="px-6 py-2.5 bg-white border border-error text-error font-bold rounded-xl hover:bg-error hover:text-white transition-all text-sm">
              Hapus Akun Kofuku
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
