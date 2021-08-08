const updatePondData = (pondData, setPondData) => {
  const { fish, food, pads } = pondData;

  pads.forEach(pad => pad.update(window.innerWidth, window.innerHeight));
};

export default updatePondData;
