// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = (function(){
	function makeDeque(values) {


		// These vars are private, local to scope of makeDeque,
		//  only accessible to functions defined in makeDeque:
		var array = values.slice(); //copy values
		var absent = []; //list of missing elements


		// Each function below is specific to one deque, with access to the private vars

		// ---- Internal use only ----
		function readmit(val) {
			var valIndex = absent.indexOf(val);
			if (valIndex>=0){
				absent.splice(valIndex,1);
				return true;
			}
		}

		// ---- Public instance methods: -----

		function top() {
			return array[array.length-1];

		}

		function bottom() {
			return array[0];
		}

		function pop() {
			if (array.length===0) {
				return null;
			}
			var popped = array.pop();
			absent.push(popped);
			return popped;
		}

		function push(val){
			if (readmit(val)){
				return array.push(val);
			}
		}

		function unshift(val) {
			if (readmit(val)){
				return array.unshift();
			}
		}

		function shift() {
			if (array.length===0) {
				return null;
			}
			var shifted = array.shift();
			absent.push(shifted);
			return shifted;
		}

		function cut() {var middle;
			if (array.length<2) {
				return array;
			} else {
				middle = Math.ceil(array.length/2);
			}

			var halfA = array.slice(middle, array.length);
			var halfB = array.slice(0, middle);
			array = halfA.concat(halfB);

		}

		function map(convertValFn) {
			return array.map(convertValFn);
		}

		function sort(compareValsFn) {
			return array.sort(compareValsFn);
		}

		function inPlaceShuffle(array) {
		  var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
		  }

		  return array;
		}
		// etc...


		return { //one deque instance...
				top : top,
				bottom : bottom,
				pop : pop,
				push: push,
				shift : shift,
				unshift : unshift,
				cut : cut,
				map : map,
				sort : sort,
				goodShuffle : inPlaceShuffle
				//etc
		};

	} //end makeDeque
	return makeDeque;
})();

// Part b): Turn this file into an IIFE module!
