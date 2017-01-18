/*jshint esversion: 6 */

import {UserShip} from './user-ship.js';
import {BadGuy} from './bad-guy.js';
import {gameArea} from './game-area.js';
import $ from 'jquery';
let userShip;
let badGuy;
let gameIsRunning = false;
let enemyFireInterval;
let gameUpdateInterval;

$(document).on('keydown', function (e) {
	e.preventDefault();
	gameArea.key = e.keyCode;
	if(e.keyCode === 32) {
		userShip.fireBullet();
	}
});
$(document).on('keyup', function (e) {
	e.preventDefault();
	gameArea.key = false;
});
const $playPauseButton = $('.play-pause');

$playPauseButton.on('click', function (e) {
	if(gameIsRunning) {
		pauseGame();
		$(this).text('Play');
	} else {
		startGame();
		$(this).text('Pause');
	}
	gameIsRunning =! gameIsRunning;
});

function drawGameArea() {
	gameArea.init();
	userShip = new UserShip(30, 30, "blue",
		gameArea.canvas.width/2 - 15,
		gameArea.canvas.height - 30,
		gameArea
	);
	badGuy = new BadGuy(30, 30, "red", 0, 0, gameArea);
}

function startGame() {
	enemyFireInterval = setInterval(function() {
		if(!badGuy.hasBeenHit) {
			badGuy.fireBullet();
		}
	}, 2000);
	gameUpdateInterval = setInterval(function() { gameArea.updateGameArea(userShip, badGuy); }, 20);
}

function pauseGame() {
	clearInterval(enemyFireInterval);
	clearInterval(gameUpdateInterval);
}

drawGameArea();
