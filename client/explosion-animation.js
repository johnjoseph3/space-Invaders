import {gameArea} from './game-area.js';
const explosionColor = "red";

function getRandomCoordinatesInExplosionArea(explosion) {
	let minX = explosion.x - 10;
	let maxX = explosion.x + 10;
	let minY = explosion.y - 10;
	let maxY = explosion.y + 10;
	let x = Math.floor(Math.random()*(maxX-minX+1)+minX);
	let y = Math.floor(Math.random()*(maxY-minY+1)+minY);

	return {x, y};
}

function ExplosionAnimation (ship) {
	this.width = 5;
	this.height = 5;
	this.x = ship.x;
	this.y = ship.y + ship.height/2;
	this.updateCyclesCompleted = 0;
	this.numberOfUpdateCyclesBeforeRemoval = 40;
	let ctx = gameArea.context;
	ctx.fillStyle = explosionColor;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	this.update = function() {
		this.updateCyclesCompleted++;
		let {x, y} = getRandomCoordinatesInExplosionArea(this);
		ctx = gameArea.context;
		ctx.fillStyle = explosionColor;
		ctx.fillRect(x, y, this.width, this.height);
	};
}

export {ExplosionAnimation};
