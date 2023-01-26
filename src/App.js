import { useState, useEffect, useMemo } from "react";
import client from "./config/apollo";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { Auth } from "./views/Auth";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./themeConfig";
import { getToken } from "./utils/token";
import { AuthContext } from "./context/Auth/AuthContext";
import { Navigation } from "./routes/Navigation";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  const logout = () => {
    console.log("adios");
  };
  useEffect(() => {
    const token = getToken();

    if (!token) {
      setAuth(null);
    } else {
      setAuth(token);
    }
  }, []);

  const setUser = (user) => {
    setAuth(user);
  };

  const contextValue = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={contextValue}>
          {!auth ? <Auth /> : <Navigation />}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AuthContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
