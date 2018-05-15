import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 78.75rem;
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const EventBox = styled.div`
  width: 32%;
  min-width: 300px;
  flex-grow: 1;
  flex-basis: content;
  background-color: ${props => props.boxColor};
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 22px;
  border-left: 12px solid white;
  border-right: 12px solid white;
  border-bottom: 24px solid white;
`;

const EventName = styled.p`
  font-weight: bold;
  font-size: 27px;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
`;

class CalWidget extends React.Component {
  constructor() {
    super();
    this.colorObj = {};
  }

  componentDidMount() {
    this.resizeLastTwoBoxes();
    window.addEventListener("resize", this.resizeLastTwoBoxes);
  }

  resizeLastTwoBoxes() {
    const allBoxes = Array.from(document.querySelectorAll(".event-box"));
    const firstBoxSize =
      allBoxes[0] && allBoxes[0].getBoundingClientRect().width - 0.1;

    if (allBoxes.length > 2) {
      allBoxes[allBoxes.length - 1].style.flex = `0 0 ${firstBoxSize}px`;
      allBoxes[allBoxes.length - 2].style.flex = `0 0 ${firstBoxSize}px`;
    }
  }

  removeOldEvents(eventsArr) {
    const twentyFourHours = 1000 * 60 * 60 * 24;
    return eventsArr.filter(
      event => Date.parse(event.date) + twentyFourHours > Date.now()
    );
  }

  generateColor(name, localObj) {
    const colorObj = sessionStorage || localObj;
    const refColors = [
      "#ef5350",
      "#EC407A",
      "#AB47BC",
      "#7E57C2",
      "#5C6BC0",
      "#42A5F5",
      "#29B6F6",
      "#26C6DA",
      "#26A69A",
      "#66BB6A",
      "#9CCC65",
      "#FFCA28",
      "#FFA726",
      "#FF7043",
      "#8D6E63",
      "#78909C"
    ];
    if (colorObj[name]) {
      return colorObj[name];
    } else {
      const usedColors = Object.values(colorObj);
      const leftOverColors = refColors.filter(
        refColor => !usedColors.includes(refColor)
      );

      let randomIndex;
      let randomColor;
      if (leftOverColors.length) {
        randomIndex = Math.floor(Math.random() * leftOverColors.length);
        randomColor = leftOverColors[randomIndex];
      } else {
        randomIndex = Math.floor(Math.random() * refColors.length);
        randomColor = refColors[randomIndex];
      }
      colorObj[name] = randomColor;
      return randomColor;
    }
  }

  render() {
    const { events } = this.props;
    const filteredEvents = this.removeOldEvents(events);

    return (
      <Container>
        <InnerContainer>
          {filteredEvents.map((event, index, arr) => {
            return (
              <EventBox
                className="event-box"
                key={index}
                boxColor={() => this.generateColor(event.name, this.colorObj)}
              >
                <EventName>{event.name}</EventName>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>
                  {new Date(event.date).toLocaleString("en", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
                <p>{event.time}</p>
              </EventBox>
            );
          })}
        </InnerContainer>
      </Container>
    );
  }
}

export default CalWidget;
