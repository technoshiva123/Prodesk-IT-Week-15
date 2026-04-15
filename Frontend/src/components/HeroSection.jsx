import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#030712] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-10 animate-fade-in">
          <Sparkles size={14} />
          <span>New: AI-Powered Task Prioritization</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8">
          The Operating System <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-violet-400 to-violet-600">
            For Your Productivity
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          TaskMatrix brings your team’s goals, tasks, and files together in one place. 
          Built for modern developers who value speed and minimalist design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => navigate('/login')}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
           Login
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full border border-gray-800 hover:bg-gray-800 transition-colors"
          >
            Register
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-white/5 opacity-50">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle size={16} className="text-violet-500" /> Real-time Sync
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle size={16} className="text-violet-500" /> End-to-end Encryption
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle size={16} className="text-violet-500" /> BCA Course Compatible
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;