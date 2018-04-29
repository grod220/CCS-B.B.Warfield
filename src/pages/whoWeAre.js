import React from "react";
import Helmet from "react-helmet";

import Hero from "../images/who-we-are-hat.jpg"
import HeaderBlock from "../components/shared/headerBlock"
import TheBeginning from "../components/whoWeAre/theBeginning"
import OurMission from "../components/whoWeAre/ourMission"
import OurPastor from "../components/whoWeAre/ourPastor"
import CoreValues from "../components/shared/coreValues";
import ChurchFamilyPic from "../components/whoWeAre/churchFamilyPic"
import BiblePromo from "../components/whoWeAre/biblePromo"

const WhoWeAre = () => (
  <div>
    <Helmet
      title="Calvary Stockholm :: Who We Are"
      meta={[
        {
          name: "description",
          content: "Hear our story, and learn about the mission God's given us for Stockholm."
        }
      ]}
    />
    <HeaderBlock img={Hero} titleText="" offsetMin={-40} offsetMax={0} />
    <TheBeginning />
    <OurMission />
    <OurPastor />
    <CoreValues /> 
    <ChurchFamilyPic />
    <BiblePromo />
  </div>
);

export default WhoWeAre;
