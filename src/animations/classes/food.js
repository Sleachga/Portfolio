export class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = (Math.random() - 0.5) * 0.1;
    this.speedY = (Math.random() - 0.5) * 0.1;
    this.radius = 5;
    this.color = '#EEEE81';
    this.id = Math.random() * 10;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }

  update(width, height) {
    if (this.x > width - 10 || this.x < 10) {
      this.speedX *= -1;
    }

    if (this.y > height - 10 || this.y < 10) {
      this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;

    this.startAngle += this.rotateSpeed;
    this.endAngle = this.startAngle + Math.PI;
  }
}
