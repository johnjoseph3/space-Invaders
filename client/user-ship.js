import {Bullet} from './bullet.js';

function UserShip (width, height, color, x, y, gameArea) {
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.x = x;
	this.y = y;
	let ctx = gameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	this.newPosition = function() {
		this.x += this.speedX;
	};
	this.update = function() {
		let ctx = gameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
	this.stopMove = function() {
		this.speedX = 0;
	};
	this.stopIfAtEdgeOfCanvas = function() {
		if (this.direction == "left" && this.x < 1) {
			this.speedX = 0;
		}
		if (this.direction == "right" && this.x + this.width >= gameArea.canvas.width) {
			this.speedX = 0;
		}
	};
	this.bullets = [];
	this.fireBullet = function() {
		this.bullets.push(new Bullet(this, gameArea));
	};
}

export {UserShip};
