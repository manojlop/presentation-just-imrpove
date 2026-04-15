import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { PresentationDemo } from './pages/PresentationDemo';
import heroImage from './images/heroimage5.png';
import './index.css';

function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_35%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-8 text-center sm:py-10">
        <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
          JustImprove
        </span>

        <section className="mt-6 flex w-full flex-col items-center gap-5 sm:gap-6">
          <div className="space-y-3">
            <h1 className="max-w-4xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Digitalno rešenje za kontinuirano unapređenje
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              JustImprove pomaže timovima da prate ideje, rutine, zadatke i rezultate kroz jasan i pregledan
              interfejs prilagođen svakodnevnom radu u proizvodnji.
            </p>
          </div>

          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur sm:rounded-[2rem] sm:p-4">
              <img
                src={heroImage}
                alt="Prikaz JustImprove aplikacije"
                className="mx-auto max-h-[38vh] w-full rounded-[1rem] object-contain sm:max-h-[42vh] sm:rounded-[1.5rem]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="mx-auto max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">
              Aplikacija povezuje predloge za unapređenje, upravljanje tagovima, operativne rutine i izveštavanje,
              kako bi menadžment i operativni timovi imali brži uvid u stanje procesa i sledeće korake.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/presentation"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                <PlayCircle className="h-5 w-5" />
                Otvori prezentaciju
              </Link>
              <p className="text-sm text-slate-400">Pritisnite `Esc` u prezentaciji za povratak na ovu stranicu.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presentation" element={<PresentationDemo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
