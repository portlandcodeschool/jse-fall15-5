

var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
 function makeCard(id) {
  if (!makeCard.isValidID(id))
   return null;

    var cards = {
      id: id,
      rank: rank,
      suit: suit,
      color: color,
      cardName: cardName
    };

    return cards;
    }

//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

makeCard.isValidID = function(num) {
 return ((typeof num)==="number") && (num%1 === 0) && num>=0 && num<=51;
};

 var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
 var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
      return Math.floor(this.id / 4) + 1;
    }

    function suit() {
      return ((this.id % 4) + 1);
    }

    function color() {
     var theSuit = this.suit();
      return theSuit && ((theSuit < 3) ? "red" : "black");
    }

    function cardName() {
     var theRank = this.rank();
     var theSuit = this.suit();
     return rankNames[theRank] + ' of ' + suitNames[theSuit]; //--> string

}

//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
     return (typeof thing === 'object') && (makeCard.rank === thing.rank) && ('id' in thing) && (makeCard.isValidID(thing.id));
    };

    makeCard.fullSet = [];//<-- fill me
     for (var id=0; id<=52; id++) {
        makeCard.fullSet.push(makeCard(id));
    }

    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!

// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;
