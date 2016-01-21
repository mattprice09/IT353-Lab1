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