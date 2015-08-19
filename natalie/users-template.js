var makeUser = (function() {// begin IIFE...

	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {
		// Return a user object with three methods:
		function getName() {
			return name;
		}
		function validate(str) {
			if(str === passwd) {
				return true;
			} else {
				return false;
			}
		}

		function record(message) {
			if (message) {
				sharedLog.push(name + ': ' + message);
				return true
			} else {
				return undefined;
			}
		}

		return {
			getName : getName,
			validate : validate,
			record : record
		}

	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
		if (user) {
			var array = []
			for (i=0; i<sharedLog.length; i++) {
				if (sharedLog[i].search(user + ": ") >= 0)
					array.push(sharedLog[i]);
			}
			return array.join('\n');
		} else {
			return sharedLog.join('\n');
		}

	}

	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;
