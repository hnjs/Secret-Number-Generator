'use strict';
module.exports = function() {
	var secNum = Math.random() * 1e6 + 1;
	return function secretNumber() {
		var secret = secNum;
		return secret;
	}
};