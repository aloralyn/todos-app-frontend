import { User } from "../generated/graphql";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SetUser = "SET_USER",
  AddTask = "ADD_TASK",
}

type SetUserPayload = {
  [Types.SetUser]: {
    isLoggedIn: boolean;
    user: User;
  };
};

type TaskPayload = {
  [Types.AddTask]: Task;
};

export type Actions = ActionMap<SetUserPayload & TaskPayload>[keyof ActionMap<
  SetUserPayload & TaskPayload
>];

export const authReducer = (
  state: {
    isLoggedIn: boolean;
    user: User | null;
  },
  action: Actions
) => {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      return {
        isLoggedIn: true,
        user: user,
      };
    default:
      return state;
  }
};

export type Task = {
  id?: string;
  title: string;
  description: string;
  dateCreated?: Date;
  dateCompleted?: Date;
};

export const addTaskReducer = (state: Task[], action: Actions) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    default:
      return state;
  }
};
