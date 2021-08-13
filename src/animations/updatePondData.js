const updatePondData = (pondData) => {

  const { fish, food, pads } = pondData;
  fish.forEach(f => f.update(window.innerWidth, window.innerHeight));
  food.forEach(f => f.update(window.innerWidth, window.innerHeight));
  pads.forEach(p => p.update(window.innerWidth, window.innerHeight));
};

export default updatePondData;
