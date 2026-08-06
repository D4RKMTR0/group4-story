import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="flex min-h-screen justify-center bg-(--bg-darker) py-0">
      <main className="relative flex min-h-screen w-full min-w-2xl flex-col overflow-hidden bg-(--bg) text-(--text) shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <Navbar />
        
        <div className="p-6">
          <Routes>
            <Route path="/" element={<div>Home Page Content</div>} />
            <Route path="/buod" element={<div>Buod Page Content</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}