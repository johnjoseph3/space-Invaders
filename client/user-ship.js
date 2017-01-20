import {Bullet} from './bullet.js';
import $ from 'jquery';

const userShipImage = document.getElementById("user-ship");

function UserShip (width, height, x, y, gameArea) {
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.x = x;
	this.y = y;
	this.type = 'user-ship';
	this.lives = 3;
	let ctx = gameArea.context;
	setTimeout(() => {ctx.drawImage(userShipImage, this.x, this.y, this.width, this.height);});
	this.newPosition = function() {
		this.x += this.speedX;
	};
	this.update = function() {
		let ctx = gameArea.context;
		ctx.drawImage(userShipImage, this.x, this.y, this.width, this.height);
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
	this.destroyIfHitByBullet = function(badGuyBullets) {
		let self = this;
		badGuyBullets.forEach(function(bullet, index){
			if((bullet.x >= self.x) && (bullet.x <= self.x + width) && (bullet.y <= gameArea.canvas.height) && (bullet.y >= (gameArea.canvas.height - self.height))) {
				badGuyBullets.splice(index, 1);
				if (self.lives > 1) {
					self.lives--;
					console.log(self.lives);
				}
				else {
					$(document).trigger('userShipDestroyed');
				}
			}
		});
	};
}

export {UserShip};
