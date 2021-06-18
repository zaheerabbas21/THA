// first question
function is_array(arr) {
  return Array.isArray(arr);
}
console.log(is_array([1, 2]));
// second question
function array_clone(arr) {
  var clone = arr.slice();
  return clone;
}
console.log(array_clone([1, 2]));
// third question
function first(arr, n = 1) {
  var clone = arr.slice(0, n);
  return clone;
}
console.log(first([], 3));
// fourth question
function to_string(arr, n = 1) {
  var clone = arr.join();
  var clone2 = arr.join("+");
  console.log(clone, "\n", clone2);
}
