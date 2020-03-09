import React from "react";

import HeaderSection from "../Components/HeaderSection";

const HeadSection = props => {
  return (
    <>
      <HeaderSection
        heading={props.heading}
        subheading={props.subheading}
        Background={props.background}
      />
    </>
  );
};

export default HeadSection;
