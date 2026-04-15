import React from 'react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  Cpu,
  Factory,
  FolderKanban,
  LayoutGrid,
  Package,
  PlugZap,
  Radio,
  RefreshCw,
  Sparkles,
  Tag,
  Wrench,
} from 'lucide-react';

type IntegrationTone = 'blue' | 'emerald' | 'amber' | 'violet' | 'rose' | 'slate';

interface IntegrationSystem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tone: IntegrationTone;
  desktopClassName: string;
}

const toneClasses: Record<IntegrationTone, string> = {
  blue: 'border-blue-200 bg-blue-50/90 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-200',
  emerald: 'border-emerald-200 bg-emerald-50/90 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200',
  amber: 'border-amber-200 bg-amber-50/90 text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200',
  violet: 'border-violet-200 bg-violet-50/90 text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/30 dark:text-violet-200',
  rose: 'border-rose-200 bg-rose-50/90 text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200',
  slate: 'border-slate-200 bg-slate-50/90 text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200',
};

const integrationSystems: IntegrationSystem[] = [
  {
    title: 'ERP',
    subtitle: 'Master podaci, nalozi, troskovi i planiranje',
    icon: Factory,
    tone: 'blue',
    desktopClassName: 'left-0 top-5',
  },
  {
    title: 'IoT',
    subtitle: 'Signali sa masina, senzori i telemetrija',
    icon: Radio,
    tone: 'emerald',
    desktopClassName: 'right-0 top-5',
  },
  {
    title: 'CMMS',
    subtitle: 'Radni nalozi, odrzavanje i istorija opreme',
    icon: Wrench,
    tone: 'amber',
    desktopClassName: 'left-0 top-1/2 -translate-y-1/2',
  },
  {
    title: 'WMS',
    subtitle: 'Kretanje robe, lager i tok materijala',
    icon: Package,
    tone: 'violet',
    desktopClassName: 'right-0 top-1/2 -translate-y-1/2',
  },
  {
    title: 'Project management',
    subtitle: 'Projekti, zadaci, roadmap i ownership',
    icon: Briefcase,
    tone: 'rose',
    desktopClassName: 'left-0 bottom-5',
  },
  {
    title: 'Other management software',
    subtitle: 'MES, QMS, BI i drugi specijalizovani sistemi',
    icon: LayoutGrid,
    tone: 'slate',
    desktopClassName: 'right-0 bottom-5',
  },
];

const integrationBenefits = [
  'JustImprove ostaje centralno mesto za probleme, akcije, rutine i knowledge capture.',
  'Podaci mogu da dolaze iz postojecih alata, a odluke i akcije da se vracaju nazad.',
  'Tim dobija jedan operativni tok umesto prebacivanja izmedju vise nepovezanih ekrana.',
];

const coreToolCards = [
  { title: 'Tagovi', icon: Tag },
  { title: 'Akcije', icon: ClipboardList },
  { title: 'Rutine', icon: RefreshCw },
  { title: 'Projekti', icon: FolderKanban },
  { title: 'Baza Znanja', icon: BookOpen },
  { title: 'Izvestaji', icon: BarChart3 },
];

const Slide13Integrations: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto px-3 sm:px-4 py-3">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-start gap-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
            <PlugZap className="h-3.5 w-3.5" strokeWidth={2.2} />
            Integracije sa postojecim sistemima
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            JustImprove kao centralni operativni sistem
          </h2>
          <p className="mx-auto max-w-5xl text-xs sm:text-sm md:text-base text-gray-600 dark:text-white transition-colors">
            Nase resenje moze da stoji u sredini operacije i da se povezuje sa alatima koje kompanija vec koristi, bez potrebe da se postojece okruzenje menja preko noci.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-5 lg:p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40">
          <div className="grid gap-4 xl:hidden">
            <div className="rounded-[28px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
                    Centralni sloj
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">JustImprove</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-200">
                    Jedan operativni sistem za prijavu problema, akcije, rutine, izvestaje i knowledge flow kroz celu fabriku.
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10">
                  <Cpu className="h-7 w-7 text-blue-100" strokeWidth={2} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {coreToolCards.map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-2 text-blue-100">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">{title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {integrationSystems.map(({ title, subtitle, icon: Icon, tone }) => (
                <div
                  key={title}
                  className={`rounded-2xl border p-3 shadow-sm transition-colors ${toneClasses[tone]}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-950/50">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white transition-colors">{title}</h4>
                        <ArrowRight className="h-3.5 w-3.5 text-gray-400 dark:text-slate-500" strokeWidth={2} />
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 transition-colors">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[510px] xl:block">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 610"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path d="M160 95 L260 95 L260 210 L330 210" stroke="url(#lineLeftTop)" strokeWidth="3" strokeLinecap="round" />
              <path d="M840 95 L740 95 L740 210 L670 210" stroke="url(#lineRightTop)" strokeWidth="3" strokeLinecap="round" />
              <path d="M160 305 L330 305" stroke="url(#lineLeftMid)" strokeWidth="3" strokeLinecap="round" />
              <path d="M840 305 L670 305" stroke="url(#lineRightMid)" strokeWidth="3" strokeLinecap="round" />
              <path d="M160 515 L260 515 L260 400 L330 400" stroke="url(#lineLeftBottom)" strokeWidth="3" strokeLinecap="round" />
              <path d="M840 515 L740 515 L740 400 L670 400" stroke="url(#lineRightBottom)" strokeWidth="3" strokeLinecap="round" />

              {[
                [160, 95],
                [840, 95],
                [160, 305],
                [840, 305],
                [160, 515],
                [840, 515],
                [330, 210],
                [670, 210],
                [330, 305],
                [670, 305],
                [330, 400],
                [670, 400],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#3B82F6" fillOpacity="0.95" />
              ))}

              <defs>
                <linearGradient id="lineLeftTop" x1="160" y1="95" x2="330" y2="210" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="lineRightTop" x1="840" y1="95" x2="670" y2="210" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34D399" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="lineLeftMid" x1="160" y1="305" x2="330" y2="305" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FBBF24" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="lineRightMid" x1="840" y1="305" x2="670" y2="305" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A78BFA" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="lineLeftBottom" x1="160" y1="515" x2="330" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FB7185" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="lineRightBottom" x1="840" y1="515" x2="670" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#94A3B8" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>

            {integrationSystems.map(({ title, subtitle, icon: Icon, tone, desktopClassName }) => (
              <div
                key={title}
                className={`absolute w-[228px] rounded-[26px] border p-4 shadow-sm backdrop-blur-sm transition-colors ${toneClasses[tone]} ${desktopClassName}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/85 shadow-sm dark:bg-slate-950/50">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white transition-colors">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 transition-colors">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.28)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
                    Centralni sistem
                  </div>
                  <h3 className="mt-3 text-3xl font-bold">JustImprove</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    Operativni sloj koji povezuje prijave, akcije, rutine, izvestavanje i knowledge capture kroz celu organizaciju.
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-white/10">
                  <Cpu className="h-8 w-8 text-blue-100" strokeWidth={2} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {coreToolCards.map(({ title, icon: Icon }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-2.5 text-blue-100">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">{title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                <div className="flex items-center gap-2 text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.1} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Bez novog silosa</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-emerald-50">
                  Cilj nije da zameni sve postojece alate, vec da ih spoji oko jednog jasnog operativnog toka.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {integrationBenefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-slate-200 bg-white/90 p-3.5 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800/90"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 flex-shrink-0 text-blue-500" strokeWidth={2.2} />
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-200 transition-colors">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide13Integrations;
