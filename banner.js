let r = 0;
let rSpeed = 5;

let tex;

let light;

function setup() {
  createCanvas(windowWidth-(windowWidth*0.25), (windowWidth-(windowWidth*0.25))/2.5, WEBGL);
  frameRate(40);
  
  angleMode(DEGREES);
  noStroke();
  
  tex = loadImage("/assets/texture.png");
}

function draw() {
  background(50);
  
  lights(60);
  
  specularMaterial(20);
  texture(tex);
  
  rotateX(-20);
  
  rotateY(r);
  rotateZ(r);
  box(150);
  
  r = r + rSpeed;
}