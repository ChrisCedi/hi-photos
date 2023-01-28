import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "../components/Header";

export const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};
