import React from "react";
import styled from "styled-components";

import TwoHalfWhiteBlock from "../shared/twoHalfWhiteBlock";

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.625rem;
  text-align: center;
  color: #848484;
`;

const BoxLink = styled.div`
  background-color: #54c5a6;
  text-transform: uppercase;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding: 10px 34px;
  color: white;
  letter-spacing: 3px;
  width: fit-content;
`;

const MapsAnchor = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const LeftDivFix = styled.div`
  width: 100%;
`;

const ServiceTimeAndLocation = () => (
  <TwoHalfWhiteBlock>
    <LeftDivFix>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.4261104425425!2d18.061877616317492!3d59.34253468166352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d69af33a1c7%3A0xc00a805f698b8ae5!2sBirger+Jarlsgatan+66B%2C+114+29+Stockholm!5e0!3m2!1sen!2sse!4v1525357713147"
        width="100%"
        height="400"
        frameBorder="0"
        title="Map location of Calvary Stockholm"
      />
      <MapsAnchor
        href="https://www.google.com/maps?ll=59.342568,18.064013&z=16&t=m&hl=en-US&gl=SE&mapclient=embed&q=Birger+Jarlsgatan+66B+114+29+Stockholm"
        target="_blank"
      >
        <BoxLink>View in Google Maps</BoxLink>
      </MapsAnchor>
    </LeftDivFix>
    <div>
      <Title>Service Time & Location</Title>
      <p>Sundays @ 3:00pm </p>
      <p>Korskyrkan’s Café, Birger Jarlsgatan 66B, 114 29 Stockholm</p>
      <p>
        It's only 5 min walk away from Rådmansgatan subway station (green line).
        Above is a picture of the outside. It’s not the main entrance, but the
        door to its left (look for 66B).
      </p>
    </div>
  </TwoHalfWhiteBlock>
);

export default ServiceTimeAndLocation;
