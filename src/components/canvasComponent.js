import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import draw from '../animations/draw';

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  overflow: hidden;
  z-index: 0;
`;

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

const CanvasComponent = (pondData) => {
  const ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    let requestId;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      draw(context, canvas, pondData);
      context.beginPath();
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return <Canvas ref={ref} />;
};

export default CanvasComponent;
