### Homework 5

_Due Mon. Aug.17_

####Synopsis

- **Problem 1:** A Cards Module _[20% of total time]_ **Goals:** Start working with IIFEs and closure to create a self-contained module for your cards.
- **Problem 2:** All Hands Off Deque _[25%]_ **Goals:** Get more comfortable with closure by creating a secure version of the deque from last week.
- **Problem 3:** Secrets At All Levels _[25%]_ **Goals:** Build on Monday's in-class password example to practice closures at the level of both instance and factory methods.
- **Problem 4:** Coming soon!

---


---

**1)  Card module**

Package your earlier playing-card code into a module; that is, wrapped inside an immediately-invoked function expression (IIFE, or "Iffy").  Your module should return one object: the factory _makeCard_.  As before, calling `makeCard(id)` should create and return a card object with methods for rank, suit, name, etc.  But this time, the shared methods don't need to be linked initially to the factory; they can just be ordinary functions within the IIFE, where they are protected from the global scope.

The instance methods still need to be linked to each instance, and the factory methods (e.g. `isCard()`) still needs to be linked the factory.  But any other helper-functions or arrays which do not need to be public should remain inaccessible from outside the IIFE.

You may use the [template file](cards4-template.js) to get started.

var makeCard = (function () {
    function makeCard(id) {
      if (!(isValid(id,0,51))) {
      	 return null;
      }
      var temp = {};
      temp.id = id;
      temp.rank = rank;
      temp.suit = suit;
      temp.color = color;
      temp.cardName = cardName;
      return temp;
    }

      function isValid (num) {
    if ((typeof num)!=="number")
    		return false;
    if (num%1 !== 0)
    		return false;
    if (num<0 || num>51)
    		return false;
    return true;
    }

    function isCard (obj) {
    	if ((typeof obj)!== "object") {
    			return false;
    		}
    		if (!(makeCard.isValid(obj))) {
    			 return false;
    		}
    if (!(obj.rank === makeCard.rank && obj.suit === makeCard.suit && obj.color === makeCard.color && obj.name === makeCard.name)) {
    	return false;
    }
    	return true;
    }


    function rank(){
    return Math.floor(this.id/4)+1;
  }

    function suit(){
    return ((this.id%4)+1);
    }

    function color(){
    var theSuit = this.suit();
    return theSuit && ((theSuit<3)? "red" : "black");
    }

    function cardName (){
    var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var suitNames = ['', 'Hearts','Diamonds','Spades','Clubs'];
    var theRank = this.rank();
    var theSuit = this.suit();
    return theRank && theSuit &&
    (rankNames[theRank] + ' of ' + suitNames[theSuit]);
    }

    makeCard.fullSet = [];
    	for (i = 0; i < 52; i++) {
    makeCard.fullSet.push(makeCard(i));
    	}
    return makeCard;
  })();

---

**2)  All hands off deque**

The implementation of a deque in Homework 4, Problem 2e), tries to maintain the integrity of the deque contents by preventing a _push_ or _unshift_ of items not in the original deque.  But a programmer could deliberately or accidentally circumvent those efforts by accessing and changing the deque's array instead of using its methods.  

**a)**
Write another version of a deque factory which protects the deque instances by using closure to hide their content arrays from the outside world.  Your deque methods should be the only way of changing their hidden arrays.  You may use the [template file](deque2-template.js) to get started.

var makeDeque = (function () {
function makeDeque(values) {
	var array = values.slice();
	var discardPile = [];
var deque = {

	arrlength: function() {
		return array.length;
	},

	top: function () {
		return array[array.length-1];
	},

	bottom: function () {
		return array[0];
	},

	pop: function () {
	    var discardPop = values.pop();
	    discardPile.push(discardPop);
	    return discardPop;
},

	push: function () {
		if (isInArray(val)){
		discardPile.splice (removeFromDiscard(array), 1);
		return array.push(val);
	} else {
		return 'null';
	}
},

	shift: function() {
	var discardShift = values.shift();
	discardPile.push(discardShift);
	return discardShift;
},

	unshift: function(val) {
		if (isInArray(val)) {
		discardPile.splice(removeFromDiscard(array),1);
	return values.unshift(array);
	} else {
		return 'null';
	}
},

	cut: function() {
		var valuesHalfB = array.slice(Math.ceil(array.length/2));
		array.splice(Math.ceil(array.length/2));
		array = valuesHalfB.concat(array);
	},

	sort: function (compareValsFn) {
		return array.sort(compareValsFn);
},

	map: function(compareValFn) {
		return array.map(compareValsFn);
	},

	shuffle: function() {
				var a = array.length;
				var b;
				var c;
				while (m) {
					c = Math.floor(Math.random() * a--);
					b = array[a];
					array[a] = array[c];
					array[c] = b;
				}
				return array;
			},

	isInArray: function (array) {
		for (i=0; i<discardPile.length; i++)
	if (discardPile[i].id === value.id) {
			return true;
	} else {
		return false;
		}
},

removeFromDiscard: function(array){
				for (i=0; i<discardPile.length; i++) {
					if (discardPile[i].id === value.id){
					return i;
				}
}

return { values: values,
length: arrlength,
top: top,
bottom: bottom,
pop: pop,
push: push,
shift: shift,
unshift: unshift,
cut: cut,
map: map,
sort: sort,
discardPile: [],
isInArray: isInArray,
removeFromDiscard: removeFromDiscard,
	};
}
return makeDeque;
})();

**b)** Wrap the deque factory in an IIFE to create a module which exports _makeDeque_.

---

**3) Secrets at all levels**

**a)**  Write a user-registration tool, a factory function `makeUser(name,pwd)` which accepts a username and password and generates a user object.  Once we have a user object we should be able to do two things with it: retrieve the corresponding username and test to see if a provided password matches that user's password.  Each user will have these methods:

var makeUser = (function() {
	var sharedLog = [];
	function makeUser(name, password) {
		var user = {
		getName: getName,
		validate: validate,
		record: record,
	};

		function getName(){
			return name;
		}

		function validate(str) {
			if (str === password) {
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
	}

Here is a [template](users-template.js) to get you started.

**b)**  Now that we can make user objects, let's assume that our system needs some version of a "system log" that will record messages left by different users. This system log, being shared by all user objects created, will contain all the messages that users have recorded. You will need to modify the factory you made above to be a part of a module that has a private variable that holds the system log.

  + Each *user* object should have an additional method `record(message)` which writes an entry to the shared log in the format "_username: message_" and returns true.  If no message is provided, the `record` method should return undefined instead.

  makeUser.getLog = function(user) {
			function messageCallback(item) {
				if (item.indexOf(user.getName())>=0) {
					return true;
				}
			var userLog = sharedLog.filter(messageCallback);
				return userLog.join('\n');
			}
		};
		if (user) {
			var userlog = sharedLog.filter(messageCallback);
			return userLog.join('\n');
		} else {
				return sharedLog.slice().join('\n');
		}

	return makeUser;
})();
