import {Bullet} from './bullet.js';
let direction = 1;

function BadGuy (width, height, color, x, y, gameArea) {
	this.width = width;
	this.height = height;
	this.speedX = 1;
	this.x = x;
	this.y = y;
	this.type = 'bad-guy';
	let ctx = gameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	this.hasBeenHit = false;
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
	this.changeDirectionsIfAtEdgeOfCanvas = function(badGuysLength, index) {
		if(index === 0 && this.x < 1) {
			direction = 1;
		}
		if ((index+ 1 === badGuysLength) && (this.x + this.width >= gameArea.canvas.width)) {
			direction = -1;
		}
		this.speedX = direction;
	};
	this.bullets = [];
	this.fireBullet = function() {
		this.bullets.push(new Bullet(this, gameArea));
	};
	this.destroyIfHitByBullet = function(userShipBullets) {
		let self = this;
		userShipBullets.forEach(function(bullet, index){
			if((bullet.x >= self.x) && (bullet.x <= self.x + width) && (bullet.y <= (self.y + self.height)) && (bullet.y >= self.y)) {
				self.speedX = 0;
				self.height = 0;
				self.width = 0;
				self.hasBeenHit = true;
				userShipBullets.splice(index, 1);
			}
		});
	};
}

export {BadGuy};
