import { Button } from "semantic-ui-react";
import client from "./config/apollo";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>app</h1>
        <Button content="Primary" primary />
        <Button content="Secondary" secondary />
      </div>
    </ApolloProvider>
  );
}
