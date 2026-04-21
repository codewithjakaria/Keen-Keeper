import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home, TimerReset, BarChart3, Menu, X } from 'lucide-react';
import PageLoader from './PageLoader';
import logoImg from './assets/logo.png';
import facebookImg from './assets/facebook.png';
import instagramImg from './assets/instagram.png';
import twitterImg from './assets/twitter.png';

export default function Layout({ children, setSelectedFriend }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B] flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <header className="border-b border-[#E9E9E9] px-4 py-3 md:px-[10%] sticky top-0 bg-white z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setSelectedFriend(null);
              setIsMenuOpen(false);
              navigate('/');
            }}
          >
            <img src={logoImg} alt="logo" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}`
              }
            >
              <Home size={18} /> Home
            </NavLink>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}`
              }
            >
              <TimerReset size={18} /> Timeline
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}`
              }
            >
              <BarChart3 size={18} /> Stats
            </NavLink>
          </div>

          <button
            className="md:hidden p-2 text-[#244D3F]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#E9E9E9] py-4 px-6 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-3">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-base font-bold p-4 rounded-2xl bg-gray-50 text-[#64748B]"
              >
                <Home size={20} /> Home
              </NavLink>
              <NavLink
                to="/timeline"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-base font-bold p-4 rounded-2xl bg-gray-50 text-[#64748B]"
              >
                <TimerReset size={20} /> Timeline
              </NavLink>
              <NavLink
                to="/stats"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-base font-bold p-4 rounded-2xl bg-gray-50 text-[#64748B]"
              >
                <BarChart3 size={20} /> Stats
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
        <PageLoader>{children}</PageLoader>
      </main>

      <footer className="bg-[#244D3F] text-white py-16 px-4 md:px-[10%] mt-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tighter">KeenKeeper</h2>
        <p className="text-[#98B5AB] max-w-xl mx-auto mb-10 text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex justify-center gap-6 mb-16">
          {[facebookImg, instagramImg, twitterImg].map((icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#406757] hover:bg-[#2d5d4c] transition-all"
            >
              <img src={icon} alt="" className="w-5 h-5 object-contain" />
            </a>
          ))}
        </div>
        <div className="pt-8 border-t border-[#406757] flex flex-col md:flex-row items-center justify-between text-sm text-[#98B5AB] max-w-7xl mx-auto w-full">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
