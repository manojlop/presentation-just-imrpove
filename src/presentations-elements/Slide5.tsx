import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Tag, RefreshCw, MessageSquare, Calendar, User, CheckCircle } from 'lucide-react';

export interface ActionExample {
  id: string;
  title: string;
  description: string;
  status: string;
  statusColor: string;
  createdBy: string;
  createdByAvatar: string;
  assignedTo: string;
  assignedToAvatar: string;
  dueDate: string;
  tagId: string;
  tagTitle: string;
  comments: { author: string; text: string; time: string }[];
  statusHistory: { fromStatus: string | null; toStatus: string; date: string; time: string; by: string }[];
}

export const defaultActions: ActionExample[] = [
  {
    id: 'A-2025-042',
    title: 'Instalacija zaštitne ograde',
    description: 'Instalirati novu zaštitnu ogradu sa leve strane mašine za punjenje kako bi se eliminisao bezbednosni rizik.',
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-800',
    createdBy: 'Jovana Nikolić',
    createdByAvatar: '/src/images/marija (2).jpeg',
    assignedTo: 'Marko Jovanović',
    assignedToAvatar: '/src/images/andrej (1).jpeg',
    dueDate: '2026-01-18',
    tagId: 'T-2025-042',
    tagTitle: 'Nedostaje zaštitna ograda na mašini',
    comments: [
      { author: 'Marko Jovanović', text: 'Naručena ograda, stiže za 2 dana', time: '2h pre' },
      { author: 'Jovana Nikolić', text: 'Hvala na brzom odgovoru', time: '1h pre' },
    ],
    statusHistory: [
      { fromStatus: null, toStatus: 'New', date: '2026-01-12', time: '10:30', by: 'Jovana Nikolić' },
      { fromStatus: 'New', toStatus: 'In Progress', date: '2026-01-13', time: '08:15', by: 'Marko Jovanović' },
    ],
  },
  {
    id: 'A-2025-038',
    title: 'Zamena hidrauličnog zaptivača',
    description: 'Zameniti oštećeni zaptivač na hidrauličnom sistemu mašine za punjenje kako bi se sprečilo curenje ulja.',
    status: 'Done',
    statusColor: 'bg-blue-100 text-blue-800',
    createdBy: 'Stefan Ilić',
    createdByAvatar: '/src/images/vlada.jpeg',
    assignedTo: 'Ana Đorđević',
    assignedToAvatar: '/src/images/mica (1).jpg',
    dueDate: '2026-01-15',
    tagId: 'T-2025-038',
    tagTitle: 'Curenje ulja na hidrauličnom sistemu',
    comments: [
      { author: 'Ana Đorđević', text: 'Zaptivač zamenjen, testiranje u toku', time: '5h pre' },
      { author: 'Ana Đorđević', text: 'Sve radi kako treba, akcija završena', time: '1h pre' },
    ],
    statusHistory: [
      { fromStatus: null, toStatus: 'New', date: '2026-01-10', time: '09:00', by: 'Stefan Ilić' },
      { fromStatus: 'New', toStatus: 'In Progress', date: '2026-01-11', time: '07:30', by: 'Ana Đorđević' },
      { fromStatus: 'In Progress', toStatus: 'Done', date: '2026-01-14', time: '16:45', by: 'Ana Đorđević' },
    ],
  },
  {
    id: 'A-2025-051',
    title: 'Zamena vođice na izlazu transportera',
    description: 'Zameniti istrošenu vođicu i proveriti poravnanje izlaznog dela transportera kako bi se uklonila zaglavljivanja boca.',
    status: 'New',
    statusColor: 'bg-blue-100 text-blue-800',
    createdBy: 'Marko Jovanović',
    createdByAvatar: '/src/images/andrej (1).jpeg',
    assignedTo: 'Stefan Ilić',
    assignedToAvatar: '/src/images/vlada.jpeg',
    dueDate: '2026-01-25',
    tagId: 'T-2025-061',
    tagTitle: 'Istrošena vođica na transporteru',
    comments: [
      { author: 'Stefan Ilić', text: 'Rezervni deo je potvrđen, planiram zamenu u drugoj smeni', time: '3h pre' },
    ],
    statusHistory: [
      { fromStatus: null, toStatus: 'New', date: '2026-01-12', time: '14:20', by: 'Marko Jovanović' },
    ],
  },
];

const ActionExamples: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'comments' | 'history'>('comments');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? defaultActions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === defaultActions.length - 1 ? 0 : prev + 1));
    setActiveTab('comments');
  };

  const currentAction = defaultActions[currentIndex];

  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-3 sm:p-6 h-[400px] sm:h-[480px] w-full max-w-[350px] sm:max-w-[400px] mx-auto flex flex-col transition-colors relative">
      {/* Navigation - fixed */}
      <div className="flex items-center justify-between flex-shrink-0">
        <button
          onClick={handlePrev}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {defaultActions.map((_, idx) => (
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

      {/* Header - fixed */}
      <div className="flex items-start justify-between py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1 transition-colors">{currentAction.title}</h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">#{currentAction.id}</p>
        </div>
        <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 ${currentAction.statusColor} text-xs sm:text-sm font-medium rounded-lg flex-shrink-0 ml-1 sm:ml-2`}>
          {currentAction.status}
        </span>
      </div>

      {/* Info row - fixed */}
      <div className="py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 space-y-1.5 sm:space-y-2 transition-colors">
        {/* Row 1: Created, Assigned, Due date */}
        <div className="grid grid-cols-3 gap-x-1.5 sm:gap-x-3">
          <div className="flex items-center gap-1 sm:gap-2">
            <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" strokeWidth={2} />
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 transition-colors">Kreirao:</span>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                <img
                  src={currentAction.createdByAvatar}
                  alt={currentAction.createdBy}
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate transition-colors">{currentAction.createdBy}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" strokeWidth={2} />
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 transition-colors">Dodeljeno:</span>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                <img
                  src={currentAction.assignedToAvatar}
                  alt={currentAction.assignedTo}
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate transition-colors">{currentAction.assignedTo}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" strokeWidth={2} />
            <div>
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 transition-colors">Rok:</span>
              <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white block transition-colors">{currentAction.dueDate}</span>
            </div>
          </div>
        </div>

        {/* Row 2: Tag (full width) */}
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-2 border border-gray-200 dark:border-gray-600 transition-colors">
          <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" strokeWidth={2} />
          <div className="min-w-0 flex-1">
            <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Tag:</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white truncate block transition-colors">{currentAction.tagTitle}</span>
          </div>
        </div>
      </div>

      {/* Scrollable content area - everything else */}
      <div className="flex-1 overflow-y-auto min-h-0 py-2 sm:py-3 space-y-2 sm:space-y-3">
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors min-h-[3rem]">
          {currentAction.description}
        </p>

        {/* Comments and History section */}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700 transition-colors">
          {/* Tab Buttons */}
          <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <button
              onClick={() => setActiveTab('comments')}
              className={`flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'comments'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
                <span className="hidden sm:inline">Komentari ({currentAction.comments.length})</span>
                <span className="sm:hidden">({currentAction.comments.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
                <span className="hidden sm:inline">Istorija ({currentAction.statusHistory.length})</span>
                <span className="sm:hidden">({currentAction.statusHistory.length})</span>
              </div>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'comments' ? (
            <div className="space-y-1.5 sm:space-y-2">
              {currentAction.comments.length > 0 ? (
                currentAction.comments.map((comment, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3 transition-colors">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white transition-colors">{comment.author}</span>
                      <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 transition-colors">{comment.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center py-2 transition-colors">Nema komentara</p>
              )}
            </div>
          ) : (
            <div className="space-y-1.5 sm:space-y-2">
              {currentAction.statusHistory.map((history, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3 transition-colors">
                  <div className="flex items-center justify-between mb-0.5 sm:mb-1 flex-wrap gap-1">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {history.fromStatus ? (
                        <>
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">{history.fromStatus}</span>
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" strokeWidth={2} />
                          <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white transition-colors">{history.toStatus}</span>
                        </>
                      ) : (
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white transition-colors">Kreirano: {history.toStatus}</span>
                      )}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 transition-colors">{history.date} {history.time}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1 transition-colors">od {history.by}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Slide5Content: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-8 py-4 overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
          {/* Left: Action Examples */}
          <div className="order-1 md:order-1 flex items-center justify-center">
            <ActionExamples />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-3 sm:space-y-5 order-2 md:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">Akcije</h2>
              <p className="text-sm sm:text-lg text-gray-600 dark:text-white transition-colors">
                Strukturiran proces rešavanja problema sa jasnim koracima
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Kreiranje iz tagova</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Kreirajte akcije iz tagova sa jasnim opisom zadatka</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Praćenje napretka</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Status, komentari i istorija promena u realnom vremenu</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Rokovi i odgovornosti</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Jasno definisani rokovi i dodela odgovornim licima</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Dokumentacija</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Komentari, slike i istorija promena za potpunu transparentnost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5Content;
