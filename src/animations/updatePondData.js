const updatePondData = (pondData, setPondData) => {

  const { fish, food, pads } = pondData;
  fish.forEach(f => f.update(pondData, setPondData));
  food.forEach(f => f.update(window.innerWidth, window.innerHeight));
  pads.forEach(p => p.update(window.innerWidth, window.innerHeight));
};

export default updatePondData;
