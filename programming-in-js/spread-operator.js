// the object spread operator
/* The object spread operator is a popular and powerful syntax in JavaScript. The spread operator takes all the key-value pairs of an object and copies the key name and value into a new object.

An object is a reference value, and if you want a copy of the object without pointing to the same property in memory, the spread operator is the answer.*/

let produtSpread = {
  name: "Butter",
  shelf_age: 4,
  properties: ["yellow", "artificial", "hydrogeneted"],
};
console.log(produtSpread);
// declare the new object as a constant and copy the object
const produtSpread2 = { ...produtSpread };

/* The syntax for object spread operator goes between the opening and closing brackets. Then there should be three dots and the object you want to spread into this object.*/
