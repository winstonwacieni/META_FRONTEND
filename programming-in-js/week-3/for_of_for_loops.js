// built in Object methods

// the Object.keys() method

const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2));

// the Object.values method

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3));

// the Object.entries method

const car4 = {
  speed: 400,
  color: "mangeta",
};
console.log(Object.entries(car4));

// combined

var csCourse = {
  algorithims: true,
  units: 50,
  years: 4,
  mode: "full",
};
for (key of Object.keys(csCourse)) {
  console.log(keys, ":", clothingItem[key]);
}

// more test

function testBracketsDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
