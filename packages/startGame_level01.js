
// ----------------------------------
// Start Game (Level 01)
// ----------------------------------

function startGame_level01() {
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;
	
	// Initialise Game Score
	game_score = 0;
	
	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	trees_x = [250, 500, 850, 950, 1100, 1800, 2000, 2150, 2600, 3050, 3100, 3500, 3850, 4200];
	
	clouds = [{x_pos: 250, y_pos: 75, size: 1.0},
					 	{x_pos: 550, y_pos: 140, size: 0.6},
					 	{x_pos: 950, y_pos: 110, size: 0.9},
					  {x_pos: 1250, y_pos: 75, size: 1.0},
					 	{x_pos: 1550, y_pos: 140, size: 0.6},
					 	{x_pos: 1950, y_pos: 110, size: 0.9}];
	
	mountains = [{x_pos: 400, y_pos: floorPos_y - 20, size: 200},
							 {x_pos: 800, y_pos: floorPos_y - 20, size: 350},
							 {x_pos: 1750, y_pos: floorPos_y - 20, size: 200},
							 {x_pos: 1900, y_pos: floorPos_y - 20, size: 350},
							 {x_pos: 2650, y_pos: floorPos_y - 20, size: 200},
							 {x_pos: 3000, y_pos: floorPos_y - 20, size: 350}];
	
	canyons = [{x_pos: 50, width: 100},
						 {x_pos: 1200, width: 250},
						 {x_pos: 2350, width: 100},
						 {x_pos: 3550, width: 100},
						 {x_pos: 3950, width: 50}];
	
	collectables = [{x_pos: 700, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
									{x_pos: 950, y_pos: floorPos_y - 120,  size: 1.0, isFound: false},
								  {x_pos: 1700, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								  {x_pos: 2100, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								  {x_pos: 2750, y_pos: floorPos_y - 120,  size: 1.0, isFound: false},
								  {x_pos: 2875, y_pos: floorPos_y - 220,  size: 1.0, isFound: false},
								  {x_pos: 2925, y_pos: floorPos_y - 220,  size: 1.0, isFound: false},
									{x_pos: 3000, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
									{x_pos: 3100, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								 	{x_pos: 3200, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
									{x_pos: 3400, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								 	{x_pos: 3800, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								 	{x_pos: 3900, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								  {x_pos: 4100, y_pos: floorPos_y - 20,  size: 1.0, isFound: false},
								  {x_pos: 4150, y_pos: floorPos_y - 120,  size: 1.0, isFound: false},
								  {x_pos: 4275, y_pos: floorPos_y - 220,  size: 1.0, isFound: false},
								  {x_pos: 4325, y_pos: floorPos_y - 220,  size: 1.0, isFound: false},
								  {x_pos: 4425, y_pos: floorPos_y - 320,  size: 1.0, isFound: false},
								  {x_pos: 4450, y_pos: floorPos_y - 320,  size: 1.0, isFound: false},
								  {x_pos: 4475, y_pos: floorPos_y - 320,  size: 1.0, isFound: false}];
	
	flagpole = {
		x_pos: 4750,
		isReached: false
	}
	
	platforms = [];
	platforms.push(createPlatform(900, floorPos_y - 100, 100));
	platforms.push(createPlatform(1250, floorPos_y - 100, 100));
	platforms.push(createPlatform(2700, floorPos_y - 100, 100));
	platforms.push(createPlatform(2850, floorPos_y - 200, 100));
	platforms.push(createPlatform(4100, floorPos_y - 100, 100));
	platforms.push(createPlatform(4250, floorPos_y - 200, 100));
	platforms.push(createPlatform(4400, floorPos_y - 300, 100));
	
	enemies = [];
	enemies.push(new Enemy(200, floorPos_y - 10, 200));
	enemies.push(new Enemy(1750, floorPos_y - 10, 500));
	enemies.push(new Enemy(2750, floorPos_y - 10, 200));
	enemies.push(new Enemy(2950, floorPos_y - 10, 400));
	enemies.push(new Enemy(4200, floorPos_y - 10, 300));
	
}