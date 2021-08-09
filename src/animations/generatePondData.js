import { Lilypad } from './classes/lilypad';

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

  setPondData(pondData);
};

export default generatePondData;