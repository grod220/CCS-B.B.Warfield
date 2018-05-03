import React from "react";
import Helmet from "react-helmet";

import Hero from "../images/404-winter.jpg";
import HeaderBlock from "../components/shared/headerBlock";
import SubheadHighlight from "../components/shared/subheadHighlight";

const NotFoundPage = () => (
  <div>
    <Helmet
      title="Calvary Stockholm :: 404 not found!"
      meta={[{ name: "description", content: "Sorry! Page not found." }]}
    />
    <HeaderBlock img={Hero} titleText="404 error" />
    <SubheadHighlight color="gray">
      Hmmm... Page not found. Now where could that be? 🤔
    </SubheadHighlight>
  </div>
);

export default NotFoundPage;
