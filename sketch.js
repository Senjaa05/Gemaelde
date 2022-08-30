let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(600, 600);
  x = width / 200;
  y = height / 1;
  //WO zeichnet es
  
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  
  background(800);
}

function draw() {
  for (let i = 0; i < 400; i++) {
    step();
  }

  let point = 0;
  fill(point);
  //rect(r, g, b);



}
function step() {
  x += random(-1, 1);
  y += random(-1, 1);
  
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

   r += random(-5, 5);
  g += random(-5, 5);
  b += random(-5, 5);
  

  
  // MOuse
  if (mouseIsPressed === true){
    r = constrain(r, 180, 255);
    g = constrain(g, 180, 255);
    b = constrain(b, 220, 255);
  } 
  else {
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
    b = constrain(b, 0, 255);   
  }
  if (keyIsPressed === true){
    r = constrain(r, 30, 100);
    g = constrain(g, 30, 100 );
    b = constrain(b, 30, 60);
  }
  else {
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
    b = constrain(b, 0, 255);
    
  }
  
  stroke(r, g, b);
  point(x, y);
  // Color
}
