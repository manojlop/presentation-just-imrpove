import React, { useState } from 'react';

type ChartOneMode = 'type' | 'priority';
type ChartTwoMode = 'location' | 'equipment';
type ChartThreeMode = 'location' | 'people';
type FeedItemType = 'tag' | 'akcija';
type FeedItemTone = 'blue' | 'amber' | 'emerald';
type ReportStatusKey = 'open' | 'progress' | 'closed';
type KpiTone = 'slate' | 'blue' | 'amber' | 'emerald';

interface KpiDetail {
  label: string;
  value: string;
}

interface KpiCardData {
  id: string;
  title: string;
  value: string;
  caption?: string;
  tone: KpiTone;
  details?: KpiDetail[];
}

interface FeedItem {
  id: string;
  type: FeedItemType;
  title: string;
  subtitle: string;
  actor: string;
  timestamp: string;
  statusLabel: string;
  tone: FeedItemTone;
}

interface AverageSolveDatum {
  label: string;
  days: number;
}

interface StackedDatum {
  label: string;
  open: number;
  progress: number;
  closed: number;
}

const toneClasses: Record<KpiTone, string> = {
  slate: 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900',
  blue: 'border-blue-200 bg-blue-50/80 dark:border-blue-900/70 dark:bg-blue-950/40',
  amber: 'border-amber-200 bg-amber-50/80 dark:border-amber-900/70 dark:bg-amber-950/40',
  emerald: 'border-emerald-200 bg-emerald-50/80 dark:border-emerald-900/70 dark:bg-emerald-950/40',
};

const feedToneClasses: Record<FeedItemTone, string> = {
  blue: 'bg-blue-500',
  amber: 'bg-amber-400',
  emerald: 'bg-emerald-500',
};

const statusLegend = [
  { key: 'open' as const, label: 'Otvoreni', color: 'bg-sky-500' },
  { key: 'progress' as const, label: 'U toku', color: 'bg-amber-400' },
  { key: 'closed' as const, label: 'Zatvoreni', color: 'bg-emerald-500' },
];

const feedItems: FeedItem[] = [
  {
    id: 'feed-1',
    type: 'akcija',
    title: 'Zamenjen senzor temperature na tunel pasterizatoru 1',
    subtitle: 'Povezano sa tagom o senzoru temperature',
    actor: 'Marko Jovanović',
    timestamp: 'Pre 12 min',
    statusLabel: 'Zatvorena',
    tone: 'emerald',
  },
  {
    id: 'feed-2',
    type: 'tag',
    title: 'Prijavljeno curenje vazduha na kompresoru 1',
    subtitle: 'Komunalije i hlađenje',
    actor: 'Ana Đorđević',
    timestamp: 'Pre 28 min',
    statusLabel: 'Otvoren',
    tone: 'blue',
  },
  {
    id: 'feed-3',
    type: 'akcija',
    title: 'Otvorena akcija za proveru osigurača na etiketirki 2',
    subtitle: 'Dodeljeno timu održavanja',
    actor: 'Jovana Nikolić',
    timestamp: 'Pre 43 min',
    statusLabel: 'U toku',
    tone: 'amber',
  },
  {
    id: 'feed-4',
    type: 'tag',
    title: 'Prijavljen predlog zaštite radnog mesta kod paletizera 1',
    subtitle: 'Tip: Poboljšanje',
    actor: 'Stefan Ilić',
    timestamp: 'Pre 1 h',
    statusLabel: 'Otvoren',
    tone: 'blue',
  },
  {
    id: 'feed-5',
    type: 'akcija',
    title: 'Kalibracija mašine za punjenje flaša 1 završena',
    subtitle: 'Potvrđeno od strane supervizora',
    actor: 'Jelena Stanković',
    timestamp: 'Pre 1 h 25 min',
    statusLabel: 'Zatvorena',
    tone: 'emerald',
  },
  {
    id: 'feed-6',
    type: 'tag',
    title: 'Prijavljen visok nivo buke na transfer pumpi 2',
    subtitle: 'Mešanje i prerada',
    actor: 'Milan Petrović',
    timestamp: 'Pre 2 h',
    statusLabel: 'U toku',
    tone: 'amber',
  },
  {
    id: 'feed-7',
    type: 'akcija',
    title: 'Otvorena akcija za obeležavanje zone oko hitnog zaustava',
    subtitle: 'Bezbednosni tag na paletizeru 1',
    actor: 'Ana Đorđević',
    timestamp: 'Pre 2 h 20 min',
    statusLabel: 'Otvorena',
    tone: 'blue',
  },
];

const averageSolveData: Record<ChartOneMode, AverageSolveDatum[]> = {
  type: [
    { label: 'Bezbednost', days: 1.8 },
    { label: 'Održavanje', days: 3.4 },
    { label: 'Poboljšanje', days: 4.2 },
  ],
  priority: [
    { label: 'Visok', days: 1.9 },
    { label: 'Srednji', days: 3.1 },
    { label: 'Nizak', days: 4.8 },
  ],
};

const stackedByLocationOrEquipment: Record<ChartTwoMode, StackedDatum[]> = {
  location: [
    { label: 'Stanica za punjenje', open: 8, progress: 8, closed: 12 },
    { label: 'Paletiranje i pakovanje', open: 6, progress: 7, closed: 10 },
    { label: 'Mešanje i prerada', open: 9, progress: 10, closed: 14 },
    { label: 'Komunalije i hlađenje', open: 6, progress: 6, closed: 12 },
  ],
  equipment: [
    { label: 'Mašina za punjenje 1', open: 7, progress: 8, closed: 14 },
    { label: 'Paletizer 1', open: 6, progress: 7, closed: 10 },
    { label: 'Tunel pasterizator 1', open: 5, progress: 8, closed: 11 },
    { label: 'Kompresor vazduha 1', open: 11, progress: 8, closed: 13 },
  ],
};

const stackedByLocationOrPeople: Record<ChartThreeMode, StackedDatum[]> = {
  location: [
    { label: 'Linija punjenja 1', open: 9, progress: 8, closed: 15 },
    { label: 'Linija za pakovanje', open: 7, progress: 7, closed: 11 },
    { label: 'Proizvodnja i komunalije', open: 8, progress: 10, closed: 13 },
    { label: 'Kontrola kvaliteta', open: 5, progress: 6, closed: 9 },
  ],
  people: [
    { label: 'Marko Jovanović', open: 8, progress: 9, closed: 12 },
    { label: 'Ana Đorđević', open: 7, progress: 8, closed: 10 },
    { label: 'Jelena Stanković', open: 8, progress: 6, closed: 13 },
    { label: 'Jovana Nikolić', open: 6, progress: 8, closed: 13 },
  ],
};

const roundUp = (value: number, step: number) => Math.ceil(value / step) * step;

const buildIntegerTicks = (maxValue: number) =>
  Array.from({ length: maxValue + 1 }, (_, index) => maxValue - index);

const sumStatusTotals = (data: StackedDatum[]) =>
  data.reduce(
    (totals, item) => ({
      open: totals.open + item.open,
      progress: totals.progress + item.progress,
      closed: totals.closed + item.closed,
    }),
    { open: 0, progress: 0, closed: 0 },
  );

const ToggleGroup: React.FC<{
  options: Array<{ value: string; label: string }>;
  selected: string;
  onSelect: (value: string) => void;
}> = ({ options, selected, onSelect }) => (
  <div className="inline-flex rounded-full border border-slate-200 bg-slate-100/90 p-1 dark:border-slate-700 dark:bg-slate-800/90">
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onSelect(option.value)}
        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
          selected === option.value
            ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white'
        }`}
        aria-pressed={selected === option.value}
      >
        {option.label}
      </button>
    ))}
  </div>
);

const KpiCard: React.FC<{ card: KpiCardData }> = ({ card }) => (
  <div className={`h-full rounded-2xl border p-3 shadow-sm transition-colors ${toneClasses[card.tone]}`}>
    <div className="space-y-1">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {card.title}
      </p>
      <div className="text-2xl font-bold leading-none text-slate-900 dark:text-white">{card.value}</div>
      {card.caption ? (
        <p className="text-[11px] leading-snug text-slate-500 dark:text-slate-400">{card.caption}</p>
      ) : null}
    </div>
    {card.details ? (
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {card.details.map((detail) => (
          <div
            key={`${card.id}-${detail.label}`}
            className="flex h-full min-h-[68px] flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-2 py-1.5 text-center dark:border-slate-700 dark:bg-slate-900/60"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
              {detail.label}
            </div>
            <div className="text-base font-bold leading-none text-slate-900 dark:text-white">{detail.value}</div>
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

const ActivityFeed: React.FC = () => (
  <div className="flex h-[320px] flex-col rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-colors dark:border-slate-700 dark:bg-slate-900/95">
    <div className="mb-2 flex items-start justify-between gap-3">
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Tok prijava i akcija</h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Najnovije aktivnosti</p>
      </div>
      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        7 stavki
      </span>
    </div>

    <div className="flex-1 overflow-y-auto pr-1">
      <div className="relative pl-5">
        <div className="absolute left-[9px] top-1 bottom-1 w-px bg-slate-200 dark:bg-slate-700" />
        <div className="space-y-2">
          {feedItems.map((item) => (
            <div key={item.id} className="relative rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 dark:border-slate-700 dark:bg-slate-800/70">
              <div className={`absolute -left-5 top-4 h-4 w-4 rounded-full border-4 border-white dark:border-slate-900 ${feedToneClasses[item.tone]}`} />
              <div className="mb-1.5 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      item.type === 'tag'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">{item.timestamp}</span>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  {item.statusLabel}
                </span>
              </div>
              <h4 className="text-[13px] font-semibold leading-snug text-slate-900 dark:text-white">{item.title}</h4>
              <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">{item.subtitle}</p>
              <p className="mt-1 text-[11px] font-medium text-slate-600 dark:text-slate-300">{item.actor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AverageSolveChart: React.FC<{
  mode: ChartOneMode;
  onModeChange: (mode: ChartOneMode) => void;
}> = ({ mode, onModeChange }) => {
  const data = averageSolveData[mode];
  const chartMax = roundUp(Math.max(...data.map((item) => item.days)), 1);
  const ticks = buildIntegerTicks(chartMax);

  return (
    <div className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-colors dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mb-10 flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Prosečno vreme rešavanja</h3>
        <ToggleGroup
          options={[
            { value: 'type', label: 'Po tipu' },
            { value: 'priority', label: 'Po prioritetu' },
          ]}
          selected={mode}
          onSelect={(value) => onModeChange(value as ChartOneMode)}
        />
      </div>

      <div className="flex flex-1 gap-3">
        <div className="flex h-[180px] w-7 flex-col justify-between text-[11px] font-medium text-slate-400 dark:text-slate-500">
          {ticks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        <div className="relative flex-1 pt-1">
          <div className="absolute left-0 right-0 top-0 h-[180px]">
            {ticks.map((tick) => (
              <div
                key={`line-${tick}`}
                className="absolute left-0 right-0 border-t border-dashed border-slate-200 dark:border-slate-700"
                style={{ top: `${((chartMax - tick) / chartMax) * 100}%` }}
              />
            ))}
          </div>

          <div className="relative z-10 flex h-[180px] items-end justify-around gap-3 px-1">
            {data.map((item) => (
              <div key={item.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="relative flex h-full w-full max-w-[70px] items-end">
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-gradient-to-t from-blue-600 to-sky-400 shadow-[0_12px_20px_rgba(59,130,246,0.25)]"
                    style={{ height: `${(item.days / chartMax) * 100}%` }}
                  />
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    {item.days.toFixed(1)}
                  </div>
                </div>
                <span className="text-center text-[11px] font-semibold leading-tight text-slate-600 dark:text-slate-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-slate-200 dark:border-slate-700" />
        </div>
      </div>
    </div>
  );
};

const StackedBarChart: React.FC<{
  title: string;
  description: string;
  mode: ChartTwoMode | ChartThreeMode;
  options: Array<{ value: ChartTwoMode | ChartThreeMode; label: string }>;
  onModeChange: (mode: ChartTwoMode | ChartThreeMode) => void;
  data: StackedDatum[];
  axisLabel: string;
}> = ({ title, description, mode, options, onModeChange, data, axisLabel }) => {
  const chartMax = roundUp(
    Math.max(...data.map((item) => item.open + item.progress + item.closed)),
    2,
  );
  const tickLabels = [0, chartMax / 4, chartMax / 2, (chartMax * 3) / 4, chartMax].map((tick) =>
    Number(tick.toFixed(0)),
  );

  return (
    <div className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-colors dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">{description}</p>
        </div>
        <ToggleGroup
          options={options.map((option) => ({ value: option.value, label: option.label }))}
          selected={mode}
          onSelect={(value) => onModeChange(value as ChartTwoMode | ChartThreeMode)}
        />
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-3">
        {statusLegend.map((item) => (
          <div key={item.key} className="flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="mb-2 grid grid-cols-[94px_minmax(0,1fr)_34px] gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
        <span />
        <div className="flex justify-between">
          {tickLabels.map((tick) => (
            <span key={`${title}-${tick}`}>{tick}</span>
          ))}
        </div>
        <span className="text-right">Uk.</span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        {data.map((item) => {
          const total = item.open + item.progress + item.closed;

          return (
            <div key={`${title}-${item.label}`} className="grid grid-cols-[94px_minmax(0,1fr)_38px] items-center gap-3">
              <span className="text-[11px] font-semibold leading-tight text-slate-600 dark:text-slate-300">
                {item.label}
              </span>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800" />
                <div className="relative flex h-4 overflow-hidden rounded-full">
                  {statusLegend.map((status) => {
                    const value = item[status.key as ReportStatusKey];
                    return (
                      <div
                        key={`${item.label}-${status.key}`}
                        className={status.color}
                        style={{ width: `${(value / chartMax) * 100}%` }}
                      />
                    );
                  })}
                </div>
              </div>
              <span className="text-right text-xs font-bold text-slate-900 dark:text-white">{total}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-3 border-t border-slate-200 pt-2.5 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {axisLabel}
      </div>
    </div>
  );
};

const Slide12Reports: React.FC = () => {
  const [chartOneMode, setChartOneMode] = useState<ChartOneMode>('type');
  const [chartTwoMode, setChartTwoMode] = useState<ChartTwoMode>('location');
  const [chartThreeMode, setChartThreeMode] = useState<ChartThreeMode>('location');
  const tagTotals = sumStatusTotals(stackedByLocationOrEquipment.location);
  const totalTags = tagTotals.open + tagTotals.progress + tagTotals.closed;
  const closedPercentage = Math.round((tagTotals.closed / totalTags) * 100);

  const kpiCards: KpiCardData[] = [
    {
      id: 'active-tags',
      title: 'Aktivni tagovi',
      value: String(tagTotals.open + tagTotals.progress),
      caption: 'Otvoreni + u toku',
      tone: 'blue',
    },
    {
      id: 'active-actions',
      title: 'Aktivne akcije',
      value: '19',
      caption: 'Aktivne sada',
      tone: 'amber',
    },
    {
      id: 'closed-percent',
      title: 'Procenat zatvorenih tagova',
      value: `${closedPercentage}%`,
      caption: `${tagTotals.closed} od ${totalTags} zatvoreno`,
      tone: 'emerald',
    },
    {
      id: 'new-tags',
      title: 'Novi tagovi',
      value: '29',
      caption: 'Aktuelni period',
      tone: 'slate',
      details: [
        { label: 'Danas', value: '4' },
        { label: 'Ove nedelje', value: '12' },
        { label: 'Ovog meseca', value: '29' },
      ],
    },
    {
      id: 'closed-tags',
      title: 'Zatvoreni tagovi',
      value: String(tagTotals.closed),
      caption: 'Aktuelni period',
      tone: 'slate',
      details: [
        { label: 'Danas', value: '3' },
        { label: 'Ove nedelje', value: '10' },
        { label: 'Ovog meseca', value: String(tagTotals.closed) },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto px-3 py-4 sm:px-6">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-3 rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.10)] transition-colors dark:border-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:p-5">
        <div className="shrink-0 flex items-center justify-center">
          <div className="space-y-1 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300">
              Just Improve
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Izveštaji</h2>
            <p className="text-[12px] text-slate-500 dark:text-slate-400">Pregled prijava, akcija i statusa</p>
          </div>
        </div>

        <div className="grid shrink-0 items-start grid-cols-1 gap-3 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.35fr)]">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:min-h-[112px]">
              <KpiCard card={kpiCards[0]} />
            </div>
            <div className="sm:col-span-2 sm:min-h-[112px]">
              <KpiCard card={kpiCards[1]} />
            </div>
            <div className="sm:col-span-2 sm:min-h-[112px]">
              <KpiCard card={kpiCards[2]} />
            </div>
            <div className="sm:col-span-3">
              <KpiCard card={kpiCards[3]} />
            </div>
            <div className="sm:col-span-3">
              <KpiCard card={kpiCards[4]} />
            </div>
          </div>

          <ActivityFeed />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 xl:grid-cols-3">
          <AverageSolveChart mode={chartOneMode} onModeChange={setChartOneMode} />
          <StackedBarChart
            title="Broj tagova po statusu"
            description="X: broj tagova, Y: lokacije ili oprema"
            mode={chartTwoMode}
            options={[
              { value: 'location', label: 'Lokacije' },
              { value: 'equipment', label: 'Oprema' },
            ]}
            onModeChange={(mode) => setChartTwoMode(mode as ChartTwoMode)}
            data={stackedByLocationOrEquipment[chartTwoMode]}
            axisLabel="Broj tagova"
          />
          <StackedBarChart
            title="Prijave po statusu"
            description="X: broj prijava, Y: lokacije ili osobe"
            mode={chartThreeMode}
            options={[
              { value: 'location', label: 'Lokacije' },
              { value: 'people', label: 'Osobe' },
            ]}
            onModeChange={(mode) => setChartThreeMode(mode as ChartThreeMode)}
            data={stackedByLocationOrPeople[chartThreeMode]}
            axisLabel="Broj prijavljenih tagova"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide12Reports;
