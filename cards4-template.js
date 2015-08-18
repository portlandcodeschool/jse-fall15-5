var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
      if (makeCard.isValidID(id)){
        return {

          id: id,
          rank: rank,
          suit: suit,
          color: color,
          name: cardName

          }
        } else{
          return null;
     }
    };


// //-----------------------
// // Methods to be called through factory only:
// //-----------------------
makeCard.isValidID = function(id){
    return (typeof id === "number")&&(id%1===0)&&(id>=0)&&(id<=51);
};

makeCard.isCard = function(thing) {
        return (typeof thing === 'object')&&(makeCard.rank === thing.rank)&&('id' in thing)&&(makeCard.isValidID(thing.id));
};    // set instance properties here

var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'],

var suitNames = ['','Hearts','Diamonds','Spades','Clubs'],
        //...
        // and return instance...



//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

    //function isValidID(num) {...}
    //var rankNames = [...];

//-----------------------
// Instance Methods:
//-----------------------
rank = function() {
         return Math.floor(this.id/4)+1;
//  // --> 1..13
//     // code here...
 };

suit = function() {
         return ((this.id%4)+1); // --> 1..4
//     // code here...
 };

color = function() {
       var theSuit=this.suit(); //may be NaN
         return theSuit && ((theSuit<3)? "red": "black");
};

cardName = function() {
         var theRank = this.rank();
         var theSuit = this.suit();
         return theRank && theSuit &&
         (makeCard.rankNames[theRank]+' of '+makeCard.suitNames[theSuit]);
};
    //etc...


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {

    };

    makeCard.fullSet = [];//<-- fill me



    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!


// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;
