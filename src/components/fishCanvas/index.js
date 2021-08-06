import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  overflow: hidden;
  z-index: 0;
`;

function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);

    draw(canvas);
    return true;
  }

  return false;
}

const draw = (canvas) => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.arc(50, 50, 50, 0, 2 * Math.PI);
  context.fill();
};

const FishCanvas = () => {
  const [fish, setfish] = useState([]);
  const [foods, setFoods] = useState([]);
  const [pads, setpads] = useState([]);

  const ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    resizeCanvas(canvas);

    window.addEventListener("resize", () => resizeCanvas(canvas));

    draw(canvas);
  });

  return <Canvas ref={ref} />;
};

export default FishCanvas;
