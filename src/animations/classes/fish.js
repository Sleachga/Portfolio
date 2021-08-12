export class Fish {
  constructor(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;

    this.x = Math.round(Math.random() * width);
    this.y = Math.round(Math.random() * height);
    this.speedX = (Math.random() / 2) * 0.5;
    this.speedY = (Math.random() / 2) * 0.5;

    this.momentumX = 0;
    this.momentumY = 0;

    this.speed = Math.sqrt(this.speedX ** 2 + this.speedY ** 2);

    this.animationFrame = 0;

    this.turning = false;
    this.turnAngle = 0;
    this.turnClockwise = false;
    this.headOffset = 0;
    this.tailOffset = 0;

    this.headRotationAngle = Math.atan(this.speedY / this.speedX);
    this.headRotationAngleDegs = (this.headRotationAngle * 180) / Math.PI; // For debug purposes

    this.headWidth = 20;
    this.headLength = 30;

    // TODO: Add color spots
    // TODO Add stripes
    // TODO code 50% chance for them to just chill, swim, and not move for like 1-2 seconds
    this.colorCombos = [
      { head: '#ff9400', body: '#ff9400', fin: '#ffffff', tailFin: '#ffffff' },
      { head: '#d61515', body: '#d61515', fin: '#ffffff', tailFin: '#ffffff' },
      { head: '#000000', body: '#000000', fin: '#ff9400', tailFin: '#ff9400' },
      { head: '#d61515', body: '#d61515', fin: '#ff9400', tailFin: '#ff9400' },
      { head: '#d61515', body: '#d61515', fin: '#000000', tailFin: '#000000' },
      { head: '#ffffff', body: '#ffffff', fin: '#ff9400', tailFin: '#ff9400' },
      { head: '#ffffff', body: '#ffffff', fin: '#d61515', tailFin: '#d61515' },
      { head: '#000000', body: '#000000', fin: '#ffffff', tailFin: '#ffffff' },
      { head: '#000000', body: '#000000', fin: '#d61515', tailFin: '#d61515' },
      { head: '#ffffff', body: '#ffffff', fin: '#000000', tailFin: '#000000' },
    ];

    this.colorCombo =
      this.colorCombos[
        Math.round(Math.random() * (this.colorCombos.length - 1))
      ];

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

  /**
   * Draws the tail of the fish
   * @param {CanvasRenderingContext2D} context
   */
  drawTail(context) {
    // Draw tail triangle
    const tailPoints = [];

    const tailX = this.x + 50;
    const tailY = this.y + this.tailOffset;

    // point to rotate more around is
    // this.x + 50
    // this.y + this.tailOffset

    // const { x: tailX, y: tailY } = this.getRotatedPoint(
    //   this.headRotationAngle,
    //   this.x + 40,
    //   this.y + this.tailOffset,
    //   this.x + 40,
    //   this.y + this.tailOffset
    // );


    // Animation Rotation Point
    let arp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 50,
      this.y + this.tailOffset,
      this.x,
      this.y
    );

    let rwoa; // Rotation without animation

    // Middle bodypoint
    rwoa = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 40,
      this.y + this.tailOffset,
      this.x,
      this.y
    );

    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, rwoa.x, rwoa.y, arp.x, arp.y)
    );

    // Top quadratic curve point
    rwoa = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 45,
      this.y - 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, rwoa.x, rwoa.y, arp.x, arp.y)
    );

    // Top point
    rwoa = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 60,
      this.y - 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, rwoa.x, rwoa.y, arp.x, arp.y)
    );

    // Middle point
    rwoa = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 50,
      this.y + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, rwoa.x, rwoa.y, arp.x, arp.y)
    );

    // Bottom point
    rwoa = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 60,
      this.y + 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, rwoa.x, rwoa.y, arp.x, arp.y)
    );

    // Bottom quadratic curve point
    rwoa = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 45,
      this.y + 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, rwoa.x, rwoa.y, arp.x, arp.y)
    );

    context.beginPath();
    context.moveTo(tailPoints[0].x, tailPoints[0].y);
    context.quadraticCurveTo(
      tailPoints[1].x,
      tailPoints[1].y,
      tailPoints[2].x,
      tailPoints[2].y
    );
    context.lineTo(tailPoints[3].x, tailPoints[3].y);
    context.lineTo(tailPoints[4].x, tailPoints[4].y);
    context.quadraticCurveTo(
      tailPoints[5].x,
      tailPoints[5].y,
      tailPoints[0].x,
      tailPoints[0].y
    );

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

    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 18,
        this.y + 17,
        this.x,
        this.y
      )
    );

    context.beginPath();
    context.moveTo(leftFinPoints[0].x, leftFinPoints[0].y);
    context.lineTo(leftFinPoints[1].x, leftFinPoints[1].y);
    context.lineTo(leftFinPoints[2].x, leftFinPoints[2].y);
    context.quadraticCurveTo(
      leftFinPoints[3].x,
      leftFinPoints[3].y,
      leftFinPoints[0].x,
      leftFinPoints[0].y
    );

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

    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle,
        this.x + 18,
        this.y - 17,
        this.x,
        this.y
      )
    );

    context.beginPath();
    context.moveTo(rightFinPoints[0].x, rightFinPoints[0].y);
    context.lineTo(rightFinPoints[1].x, rightFinPoints[1].y);
    context.lineTo(rightFinPoints[2].x, rightFinPoints[2].y);
    context.quadraticCurveTo(
      rightFinPoints[3].x,
      rightFinPoints[3].y,
      rightFinPoints[0].x,
      rightFinPoints[0].y
    );

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
        this.y + this.tailOffset,
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

  doTurningLogic() {
    // Deal with speed being exactly 0;
    if (this.speedX === 0) this.speedX = 0.01;
    if (this.speedY === 0) this.speedY = 0.01;

    // Deal with turning ties (hits corner at same time)
    if (this.x < 50 && this.y < 50) this.x = 50;
    if (this.x > this.canvasWidth - 50 && this.y > this.canvasHeight - 50)
      this.x = this.canvasWidth - 50;

    // If hit left or right side
    if (this.x < 50 || this.x > this.canvasWidth - 50) {
      this.turning = true;

      // If facing bottom-right turn 90 degrees clockwise
      if (0 < this.headRotationAngle && this.headRotationAngle < Math.PI / 2) {
        this.turning = true;
        this.turnAngle = this.headRotationAngle + Math.PI / 2;
        this.turnClockwise = true;
      }
      // If facing bottom-left turn 90 degrees counter-clockwise
      else if (
        Math.PI / 2 < this.headRotationAngle &&
        this.headRotationAngle < Math.PI
      ) {
        this.turning = true;
        this.turnAngle = this.headRotationAngle + Math.PI / 2;
        this.turnClockwise = false;
      }
      // If facing top-left turn 90 degrees clockwise
      if (
        Math.PI < this.headRotationAngle &&
        this.headRotationAngle < (3 * Math.PI) / 2
      ) {
        this.turning = true;
        this.turnAngle = this.headRotationAngle + Math.PI / 2;
        this.turnClockwise = true;
      }
      // If facing top-right turn 90 degrees counter clockwise
      else {
        this.turning = true;
        this.turnAngle = this.headRotationAngle - Math.PI / 2;
        this.turnClockwise = false;
      }
    }

    // If hit top or bottom side
    if (this.x < 50 || this.x > this.canvasWidth - 50) {
      this.turning = true;

      // If facing bottom-right turn 90 degrees clockwise
      if (0 < this.headRotationAngle && this.headRotationAngle < Math.PI / 2) {
        this.turning = true;
        this.turnAngle = this.headRotationAngle + Math.PI / 2;
        this.turnClockwise = true;
      }
      // If facing bottom-left turn 90 degrees counter-clockwise
      else if (
        Math.PI / 2 < this.headRotationAngle &&
        this.headRotationAngle < Math.PI
      ) {
        this.turning = true;
        this.turnAngle = this.headRotationAngle + Math.PI / 2;
        this.turnClockwise = false;
      }
      // If facing top-left turn 90 degrees clockwise
      if (
        Math.PI < this.headRotationAngle &&
        this.headRotationAngle < (3 * Math.PI) / 2
      ) {
        this.turning = true;
        this.turnAngle = this.headRotationAngle + Math.PI / 2;
        this.turnClockwise = true;
      }
      // If facing top-right turn 90 degrees counter clockwise
      else {
        this.turning = true;
        this.turnAngle = this.headRotationAngle - Math.PI / 2;
        this.turnClockwise = false;
      }
    }
  }

  // TODO: make the speed of animation change based off
  // movement speed (when it can accelerate and decelerate to get food)
  calculateAnimationOffset() {
    return 0.7 * Math.cos((Math.PI * this.animationFrame) / 40);
  }

  doMovementLogic() {
    // Yes I know minus but remember its a canvas so + is backwards
    this.x -= this.speedX;
    this.y -= this.speedY;

    // Animate the tail bay bee
    this.tailOffset += this.calculateAnimationOffset();
    this.animationFrame++;
  }

  update() {
    this.doMovementLogic();
  }
}
