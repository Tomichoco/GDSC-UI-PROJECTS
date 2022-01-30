triangleArea = (base, height) => {
    return triangleArea = (base * height / 2);
}
console.log("The area of this triangle is " + triangleArea(8, 9));

let favoriteFruits = ["Watermelon", "Cucumber", "Pineapple"];
console.log(favoriteFruits);
let stringVariable = favoriteFruits.toString();
console.log("This array has been stringified:" + stringVariable);

favoriteFruits.splice(0, 2);
console.log(favoriteFruits);

favoriteFruits.unshift("Carrot");
console.log(favoriteFruits);

let myArray = ["UI", "Unilag", "Lautech", "Futa", "Fuoye", "Babcock", "Uniosun", "Kwasu"];
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.splice(6, 0, "Bowen", "Covenant");
console.log(myArray);

let myString = myArray.toString();

