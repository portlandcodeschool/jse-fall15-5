// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

var makeDeque = (function() {
  function make(values) {
	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(); //copy values
	var absent = []; //list of missing elements


	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) {
      var foundAt = this.absent.indexOf(val);
      if (foundAt < 0) // -1 if not found
        return false;
      // else found; excise from absent array
      this.absent.splice(foundAt,1);
      return true;
	}
  
    function convertValFn(val) {
      return val * 2;
    }
  
    function compareValsFn(a,b) {
      return a - b;
    }

	// ---- Public instance methods: -----

	function top() {
      return this.array[this.array.length - 1];
	}

	function bottom() {
      return this.array[0];
	}

	function pop() {
      if (this.array.length > 0) {
        return this.array.pop();
      } else {
          return undefined;
        }
	}

	function push(val) {
      return this.array.push(val);
	}
  
    function shift() {
      if (this.array.length > 0) {
        return this.array.shift();
      } else {
          return undefined;
        }
	}

	function unshift(val) {
      return this.array.unshift(val);
	}
  
    function cut() {
      if (this.array.length > 1) {
        // cuts off left half of array
        var left = this.array.splice(0, Math.floor(this.array.length / 2)); 
        // pastes left half onto the end of the right half
        var cutArray = this.array.concat(left); 
        // sets instance array to the new, re-ordered array
        return this.array = cutArray; 
      }
	}

	function map() {
      return this.array.map(convertValFn);
	}

    function sort(compareValsFn) {
      return this.array.sort(compareValsFn);
	}

	function shuffle(array) {
      var random = array.map(Math.random);
      array.sort(function(a, b) {
        return random[a] - random[b];
      });
	}

	return { //one deque instance...
			top : top,
			bottom : bottom,
            pop: pop,
            push: push,
            shift: shift,
            unshift: unshift,
            cut: cut,
            map: map,
            sort: sort,
            shuffle: shuffle
	};
  } //end make

})();//end makeDeque


// Part b): Turn this file into an IIFE module!
