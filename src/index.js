import { client } from "./client";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";

render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById("root")
);
