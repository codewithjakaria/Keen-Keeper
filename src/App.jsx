import { useState } from 'react';
import logoImg from './assets/logo.png';
import callImg from './assets/call.png';
import facebookImg from './assets/facebook.png';
import instagramImg from './assets/instagram.png';
import logoXlImg from './assets/logo-xl.png';
import textImg from './assets/text.png';
import twitterImg from './assets/twitter.png';
import videoImg from './assets/video.png';
import { Home, TimerReset, BarChart3, Plus } from 'lucide-react';

function App() {
  const [friends] = useState([
    {
      id: 1,
      name: 'David Kim',
      picture: 'https://i.pravatar.cc/150?u=1',
      days: 62,
      status: 'almost-due',
      tags: ['WORK'],
    },
    {
      id: 2,
      name: 'Emma Wilson',
      picture: 'https://i.pravatar.cc/150?u=2',
      days: 62,
      status: 'overdue',
      tags: ['FAMILY'],
    },
    {
      id: 3,
      name: 'Lisa Nakamura',
      picture: 'https://i.pravatar.cc/150?u=3',
      days: 62,
      status: 'overdue',
      tags: ['WORK'],
    },
    {
      id: 4,
      name: 'James Wright',
      picture: 'https://i.pravatar.cc/150?u=4',
      days: 62,
      status: 'overdue',
      tags: ['HOBBY', 'TRAVEL'],
    },
    {
      id: 5,
      name: 'David Kim',
      picture: 'https://i.pravatar.cc/150?u=5',
      days: 62,
      status: 'overdue',
      tags: ['WORK'],
    },
    {
      id: 6,
      name: 'Emma Wilson',
      picture: 'https://i.pravatar.cc/150?u=6',
      days: 62,
      status: 'on-track',
      tags: ['FAMILY'],
    },
    {
      id: 7,
      name: 'Lisa Nakamura',
      picture: 'https://i.pravatar.cc/150?u=7',
      days: 62,
      status: 'on-track',
      tags: ['WORK'],
    },
    {
      id: 8,
      name: 'James Wright',
      picture: 'https://i.pravatar.cc/150?u=8',
      days: 62,
      status: 'almost-due',
      tags: ['HOBBY', 'TRAVEL'],
    },
    {
      id: 9,
      name: 'David Kim',
      picture: 'https://i.pravatar.cc/150?u=9',
      days: 62,
      status: 'almost-due',
      tags: ['WORK'],
    },
    {
      id: 10,
      name: 'Emma Wilson',
      picture: 'https://i.pravatar.cc/150?u=10',
      days: 62,
      status: 'overdue',
      tags: ['FAMILY'],
    },
    {
      id: 11,
      name: 'Lisa Nakamura',
      picture: 'https://i.pravatar.cc/150?u=11',
      days: 62,
      status: 'overdue',
      tags: ['WORK'],
    },
    {
      id: 12,
      name: 'James Wright',
      picture: 'https://i.pravatar.cc/150?u=12',
      days: 62,
      status: 'on-track',
      tags: ['HOBBY', 'TRAVEL'],
    },
  ]);

  const stats = [
    { label: 'Total Friends', value: 10 },
    { label: 'On Track', value: 3 },
    { label: 'Need Attention', value: 6 },
    { label: 'Interactions This Month', value: 12 },
  ];

  const getStatusStyles = status => {
    switch (status) {
      case 'overdue':
        return 'bg-[#FEE2E2] text-[#EF4444]';
      case 'almost-due':
        return 'bg-[#FFEDD5] text-[#F59E0B]';
      case 'on-track':
        return 'bg-[#DCFCE7] text-[#10B981]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B]">
      {/* Header Section */}
      <header className="border-b border-[#E9E9E9] px-4 py-3 md:px-[10%] sticky top-0 bg-white z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="logo" className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-white bg-[#244D3F] px-5 py-2 rounded-full">
              <Home size={18} /> Home
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
              <TimerReset size={18} /> Timeline
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
              <BarChart3 size={18} /> Stats
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Friends to keep close in your life
          </h2>
          <p className="text-[#64748B] max-w-lg mx-auto mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="bg-[#244D3F] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1a3a2f] transition shadow-md">
            <Plus size={18} /> Add a Friend
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-[#F1F5F9] text-center shadow-sm"
            >
              <div className="text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <section>
          <h3 className="text-xl font-bold mb-8">Your Friends</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {friends.map(friend => (
              <div
                key={friend.id}
                className="bg-white p-8 rounded-[24px] border border-[#F1F5F9] shadow-sm flex flex-col items-center text-center hover:shadow-xl transition-all group"
              >
                <img
                  src={friend.picture}
                  alt=""
                  className="w-20 h-20 rounded-full mb-4 border-4 border-[#F8FAFC] group-hover:scale-105 transition-transform"
                />
                <h4 className="font-bold text-lg mb-0.5">{friend.name}</h4>
                <p className="text-xs text-[#94A3B8] mb-4">
                  {friend.days}d ago
                </p>

                <div className="flex gap-1.5 mb-5">
                  {friend.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-extrabold bg-[#F0FDF4] text-[#166534] px-2 py-0.5 rounded uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className={`text-[11px] font-bold px-5 py-1.5 rounded-full capitalize tracking-wide ${getStatusStyles(friend.status)}`}
                >
                  {friend.status.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#244D3F] text-white py-16 px-4 md:px-[10%] mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-10">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="KeenKeeper Logo"
                  className="h-15 w-auto invert brightness-5"
                />
              </div>
              <p className="text-[#98B5AB] max-w-xl text-lg">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <h4 className="text-xl font-semibold">Social Links</h4>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#406757] hover:bg-[#2d5d4c] transition-all"
                >
                  <img
                    src={facebookImg}
                    alt="Facebook"
                    className="w-5 h-5 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#406757] hover:bg-[#2d5d4c] transition-all"
                >
                  <img
                    src={instagramImg}
                    alt="Instagram"
                    className="w-5 h-5 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#406757] hover:bg-[#2d5d4c] transition-all"
                >
                  <img
                    src={twitterImg}
                    alt="Twitter"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[#406757] flex flex-col md:flex-row items-center justify-between text-sm text-[#98B5AB] gap-6">
            <p>&copy; 2024 KeenKeeper. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
