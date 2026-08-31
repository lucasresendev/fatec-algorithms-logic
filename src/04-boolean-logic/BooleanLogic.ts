// PROBLEM
// Demonstrate boolean algebra and logical operators (AND, OR, NOT) using boolean variables.

let a: boolean;
let b: boolean;
let c: boolean;

a = false;
b = true;
c = true;

console.log("'a' and 'b' are true? " + (a && b));
console.log("'b' and 'c' are true? " + (b && c));
console.log("'a' or 'b' is true? " + (a || b));
console.log("If 'b' is inverted, 'a' or 'b' is true? " + (a || !b));
