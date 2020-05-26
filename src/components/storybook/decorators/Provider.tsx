import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GRAPHQL_ENDPOINT } from "../../../constants/env";

import { Store } from "redux";

interface ProviderWrapperProps {
  children: ReactNode;
  store: Store<any>;
}

const ProviderWrapper: React.FunctionComponent<ProviderWrapperProps> = ({
  children,
  store,
}) => {
  const link = createHttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
};

export default ProviderWrapper;
