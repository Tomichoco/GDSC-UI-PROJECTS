let favoriteFruits = ["Watermelon", "Cucumber", "Pineapple"]; // I created an array of elements//
console.log(favoriteFruits);
let stringVariable = favoriteFruits.toString(); // I converted the array of elements into a string using ".toString()"//
console.log("This array has been stringified:" + stringVariable);

favoriteFruits[0] = "Tangerine";
favoriteFruits[1] = "Apple";
console.log(favoriteFruits); // I modified the first and second elements in the array using simple bracket and assignment array method and the zeroth based indexing//



let myArray = ["UI", "Unilag", "Lautech", "Futa", "Fuoye", "Babcock", "Uniosun", "Kwasu"]; // I created an array//
console.log(myArray);
myArray.pop(); // I removed the last element of the array//
console.log(myArray);
myArray.splice(6, 0, "Bowen", "Covenant"); // I removed the last(7th) element, deleted none and addded two new elements
console.log(myArray);

let myString = myArray.join("-"); // I converted this area into a string with a separator//
console.log(myString);