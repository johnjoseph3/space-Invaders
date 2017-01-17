let width = 5;
let height = 5;
let color = "black";
let x = 150;
let y = 100;

function Bullet (ship, gameArea) {
	this.width = width;
	this.height = height;
	this.speedY = 0;
	this.x = ship.x + (ship.width/2 - this.width/2);
	if(ship.type === 'user-ship') {
		this.y = gameArea.canvas.height - (ship.height + this.height);
	} else {
		this.y = ship.height;
	}
	let ctx = gameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	this.newPosition = function() {
		if(ship.type === 'user-ship') {
			this.y -= 1;
		} else {
			this.y += 1;
		}
	};
	this.update = function() {
		let ctx = gameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
}

export {Bullet};
