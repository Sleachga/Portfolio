export class Fish {
  constructor(width, height) {
    this.x = Math.round(Math.random() * width);
    this.y = Math.round(Math.random() * height);
    this.dx = (Math.random() - 0.5) * 0.5;
    this.dy = (Math.random() - 0.5) * 0.5;

    this.colors = [
      '#d7dde5',
      '#ea4504',
      '#d8d215',
      '#d61515',
      '#ff9400',
      'black',
      '#d8d8d8',
      'white',
    ];

    this.headColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.bodyColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.tailColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.neckColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.finColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.tailFinColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];

    this.radius = 18;
    this.time = Math.random() * 5;
    this.tipTime = Math.random() * 5;
    this.angles = [];
    this.foodPotential = 0;

    this.speed = (this.dx * this.dx) + (this.dy + this.dy);
    this.fishLength = Math.round(40 / Math.sqrt(this.speed));
  }

  draw(context) {
    
  }
}
