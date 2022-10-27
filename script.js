let daysLeft = document.querySelector("#days");
let strikePrice = document.querySelector("#strike");
let premium = document.querySelector("#prem");

let calcBtn = document.querySelector("#btn");

let periodP = document.querySelector("#period");

let month = document.querySelector("#month");

let yearP = document.querySelector("#year");

function calculateReturn(event) {
  console.log(daysLeft.value);
  // console.log(strikePrice.value);
  // console.log(premium.value);
  let periodRtn = ((premium.value / strikePrice.value) * 100).toFixed(2);
  periodP.innerHTML = "Return on period: " + periodRtn + "%";
  let periodRtnNumb = +periodRtn;
  let dsjkvbad = periodRtnNumb / 100;
  //console.log(dsjkvbad);
  let yearRtn = Math.pow(1 + dsjkvbad, 1 / (daysLeft.value / 365)) - 1;
  let yearRtnFull = (yearRtn * 100).toFixed(2);
  //console.log(yearRtn);
  let monthRtn = (yearRtnFull / 12).toFixed(2);
  month.innerHTML = "Return per month: " + monthRtn + "%";
  yearP.innerHTML = "Return accross the year: " + yearRtnFull + "%";
  event.preventDefault();
  event.returnValue = false;
}
