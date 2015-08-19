//Problem 1:

var makeCard = (function() {    //BEGIN IIFE

// Miscellaneous variables and functions used by factory and methods
var heartsArray = ['',0,4,8,12,16,20,24,28,32,36,40,44,48];
var diamondsArray = ['',1,5,9,13,17,21,25,29,33,37,41,45,49];
var spadesArray = ['',2,6,10,14,18,22,26,30,34,38,42,46,50];
var clubsArray = ['',3,7,11,15,19,23,27,31,35,39,43,47,51];

var cardNames = [0,'Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']
var suitNames = ['Hearts','Diamonds','Spades','Clubs']
/* Now these arrays aren't cluttering up my cards */

// Defining all card methods in advance
function rank() {
  if (this.id >= 0 && this.id <= 3) {
    return 1;
  } else if (this.id >=4 && this.id <= 7) {
    return 2;
  } else if (this.id >=8 && this.id <= 11) {
    return 3;
  } else if (this.id >=12 && this.id <= 15) {
    return 4;
  } else if (this.id >=16 && this.id <= 19) {
    return 5;
  } else if (this.id >=20 && this.id <= 23) {
    return 6;
  } else if (this.id >= 24 && this.id <= 27) {
    return 7;
  } else if (this.id >= 28 && this.id <= 31) {
    return 8;
  } else if (this.id >= 32 && this.id <= 35) {
    return 9;
  } else if (this.id >= 36 && this.id <= 39) {
    return 10;
  } else if (this.id >= 40 && this.id <= 43) {
    return 11;
  } else if (this.id >= 44 && this.id <= 47) {
    return 12;
  } else if (this.id >= 48 && this.id <= 51) {
    return 13;
  } else {
    return "ERROR";
  }
};

function suit() {
    if (this.id % 4 === 0) {
      return 1;
  } else if ( this.id % 4 === 1) {
    return 2;
  } else if (this.id % 4 === 2) {
    return 3;
  } else if ( this.id % 4 === 3) {
    return 4;
  } else return 'ERROR'
};

function cardID() {


  switch (this.suit()) {
  case 1:
    return heartsArray[this.rank()];
    break;
  case 2:
    return diamondsArray[this.rank()];
    break;
  case 3:
    return spadesArray[this.rank()];
    break;
  case 4:
    return clubsArray[this.rank()];
    break;
  default:
    return 'ERROR';
    break;
  }
};

function color() {
  switch(this.suit(this.id)) {
  case 1:
    return 'red';
    break;
  case 2:
    return 'red';
    break;
  case 3:
    return 'black';
    break;
  case 4:
    return 'black';
    break;
  default:
    return 'ERROR';
    break;
  }
};

function name() {
  return cardNames[this.rank(this.id)] + ' of ' + suitNames[this.suit(this.id)-1]
};


// Card factory
function makeCard(id) {

  var newCard = {


    id: id,
    rank: rank,
    suit: suit,
    cardID: cardID,
    color: color,
    name: name

  };

  if (id >= 0 && id < 52 && id % 1 === 0 ) {
    return newCard;
  } else {
    return null;
  }
};

//Adding function to check if an object is a card
makeCard.isCard = function(obj) {
  if (obj.id) {
    if (obj.rank) {
      if (obj.suit) {
        if (obj.cardID) {
          if (obj.color) {
            if (obj.name) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};

// Defining a function to create the full deck, and assigning it to makeCard
function fillSet() {
  var array = [];
  for (var i=0; i<52; i++) {    // 1 to 52, b/c those are possible IDs!
    array[array.length] = makeCard(i);
  }
  return array
};

makeCard.fullSet = fillSet();   //Give us a full deck to work with

return makeCard;  //Return the factory function

})();   //END IIFE

if (typeof module != 'undefined') {
  module.exports = makeCard;
}



//Problem 2:



// from problem 2d:




// Deque factory

var makeDeque = (function() {   //Begin IIFE

      var releasedValues = [];    //Variable used in instance methods

      var makeDeque = function(values) {  //Factory begins

            //Instance methods:

          var length = function() {
            if (values.length) {
              return values.length;
            } else return undefined;
          };

          var top = function() {
            if (values.length) {
              return values[values.length - 1];
            } else return undefined;
          };

          var bottom = function() {
            if (values.length) {
              return values[0];
            } else return undefined;
          };

          var pop = function() {
            if (values.length) {
              var val = values[values.length-1];
              values.length -= 1;
              releasedValues += val;
              return val;
            }
            return undefined;
          };

          var push = function(val) {
            if (!(val in releasedValues)) {
              values[values.length] = val;
              return values.length;
            } else return 'Error: value already exists';
          };

          var shift = function() {
            val = values[0];
            values.splice(0,1);
          releasedValues[releasedValues.length] += val;
            return val;
          };

          var unshift = function(val) {
            if (!(val in releasedValues)) {
              values.splice(0,0,val);
              return values.length;
            } else return "Error: value already exists";
          };

          var cut = function() {
            if (values.length >=2) {
              if (values.length % 2 === 0) {
                var halfWay = Math.floor(values.length / 2);
              } else var halfWay = Math.floor(values.length / 2) + 1;

              var topHalf = values.slice(halfWay);
              values.splice(halfWay);
              values = topHalf.concat(values);
              return values;

            } else return values;
          };


          var sort = function(compareValsFn) {
            values = values.sort(compareValsFn);
          };


          var map = function(convertValFn) {
            var newArray = values.map(convertValFn);
            return newArray;
          };


          var sortRandom = function() {
            var randNum = Math.floor(Math.random());

            if (randNum % 2 === 0) {
              return 1;
            } else return -1;
          };

          var badShuffle = function() {
            values.sort(sortRandom);
            return values
          };

          var goodShuffle = function() {  //Code modified from bost.ocks.org/mike/shuffle/
            var arrayLength = values.length;
            while(arrayLength) {
              var randElem = Math.floor(Math.random() * arrayLength--);

              //Shift random value to back
              var front = values[arrayLength]; //Grab front value
              values[arrayLength] = values[randElem]; //Put random in front
              values[randElem] = front; // Put front value in our random position
            }
            return values;
          };


          var newDeque = {      //New instance to be returned

            length: length,
            top: top,
            bottom: bottom,
            pop: pop,
            push: push,
            shift: shift,
            unshift: unshift,
            cut: cut,
            sort: sort,
            map: map,
            badShuffle: badShuffle,
            goodShuffle: goodShuffle
          };
        return newDeque;
      }                   //Factory ends

      return makeDeque;     //Give us access to the factory

  })();   //End IIFE

var array = [0,0,1,2,4,'Newark', false];



//Problem 3:

//a

var makeUser = (function() {


var systemLog = {};     //Private log for all user objects

var makeUser = function(name, pwd) {

  name = name.toLowerCase();    //Ensuring consistent capitalization

  systemLog[name] = {};         //Creating blank object to write
                                  //each user's log entries into
  var counter = 1;        //Counter for record() function

  var getName = function() {
    return name;
  };

  var validate = function(str) {
    if (str === pwd) {
      return true;
    } else return false;
  };

  var record = function(message) {

    if (!message) {
      return undefined;
    } else {
    systemLog[name][counter] = name + ': ' + message + '\n';
    counter++;
  }
  };

  var newUser = {
    getName: getName,
    validate: validate,
    record: record
  };

  return newUser;

}

makeUser.getLog = function(userObj) {

  var string = '';    //String to be filled in and returned
  if (!userObj) {
      for (var key in systemLog) {
        for (var entry in systemLog[key]) {
          string += systemLog[key][entry];
        }
      }
      return string;
  } else {
    for (var key in systemLog[userObj.getName()]) {
      string += systemLog[userObj.getName()][key];
    }
    return string;
  }
};

return makeUser;

})();
