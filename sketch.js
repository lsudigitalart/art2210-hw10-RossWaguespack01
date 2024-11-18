let particles = []

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0); 
  while (particles.length < 100) {
    particles.push(new Particle(random(width), random(height)));
  }
  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D(); 
    this.speed = random(1, 3);            
    this.size = random(5, 10);            
    this.color = color(random(255), random(255), random(255), 150);  
  }
  update() {
    this.position.add(p5.Vector.mult(this.velocity, this.speed));
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
      this.changeColor(); 
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
      this.changeColor();
    }
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size);
  }
  changeColor() {
    this.color = color(random(255), random(255), random(255), 150);
  }
}