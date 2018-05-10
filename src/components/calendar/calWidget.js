import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 500px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalWidget = ({ events }) => (
  <Container>
    {events.map(event => {
      return (
        <div>
          <p>{event.name}</p>
          <p>{event.description}</p>
        </div>
      );
    })}
  </Container>
);

export default CalWidget;
