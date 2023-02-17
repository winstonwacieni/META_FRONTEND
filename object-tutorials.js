// Different methods of modifying properties
// 1. Creating a whole new object
const person = {
  name: "Chicago",
  age: 30,
  friends: ["Mary", "jane", "mali"],
  greet: function () {
    alert("Hello World");
  },
};
person.isAdmin = true;
person.name = "christine";
console.log(person);
