import { useState } from 'react';
import { ChevronDown, Trash2 } from 'lucide-react';
import Layout from '../Components/Layout';

export default function Timeline({ setSelectedFriend, timeline, setTimeline }) {
  const [filter, setFilter] = useState('All');

  return (
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
  );
}
