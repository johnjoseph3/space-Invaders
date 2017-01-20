import {BadGuy} from './bad-guy.js';

function generateBadGuys(gameArea) {
	let badGuys = [];
	let shipWidth = 30;
	let shipHeight = 30;
	let shipX = 0;
	while(shipX < (gameArea.canvas.width - (shipWidth * 3))) {
		badGuys.push(new BadGuy(shipWidth, shipHeight, shipX, 0, gameArea));
		shipX += (shipWidth * 2);
	}
	return badGuys;
}

export {generateBadGuys};
