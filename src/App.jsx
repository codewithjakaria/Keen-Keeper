import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Home from './Pages/Home';
import Timeline from './Pages/Timeline';
import Stats from './Pages/Stats';

function AppContent() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const navigate = useNavigate();

  const addActivity = (type, person, icon) => {
    const today = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date());

    setTimeline(prev => [
      { id: Date.now(), type, person, date: today, icon },
      ...prev,
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            addActivity={addActivity}
          />
        }
      />
      <Route
        path="/timeline"
        element={
          <Timeline
            setSelectedFriend={setSelectedFriend}
            timeline={timeline}
            setTimeline={setTimeline}
          />
        }
      />
      <Route
        path="/stats"
        element={
          <Stats setSelectedFriend={setSelectedFriend} timeline={timeline} />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  const navigate = useNavigate();
  return (
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
