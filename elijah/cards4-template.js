var makeCard =
    (function () {

    function makeCard(id) {
        // return a card instance
        if (!(checker(id))) return null;

        return {
            id: id,
            name: cardName,
            color: color,
            suit: suit,
            rank: rank
        }
    };

//--------------------------
// Private resources (internal use only)
//--------------------------
    
    // card info arrays
    var suits = ['Hearts','Diamonds','Spades','Clubs'];
    var cards = ['Ace','Two','Three','Four','Five','Six','Seven',
                'Eight','Nine','Ten','Jack','Queen','King'];

    function checker(input) {
        // check for valid input
        if (typeof(input) === 'number' && (!(input%1)) && input >=0 && input <52) {
            return true;
        }
        return false;
    }

//-----------------------
// Instance Methods:
//-----------------------

    function rank() {
        return Math.floor(this.id/4) + 1;
    }

    function suit() {
        return (this.id%4) + 1;
    }

    function color() {
        return (this.suit() < 3) ? 'red' : 'black';
    }

    function cardName() {
        var s = this.suit() - 1;
        var r = this.rank() - 1;
        return cards[r] + ' of ' + suits[s];
    }

//-----------------------
// Factory Methods/Data:
//-----------------------

    makeCard.isCard = function(thing) {
        // check if thing is a valid card object
        props = ['id', 'rank', 'suit', 'color', 'name'];
        for (i = 0; i < props.length; i++) {
            if (!(thing.hasOwnProperty(props[i]))) return false;
        }
        return true;
    };
    
    // build deck of cards
    makeCard.fullSet = [];
    for (i = 0; i < 52; i++) {
        makeCard.fullSet.push(makeCard(i));
    }

    return makeCard;

})();


// Export as node-style module, to make testing your code easier.
// (If you don't understand this line, you may ignore it.)
if (typeof module != 'undefined')
    module.exports = makeCard;
