import React from "react";
import {
  Card as BootstrapCard,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Media,
} from "reactstrap";
import OutsideClickHandler from "react-outside-click-handler";
import NumberAnimation from "./NumberAnimation";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false, isMouseOver: false };
  }

  render() {
    return (
      <BootstrapCard
        className={`h-100 ${
          this.state.isActive
            ? "shadow-lg animate__animated animate__pulse"
            : "shadow-sm"
        } ${
          this.state.isMouseOver && !this.state.isActive
            ? "animate__animated animate__headShake"
            : null
        }`}
        onClick={() => {
          this.setState({ isActive: true });
        }}
        onMouseEnter={() => {
          this.setState({ isMouseOver: true });
        }}
        onMouseLeave={() => {
          this.setState({ isMouseOver: false });
        }}
      >
        <OutsideClickHandler
          onOutsideClick={() => this.setState({ isActive: false })}
        >
          <div className="overlay-container">
            <CardImg
              top
              width="100%"
              src={process.env.PUBLIC_URL + this.props.card.thumbnailUrl}
              alt={this.props.card.title}
            />
            {this.props.card.type === "playlist" ? (
              <div className="overlay">
                <h2>
                  <b>
                    <NumberAnimation number={this.props.card.itemCount} />
                  </b>
                </h2>
                <p>
                  <small>
                    <b>WORKOUTS</b>
                  </small>
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/series-icon.png"}
                  alt="Series Icon"
                />
              </div>
            ) : null}
          </div>
          <CardBody>
            <CardTitle>
              <Media>
                <Media body>
                  <Media heading>
                    <b>{this.props.card.title}</b>
                  </Media>
                </Media>
                <Media right>
                  <Media
                    object
                    src={
                      process.env.PUBLIC_URL +
                      this.props.card.trainerThumbnailUrl
                    }
                    alt={this.props.card.title + " Trainer"}
                  />
                </Media>
              </Media>
            </CardTitle>
            {this.props.card.type === "video" ? (
              <CardSubtitle>
                <b>
                  <img
                    src={process.env.PUBLIC_URL + "/images/timer-icon.png"}
                    alt="Timer Icon"
                  />
                  {" " + this.props.card.duration + " "}
                  <img
                    src={process.env.PUBLIC_URL + "/images/track-icon.png"}
                    alt="Track Icon"
                  />{" "}
                  <NumberAnimation
                    number={Number(this.props.card.viewCount.charAt(0))}
                  />
                  {","}
                  <NumberAnimation
                    number={Number(this.props.card.viewCount.substring(2, 5))}
                  />
                  {" M"}
                </b>
              </CardSubtitle>
            ) : null}
            {this.state.isActive ? (
              <CardText className="animate__animated animate__slideInUp">
                <b>
                  <a href="/">VIEW DETAILS</a>
                </b>
              </CardText>
            ) : null}
          </CardBody>
        </OutsideClickHandler>
      </BootstrapCard>
    );
  }
}
