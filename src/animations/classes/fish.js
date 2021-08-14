export class Fish {
  constructor(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;

    this.randomFromInterval = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    this.x = this.randomFromInterval(50, width - 50);
    this.y = this.randomFromInterval(50, height - 50);

    // this.x = width / 2;
    // this.y = height / 2;

    this.speed = 0.5 + Math.random() * 2;
    this.headRotationAngle = Math.random() * 2 * Math.PI;
    this.rotateClockwise = true;

    // this.headRotationAngleDegs = (this.headRotationAngle * 180) / Math.PI; // For debug purposes
    // this.headRotationAngle = (7 * Math.PI) / 4;

    this.speedX = this.speed * Math.cos(this.headRotationAngle);
    this.speedY = this.speed * Math.sin(this.headRotationAngle);

    this.momentumX = 0;
    this.momentumY = 0;

    this.chasingFood = false;

    this.animationFrame = Math.round(Math.random() * 100);

    this.turning = false;
    this.turnAngle = 0;
    this.turnClockwise = false;
    this.headOffset = 0;
    this.tailOffset = 0;
    this.finOffset = 0;

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

    this.doMovementLogic = () => {
      this.doTurningLogic();

      if (!this.turning) {
        // Yes I know minus but remember its a canvas so + is backwards
        this.x -= this.speedX;
        this.y -= this.speedY;

        this.tailOffset = this.calculateAnimationOffset(40, 7, false);
        this.finOffset = this.calculateAnimationOffset(20, 3, true);
        this.animationFrame++;
      }
    };

    this.doFoodLogicV2 = (pondData, setPondData) => {
      let { food } = pondData;

      // Find closest food
      const foodToChaseArr = food
        .map((f) => {
          const xDistance = this.x - f.x;
          const yDistance = this.y - f.y;
          return {
            ...f,
            xDistance,
            yDistance,
            distance: Math.sqrt(xDistance * xDistance + yDistance * yDistance),
          };
        })
        .sort((a, b) => a.distance - b.distance);

      let foodToChase;

      if (foodToChaseArr.length < 1) return;
      else foodToChase = foodToChaseArr[0];

      if (foodToChase.distance > 200) return;
      this.newFood = this.foodToChaseID !== foodToChase.id;      

      if (this.newFood) {
        this.foodToChaseID = foodToChase.id;
      } else {
        // Turn to that angle of that food
        if (this.turning) {
          let turnAmountPerFrame = (12 * Math.PI) / 180;
          if (this.turnAngle > this.headRotationAngle) {
            if (this.turnAngle - this.headRotationAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.turnAngle - this.headRotationAngle;
            this.headRotationAngle += turnAmountPerFrame;
          } else if (this.headRotationAngle > this.turnAngle) {
            if (this.headRotationAngle - this.turnAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.headRotationAngle - this.turnAngle;
            this.headRotationAngle -= turnAmountPerFrame;
          } else {
            // They are equal
            this.turning = false;
            this.turnAngle = 0;
            this.speedX = this.speed * Math.cos(this.headRotationAngle);
            this.speedY = this.speed * Math.sin(this.headRotationAngle);
          }
        } else {
          // We have not started turning yet
          if (this.turnAngle !== this.headRotationAngle) {
            this.turnAngle = Math.atan2(
              foodToChase.yDistance,
              foodToChase.xDistance
            );

            if (this.turnAngle < 0) {
              this.turnAngle += 2 * Math.PI;
            }

            this.chasingFood = true;
            this.turning = true;
          } else {
            // We are done turning

            debugger;

            if (
              Math.sqrt(
                foodToChase.xDistance * foodToChase.xDistance +
                  foodToChase.yDistance * foodToChase.yDistance
              ) < 5
            ) {
              const index = food.findIndex((f) => f.id === this.foodToChaseID);
              food.splice(index, 1);
              setPondData({ ...pondData, food });
              this.chasingFood = false;
            }

            this.x -= this.speedX;
            this.y -= this.speedY;

            this.tailOffset = this.calculateAnimationOffset(40, 7, false);
            this.finOffset = this.calculateAnimationOffset(20, 3, true);
            this.animationFrame++;
          }
        }
      }

      // Calculate angle to that food

      // Move towards that food

      // Eat that food if close enough
    };

    // TODO: Redo food logic to constantly move towards closest food
    this.doFoodLogic = (pondData, setPondData) => {
      let { food } = pondData;
      if (this.chasingFood && this.turning) {
        let turnAmountPerFrame = (12 * Math.PI) / 180;
        if (this.turnAngle > this.headRotationAngle) {
          if (this.turnAngle - this.headRotationAngle < turnAmountPerFrame)
            turnAmountPerFrame = this.turnAngle - this.headRotationAngle;
          this.headRotationAngle += turnAmountPerFrame;
        } else if (this.headRotationAngle > this.turnAngle) {
          if (this.headRotationAngle - this.turnAngle < turnAmountPerFrame)
            turnAmountPerFrame = this.headRotationAngle - this.turnAngle;
          this.headRotationAngle -= turnAmountPerFrame;
        } else {
          // They are equal
          this.turning = false;
          this.speedX = this.speed * Math.cos(this.headRotationAngle);
          this.speedY = this.speed * Math.sin(this.headRotationAngle);
        }
      } else if (this.chasingFood) {
        const foodChasing = food.find((f) => f.id === this.foodToChaseID);
        if (!foodChasing) {
          this.chasingFood = false;
        } else {
          const xDistance = this.x - foodChasing.x;
          const yDistance = this.y - foodChasing.y;

          if (Math.sqrt(xDistance * xDistance + yDistance * yDistance) < 5) {
            const index = food.findIndex((f) => f.id === this.foodToChaseID);
            food.splice(index, 1);
            setPondData({ ...pondData, food });
          }

          this.x -= this.speedX;
          this.y -= this.speedY;

          this.tailOffset = this.calculateAnimationOffset(40, 7, false);
          this.finOffset = this.calculateAnimationOffset(20, 3, true);
          this.animationFrame++;
        }
      } else {
        // Find closest
        const foodDistances = food
          .map((f, i) => {
            const xDistance = this.x - f.x;
            const yDistance = this.y - f.y;
            return {
              distance: Math.sqrt(
                xDistance * xDistance + yDistance * yDistance
              ),
              i,
            };
          })
          .sort();

        if (foodDistances.length > 0) {
          const f = food[foodDistances[0].i];

          const xDistance = this.x - f.x;
          const yDistance = this.y - f.y;
          if (Math.sqrt(xDistance * xDistance + yDistance * yDistance) < 200) {
            this.foodToChaseID = f.id;

            this.turnAngle = Math.atan2(yDistance, xDistance);

            if (this.turnAngle < 0) {
              this.turnAngle += 2 * Math.PI;
            }

            this.chasingFood = true;
            this.turning = true;
          }
        }
      }
    };

    this.doTurningLogic = () => {
      const left = this.x <= 50;
      const right = this.x >= this.canvasWidth - 50;
      const up = this.y <= 50;
      const down = this.y >= this.canvasHeight - 50;
  
      const movingLeft = this.speedX > 0;
      const movingRight = this.speedX <= 0;
      const movingUp = this.speedY > 0;
      const movingDown = this.speedY <= 0;
  
      // Account for headRotationAngle being larger than 360deg
      if (this.headRotationAngle > 2 * Math.PI)
        this.headRotationAngle = this.headRotationAngle % (2 * Math.PI);
  
      // Figure out which wall is hit
      if ((left || right) && !this.turning) {
        this.turning = true;
        this.speedX = -this.speedX;
        this.turnAngle = Math.atan2(this.speedY, this.speedX);
      } else if ((up || down) && !this.turning) {
        this.turning = true;
        this.speedY = -this.speedY;
        this.turnAngle = Math.atan2(this.speedY, this.speedX);
      } else if (this.turning) {
        let turnAmountPerFrame = (12 * Math.PI) / 180;
  
        if (this.headRotationAngle === this.turnAngle) {
          this.turning = false;
  
          // Move slightly away from edge at the end to avoid endless loops
          if (this.x <= 50) this.x = 50.001;
          if (this.y <= 50) this.y = 50.001;
          if (this.x >= this.canvasWidth - 50) this.x = this.canvasWidth - 50.001;
          if (this.y >= this.canvasHeight - 50)
            this.y = this.canvasHeight - 50.001;
        } else {
          if (left && movingUp) {
            if (this.turnAngle - this.headRotationAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.turnAngle - this.headRotationAngle;
            this.headRotationAngle += turnAmountPerFrame;
          } else if (left && movingDown) {
            if (this.turnAngle < 0) this.turnAngle = this.turnAngle + 2 * Math.PI;
            if (this.headRotationAngle < 0)
              this.headRotationAngle = this.headRotationAngle + 2 * Math.PI;
            if (this.headRotationAngle - this.turnAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.headRotationAngle - this.turnAngle;
            this.headRotationAngle -= turnAmountPerFrame;
          } else if (up && movingLeft) {
            if (this.headRotationAngle - this.turnAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.headRotationAngle - this.turnAngle;
            this.headRotationAngle -= turnAmountPerFrame;
          } else if (up && movingRight) {
            if (this.turnAngle < 0) this.turnAngle = this.turnAngle + 2 * Math.PI;
            if (this.turnAngle - this.headRotationAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.turnAngle - this.headRotationAngle;
            this.headRotationAngle += turnAmountPerFrame;
          } else if (right && movingUp) {
            if (this.headRotationAngle - this.turnAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.headRotationAngle - this.turnAngle;
            this.headRotationAngle -= turnAmountPerFrame;
          } else if (right && movingDown) {
            if (this.turnAngle < 0) this.turnAngle = this.turnAngle + 2 * Math.PI;
            if (this.turnAngle - this.headRotationAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.turnAngle - this.headRotationAngle;
            this.headRotationAngle += turnAmountPerFrame;
          } else if (down && movingRight) {
            if (this.headRotationAngle - this.turnAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.headRotationAngle - this.turnAngle;
            this.headRotationAngle -= turnAmountPerFrame;
          } else {
            // down and moving left
            if (this.turnAngle < 2 * Math.PI) this.turnAngle += 2 * Math.PI;
            if (this.headRotationAngle < Math.PI / 2) {
              this.headRotationAngle += 2 * Math.PI;
            }
  
            // Special case just for here
            if (this.headRotationAngle === this.turnAngle) {
              this.turning = false;
  
              // Move slightly away from edge at the end to avoid endless loops
              if (this.x <= 50) this.x = 50.001;
              if (this.y <= 50) this.y = 50.001;
              if (this.x >= this.canvasWidth - 50)
                this.x = this.canvasWidth - 50.001;
              if (this.y >= this.canvasHeight - 50)
                this.y = this.canvasHeight - 50.001;
            }
  
            if (this.turnAngle - this.headRotationAngle < turnAmountPerFrame)
              turnAmountPerFrame = this.turnAngle - this.headRotationAngle;
            this.headRotationAngle += turnAmountPerFrame;
          }
        }
      }
    };

    this.update = (pondData, setPondData) => {
      this.doFoodLogic(pondData, setPondData);
      if (!this.chasingFood) this.doMovementLogic();
    };
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

    /**
     * Here I needed to rotate twice around two different points:
     *  1st - around the point at the head of the fish to rotate
     *  the overall angle of the fish
     *
     *  2nd - around the point near the tail to rotate slightly
     *  more left or right for the tail wagging for animation
     *
     *  This is a bit confusing so I created two variables to represent these two points
     *
     *  hrp -> [H]ead [R]otaion [P]oint
     *  trp -> [T]ail [R]otation [P]oint
     *
     *  apologies for any confusion if you're reading this
     */

    // Head rotation point
    let hrp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 50,
      this.y + this.tailOffset,
      this.x,
      this.y
    );

    let trp; // Tail rotation point

    // Middle bodypoint
    trp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 40,
      this.y + this.tailOffset,
      this.x,
      this.y
    );

    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, trp.x, trp.y, hrp.x, hrp.y)
    );

    // Top quadratic curve point
    trp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 45,
      this.y - 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, trp.x, trp.y, hrp.x, hrp.y)
    );

    // Top point
    trp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 60,
      this.y - 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, trp.x, trp.y, hrp.x, hrp.y)
    );

    // Middle point
    trp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 50,
      this.y + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, trp.x, trp.y, hrp.x, hrp.y)
    );

    // Bottom point
    trp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 60,
      this.y + 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, trp.x, trp.y, hrp.x, hrp.y)
    );

    // Bottom quadratic curve point
    trp = this.getRotatedPoint(
      this.headRotationAngle,
      this.x + 45,
      this.y + 7 + this.tailOffset,
      this.x,
      this.y
    );
    tailPoints.push(
      this.getRotatedPoint(0.05 * this.tailOffset, trp.x, trp.y, hrp.x, hrp.y)
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

  // Turn the fins with the rotation of the tail
  drawLeftFin(context) {
    const leftFinPoints = [];
    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
        this.x + 11,
        this.y + 8,
        this.x,
        this.y
      )
    );

    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
        this.x + 25,
        this.y,
        this.x,
        this.y
      )
    );

    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
        this.x + 25,
        this.y + 15 + this.finOffset,
        this.x,
        this.y
      )
    );

    leftFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
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
        this.headRotationAngle + 0.01 * this.tailOffset,
        this.x + 11,
        this.y - 8,
        this.x,
        this.y
      )
    );

    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
        this.x + 25,
        this.y,
        this.x,
        this.y
      )
    );

    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
        this.x + 25,
        this.y - 15 - this.finOffset,
        this.x,
        this.y
      )
    );

    rightFinPoints.push(
      this.getRotatedPoint(
        this.headRotationAngle + 0.01 * this.tailOffset,
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

  // TODO: make the speed of animation change based off
  // movement speed (when it can accelerate and decelerate to get food)

  /**
   * Calculate the amount to offset points from given animation frame, speed, and distance
   * @param {*} speed - the larger speed is, the slower the part will complete an animation loop
   * @param {*} distanceScale - Amount to scale the distance of movemement
   * @param {*} abs - If you want absolute value of the function (no negative)
   * @returns
   */
  calculateAnimationOffset(speed, distanceScale, abs) {
    const value = Math.cos((Math.PI * this.animationFrame) / speed); // The larger tailSpeed is, the slower fish swims
    return distanceScale * (abs ? Math.abs(value) : value);
  }
}
