/*jshint esversion: 6 */

import {UserShip} from './user-ship.js';
import {gameArea} from './game-area.js';

window.addEventListener('keydown', function (e) {
	gameArea.key = e.keyCode;
});
window.addEventListener('keyup', function (e) {
	gameArea.key = false;
});

gameArea.init();
const userShip = new UserShip(30, 30, "red",
	gameArea.canvas.width/2 - 15,
	gameArea.canvas.height - 30, gameArea
);
setInterval(function() { gameArea.updateGameArea(userShip); }, 20);
