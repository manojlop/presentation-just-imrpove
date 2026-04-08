import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, Tag, ClipboardList, RefreshCw, BookOpen, CheckCircle, FileX, EyeOff, Clock, UserX, BarChart3, Lightbulb, ArrowLeft, ArrowRight, FolderKanban, Moon, Sun, Upload } from 'lucide-react';
import Slide4Content from '../presentations-elements/Slide4';
import Slide5Content from '../presentations-elements/Slide5';
import IdeaManagementSlide from '../presentations-elements/IdeaManagementSlide';
import Slide8Content from '../presentations-elements/Slide8';
import Slide9Content from '../presentations-elements/Slide9';
import Slide10Content from '../presentations-elements/Slide10';
import SlideKnowledgeCapture from '../presentations-elements/SlideKnowledgeCapture';
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

// Reports Carousel Component
const ReportsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reportsSets = [
    {
      topLeft: {
        title: 'Distribucija po tipovima',
        type: 'bar',
        data: [
          { label: 'Bezbednost', value: 25, percent: 50 },
          { label: 'Održavanje', value: 10, percent: 20 },
          { label: 'Kvalitet', value: 8, percent: 16 },
          { label: 'Poboljšanje', value: 7, percent: 14 },
        ],
      },
      topRight: {
        title: 'Tagovi ove nedelje:',
        type: 'chart',
        data: [4, 3, 5, 4, 4],
        labels: ['Pon', 'Uto', 'Sre', 'Čet', 'Pet'],
        summary: '20 problema ukupno',
        yAxisTitle: 'Broj tagova',
        yAxisLabels: [5, 4, 3, 2, 1, 0],
      },
      bottomLeft: {
        title: 'Prosečno vreme rešavanja',
        type: 'list',
        data: [
          { label: 'Bezbednost', days: '1.5 dana' },
          { label: 'Održavanje', days: '2.3 dana' },
          { label: 'Kvalitet', days: '1.8 dana' },
          { label: 'Poboljšanje', days: '3.2 dana' },
        ],
      },
      bottomRight: {
        title: 'Top lokacije po problemima',
        type: 'list',
        data: [
          { location: 'Bottle Filling Line 1', count: 8 },
          { location: 'Palletizer 1', count: 6 },
          { location: 'Labeling Machine 1', count: 5 },
          { location: 'Conveyor Belt 2', count: 4 },
        ],
      },
    },
    {
      topLeft: {
        title: 'Distribucija po statusima',
        type: 'pie',
        data: [
          { label: 'Završeno', value: 45, percent: 45 },
          { label: 'U toku', value: 30, percent: 30 },
          { label: 'Otvoreno', value: 20, percent: 20 },
          { label: 'Otkazano', value: 5, percent: 5 },
        ],
      },
      topRight: null,
      bottomLeft: {
        title: 'Prosečno vreme po statusu',
        type: 'list',
        data: [
          { label: 'Završeno', days: '1.8 dana' },
          { label: 'U toku', days: '3.4 dana' },
          { label: 'Otvoreno', days: '5.2 dana' }
        ],
      },
      bottomRight: {
        title: 'Top korisnici po aktivnostima',
        type: 'list',
        data: [
          { location: 'Marko Jovanović', count: 42 },
          { location: 'Jovana Nikolić', count: 38 },
          { location: 'Ana Đorđević', count: 35 },
          { location: 'Petar Stojanović', count: 28 },
        ],
      },
    },
    {
      topLeft: {
        title: 'Distribucija po prioritetima',
        type: 'bar',
        data: [
          { label: 'Visok', value: 15, percent: 60 },
          { label: 'Srednji', value: 7, percent: 28 },
          { label: 'Nizak', value: 3, percent: 12 },
        ],
      },
      topRight: {
        title: 'Stopa uspešnosti po mesecima',
        type: 'chart',
        data: [75, 78, 82, 85, 88, 90, 87, 92, 89, 91, 93, 95],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
      },
      bottomLeft: {
        title: 'Prosečno vreme po statusu',
        type: 'list',
        data: [
          { label: 'Otvoreno', days: '3.2 dana' },
          { label: 'U toku', days: '5.5 dana' },
          { label: 'Završeno', days: '7.8 dana' },
        ],
      },
      bottomRight: {
        title: 'Najaktivnije opreme',
        type: 'list',
        data: [
          { location: 'Bottle Filling Machine 1', count: 15 },
          { location: 'Palletizer 1', count: 12 },
          { location: 'Labeling Machine 2', count: 9 },
          { location: 'Conveyor Belt 3', count: 7 },
        ],
      },
    },
  ];
  
  const currentSet = reportsSets[currentIndex];
  const hasTopRight = Boolean(currentSet.topRight);
  
  const nextSet = () => {
    setCurrentIndex((prev) => (prev + 1) % reportsSets.length);
  };
  
  const prevSet = () => {
    setCurrentIndex((prev) => (prev - 1 + reportsSets.length) % reportsSets.length);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto flex-1 min-h-0 flex flex-col gap-3 sm:gap-4">
      <div
        className={`rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 overflow-hidden ${
          hasTopRight ? 'grid grid-cols-1 sm:grid-cols-2 gap-px' : 'flex justify-center'
        }`}
      >
        {/* Top Left */}
        <div className={`bg-white dark:bg-gray-800 p-3 sm:p-4 flex flex-col justify-center transition-colors ${hasTopRight ? '' : 'w-full max-w-2xl'}`}>
          <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">{currentSet.topLeft.title}</h4>
          <div className="space-y-2 sm:space-y-2.5">
            {currentSet.topLeft.data.map((item: any, idx: number) => (
              <div key={idx}>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="font-medium text-gray-900 dark:text-white transition-colors">{item.label || item.location}</span>
                  <span className="text-gray-600 dark:text-gray-400 transition-colors">{item.value || item.count}</span>
                </div>
                <div className="w-full h-1.5 sm:h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden transition-colors">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all" 
                    style={{ width: `${item.percent}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Top Right */}
        {currentSet.topRight ? (
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 flex flex-col justify-center transition-colors">
            <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
              <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors">{currentSet.topRight.title}</h4>
              {'summary' in currentSet.topRight && currentSet.topRight.summary ? (
                <span className="text-[11px] sm:text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap transition-colors">
                  {currentSet.topRight.summary}
                </span>
              ) : null}
            </div>
            <div className="space-y-2 sm:space-y-2.5 flex flex-col">
              <div className="flex gap-2 sm:gap-3">
                {'yAxisLabels' in currentSet.topRight && currentSet.topRight.yAxisLabels ? (
                  <div className="w-10 sm:w-12 flex flex-col">
                    {'yAxisTitle' in currentSet.topRight && currentSet.topRight.yAxisTitle ? (
                      <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 transition-colors">
                        {currentSet.topRight.yAxisTitle}
                      </span>
                    ) : null}
                    <div className="h-[120px] sm:h-[140px] flex flex-col justify-between text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 transition-colors">
                      {currentSet.topRight.yAxisLabels.map((label: number) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="flex-1">
                  <div className="flex items-end justify-between gap-2 sm:gap-2.5 h-[120px] sm:h-[140px]">
                    {currentSet.topRight.data.map((height: number, idx: number) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div 
                          className="w-full bg-blue-500 rounded-t-md transition-all" 
                          style={{ height: `${Math.max(height * 18, 28)}px` }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 pt-2 border-t border-gray-200 dark:border-gray-700 transition-colors">
                {'yAxisLabels' in currentSet.topRight && currentSet.topRight.yAxisLabels ? (
                  <div className="w-10 sm:w-12" />
                ) : null}
                <div className="flex-1 flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {currentSet.topRight.labels.map((day: string) => (
                    <span key={day} className="flex-1 text-center">{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {/* Bottom Left */}
        <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 transition-colors">
          <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">{currentSet.bottomLeft.title}</h4>
          <div className="space-y-2 sm:space-y-2.5">
            {currentSet.bottomLeft.data.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors">{item.label || item.location}</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white transition-colors">{item.days || item.count}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Right */}
        <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 transition-colors">
          <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">{currentSet.bottomRight.title}</h4>
          <div className="space-y-2 sm:space-y-2.5">
            {currentSet.bottomRight.data.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate flex-1 transition-colors">{item.location || item.label}</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white ml-2 transition-colors">{item.count || item.days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <button
          onClick={prevSet}
          className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Prethodni izveštaj"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        </button>
        <div className="flex gap-1">
          {reportsSets.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Izveštaj ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSet}
          className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Sledeći izveštaj"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

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
        <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6">
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">Izazovi</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white transition-colors px-2">Sa čim se fabrike danas suočavaju?</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white dark:bg-gray-800 border-2 border-red-700 dark:border-red-600 rounded-xl p-4 hover:border-red-800 dark:hover:border-red-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <FileX className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Papirna dokumentacija</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white leading-relaxed transition-colors">Primedbe, tagovi i predlozi za poboljšanje se gube, nema praćenja statusa i istorije promena</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-red-700 dark:border-red-600 rounded-xl p-4 hover:border-red-800 dark:hover:border-red-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <EyeOff className="w-5 h-5 text-gray-600 dark:text-white flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Nedostatak transparentnosti</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white leading-relaxed transition-colors">Menadžment nema uvid u aktuelne probleme i napredak njihovog rešavanja</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-red-700 dark:border-red-600 rounded-xl p-4 hover:border-red-800 dark:hover:border-red-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-gray-600 dark:text-white flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Sporija reakcija</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white leading-relaxed transition-colors">Problemi se rešavaju kasno ili nikada, nedostaju jasni rokovi i odgovornosti</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-red-700 dark:border-red-600 rounded-xl p-4 hover:border-red-800 dark:hover:border-red-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <UserX className="w-5 h-5 text-gray-600 dark:text-white flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Nedostaje odgovornost</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white leading-relaxed transition-colors">Nije jasno ko je odgovoran i šta je urađeno po svakom problemu</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-red-700 dark:border-red-600 rounded-xl p-4 hover:border-red-800 dark:hover:border-red-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-gray-600 dark:text-white flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Nema podataka i analitike</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white leading-relaxed transition-colors">Bez KPI-jeva, trendova i mogućnosti za merenje napretka i optimizaciju procesa</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-red-700 dark:border-red-600 rounded-xl p-4 hover:border-red-800 dark:hover:border-red-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Lightbulb className="w-5 h-5 text-gray-600 dark:text-white flex-shrink-0 mt-0.5 transition-colors" strokeWidth={2} />
                <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Predlozi za poboljšanje</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white leading-relaxed transition-colors">Dobri predlozi radnika se gube ili se ne implementiraju zbog nedostatka sistema za praćenje</p>
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
        <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6">
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">Rešenje</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white transition-colors px-2">
              JustImprove digitalizuje proces kontinualnog unapređenja kroz kompletan ekosistem alata
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors">Tagovi</h3>
              <p className="text-xs text-gray-600 dark:text-white leading-relaxed transition-colors">
                Digitalna prijava problema sa slikama, opisom i automatskom evidencijom
              </p>
            </div>
            
            <div className="text-center space-y-3 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <ClipboardList className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Akcije</h3>
              <p className="text-xs text-gray-600 dark:text-white leading-relaxed transition-colors">
                Korektivne i preventivne akcije sa jasnim rokovima i odgovornostima
              </p>
            </div>
            
            <div className="text-center space-y-3 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <RefreshCw className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Rutine</h3>
              <p className="text-xs text-gray-600 dark:text-white leading-relaxed transition-colors">
                Proaktivne provere i preventivno održavanje sa checklist sistemom
              </p>
            </div>
            
            <div className="text-center space-y-3 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <FolderKanban className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Projekti</h3>
              <p className="text-xs text-gray-600 dark:text-white leading-relaxed transition-colors">
                Upravljanje kompleksnim projektima sa praćenjem napretka i resursa
              </p>
            </div>
            
            <div className="text-center space-y-3 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Baza Znanja</h3>
              <p className="text-xs text-gray-600 dark:text-white leading-relaxed transition-colors">
                Centralizovana baza dokumentacije, SOP-ova, video uputstava i dijagrama
              </p>
            </div>
            
            <div className="text-center space-y-3 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors">Izveštaji</h3>
              <p className="text-xs text-gray-600 dark:text-white leading-relaxed transition-colors">
                Detaljna analitika, KPI-jev i izveštaji za donošenje informisanih odluka
              </p>
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
    content: (
      <div className="h-full flex items-center justify-center px-3 sm:px-6 py-4 overflow-y-auto">
        <div className="w-full max-w-5xl h-full flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors">Izveštaji</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-white transition-colors">Detaljna analitika i praćenje performansi</p>
          </div>
          
          <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border-2 border-gray-200 overflow-hidden bg-gray-200">
            <div className="bg-white p-4 sm:p-5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">50</div>
              <div className="text-sm text-gray-600">Aktivnih tagova</div>
            </div>
            
            <div className="bg-white p-4 sm:p-5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">18</div>
              <div className="text-sm text-gray-600">Akcija u toku</div>
            </div>
            
            <div className="bg-white p-4 sm:p-5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-500 mb-1">87%</div>
              <div className="text-sm text-gray-600">Stopa završetka</div>
            </div>
            
            <div className="bg-white p-4 sm:p-5 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">5</div>
              <div className="text-sm text-gray-600">Aktivnih rutina</div>
            </div>
          </div>
          
          <ReportsCarousel />
        </div>
      </div>
    ),
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
        <div className="w-full max-w-7xl mx-auto h-full">
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
