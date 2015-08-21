var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE


	// The factory itself:
	function makeUser(name,passwd) {
		// Return a user object with three methods:
      return {
		getName:  function() {
                    return name;
                  },
		validate: function(str) {
                    return str === passwd;
                  },
		record:   function(message) {
                    var msgStr = '';
                    msgStr += this.getName() + ': ' + message;
                    sharedLog.push(msgStr);
                    console.log(sharedLog);
                    return sharedLog[sharedLog.length - 1] === msgStr;
                  },
        getLog: makeUser.getLog
      }
	}

	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
      var str = '';
      if (typeof user !== 'string') {
        return sharedLog.join('\n');
      } else {
          sharedLog.forEach(function(element, index, array) {
            if (element.indexOf(user) === 0) {
              str += element + '\n';
            }
          })
          return str;
      }
	}
	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;
