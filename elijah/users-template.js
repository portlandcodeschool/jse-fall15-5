var makeUser = (function() {
	// private log
	var sharedLog = [];

	function makeUser(name,passwd) {
        // return user object
        return {
            getName: function() {
                // return user name
                return name;
            },
            validate: function(str) {
                // validate user passwd
                if (str === passwd) return true;
                return false;
            },
            record: function(message) {
                // write to sharedLog
                if (message) {
                    sharedLog.push((name + ': ' + message));
                    return true;
                } else {
                    return undefined;
                }
            }
        }
	}

	// Factory method
	makeUser.getLog = function(user) {
        // return all values in sharedLog by user if provided
        // if no `user` return all entries sep by \n
        if (!user) {
            return sharedLog.join('\n');
        }
        var entries = [];
        sharedLog.map( function(e) {
            if (e.slice(0,(e.search(':'))) === user) {
                entries.push(e);
            }
        });
        return entries.join('\n');
	}

	return makeUser;
})();


if (typeof module != 'undefined')
	module.exports = makeUser;
