export class Fish {
  constructor(width, height) {
    this.x = Math.round(Math.random() * width);
    this.y = Math.round(Math.random() * height);
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;

    this.rads = (deg) => (deg * Math.PI) / 180;

    this.headRotationAngle = Math.atan(this.speedY / this.speedX);
    this.headRotationAngleDegs = (this.headRotationAngle * 180) / Math.PI; // Debug

    this.headWidth = 20;
    this.headLength = 30;

    this.colors = [
      '#d7dde5',
      '#ea4504',
      '#d61515',
      '#ff9400',
      // 'black',
      'white',
    ];

    this.colorCombos = [
      { head: '#ff9400', body: 'white', fin: '#ff9400', tailFin: '#ff9400' },
      { head: '#d61515', body: 'white', fin: '#d61515', tailFin: '#d61515' },
      { head: 'black', body: 'white', fin: '#ff9400', tailFin: 'black' },
    ];

    this.colorCombo =
      this.colorCombos[
        Math.round(Math.random() * (this.colorCombos.length - 1))
      ];

    this.headColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.bodyColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.finColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];
    this.tailFinColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))];

    this.head = {};
    this.body = {};
    this.tail = {};
    this.fins = {};
  }

  /**
   * Returns the rotated coordinates of a point around a center point
   *
   * Thanks stackoverflow: https://math.stackexchange.com/questions/814950/how-can-i-rotate-a-coordinate-around-a-circle
   *
   * @param theta the angle to rotate in radians.
   * @param x the original location of x coord
   * @param y the original location of y coord
   * @param cx the cx coord of center point to rotate around
   * @param cy the y coord of center point to rotate around
   */
  getRotatedPoint(theta, x, y, cx, cy) {
    return {
      x: Math.cos(theta) * (x - cx) - Math.sin(theta) * (y - cy) + cx,
      y: Math.sin(theta) * (x - cx) + Math.cos(theta) * (y - cy) + cy,
    };
  }

  drawTail(context) {
    // Draw tail triangle
    const tailPoints = [];

    // Middle point
    tailPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 40,
        this.y,
        this.x,
        this.y
      )
    );

    // Top point
    tailPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 50,
        this.y - 7,
        this.x,
        this.y
      )
    );

    // Bottom point
    tailPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 50,
        this.y + 7,
        this.x,
        this.y
      )
    );

    context.beginPath();
    context.moveTo(tailPoints[0].x, tailPoints[0].y);
    context.lineTo(tailPoints[1].x, tailPoints[1].y);
    context.lineTo(tailPoints[2].x, tailPoints[2].y);
    context.lineTo(tailPoints[0].x, tailPoints[0].y);

    context.fillStyle = this.colorCombo.tailFin;
    context.fill();
  }

  drawLeftFin(context) {
    const leftFinPoints = [];
    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 11,
        this.y + 8,
        this.x,
        this.y
      )
    );

    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 25,
        this.y + 6,
        this.x,
        this.y
      )
    );

    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 25,
        this.y + 15,
        this.x,
        this.y
      )
    );

    context.beginPath();
    context.moveTo(leftFinPoints[0].x, leftFinPoints[0].y);
    context.lineTo(leftFinPoints[1].x, leftFinPoints[1].y);
    context.lineTo(leftFinPoints[2].x, leftFinPoints[2].y);
    context.lineTo(leftFinPoints[0].x, leftFinPoints[0].y);

    context.fillStyle = this.colorCombo.fin;
    context.fill();
  }

  drawRightFin(context) {
    const rightFinPoints = [];
    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 11,
        this.y - 8,
        this.x,
        this.y
      )
    );

    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 25,
        this.y - 6,
        this.x,
        this.y
      )
    );

    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 25,
        this.y - 15,
        this.x,
        this.y
      )
    );

    context.beginPath();
    context.moveTo(rightFinPoints[0].x, rightFinPoints[0].y);
    context.lineTo(rightFinPoints[1].x, rightFinPoints[1].y);
    context.lineTo(rightFinPoints[2].x, rightFinPoints[2].y);
    context.lineTo(rightFinPoints[0].x, rightFinPoints[0].y);

    context.fillStyle = this.colorCombo.fin;
    context.fill();
  }

  drawBody(context) {
    // Draw Body Triangle (initial, then add bezier curve)
    const bodyPoints = [];

    // Top Point
    bodyPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x,
        this.y - this.headWidth / 2,
        this.x,
        this.y
      )
    );

    // Quadratic curve point
    bodyPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 20,
        this.y - 10,
        this.x,
        this.y
      )
    );

    // End of tail
    bodyPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 50,
        this.y,
        this.x,
        this.y
      )
    );

    // Quadratic curve point 2
    bodyPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 20,
        this.y + 10,
        this.x,
        this.y
      )
    );

    // Bottom point
    bodyPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x,
        this.y + this.headWidth / 2,
        this.x,
        this.y
      )
    );

    context.beginPath();
    context.moveTo(bodyPoints[0].x, bodyPoints[0].y);
    context.quadraticCurveTo(
      bodyPoints[1].x,
      bodyPoints[1].y,
      bodyPoints[2].x,
      bodyPoints[2].y
    );
    context.quadraticCurveTo(
      bodyPoints[3].x,
      bodyPoints[3].y,
      bodyPoints[4].x,
      bodyPoints[4].y
    );
    context.lineTo(bodyPoints[0].x, bodyPoints[0].y);
    context.fillStyle = this.colorCombo.body;
    context.fill();
  }

  drawHead(context) {
    // Draw Head Oval
    context.beginPath();
    context.ellipse(
      this.x,
      this.y,
      this.headLength / 2,
      this.headWidth / 2,
      this.headRotationAngle,
      0,
      360
    );
    context.fillStyle = this.colorCombo.head;
    context.fill();
  }

  draw(context) {
    this.drawTail(context);
    this.drawLeftFin(context);
    this.drawRightFin(context);
    this.drawBody(context);
    this.drawHead(context);
  }

  update() {
    () => {};
  }
}
