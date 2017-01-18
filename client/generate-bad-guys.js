import {BadGuy} from './bad-guy.js';

function generateBadGuys(gameArea) {
	let badGuys = [];
	let shipWidth = 20;
	let shipHeight = 20;
	let shipX = 0;
	while(shipX < (gameArea.canvas.width - (shipWidth * 3))) {
		badGuys.push(new BadGuy(shipWidth, shipHeight, 'red', shipX, 0, gameArea));
		shipX += (shipWidth * 3);
	}
	return badGuys;
}

export {generateBadGuys};
