// Part a): modify factory to use non-shared (instance-specific) methods
//  which have access to private variables:
var makeDeque = // receive factory with external name `makeDeque`
  (function () {
		function makeDeque(values) {

			// These vars are private, local to scope of makeDeque,
			//  only accessible to functions defined in makeDeque:
			var values = values.slice(); //copy values
			var discardPile = []; //list of missing elements


			// Each function below is specific to one deque, with access to the private vars

			// ---- Internal use only ----
			function isInArray(value) {
				for (i=0; i < discardPile.length; i++){
					if (discardPile[i].id === value.id)
						return true;
				}
				return false;
			}

			function removeFromDiscard(value){
				for (i=0; i<discardPile.length; i++)
					if (discardPile[i].id === value.id)
					return i;
			}
			// ---- Public instance methods: -----

			function arrLength(){
				return values.length;
			}

			function top() {
				return values[(values.length-1)];
			}

			function bottom() {
				return values[0];
			}

			function pop() {
				var discardPop = values.pop();
				discardPile.push(discardPop);
				return discardPop;
			}

			function push(value) {
				if (isInArray(value)) {
					discardPile.splice(removeFromDiscard(value),1);
					return values.push(value);
				} else {
					console.log("Nice try...you can't add that card.");
				}
			}

			function shift() {
				var discardShift = values.shift();
				discardPile.push(discardShift);
				return discardShift;
			}

			function unshift(value) {
				if (isInArray(value)) {
					discardPile.splice(removeFromDiscard(value),1);
					return values.unshift(value);
				} else {
					console.log("Nice try...you can't add that card.");
				}
			}

			function cut() {
				var valuesLastHalf = values.slice(Math.ceil(values.length/2));
				values.splice(Math.ceil(values.length/2));
				var values = valuesLastHalf.concat(values);
			}

			function map(convertValFn) {
			  return values.map(convertValFn);
			}

			function sort(compareValsFn) {
				values.sort(compareValsFn);
			}

			function shuffle() {
				var m = values.length;
				var t;
				var i;
				while (m) {
					i = Math.floor(Math.random() * m--);
					t = values[m];
					values[m] = values[i];
					values[i] = t
				}
				return values;
			}

			return { //one deque instance...
					length : arrLength,
					top : top,
					bottom : bottom,
					pop : pop,
					push : push,
					shift : shift,
					unshift : unshift,
					cut : cut,
					map : map,
					sort : sort,
					shuffle : shuffle
			};

		} //end makeDeque
	return makeDeque;
})();
		// Part b): Turn this file into an IIFE module!
