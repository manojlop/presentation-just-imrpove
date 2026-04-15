import React from 'react';
import { Building2, ChevronRight, Factory, Settings2, ShieldCheck, UserCog, Users } from 'lucide-react';

const hierarchyRows = [
  { label: 'Kompanija', value: 'JustImprove Manufacturing Group', icon: Building2, tone: 'bg-slate-100 text-slate-700' },
  { label: 'Fabrika', value: 'Pogon Novi Sad', icon: Factory, tone: 'bg-blue-100 text-blue-700' },
  { label: 'Linija', value: 'Linija punjenja PET 2', icon: ChevronRight, tone: 'bg-emerald-100 text-emerald-700' },
  { label: 'Zona', value: 'Etiketiranje i pakovanje', icon: ChevronRight, tone: 'bg-amber-100 text-amber-700' },
  { label: 'Oprema', value: 'Labeler 01 / Conveyor 03', icon: ChevronRight, tone: 'bg-violet-100 text-violet-700' },
];

const roleAssignments = [
  {
    role: 'Administrator kompanije',
    scope: 'Globalni nivo',
    description: 'Postavlja strukturu firme, pravila izmena i upravlja pristupima i definicijama rola.',
  },
  {
    role: 'Menadžer pogona',
    scope: 'Fabrika i linije',
    description: 'Menja timove, odgovorne osobe i lokalna pravila unutar svog pogona.',
  },
  {
    role: 'Supervizor / tim lider',
    scope: 'Zona i oprema',
    description: 'Vezuje korisnike za konkretne zone i odredjuje ko vidi, resava i odobrava rad.',
  },
  {
    role: 'Operativni radnik',
    scope: 'Zona i oprema',
    description: 'Radi na svom delu hijerarhije i vidi samo pripadajuce zadatke, rutine i obaveze.',
  }
];

const managementCapabilities = [
  {
    title: 'Modelovanje hijerarhije kompanije',
    text: 'Dodavanje i izmena kompanija, fabrika, linija i opreme.',
    icon: Building2,
  },
  {
    title: 'Podešavanje promenljivosti',
    text: 'Definisanje koji nivoi su lokalno promenljivi, a koji zakljucani.',
    icon: Settings2,
  },
  {
    title: 'Dodela uloga po nivou',
    text: 'Vezivanje korisnika i odgovornosti za tacan nivo hijerarhije.',
    icon: UserCog,
  },
];

const Slide9Content: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto px-3 sm:px-4 py-2 sm:py-3">
      <div className="w-full max-w-6xl h-full mx-auto flex flex-col justify-start gap-3 sm:gap-4">
        <div className="text-center space-y-1.5 sm:space-y-2">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            Upravljanje kompanijom
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-white max-w-4xl mx-auto px-2 transition-colors">
            Podesite hijerarhiju firme, definišite šta je promenljivo u organizaciji i smestite korisnike sa pravim ulogama na pravi nivo strukture.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch xl:grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-4">
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-3 sm:p-4 transition-colors">
            <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
              <div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
                  Struktura kompanije
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors">
                  Vizuelno upravljanje nivoima organizacije i odgovornostima
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300" strokeWidth={2} />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-200">Kontrolisana promena</span>
              </div>
            </div>

            <div className="space-y-1.5">
              {hierarchyRows.map((row, index) => (
                <div
                  key={row.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/30 p-2 sm:p-2.5 transition-colors"
                  style={{ marginLeft: `${index * 8}px` }}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center ${row.tone}`}>
                    <row.icon className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                      {row.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate transition-colors">
                      {row.value}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">Promena</div>
                    <div className="text-[11px] sm:text-xs font-medium text-blue-600 dark:text-blue-300">Dozvoljena</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2.5 sm:mt-3">
              {managementCapabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 sm:p-2.5 transition-colors"
                >
                  <div className="w-7 h-7 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-1.5 transition-colors">
                    <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-300" strokeWidth={2} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-0.5 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 transition-colors leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-4 sm:gap-5">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-3 sm:p-4 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors">
                    Uloge unutar hijerarhije
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 transition-colors leading-snug">
                    Uloge se mogu preimenovati, redefinisati i konfigurisati zajedno sa pristupima i odgovornostima po delu organizacije
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {roleAssignments.map((assignment) => (
                  <div
                    key={assignment.role}
                    className="rounded-2xl bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 p-2.5 sm:p-3 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white transition-colors">
                        {assignment.role}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[10px] sm:text-[11px] font-semibold text-blue-700 dark:text-blue-200 whitespace-nowrap">
                        {assignment.scope}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 transition-colors leading-snug">
                      {assignment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-3 sm:p-4 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" strokeWidth={2} />
                </div>
                <h3 className="text-base sm:text-lg font-bold">Šta admin tim dobija</h3>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-blue-50 leading-snug">
                <div>Centralnu kontrolu nad strukturom kompanije bez ručnog održavanja u Excel tabelama.</div>
                <div>Jasno pravilo ko sme da menja koji nivo hijerarhije i gde se korisnik nalazi u organizaciji.</div>
                <div>Precizniju dodelu odgovornosti, vidljivosti i toka rada po pogonu, liniji, zoni ili opremi.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9Content;
