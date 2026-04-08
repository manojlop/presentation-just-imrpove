import React from 'react';
import { ArrowRight, BadgeCheck, Building2, Coins, Factory, FileText, Lightbulb, Sparkles, Users } from 'lucide-react';

const filingHighlights = [
  {
    icon: Coins,
    title: 'Jasno definisana korist',
    description: 'Ideja belezi ocekivani benefit: usteda, smanjenje troskova, manje zastoja, bolji kvalitet ili veca bezbednost.',
  },
  {
    icon: FileText,
    title: 'Dovoljno dobar opis',
    description: 'Opis, problem koji resava i osnovna logika predloga daju timu dovoljno konteksta za evaluaciju.',
  },
  {
    icon: Users,
    title: 'Odmah ukljuceni pravi ljudi',
    description: 'Prijava moze da navede i odeljenja koja ideja treba da ukljuci ili kojima treba da donese korist.',
  },
];

const flowSteps = [
  {
    owner: 'Zaposleni',
    title: 'Kreira i podnosi ideju',
    description: 'Ideja se prijavljuje kroz aplikaciju sa opisom, benefitima i timovima koje treba ukljuciti.',
  },
  {
    owner: 'Koordinator',
    title: 'Trazi dopunu ako treba',
    description: 'Ako ideja nije jasna ili potpuna, autor dobija notifikaciju da dopuni unos pre dalje obrade.',
  },
  {
    owner: 'Tim za ideje',
    title: 'Evaluacija vrednosti i izvodljivosti',
    description: 'Pregledaju se efekat, trosak, potrebni resursi, rizici i realnost sprovodjenja.',
  },
  {
    owner: 'Scoring model',
    title: 'Zakljucak i prioritet',
    description: 'Kroz scoring i diskusiju se donosi odluka: dopuna, odbijanje ili prelazak u kvalifikovani predlog.',
  },
  {
    owner: 'Odgovorni tim',
    title: 'Kvalifikovani predlog za realizaciju',
    description: 'Definise se nacin realizacije, vlasnik, prioritet i da li ideja ide kao projekat ili nalog za realizaciju.',
  },
  {
    owner: 'Realizacija',
    title: 'Sprovodjenje i zatvaranje',
    description: 'Odobrena ideja se prati do realizacije, a rezultat se vraca autoru i zainteresovanim timovima.',
  },
];

const deliveryModes = ['Projekat', 'Nalog za realizaciju', 'Realizovano'];

const IdeaManagementSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center px-3 sm:px-8 py-4 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center min-h-0">
        <div className="mb-3 sm:mb-5 flex-shrink-0 text-center xl:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
            <Lightbulb className="w-3.5 h-3.5" strokeWidth={2} />
            Idea Management
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">Predlozi i upravljanje idejama</h2>
          <p className="mt-2 max-w-4xl text-sm sm:text-lg text-gray-600 dark:text-white transition-colors">
            Predlog vise nije deo tagova. Dobija svoj tok: od prijave ideje, preko evaluacije i scoring-a, do realizacije kroz projekat ili nalog.
          </p>
        </div>

        <div className="grid flex-1 min-h-0 grid-cols-1 gap-4 sm:gap-6 items-center lg:grid-cols-[minmax(320px,420px)_minmax(0,1fr)]">
          <div className="space-y-3 sm:space-y-4 self-center">
            <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white via-amber-50/70 to-orange-50 p-4 sm:p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Primer prijave</div>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
                    Ideja: smanjenje gubitka CO2 na punilici
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm">
                  <Sparkles className="w-5 h-5" strokeWidth={2} />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-amber-100 bg-white/90 p-3 dark:border-slate-700 dark:bg-slate-900/60 transition-colors">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Opis ideje</div>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                    Uvesti dodatnu proveru zaptivanja i standard podesavanja ventila kako bi se smanjili gubici CO2 i stabilizovao kvalitet punjenja.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-white/90 p-3 dark:border-slate-700 dark:bg-slate-900/60 transition-colors">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Ocekivani benefit</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800">Smanjenje troskova</span>
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-800">Manji gubitak materijala</span>
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-800">Stabilniji kvalitet</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-white/90 p-3 dark:border-slate-700 dark:bg-slate-900/60 transition-colors">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Koga ukljuciti / kome koristi</div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-800/80 transition-colors">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                        <Factory className="w-4 h-4 text-blue-500" strokeWidth={2} />
                        Proizvodnja
                      </div>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Manje varijacije u procesu punjenja</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-800/80 transition-colors">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                        <Building2 className="w-4 h-4 text-amber-500" strokeWidth={2} />
                        Odrzavanje
                      </div>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Jasniji standard provere i intervencije</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {filingHighlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white transition-colors">{title}</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="self-stretch min-h-0 rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/60 p-4 sm:p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors overflow-y-auto">
            <div className="flex items-center justify-between gap-3 mb-4 sticky top-0 z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/95 pb-3 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/95">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors">Tok obrade ideje</h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors">
                  Proces prati logiku sa dijagrama: prijava, dopuna, evaluacija, scoring, kvalifikacija i realizacija.
                </p>
              </div>
              <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-sm">
                <BadgeCheck className="w-5 h-5" strokeWidth={2} />
              </div>
            </div>

            <div className="space-y-3">
              {flowSteps.map((step, index) => (
                <div key={step.title} className="relative pl-6 sm:pl-8">
                  {index < flowSteps.length - 1 && (
                    <div className="absolute left-[9px] top-8 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-blue-300 via-slate-300 to-slate-200 dark:from-blue-500 dark:via-slate-600 dark:to-slate-700" />
                  )}
                  <div className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-semibold text-white shadow-sm">
                    {index + 1}
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/90 p-3 sm:p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 transition-colors">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {step.owner}
                        </div>
                        <h4 className="mt-2 text-sm sm:text-base font-semibold text-gray-900 dark:text-white transition-colors">{step.title}</h4>
                      </div>
                      {index < flowSteps.length - 1 && (
                        <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-300">
                          <span>Sledeci korak</span>
                          <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                      {step.description}
                    </p>
                    {index === 1 && (
                      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
                        Povratna petlja: sistem vraca ideju autoru na dopunu dok ne bude dovoljno jasna za evaluaciju.
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-blue-200 bg-blue-50/70 p-3 sm:p-4 dark:border-blue-900/70 dark:bg-blue-950/20 transition-colors">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">Ishod realizacije</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {deliveryModes.map((mode) => (
                  <span
                    key={mode}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm dark:bg-slate-800 dark:text-slate-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaManagementSlide;
