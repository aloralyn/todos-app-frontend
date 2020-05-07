import { User, FETCH_USER, UserActionTypes } from "./types";

const initialState: User = {};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): User {
  switch (action.type) {
    case FETCH_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
