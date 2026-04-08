import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, Tag, ClipboardList, RefreshCw, BookOpen, CheckCircle, FileX, EyeOff, Clock, UserX, BarChart3, Lightbulb, ArrowLeft, ArrowRight, FolderKanban, Moon, Sun, Upload, TrendingDown, ShieldAlert, Gauge, ShieldCheck, UserCheck, Zap } from 'lucide-react';
import Slide4Content from '../presentations-elements/Slide4';
import Slide5Content from '../presentations-elements/Slide5';
import IdeaManagementSlide from '../presentations-elements/IdeaManagementSlide';
import Slide8Content from '../presentations-elements/Slide8';
import Slide9Content from '../presentations-elements/Slide9';
import Slide10Content from '../presentations-elements/Slide10';
import SlideKnowledgeCapture from '../presentations-elements/SlideKnowledgeCapture';
import Slide12Reports from '../presentations-elements/Slide12Reports';
import { AllTagsSlideContent, MyTagsSlideContent } from '../presentations-elements/TagsSlides';

// ActionExamples and Slide5Content moved to Slide5.tsx

// Routine Examples Component
const RoutineExamples: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const routineExamples = [
    {
      id: 'R-2025-001',
      title: 'Dnevna provera kvaliteta punjenja',
      description: 'Vizuelna provera punjenih flaša za osiguranje kvaliteta',
      frequency: 'Dnevno',
      questions: [
        { id: 'q1', text: 'Da li su sve flaše napunjene do ispravnog nivoa?', type: 'yes-no', required: true, answer: true },
        { id: 'q2', text: 'Broj odbačenih flaša:', type: 'number', required: true, answer: '12' },
        { id: 'q3', text: 'Da li su etikete pravilno poravnate?', type: 'yes-no', required: true, answer: true },
        { id: 'q4', text: 'Dodatne napomene:', type: 'text', required: false, answer: 'Sve u redu, nema problema.' },
        { id: 'q5', text: 'Fotografija problema (ako postoji):', type: 'image', required: false },
      ],
    },
    {
      id: 'R-2025-002',
      title: 'Nedeljno održavanje pasteurizatora',
      description: 'Nedeljna provera i čišćenje tunel pasteurizatora',
      frequency: 'Nedeljno',
      questions: [
        { id: 'q1', text: 'Da li su grejni elementi pregledani i čisti?', type: 'yes-no', required: true, answer: true },
        { id: 'q2', text: 'Temperatura pasteurizacije (°C):', type: 'number', required: true, answer: '72' },
        { id: 'q3', text: 'Zadaci održavanja:', type: 'checklist', required: true, options: ['Čišćenje prskalica', 'Podmazivanje lanca', 'Provera izolacije', 'Test sigurnosnih blokada'], checked: [0, 1, 2] },
        { id: 'q4', text: 'Napomene o održavanju:', type: 'text', required: false, answer: 'Svi zadaci izvršeni uspešno. Oprema u dobrom stanju.' },
        { id: 'q5', text: 'Fotografija stanja opreme:', type: 'image', required: false },
      ],
    },
    {
      id: 'R-2025-003',
      title: 'Provera pre pokretanja linije',
      description: 'Provera pre početka smene na liniji za punjenje',
      frequency: 'Dnevno',
      questions: [
        { id: 'q1', text: 'Da li su zaštitne ograde na mestu i sigurne?', type: 'yes-no', required: true, answer: true },
        { id: 'q2', text: 'Da li funkcionišu dugmad za hitno zaustavljanje?', type: 'yes-no', required: true, answer: true },
        { id: 'q3', text: 'Pritisak CO2 (bar):', type: 'number', required: true, answer: '4.5' },
        { id: 'q4', text: 'Zadaci pre pokretanja:', type: 'checklist', required: true, options: ['Čišćenje mlaznica', 'Provera poravnanja transportera', 'Provera zaliha flaša', 'Test hitnog zaustavljanja'], checked: [0, 1, 2, 3] },
        { id: 'q5', text: 'Fotografija opreme:', type: 'image', required: false },
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? routineExamples.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === routineExamples.length - 1 ? 0 : prev + 1));
  };

  const currentRoutine = routineExamples[currentIndex];

  const renderQuestion = (question: any, _index: number) => {
    switch (question.type) {
      case 'yes-no':
        const yesNoAnswer = question.answer;
        return (
          <div className="flex gap-1.5 sm:gap-2">
            <button className={`flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 text-xs font-medium transition-colors ${
              yesNoAnswer === true 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
            }`}>
              Da
            </button>
            <button className={`flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 text-xs font-medium transition-colors ${
              yesNoAnswer === false 
                ? 'border-red-600 dark:border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300' 
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
            }`}>
              Ne
            </button>
          </div>
        );
      case 'number':
        return (
          <input
            type="number"
            disabled
            value={question.answer || ''}
            className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            placeholder="Unesite broj..."
          />
        );
      case 'text':
        return (
          <textarea
            disabled
            value={question.answer || ''}
            className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 resize-none transition-colors"
            rows={2}
            placeholder="Unesite tekst..."
          />
        );
      case 'checklist':
        const checkedIndices = question.checked || [];
        return (
          <div className="space-y-1 sm:space-y-1.5">
            {question.options?.map((option: string, optIdx: number) => (
              <label key={optIdx} className={`flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded border transition-colors ${
                checkedIndices.includes(optIdx) 
                  ? 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30' 
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700'
              }`}>
                <input 
                  type="checkbox" 
                  disabled 
                  checked={checkedIndices.includes(optIdx)}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 border-gray-300 dark:border-gray-600 rounded" 
                />
                <span className={`text-xs transition-colors ${
                  checkedIndices.includes(optIdx) 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>{option}</span>
              </label>
            ))}
          </div>
        );
      case 'image':
        return (
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-3 sm:p-4 text-center bg-gray-50 dark:bg-gray-700 transition-colors">
            <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500 mx-auto mb-1" strokeWidth={2} />
            <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">Kliknite za upload slike</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-3 sm:p-5 space-y-3 sm:space-y-4 flex flex-col max-h-[350px] sm:max-h-[450px] transition-colors">
      {/* Navigation */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors">
        <button
          onClick={handlePrev}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        </button>
        
        <div className="flex items-center gap-1.5 sm:gap-2">
          {routineExamples.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-blue-500 w-5 sm:w-6' : 'bg-gray-300 dark:bg-gray-600 w-1.5 sm:w-2'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        </button>
      </div>

      {/* Routine Content - Scrollable */}
      <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 pr-1 sm:pr-2">
        <div className="pb-2 sm:pb-3 border-b border-gray-200 dark:border-gray-700 transition-colors">
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1 transition-colors">{currentRoutine.title}</h4>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-600 dark:text-gray-400 transition-colors">
            <span>#{currentRoutine.id}</span>
            <span>•</span>
            <span>{currentRoutine.frequency}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 transition-colors">{currentRoutine.description}</p>
        </div>
        
        {/* Questions */}
        <div className="space-y-3">
          {currentRoutine.questions.map((question, index) => (
            <div key={question.id} className="pb-2.5 border-b border-gray-100 last:border-b-0">
              <label className="block text-xs font-medium text-gray-900 mb-1.5">
                {index + 1}. {question.text}
                {question.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {renderQuestion(question, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide 6 Content Component
const Slide6Content: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-8 py-4 overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-3 sm:space-y-5 order-2 md:order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">Rutine</h2>
              <p className="text-sm sm:text-lg text-gray-600 dark:text-white transition-colors">
                Proaktivne provere i preventivno održavanje
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Različiti tipovi pitanja</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Da/Ne, tekstualni, numerički odgovori, checkliste i upload slika</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Planirane provere</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Dnevne, nedeljne ili prilagođene rutine sa automatskim podsećanjima</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Dokumentacija</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Kompletna istorija izvršenja sa odgovorima i fotografijama</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Kontrola kvaliteta</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Standardizovani procesi za konzistentno održavanje standarda</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Routine Examples */}
          <div className="order-1 md:order-2">
            <RoutineExamples />
          </div>
        </div>
      </div>
    </div>
  );
};

const challengeImpactCards = [
  {
    icon: TrendingDown,
    eyebrow: 'Direktan gubitak',
    title: 'Kasno primecen prestanak rada masine',
    description: 'Saniranje tek jedan dan kasnije povlaci ozbiljan pad proizvodnje i direktan finansijski gubitak.',
    details: ['1/3 masine van rada', '33% proizvodnje', '500.000 L/dan x 0.33 x €0.30/L prihoda'],
    impactLabel: 'Realan trosak zastoja',
    impactValue: '~€10.000+',
    impactNote: 'Samo izgubljeni profit pri 20% marze, bez uracunatog praznog hoda radnika',
  },
  {
    icon: ShieldAlert,
    eyebrow: 'Bezbednoski rizik',
    title: 'Nebezbedna situacija',
    description: 'Jedan previd moze da preraste u povredu, kaznu i prekid procesa koji dodatno povecava trosak.',
    details: ['Povreda radnika', 'Kazna i inspekcija', 'Prestanak rada'],
    impactLabel: 'Ukupan udar',
    impactValue: '~€10.000+',
    impactNote: 'Direktan trosak incidenta pre nego sto uracunamo reputacioni i organizacioni efekat.',
  },
  {
    icon: UserX,
    eyebrow: 'Znanje van sistema',
    title: 'Odlazak ili bolovanje glavnog radnika',
    description: 'Kada kljucno tribalno znanje ostane kod jednog coveka, tim ulazi u period sporijeg rada i dodatnog treninga.',
    details: ['Pad efikasnosti 20-50%', 'Onboarding i new hire', 'Trening i uvodjenje u posao'],
    impactLabel: 'Organizacioni trosak',
    impactValue: '~€5.000+',
    impactNote: 'Gubitak efikasnosti plus trosak uvodjenja zamene dok se znanje prenosi.',
  },
];

const challengeCards = [
  {
    icon: FileX,
    title: 'Papirna dokumentacija',
    description: 'Primedbe, tagovi i predlozi za poboljsanje se gube, nema pracenja statusa i istorije promena',
  },
  {
    icon: EyeOff,
    title: 'Nedostatak transparentnosti',
    description: 'Menadzment nema uvid u aktuelne probleme i napredak njihovog resavanja',
  },
  {
    icon: Clock,
    title: 'Sporija reakcija',
    description: 'Problemi se resavaju kasno ili nikada, nedostaju jasni rokovi i odgovornosti',
  },
  {
    icon: UserX,
    title: 'Nedostaje odgovornost',
    description: 'Nije jasno ko je odgovoran i sta je uradjeno po svakom problemu',
  },
  {
    icon: BarChart3,
    title: 'Nema podataka i analitike',
    description: 'Bez KPI-jeva, trendova i mogucnosti za merenje napretka i optimizaciju procesa',
  },
  {
    icon: Lightbulb,
    title: 'Predlozi za poboljsanje',
    description: 'Dobri predlozi radnika se gube ili se ne implementiraju zbog nedostatka sistema za pracenje',
  },
];

const solutionOutcomeCards = [
  {
    icon: Gauge,
    eyebrow: 'Pouzdanost i odziv',
    title: 'Manje downtime-a i brza reakcija',
    description: 'Tagovi, akcije i rutine ubrzavaju detekciju i plansko zatvaranje uzroka.',
    details: ['Downtime ↓ 20-50%', 'Vreme reakcije ↓ 2-5x', 'Ponavljajuci kvarovi ↓ 30%'],
    impactLabel: 'Tacan efekat na ponovljeni kvar',
    impactValue: '~€3.000+',
    impactNote: 'Kod kvara od ~€10.000+, 30% manje ponavljanja vraca ~€3.000+.',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Bezbednost i uskladjenost',
    title: 'Manje incidenata, manje teških posledica',
    description: 'Brza prijava rizika i jasna eskalacija smanjuju sansu za skuplji incident.',
    details: ['Incidenti ↓ 30-70%', 'Brza eskalacija i dokumentacija'],
    impactLabel: 'Direktno smanjenje troska',
    impactValue: '~€3.000-€7.000+',
    impactNote: 'Kod incidenta od ~€10.000+, pad ucestalosti od 30-70% vraca ~€3.000-€7.000+.',
  },
  {
    icon: UserCheck,
    eyebrow: 'Ljudi i znanje',
    title: 'Brzi onboarding i manja zavisnost od pojedinaca',
    description: 'Baza znanja i standardizovan tok rada skracuju uvodjenje u posao kada kljucna osoba nije dostupna.',
    details: ['Onboarding brzi 30-50%', 'Zavisnost od pojedinaca ↓'],
    impactLabel: 'Povrat po kriticnoj zameni',
    impactValue: '~€1.500-€2.500+',
    impactNote: 'Kod troska od ~€5.000+, 30-50% brzi onboarding vraca ~€1.500-€2.500+.',
  },
];

const solutionToolCards = [
  {
    icon: Tag,
    title: 'Tagovi',
    description: 'Digitalna prijava problema sa slikama, opisom i automatskom evidencijom',
  },
  {
    icon: ClipboardList,
    title: 'Akcije',
    description: 'Korektivne i preventivne akcije sa jasnim rokovima i odgovornostima',
  },
  {
    icon: RefreshCw,
    title: 'Rutine',
    description: 'Proaktivne provere i preventivno odrzavanje sa checklist sistemom',
  },
  {
    icon: FolderKanban,
    title: 'Projekti',
    description: 'Upravljanje kompleksnim projektima sa pracenjem napretka i resursa',
  },
  {
    icon: BookOpen,
    title: 'Baza Znanja',
    description: 'Centralizovana baza dokumentacije, SOP-ova, video uputstava i dijagrama',
  },
  {
    icon: BarChart3,
    title: 'Izvestaji',
    description: 'Detaljna analitika, KPI-jevi i izvestaji za donosenje informisanih odluka',
  },
];

const slides = [
  // Slide 1: Naslov
  {
    id: 1,
    content: (
      <div className="h-full flex items-center justify-center px-8">
        <div className="text-center space-y-8 mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white transition-colors">
            Just<span className="text-blue-500">Improve</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-600 dark:text-white max-w-3xl mx-auto transition-colors">
            Digitalno rešenje za <span className="text-blue-500 font-semibold">kontinualno unapređenje</span>
          </p>
        </div>
      </div>
    ),
  },
  
  // Slide 2: Izazovi
  {
    id: 2,
    content: (
      <div className="h-full flex items-center justify-center px-3 sm:px-8 py-4 overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-5">
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">Izazovi</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white transition-colors px-2">Sa cim se fabrike danas suocavaju i koliko ih to realno kosta?</p>
            <p className="text-xs sm:text-sm font-medium text-red-600 dark:text-red-300 transition-colors px-2">Sve navedene cifre su po incidentu.</p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4">
            {challengeImpactCards.map(({ icon: Icon, eyebrow, title, description, details, impactLabel, impactValue, impactNote }) => (
              <div
                key={title}
                className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 p-4 sm:p-5 shadow-sm transition-colors dark:border-red-900/70 dark:from-red-950/40 dark:via-gray-900 dark:to-orange-950/20"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <span className="inline-flex rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700 dark:bg-red-900/60 dark:text-red-200">
                      {eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-red-700 shadow-sm dark:bg-gray-900/70 dark:text-red-200">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-200">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-red-200 bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-red-900/70 dark:bg-gray-900/70 dark:text-gray-200"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-gray-950 px-4 py-3 text-white dark:bg-gray-950/90">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-red-200">{impactLabel}</div>
                  <div className="mt-1 text-2xl font-bold text-red-400 dark:text-red-300">{impactValue}</div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-300">{impactNote}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-center text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Operativni izazovi koji stoje iza ovih posledica
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-3">
              {challengeCards.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-900/60 rounded-xl p-3 sm:p-3.5 transition-colors"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300 flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white transition-colors">{title}</h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  
  // Slide 3: Rešenje
  {
    id: 3,
    content: (
      <div className="h-full flex items-center justify-center px-3 sm:px-6 py-4 overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-5">
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">Rešenje</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white transition-colors px-2">
              JustImprove ne donosi samo vidljivost, vec merljivo smanjuje trosak, rizik i zavisnost od haosa
            </p>
            <p className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300 transition-colors px-2">Prikazane cifre predstavljaju direktan efekat po incidentu ili po kriticnoj situaciji.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4">
            {solutionOutcomeCards.map(({ icon: Icon, eyebrow, title, description, details, impactLabel, impactValue, impactNote }) => (
              <div
                key={title}
                className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-4 sm:p-5 shadow-sm transition-colors dark:border-emerald-900/70 dark:from-emerald-950/40 dark:via-gray-900 dark:to-cyan-950/20"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                      {eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-emerald-700 shadow-sm dark:bg-gray-900/70 dark:text-emerald-200">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-200">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-emerald-200 bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-emerald-900/70 dark:bg-gray-900/70 dark:text-gray-200"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-gray-950 px-4 py-3 text-white dark:bg-gray-950/90">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200">{impactLabel}</div>
                  <div className="mt-1 text-2xl font-bold text-emerald-300">{impactValue}</div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-300">{impactNote}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-950 px-5 py-4 text-white shadow-sm dark:border-blue-900/60">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  <Zap className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Ukupan ROI potencijal
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">~€30.000-€50.000+ godisnjeg direktnog povrata</h3>
                <p className="text-sm text-blue-100/90">Aproksimacija na godisnjem nivou, uz 1 smanjen / sprecen scenario mesecno.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                <div className="rounded-xl bg-white/10 px-3 py-2 text-blue-50">Konzervativna procena zasnovana na tri tipicna scenarija kroz 12 meseci</div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-blue-50">Bez uracunatog praznog hoda, reputacije, manjeg turnover-a i sirih organizacionih efekata</div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-blue-50">Stvarni ROI raste kako raste broj prijava, smena, linija i lokacija</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-center text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Alati kojima se do ovih rezultata stize
            </p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-2.5">
              {solutionToolCards.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex flex-col items-center justify-center gap-2 p-2.5 sm:p-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-900/50 rounded-xl transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-center text-gray-900 dark:text-white transition-colors">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  
  // Slide 4: Baza Znanja
  {
    id: 4,
    content: <Slide8Content />,
  },

  // Slide 5: Tagovi sistem
  {
    id: 5,
    content: <Slide4Content />,
  },
  
  // Slide 6: Idea Management
  {
    id: 6,
    content: <IdeaManagementSlide />,
  },

  // Slide 7: Moji Tagovi
  {
    id: 7,
    content: <MyTagsSlideContent />,
  },

  // Slide 8: Svi Tagovi
  {
    id: 8,
    content: <AllTagsSlideContent />,
  },
  
  // Slide 9: Akcije
  {
    id: 9,
    content: <Slide5Content />,
  },
  
  // Slide 10: Knowledge capture posle zatvaranja akcije
  {
    id: 10,
    content: <SlideKnowledgeCapture />,
  },

  // Slide 11: Rutine
  {
    id: 11,
    content: <Slide6Content />,
  },
  
  // Slide 12: Izveštaji
  {
    id: 12,
    content: <Slide12Reports />,
  },
  
  // Slide 13: Upravljanje kompanijom
  {
    id: 13,
    content: <Slide9Content />,
  },
  
  // Slide 14: Call to Action
  {
    id: 14,
    content: <Slide10Content />,
  },
];

export const PresentationDemo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const contactSlideIndex = slides.length - 1;
  const isContactSlide = currentSlide === contactSlideIndex;

  // Apply dark mode class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') navigate('/');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-white dark:bg-gray-900 transition-colors"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
              Just<span className="text-blue-500">Improve</span>
            </h3>
            <span className="hidden sm:inline text-sm text-gray-500 dark:text-white transition-colors">
              Prezentacija
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide(contactSlideIndex)}
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200 dark:hover:bg-blue-900/50"
            >
              Kontakt
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-yellow-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Moon className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full flex items-center justify-center pt-16 sm:pt-20 pb-16 sm:pb-20 px-3 sm:px-6 bg-white dark:bg-gray-900 transition-colors overflow-y-auto">
        <div className={`w-full mx-auto h-full ${isContactSlide ? 'max-w-6xl' : 'max-w-7xl'}`}>
          <div
            key={slides[currentSlide].id}
            className="animate-fade-in h-full"
          >
            <div className="h-full flex items-center justify-center">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all ${
                currentSlide === 0
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
              <span className="hidden sm:inline text-sm">Prethodni</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all ${
                    index === currentSlide
                      ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-500'
                      : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  } rounded-full`}
                />
              ))}
              <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-500 dark:text-white transition-colors whitespace-nowrap">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all ${
                currentSlide === slides.length - 1
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="hidden sm:inline text-sm">Sledeći</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
