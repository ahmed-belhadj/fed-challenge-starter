import React from "react";
import { useSpring, animated } from "react-spring";

export default function NumberAnimation(props) {
  const spring = useSpring({
    config: { duration: 1000 },
    from: { val: 0 },
    to: { val: props.number },
  });
  return (
    <animated.span>
      {spring.val.interpolate((val) => Math.floor(val))}
    </animated.span>
  );
}
