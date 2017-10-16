var numberinput = parseInt(prompt("Please enter a number between 2 and 10:"));

if (numberinput === null || (numberinput < 2 || numberinput > 10)) {
  document.write("<span class='red'>Your input is " + numberinput + "." ,"The valid input number is between 2 and 10. Please reload and try again.");
} else {
  solve = numberinput / 2
  calculateAnswer();
}