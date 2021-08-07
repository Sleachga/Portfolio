import React from 'react';
import { myContext } from '../../provider';
import CanvasComponent from './canvasComponent';

const CanvasContainer = () => {
    return (
        <myContext.Consumer>
          {context => (
            <React.Fragment>
              <CanvasComponent data={context.pondData}/>
            </React.Fragment>
          )}
        </myContext.Consumer>
      )
}

export default CanvasContainer;