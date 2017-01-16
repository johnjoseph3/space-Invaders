/*jshint esversion: 6 */

const gameArea = {
	canvas: document.createElement('canvas'),
	init: function() {
		this.canvas.width = 300;
		this.canvas.height = 400;
		this.context = this.canvas.getContext('2d');
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
			gameArea.key = e.keyCode;
		});
		window.addEventListener('keyup', function (e) {
			gameArea.key = false;
		});
	},
	clear: function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};

function initGameArea () {
	gameArea.init();
}

function initUserShip () {
	let canvas = gameArea.canvas;
	let userShip = new UserShip(30, 30, "red", canvas.width/2 - 15, canvas.height - 30);
	return userShip;
}

function UserShip (width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.x = x;
	this.y = y;
	let ctx = gameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	this.update = function() {
		let ctx = gameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
	this.newPosition = function() {
		this.x += this.speedX;
	};
}

initGameArea();
let userShip = initUserShip();

function stopMoveIfUserShipIsAtBoundary(direction) {
	if (direction == "left" && userShip.x < 1) {
		userShip.speedX = 0;
	}
	if (direction == "right" && userShip.x + userShip.width >= gameArea.canvas.width) {
		userShip.speedX = 0;
	}
}

function stopMove () {
	userShip.speedX = 0;
}

function updateGameArea () {
	gameArea.clear();
	let direction;
	if (gameArea.key) {
		if (gameArea.key == 37) {userShip.speedX = -2; direction = "left"; }
		if (gameArea.key == 39) {userShip.speedX = 2; direction = "right";}
		stopMoveIfUserShipIsAtBoundary(direction);
	}
	else {
		stopMove();
	}
	userShip.newPosition();
	userShip.update();
}
