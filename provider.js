import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const myContext = React.createContext();

const Provider = (props) => {
  const [pondData, setPondData] = useState({
    fish: [],
    food: [],
    pads: [],
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

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

let component = ({ element }) => <Provider>{element}</Provider>;
export default component;
