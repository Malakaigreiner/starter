class futchure {

  constructor(uniqueID) {

    this.seed = uniqueID

    randomSeed(this.seed);

    this.size = random(4, 6)
    this.scale = random(10, 15)
    this.c = color(random(0, 255), random(0, 255), random(0, 255))
    this.rx = []

    this.shape = '';
    this.points = []


    //decides which shape to show
    let r = random(100)
    if (r <= 33) {
      this.shape = 'torus'
    } else if  (r > 33 && r <= 66){
      this.shape = 'sphere'
    } else if (r > 33 && r > 66 && r <= 100) {
			this.shape = 'ellipsoid'
		}

    //draws a bunch of chosen shape in this structure
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        for (let z = 0; z < this.size; z++) {
          this.c = color(random(0,255),random(0,255),random(0,255))
          if (random(0, 6) > 3) {
            let vec = createVector(x, y, z)
            this.points.push(vec)

          } else {

            this.points.push('skip')

          }


        }
      }
    }


  } //end constructor


  render() {
    noStroke();
    angleMode(DEGREES);
    fill(this.c);
    noiseSeed(this.seed);
    rotateZ(frameCount * .3);
    rotateX(frameCount * .3);
    rotateY(frameCount * .3);


    for (let i = 0; i < this.points.length; i++) {


      if (this.points[i] !== 'skip') {

        push()
          rotateX(map(noise(i), 0, 1, 0, 360));
          translate(this.points[i].x * this.scale, this.points[i].y * this.scale, this.points[i].z * this.scale)
          // rotate(this.rx,this.ry,this.rz)

          if (this.shape == 'torus') {
            torus(this.scale, this.scale)
          } else if (this.shape == 'sphere') {
            sphere(this.scale)
          } else if (this.shape == 'ellipsoid'){
						ellipsoid(this.scale, this.scale, this.scale);
					}
        pop()

      }
    } //end points loop
  } //close render

} //close the class
