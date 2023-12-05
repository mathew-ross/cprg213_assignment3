/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let clickedDays = 0;
let dayButton = document.getElementsByClassName('day');
let clearButton = document.getElementById('clear-button');
let fullDay = document.getElementById('full');
let halfDay = document.getElementById('half');
let rate = 35;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i=0; i < 5; i++) {
  dayButton[i].addEventListener('click', function () {
    if (dayButton[i].classList.contains('clicked') === false) {
      dayButton[i].classList.add('clicked');
      clickedDays += 1;
    }
    updateCost();
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', clearDays);

function clearDays() {
  clickedDays = 0;
  for (let i=0; i<5; i++) {
    if (dayButton[i].classList.contains('clicked') === true) {
      dayButton[i].classList.remove('clicked');
    }
  }
  updateCost();
}
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener('click', function() {
  fullDay.classList.remove('clicked');
  halfDay.classList.add('clicked');
  rate = 20;
  updateCost();
});
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', function() {
  halfDay.classList.remove('clicked');
  fullDay.classList.add('clicked');
  rate = 35;
  updateCost();
});
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
  let totalCost = 0;
  for (let i=0; i < 5; i++) {
    if (dayButton[i].classList.contains('clicked') === true) {
      totalCost += rate;
    }
  }
  let calcCost = document.getElementById('calculated-cost');
  calcCost.innerHTML = totalCost;
}