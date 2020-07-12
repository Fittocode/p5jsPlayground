var r = Math.floor(Math.random() * 255 + 1);
var g = Math.floor(Math.random() * 255 + 1);
var b = Math.floor(Math.random() * 255 + 1);

function Ball(x, y, r) {
  this.x = Math.floor(Math.random() * 300 + 20);
  this.y = Math.floor(Math.random() * 300 + 20);
  this.r = r;
  this.d = 2 * r;
  this.xVelocity = Math.floor(Math.random() * 6 + 3);
  this.yVelocity = Math.floor(Math.random() * 7 + 4);
  this.randomColor = color(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  this.ballColor = color(255);

  this.show = function () {
    fill(this.ballColor);
    ellipse(this.x, this.y, this.d, this.d);
  };

  this.move = function () {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  };

  this.bounce = function () {
    if (this.x - this.r <= 0 || this.x + this.r >= width) {
      this.xVelocity *= -1;
    }
    if (this.y - this.r <= 0 || this.y + this.r >= height) {
      this.yVelocity *= -1;
    }
  };

  this.changeColor = function () {
    if (
      this.x - this.r <= 0 ||
      this.x + this.r >= width ||
      this.y - this.r <= 0 ||
      this.y + this.r >= height
    ) {
      this.ballColor = this.randomColor;
      fill(this.ballColor);
      ellipse(this.x, this.y, this.d, this.d);
    }
  };
}

