import { TaskListState, ADD_TASK, TaskActionTypes } from "./types";

const initialState: TaskListState = {
  list: [],
};

export function taskReducer(
  state = initialState,
  action: TaskActionTypes
): TaskListState {
  switch (action.type) {
    case ADD_TASK:
      return {
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
}
