/*jshint esversion: 6 */

import {UserShip} from './user-ship.js';
import {gameArea} from './game-area.js';
import {generateBadGuys} from './generate-bad-guys.js';
import $ from 'jquery';
let userShip, badGuys, gameUpdateInterval;
let gameIsRunning = false;

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

$(document).on('badGuyDestroyed',function(e, data){
	clearInterval(data.destroyedBadGuy.fireIntervalId);
	badGuys = data.badGuys;
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
	gameArea.init(200, 300);
	userShip = new UserShip(30, 30, "blue",
		gameArea.canvas.width/2 - 15,
		gameArea.canvas.height - 30,
		gameArea
	);
	badGuys = generateBadGuys(gameArea);
}

function setEnemyFireInterval(badGuy) {
	let fireInterval = (Math.floor(Math.random() * 10) + 1) * 1000;
	let fireIntervalId = setInterval(function() {
		badGuy.fireBullet();
	}, fireInterval);
	badGuy.fireIntervalId = fireIntervalId;
}

function startGame() {
	for(let badGuy of badGuys) {
		setEnemyFireInterval(badGuy);
	}
	gameUpdateInterval = setInterval(function() { gameArea.updateGameArea(userShip, badGuys); }, 20);
}

function pauseGame() {
	for(let badGuy of badGuys) {
		clearInterval(badGuy.fireIntervalId);
	}
	clearInterval(gameUpdateInterval);
}

drawGameArea();
