import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, Filter, Search, Settings, User } from 'lucide-react';

const screenDescriptions = [
  {
    title: 'Kreiranje Taga',
    points: [
      'Brza i jednostavna prijava problema direktno sa telefona',
      'Dodavanje fotografije za vizuelnu dokumentaciju',
      'Izbor opreme i kategorizacija problema',
      'Postavljanje prioriteta i roka za rešavanje',
    ],
  },
  {
    title: 'Detalji Taga',
    points: [
      'Kompletna informacija o tagu na jednom mestu',
      'Pregled svih akcija vezanih za tag',
      'Komentari i komunikacija sa timom',
      'Istorija promena statusa i napretka',
    ],
  },
  {
    title: 'Moji Tagovi',
    points: [
      'Pregled svih tagova koje ste kreirali',
      'Praćenje statusa i napretka rešavanja',
      'Filtriranje i sortiranje po različitim kriterijumima',
      'Brzi pristup detaljima svakog taga',
    ],
  },
  {
    title: 'Statistika',
    points: [
      'Pregled ukupnog broja tagova',
      'Stopa uspešnosti rešavanja problema',
      'Raspodela po tipovima problema',
      'Prosečno vreme rešavanja',
    ],
  },
];

const myTagsList = [
  {
    title: 'Nedosledan pritisak karbonacije',
    tags: [
      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200|Održavanje',
      'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200|U toku',
      'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200|Visok',
    ],
    createdAt: '10.01.2026',
    dueDate: '15.01.2026',
    assignee: 'Marko Jovanović',
    avatar: '/src/images/andrej (1).jpeg',
  },
  {
    title: 'Neujednačena brzina transportera',
    tags: [
      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200|Održavanje',
      'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200|U toku',
      'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200|Srednji',
    ],
    createdAt: '07.01.2026',
    dueDate: '18.01.2026',
    assignee: 'Jovana Nikolić',
    avatar: '/src/images/marija (2).jpeg',
  },
  {
    title: 'Mašina za etiketiranje loše poravnava',
    tags: [
      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200|Održavanje',
      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200|Završeno',
      'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200|Srednji',
    ],
    createdAt: '08.01.2026',
    dueDate: '08.01.2026',
    assignee: 'Marko Jovanović',
    avatar: '/src/images/andrej (1).jpeg',
  },
];

const allTagsRows = [
  {
    title: 'Nedosledan pritisak karbonacije',
    subtitle: 'CO2 pritisak pada tokom procesa',
    type: 'Održavanje',
    typeClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    status: 'U toku',
    statusClass: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    priority: 'Visok',
    priorityClass: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    dueDate: '15.01.2026',
    location: 'Bottle Filling Machine 1',
    creator: 'Marko Jovanović',
    creatorAvatar: '/src/images/andrej (1).jpeg',
    createdAt: '10.01.2026',
  },
  {
    title: 'Dugme za hitnu zaustavku nedostupno',
    subtitle: 'Dugme blokirano paletama',
    type: 'Bezbednost',
    typeClass: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    status: 'Otvoreno',
    statusClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    priority: 'Visok',
    priorityClass: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    dueDate: '20.01.2026',
    location: 'Palletizer 1',
    creator: 'Ana Đorđević',
    creatorAvatar: '/src/images/mica (1).jpg',
    createdAt: '11.01.2026',
  },
  {
    title: 'Filter za vodu trazi zamenu',
    subtitle: 'Pad protoka i neujednacen pritisak u pranju',
    type: 'Održavanje',
    typeClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    status: 'Otvoreno',
    statusClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    priority: 'Srednji',
    priorityClass: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    dueDate: '25.01.2026',
    location: 'Bottle Washer 1',
    creator: 'Jelena Stanković',
    creatorAvatar: '/src/images/fa28c6de-4a84-4e88-b663-b7011a801c73 (1) (1).jpg',
    createdAt: '12.01.2026',
  },
  {
    title: 'Neujednačena brzina transportera',
    subtitle: 'Potreban pregled senzora i pogona',
    type: 'Održavanje',
    typeClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    status: 'U toku',
    statusClass: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    priority: 'Srednji',
    priorityClass: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    dueDate: '18.01.2026',
    location: 'Conveyor Belt 1',
    creator: 'Marko Jovanović',
    creatorAvatar: '/src/images/andrej (1).jpeg',
    createdAt: '07.01.2026',
  },
  {
    title: 'Mašina za etiketiranje loše poravnava',
    subtitle: 'Potrebna kalibracija senzora',
    type: 'Održavanje',
    typeClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    status: 'Završeno',
    statusClass: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    priority: 'Srednji',
    priorityClass: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    dueDate: '08.01.2026',
    location: 'Labeling Machine 1',
    creator: 'Jelena Stanković',
    creatorAvatar: '/src/images/fa28c6de-4a84-4e88-b663-b7011a801c73 (1) (1).jpg',
    createdAt: '08.01.2026',
  },
];

const PhoneShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-[160px] h-[320px] sm:w-[200px] sm:h-[400px] mx-auto">
    <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] bg-gray-950 p-1 sm:p-1.5 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-lg bg-gray-950 sm:h-5 sm:w-24 sm:rounded-b-xl" />
      <div className="h-full overflow-hidden rounded-[1.5rem] bg-white dark:bg-gray-800 sm:rounded-[1.75rem]">
        <div className="flex h-5 items-center justify-between bg-gray-50 px-2 text-[9px] text-gray-600 dark:bg-gray-700 dark:text-gray-400 sm:h-6 sm:px-3 sm:text-[10px]">
          <span>9:41</span>
          <div className="flex items-center gap-0.5">
            <div className="h-1 w-2.5 rounded-sm border border-gray-600 dark:border-gray-500 sm:h-1.5 sm:w-3">
              <div className="h-full w-1.5 rounded-sm bg-gray-600 dark:bg-gray-500 sm:w-2" />
            </div>
          </div>
        </div>
        <div className="h-[calc(100%-1.25rem)] overflow-y-auto bg-white transition-colors dark:bg-gray-800 sm:h-[calc(100%-1.5rem)]">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const MyTagsSlideContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'actions' | 'comments' | 'history'>('actions');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 3 : prev - 1));
    setActiveTab('actions');
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === 3 ? 0 : prev + 1));
    setActiveTab('actions');
  };

  return (
    <div className="h-full flex items-center justify-center px-3 py-4 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 px-4 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-[minmax(320px,420px)_240px] md:justify-center md:gap-16">
          <div className="order-2 md:order-1 md:flex md:min-h-[440px] md:items-center">
            <div className="w-full max-w-[420px] text-left">
              <div className="mb-5 space-y-2">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                  Mobile Experience
                </span>
                <div className="min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3.5rem]">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                    {screenDescriptions[currentIndex].title}
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {screenDescriptions[currentIndex].points.map((point) => (
                  <li key={point} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500 sm:h-5 sm:w-5" strokeWidth={2} />
                    <span className="text-xs leading-relaxed text-gray-700 transition-colors dark:text-white sm:text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 flex flex-col items-center justify-start space-y-3 sm:space-y-4 md:order-2 md:min-h-[440px] md:w-[240px] md:justify-center md:justify-self-center">
            <div className="flex w-full max-w-[200px] items-center justify-between sm:max-w-[240px]">
              <button
                onClick={handlePrev}
                className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 sm:h-8 sm:w-8"
              >
                <ArrowLeft className="h-4 w-4 text-gray-600 dark:text-gray-400 sm:h-5 sm:w-5" strokeWidth={2} />
              </button>

              <div className="flex items-center gap-1 sm:gap-1.5">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex ? 'w-5 bg-blue-500 sm:w-6' : 'w-1.5 bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 sm:h-8 sm:w-8"
              >
                <ArrowRight className="h-4 w-4 text-gray-600 dark:text-gray-400 sm:h-5 sm:w-5" strokeWidth={2} />
              </button>
            </div>

            <PhoneShell>
              {currentIndex === 0 && (
                <div>
                  <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-2 py-1.5 transition-colors dark:border-gray-700 dark:bg-gray-800 sm:px-3 sm:py-2">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white sm:text-sm">Kreiraj Tag</h4>
                    <p className="mt-0.5 text-[8px] text-gray-500 dark:text-gray-400 sm:text-[9px] md:text-[10px]">Održavanje</p>
                  </div>
                  <div className="space-y-1.5 p-2 sm:space-y-2 sm:p-3">
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Naslov *</label>
                      <input
                        type="text"
                        value="Nedosledan pritisak karbonacije"
                        readOnly
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-[10px]"
                      />
                    </div>
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Tip *</label>
                      <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-1.5 py-0.5 text-[9px] text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white sm:px-2 sm:py-1 sm:text-[10px]">
                        <option>Kvar</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Oprema</label>
                      <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-1.5 py-0.5 text-[9px] text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white sm:px-2 sm:py-1 sm:text-[10px]">
                        <option>Bottle Filling Machine 1 (FIL-001)</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Opis *</label>
                      <textarea
                        value="CO2 pritisak pada tokom procesa punjenja"
                        readOnly
                        rows={2}
                        className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-1.5 py-0.5 text-[9px] text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white sm:px-2 sm:py-1 sm:text-[10px]"
                      />
                    </div>
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Slika</label>
                      <img
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
                        alt="CO2 regulator problem"
                        className="h-20 w-full rounded-lg border border-gray-300 object-cover"
                      />
                    </div>
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Prioritet</label>
                      <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-1.5 py-0.5 text-[9px] text-gray-900 dark:border-gray-700 dark:bg-gray-700 dark:text-white sm:px-2 sm:py-1 sm:text-[10px]">
                        <option>Visok</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-0.5 block text-[10px] font-medium text-gray-700">Rok</label>
                      <input
                        type="date"
                        value="2026-01-15"
                        readOnly
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-[10px]"
                      />
                    </div>
                    <div className="pt-1">
                      <button className="w-full rounded-lg bg-blue-500 px-2 py-1 text-[9px] font-semibold text-white sm:px-3 sm:py-1.5 sm:text-[10px]">
                        Kreiraj Tag
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentIndex === 1 && (
                <div>
                  <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-2 py-1.5 transition-colors dark:border-gray-700 dark:bg-gray-800 sm:px-3 sm:py-2">
                    <div className="mb-1 flex items-center gap-1 sm:gap-1.5 sm:mb-1.5">
                      <ArrowLeft className="h-3 w-3 text-gray-600 dark:text-gray-400 sm:h-3.5 sm:w-3.5" />
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white sm:text-sm">Detalji Taga</h4>
                    </div>
                    <div className="mb-1 flex flex-wrap items-center gap-0.5 sm:gap-1">
                      <span className="rounded px-1 py-0.5 text-[8px] font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 sm:px-1.5 sm:text-[9px]">Održavanje</span>
                      <span className="rounded px-1 py-0.5 text-[8px] font-semibold text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200 sm:px-1.5 sm:text-[9px]">U toku</span>
                      <span className="rounded px-1 py-0.5 text-[8px] font-semibold text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-200 sm:px-1.5 sm:text-[9px]">Visok</span>
                    </div>
                    <h5 className="text-[10px] font-semibold text-gray-900 dark:text-white sm:text-xs">Nedosledan pritisak karbonacije</h5>
                  </div>
                  <div className="border-b border-gray-200 bg-gray-50 px-2 py-1 transition-colors dark:border-gray-700 dark:bg-gray-700 sm:px-3 sm:py-1.5">
                    <div className="space-y-1 text-[8px] text-gray-600 dark:text-gray-400 sm:space-y-1.5 sm:text-[9px]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400 sm:h-3 sm:w-3" />
                        <span>Kreirano: 10.01.2026 14:30</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <User className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400 sm:h-3 sm:w-3" />
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <img src="/src/images/andrej (1).jpeg" alt="Marko Jovanović" className="h-3 w-3 rounded-full object-cover sm:h-3.5 sm:w-3.5" />
                          <span>Kreirao: Marko Jovanović</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <User className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400 sm:h-3 sm:w-3" />
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <img src="/src/images/mica (1).jpg" alt="Ana Đorđević" className="h-3 w-3 rounded-full object-cover sm:h-3.5 sm:w-3.5" />
                          <span>Dodeljeno: Ana Đorđević</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Settings className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400 sm:h-3 sm:w-3" />
                        <span>Mašina: Bottle Filling Machine 1</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Calendar className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400 sm:h-3 sm:w-3" />
                        <span>Rok: 15.01.2026</span>
                      </div>
                    </div>
                    <div className="mt-1.5 sm:mt-2">
                      <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                        alt="Tag image"
                        className="h-14 w-full rounded-lg border border-gray-300 object-cover transition-colors dark:border-gray-700 sm:h-16"
                      />
                    </div>
                  </div>
                  <div className="border-b border-gray-200 px-2 py-1 transition-colors dark:border-gray-700 sm:px-3 sm:py-1.5">
                    <div className="flex gap-0.5 sm:gap-1">
                      {(['actions', 'comments', 'history'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-1 py-0.5 text-[8px] font-medium transition-colors sm:px-1.5 sm:text-[9px] ${
                            activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {tab === 'actions' ? 'Akcije' : tab === 'comments' ? 'Komentari' : 'Istorija'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 p-2 sm:space-y-1.5 sm:p-3">
                    {activeTab === 'actions' && (
                      <>
                        <div className="rounded-lg border border-gray-200 bg-white p-1.5 transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-2">
                          <div className="flex items-start gap-1 sm:gap-1.5">
                            <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors dark:bg-blue-900 sm:h-5 sm:w-5">
                              <CheckCircle className="h-2.5 w-2.5 text-blue-500 sm:h-3 sm:w-3" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h6 className="mb-0.5 text-[9px] font-semibold text-gray-900 dark:text-white sm:text-[10px]">Zameniti regulator CO2</h6>
                              <p className="mb-0.5 text-[8px] text-gray-600 dark:text-gray-400 sm:text-[9px]">Instalacija novog regulatora pritiska</p>
                              <div className="flex items-center gap-1 text-[8px] text-gray-500 dark:text-gray-400 sm:gap-1.5 sm:text-[9px]">
                                <span>Dodeljeno: Marko J.</span>
                                <span>•</span>
                                <span>Rok: 15.01</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-white p-1.5 transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-2">
                          <div className="flex items-start gap-1 sm:gap-1.5">
                            <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors dark:bg-blue-900 sm:h-5 sm:w-5">
                              <Clock className="h-2.5 w-2.5 text-blue-500 sm:h-3 sm:w-3" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h6 className="mb-0.5 text-[9px] font-semibold text-gray-900 dark:text-white sm:text-[10px]">Proveriti nivo CO2</h6>
                              <p className="mb-0.5 text-[8px] text-gray-600 dark:text-gray-400 sm:text-[9px]">Provera nivoa u rezervoaru</p>
                              <div className="flex items-center gap-1 text-[8px] text-gray-500 dark:text-gray-400 sm:gap-1.5 sm:text-[9px]">
                                <span>Dodeljeno: Ana Đ.</span>
                                <span>•</span>
                                <span>Rok: 12.01</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {activeTab === 'comments' && (
                      <div className="space-y-1 sm:space-y-1.5">
                        <div className="rounded bg-gray-50 p-1.5 transition-colors dark:bg-gray-700 sm:p-2">
                          <div className="mb-0.5 flex items-center gap-0.5 sm:gap-1">
                            <img src="/src/images/mica (1).jpg" alt="Ana Đorđević" className="h-3 w-3 rounded-full object-cover sm:h-3.5 sm:w-3.5" />
                            <span className="text-[8px] font-medium text-gray-900 dark:text-white sm:text-[9px]">Ana Đorđević</span>
                            <span className="ml-auto text-[7px] text-gray-500 dark:text-gray-400 sm:text-[8px]">2h pre</span>
                          </div>
                          <p className="text-[8px] text-gray-700 dark:text-gray-300 sm:text-[9px]">Regulator je naručen, stiže za 2 dana</p>
                        </div>
                        <div className="rounded bg-gray-50 p-1.5 transition-colors dark:bg-gray-700 sm:p-2">
                          <div className="mb-0.5 flex items-center gap-0.5 sm:gap-1">
                            <img src="/src/images/andrej (1).jpeg" alt="Marko Jovanović" className="h-3 w-3 rounded-full object-cover sm:h-3.5 sm:w-3.5" />
                            <span className="text-[8px] font-medium text-gray-900 dark:text-white sm:text-[9px]">Marko Jovanović</span>
                            <span className="ml-auto text-[7px] text-gray-500 dark:text-gray-400 sm:text-[8px]">1h pre</span>
                          </div>
                          <p className="text-[8px] text-gray-700 dark:text-gray-300 sm:text-[9px]">Hvala na brzom odgovoru</p>
                        </div>
                      </div>
                    )}
                    {activeTab === 'history' && (
                      <div className="space-y-1 sm:space-y-1.5">
                        {[
                          { from: 'Otvoreno', to: 'U toku', date: '10.01.2026 14:30' },
                          { from: 'Kreirano', to: 'Otvoreno', date: '10.01.2026 14:30' },
                        ].map((item) => (
                          <div key={`${item.from}-${item.to}`} className="rounded bg-gray-50 p-1.5 transition-colors dark:bg-gray-700 sm:p-2">
                            <div className="mb-0.5 flex flex-wrap items-center justify-between gap-0.5">
                              <div className="flex items-center gap-0.5 sm:gap-1">
                                <span className="text-[8px] text-gray-600 dark:text-gray-400 sm:text-[9px]">{item.from}</span>
                                <ArrowRight className="h-2 w-2 text-gray-400 dark:text-gray-500 sm:h-2.5 sm:w-2.5" />
                                <span className="text-[8px] font-medium text-gray-900 dark:text-white sm:text-[9px]">{item.to}</span>
                              </div>
                              <span className="text-[7px] text-gray-500 dark:text-gray-400 sm:text-[8px]">{item.date}</span>
                            </div>
                            <div className="text-[7px] text-gray-600 dark:text-gray-400 sm:text-[8px]">od Marko Jovanović</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentIndex === 2 && (
                <div>
                  <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-2 py-1.5 transition-colors dark:border-gray-700 dark:bg-gray-800 sm:px-3 sm:py-2">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white sm:text-sm">Moji Tagovi</h4>
                  </div>
                  <div className="space-y-1.5 p-1.5 sm:space-y-2 sm:p-2">
                    {myTagsList.map((item) => (
                      <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-2">
                        <div className="space-y-1 sm:space-y-1.5">
                          <h5 className="text-[9px] font-semibold leading-tight text-gray-900 dark:text-white sm:text-[10px]">{item.title}</h5>
                          <div className="flex flex-wrap items-center gap-0.5">
                            {item.tags.map((tag) => {
                              const [cls, label] = tag.split('|');
                              return (
                                <span key={label} className={`rounded px-0.5 py-0.5 text-[7px] font-semibold sm:px-1 sm:text-[8px] ${cls}`}>
                                  {label}
                                </span>
                              );
                            })}
                          </div>
                          <div className="space-y-0.5 text-[8px] text-gray-600 transition-colors dark:text-gray-400 sm:text-[9px]">
                            <div>Kreirano: {item.createdAt}</div>
                            <div>Rok: {item.dueDate}</div>
                            <div className="flex items-center gap-0.5 sm:gap-1">
                              <span>Dodeljeno:</span>
                              <div className="flex items-center gap-0.5">
                                <img
                                  src={item.avatar}
                                  alt={item.assignee}
                                  className="h-3.5 w-3.5 rounded-full border border-gray-200 object-cover transition-colors dark:border-gray-700 sm:h-4 sm:w-4"
                                />
                                <span className="text-[8px] text-gray-700 transition-colors dark:text-gray-300 sm:text-[9px]">{item.assignee}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentIndex === 3 && (
                <div>
                  <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-2 py-1.5 transition-colors dark:border-gray-700 dark:bg-gray-800 sm:px-3 sm:py-2">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white sm:text-sm">Moji Tagovi</h4>
                    <p className="mt-0.5 text-[8px] text-gray-500 dark:text-gray-400 sm:text-[9px] md:text-[10px]">Statistika</p>
                  </div>
                  <div className="space-y-2 p-2 sm:space-y-3 sm:p-3">
                    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-3">
                      <div className="space-y-0.5">
                        <div className="text-[9px] text-gray-500 dark:text-gray-400 sm:text-[10px]">Ukupno Tagova</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">25</div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-3">
                      <div className="space-y-0.5">
                        <div className="text-[9px] text-gray-500 dark:text-gray-400 sm:text-[10px]">Rešeni Tagovi</div>
                        <div className="text-lg font-bold text-blue-500 sm:text-xl">13</div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-3">
                      <div className="space-y-1 sm:space-y-1.5">
                        <div className="mb-1 text-[9px] text-gray-500 dark:text-gray-400 sm:mb-1.5 sm:text-[10px]">Po Tipovima</div>
                        {[
                          ['Bezbednost', '12'],
                          ['Održavanje', '13'],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between">
                            <span className="text-[9px] text-gray-600 dark:text-gray-400 sm:text-[10px]">{label}</span>
                            <span className="text-[10px] font-semibold text-gray-900 dark:text-white sm:text-xs">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800 sm:p-3">
                      <div className="space-y-0.5">
                        <div className="text-[9px] text-gray-500 dark:text-gray-400 sm:text-[10px]">Prosečno vreme rešavanja</div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white sm:text-sm">2 dana 5 sati</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </PhoneShell>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllTagsSlideContent: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-8 py-4 relative overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto space-y-3 sm:space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/90 px-4 py-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 sm:px-6">
        <div className="text-center space-y-1 sm:space-y-2">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
            Shared Workspace
          </span>
          <h2 className="text-2xl font-bold text-gray-900 transition-colors dark:text-white sm:text-3xl md:text-4xl">Svi Tagovi</h2>
          <p className="mx-auto max-w-2xl px-2 text-sm text-gray-600 transition-colors dark:text-white sm:text-lg">
            Svi tagovi na jednom mestu. Brzo pronađite ono što tražite.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/80 transition-colors dark:bg-gray-800 dark:ring-slate-700">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-4 transition-colors dark:border-gray-700 dark:bg-gray-900 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Filter className="h-4 w-4 text-gray-600 transition-colors dark:text-white" />
                <span className="text-sm font-medium text-gray-700 transition-colors dark:text-white">Filteri</span>
              </button>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Pretraži tagove..."
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="overflow-y-auto max-h-[500px]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 border-b border-gray-200 bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-900">
                <tr>
                  {['Naslov', 'Tip', 'Status', 'Prioritet', 'Rok', 'Lokacija', 'Kreirao', 'Kreirano'].map((header) => (
                    <th
                      key={header}
                      className="px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors dark:text-white"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white transition-colors dark:divide-gray-700 dark:bg-gray-800">
                {allTagsRows.map((row) => (
                  <tr key={row.title} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-2 py-2 sm:px-3 sm:py-2.5">
                      <div className="text-xs font-medium text-gray-900 transition-colors dark:text-white sm:text-sm">{row.title}</div>
                      <div className="mt-0.5 text-[10px] text-gray-500 transition-colors dark:text-white sm:text-xs">{row.subtitle}</div>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 sm:px-3 sm:py-2.5">
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold transition-colors sm:px-2 sm:py-1 sm:text-xs ${row.typeClass}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 sm:px-3 sm:py-2.5">
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold transition-colors sm:px-2 sm:py-1 sm:text-xs ${row.statusClass}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 sm:px-3 sm:py-2.5">
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold transition-colors sm:px-2 sm:py-1 sm:text-xs ${row.priorityClass}`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-xs text-gray-600 transition-colors dark:text-white sm:px-3 sm:py-2.5 sm:text-sm">{row.dueDate}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-xs text-gray-600 transition-colors dark:text-white sm:px-3 sm:py-2.5 sm:text-sm">{row.location}</td>
                    <td className="whitespace-nowrap px-2 py-2 sm:px-3 sm:py-2.5">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <img
                          src={row.creatorAvatar}
                          alt={row.creator}
                          className="h-5 w-5 rounded-full border border-gray-200 object-cover transition-colors dark:border-gray-700 sm:h-6 sm:w-6"
                        />
                        <span className="text-xs text-gray-700 transition-colors dark:text-white sm:text-sm">{row.creator}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-xs text-gray-500 transition-colors dark:text-white sm:px-3 sm:py-2.5 sm:text-sm">{row.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
