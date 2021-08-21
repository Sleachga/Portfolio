import React from 'react';
import { PondContext } from '../../provider';
import CanvasComponent from './canvasComponent';

const CanvasContainer = () => {
  return (
    <PondContext.Consumer>
      {(context) => (
        <React.Fragment>
          <CanvasComponent
            pondData={
              context
                ? context.pondData
                : {
                  fish: [],
                  food: [],
                  pads: [],
                }
            }
            setPondData={context ? context.setPondData : () => {}}
          />
        </React.Fragment>
      )}
    </PondContext.Consumer>
  );
};

export default CanvasContainer;
