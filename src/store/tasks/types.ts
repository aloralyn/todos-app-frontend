export interface Task {
  id?: number;
  title: string;
  description: string;
  dateCreated?: Date;
}

export interface TaskListState {
  list: Task[];
}

export const ADD_TASK = "ADD_TASK";

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export type TaskActionTypes = AddTaskAction;
