import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';

const actionInputs = [
  {
    title: 'Opis i uzrok',
    description: 'Problem, šta je uradjeno, koji je uzrok potvrđen i pod kojim uslovima je akcija zatvorena.',
    icon: FileText,
    tone: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Slike i dokazi',
    description: 'Fotografije pre i posle intervencije, screenshot-ovi i vizuelni tragovi sa terena.',
    icon: ImageIcon,
    tone: 'bg-violet-50 text-violet-700 border-violet-100',
  },
  {
    title: 'Komentari i tok rada',
    description: 'Komentari iz akcije, statusi, odluke, probni rad i praktične napomene iz realizacije.',
    icon: MessageSquare,
    tone: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    title: 'Ljudi i kontekst',
    description: 'Ko je prijavio, ko je rešavao, koja linija/oprema je bila pogođena i ko treba da zna za naučenu lekciju.',
    icon: Users,
    tone: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
];

const aiSteps = [
  'Veda/AI čita zatvorenu akciju i sav njen kontekst.',
  'Spaja opis, slike, komentare i učesnike u jedan smislen zapis.',
  'Izvlači problem, uzrok, rešenje, uslove i ključne termine za pretragu.',
  'Pravi draft novog unosa u bazi znanja koji tim može da pregleda i potvrdi.',
];

const knowledgeOutputs = [
  'Naslov i kratak rezime naučene lekcije',
  'Ključne reči, tagovi i povezana oprema',
  'Koraci rešenja i šta proveriti sledeći put',
  'Povezane slike i trag ko je učestvovao',
];

const searchMoments = [
  'Novi operater prijavi sličan problem.',
  'Maintenance tim pretraži bazu po simptomu, opremi ili tagu.',
  'Veda/AI vraća baš ovaj naučeni slučaj kao sledeću preporuku.',
];

const SlideKnowledgeCapture: React.FC = () => {
  return (
    <div className="h-full overflow-hidden px-3 sm:px-4 py-3">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-800">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Zatvaranje akcije postaje znanje
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            Od završene akcije do novog unosa u bazi znanja
          </h2>
          <p className="mx-auto max-w-5xl text-xs sm:text-sm md:text-base text-gray-600 dark:text-white transition-colors">
            Kada zatvorimo akciju ili tag, sistem ne čuva samo istoriju. Veda/AI od svih korisnih podataka pravi novi knowledge base unos koji kasnije može ponovo da se pronađe kroz pretragu.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 xl:grid-cols-[1.05fr_0.9fr_1.05fr]">
          <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-gray-800 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  1. Ulazi iz zatvorene akcije
                </div>
                <h3 className="mt-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
                  Sve korisno ulazi u isti tok
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors">
                  Završena akcija postaje bogat izvor znanja, ne samo status &quot;Done&quot;.
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                <FileText className="h-5 w-5" strokeWidth={2} />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {actionInputs.map(({ title, description, icon: Icon, tone }) => (
                <div
                  key={title}
                  className="rounded-2xl border p-3 transition-colors dark:border-slate-700 dark:bg-slate-900/40"
                >
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${tone}`}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="mt-3 text-sm sm:text-base font-semibold text-gray-900 dark:text-white transition-colors">
                    {title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 transition-colors">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-3 dark:border-blue-900/60 dark:bg-blue-950/20 transition-colors">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                Primer zatvaranja
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-blue-900 dark:text-blue-100">
                Akcija je rešila curenje ulja na hidraulici. Uz opis intervencije, slike novog zaptivača, komentar o probnom radu i imena ljudi koji su učestvovali, sistem dobija dovoljno materijala da nastane kvalitetan zapis za buduće slučajeve.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-blue-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-4 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                  2. Veda/AI obrada
                </div>
                <h3 className="mt-1 text-lg sm:text-xl font-bold">
                  AI pretvara operativni trag u strukturisano znanje
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-blue-100">
                  Cilj nije samo arhiviranje, već izdvajanje onoga što će sledećem timu zaista pomoći.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Bot className="h-6 w-6" strokeWidth={2} />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {aiSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 text-xs font-semibold text-slate-950">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm leading-relaxed text-white">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
              <div className="flex items-center gap-2 text-emerald-200">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">Rezultat AI obrade</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-50">
                Draft je spreman za čuvanje: naslov, rezime, ključne reči, povezani tagovi/oprema, slike i preporučeni koraci za sledeći sličan problem.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-gray-800 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  3. Novi knowledge base unos
                </div>
                <h3 className="mt-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
                  Kasnije se opet nalazi kroz pretragu
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors">
                  Novi unos postaje deo baze znanja i vraća se u sledećem relevantnom slučaju.
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-white">
                <Database className="h-5 w-5" strokeWidth={2} />
              </div>
            </div>

            <div className="mt-4 rounded-[24px] border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                    Draft članka
                  </div>
                  <h4 className="mt-1 text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors">
                    Kako rešiti curenje ulja na hidrauličnom sklopu
                  </h4>
                </div>
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-300" strokeWidth={2} />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
                  Hidraulika
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                  Maintenance
                </span>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                  Curenje ulja
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {knowledgeOutputs.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3 py-2 text-xs sm:text-sm text-gray-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-500" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-3 dark:border-slate-600 dark:bg-slate-900/30 transition-colors">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-slate-700 dark:text-slate-300" strokeWidth={2} />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-300">
                  Kako se vraća u upotrebu
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {searchMoments.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SlideKnowledgeCapture;
