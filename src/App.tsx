import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App: React.FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/add-task" component={TaskForm} />
  </Switch>
);

export default App;
