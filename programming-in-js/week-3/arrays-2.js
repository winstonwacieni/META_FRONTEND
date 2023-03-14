// forEach MEthod

const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// more compacts code

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${fruit}`);
});

// filter method

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20;
});

// The Map Method

[1, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});

// convert an object into an array

const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};

const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

//maps

new map();
/*A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.*/
let bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(1, "The Champion");
bestBoxers.set(1, "The Champion");
bestBoxers.set(1, "The Champion");

// sets

new Set();

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
