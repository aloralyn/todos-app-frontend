import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Route, Switch } from "react-router-dom";
import { FETCH_USER } from "./store/user/types";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import "./App.css";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const httpLink = createHttpLink({
    uri: "https://qwertypies-api.onrender.com/api/signup",
  });

  const authLink = setContext((_, { headers }) => {
    const auth = localStorage.getItem("auth");
    const token = auth && JSON.parse(auth).idToken;
    return {
      headers: {
        ...headers,
        authorization: token ? `token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink.concat(authLink),
  });

  // useEffect(() => {
  //   dispatch({ type: FETCH_USER, payload: user });
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </ApolloProvider>
  );
};

export default App;
