// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = 
    (function () { 

	function makeDeque(values) {

	// These vars are private, local to scope of makeDeque,
	//  only accessible to functions defined in makeDeque:
	var array = values.slice(); //copy values
	
	var absent = []; //list of missing elements


	// Each function below is specific to one deque, with access to the private vars

	// ---- Internal use only ----
	function readmit(val) {
		var get = absent.indexOf(val);
		var getCompare = get < 0;
		if (get>=0) {
			absent.splice(get, 1);
			return true;
		}
	}

	function pop() {
		var popped = array.pop();
		absent.push(popped);
		return popped;
	}

	function push(val) {
		if (readmit(val)) {
			return array.push(val);
		}
	}
	function shift() {
		absent.push(array[0]);
		return array.shift();
	}

	function unshift(val) {
		if(readmit(val)) {
 			return array.unshift(val);
		}
	}

	function cut() {
	var fullLength = array.length;
	var counter = Math.ceil(fullLength/2);
	var backHalf =array.slice(counter);
	var frontHalf =array.slice(0, counter);
	array= backHalf.concat(frontHalf);
	}

	function sort(compareVal) {
		return array.sort(compareVal);
	}

	function map(convertVal) {
		return array.map(convertVal);
	}

	// ---- Public instance methods: -----

	function top() {
		return array[array.length-1];
	}

	function bottom() {
		return array[0];
	}

	function arrLength() {
		return array.length;
	}
	// etc...


	return { //one deque instance...
			top : top,
			bottom : bottom,
			length: arrLength,
			pop: pop,
			push: push,
			shift: shift,
			cut: cut,
			map: map,
			sort: sort,
			readmit: readmit
			};
	}
	return makeDeque;
 //return factory function, product of IIFE's work
})();

// Part b): Turn this file into an IIFE module!
