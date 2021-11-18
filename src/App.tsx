import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // GraphQLサーバーのURLを入れる
    uri: "",
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
