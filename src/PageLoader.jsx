import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function PageLoader({ children }) {
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
