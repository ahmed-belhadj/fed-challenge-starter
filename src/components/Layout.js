import React from "react";
import { Container } from "reactstrap";
import CardList from "./Cards/CardList";

const Layout = (props) => {
  return (
    <Container>
      <CardList />
    </Container>
  );
};

export default Layout;
