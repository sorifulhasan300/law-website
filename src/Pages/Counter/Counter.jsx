import React, { useEffect, useRef, useState } from "react";

const Counter = ({ initialValue = 0, finalVale, duration = 2000 }) => {
  const [count, setCount] = useState(initialValue);
  const frameRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrameId;
    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(
        Math.floor(progress * (finalVale - initialValue) + initialValue)
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
      if (finalVale !== undefined) {
        frameRef.current = requestAnimationFrame(animateCounter);
      }
    };
  }, [initialValue, finalVale, duration]);
  return <div>{count}</div>;
};

export default Counter;
