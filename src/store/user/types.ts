export interface User {
  id?: string;
  name?: string;
  email?: string;
}

export const FETCH_USER = "FETCH_USER";

export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: User;
}

export type UserActionTypes = FetchUserAction;
