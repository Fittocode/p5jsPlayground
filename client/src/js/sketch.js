let numOfBalls = 10;
let balls = [];
let friction = -0.9;
var r = Math.floor(Math.random() * 255 + 1);
var g = r;
var b = g;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < numOfBalls; i++) {
    balls[i] = new Ball(random(10, 40), i, balls);
  }
}

function draw() {
  background(55);
  balls.forEach((balls) => {
    balls.show();
    balls.move();
    balls.wallBounce();
    balls.collide();
  });
}

function Ball(r, idin, oin) {
  this.x = Math.floor(Math.random() * 600 + 30);
  this.y = Math.floor(Math.random() * 600 + 30);
  this.r = r;
  this.diameter = 2 * r;
  this.xVelocity = Math.floor(Math.random() * 2 + 2);
  this.yVelocity = Math.floor(Math.random() * 3 + 2);
  this.ballColor = color(255);
  this.randomColor = function () {
    return color("#" + Math.floor(Math.random() * 16777215).toString(16));
  };
  this.id = idin;
  this.others = oin;

  this.show = function () {
    fill(this.ballColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

  this.move = function () {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.xVelocity *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.xVelocity *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.yVelocity *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.yVelocity *= friction;
    }
  };
  this.wallBounce = function () {
    if (this.x - this.r <= 0 || this.x + this.r >= width) {
      this.xVelocity *= -1;
      this.diameter += 0.1;
      this.changeColor();
    }
    if (this.y - this.r <= 0 || this.y + this.r >= height) {
      this.yVelocity *= -1;
      this.diameter += 0.1;
      this.changeColor();
    }
  };

  this.collide = function () {
    for (let i = this.id + 1; i < numOfBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = targetX - this.others[i].x;
        let ay = targetY - this.others[i].y;
        this.xVelocity -= ax;
        this.yVelocity -= ay;
        this.others[i].xVelocity += ax;
        this.others[i].yVelocity += ay;
        this.changeColor();
        if (this.diameter > this.others[i].diameter) {
          this.diameter += 1;
        }
      }
    }
  };
  this.changeColor = function () {
    this.ballColor = this.randomColor();
    fill(this.ballColor);
  };
}
