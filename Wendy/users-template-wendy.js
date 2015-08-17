var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,password) {
		// Return a user object with three methods:
	
		function userProfile() {
			return name;
		}

		function validate(str) {
			if (str == password) {
				return true;
			}
		}
		
		function record(message) {
			var userMessage = (userProfile() + ': ' + message);
			console.log (userMessage);
			sharedLog.push(userMessage);
		}

		return {
			userProfile: userProfile,
			validate: validate,
			record: record
		}

	}
	// 	record(message) (Part b)
	// }

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
		return sharedLog;
	}


	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;
