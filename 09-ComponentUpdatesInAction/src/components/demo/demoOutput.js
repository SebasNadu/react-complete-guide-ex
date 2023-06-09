import React from "react";
import MyParagraph from "./myParagraph";

const DemoOutput = (props) => {
  console.log("demoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
