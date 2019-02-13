function range(start, end, step) {
  var rangeArr = [];
  var step = step || 1; 
  
  if (start < end) {
    for (var i = start; i <= end; i += step) {
      rangeArr.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      rangeArr.push(i);
    }
  }
  return rangeArr;
}

function sum(arr) {
  return arr.reduce((sum, curr) => sum + curr);
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
