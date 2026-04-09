import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Shield, Wrench, TrendingUp, Brain, Sparkles, ClipboardList, BookOpen, ListChecks, Users, LucideIcon } from 'lucide-react';
import { defaultActions } from './Slide5';
import { mockKnowledgeBase } from '../data/mockData';

export interface TagExample {
  id: string;
  title: string;
  description: string;
  type: string;
  typeColor: string;
  priority: string;
  priorityColor: string;
  location: string;
  locationLabel: string;
  assigned: string;
  assignedAvatar: string;
  status: string;
  statusColor: string;
  icon: LucideIcon;
  image?: string;
}

export const defaultTags: TagExample[] = [
  {
    id: 'T-2025-042',
    title: 'Nedostaje zaštitna ograda na mašini',
    description: 'Na mašini za punjenje nedostaje zaštitna ograda sa leve strane. Predstavlja bezbednosni rizik za radnike.',
    type: 'Bezbednost',
    typeColor: 'bg-red-100 text-red-800',
    priority: 'Visok',
    priorityColor: 'bg-red-100 text-red-800',
    location: 'Beverage Production Plant > Bottling Line 1 > Filling Station',
    locationLabel: 'Lokacija',
    assigned: 'Marko Jovanović',
    assignedAvatar: '/src/images/andrej (1).jpeg',
    status: 'Open',
    statusColor: 'bg-blue-100 text-blue-800',
    icon: Shield,
  },
  {
    id: 'T-2025-038',
    title: 'Curenje ulja na hidrauličnom sistemu',
    description: 'Primećeno je curenje hidrauličnog ulja na mašini za punjenje. Potrebna hitna intervencija kako bi se sprečio dalji gubitak ulja.',
    type: 'Održavanje',
    typeColor: 'bg-yellow-100 text-yellow-800',
    priority: 'Visok',
    priorityColor: 'bg-red-100 text-red-800',
    location: 'Bottle Filling Machine 1 (FIL-001)',
    locationLabel: 'Oprema',
    assigned: 'Ana Đorđević',
    assignedAvatar: '/src/images/mica (1).jpg',
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-800',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
  },
  {
    id: 'T-2025-061',
    title: 'Istrošena vođica na transporteru',
    description: 'Vođica na izlazu sa transportera je istrošena, pa dolazi do povremenog zastoja i lošeg vođenja boca.',
    type: 'Održavanje',
    typeColor: 'bg-yellow-100 text-yellow-800',
    priority: 'Srednji',
    priorityColor: 'bg-orange-100 text-orange-800',
    location: 'Conveyor Transfer 2 (CON-002)',
    locationLabel: 'Oprema',
    assigned: 'Stefan Ilić',
    assignedAvatar: '/src/images/vlada.jpeg',
    status: 'Open',
    statusColor: 'bg-blue-100 text-blue-800',
    icon: Wrench,
  },
];

interface TagExamplesProps {
  tags?: TagExample[];
}

interface AiContact {
  name: string;
  role: string;
  reason: string;
}

interface AiGuidance {
  overview: string;
  knowledgeBaseIds: string[];
  immediateSteps: string[];
  contacts: AiContact[];
  suggestedAction: string;
  followUp: string[];
}

const aiGuidanceByTagId: Record<string, AiGuidance> = {
  'T-2025-042': {
    overview:
      'Veda preporučuje da se fokus odmah prebaci na zaštitu ljudi i brzo vraćanje mašine u bezbedno stanje. Cilj nije dodatna potvrda problema, već izolacija rizika, organizacija intervencije i kontrolisano puštanje opreme nazad u rad.',
    knowledgeBaseIds: ['kb21', 'kb22', 'kb3', 'kb26'],
    immediateSteps: [
      'Odmah obeležiti zonu i proveriti da li mašina sme da ostane u radu ili je potreban bezbedan stop.',
      'Vizuelno potvrditi da li je ograda potpuno uklonjena, oštećena ili privremeno zaobiđena.',
      'Primeni LOTO ako je potreban pristup zoni mašine radi provere ili vraćanja zaštite.',
      'Fotografisati stanje i proveriti da li isti tip odstupanja postoji i na susednim stanicama.',
      'Otvoriti ili dopuniti korektivnu akciju za vraćanje zaštitne ograde i proveru sigurnosnih blokada.',
    ],
    contacts: [
      {
        name: 'Jovana Nikolić',
        role: 'Odgovorna za bezbednost linije',
        reason: 'Treba da potvrdi nivo rizika, odluku o radu mašine i obavezne korektivne mere.',
      },
      {
        name: 'Marko Jovanović',
        role: 'Održavanje / izvršilac intervencije',
        reason: 'Treba da proveri da li zaštita može odmah da se vrati i da li su blokade funkcionalne.',
      },
      {
        name: 'Vođa smene',
        role: 'Operativna koordinacija',
        reason: 'Treba da obezbedi da operateri ne koriste mašinu dok se rizik ne zatvori.',
      },
    ],
    suggestedAction:
      'Veda preporučuje hitnu akciju za vraćanje zaštitne ograde, proveru sigurnosnih blokada i formalnu potvrdu bezbednog puštanja mašine u rad.',
    followUp: [
      'Proveriti da li postoji zapis o ranijem uklanjanju zaštite zbog servisa ili podešavanja.',
      'Potvrditi da su operateri obavešteni o privremenim ograničenjima rada.',
      'Nakon intervencije uraditi ponovnu bezbednosnu proveru i dokumentovati zatvaranje rizika.',
    ],
  },
  'T-2025-038': {
    overview:
      'Veda preporučuje da se problem rešava kroz ubrzanu dijagnostiku i sprečavanje sekundarnog kvara. Fokus je na lokalizaciji izvora, kontroli rizika po opremu i brzom vraćanju mašine u stabilan rad bez ponavljanja curenja.',
    knowledgeBaseIds: ['kb1', 'kb7', 'kb5', 'kb29'],
    immediateSteps: [
      'Potvrditi tačnu lokaciju curenja i napraviti jasnu fotografiju traga ulja i pogođene zone.',
      'Proveriti nivo hidrauličnog ulja, vidljive zaptivače, spojnice i kritične priključke.',
      'Uporediti trag sa hidrauličkim dijagramom i utvrditi da li je izvor curenja iznad vidljivog mesta kapanja.',
      'Ako postoji rizik od većeg gubitka ulja ili oštećenja opreme, zaustaviti mašinu i prebaciti prioritet na hitnu intervenciju.',
      'Nakon popravke očistiti mašinu i uraditi probni rad pod opterećenjem da se potvrdi da curenje više ne postoji.',
    ],
    contacts: [
      {
        name: 'Ana Đorđević',
        role: 'Dodeljeni maintenance tehničar',
        reason: 'Treba da sprovede dijagnostiku, potvrdi uzrok i vodi servisnu intervenciju.',
      },
      {
        name: 'Marko Jovanović',
        role: 'Odgovoran za liniju / održavanje',
        reason: 'Treba da proceni da li problem utiče i na povezanu opremu ili plan preventivnog servisa.',
      },
      {
        name: 'Vođa proizvodnje',
        role: 'Koordinacija rada linije',
        reason: 'Treba da uskladi zastoj, prioritet intervencije i eventualni uticaj na plan proizvodnje.',
      },
    ],
    suggestedAction:
      'Veda preporučuje ažuriranje akcije za zamenu zaptivača, proveru pritiska sistema i potvrdu stabilnog rada mašine posle probnog testa.',
    followUp: [
      'Proveriti da li je isti sklop ranije imao slične intervencije ili ponavljano curenje.',
      'Pregledati da li je potrebno uvesti dodatni preventivni servis na povezanoj opremi.',
      'Upisati uzrok kvara i rezultat testa kako bi buduće prijave imale bolji istorijski kontekst.',
    ],
  },
  'T-2025-051': {
    overview:
      'Veda preporučuje da se predlog odmah pretvori u strukturisani pilot plan. Fokus je na brzom otkrivanju najvećih gubitaka u toku rada, testiranju nove organizacije i validaciji koristi kroz vreme, kvalitet i stabilnost procesa.',
    knowledgeBaseIds: ['kb23', 'kb24', 'kb6', 'kb27', 'kb28'],
    immediateSteps: [
      'Mapirati trenutni tok operacija i izmeriti vreme prelaza između radnih stanica.',
      'Popisati konkretna čekanja, nepotrebno kretanje operatera i uska grla na pakovanju.',
      'Napraviti pilot predlog novog rasporeda sa jasnim pretpostavkama o uštedi vremena.',
      'Definisati kako će se pratiti kvalitet, bezbednost i stabilnost procesa tokom testiranja promene.',
      'Ako pilot pokaže rezultat, otvoriti improvement akciju sa odgovornostima, rokovima i kriterijumom uspeha.',
    ],
    contacts: [
      {
        name: 'Stefan Ilić',
        role: 'Vlasnik improvement inicijative',
        reason: 'Treba da vodi procenu koristi, prioritizaciju i donošenje odluke o pilot promeni.',
      },
      {
        name: 'Vođa pakovanja',
        role: 'Operativni vlasnik procesa',
        reason: 'Treba da potvrdi realnost predloga na terenu i uticaj na kapacitet smene.',
      },
      {
        name: 'Jelena Stanković',
        role: 'Kontrola kvaliteta',
        reason: 'Treba da potvrdi da predlog ne uvodi skrivena odstupanja u kvalitetu nakon promene toka rada.',
      },
    ],
    suggestedAction:
      'Veda preporučuje otvaranje analitičke improvement akcije za snimanje postojećeg toka, pilot reorganizaciju stanica i merenje efekta na vreme prelaza i kvalitet.',
    followUp: [
      'Proveriti da li postoje slični raniji predlozi ili delimično sprovedene promene na istoj zoni.',
      'Posle pilot testa uporediti vreme ciklusa, čekanja i broj kvalitetnih odstupanja pre i posle promene.',
      'Ako rezultat bude pozitivan, standardizovati novi raspored kroz uputstvo i obuku operatera.',
    ],
  },
};

const TagExamples: React.FC<TagExamplesProps> = ({ tags = defaultTags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAiContext, setShowAiContext] = useState(false);

  // Jump to newest tag when a new one is added
  useEffect(() => {
    if (tags.length > 0) {
      setCurrentIndex(tags.length - 1);
    }
  }, [tags.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? tags.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === tags.length - 1 ? 0 : prev + 1));
  };

  if (tags.length === 0) {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-[480px] w-[400px] max-sm:h-auto max-sm:min-h-[18rem] max-sm:w-full max-sm:max-w-full flex items-center justify-center">
        <p className="text-gray-500">Nema tagova</p>
      </div>
    );
  }

  const currentTag = tags[currentIndex];
  const IconComponent = currentTag.icon;
  const similarTags = tags.filter((tag) => tag.id !== currentTag.id && tag.type === currentTag.type).slice(-2).reverse();
  const relatedActions = defaultActions
    .filter((action) => action.tagId === currentTag.id || similarTags.some((tag) => tag.id === action.tagId))
    .slice(0, 3);
  const aiGuidance = aiGuidanceByTagId[currentTag.id] ?? {
    overview: 'Veda preporučuje standardni tok za brzo rešavanje: definisati prioritet, proveriti istoriju sličnih prijava, uključiti odgovorno lice i otvoriti akciju sa jasnim sledećim korakom.',
    knowledgeBaseIds: [],
    immediateSteps: [
      'Potvrditi osnovne činjenice na terenu i proveriti tačnu lokaciju problema.',
      'Pregledati istoriju sličnih prijava i prethodne akcije.',
      'Uključiti odgovorno lice i definisati naredni korak za rešavanje.',
    ],
    contacts: [
      {
        name: currentTag.assigned,
        role: 'Dodeljeno lice',
        reason: 'Treba da potvrdi stanje na terenu i predloži prvi operativni korak.',
      },
    ],
    suggestedAction: 'Veda preporučuje otvaranje odgovarajuće akcije i dopunu taga proverom uzroka, odgovornosti i narednih aktivnosti.',
    followUp: [
      'Dopuniti tag jasnim nalazom sa terena.',
      'Povezati ga sa odgovarajućom akcijom ili SOP dokumentom.',
    ],
  };
  const relatedKnowledge = aiGuidance.knowledgeBaseIds
    .map((knowledgeId) => mockKnowledgeBase.find((item) => item.id === knowledgeId))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-3 sm:p-6 h-[400px] sm:h-[480px] w-full max-w-[350px] sm:max-w-[400px] max-sm:h-auto max-sm:max-w-full mx-auto flex flex-col transition-colors">
      {/* Navigation */}
      <div className="flex items-center justify-between flex-shrink-0">
        <button
          onClick={handlePrev}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {tags.map((_, idx) => (
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

      {/* Tag Content */}
      <div className="flex-1 flex flex-col mt-3 sm:mt-5 min-h-0">
        {/* Header - fixed */}
        <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1 transition-colors">{currentTag.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors">#{currentTag.id}</p>
            </div>
          </div>
          <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 ${currentTag.statusColor} text-xs font-medium rounded-lg flex-shrink-0 ml-1 sm:ml-2`}>
            {currentTag.status}
          </span>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto min-h-0 py-3 sm:py-4">
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
            {currentTag.description}
          </p>

              <div className="mt-3 sm:mt-4 flex justify-center">
            <button
              onClick={() => setShowAiContext((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-xs sm:text-sm font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-200 dark:hover:bg-violet-950/70"
            >
              <Brain className="w-4 h-4" strokeWidth={2} />
              <span>{showAiContext ? 'Sakrij Veda odgovor' : 'Prikaži Veda odgovor'}</span>
            </button>
          </div>

          {showAiContext && (
            <div className="mt-3 sm:mt-4 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-3 sm:p-4 shadow-sm dark:border-violet-800 dark:from-violet-950/50 dark:via-gray-800 dark:to-sky-950/30 transition-colors">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-violet-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">
                    <Sparkles className="w-3 h-3" strokeWidth={2} />
                    Veda
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Veda koristi <span className="font-semibold text-gray-900 dark:text-white">bazu znanja</span>, prethodne tagove i postojeće akcije da predlozi najbrzi put do mitigacije i zatvaranja problema.
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-2.5 sm:space-y-3">
                <div className="rounded-xl bg-white/80 dark:bg-gray-900/40 border border-white/70 dark:border-gray-700 p-3 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                    <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-300" strokeWidth={2} />
                    Veda preporuka
                  </div>
                  <p className="mt-2 text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    {aiGuidance.overview}
                  </p>
                </div>

                <div className="rounded-xl bg-white/80 dark:bg-gray-900/40 border border-white/70 dark:border-gray-700 p-3 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300" strokeWidth={2} />
                    Znanje iz baze znanja
                  </div>
                  {relatedKnowledge.length > 0 ? (
                    <div className="mt-2 space-y-2">
                      {relatedKnowledge.map((item) => (
                        <div key={item.id} className="rounded-lg bg-gray-50 dark:bg-gray-800/70 px-2.5 py-2 transition-colors">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-gray-900 dark:text-white">{item.title}</span>
                            <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{item.category}</span>
                          </div>
                          <p className="mt-1 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300">
                      Veda trenutno nema direktno vezane dokumente iz baze znanja za ovaj tag.
                    </p>
                  )}
                </div>

                <div className="rounded-xl bg-white/80 dark:bg-gray-900/40 border border-white/70 dark:border-gray-700 p-3 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                    <ListChecks className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" strokeWidth={2} />
                    Predloženi naredni koraci
                  </div>
                  <div className="mt-2 space-y-2">
                    {aiGuidance.immediateSteps.map((step, idx) => (
                      <div key={step} className="rounded-lg bg-gray-50 dark:bg-gray-800/70 px-2.5 py-2 transition-colors">
                        <div className="flex items-start gap-2">
                          <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200">
                            {idx + 1}
                          </span>
                          <p className="text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white/80 dark:bg-gray-900/40 border border-white/70 dark:border-gray-700 p-3 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                    <Users className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" strokeWidth={2} />
                    Koga uključiti
                  </div>
                  <div className="mt-2 space-y-2">
                    {aiGuidance.contacts.map((contact) => (
                      <div key={`${contact.name}-${contact.role}`} className="rounded-lg bg-gray-50 dark:bg-gray-800/70 px-2.5 py-2 transition-colors">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">{contact.name}</div>
                        <div className="text-[11px] sm:text-xs text-amber-700 dark:text-amber-300 mt-0.5">{contact.role}</div>
                        <p className="mt-1 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{contact.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white/80 dark:bg-gray-900/40 border border-white/70 dark:border-gray-700 p-3 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                    <TrendingUp className="w-3.5 h-3.5 text-violet-600 dark:text-violet-300" strokeWidth={2} />
                    Slični prethodni tagovi
                  </div>
                  {similarTags.length > 0 ? (
                    <div className="mt-2 space-y-2">
                      {similarTags.map((tag) => (
                        <div key={tag.id} className="rounded-lg bg-gray-50 dark:bg-gray-800/70 px-2.5 py-2 transition-colors">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-gray-900 dark:text-white truncate">{tag.title}</span>
                            <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">#{tag.id}</span>
                          </div>
                          <p className="mt-1 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{tag.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300">
                      Nema sličnih tagova u prikazanoj bazi, ali Veda će uporediti unos sa budućim prijavama i istorijom na istoj lokaciji.
                    </p>
                  )}
                </div>

                <div className="rounded-xl bg-white/80 dark:bg-gray-900/40 border border-white/70 dark:border-gray-700 p-3 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                    <ClipboardList className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300" strokeWidth={2} />
                    Prethodne akcije u sistemu
                  </div>
                  {relatedActions.length > 0 ? (
                    <div className="mt-2 space-y-2">
                      {relatedActions.map((action) => (
                        <div key={action.id} className="rounded-lg bg-gray-50 dark:bg-gray-800/70 px-2.5 py-2 transition-colors">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-gray-900 dark:text-white truncate">{action.title}</span>
                            <span className={`px-1.5 py-0.5 rounded-md text-[10px] sm:text-xs font-medium ${action.statusColor}`}>
                              {action.status}
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                            #{action.id} • {action.assignedTo} • rok {action.dueDate}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-[11px] sm:text-xs text-gray-600 dark:text-gray-300">
                      Još nema direktno povezanih akcija, pa Veda preporučuje kreiranje prve akcije i vezivanje budućih aktivnosti za ovaj tag.
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-violet-200/80 bg-violet-100/70 px-3 py-2.5 text-[11px] sm:text-xs text-violet-900 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-100 transition-colors">
                  <div className="font-semibold">Veda preporučuje</div>
                  <p className="mt-1 leading-relaxed">{aiGuidance.suggestedAction}</p>
                  <div className="mt-2 space-y-1">
                    {aiGuidance.followUp.map((item) => (
                      <div key={item} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-violet-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Image for maintenance tag */}
          {currentTag.image && (
            <div className="relative group mt-3 sm:mt-4">
              <img
                src={currentTag.image}
                alt="Tag image"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer transition-colors"
              />
              {/* Hover overlay with large image */}
              <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block z-[100] pointer-events-none">
                <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-2xl transition-colors">
                  <img
                    src={currentTag.image}
                    alt="Tag image large"
                    className="w-[280px] sm:w-96 h-[210px] sm:h-72 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer details - fixed */}
        <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 transition-colors">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Tip</span>
            <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 ${currentTag.typeColor} text-xs font-medium rounded-lg`}>
              {currentTag.type}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Prioritet</span>
            <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 ${currentTag.priorityColor} text-xs font-medium rounded-lg`}>
              {currentTag.priority}
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs text-gray-600 dark:text-gray-400 flex-shrink-0 transition-colors">{currentTag.locationLabel}</span>
            <span className="text-xs font-medium text-gray-900 dark:text-white text-right truncate transition-colors" title={currentTag.location}>
              {currentTag.location}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Dodeljen</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img
                src={currentTag.assignedAvatar}
                alt={currentTag.assigned}
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xs font-medium text-gray-900 dark:text-white transition-colors">{currentTag.assigned}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagExamples;
