/* Object Destructuring
Object destructuring is an important feature in JavaScript that allows you to pull out values from an object and assign them to individual variables.

To perform object destructuring, you use a destructuring pattern on the left-hand side of an assignment statement, and the object that you want to extract values from on the right-hand side. For example: */

const house = { type: "apartment", price: 5000 };
const { house, type } = houseType;
console.log(houseType);
console.log(house.price);
