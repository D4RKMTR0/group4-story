import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function AppLayout() {
  return (
    <div className="flex min-h-screen justify-center bg-(--bg-darker) py-0">
      <main className="relative flex min-h-screen w-screen flex-1 flex-col overflow-hidden bg-(--bg) text-(--text) shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:w-full sm:min-w-2xl">
        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
