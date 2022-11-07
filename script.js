let daysLeft = document.querySelector("#days");
let strikePrice = document.querySelector("#strike");
let premium = document.querySelector("#prem");

let calcBtn = document.querySelector("#btn");

let periodP = document.querySelector("#period");

let month = document.querySelector("#month");
let collateral = document.querySelector("#collateral");
let premiumCollect = document.querySelector("#premium");

let yearP = document.querySelector("#year");
var periodRtn, yearRtnFull;

// function calculateReturn(event) {
//   console.log(daysLeft.value);
//   // console.log(strikePrice.value);
//   // console.log(premium.value);
//   let periodRtn = ((premium.value / strikePrice.value) * 100).toFixed(2);
//   periodP.innerHTML = "Return on period: " + periodRtn + "%";
//   let periodRtnNumb = +periodRtn;
//   let dsjkvbad = periodRtnNumb / 100;
//   //console.log(dsjkvbad);
//   let yearRtn = Math.pow(1 + dsjkvbad, 1 / (daysLeft.value / 365)) - 1;
//   let yearRtnFull = (yearRtn * 100).toFixed(2);
//   //console.log(yearRtn);
//   let monthRtn = (yearRtnFull / 12).toFixed(2);
//   month.innerHTML = "Return per month: " + monthRtn + "%";
//   yearP.innerHTML = "Return accross the year: " + yearRtnFull + "%";
//   event.preventDefault();
//   event.returnValue = false;
// }

function calcRtnOnPeriod(a, b) {
  a = premium.value;
  b = strikePrice.value;
  periodRtn = ((a / b) * 100).toFixed(2);
  return (periodP.innerHTML = "Return on period: " + periodRtn + "%");
}

function calcRtnPerYear() {
  let periodRtnNumb = +periodRtn;
  let periodRtnNumbDiv100 = periodRtnNumb / 100;
  let yearRtn =
    Math.pow(1 + periodRtnNumbDiv100, 1 / (daysLeft.value / 365)) - 1;
  yearRtnFull = (yearRtn * 100).toFixed(2);
  return (yearP.innerHTML = "Return accross the year: " + yearRtnFull + "%");
}
function calcRtnPerMonth() {
  let monthRtn = (yearRtnFull / 12).toFixed(2);
  return (month.innerHTML = "Return per month: " + monthRtn + "%");
}

function collateralNeeded() {
  return (collateral.innerHTML =
    "Collateral Needed: $" + strikePrice.value * 100);
}
function premiumCollected() {
  return (premiumCollect.innerHTML =
    "Premium collected: $" + premium.value * 100);
}

function calculateAll(event) {
  event.preventDefault();
  calcRtnOnPeriod();
  calcRtnPerYear();
  calcRtnPerMonth();
  collateralNeeded();
  premiumCollected();
}
