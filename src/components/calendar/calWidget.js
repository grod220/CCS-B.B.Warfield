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
  background-color: #6378dc;
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
`;

// NEED LOGIC TO PREVENT OLD EVENTS

class CalWidget extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.resizeLastTwoBoxes();
    window.addEventListener("resize", this.resizeLastTwoBoxes);
  }

  resizeLastTwoBoxes() {
    const allBoxes = Array.from(document.querySelectorAll(".event-box"));
    const firstBoxSize = allBoxes[0] && allBoxes[0].offsetWidth;

    if (allBoxes.length > 2) {
      allBoxes[allBoxes.length - 1].style.flex = `0 0 ${firstBoxSize}px`;
      allBoxes[allBoxes.length - 2].style.flex = `0 0 ${firstBoxSize}px`;
    }
  }

  removeOldEvents(eventsArr) {
    const twelveHours = 1000 * 60 * 60 * 12;
    return eventsArr.filter(
      event => (Date.parse(event.date) + twelveHours) > Date.now()
    );
  }

  render() {
    const { events } = this.props;
    const filteredEvents = this.removeOldEvents(events);
    return (
      <Container>
        <InnerContainer>
          {filteredEvents.map((event, index, arr) => {
            return (
              <EventBox className="event-box" key={index}>
                <EventName>{event.name}</EventName>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>{event.date}</p>
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
