// Different methods of modifying properties  in a jscript object
// 1. Creating a whole new object
let person = {
  name: "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
};
let person3 = {
  name: "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
  isAdmin: true,
};
// 2. using the dot notation

let person4 = {
  name: "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
};
person4.isAdmin = true;

// you can also use the dot notation to modify properties in an object

let person5 = {
  name: "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
};
person.isAdmin = false;
person.name = "new";
console.log(person);

// how to delete properties in an object

let person = {
  name: "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
};
delete person.friends;
console.log(person);

// how to use special keys in objects

let person_obj = {
  name: "Jamal",
  age: 46,
};

// insert special key

let person_obj2 = {
  "last name": "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
};

// Accessing properties with square brackets

let person_obj3 = {
  "last name": "Winston",
  age: 30,
  friends: ["Sheilla", "Melvin", "Tevin"],
  greet: function () {
    alert("Alert coded by winston");
  },
};
// console.log(person_obj3.last name); Would not be valid javascript code

console.log(person_obj3["last name"]);

// How to Dynamically set properties

const carName = "Ford";
let car = {
  "model name": "f150",
  age: 7,
  [carName]: "mistubishi",
};
console.log(car);

// Note: By not wrapping the carName in a square bracket, the property
// with the name carName will be created and added instead of the value
// stored inside the const or var

// Shorthand for adding methods to properties

//traditionally you would need a key and a value to create the values as
// a method using the function() keyword.

let product = {
  name: "Peanut",
  shelf_age: 7,
  properties: ["brown", "viscous", "edible"],
  marketme: function () {
    return this.properties;
  },
};
console.log(product.marketme());

/* In the above code, the method is created with a function keyword after  a colon. Alternatively, you could do this: */

let productSh = {
  name: "Peanut",
  shelf_age: 7,
  properties: ["brown", "viscous", "edible"],
  marketmeSh() {
    return this.properties;
  },
};
