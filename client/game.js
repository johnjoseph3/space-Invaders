/*jshint esversion: 6 */

import {UserShip} from './user-ship.js';
import {gameArea} from './game-area.js';
import {generateBadGuys} from './generate-bad-guys.js';
import $ from 'jquery';
let userShip, badGuys, gameUpdateInterval;
const badGuyFireIntervals = [];
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
	gameArea.init(300, 400);
	userShip = new UserShip(30, 30, "blue",
		gameArea.canvas.width/2 - 15,
		gameArea.canvas.height - 30,
		gameArea
	);
	badGuys = generateBadGuys(gameArea);
}

function setEnemyFireInterval(badGuy, fireInterval) {
	let enemyFireInterval = setInterval(function() {
		if(!badGuy.hasBeenHit) {
			badGuy.fireBullet();
		}
	}, fireInterval);
	badGuyFireIntervals.push(enemyFireInterval);
}

function startGame() {

	for(let badGuy of badGuys) {
		let fireInterval = (Math.floor(Math.random() * 10) + 1) * 1000;
		setEnemyFireInterval(badGuy, fireInterval);
	}
	gameUpdateInterval = setInterval(function() { gameArea.updateGameArea(userShip, badGuys); }, 20);
}

function pauseGame() {
	for(let enemyFireInterval of badGuyFireIntervals) {
		clearInterval(enemyFireInterval);
	}
	clearInterval(gameUpdateInterval);
}

drawGameArea();
