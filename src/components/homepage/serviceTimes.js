import React from "react";
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

const ServiceTimes = () => (
  <WhiteContentBlock title={"Service Times"}>
    <Container>
      <ServiceTime>
        Sundays @ 3pm {" "}
        <MapsLink>
          (<a
            href="https://goo.gl/maps/B5uYD1Tn7VsyYUsv7"
            target="_blank"
            rel="noopener noreferrer"
          >
            maps link
          </a>)
        </MapsLink>
      </ServiceTime>
      <p>
        The address is Nybrogatan 79B. Feel free to call if you get lost!
      </p>
    </Container>
  </WhiteContentBlock>
);

export default ServiceTimes;
