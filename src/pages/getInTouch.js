import React from "react";
import Helmet from "react-helmet";

import Hero from "../images/get-in-touch-capp.jpg";
import HeaderBlock from "../components/shared/headerBlock";
import GITHighlight from "../components/getInTouch/GITHighlight";
import QuickHello from "../components/getInTouch/quickHello";
import ServiceTimesRedirect from "../components/getInTouch/serviceTimesRedirect";

const GetInTouch = () => (
  <div>
    <Helmet
      title="Calvary Stockholm :: Get in touch"
      meta={[
        {
          name: "description",
          content: "You're welcome! Get in touch with us anytime you need."
        }
      ]}
    />
    <HeaderBlock img={Hero} titleText="Get in touch" />
    <GITHighlight />
    <QuickHello />
    <ServiceTimesRedirect />
  </div>
);

export default GetInTouch;
