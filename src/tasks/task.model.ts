export interface Task {
  id: string;
  title;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PRORGESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
