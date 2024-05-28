function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  for (let i = 0; i < 1000; i++) {
    let angle = i * 0.1;
    let x = (1 + 5 * angle) * cos(angle);
    let y = (1 + 5 * angle) * sin(angle);
    stroke(i % 256, 100, 150);
    fill(i % 256, 150, 200, 150);
    ellipse(x, y, 20, 20);
  }
}

espiral

particulas

let particles = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }
}










particulas que sigye el cursor
let particles = [];

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 5));
    this.acc = createVector();
    this.maxSpeed = 4;
    this.maxForce = 0.1;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);
    dir.setMag(0.1);
    this.acc = dir;

    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
}


particula que sifue al mouse
let particles = [];

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 5));
    this.acc = createVector();
    this.maxSpeed = 4;
    this.maxForce = 0.1;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);
    dir.setMag(0.1);
    this.acc = dir;

    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
}

let cols, rows;
let scl = 20;
let w = 1400;
let h = 800;
let terrain = [];

function setup() {
    createCanvas(800, 600, WEBGL);
    cols = w / scl;
    rows = h / scl;

    for (let x = 0; x < cols; x++) {
        terrain[x] = [];
        for (let y = 0; y < rows; y++) {
            terrain[x][y] = 0; // Default height
        }
    }
}

function draw() {
    let flying = frameCount * 0.02;
    for (let y = 0; y < rows; y++) {
        let yoff = y * 0.2 + flying;
        for (let x = 0; x < cols; x++) {
            let xoff = x * 0.2;
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
        }
    }

    background(0);
    stroke(255);
    noFill();
    rotateX(PI / 3);
    translate(-w / 2, -h / 2);

    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}



