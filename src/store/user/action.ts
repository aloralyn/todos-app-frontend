import { User, FETCH_USER, UserActionTypes } from "./types";

export function fetchUser(user: User): UserActionTypes {
  return {
    type: FETCH_USER,
    payload: user,
  };
}
