export interface Task {
  id: string;
  title;
  string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PRORGESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
