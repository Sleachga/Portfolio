import { Lilypad } from './classes/lilypad';
import { Fish } from './classes/fish';

const generatePondData = (setPondData) => {
  const pondData = {
    fish: [],
    pads: [],
    food: [],
  };
  
  const width = window.innerWidth;
  const height = window.innerHeight;

  let numObjects = window.innerWidth * window.innerHeight / 100000;
  if (numObjects > 10) numObjects = 10;

  for (let i = 0; i < numObjects / 2; i++) {
    pondData.pads.push(new Lilypad(width, height));
  }

  for (let i = 0; i < numObjects; i++) {
    pondData.fish.push(new Fish(width, height));
  }

  setPondData(pondData);
};

export default generatePondData;