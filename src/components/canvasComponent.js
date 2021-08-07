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
    let i = 0;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        700 * Math.abs(Math.cos(i)),
        0,
        2 * Math.PI
      );
      context.fill();
      i += 0.05;
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
