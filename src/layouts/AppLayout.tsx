import { useState, useRef, createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Export context so it can be used in pages
export const ScrollThresholdContext = createContext({
  setTopThreshold: (_val: number) => {},
});

function AppLayout() {
  const fadeSize = '128px';
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const [topThreshold, setTopThreshold] = useState(10); // Default fallback
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setShowTopFade(scrollPercentage > topThreshold);

    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 20;
    setShowBottomFade(!isNearBottom);
  };

  const getMaskImage = () => {
    const top = showTopFade ? 'transparent' : 'black';
    const bottom = showBottomFade ? 'transparent' : 'black';
    return `linear-gradient(to bottom, ${top}, black ${showTopFade ? fadeSize : '0px'}, black ${showBottomFade ? `calc(100% - ${fadeSize})` : '100%'}, ${bottom})`;
  };

  return (
    <ScrollThresholdContext.Provider value={{ setTopThreshold }}>
      <div className="flex h-screen justify-center bg-(--bg-darker) py-0 overflow-hidden">
        <main className="relative flex h-full w-full flex-col bg-(--bg) text-(--text) shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:max-w-2xl">
          <Navbar />
          
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="min-h-0 flex-1 overflow-y-auto p-6"
            style={{
              maskImage: getMaskImage(),
              WebkitMaskImage: getMaskImage()
            }}
          >
            <Outlet />
          </div>
          
          <Footer />
        </main>
      </div>
    </ScrollThresholdContext.Provider>
  );
}

export default AppLayout;