import { User, SET_USER, UserActionTypes } from "./types";

export function setUser(user: User): UserActionTypes {
  return {
    type: SET_USER,
    payload: user,
  };
}
