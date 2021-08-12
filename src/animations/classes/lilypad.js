export class Lilypad {
  constructor(width, height) {
    this.x = Math.round(Math.random() * width);
    this.y = Math.round(Math.random() * height);
    this.speedX = (Math.random() - 0.5) * 0.1;
    this.speedY = (Math.random() - 0.5) * 0.1;
    this.startAngle = Math.random() * Math.PI * 2;
    this.endAngle = this.startAngle + Math.PI;
    this.rotateSpeed = (Math.random() - 0.5) * 0.01;
    this.hasFlower = Math.random() < 0.2;
    this.petalLength = 12 + Math.random() * 4;
    this.radius = 20;
    this.petalColors = ['#E0BCDD', '#E17081', '#FF9D00', '#E53730', '#A25CB7'];
    this.petalColor =
      this.petalColors[
        Math.round(Math.random() * (this.petalColors.length - 1))
      ];
  }
  
  // TODO: Make lilypads bounce off of each other and dont START next to each other

  drawFlower(context) {
    // petals on lilypads
    for (let i = 0; i < 4; i++) {
      context.beginPath();
      context.ellipse(
        this.x,
        this.y,
        4,
        this.petalLength,
        this.startAngle + ((2 * Math.PI) / 4) * i,
        0,
        Math.PI,
        true
      );
      context.fillStyle = this.petalColor;
      context.fill();
      // context.strokeStyle = '#4D5B1F';
      // context.stroke();
    }

    for (let i = 0; i < 4; i++) {
      context.beginPath();
      context.ellipse(
        this.x,
        this.y,
        3,
        this.petalLength * 0.75,
        this.startAngle + Math.PI / 4 + ((2 * Math.PI) / 4) * i,
        0,
        Math.PI,
        true
      );
      context.fillStyle = this.petalColor;
      context.fill();
    }

    // the middle part of the flower
    context.beginPath();
    context.arc(this.x, this.y, this.radius / 4, 0, 2 * Math.PI, false);
    context.fillStyle = '#F9DF4B';
    context.fill();
  }

  // TODO: Make SOME have a flower but not all
  // TODO: Add shadow behind lilypad over fish for depth
  draw(context) {
    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      false
    );
    context.fillStyle = '#199615';
    context.fill();
    
    // context.strokeStyle = '#4D5B1F';
    // context.stroke();

    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle + 1.7 * (Math.PI / 2),
      this.endAngle + 1.7 * (Math.PI / 2),
      false
    );

    context.fillstyle = '#199615';
    context.fill();
    // context.strokeStyle = '#4D5B1F';
    // context.stroke();

    // lines on lilypads

    // [0, 4].forEach((line) => {
    //   context.beginPath();
    //   context.moveTo(this.x, this.y);
    //   context.lineTo(
    //     this.x +
    //       this.radius * Math.cos(this.startAngle + (Math.PI / 2.18) * line),
    //     this.y +
    //       this.radius * Math.sin(this.startAngle + (Math.PI / 2.18) * line)
    //   );
    //   context.lineWidth = 1;
    //   context.strokeStyle = '#4D5B1F';
    //   context.stroke();
    // });

    if (this.hasFlower) this.drawFlower(context);
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
