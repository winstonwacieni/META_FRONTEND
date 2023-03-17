const jsonStr = '{"greet":"hello"}';
const obj = JSON.parse(jsonStr);

console.log(obj.greet);

obj.greet = "Yoow";
console.log(obj.greet);

var car = { type: "Fiat", model: "500", color: "white" };

var carJson = JSON.stringify(car);
console.log(carJson);
