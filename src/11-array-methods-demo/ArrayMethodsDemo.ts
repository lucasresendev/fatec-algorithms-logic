/**
 * Problem Statement:
 * Practice typed 1D arrays in TypeScript: zero-based indexing, .length, accessing the last element,
 * modifying both ends with pop, unshift, push, and shift, and iterating with a size-agnostic for loop.
 */

// 1. Declaration
let movies: string[];
let colors: string[];
let lastMovie: string;
let isLogged: boolean;

// 2. Initialization
movies = [];
colors = [];
lastMovie = "";
isLogged = true;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("       Array Indexing and Core Methods Demo");
console.log("==================================================");

movies = ["The Lord of the Rings", "A Clockwork Orange", "The Matrix", "Gandhi"];

console.log("Initial list:", movies);
console.log("Element at index 1:", movies[1]);
console.log("Total items (.length):", movies.length);
console.log("Last element (movies[movies.length - 1]):", movies[movies.length - 1]);

// pop(): removes and returns the last element
lastMovie = movies.pop()!;
console.log("\nAfter pop(): removed ->", lastMovie);
console.log("Movies now:", movies);

// unshift(): inserts an element at the beginning
movies.unshift("Gandhi");
console.log("\nAfter unshift('Gandhi'):", movies);

// push(): appends an element at the end
movies.push("Interstellar");
console.log("After push('Interstellar'):", movies);

// shift(): removes the first element
movies.shift();
console.log("After shift():", movies);

// Size-agnostic traversal using .length
console.log("\nSize-agnostic traversal (colors):");
colors = ["red", "green", "blue"];
for (let index: number = 0; index < colors.length; index++) {
    console.log("The element at index " + index + " is " + colors[index] + ".");
}

// Control flag example discussed in class alongside arrays
console.log("\nControl flag example -> isLogged:", isLogged);
console.log("==================================================\n");
