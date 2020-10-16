
// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.
function drawCollectable(t_collectable) {
	push();
	noStroke();
	fill(122, 91, 11);
	ellipse(t_collectable.x_pos + 2, t_collectable.y_pos - 2, t_collectable.size * 25, t_collectable.size * 25);
	stroke(251,207,98);
	strokeWeight(2);
	fill(250, 186, 22);
	ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 25, t_collectable.size * 25);
	fill(50, 50, 50, 100);
	noStroke();
	ellipse(t_collectable.x_pos, t_collectable.y_pos + t_collectable.size * 25, t_collectable.size * 25, t_collectable.size * 25 / 5);
	pop();
}

// Function to check character has collected an item.
function checkCollectable(t_collectable) {
	if (dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 30) {
		t_collectable.isFound = true;
		game_score += 1;
	}
}


// ----------------------------------
// Flagpole
// ----------------------------------

// Function to create flagpole
function renderFlagpole() {
	push();
	// Pole
	strokeCap(SQUARE);
	strokeWeight(10);
	stroke(255,120,120);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 225);
	strokeWeight(4);
	stroke(198,97,97);
	line(flagpole.x_pos - 3, floorPos_y, flagpole.x_pos - 3, floorPos_y - 225);
	fill(198,97,97);
	ellipse(flagpole.x_pos, floorPos_y - 225, 15);
	// Flag
	strokeWeight(8);
	strokeJoin(ROUND);
	stroke(235);
	fill(235);
	textSize(10);
	// Raise flag if flagpole is reached
	if (flagpole.isReached) {
		rect(flagpole.x_pos + 6, floorPos_y - 210, 50, 30)
		fill(50);
		noStroke();
		text('END', flagpole.x_pos + 20, floorPos_y - 190);
	}
	else {
		rect(flagpole.x_pos + 6, floorPos_y - 40, 50, 30);
		fill(50);
		noStroke();
		text('END', flagpole.x_pos + 20, floorPos_y - 20);
	}
	pop();
}

// Function to check if flagpole is reached
function checkFlagpole() {
	if (dist(gameChar_world_x, gameChar_y, flagpole.x_pos, floorPos_y) < 75) {
		flagpole.isReached = true;
	}
}


// ----------------------------------
// Platforms (Factory Method)
// ----------------------------------

// Function to create platforms
function createPlatform(platform_posX, platform_posY, platform_length) {
	var p = {
		x: platform_posX,
		y: platform_posY,
		length: platform_length,
		
		draw: function() {
			fill(115, 67, 9); //Dark Brown
			rect(this.x, this.y, this.length, 10);
			fill(89, 52, 7); //Darker Brown
			rect(this.x, this.y + 7, this.length - 5, 3);
		},
		
		checkContact: function(gc_x, gc_y) {
			if(gc_x > this.x - 10 && gc_x < this.x + this.length + 10) {
				var d = this.y - gc_y;
				if (d >= 0 && d < 5) {
					return true;
				}
			}
			return false;
		}
	}
	return p;
}


// ----------------------------------
// Enemies (Constructor Function)
// ----------------------------------

function Enemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.range = range;
	
	this.currentX = x;
	this.inc = 1;
	
	this.update = function() {
		this.currentX += this.inc;
		if (this.currentX >= this.x + this.range) {
			this.inc = -1;
		}
		else if (this.currentX < this.x) {
			this.inc = 1;
		}
	}
	
	var instance = this;
	this.draw = function() {
		this.update();
		
		fill(255, 255, 255); //White
		ellipse(this.currentX, this.y - 10, 30, 30); //Body
		fill(10, 10, 10, 100); //LightGrey
		ellipse(this.currentX, this.y + 10, 30, 5); //Shadow
		
		
		if (instance.inc > 0) { //While moving right
			fill(255, 255, 255); //White
			triangle(	this.currentX - 10, this.y - 5,
								this.currentX - 15, this.y + 5,
								this.currentX - 3, 	this.y + 5);
			fill(0, 0, 0); //Black
			ellipse(this.currentX + 7, this.y - 10, 3, 5); //R-Eye
			ellipse(this.currentX + 2, this.y - 10, 3, 5); //L-Eye
		}
		else { //While moving left
			fill(255, 255, 255); //White
			triangle(	this.currentX + 10, this.y - 5,
								this.currentX + 15, this.y + 5,
								this.currentX + 3, 	this.y + 5);
			fill(0, 0, 0);
			ellipse(this.currentX - 7, this.y - 10, 3, 5); //R-Eye
			ellipse(this.currentX - 2, this.y - 10, 3, 5); //L-Eye
		}
	}
	
	this.checkContact = function(gc_x, gc_y) {
		var d = dist(gc_x, gc_y, this.currentX, this.y);
		if(d < 20) {
			return true;
		}
		return false;
	}
}

