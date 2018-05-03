import React from "react";
import styled from "styled-components";

import WhiteContentBlock from "../shared/whiteContentBlock";

const Container = styled.div`
  h3 {
    margin-bottom: 0;
  }
`

const WhatToExpect = () => (
  <WhiteContentBlock title={"What to expect"}>
    <Container>
      <h3>We Worship</h3>
      <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra
        wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
      </p>
      <h3>We Learn</h3>
      <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra
        wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
      </p>
      <h3>We Pray</h3>
      <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra
        wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
      </p>
      <h3>We Fellowship</h3>
      <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra
        wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
      </p>
    </Container>
  </WhiteContentBlock>
);

export default WhatToExpect;
