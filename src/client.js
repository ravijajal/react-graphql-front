import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://172.20.10.3:3001/graphql"
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});