function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  angleMode(DEGREES);
}

function draw() {
  background('red');

  drawVamp();
}

function drawVamp(){
  noStroke();
  push();
  fill('maroon')
  translate(-500, -300);
  scale(3.5);
  beginShape();
  vertex(185, 150);
  vertex(215, 150);
  vertex(230, 220);
  vertex(170, 220);
  endShape(CLOSE);
  pop();
  push();
  fill('black');
  translate(-400, -150);
  scale(3);
  beginShape();
  vertex(185, 150);
  vertex(215, 150);
  vertex(230, 220);
  vertex(170, 220);
  endShape(CLOSE);
  pop();
  fill('tan');
  ellipse(height/2, width/2, 270);
  fill('lightgray');
  arc(140, 190, 90, 70, 0, 180);
  arc(260, 190, 90, 70, 0, 180);
  fill('red');
  ellipse(140, 208, 35, 35);
  ellipse(260, 208, 35, 35);
  fill('black');
  ellipse(140, 208, 20);
  ellipse(260, 208, 20);
  fill('black');
  arc(105, 95, 200, 200, 315, 135);
  arc(295, 95, 200, 200, 45, 225);
  fill('black');
  arc(200, 270, 140, 80, 0, 180);
  fill('pink');
  ellipse(200, 300, 50, 20);
  fill('white');
  push();
  translate(120, 245);
  push();
  scale(0.25);
  triangle(100, 100, 200, 100, 150, 200);
  translate(350, 0);
  triangle(100, 100, 200, 100, 150, 200);
  pop();
  pop();
  push();
  fill(34, 44, 60);
  scale(0.75);
  push();
  translate(65, 130);
  beginShape();
  vertex(185, 150);
  vertex(215, 150);
  vertex(230, 220);
  vertex(170, 220);
  endShape(CLOSE);
  pop();
  pop();
}
