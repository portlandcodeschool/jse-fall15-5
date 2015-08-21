var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // set instance properties here
      if (!(makeCard.isValid(id,0,51))) {
        return null;
      }
    // Othrwise build an instance object with an id property,
      return {
        id: id,
    // representing one card, and attach to it four methods:
        rank: rank,
        suit: suit,
        color: color,
        name: cardName
    // Each method property should be just a link to the corresponding method
    //  of the factory itself.
    }
    
        // and return instance...
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:
    makeCard.rankNames =      ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    makeCard.suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

    makeCard.isValid = function(num,low,high) { 
        return ((typeof num)==="number") && (num%1 === 0) && (num>=low && num<=high);
    };

      //function isValidID(num) {...}
    //var rankNames = [...];

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
      return Math.floor(this.id/4)+1;
    }

    function suit() {
      return (this.id%4)+1;
    }

    function color() {
      var suit = this.suit();
      return suit && ((suit<3)? "red": "black");
    }
      
    function cardName() {
      var rank = this.rank();
      var suit = this.suit();
      return rank && suit && (makeCard.rankNames[rank] + ' of ' + makeCard.suitNames[suit]);

    }


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
      return (thing.rank === makeCard.rank) && makeCard.isValid(thing.id,0,51)
    };

    
    makeCard.fullSet = [];//<-- fill me
    for (i = 0; i < 52; i++) {
    makeCard.fullSet.push(makeCard(i));
    };



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!


// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;