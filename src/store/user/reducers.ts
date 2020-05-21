import { User, SET_USER, UserActionTypes } from "./types";

const initialState: User = {
  isLoggedIn: false,
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): User {
  switch (action.type) {
    case SET_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
}
