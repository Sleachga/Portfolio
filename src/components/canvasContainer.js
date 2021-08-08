import React from 'react';
import { myContext } from '../../provider';
import CanvasComponent from './canvasComponent';

const CanvasContainer = () => {
    return (
        <myContext.Consumer>
          {context => (
            <React.Fragment>
              <CanvasComponent pondData={context.pondData} setPondData={context.setPondData}/>
            </React.Fragment>
          )}
        </myContext.Consumer>
      )
}

export default CanvasContainer;