// ---------------------------
// Background & scenery render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds() {
	for (i = 0; i < clouds.length; i++) {
		push();
		noStroke();
		fill(217, 241, 255);
		rect(clouds[i].x_pos - (100 * clouds[i].size), clouds[i].y_pos, clouds[i].size * 200, clouds[i].size * 70, clouds[i].size * 50);
		ellipse(clouds[i].x_pos - (35 * clouds[i].size), clouds[i].y_pos, clouds[i].size * 75, clouds[i].size * 75);
		ellipse(clouds[i].x_pos + (25 * clouds[i].size), clouds[i].y_pos, clouds[i].size * 100, clouds[i].size * 100);
		pop();
	}
}

// Function to draw mountains objects.
function drawMountains() {
	for (i = 0; i < mountains.length; i++) {	
		push();
		fill(112, 170, 204);
		triangle(mountains[i].x_pos, mountains[i].y_pos - mountains[i].size, mountains[i].x_pos - mountains[i].size, mountains[i].y_pos, mountains[i].x_pos + mountains[i].size, mountains[i].y_pos)
		fill(114, 179, 204);
		triangle(mountains[i].x_pos, mountains[i].y_pos - mountains[i].size, mountains[i].x_pos - (mountains[i].size - 100), mountains[i].y_pos, mountains[i].x_pos + mountains[i].size, mountains[i].y_pos)
		pop();
	}
}

// Function to draw trees objects.
function drawTrees() {
	for (i = 0; i < trees_x.length; i++) {
		push();
		noStroke();
		fill(178,112,12);
		rect(trees_x[i], floorPos_y - 75, 10, 75);
		fill(132,163,60);
		ellipse(trees_x[i], floorPos_y - 75, 50, 50);
		ellipse(trees_x[i] - 10, floorPos_y - 125, 75, 75);
		fill(154,198,77);
		ellipse(trees_x[i] + 25, floorPos_y - 100, 65, 65);
		ellipse(trees_x[i] + 15, floorPos_y - 150, 75, 75);
		pop();
	}
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {
	push();
	noStroke();
	fill(140,213,254);
	rect(t_canyon.x_pos, floorPos_y - 20, t_canyon.width, floorPos_y + height);
	pop();
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon) {
	if ((t_canyon.x_pos < gameChar_world_x) && (gameChar_world_x < t_canyon.x_pos + t_canyon.width) && (gameChar_y >= floorPos_y)) {
		isPlummeting = true;
		gameChar_y += 5;
		isLeft = false;
		isRight = false;
	}
}