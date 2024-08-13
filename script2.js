"use strict";

let hours = 45;
let wages = 10;
let regularHours = 40;
let overtimePayRate = 1.5;
let paycheck;

if (hours <= regularHours) {
  paycheck = hours * wages;
} else {
  let overtimeHours = hours - regularHours;
  paycheck = regularHours * wages + overtimeHours * wages * overtimePayRate;
}
console.log("The paycheck amount is: $" + paycheck + ".");

let million = 1000000;
let weeks = Math.ceil(million / paycheck);
console.log("It will take " + weeks + " weeks to earn $" + million + ".");
