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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4070.0867418580538!2d18.025656587969877!3d59.332229728329295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d7de83ee177%3A0x99fbf08a73a513ae!2sSalvation%20Army%20Kungsholmen!5e0!3m2!1sen!2sde!4v1620919001668!5m2!1sen!2sde"
        width="100%"
        height="400"
        frameBorder="0"
        title="Map location of Calvary Stockholm"
      />
      <MapsAnchor
        href="https://goo.gl/maps/B5uYD1Tn7VsyYUsv7"
        target="_blank"
      >
        <BoxLink>View in Google Maps</BoxLink>
      </MapsAnchor>
    </LeftDivFix>
    <div>
      <Title>Service Time & Location</Title>
      <p>Sundays @ 10:00am</p>
      <p>Sankt Göransgatan 61, 112 39 Stockholm</p>
      <p>Quite close to the Friedhelmsplan T-Bana station. We meet in the Salvation Army Kungsholmen building.</p>
    </div>
  </TwoHalfWhiteBlock>
);

export default ServiceTimeAndLocation;
