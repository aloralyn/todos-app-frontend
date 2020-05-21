export interface User {
  id?: string;
  name?: string;
  email?: string;
  isLoggedIn: boolean;
}

export const SET_USER = "SET_USER";

export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export type UserActionTypes = SetUserAction;
