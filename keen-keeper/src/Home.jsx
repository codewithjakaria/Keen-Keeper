import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft, BellOff, Archive, Trash2, Plus } from 'lucide-react';
import Layout from './Layout';
import callImg from './assets/call.png';
import textImg from './assets/text.png';
import videoImg from './assets/video.png';

const FRIENDS = [
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
];

function getStatusStyles(status) {
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
}

export default function Home({
  selectedFriend,
  setSelectedFriend,
  addActivity,
}) {
  const tomorrow = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(new Date().setDate(new Date().getDate() + 1)));

  return (
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
              <h3 className="text-2xl font-bold">{selectedFriend.name}</h3>
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
                  <p className="text-3xl font-bold">{selectedFriend.days}</p>
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
                    <span className="text-xs font-bold uppercase">Call</span>
                  </button>
                  <button
                    onClick={() =>
                      addActivity('Text', selectedFriend.name, textImg)
                    }
                    className="flex flex-col items-center gap-3 p-6 border border-[#F1F5F9] rounded-2xl hover:bg-gray-50 group"
                  >
                    <img src={textImg} className="h-6 w-auto" alt="" />
                    <span className="text-xs font-bold uppercase">Text</span>
                  </button>
                  <button
                    onClick={() =>
                      addActivity('Video', selectedFriend.name, videoImg)
                    }
                    className="flex flex-col items-center gap-3 p-6 border border-[#F1F5F9] rounded-2xl hover:bg-gray-50 group"
                  >
                    <img src={videoImg} className="h-6 w-auto" alt="" />
                    <span className="text-xs font-bold uppercase">Video</span>
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
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
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
              {FRIENDS.map(friend => (
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
        </div>
      )}
    </Layout>
  );
}
