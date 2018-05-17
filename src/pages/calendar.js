import React from "react";
import Helmet from "react-helmet";

import Hero from "../images/calendar-group-pic.jpg";
import HeaderBlock from "../components/shared/headerBlock";
import CalHighlight from "../components/calendar/calHighlight";
import CalendarEvents from "../components/calendar/calendarEvents";
import WhiteContentBlock from "../components/shared/whiteContentBlock";
import StayInTouchAlt from "../components/calendar/stayInTouchAlt";

const Calendar = ({data: {allGoogleSheetCalendarRow : {edges}}}) => (
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
    <HeaderBlock img={Hero} titleText="Upcoming Events" />
    <CalHighlight />
    <CalendarEvents events={edges.map(edge => edge.node)} />
    <StayInTouchAlt />
  </div>
);

export default Calendar;

export const query = graphql`
  query CalendarQuery {
    allGoogleSheetCalendarRow {
      edges {
        node {
          name
          description
          location
          date
          time
        }
      }
    }
  }
`;
