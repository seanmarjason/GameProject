
// ------------------------------
// Game character render function
// ------------------------------


// Variables to manage walking animation
var frame = 1;
var step = true;

// Function to draw the game character.
function drawGameChar() {
	
	// Walking Animation
	if (frame % 5 === 0) { // Every 5 frames take a step
		step = !step;
	}
	
	if(isLeft && isFalling) {
		// add your jumping-left code
		push();	
		noStroke();
		fill(150, 150, 150, 100); //LighterGrey
		ellipse(gameChar_x + 5, gameChar_y - 2, 30, 5); //Shadow
		fill(255, 226, 198); //Skin Color
		rect(gameChar_x - 12, gameChar_y - 72, 25, 30, 10); //Head
		rect(gameChar_x - 3, gameChar_y - 45, 6, 10); //Neck
		fill(82,59,43); //Hair Color
		arc(gameChar_x, gameChar_y - 71, 25, 8, 0, PI + QUARTER_PI, CHORD) //Hair
		fill(0); //Black
		ellipse(gameChar_x - 8, gameChar_y - 59, 3, 5); //L-Eye
		ellipse(gameChar_x - 2, gameChar_y - 59, 3, 5); //R-Eye
		fill(70, 70, 70);
		stroke(70, 70 ,70);
		rect(gameChar_x - 8, gameChar_y - 40, 15, 20, 4); //Body
		strokeWeight(3);
		line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 3, gameChar_y - 10); //L-Leg
		line(gameChar_x + 4, gameChar_y - 20, gameChar_x + 6, gameChar_y - 10); //R-Leg
		line(gameChar_x - 7, gameChar_y - 35, gameChar_x - 13, gameChar_y - 38); //L-Arm
		stroke(120, 120, 120); //LighterGrey
		line(gameChar_x + 6, gameChar_y - 35, gameChar_x + 12, gameChar_y - 40); //R-Arm
		pop();

	}
	else if(isRight && isFalling)	{
		// add your jumping-right code
		push();	
		noStroke();
		fill(150, 150, 150, 100); //LighterGrey
		ellipse(gameChar_x - 5, gameChar_y - 2, 30, 5); //Shadow
		fill(255, 226, 198); //Skin Color
		rect(gameChar_x - 12, gameChar_y - 72, 25, 30, 10); //Head
		rect(gameChar_x - 3, gameChar_y - 45, 6, 10); //Neck
		fill(82,59,43); //Hair Color
		arc(gameChar_x, gameChar_y - 71, 25, 8, 0, PI + QUARTER_PI, CHORD) //Hair
		fill(0); //Black
		ellipse(gameChar_x + 9, gameChar_y - 59, 3, 5); //L-Eye
		ellipse(gameChar_x + 3, gameChar_y - 59, 3, 5); //R-Eye
		fill(70, 70, 70);
		stroke(70, 70 ,70);
		rect(gameChar_x - 8, gameChar_y - 40, 15, 20, 4); //Body
		strokeWeight(3);
		line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 7, gameChar_y - 10); //L-Leg
		line(gameChar_x + 4, gameChar_y - 20, gameChar_x + 2, gameChar_y - 10); //R-Leg
		line(gameChar_x + 6, gameChar_y - 35, gameChar_x + 12, gameChar_y - 38); //R-Arm
		stroke(120, 120, 120); //LighterGrey
		line(gameChar_x - 7, gameChar_y - 35, gameChar_x - 13, gameChar_y - 40); //L-Arm
		pop();
	}
	else if(isLeft) {
		// add your walking left code
		push();
		noStroke();
		fill(10, 10, 10, 100); //LightGrey
		ellipse(gameChar_x, gameChar_y - 2, 30, 5); //Shadow
		fill(255, 226, 198); //Skin Color
		rect(gameChar_x - 12, gameChar_y - 72, 25, 30, 10); //Head
		rect(gameChar_x - 3, gameChar_y - 45, 6, 10); //Neck
		fill(82,59,43); //Hair Color
		arc(gameChar_x, gameChar_y - 71, 25, 8, 0, PI + QUARTER_PI, CHORD) //Hair
		fill(0); //Black
		ellipse(gameChar_x - 8, gameChar_y - 55, 3, 5); //L-Eye
		ellipse(gameChar_x - 2, gameChar_y - 55, 3, 5); //R-Eye
		fill(70, 70, 70); //Grey
		stroke(70, 70 ,70);
		rect(gameChar_x - 8, gameChar_y - 40, 15, 25, 4); //Body
		strokeWeight(3);
		// Walking Animation
		if (step) {
			line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 5, gameChar_y - 5); //L-Leg
			line(gameChar_x + 4, gameChar_y - 20, gameChar_x + 4, gameChar_y - 3); //R-Leg
		}
		else {
			line(gameChar_x - 4, gameChar_y - 20, gameChar_x - 4, gameChar_y - 6); //L-Leg
			line(gameChar_x + 3, gameChar_y - 20, gameChar_x + 3, gameChar_y - 3); //R-Leg
		}
		line(gameChar_x - 7, gameChar_y - 35, gameChar_x - 13, gameChar_y - 20); //L-Arm
		stroke(120, 120, 120); //LighterGrey
		line(gameChar_x + 6, gameChar_y - 35, gameChar_x + 12, gameChar_y - 20); //R-Arm
		pop();
	}
	else if(isRight) {
		// add your walking right code
		push();
		noStroke();
		fill(10, 10, 10, 100); //LightGrey
		ellipse(gameChar_x, gameChar_y - 2, 30, 5); //Shadow
		fill(255, 226, 198); //Skin Color
		rect(gameChar_x - 12, gameChar_y - 72, 25, 30, 10); //Head
		rect(gameChar_x - 3, gameChar_y - 45, 6, 10); //Neck
		fill(82,59,43); //Hair Color
		arc(gameChar_x, gameChar_y - 71, 25, 8, 0, PI + QUARTER_PI, CHORD) //Hair
		fill(0); //Black
		ellipse(gameChar_x + 9, gameChar_y - 55, 3, 5); //L-Eye
		ellipse(gameChar_x + 3, gameChar_y - 55, 3, 5); //R-Eye
		fill(70, 70, 70); //Grey
		stroke(70, 70 ,70);
		rect(gameChar_x - 8, gameChar_y - 40, 15, 25, 4); //Body
		strokeWeight(3);
		// Walking Animation
		if (step) {
			line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 5, gameChar_y - 3); //L-Leg
			line(gameChar_x + 4, gameChar_y - 20, gameChar_x + 4, gameChar_y - 5); //R-Leg
		}
		else {
			line(gameChar_x - 4, gameChar_y - 20, gameChar_x - 4, gameChar_y - 3); //L-Leg
			line(gameChar_x + 3, gameChar_y - 20, gameChar_x + 3, gameChar_y - 6); //R-Leg
		}
		line(gameChar_x + 6, gameChar_y - 35, gameChar_x + 12, gameChar_y - 20); //R-Arm
		stroke(120, 120, 120); //LighterGrey
		line(gameChar_x - 7, gameChar_y - 35, gameChar_x - 13, gameChar_y - 20); //L-Arm
		pop();
	}
	else if(isFalling || isPlummeting) {
		// add your jumping facing forwards code
		push();
		noStroke();
		fill(150, 150, 150, 100); //LighterGrey
		ellipse(gameChar_x, gameChar_y - 2, 30, 5); //Shadow
		fill(255, 226, 198); //Skin Color
		rect(gameChar_x - 12, gameChar_y - 72, 25, 30, 10); //Head
		rect(gameChar_x - 3, gameChar_y - 45, 6, 10); //Neck
		fill(82,59,43); //Hair Color
		arc(gameChar_x, gameChar_y - 71, 25, 8, 0, PI + QUARTER_PI, CHORD) //Hair
		fill(0); //Black
		ellipse(gameChar_x - 5, gameChar_y - 59, 3, 5); //L-Eye
		ellipse(gameChar_x + 5, gameChar_y - 59, 3, 5); //R-Eye
		fill(70, 70, 70);
		stroke(70, 70 ,70);
		rect(gameChar_x - 8, gameChar_y - 40, 15, 20, 4); //Body
		strokeWeight(3);
		line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 5, gameChar_y - 10); //L-Leg
		line(gameChar_x + 4, gameChar_y - 20, gameChar_x + 4, gameChar_y - 10); //R-Leg
		line(gameChar_x - 7, gameChar_y - 35, gameChar_x - 13, gameChar_y - 40); //L-Arm
		line(gameChar_x + 6, gameChar_y - 35, gameChar_x + 12, gameChar_y - 40); //R-Arm
		pop();
	}
	else {
		// add your standing front facing code
		push();
		noStroke();
		fill(10, 10, 10, 100); //LightGrey
		ellipse(gameChar_x, gameChar_y - 2, 30, 5); //Shadow
		fill(255, 226, 198); //Skin Color
		rect(gameChar_x - 12, gameChar_y - 72, 25, 30, 10); //Head
		rect(gameChar_x - 3, gameChar_y - 45, 6, 10); //Neck
		fill(82,59,43); //Hair Color
		arc(gameChar_x, gameChar_y - 71, 25, 8, 0, PI + QUARTER_PI, CHORD) //Hair
		fill(0); //Black
		ellipse(gameChar_x - 5, gameChar_y - 55, 3, 5); //L-Eye
		ellipse(gameChar_x + 5, gameChar_y - 55, 3, 5); //R-Eye
		fill(70, 70, 70);
		stroke(70, 70 ,70);
		rect(gameChar_x - 8, gameChar_y - 40, 15, 25, 4); //Body
		strokeWeight(3);
		line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 5, gameChar_y - 3); //L-Leg
		line(gameChar_x + 4, gameChar_y - 20, gameChar_x + 4, gameChar_y - 3); //R-Leg
		line(gameChar_x - 7, gameChar_y - 35, gameChar_x - 13, gameChar_y - 20); //L-Arm
		line(gameChar_x + 6, gameChar_y - 35, gameChar_x + 12, gameChar_y - 20); //R-Arm	
		pop();
	}
	
	frame += 1;
}
