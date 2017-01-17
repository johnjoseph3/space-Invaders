let width = 5;
let height = 5;
let color = "black";
let x = 150;
let y = 100;

function Bullet (userShip, gameArea) {
	this.width = width;
	this.height = height;
	this.speedY = 0;
	this.x = userShip.x + (userShip.width/2 - this.width/2);
	this.y = gameArea.canvas.height - (userShip.height + this.height);
	let ctx = gameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	this.newPosition = function() {
		this.y -= 1;
	};
	this.update = function() {
		let ctx = gameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
}

export {Bullet};
