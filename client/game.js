/*jshint esversion: 6 */

import {UserShip} from './user-ship.js';
import {BadGuy} from './bad-guy.js';
import {gameArea} from './game-area.js';

window.addEventListener('keydown', function (e) {
	gameArea.key = e.keyCode;
	if(e.keyCode === 32) {
		userShip.fireBullet();
	}
});
window.addEventListener('keyup', function (e) {
	gameArea.key = false;
});

gameArea.init();
const userShip = new UserShip(30, 30, "red",
	gameArea.canvas.width/2 - 15,
	gameArea.canvas.height - 30,
	gameArea
);
const badGuy = new BadGuy(30, 30, "red", 0, 0, gameArea);

setInterval(function() { badGuy.fireBullet(); }, 2000);

setInterval(function() { gameArea.updateGameArea(userShip, badGuy); }, 20);
