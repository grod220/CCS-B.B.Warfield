import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #da9a50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 78.75rem;
  color: white;
  padding: 100px 20px;
  font-size: 20px;
  text-align: center;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const SubheadHighlight = () => (
  <Container>
    <Content>
      <p>
        Gathering every Sunday forms the heart of our ministry. It’s the time we
        meet as a family, fellowship, worship, and savor the truth of God. Nori
        grape silver beet broccoli kombu beet greens fava bean potato quandong
        celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
        greens parsnip. Sea lettuce lettuce water chestnut eggplant winter
        purslane fennel azuki bean earthnut pea sierra leone bologi leek soko
        chicory celtuce parsley jícama salsify.
      </p>
      <p>We hope you will join us.</p>
    </Content>
  </Container>
);

export default SubheadHighlight;
