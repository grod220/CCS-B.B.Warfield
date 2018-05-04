import React from "react";
import styled from "styled-components";

import TwoHalfWhiteBlock from "../shared/twoHalfWhiteBlock";
import FamilyPic from "../../images/who-we-are-pastor-family.jpg";

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.625rem;
  text-align: center;
  color: #848484;
`;

const FamilyImg = styled.img`
  max-height: 500px;
`;

const OurPastor = () => (
  <TwoHalfWhiteBlock>
    <FamilyImg src={FamilyPic} />
    <div>
      <Title>Our Pastor</Title>
      <p>
        Pastor Tim Chaddick and his wife Lindsey care deeply about the ministry
        of the local church in major urban centres and have sought to devote
        themselves to helping churches begin and flourish in their mission to
        share and reflect the gospel.
      </p>
      <p>
        Tim was born and raised in the San Francisco Bay area of California.
        Growing up, Christian faith was the last thing on his mind as he pursued
        pleasure, relationships and a musical career as the source of his
        identity. It wasn’t until he heard and received the gospel of Jesus
        Christ that the illusion of a self-centered life was shattered. In its
        place, Tim experienced forgiveness and newness of life with God.
      </p>
    </div>
  </TwoHalfWhiteBlock>
);

export default OurPastor;
