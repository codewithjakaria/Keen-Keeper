import { useState } from 'react';
import logoImg from './assets/logo.png';
import callImg from './assets/call.png';
import facebookImg from './assets/facebook.png';
import instagramImg from './assets/instagram.png';
import logoXlImg from './assets/logo-xl.png';
import textImg from './assets/text.png';
import twitterImg from './assets/twitter.png';
import videoImg from './assets/video.png';
import { Home, TimerReset, BarChart3 } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="border-b border-[#E9E9E9] px-4 py-3 md:px-[10%] shadow">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="KeenKeeper" className="h-8 w-auto" />
          </div>
          <ul className="flex items-center gap-2 md:gap-4">
            <li>
              <button className="flex items-center gap-2 text-sm font-medium text-white bg-[#244D3F] px-4 py-2 rounded-full transition-all">
                <Home size={18} />
                Home
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#1E1E1E] px-4 py-2 transition-colors">
                <TimerReset size={18} />
                Timeline
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#1E1E1E] px-4 py-2 transition-colors">
                <BarChart3 size={18} />
                Stats
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
