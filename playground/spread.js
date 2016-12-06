// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Ajit', 'Shiwani'],
//     groupB = ['Shushant', 'Robin'],
//     final = [...groupB, 3, ...groupA];
//
// console.log(final);

// Challenge one
var person = ['Aakash', 22],
    personTwo = ['Ajit', 24];
// Final expectation: Hi Aakash, you are 22

function greet(name, age) {
  return 'Hi ' + name + ', you are ' + age;
}
console.log(greet(...person));
console.log(greet(...personTwo));

// Challenge two
var names = ['Ajit', 'Shiwani'],
    final = ['Aakash', ...names];

console.log('------------------------------');
console.log(final);
final.forEach(function(name) {
  console.log('Hi ' + name);
});
