import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import WhiteContentBlock from "../shared/whiteContentBlock";

const Container = styled.div`
  text-align: center;
`;

const ServiceTime = styled.h2`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
`;

const MapsLink = styled.span`
  color: #848484;
  font-weight: 500;
  white-space: nowrap;

  a {
    color: #848484;
  }
`;

const ServiceTimes = ({ serviceTimes }) => (
  <WhiteContentBlock title={"Service Times"}>
    <Container>
      <ServiceTime>
        Sundays @ 3pm, Korskyrkan’s Café{" "}
        <MapsLink>
          (<a
            href="https://goo.gl/maps/Su7ffMHUFaS2"
            target="_blank"
            rel="noopener noreferrer"
          >
            maps link
          </a>)
        </MapsLink>
      </ServiceTime>
      <p>
        The address is Birger Jarlsgatan 66B. It's only 5 min walk away from
        Rådmansgatan subway station (green line). Above is a picture of the
        outside. It’s not the main entrance, but the door to its left (look for
        66B). And feel free to call if you get lost!
      </p>
    </Container>
  </WhiteContentBlock>
);

export default ServiceTimes;
