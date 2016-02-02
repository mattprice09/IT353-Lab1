// Prompt user for input
var promptUser = function() {
	var fName = prompt("Please enter your first name", "John");
	var lName = prompt("Please enter your last name", "Cena");

	if (fName != null && lName != null) {
		alert("Hello " + lName + ", " + fName + "! Welcome to ITK353.");
	}
}

// Toggle the display of the selected answer in the Assignments section
var showAnswer = function(id) {
	var elem = document.getElementById(id);
	var curr = elem.style.display;

	// Hide all other answer panels
	var answer_elements = document.getElementsByClassName('assignment-answer');
	for (var i = 0; i < answer_elements.length; i++) {
		answer_elements[i].style.display = "none";
	}

	// Hide text if it's already showing
	if (curr != "block") {
		elem.style.display = "block";
	} else {
		elem.style.display = "none";
	}
}

function testScores() {
	var num = parseInt(prompt("Enter the # of students:"));
	if (num == 0) {
		return;
	}
	while (isNaN(num)) {
		// Loop until user enters a number
		num = parseInt(prompt("Invalid input. Enter the # of students:"));
	}
	var scores = [];
	var min = promptScore(0);
	var max = min;
	var avg = min;
	for (var i = 1; i < num; i++) {
		var sc = parseInt(prompt("Enter the score for student # " + (i + 1)));
		while (isNaN(sc)) {
			// Loop until user enters a number
			sc = parseInt(prompt("Invalid input. Enter the score for student # " + (i + 1)));
		}
		min = Math.min(min, sc);
		max = Math.max(max, sc);
		avg += sc;
		scores.push(sc);
	}
	avg = avg / num;
	
	// Alert user with min, max, avg, and above avg scores
	var output = "Lowest: " + min + "\nHighest: " + max + "\nAverage: " + avg + "\nAbove Average Scores: \n  ";
	for (var j = 0; j < num; j++) {
		if (scores[j] > avg) {
			output += scores[j] + ", ";
		}
	}
	alert(output.slice(0,-2));
}

function promptScore(i) {
	var sc = parseInt(prompt("Enter the score for student # " + (i + 1)));
	while (isNaN(sc)) {
		// Loop until user enters a number
		sc = parseInt(prompt("Invalid input. Enter the score for student # " + (i + 1)));
	}
	return sc;
}