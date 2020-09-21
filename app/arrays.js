exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {    
    return arr.reduce((acc, curr) => (acc + curr));
  },

  remove: function(arr, item) {
    return arr.filter(i => i !== item );
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length; i >= 0; i--) {
      if (arr[i] === item)
        arr.splice(i, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    const count = arr.filter(i => i === item).length;
    return count;
  },

  duplicates: function(arr) {
    const seen = {};
    const twins = [];

    for (let i = 0; i < arr.length; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }
  
    for (let item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        twins.push(+item);
      }
    }
  
    return twins;
  },

  square: function(arr) {
    const secArr = arr.map( i => i*i);
    return secArr;
  },

  findAllOccurrences: function(arr, target) {
    const secArr = [];
    for(let i = 0; i < arr.length; i++)
    {
      if (arr[i] === target)
        secArr.push(i);
    }
    return secArr;
  }
};
