function calculateAnswer() {
  let answer = 1;
  answer2 = numberinput / 2;
  while (answer2 > 0.000001) {
  answer2 = answer2 / 2;
    answer++;
  }
  
  document.write("Your input number is " + numberinput + ".");
  document.write("<br>")
  document.write("The number of times to divide the number " + numberinput + " by 2 to get a value less than one milllionth is " + answer + '.');
}

function printStars() {
  let stars = numberinput + 1;
  while (stars > 0) {
	document.getElementById("starsscript").style.borderStyle = "solid";
	document.getElementById("starsscript").style.borderColor = "green";
    document.write(Array(stars).join("*"));
	document.write("<br>");
    stars--;
  }
}

