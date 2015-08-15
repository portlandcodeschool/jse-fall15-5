// part 2a and 2b
var makeDeque = (function() {
    function makeDeque(values) {
        // private vars
        var deque = values.slice();
        // copy of removed items
    	var dropped = [];
        // end private vars
    
        // local helper functions
        function checker(val) {
            // check for valid input for deque
            if (dropped.indexOf(val) !== -1) {
                dropped.splice((dropped.indexOf(val)),1);
                return true;
            } else {
                return false;
            }
        }
    
        // end local functions
    
        // methods
    	function top() {
            // return 'top' value in deque
            return deque[0];
    	}
    
    	function bottom() {
            // return 'bottom' of deque
            return deque[deque.length - 1];
    	}
    
        function arrLength() {
            // return length of deque
            return deque.length;
        }
    
        function cut() {
            // cut deck in half
            var mid = Math.round(this.arrLength()/2);
            var a = deque.slice(mid);
            var b = deque.slice(0,mid);
            deque = a.concat(b);
        }
    
        function shuffle() {
            // proper shuffle
            // http://bost.ocks.org/mike/shuffle/
            var len = deque.length, t, i;
            while (len) {
                i = Math.floor(Math.random() * len--);
                t = deque[len];
                deque[len] = deque[i];
                deque[i] = t;
            }
        }
    
        function pop() {
            // remove and return 'top' element
            if (deque.length !== 0) {
                var p = deque.splice(0,1)[0];
                dropped.push(p);
                return p;
            } else {
                return undefined;
            }
        }
    
        function push(val) {
            // push any number of val onto end of deque
            for (i = 0; i < arguments.length; i++) {
                if (checker(arguments[i])) {
                    deque.splice((deque.length),0,arguments[i]);
                } else {
                    return null;
                }
            }
            return this.arrLength();
        }
    
        function shift() {
            // remove and return 'bottom'
            if (deque.length !== 0) {
                var s = deque.splice((deque.length - 1),1)[0];
                dropped.push(s);
                return s;
            } else {
                return undefined;
            }
        }
    
        function unshift(val) {
            // add val to 'bottom' and return new length
            if (checker(val)) {
                deque.splice((deque.length),0,val);
                return this.arrLength();
            } else {
                return null;
            }
        }
    
        function map(convert) {
            // return array generated from convert
            return deque.map(convert);
        }
    
        function sort(compare) {
            // reorder deque with compare
            deque.sort(compare);
        }
    
        // end methods
    
    	return {
    		top : top,
    		bottom : bottom,
            arrLength: arrLength,
            cut: cut,
            shuffle: shuffle,
            pop: pop,
            push: push,
            shift: shift,
            unshift: unshift,
            map: map,
            sort: sort
    	};
    
    } //end makeDeque
    return makeDeque;
})();

// export as module
if (typeof module != 'undefined')
    module.exports = makeDeque;
