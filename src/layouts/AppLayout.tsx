import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AppLayout() {
  return (
    <div className="flex min-h-screen justify-center bg-(--bg-darker) py-0">
      <main className="relative flex min-h-screen w-full flex-1 flex-col overflow-hidden bg-(--bg) text-(--text) shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:max-w-2xl">
        <Navbar />
        <div className="min-w-0 flex-1 p-6">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
