import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const PondContext = React.createContext();

const Provider = (props) => {
  const [pondData, setPondData] = useState({
    fish: [],
    food: [],
    pads: [],
  });

  return (
    <PondContext.Provider
      value={{
        pondData,
        setPondData: (data) => setPondData(data),
      }}
    >
      {props.children}
    </PondContext.Provider>
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
