const draw = (context, canvas, pondData) => {
  pondData.fish.forEach(fish => fish.draw(context));
  pondData.pads.forEach(pad => pad.draw(context));
};

export default draw;