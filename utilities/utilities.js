var utilities = {};

utilities.isArray = Array.isArray || function(arr) {

 return Object.prototype.toString.call(arr) === '[object Array]';

};

utilities.by = function(list, n, callback) {
  var listLength = list.length;
	for(var i = 0; i < listLength; i+=n) {
			callback(list[i]);
	}
};

utilities.keys = function(pass) {
  return(Object.keys(pass));
};


utilities.values = function(pass) {
  return(Object.values(pass));
};

utilities.pairs = function(pass) {
  var pairs = [];
  var length = Object.keys(pass).length;
  for(var i = 0; i < length; i++) {
    pairs.push(Object.keys(pass)[i]);
    pairs.push(Object.values(pass)[i]);
  }
  return pairs;
};

utilities.shuffle = function(array) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
};

utilities.pluralize = function(n, word, pluralWord) {
  if( n === 1) {
    return word;
  } else {
    if(pluralWord) {
      return pluralWord;
    } else {
      return word + "s";
    }
  }
};

utilities.toDash = function(input) {
  
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  input = input.split("");
  var mod = [];
  input.forEach(function(element) {
    if(upper.indexOf(element) > -1) {
        mod.push("-" + element.toLowerCase());
    } else {
      mod.push(element);
    }
  });
  return mod.join("");

};
    
utilities.toCamel = function(string) {
  var mod = [];
  var newStr = string.split("");
  for(var i = 0; i < newStr.length; i++) {
    if(newStr[i] === "-") {
      i++;
      mod += newStr[i].toUpperCase();
    } else {
      mod += newStr[i];
    }
  }
  return mod;
};

utilities.has = function(obj, search) {
  var values = utilities.values(obj);
  if(values.indexOf(search.toString()) > -1) {
    return true;
  } else {
    return false;
  }
};

utilities.pick = function(obj, keys) {
  var pairs = [];
  var length = keys.length;
  for(var i = 0; i < length; i++) {
    if(Object.keys(obj).indexOf(keys[i]) > -1) {
      pairs.push(Object.keys(obj)[i] + ": " + Object.values(obj)[i]);
    }
  }
  return pairs;
};

// Example for toDash and toCamel

// console.log(utilities.toDash("yeahThisIsIt"));
// console.log(utilities.toDash("yeah-this-is-it"));


// Example for utilities.key & utilities.values & utilities.pairs & utilities.has & utilities.pick

// setInterval(randomNumber,1000);

// var newObject = {
//   name: "Jacob",
//   age: "27",
//   state: "arizona"
// }

// console.log(utilities.pairs(newObject));
// console.log(utilities.keys(newObject));
// console.log(utilities.values(newObject));
// console.log(utilities.has(newObject, 27));
// console.log(utilities.pick(newObject, ["name","state","state"]));

// Example for utilities.by

// var longlist = [1,2,3,4,5,6,7,8];

// utilities.by(longlist, 2, function(item) {
//   console.log(item);
// });