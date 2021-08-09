import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import draw from '../animations/draw';
import generatePondData from '../animations/generatePondData';
import updatePondData from '../animations/updatePondData';

import PropTypes from 'prop-types';

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  overflow: hidden;
  z-index: 0;
`;

const resize = (canvas) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
  }
};

const CanvasComponent = ({ pondData, setPondData }) => {
  const ref = useRef();

  useEffect(() => {
    if (pondData.fish.length <= 1 && pondData.pads.length <= 1) {
      generatePondData(setPondData);
    }

    console.log(pondData);

    let canvas = ref.current;
    let context = canvas.getContext('2d');

    let requestId;

    const render = () => {
      resize(canvas);
      context.clearRect(0, 0, canvas.width, canvas.height);
      draw(context, canvas, pondData);
      updatePondData(pondData, setPondData);
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return <Canvas ref={ref} />;
};

CanvasComponent.propTypes = {
  pondData: PropTypes.object,
  setPondData: PropTypes.func
};

export default CanvasComponent;
