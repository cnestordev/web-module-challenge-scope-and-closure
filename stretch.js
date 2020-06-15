//stretch 1
const style = 'background: #2c56d3; color: white; padding: 2px;';
console.log('%c **************** stretch 1 ***************************', style);

(function () {
  var a = (b = 3);
})();
console.log('a defined? No ' + (typeof a !== 'undefined'));
console.log('b defined? Yes ' + (typeof b !== 'undefined'));

// Because variable a is scoped inside of a function, and console.log is being invoked in the global context, the log method will not have access to a.
// Because variable b was never declared either inside of the function in which it was assigned, nor in the outer scope, it will be assigned automatically to the global context and thus, console.log will have access to it.

console.log('%c **************** stretch 2 ***************************', style);

function createBase(base) {
  return function addSix(num) {
    return base + num;
  };
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
