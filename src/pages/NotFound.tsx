import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex min-h-screen justify-center bg-(--bg-darker) py-0">
      <div className="relative flex min-h-screen w-full flex-1 flex-col items-center justify-center overflow-hidden bg-(--bg) px-6 text-center text-(--text) shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:max-w-2xl">
        <div className="flex w-full max-w-2xl flex-col items-center gap-3 mx-auto">
          <h1 className="font-handwritten text-6xl font-bold text-(--text) sm:text-7xl">
            404
          </h1>

          <p className="font-display text-xl font-semibold text-(--text)">
            Hindi Nahanap ang Pahina
          </p>

          <p className="max-w-sm text-sm leading-relaxed text-(--text-muted)">
            Ang pahinang hinahanap mo ay wala o inilipat na.
          </p>

          <Link
            to="/buod"
            className="mt-4 rounded-md border border-(--border-mid) bg-(--bg-card) px-5 py-2 text-sm text-(--text) transition-colors hover:bg-(--bg-subtle)"
          >
            Bumalik sa Simula
          </Link>
        </div>
      </div>
    </div>
  );
}