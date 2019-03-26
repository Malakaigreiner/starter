class futchure {

  constructor(uniqueID) {

    this.seed = uniqueID

    randomSeed(this.seed);


    this.size = random(3, 5)
    this.scale = random(15, 30)
    this.c = color(random(0, 255), random(0, 255), random(0, 255))
    this.rx = []

    this.shape = '';
    this.points = []


    //decides which shape to show
    let r = random(100)
    if (r <= 25) {
      this.shape = 'torus'
    } else if (r > 25 && r <= 50 && r < 75) {
      this.shape = 'box'
    } else if (r > 25 && r > 50 && r <= 75){
      this.shape = 'sphere'
    } else if (r > 25 && r > 50 && r > 75 && r <= 100) {
			this.shape = 'ellipsoid'
		}

    //draws a bunch of chosen shape in this structure
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        for (let z = 0; z < this.size; z++) {

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
    // normalMaterial();
    fill(this.c);
    noiseSeed(this.seed)

    for (let i = 0; i < this.points.length; i++) {

      if (this.points[i] !== 'skip') {
        push()

          rotateX(map(noise(i), 0, 1, 0, 360));
          translate(this.points[i].x * this.scale, this.points[i].y * this.scale, this.points[i].z * this.scale)
          // rotate(this.rx,this.ry,this.rz)

          if (this.shape == 'torus') {
            torus(this.scale, this.scale)
          } else if (this.shape == 'box') {
            box(this.scale, this.scale)
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
