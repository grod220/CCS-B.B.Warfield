import React from "react";
import styled from "styled-components";

import WhiteContentBlock from "../shared/whiteContentBlock";

const Container = styled.div`
  text-align: center;
`;

const AccountInfo = () => (
  <WhiteContentBlock title="Account info">
    <Container>
      <p>CityLight Hamburg e.V. :: Hamburger Volksbank</p>
      <p>
        IBAN: DE31201900030057250006<br />BIC: GENODEF1HH2
      </p>
      <p>
        Account: 57250006<br />Bank ID: 20190003
      </p>
    </Container>
  </WhiteContentBlock>
);

export default AccountInfo;
