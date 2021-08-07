import React, { useState } from "react";

export const myContext = React.createContext();

const Provider = (props) => {
  const [pondData, setPondData] = useState({
      fish: [],
      food: [],
      pads: []
  });

  return (
    <myContext.Provider
      value={{
        pondData,
        setPondData: (data) => setPondData(data),
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

let component = ({ element }) => <Provider>{element}</Provider>;
export default component;