var makeCard = // receive factory with external name `makeCard`
    (function () { //begin IIFE...

    // The factory itself:
    function makeCard(id) {  //makeCard is also IIFE's internal name
        // set instance properties here
        //...    
        return instance = {
        rank : rank,
        suit : suit,
        color : color,
        name : cardName,
        id : id
        };
        // and return instance...
    return instance;
    };


//--------------------------
// Private resources (internal use only)
//--------------------------

    // Examples:

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

    //etc...
    function color() { // -->"red,"black",NaN
        // code here...
        var suit=this.suit(this.id);
            return suit && ((suit<3)? "red": "black");
    };

    function cardName() { //--> string, NaN
        // This method can't have the key 'name' within the makeCard function,
        // but instance objects can store a reference to it called 'name'

        rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                    'Jack','Queen','King'];

        suitNames = ['','Hearts','Diamonds','Spade','Clubs'];

        // code here...
        var rank = this.rank(this.id);
        var suit = this.suit(this.id);
        return rank && suit && (rankNames[rank]+' of '+suitNames[suit]);
    };


//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(id) {
       if ((typeof id)!=='number') //wrong type
            return false; 
        if (id%1 !== 0) //non-integer
            return false;
        if (id<1 || id>51) //out of range
            return false;
        return true
    };

    makeCard.fullSet = [];//<-- fill me
    for (id=0; id < 52; id++) {
        makeCard.fullSet.push(makeCard(id));
    }


    return makeCard;  //return factory function, product of IIFE's work

})(); //end IIFE definition and run it now!


// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;

var mj = makeCard(23);