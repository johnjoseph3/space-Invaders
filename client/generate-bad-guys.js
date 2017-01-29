import {BadGuy} from './bad-guy.js';
import {gameArea} from './game-area.js';

function generateBadGuys() {
	let badGuys = [];
	let shipWidth = 30;
	let shipHeight = 30;
	let shipX = 0;
	while(shipX < (gameArea.canvas.width - (shipWidth * 3))) {
		badGuys.push(new BadGuy(shipWidth, shipHeight, shipX, 0));
		shipX += (shipWidth * 2);
	}
	return badGuys;
}

export {generateBadGuys};
