import React from "react";
import Helmet from "react-helmet";

import Hero from "../images/giving-workshop.jpg";
import HeaderBlock from "../components/shared/headerBlock";
import GivingHighlight from "../components/giving/givingHighlight";
import AccountInfo from "../components/giving/accountInfo";
import SupportedMinistries from "../components/giving/supportedMinistries";
import HowWeSeeGiving from "../components/giving/howWeSeeGiving";

const Giving = () => (
  <div>
    <Helmet
      title="Calvary Stockholm :: Giving"
      meta={[
        {
          name: "description",
          content:
            "It is the means of which we can maintain minitries and help those in need."
        }
      ]}
    />
    <HeaderBlock img={Hero} titleText="Giving" />
    <GivingHighlight />
    <AccountInfo />
    <SupportedMinistries />
    <HowWeSeeGiving />
  </div>
);

export default Giving;
