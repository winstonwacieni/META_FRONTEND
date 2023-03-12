var bird = {
  hasWings: true,
  canFly: true,
  hasFeather: true,
};

var eagle1 = Object.create(bird);
console.log("Eagle: ", eagle1);

console.log("Eagle 1 has wings: ", eagle1.hasWings);
