import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user/reducers";
import { taskReducer } from "./tasks/reducers";

const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
}
