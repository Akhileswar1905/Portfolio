import React from "react";
import { MotionDiv } from "../motionComponents/motionComponents";

const Line = () => {
  return (
    <MotionDiv
      initial={{
        width: 0,
      }}
      whileInView={{
        width: "100%",
        transition: {
          duration: 1,
        },
      }}
      viewport={{
        once: true,
      }}
      style={{
        height: "1px",
        backgroundColor: "#fff",
        marginTop: "0.5rem",
      }}
    ></MotionDiv>
  );
};

export default Line;
