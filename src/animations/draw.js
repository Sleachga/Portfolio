const draw = (context, canvas, pondData) => {
  pondData.pads.forEach(pad => pad.draw(context))
};

export default draw;