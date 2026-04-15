import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  LogOut,
  CheckCircle2,
  Clock,
  Plus,
  Settings,
  User as UserIcon,
  Search
} from 'lucide-react';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedName = localStorage.getItem('userName');

    if (!token) {
      navigate('/login');
    } else {
      setUserName(storedName || 'User');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex">

      <aside className="w-64 border-r border-white/5 bg-[#030712] hidden md:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-violet-600 rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight">TaskMatrix</span>
        </div>

        <nav className="space-y-2 flex-1">
          <div className="flex items-center gap-3 p-3 bg-violet-600/10 text-violet-400 rounded-xl">
            <LayoutDashboard size={20} />
            <span className="font-medium">Overview</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer">
            <CheckCircle2 size={20} />
            <span className="font-medium">My Tasks</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer">
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </div>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-400/5 rounded-xl transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">

        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#030712]/50 backdrop-blur-xl">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-xl w-96">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search tasks..." className="bg-transparent outline-none w-full text-sm" />
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs text-gray-500">Free Account</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center border-2 border-white/10">
              <UserIcon size={20} />
            </div>
          </div>
        </header>

        <section className="p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome Back, {userName}!</h1>
              <p className="text-gray-500 text-sm italic">"Build the skeleton. Make it walk." - Prodesk Team</p>
            </div>
            <button className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-medium transition-all shadow-lg shadow-violet-900/20">
              <Plus size={20} />
              New Task
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-gray-500 text-sm mb-1">Total Tasks</p>
              <h3 className="text-3xl font-bold">12</h3>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-gray-500 text-sm mb-1">In Progress</p>
              <h3 className="text-3xl font-bold text-violet-400">04</h3>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-gray-500 text-sm mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-emerald-400">08</h3>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
              <Clock className="text-gray-500" size={32} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-300">No active tasks today</h4>
            <p className="text-gray-500 max-w-sm mx-auto">Create a new task to start tracking your progress in the Matrix.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;