let ball;
let ball2;
let ball3;
let ball4;
let ball5;
let ball6;

function setup() {
  createCanvas(600, 600);
  ball = new Ball(100, 100, 20);
  ball2 = new Ball(100, 100, 20);
  ball4 = new Ball(100, 100, 20);
  ball3 = new Ball(100, 100, 20);
  ball5 = new Ball(100, 100, 20);
  ball6 = new Ball(100, 100, 20);
}

function draw() {
  background(55);

  ball.show();
  ball.move();
  ball.bounce();
  ball.changeColor();

  ball2.show();
  ball2.move();
  ball2.bounce();
  ball2.changeColor();

  ball3.show();
  ball3.move();
  ball3.bounce();
  ball3.changeColor();

  ball4.show();
  ball4.move();
  ball4.bounce();
  ball4.changeColor();

  ball5.show();
  ball5.move();
  ball5.bounce();
  ball5.changeColor();

  ball6.show();
  ball6.move();
  ball6.bounce();
  ball6.changeColor();
}
