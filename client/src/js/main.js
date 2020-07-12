let directionHandler = ["+", "-"];

class MovingCircle {
  constructor() {
    this.x = Math.floor(Math.random() * 300);
    this.y = Math.floor(Math.random() * 300);
    this.d = 100;
    this.xDirection = directionHandler[Math.floor(Math.random() * 2)];
    this.yDirection = directionHandler[Math.floor(Math.random() * 2)];
    this.speed = Math.floor(Math.random() * 5);
  }

  paintTheCircle() {
    circle(this.x, this.y, this.d);
  }

  moveTheCircle() {
    if (this.x >= 600 - this.d / 2) {
      this.xDirection = "-";
      this.yDirection = "+";
    }
    if (this.x <= 0 + this.d / 2) {
      this.xDirection = "+";
      this.yDirection = "-";
    }
    if (this.y >= 600 - this.d / 2) {
      this.yDirection = "-";
      this.yDirection = "-";
    }
    if (this.y <= 0 + this.d / 2) {
      this.yDirection = "+";
      this.yDirection = "+";
    }
    if (this.xDirection === "+") {
      this.x += this.speed + Math.floor(Math.random() * 2);
    } else if (this.xDirection === "-") {
      this.x -= this.speed + Math.floor(Math.random() * 2);
    }
    if (this.yDirection === "+") {
      this.y += this.speed + Math.floor(Math.random() * 2);
    } else if (this.yDirection === "-") {
      this.y -= this.speed + Math.floor(Math.random() * 2);
    }
  }
}

let c1 = new MovingCircle();
let c2 = new MovingCircle();

// class CircleCollisions {
//   constructor(circles) {
//     this.circles = [...circles];
//   }

//   handleCollisions() {
//     this.circles.forEach((circle, index) => {
//       console.log(circle);
//       console.log(index);
//     });
//   }
// }

// const cm = new CircleCollisions([c1, c2]);

// cm.handleCollisions();

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(55);
  c1.paintTheCircle();
  c1.moveTheCircle();

  c2.paintTheCircle();
  c2.moveTheCircle();
}
