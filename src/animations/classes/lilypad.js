export class Lilypad {
  petalColors = [
    "#ff00fa",
    "#8c00ff",
    "#ce3b63",
    "#e00ba7",
    "#ff35e4",
    "#7c1531",
    "#7c1531",
  ];

  constructor(width, height) {
    this.x = Math.round(Math.random() * width);
    this.y = Math.round(Math.random() * height);
    this.dx = (Math.random() - 0.5) * 1;
    this.dy = (Math.random() - 0.5) * 1;
    this.startAngle = Math.random() * Math.PI * 2;
    this.endAngle = this.startAngle + Math.PI;
    this.rotateSpeed = Math.random() > 0.5 ? 0.005 : -0.005;
    this.petalLength = 12 + Math.random() * 4;
    this.radius = 20;
    this.petalColor =
      this.petalColors[
        Math.round(Math.random() * (this.petalColors.length - 1))
      ];
  }

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
    context.fillStyle = "#199615";
    context.fill();

    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle + 1.7 * (Math.PI / 2),
      this.endAngle + 1.7 * (Math.PI / 2),
      false
    );
    context.fillstyle = "white";
    context.fill();

    // lines on lilypads
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.moveTo(this.x, this.y);
      context.lineTo(
        this.x +
          (this.radius - 2) * Math.cos(this.startAngle + (Math.PI / 2.18) * i),
        this.y +
          (this.radius - 2) * Math.sin(this.startAngle + (Math.PI / 2.18) * i)
      );
      context.lineWidth = 2;
      // context.strokeStyle = "#023a03";
      context.strokeStyle = "#024219";
      context.stroke();
    }

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

    //the middle part of the flower
    context.beginPath();
    context.arc(this.x, this.y, this.radius / 4, 0, 2 * Math.PI, false);
    context.fillStyle = "#fffa00";
    context.fill();
  }

  update(width, height) {
    if (this.x > width - 10 || this.x < 10) {
      this.dx *= -1;
    }

    if (this.y > height - 10 || this.y < 10) {
      this.dy *= -1;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.startAngle += this.rotateSpeed;
    this.endAngle = this.startAngle + Math.PI;
  }
}
