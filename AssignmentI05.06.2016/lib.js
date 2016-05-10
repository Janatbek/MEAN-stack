var _ = {
   map: function(list, iteratee) {
 		var arr = [];
 		for(var key in list){
 			if(!list.hasOwnProperty(key)) continue;
 			arr.push(iteratee(list[key], key));
		}
 		return arr;
	},

   reduce: function(list, reducer){
   		var total = 0;
		var num= [];
		for ( var i = 0; i < num.length; i++ ){
    		total += num[i];
		}
	},
  find: function(arr, callback) { return callback; },
   filter: function(num, callback) { return callback; },
   reject: function(num, callback) { return callback; }
 }
// you just created a library with 5 methods!
var mapped = _.map([1,2,3], function(num) {return num * 3;})
var map2 = _.map({one: 1, two: 2, three: 3}, function(num, key) {return num * 3;});
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); 



var reduced = _.reduce([1,2,4,5], function(num){ return total += num });


console.log(reduced);
//console.log(map2);

_.reduce = function(list, iteratee, memo){
  var memoUndefined = arguments.length < 3;
  _.each(list, function(elem, index, list){
    if(memoUndefined) {
      memoUndefined = false;
      memo = elem;
    } else memo = iteratee(memo, elem, index, list);
  });
  return memo;
};

