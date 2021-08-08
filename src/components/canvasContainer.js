import React from "react";
import { myContext } from "../../provider";
import CanvasComponent from "./canvasComponent";

const CanvasContainer = () => {
  return (
    <myContext.Consumer>
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
    </myContext.Consumer>
  );
};

export default CanvasContainer;
