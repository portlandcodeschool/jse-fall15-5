var makeUser = (function() { // begin IIFE...

  var sharedLog = []; //private; accessible only from functions defined within IIFE

  // The factory itself:
  function makeUser(name, passwd) {

    var user = {
      getName: getName,
      validate: validate,
      record: record,
    };

    function getName() {
      return name;
    }

    function validate(str) {
      if (str === passwd) {
        return true;
      } else {
        return false;
      }
    }

    function record(message) {
      if (message) {
        sharedLog.push(this.getName() + ':' + message);
        return true;
      }
    }

    return user;
    // Return a user object with three methods:
    // getName()
    // validate(str)
    // record(message) (Part b)
  }

  // Part b) only:
  // Factory method (defined within IIFE, so can access sharedLog):
  makeUser.getLog = function(user) {

    function messageCallback(item) {
      if (item.indexOf(user.getName()) >= 0) {
        return true;
      }
    }

    if (user) {
      var userLog = sharedLog.filter(messageCallback);
      return userLog.join('\n');
    } else {
      return sharedLog.slice().join('\n');
    }
  };

  return makeUser;
})();

if (typeof module != 'undefined')
  module.exports = makeUser;