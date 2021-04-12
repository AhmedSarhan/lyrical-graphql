import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: REACT_APP_GRAPHQL_URI,
});

const cache = new InMemoryCache();
export const GraphQlClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});
