import { useState } from "react";
import client from "./config/apollo";
import { ApolloProvider } from "@apollo/client";
import { Auth } from "./views/Auth";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./themeConfig";

export default function App() {
  const [auth, setAuth] = useState(null);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {!auth ? <Auth /> : <h1>estas loggeado</h1>}
      </ThemeProvider>
    </ApolloProvider>
  );
}
