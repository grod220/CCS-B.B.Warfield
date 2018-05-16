import React from "react";
import styled from "styled-components";

import WhiteContentBlock from "../shared/whiteContentBlock";
import { generateColor, removeOldEvents } from "../shared/eventsUtil";

const TwixWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventTwix = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  padding: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  flex-wrap: wrap;
  max-width: 1040px;
  width: 100%;
  text-align: center;

  & + & {
    margin-top: 30px;
  }

  span + span {
    margin-left: 10px;
  }
`;

const ColorBar = styled.div`
  height: 100%;
  width: 20px;
  background-color: ${props => props.sliverColor};
  position: absolute;
  left: 0;
  top: 0;
`;

class CalendarWidget extends React.Component {
  constructor() {
    super();
    this.colorObj = {};
  }

  render() {
    const { events } = this.props;
    const filteredEvents = removeOldEvents(events).slice(0, 3);

    return (
      <WhiteContentBlock title="Upcoming events">
        <TwixWrapper>
          {filteredEvents.map((event, index, arr) => {
            return (
              <EventTwix key={index}>
                <ColorBar
                  sliverColor={() => generateColor(event.name, this.colorObj)}
                />
                <span>
                  {new Date(event.date).toLocaleString("en", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                  })}
                </span>
                {event.time && <span>@ {event.time}</span>}
                <span>::</span>
                <span>
                  <b>{event.name}</b>
                </span>
                {event.location && <span>::</span>}
                <span>{event.location}</span>
              </EventTwix>
            );
          })}
        </TwixWrapper>
      </WhiteContentBlock>
    );
  }
}

export default CalendarWidget;
