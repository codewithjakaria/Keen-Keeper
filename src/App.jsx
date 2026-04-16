import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import logoImg from './assets/logo.png';
import callImg from './assets/call.png';
import facebookImg from './assets/facebook.png';
import instagramImg from './assets/instagram.png';
import textImg from './assets/text.png';
import twitterImg from './assets/twitter.png';
import videoImg from './assets/video.png';
import {
  Home,
  TimerReset,
  BarChart3,
  Plus,
  ArrowLeft,
  Trash2,
  BellOff,
  Archive,
  ChevronDown,
  Loader2,
  Menu,
  X,
} from 'lucide-react';

function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
        <Loader2 className="w-12 h-12 text-[#244D3F] animate-spin mb-4" />
        <p className="text-[#244D3F] font-bold text-lg tracking-tighter animate-pulse">
          KeenKeeper is loading...
        </p>
      </div>
    );
  }

  return <div className="animate-in fade-in duration-500">{children}</div>;
}

function Layout({ children, setSelectedFriend }) {
  const navigate = useNavigate();
  const location = useLocation();
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

function AppContent() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

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
      days: 45,
      status: 'overdue',
      tags: ['FAMILY'],
    },
    {
      id: 3,
      name: 'Lisa Nakamura',
      picture: 'https://i.pravatar.cc/150?u=3',
      days: 12,
      status: 'on-track',
      tags: ['WORK'],
    },
    {
      id: 4,
      name: 'James Wright',
      picture: 'https://i.pravatar.cc/150?u=4',
      days: 80,
      status: 'overdue',
      tags: ['HOBBY'],
    },
    {
      id: 5,
      name: 'Sarah Chen',
      picture: 'https://i.pravatar.cc/150?u=5',
      days: 5,
      status: 'on-track',
      tags: ['FRIEND'],
    },
    {
      id: 6,
      name: 'Michael Ross',
      picture: 'https://i.pravatar.cc/150?u=6',
      days: 34,
      status: 'almost-due',
      tags: ['WORK'],
    },
    {
      id: 7,
      name: 'Anna Scott',
      picture: 'https://i.pravatar.cc/150?u=7',
      days: 90,
      status: 'overdue',
      tags: ['FAMILY'],
    },
    {
      id: 8,
      name: 'Kevin Hart',
      picture: 'https://i.pravatar.cc/150?u=8',
      days: 2,
      status: 'on-track',
      tags: ['HOBBY'],
    },
    {
      id: 9,
      name: 'John Doe',
      picture: 'https://i.pravatar.cc/150?u=9',
      days: 55,
      status: 'almost-due',
      tags: ['FRIEND'],
    },
    {
      id: 10,
      name: 'Jane Smith',
      picture: 'https://i.pravatar.cc/150?u=10',
      days: 15,
      status: 'on-track',
      tags: ['WORK'],
    },
    {
      id: 11,
      name: 'Chris Evans',
      picture: 'https://i.pravatar.cc/150?u=11',
      days: 72,
      status: 'overdue',
      tags: ['FRIEND'],
    },
    {
      id: 12,
      name: 'Robert Downey',
      picture: 'https://i.pravatar.cc/150?u=12',
      days: 28,
      status: 'almost-due',
      tags: ['WORK'],
    },
  ]);

  const addActivity = (type, person, icon) => {
    const today = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date());
    setTimeline([
      { id: Date.now(), type, person, date: today, icon },
      ...timeline,
    ]);

    toast.success(`${type} recorded with ${person}`, {
      style: {
        borderRadius: '12px',
        background: '#244D3F',
        color: '#fff',
        fontWeight: 'bold',
      },
      iconTheme: { primary: '#fff', secondary: '#244D3F' },
    });
  };

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

  const tomorrow = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(new Date().setDate(new Date().getDate() + 1)));
  const videoCount = timeline.filter(item => item.type === 'Video').length;
  const callCount = timeline.filter(item => item.type === 'Call').length;
  const messageCount = timeline.filter(item => item.type === 'Text').length;

  const calculateSlice = count =>
    (count / (videoCount + callCount + messageCount || 1)) *
      (2 * Math.PI * 70) +
    ' ' +
    2 * Math.PI * 70;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout setSelectedFriend={setSelectedFriend}>
            {selectedFriend ? (
              <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
                <button
                  onClick={() => setSelectedFriend(null)}
                  className="flex items-center gap-2 text-[#64748B] mb-8 hover:text-black transition-colors font-medium"
                >
                  <ArrowLeft size={20} /> Back to Dashboard
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm text-center">
                    <img
                      src={selectedFriend.picture}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#F8FAFC]"
                      alt=""
                    />
                    <h3 className="text-2xl font-bold">
                      {selectedFriend.name}
                    </h3>
                    <div
                      className={`mt-2 inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyles(selectedFriend.status)}`}
                    >
                      {selectedFriend.status}
                    </div>
                    <div className="mt-8 flex flex-col gap-3">
                      <button className="w-full py-2.5 border border-[#E2E8F0] rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-gray-50 transition">
                        <BellOff size={16} /> Snooze 2 Weeks
                      </button>
                      <button className="w-full py-2.5 border border-[#E2E8F0] rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-gray-50 transition">
                        <Archive size={16} /> Archive
                      </button>
                      <button className="w-full py-2.5 border border-[#FEE2E2] text-[#EF4444] rounded-xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-red-50 transition">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] text-center shadow-sm">
                        <p className="text-3xl font-bold">
                          {selectedFriend.days}
                        </p>
                        <p className="text-[10px] text-[#94A3B8] font-bold uppercase mt-1">
                          Days Since
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] text-center shadow-sm">
                        <p className="text-3xl font-bold">30</p>
                        <p className="text-[10px] text-[#94A3B8] font-bold uppercase mt-1">
                          Goal (Days)
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] text-center shadow-sm">
                        <p className="text-lg font-bold">{tomorrow}</p>
                        <p className="text-[10px] text-[#94A3B8] font-bold uppercase mt-1">
                          Next Due
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-[#F1F5F9] shadow-sm">
                      <h4 className="font-bold mb-6">Quick Check-In</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <button
                          onClick={() =>
                            addActivity('Call', selectedFriend.name, callImg)
                          }
                          className="flex flex-col items-center gap-3 p-6 border border-[#F1F5F9] rounded-2xl hover:bg-gray-50 group"
                        >
                          <img src={callImg} className="h-6 w-auto" alt="" />
                          <span className="text-xs font-bold uppercase">
                            Call
                          </span>
                        </button>
                        <button
                          onClick={() =>
                            addActivity('Text', selectedFriend.name, textImg)
                          }
                          className="flex flex-col items-center gap-3 p-6 border border-[#F1F5F9] rounded-2xl hover:bg-gray-50 group"
                        >
                          <img src={textImg} className="h-6 w-auto" alt="" />
                          <span className="text-xs font-bold uppercase">
                            Text
                          </span>
                        </button>
                        <button
                          onClick={() =>
                            addActivity('Video', selectedFriend.name, videoImg)
                          }
                          className="flex flex-col items-center gap-3 p-6 border border-[#F1F5F9] rounded-2xl hover:bg-gray-50 group"
                        >
                          <img src={videoImg} className="h-6 w-auto" alt="" />
                          <span className="text-xs font-bold uppercase">
                            Video
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#0F172A] mb-4 tracking-tighter">
                    Friends to keep close in your life
                  </h2>
                  <p className="text-[#64748B] max-w-lg mx-auto mb-8 text-lg">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                  </p>
                  <button className="bg-[#244D3F] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1a3a2f] shadow-md transition-all">
                    <Plus size={18} /> Add a Friend
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                  {[
                    { label: 'Total Friends', value: 12 },
                    { label: 'On Track', value: 4 },
                    { label: 'Need Attention', value: 8 },
                    { label: 'Interactions', value: 12 },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-2xl border border-[#F1F5F9] text-center shadow-sm hover:shadow-md transition-shadow"
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
                        onClick={() => setSelectedFriend(friend)}
                        className="bg-white p-8 rounded-[24px] border border-[#F1F5F9] shadow-sm flex flex-col items-center text-center cursor-pointer group hover:shadow-xl transition-all"
                      >
                        <img
                          src={friend.picture}
                          alt=""
                          className="w-20 h-20 rounded-full mb-4 border-4 border-[#F8FAFC] group-hover:scale-105 transition-transform"
                        />
                        <h4 className="font-bold text-lg mb-0.5">
                          {friend.name}
                        </h4>
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
              </div>
            )}
          </Layout>
        }
      />

      <Route
        path="/timeline"
        element={
          <Layout setSelectedFriend={setSelectedFriend}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-2 tracking-tighter">
                Timeline
              </h2>
              <div className="relative mb-8 w-full max-w-[200px]">
                <select
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#E2E8F0] py-2.5 px-4 rounded-xl cursor-pointer font-medium focus:ring-2 focus:ring-[#244D3F] outline-none"
                >
                  <option value="All">Filter timeline</option>
                  <option value="Call">Call</option>
                  <option value="Text">Text</option>
                  <option value="Video">Video</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
                />
              </div>
              <div className="space-y-4">
                {timeline.length === 0 ? (
                  <p className="text-center text-[#94A3B8] py-20 bg-[#F8FAFC] rounded-3xl border-2 border-dashed border-[#EDF2F7]">
                    No interactions recorded yet.
                  </p>
                ) : (
                  timeline
                    .filter(log => filter === 'All' || log.type === filter)
                    .map(log => (
                      <div
                        key={log.id}
                        className="flex items-center justify-between bg-white p-6 rounded-2xl border border-[#F1F5F9] shadow-sm animate-in slide-in-from-bottom-2 duration-300"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center border border-[#EDF2F7]">
                            <img
                              src={log.icon}
                              alt=""
                              className="w-5 h-5 object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-[#64748B]">
                              <span className="font-bold text-[#0F172A]">
                                {log.type}
                              </span>{' '}
                              with {log.person}
                            </p>
                            <p className="text-[12px] text-[#94A3B8] font-bold mt-1 uppercase tracking-wide">
                              {log.date}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setTimeline(timeline.filter(t => t.id !== log.id))
                          }
                          className="text-[#94A3B8] hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))
                )}
              </div>
            </div>
          </Layout>
        }
      />

      <Route
        path="/stats"
        element={
          <Layout setSelectedFriend={setSelectedFriend}>
            <section className="max-w-4xl mx-auto">
              <h1 className="text-6xl font-black text-[#0F172A] mb-12 tracking-tighter">
                Friendship Analytics
              </h1>
              <div className="bg-white p-12 rounded-[40px] border border-[#F1F5F9] shadow-sm flex flex-col items-center">
                <div className="w-full text-left mb-10">
                  <h2 className="text-[#64748B] text-xl font-bold">
                    By Interaction Type
                  </h2>
                </div>
                <div className="relative w-72 h-72 flex items-center justify-center">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 180 180"
                    className="-rotate-90 transition-transform"
                  >
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#F1F5F9"
                      strokeWidth="18"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#244D3F"
                      strokeWidth="20"
                      strokeDasharray={calculateSlice(videoCount)}
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#4ADE80"
                      strokeWidth="20"
                      strokeDasharray={calculateSlice(callCount)}
                      strokeDashoffset={
                        calculateSlice(videoCount).split(' ')[0] * -1
                      }
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="20"
                      strokeDasharray={calculateSlice(messageCount)}
                      strokeDashoffset={
                        calculateSlice(videoCount).split(' ')[0] * -1 +
                        calculateSlice(callCount).split(' ')[0] * -1
                      }
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                  </svg>
                </div>
                <div className="flex gap-10 mt-16 flex-wrap justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
                    <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">
                      Text
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">
                      Call
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#244D3F]"></div>
                    <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">
                      Video
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#F8FAFC]">
            <h1 className="text-[120px] md:text-[180px] font-black text-[#1E293B] leading-none mb-4 tracking-tighter">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-[#64748B] text-lg mb-10 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#244D3F] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Go Back Home
            </button>
          </div>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
