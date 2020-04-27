import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/Demo/Main";
import Signup from "./components/pages/Signup";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App: React.FunctionComponent = () => {
  const link = createHttpLink({
    uri: "https://qwertypies-api.onrender.com/api/signup",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/add-task" component={TaskForm} />
      </Switch>
    </ApolloProvider>
  );
};

export default App;
