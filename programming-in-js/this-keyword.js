// This Keyword
// most important when used inside a function in an object
/* this is a powerful keyword used in referencing the current object in which it's used.
 */

let gadget = {
  name: "toaster",
  age: 7,
  task: function () {
    return `This device is a ${this.name}, and its age is ${this.age} years old`;
  },
};
console.log(gadget.task());

// different use case

let dragon = {
  name: "Bellarion",
  age: 400,
  power() {
    return `my name is ${this.name}, my age is ${this.age} years old d`;
  },
};
console.log(this);

// done with fobjects
