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
  
  for (let i = 0; i < 10; i++) {
    pondData.pads.push(new Lilypad(width, height));
  }

  for (let i = 0; i < 1; i++) {
    pondData.fish.push(new Fish(width, height));
  }

  setPondData(pondData);
};

export default generatePondData;