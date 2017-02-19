/*jshint esversion: 6 */

import 'font-awesome-webpack';
import './assets/user-ship.png';
import './assets/bad-guy.png';
window.$ = window.jquery = require('jquery');
import 'materialize-css/bin/materialize.css';
import './materialize.js';
import './styles.less';
import './game.js';

$(document).ready(function() {
	$('.modal').modal();
});
