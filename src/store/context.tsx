import React, { createContext, Dispatch, useReducer } from "react";
import { authReducer, Actions, addTaskReducer } from "./reducers";
import { User } from "../generated/graphql";
import { Task } from "./reducers";

export type InitialStateType = {
  isLoggedIn: boolean;
  user: User | null;
  tasks: Task[];
};

const initialState = {
  isLoggedIn: false,
  user: null,
  tasks: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: Actions) => {
  const { isLoggedIn, user } = authReducer(state, action);
  const tasks = addTaskReducer(state.tasks, action);

  return {
    isLoggedIn: isLoggedIn,
    user: user,
    tasks: tasks,
  };
};

const AppProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
