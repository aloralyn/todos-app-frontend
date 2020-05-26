import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Route, Switch } from "react-router-dom";
import Demo from "./components/pages/Demo";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import { AppProvider } from "./store/context";
import { GRAPHQL_ENDPOINT } from "./constants/env";
import "./App.css";

const App: React.FunctionComponent = () => {
  const authLink = setContext((_, { headers }) => {
    const auth = localStorage.getItem("auth");
    const token = auth && JSON.parse(auth).idToken;
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      },
    };
  });

  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Demo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </AppProvider>
    </ApolloProvider>
  );
};

export default App;
