const { default: TestRunner } = require("jest-runner");
const addFive = require ('./addFive.js');

test(' returns the numbe plus 5', ()=>{
  expect (addFive(1)).toBe(6)
})
