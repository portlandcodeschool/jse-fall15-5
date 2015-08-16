var makeCard = 
    (function () { //begin IIFE...
   
    // The factory itself:
    function makeCard(id, low, high) {  //makeCard is also IIFE's internal name
        if (typeof id!="number") {
        return null;
        }
        if(id%1 !==0) {
        return null;
        }
        if(id<low || id>high) {
        return null;
        }
    
        return {
            id: id,
            rank: rank,
            suit: suit,
            color: color,
            cardName: cardName
        
        }
    };

 
    
    

//--------------------------
// Private resources (internal use only)
//--------------------------
    // function isValidId (id, low, high) {
    //     if (typeof id!="number") {
    //     return null;
    //     }
    //     if(id%1 !==0) {
    //     return null;
    //     }
    //     if(id<low || id>high) {
    //     return null;
    //     }
    // };

   
    var suitNames = ['', 'Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var rankNames = ['', 'Ace', 'Two', 'Three','Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];



//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
        return (Math.floor(this.id/4))+1;
    }

    function suit() {
        return ((this.id)%4)+1;
    }

    function color(callback) {
        return ((this.suit() <3) ? 'red' : 'black');  
    }

    function cardName() {
        return (rankNames[this.rank()]) + ' of ' +  (suitNames[this.suit()]);
    }


//-----------------------
// Factory Methods/Data:
//-----------------------

makeCard.isCard = function(thing) { // --> true,false
        var array = ['id', 'rank', 'suit', 'color', 'cardName'];
            var i = array[i]; //the place in the array.
            for (i = 0; i <= array.length; i++) {
                if (thing.hasOwnProperty(i)=== makeCard.hasOwnProperty(i)) {
                    i+=;
                }
                else 
                return false;
    }
};
        
makeCard.fullSet = function(array) { //<-- instead, generate array of 52 
    var fullDeck = [];
    for (var i = 0; i < 52; i++) { 
        fullDeck.push(makeCard(i, 0, 51));
    }

    return fullDeck;
};

return makeCard;  //return factory function, product of IIFE's work

}()); //end IIFE definition and run it now!


// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;