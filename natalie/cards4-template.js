var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // set instance properties here
        if (!(isValid(id))) return null;
        return {
          id: id,
          rank: rank,
          suit: suit,
          color: color,
          name: cardName
        };
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    function isValid(id) {
      if ((typeof id)!=="number")
          return false;
      if (id%1 !== 0)
          return false;
      if (id<0 || id>51)
          return false;
      return true;
    }
    //var rankNames = [...];
    var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var suitNames = ['', 'Hearts','Diamonds','Spades','Clubs'];

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
      return Math.floor(this.id/4)+1;
    }

    function suit() {
      return ((this.id%4)+1);
    }

    function color() {
      var theSuit=this.suit();
      return theSuit && ((theSuit<3)? "red" : "black");
    }

    function cardName() {
      var theRank = this.rank();
      var theSuit = this.suit();
      return theRank && theSuit &&
      (rankNames[theRank] + ' of ' + suitNames[theSuit]);
    }
    //etc...


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
      var props = ['id', 'rank', 'suit', 'color', 'name'];
      for (i = 0; i < props.length; i++) {
        if (!(props[0] in thing)) return false;
      }
      return true;
    };

    makeCard.fullSet = [];//<-- fill me
    for (i=0; i<52; i++){
      makeCard.fullSet.push(makeCard(i))
    }


    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!


// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;
