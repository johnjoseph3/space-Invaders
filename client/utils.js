import {gameArea} from './game-area.js';

function moveUserShip (userShip) {
	if (gameArea.key) {
		if (gameArea.key == 37) {userShip.speedX = -2; userShip.direction = "left";}
		if (gameArea.key == 39) {userShip.speedX = 2; userShip.direction = "right";}
		userShip.stopIfAtEdgeOfCanvas();
	}
	else {
		userShip.stopMove();
	}
	userShip.newPosition();
	userShip.update();
}

function moveBullet (bullet) {
	bullet.newPosition();
	bullet.update();
}

function removeBullet (userShip, index) {
	userShip.bullets.splice(index, 1);
}

function updateBullets (userShip) {
	if (userShip.bullets.length){
		userShip.bullets.forEach(function(bullet, index){
			moveBullet(bullet);
			if(bullet.y < 1) {
				removeBullet(userShip, index);
			}
		});
	}
}

export {moveUserShip, updateBullets};
