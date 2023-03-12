function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} ice cream has melted`);
  };
}

let KiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
