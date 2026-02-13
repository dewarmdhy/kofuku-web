
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Utensils, 
  Dumbbell, 
  MessageSquare, 
  User, 
  Home,
  Compass,
  Users,
  Settings,
  Bell,
  Search,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import MealPlan from './pages/MealPlan';
import Workout from './pages/Workout';
import MentalWellness from './pages/MentalWellness';
import HiKofuku from './pages/HiKofuku';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Community from './pages/Community';
import Programs from './pages/Programs';
import { Logo } from './components/Logo';

type Page = 'landing' | 'onboarding' | 'dashboard' | 'meals' | 'workouts' | 'mental' | 'hikofuku' | 'profile' | 'community' | 'programs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state
  useEffect(() => {
    const user = localStorage.getItem('kofuku_user');
    if (user && currentPage === 'landing') {
      setCurrentPage('dashboard');
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('onboarding');
  };

  const handleLogout = () => {
    localStorage.removeItem('kofuku_user');
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const NavItem = ({ icon: Icon, label, page }: { icon: any, label: string, page: Page }) => {
    const isActive = currentPage === page;
    const isSpecial = page === 'hikofuku';

    return (
      <button
        onClick={() => {
          setCurrentPage(page);
          setIsSidebarOpen(false);
        }}
        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive 
            ? 'bg-primary text-white shadow-md' 
            : isSpecial
              ? 'text-secondary font-bold border border-secondary/20 hover:bg-secondary/10'
              : 'text-mediumGrey hover:bg-primary-light hover:text-primary'
        } ${isSpecial && isActive ? 'bg-secondary text-white' : ''}`}
      >
        <Icon size={20} className={isSpecial && !isActive ? 'animate-pulse' : ''} />
        <span className="font-medium">{label}</span>
      </button>
    );
  };

  const MobileBottomNav = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2 flex justify-between items-center z-50">
      <button onClick={() => setCurrentPage('dashboard')} className={`flex flex-col items-center gap-1 ${currentPage === 'dashboard' ? 'text-primary' : 'text-mediumGrey'}`}>
        <Home size={22} />
        <span className="text-[10px]">Home</span>
      </button>
      <button onClick={() => setCurrentPage('meals')} className={`flex flex-col items-center gap-1 ${currentPage === 'meals' ? 'text-primary' : 'text-mediumGrey'}`}>
        <Utensils size={22} />
        <span className="text-[10px]">Nutrisi</span>
      </button>
      <button 
        onClick={() => setCurrentPage('hikofuku')} 
        className={`flex flex-col items-center gap-1 -mt-6 bg-secondary text-white p-3 rounded-full shadow-lg border-4 border-white animate-pulse-gold`}
      >
        <MessageSquare size={24} />
      </button>
      <button onClick={() => setCurrentPage('workouts')} className={`flex flex-col items-center gap-1 ${currentPage === 'workouts' ? 'text-primary' : 'text-mediumGrey'}`}>
        <Dumbbell size={22} />
        <span className="text-[10px]">Latihan</span>
      </button>
      <button onClick={() => setCurrentPage('profile')} className={`flex flex-col items-center gap-1 ${currentPage === 'profile' ? 'text-primary' : 'text-mediumGrey'}`}>
        <User size={22} />
        <span className="text-[10px]">Profil</span>
      </button>
    </div>
  );

  const Sidebar = () => (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 py-8 px-4 z-40">
      <div className="flex items-center gap-2 mb-10 px-2 cursor-pointer" onClick={() => setCurrentPage('dashboard')}>
        <Logo className="h-14" />
      </div>
      
      <div className="flex-1 space-y-2">
        <NavItem icon={LayoutDashboard} label="Dashboard" page="dashboard" />
        <NavItem icon={Utensils} label="Meal Plan" page="meals" />
        <NavItem icon={Dumbbell} label="Workout" page="workouts" />
        <NavItem icon={Home} label="Mental Wellness" page="mental" />
        <NavItem icon={Compass} label="Programs" page="programs" />
        <NavItem icon={Users} label="Community" page="community" />
        <div className="pt-4 mt-4 border-t border-gray-50">
          <NavItem icon={MessageSquare} label="Hi Kofuku" page="hikofuku" />
          <NavItem icon={User} label="Profile" page="profile" />
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-50">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-error hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );

  const Header = () => (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-30">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-primary">
          <Menu size={24} />
        </button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-mediumGrey" size={18} />
          <input 
            type="text" 
            placeholder="Cari program, tips..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-mediumGrey hover:text-primary relative p-2">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l pl-4 border-gray-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-charcoal">Andy E. Prabowo</p>
            <p className="text-[10px] text-mediumGrey uppercase tracking-wider">Premium Member</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold overflow-hidden border-2 border-primary/20">
            <img src="https://picsum.photos/seed/andy/100" alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );

  if (currentPage === 'landing') return <Landing onStart={handleLogin} />;
  if (currentPage === 'onboarding') return <Onboarding onFinish={() => setCurrentPage('dashboard')} />;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="md:ml-64 pt-20 pb-24 md:pb-10 px-6 max-w-7xl mx-auto">
        {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}
        {currentPage === 'meals' && <MealPlan />}
        {currentPage === 'workouts' && <Workout />}
        {currentPage === 'mental' && <MentalWellness />}
        {currentPage === 'hikofuku' && <HiKofuku />}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'community' && <Community />}
        {currentPage === 'programs' && <Programs />}
      </main>

      <MobileBottomNav />
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-charcoal/50 z-50 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className="w-64 h-full bg-white p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
               <Logo className="h-10" />
              <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
            </div>
            <nav className="space-y-2">
              <NavItem icon={LayoutDashboard} label="Dashboard" page="dashboard" />
              <NavItem icon={Utensils} label="Meal Plan" page="meals" />
              <NavItem icon={Dumbbell} label="Workout" page="workouts" />
              <NavItem icon={Home} label="Mental Wellness" page="mental" />
              <NavItem icon={Compass} label="Programs" page="programs" />
              <NavItem icon={Users} label="Community" page="community" />
              <NavItem icon={MessageSquare} label="Hi Kofuku" page="hikofuku" />
              <NavItem icon={User} label="Profile" page="profile" />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
