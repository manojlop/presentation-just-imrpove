import { Tag, Action } from '../types';

// Helper function to get random element from array
const randomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper function to get random number between min and max
const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

// Machine IDs (m1-m30)
const machineIds = Array.from({ length: 30 }, (_, i) => `m${i + 1}`);
const workAreaIds = ['wa1', 'wa2', 'wa3', 'wa4', 'wa5', 'wa6', 'wa7'];
const userIds = ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'];
const tagTypes: ('safety' | 'maintenance' | 'improvement')[] = ['safety', 'maintenance', 'improvement'];
const tagStatuses: ('open' | 'in-progress' | 'done' | 'canceled')[] = ['open', 'in-progress', 'done', 'canceled'];
const priorities: ('low' | 'medium' | 'high')[] = ['low', 'medium', 'high'];

// Safety tag templates
const safetyTemplates = [
  { title: 'Nedostaje zaštitna ograda na {machine}', titleEn: 'Missing safety guard on {machine}' },
  { title: 'Oštećena zaštitna ograda na {machine}', titleEn: 'Damaged safety guard on {machine}' },
  { title: 'Nedostaje upozorenje o opasnosti u {area}', titleEn: 'Missing danger warning in {area}' },
  { title: 'Nedostaje protivpožarni aparat u {area}', titleEn: 'Missing fire extinguisher in {area}' },
  { title: 'Oštećen protivpožarni aparat u {area}', titleEn: 'Damaged fire extinguisher in {area}' },
  { title: 'Nedostaje prva pomoć u {area}', titleEn: 'Missing first aid kit in {area}' },
  { title: 'Nedostaje zaštitna oprema za {machine}', titleEn: 'Missing protective equipment for {machine}' },
  { title: 'Nedostaje upozorenje o buci na {machine}', titleEn: 'Missing noise warning on {machine}' },
  { title: 'Nedostaje upozorenje o visokoj temperaturi na {machine}', titleEn: 'Missing high temperature warning on {machine}' },
  { title: 'Nedostaje upozorenje o električnoj opasnosti na {machine}', titleEn: 'Missing electrical hazard warning on {machine}' },
];

// Maintenance tag templates
const maintenanceTemplates = [
  { title: 'Curenje ulja na {machine}', titleEn: 'Oil leak on {machine}' },
  { title: 'Curenje vode na {machine}', titleEn: 'Water leak on {machine}' },
  { title: 'Neobičan zvuk na {machine}', titleEn: 'Unusual noise on {machine}' },
  { title: 'Vibracije na {machine}', titleEn: 'Vibrations on {machine}' },
  { title: 'Pregrevanje {machine}', titleEn: 'Overheating {machine}' },
  { title: 'Neispravan senzor na {machine}', titleEn: 'Faulty sensor on {machine}' },
  { title: 'Zamena filtera na {machine}', titleEn: 'Filter replacement on {machine}' },
  { title: 'Čišćenje {machine}', titleEn: 'Cleaning {machine}' },
  { title: 'Kalibracija {machine}', titleEn: 'Calibration of {machine}' },
  { title: 'Zamena delova na {machine}', titleEn: 'Parts replacement on {machine}' },
];

// Improvement tag templates
const improvementTemplates = [
  { title: 'Optimizacija protoka proizvodnje na {machine}', titleEn: 'Production flow optimization on {machine}' },
  { title: 'Smanjenje potrošnje energije na {machine}', titleEn: 'Energy consumption reduction on {machine}' },
  { title: 'Poboljšanje kvaliteta proizvoda na {machine}', titleEn: 'Product quality improvement on {machine}' },
  { title: 'Smanjenje otpada na {machine}', titleEn: 'Waste reduction on {machine}' },
  { title: 'Poboljšanje ergonomije u {area}', titleEn: 'Ergonomics improvement in {area}' },
  { title: 'Automatizacija procesa na {machine}', titleEn: 'Process automation on {machine}' },
  { title: 'Poboljšanje sigurnosti u {area}', titleEn: 'Safety improvement in {area}' },
  { title: 'Smanjenje vremena proizvodnje na {machine}', titleEn: 'Production time reduction on {machine}' },
  { title: 'Poboljšanje održavanja {machine}', titleEn: 'Maintenance improvement for {machine}' },
  { title: 'Optimizacija protoka materijala u {area}', titleEn: 'Material flow optimization in {area}' },
];

const machineNames = [
  'Mešalici 1', 'Mešalici 2', 'Liniji punjenja 1', 'Liniji punjenja 2', 'Liniji punjenja limenki',
  'Mašini za etiketiranje 1', 'Mašini za etiketiranje 2', 'Mašini za pranje flaša', 'Inspektoru flaša',
  'Konvejeru', 'Paletizeru 1', 'Paletizeru 2', 'Mašini za pakovanje', 'Sistemu za karbonizaciju',
  'Sistemu za doziranje', 'Hladnjači 1', 'Hladnjači 2', 'Kompresoru', 'Pumpi za prenos',
  'Pasterizatoru', 'Kontrolnoj stanici', 'Sistemu za filtraciju', 'Rezervoaru za vodu',
];

const areaNames = [
  'Stanici za punjenje', 'Etiketiranje i zatvaranje', 'Priprema flaša', 'Paletizacija i pakovanje',
  'Mešanje i prerada', 'Komunalne usluge i hlađenje', 'Kontrola kvaliteta i pasterizacija',
];

export const generateMockTags = (count: number = 100): Tag[] => {
  const tags: Tag[] = [];
  const baseDate = new Date('2025-07-01');
  
  for (let i = 0; i < count; i++) {
    const type = randomElement(tagTypes);
    const status = randomElement(tagStatuses);
    const priority = randomElement(priorities);
    const daysAgo = randomInt(0, 180); // Last 6 months
    const createdAt = new Date(baseDate);
    createdAt.setDate(createdAt.getDate() + daysAgo);
    
    const machineId = randomElement(machineIds);
    const workAreaId = randomElement(workAreaIds);
    const locationId = type === 'maintenance' ? machineId : workAreaId;
    const locationType = type === 'maintenance' ? 'machine' : 'area';
    
    const createdBy = randomElement(userIds);
    const assignedTo = [randomElement(userIds)];
    
    let template;
    let title, titleEn, description, descriptionEn;
    
    if (type === 'safety') {
      template = randomElement(safetyTemplates);
      const machineName = randomElement(machineNames);
      title = template.title.replace('{machine}', machineName).replace('{area}', randomElement(areaNames));
      titleEn = template.titleEn.replace('{machine}', machineName).replace('{area}', randomElement(areaNames));
      description = `Bezbednosni problem koji zahteva hitnu pažnju. ${randomElement(['Kritično za bezbednost radnika.', 'Potrebna je hitna intervencija.', 'Rizik od povrede.'])}`;
      descriptionEn = `Safety issue requiring immediate attention. ${randomElement(['Critical for worker safety.', 'Immediate intervention required.', 'Risk of injury.'])}`;
    } else if (type === 'maintenance') {
      template = randomElement(maintenanceTemplates);
      const machineName = randomElement(machineNames);
      title = template.title.replace('{machine}', machineName);
      titleEn = template.titleEn.replace('{machine}', machineName);
      description = `Problema sa opremom koji utiče na proizvodnju. ${randomElement(['Potrebna je provera.', 'Zahteva održavanje.', 'Utice na performanse.'])}`;
      descriptionEn = `Equipment issue affecting production. ${randomElement(['Inspection required.', 'Maintenance needed.', 'Affecting performance.'])}`;
    } else {
      template = randomElement(improvementTemplates);
      const machineName = randomElement(machineNames);
      const areaName = randomElement(areaNames);
      title = template.title.replace('{machine}', machineName).replace('{area}', areaName);
      titleEn = template.titleEn.replace('{machine}', machineName).replace('{area}', areaName);
      description = `Predlog za poboljšanje procesa. Očekivani benefit: ${randomElement(['Smanjenje troškova.', 'Povećanje efikasnosti.', 'Poboljšanje kvaliteta.', 'Smanjenje vremena proizvodnje.'])}`;
      descriptionEn = `Improvement suggestion. Expected benefit: ${randomElement(['Cost reduction.', 'Efficiency increase.', 'Quality improvement.', 'Production time reduction.'])}`;
    }
    
    const dueDate = status === 'done' ? undefined : new Date(createdAt);
    dueDate?.setDate(dueDate.getDate() + randomInt(1, 30));
    
    const tag: Tag = {
      id: `t${12 + i}`,
      title,
      titleEn,
      description,
      descriptionEn,
      type,
      status,
      createdBy,
      createdAt: createdAt.toISOString(),
      dueDate: dueDate?.toISOString().split('T')[0],
      assignedTo,
      locationId,
      locationType,
      priority,
      images: Math.random() > 0.7 ? [] : [],
      viewedBy: status === 'open' ? [] : [createdBy],
      comments: status === 'done' || status === 'in-progress' ? [
        {
          id: `c${1000 + i}`,
          content: randomElement([
            'Provera završena.',
            'Radovi u toku.',
            'Čeka se isporuka delova.',
            'Završeno uspešno.',
          ]),
          contentEn: randomElement([
            'Inspection completed.',
            'Work in progress.',
            'Waiting for parts delivery.',
            'Completed successfully.',
          ]),
          createdBy: randomElement(userIds),
          createdAt: new Date(createdAt.getTime() + randomInt(1, 5) * 24 * 60 * 60 * 1000).toISOString(),
        }
      ] : [],
    };
    
    tags.push(tag);
  }
  
  return tags;
};

export const generateMockActions = (tags: Tag[], count: number = 150, startId: number = 12): Action[] => {
  const actions: Action[] = [];
  const actionStatuses: ('new' | 'opened' | 'in-progress' | 'done' | 'canceled')[] = ['new', 'opened', 'in-progress', 'done', 'canceled'];
  
  for (let i = 0; i < count; i++) {
    const tag = randomElement(tags);
    const status = randomElement(actionStatuses);
    const createdAt = new Date(tag.createdAt);
    createdAt.setDate(createdAt.getDate() + randomInt(0, 5));
    
    const action: Action = {
      id: `a${startId + i}`,
      title: randomElement([
        'Provera opreme',
        'Zamena delova',
        'Kalibracija sistema',
        'Čišćenje mašine',
        'Podešavanje parametara',
        'Instalacija opreme',
        'Testiranje sistema',
        'Dokumentacija',
      ]),
      description: randomElement([
        'Detaljna provera svih komponenti.',
        'Zamena oštećenih delova.',
        'Kalibracija prema specifikaciji.',
        'Kompletan servis opreme.',
      ]),
      tagId: tag.id,
      status,
      createdBy: randomElement(userIds),
      createdAt: createdAt.toISOString(),
      assignedTo: [randomElement(userIds)],
      dueDate: status === 'done' ? undefined : new Date(createdAt.getTime() + randomInt(1, 14) * 24 * 60 * 60 * 1000).toISOString(),
    };
    
    actions.push(action);
  }
  
  return actions;
};
