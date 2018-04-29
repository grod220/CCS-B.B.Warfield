import React from "react";
import Helmet from "react-helmet";

import Hero from "../images/calendar-group-pic.jpg"
import HeaderBlock from "../components/shared/headerBlock"
import CalHighlight from "../components/calendar/calHighlight" 
import CalWidget from "../components/calendar/calWidget" 
import WhiteContentBlock from "../components/shared/whiteContentBlock"
import StayInTouch from "../components/shared/stayInTouch"


const Calendar = () => (
  <div>
    <Helmet
      title="Calvary Stockholm :: Upcoming Events"
      meta={[
        {
          name: "description",
          content: ""
        }
      ]}
    />
    <HeaderBlock img={Hero} titleText="Upcoming Events" offsetMin={-40} offsetMax={0} />
    <CalHighlight />
    <CalWidget />
    <WhiteContentBlock title={"Stay in touch"}>
      <StayInTouch />
    </WhiteContentBlock>
  </div>
);

export default Calendar;
