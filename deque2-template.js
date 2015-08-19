// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:

var makeDeque =	(function() {
	function makeDeque(values) {

		// These vars are private, local to scope of makeDeque,
		//  only accessible to functions defined in makeDeque:
		//var array = values.slice(); //copy values
		var absent = []; //list of missing elements


		// Each function below is specific to one deque, with access to the private vars

		// ---- Internal use only ----
		function readmit(val) {
			//...
		}

		// ---- Public instance methods: -----

		function arrLength() { 	// can't use property named length;
						// as a function, makeDeque has a predefined length property.
			return this.array.length;
		}

		function top() {
			return this.array[this.array.length-1];  // undefined if length is 0
		}

		function bottom() {
			return this.array[0]; //undefined if length is 0
		}

		 function cut() {
			var fullLength = this.array.length;
			var headLength = Math.ceil(fullLength / 2);
			if (headLength == fullLength) // no tail, nothing to swap
				return 0;
			var tail = this.array.splice(headLength, fullLength); // removes tail from array
			this.array = tail.concat(this.array); // swap tail and remaining head
			return tail.length;  //returns # elements moved from upper half to lower (0 if no change)
		}

		function pop() {
			var val = this.array.pop();
			if (val !== undefined)
				this.absent.push(val);  //part e)
			return val;
		}

		function push(val) {
			return this.readmit(val) && //part e)
				this.array.push(val);
		}

		function shift() {
			var val = this.array.shift();
			if (val !== undefined)
				this.absent.push(val); //part e)
			return val;
		}

		function unshift(val) {
			return this.readmit(val) && //part e)
				this.array.unshift(val);
		}

		function map(convertValFn) {
			return this.array.map(convertValFn);
		}

		function sort(compareValsFn) {
			return this.array.sort(compareValsFn);
		}

		// etc...


		return { //one deque instance...
				top : top,
				bottom : bottom,
				//etc
				length  : arrLength,
				push    : push,
				pop     : pop,
				shift   : shift,
				unshift : unshift,
				sort    : sort,
				cut     : cut,
				map     : map
		};

	} //end makeDeque
})(); //end IIFE


var mj = makeDeque(23)


// Part b): Turn this file into an IIFE module!
