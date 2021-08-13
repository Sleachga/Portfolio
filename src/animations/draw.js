const draw = (context, canvas, pondData) => {
  pondData.food.forEach(food => food.draw(context));
  pondData.fish.forEach(fish => fish.draw(context));
  pondData.pads.forEach(pad => pad.draw(context));
};

export default draw;