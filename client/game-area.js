import {moveUserShip, updateBullets, moveBadGuy} from './utils.js';

const gameArea = {
	canvas: document.createElement('canvas'),
	init: function() {
		this.canvas.width = 300;
		this.canvas.height = 400;
		this.context = this.canvas.getContext('2d');
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	},
	clear: function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	updateGameArea: function (userShip, badGuy) {
		gameArea.clear();
		moveUserShip(userShip);
		updateBullets(userShip);
		moveBadGuy(badGuy);
		updateBullets(badGuy);
		badGuy.destroyIfHitByBullet(userShip.bullets);
	}
};

export {gameArea};
