/*

University of London
CM1005-2020 Introduction to Programming I
The Game Project
Sean Marjason (200113515)


-- FILE STRUCTURE --
To simplify this codebase, a 'packages' folder has been created which contains key functions that are used in the setup and draw functions below. This was done to ensure ease of maintainence and avoid the need to search through the code to find relevant functions that initialise key objects or define the graphics of particular objects in the viewport.

Given p5.js does not support the use of javascript modules, to ensure this file structure works the relevant files have been linked as script tags within the index.html file contained within this repository.


-- EXTENSION 1: PLATFORMS --
The platforms extension has been used to create scale within the game viewport and make the game more interesting / challenging for the end user through the inclusion of verticality in the game world.

The key pieces that were challenging when creating these platforms were in adjusting the way in which the character's 'falling' function worked to ensure that falling stopped when coming into contact with a platform, and continued to function correctly when the character fell to the ground. This presented challenges in the way in which the 'isFalling' variable was manipulated by the relevant if statements which check for contact with
a platform.

The key pieces which were useful to learn / practice were the way in which multiple objects could very easily be created simply by defining their parameters and pushing them to an array, rather than defining them all initially inside the array. This could be extended to simply creating the platforms  at random for example using a for loop with some boundaries to ensure the platforms were of an appropriate height.


-- EXTENSION 2: ENEMIES --
The enemies extension was also used to make the game more interesting / challenging for the end user by introducing interactivity when crossing over flat parts of scenery.

The key pieces that were challenging when creating these enemies were the need to introduce some if statements to define which direction the enemies were travelling to render the visuals of the enemy in the correct direction. This highlighted the need to pass the 'this' definition within the constructor function down to a nested function to use in the if statement, given using 'this.inc' was not yielding the correct results (stuck in the positive value).

The key pieces which were useful to learn / practice were the way that constructor functions differ from and are similar to the factory method. For example, the use of the 'new' keyword to define a new object, but then similar syntax to pass this new object into the object array.

*/


// Environment Variables
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;
var game_score;
var lives;

// Scenery Variables
var trees_x;
var clouds;
var mountains;
var canyons;

// Object Variables
var collectables;
var flagpole;
var platforms;
var enemies;

// Action Variables
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup() {
	createCanvas(1024, 576); // Initialise Canvas
	floorPos_y = height * 3/4; // Initialise Floor Position
	lives = 3; 	// Initialise Lives
	
	startGame_level01(); // Refer to packages/startGame_level01.js for implementation
	
}

function draw() {
	background(140,213,254); // fill the sky blue

	// draw some green ground
	noStroke();
	fill(166,217,75);
	rect(0, floorPos_y - 20, width, height/4 + 20); 

	push();
	translate(scrollPos, 0);	// Allow movement of game character (Part 1 of 2)
	
	drawMountains(); // Draw mountains
	drawClouds(); // Draw clouds
	drawTrees(); // Draw trees
	
	// Draw canyons
	for (i = 0; i < canyons.length; i++) {
		drawCanyon(canyons[i]);
		checkCanyon(canyons[i]);
	}

	// Draw & collect collectable items
	for (i = 0; i < collectables.length; i++) {
		if (!collectables[i].isFound) {
			checkCollectable(collectables[i]);
			drawCollectable(collectables[i]);
		}
	}
	
	// Draw & check flagpole
	renderFlagpole();
	if (!flagpole.isReached) { checkFlagpole() }
	
	// Draw the platforms
	for (var i = 0; i < platforms.length; i++) { platforms[i].draw() }
	
	// Draw & Check Enemies
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].draw();
		
		var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
		if (isContact) {
			if (lives > 0) {
				lives -= 1;
				startGame_level01();
				break;
			}
		}
	}

	// Game Over & Level Complete
	fill(255,120,120);
	textSize(40);
	textAlign(CENTER);
	
	if (lives < 1) {
		text('Game Over!', width/2 - scrollPos, height/2);
		text('Press space to continue.', width/2 - scrollPos, height/2 + 50);
		return;
	}
	
	if (flagpole.isReached) {
		text('Level Complete!', width/2 - scrollPos, height/2);
		text('Press space to continue.', width/2 - scrollPos, height/2 + 50);
		return;
	}
	
	// Check if player has died
	checkPlayerDie();

	// Allow movement of game character (Part 2 of 2)
	pop();
	
		// draw score to screen
	fill(255);
	textSize(20);
	textAlign(LEFT);
	text('Score: ' + game_score, 20, 30);
	
	// draw lives to screen
	text('Lives: ', 20, 60);
	fill(255,120,120);
	for (i = 0; i < lives; i++) {
		ellipse(90 + i * 25, 54, 15);
	}
	
	// draw controls to screen
	fill(255);
	textSize(15);
	textAlign(RIGHT);
	text('Left    |     <     | ', width - 20, 30);
	text('Right    |     >     | ', width - 20, 60);
	text('Jump    | Space | ', width - 20, 90);
	
	
	// Draw game character.
	drawGameChar(); // refer to packages/gameCharacter.js for implementation

	// Logic to make the game character move or the background scroll.
	if(isLeft) { gameChar_x > width * 0.3 ? gameChar_x -= 5 : scrollPos += 5;	}
	if(isRight) {	gameChar_x < width * 0.7 ? gameChar_x += 5 : scrollPos -= 5; }

	// Logic to make the game character rise and fall.
	if (gameChar_y < floorPos_y) {
		
		// Check if game character is on a platform
		var isContact = false;
		for(var i = 0; i < platforms.length; i++) {
			if (platforms[i].checkContact(gameChar_world_x, gameChar_y)) {
				isContact = true;
				break
			}
		}
		
		if (isContact == false) {
			isFalling = true;
			gameChar_y = gameChar_y + 2.5;
		}
		else {
			isFalling = false;
		}
	}
	else {
		isFalling = false;
	}
	
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
	
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {

	// Left Key
	if (keyCode === 37) {	isLeft = true; }
	
	// Right Key
	if (keyCode === 39) {	isRight = true; }
	
	// Spacebar (Jump)
	if (keyCode === 32 && isFalling === false && isPlummeting === false) { gameChar_y -= 150; }
	
	// Spacebar (Reload)
	if (keyCode === 32 && (flagpole.isReached || lives < 1)) { location.reload(); }
}

function keyReleased() {

	// Left Key
	if (keyCode === 37) { isLeft = false;	}
	
	// Right Key
	if (keyCode === 39) { isRight = false; }

}


// ----------------------------------
// Player Lives
// ----------------------------------

// Function to check if player dies
function checkPlayerDie() {
	if (gameChar_y > height) {
		lives -= 1;
		if (lives > 0) {
			startGame_level01();
		}
	}
}


