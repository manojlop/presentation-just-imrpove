export type UserRole = 'admin' | 'manager' | 'worker';
export type TagType = 'safety' | 'maintenance' | 'improvement';
export type TagStatus = 'open' | 'in-progress' | 'done' | 'canceled';
export type ActionStatus = 'new' | 'opened' | 'in-progress' | 'in-review' | 'done' | 'canceled' | 'delayed';
export type RoutineFrequency = 'daily' | 'weekly' | 'monthly' | 'custom';
export type Language = 'en' | 'sr';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: UserRole;
  groupId?: string;
  responsibleFor?: string[]; // Array of location IDs (for managers)
  avatar?: string;
}

export interface UserGroup {
  id: string;
  name: string;
  nameEn?: string;
  memberIds: string[];
}

export interface Machine {
  id: string;
  name: string;
  nameEn?: string;
  code: string;
  model?: string;
  workAreaId: string;
  responsibleFor?: ResponsiblePersons;
}

export interface WorkArea {
  id: string;
  name: string;
  nameEn?: string;
  productionLineId: string;
  machines: Machine[];
  responsibleFor?: ResponsiblePersons;
}

export interface ProductionLine {
  id: string;
  name: string;
  nameEn?: string;
  plantId: string;
  workAreas: WorkArea[];
  responsibleFor?: ResponsiblePersons;
}

export interface ResponsiblePersons {
  safety?: string; // User ID
  maintenance?: string; // User ID
  improvement?: string; // User ID
}

export interface Plant {
  id: string;
  name: string;
  nameEn?: string;
  location: string;
  productionLines: ProductionLine[];
  responsibleFor?: ResponsiblePersons;
}

export interface Tag {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  type: TagType;
  status: TagStatus;
  createdBy: string;
  createdAt: string;
  dueDate?: string;
  assignedTo: string[];
  locationId: string; // Can be plant, line, area, or machine ID
  locationType: 'plant' | 'line' | 'area' | 'machine';
  images?: string[];
  priority?: 'low' | 'medium' | 'high';
  viewedBy?: string[]; // Array of user IDs who have viewed this tag
  comments?: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  contentEn?: string;
  createdBy: string;
  createdAt: string;
  images?: string[];
  isStatusChange?: boolean;
}

export interface Action {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  tagId: string;
  status: ActionStatus;
  createdBy: string;
  createdAt: string;
  assignedTo: string[]; // Can be user IDs or team IDs
  assignedToTeams?: string[]; // Team IDs for team assignments
  dueDate?: string;
  comments?: Comment[];
  subActions?: Action[];
  parentActionId?: string;
}

export type QuestionType = 'yes-no' | 'text' | 'number' | 'checklist';

export interface RoutineQuestion {
  id: string;
  text: string;
  type: QuestionType;
  required: boolean;
  options?: string[]; // For checklist type
}

export interface RoutineAnswer {
  questionId: string;
  value: string | number | boolean | string[];
  answeredAt: string;
  answeredBy: string;
}

export interface RoutineExecution {
  id: string;
  routineId: string;
  executedAt: string;
  executedBy: string;
  answers: RoutineAnswer[];
  status: 'completed' | 'partial' | 'skipped';
}

export interface Routine {
  id: string;
  title: string;
  description: string;
  frequency: RoutineFrequency;
  locationId: string;
  locationType: 'plant' | 'line' | 'area' | 'machine';
  createdBy: string;
  assignedTo: string[];
  lastExecuted?: string;
  nextExecution: string;
  customFrequencyDays?: number;
  questions: RoutineQuestion[];
  executions?: RoutineExecution[];
}

export interface KPI {
  label: string;
  value: number | string;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface KnowledgeBaseItem {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'sop' | 'video' | 'image' | 'instruction';
  category: string;
  tags: string[];
  content?: string;
  url?: string;
  createdAt: string;
  createdBy: string;
}

/** Beleška: naslov, sadržaj, slike, videi */
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  /** Data URL ili URL slika */
  images: string[];
  /** URL ili embed videi */
  videos: string[];
}

/** Stavka to-do liste sa opcionim podsetnikom */
export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  createdBy: string;
  /** ISO string za datum i vreme podsetnika */
  reminderAt?: string;
}
