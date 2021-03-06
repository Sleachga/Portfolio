import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import draw from '../animations/draw';
import generatePondData from '../animations/generatePondData';
import updatePondData from '../animations/updatePondData';

import { Food } from '../animations/classes/food';

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
    window.addEventListener('click', (e) => {
      if (e.clientX < 51 || e.clientX > window.innerWidth - 51) return;
      if (e.clientY < 51 || e.clientY > window.innerHeight - 51) return;

      if (pondData.fish.length > 0) {
        e.stopImmediatePropagation();
        pondData.food.push(new Food(e.clientX, e.clientY));
        setPondData(pondData);
      }
    });

    if (pondData.fish.length <= 1 && pondData.pads.length <= 1) {
      generatePondData(setPondData);
    }

    let canvas = ref.current;
    let context = canvas.getContext('2d');

    let requestId;

    const render = () => {
      resize(canvas);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgb(131, 205, 231)';
      context.fillRect(0, 0, canvas.width, canvas.height);
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
  setPondData: PropTypes.func,
};

export default CanvasComponent;
