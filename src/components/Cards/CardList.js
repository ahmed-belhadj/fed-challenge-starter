import React from "react";
import { Row, Col } from "reactstrap";
import data from "../../data.json";
import Card from "./Card";

export default class CardList extends React.Component {
  state = {
    cards: data.cards,
  };

  render() {
    return (
      <Row>
        {this.state.cards.map((card) => (
          <Col className="py-2" key={card.id}>
            <Card card={card} />
          </Col>
        ))}
      </Row>
    );
  }
}
