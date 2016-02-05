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
	$('.assignment-answer').css('display', 'none');

	// Hide text if it's already showing
	if (curr != "block") {
		elem.style.display = "block";
	} else {
		elem.style.display = "none";
	}
}

function HTML_5_Pane() {
	var elem = document.getElementById('html5_pane');
	var curr = elem.style.display;

	// Hide all other answer panels
	$('#html5_pane').css('display', 'none');

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

function calcPay() {
	var name = prompt("Enter the employee's name:");
	var ssn = prompt("Enter the employee's SSN:");
	while (isNaN(parseInt(ssn)) || ssn.length != 9) {
		// Loop until user enters valid ssn
		ssn = prompt("Please enter valid SSN:");
	}
	var rate = parseFloat(prompt("Enter the employee's hourly pay rate: ", "10"));
	while (isNaN(rate)) {
		// Loop until user enters a number
		rate = parseFloat(prompt("Invalid input. Enter employee's hourly pay rate, without dollar signs:", "10"));
	}
	var hours = parseInt(prompt("Enter the employee's number of hours worked: ", "50"));
	while (isNaN(hours)) {
		// Loop until user enters a number
		hours = parseInt(prompt("Invalid input. Enter employee's number of hours worked:", "50"));
	}
	var pay = 0;
	if (hours < 40) {
		pay = hours * rate;
	} else {
		pay = (40 * rate) + ((hours - 40) * (rate * 1.5));
	}
	alert("Employee name: " + name + "\nEmployee SSN: ***-**-" + ssn.slice(-4) + "\nHourly rate: " + rate + "\n# Hours: " + hours + "\nTotal Pay: " + pay);
}

$(document).ready(function() {
	
});

function promptScore(i) {
	var sc = parseInt(prompt("Enter the score for student # " + (i + 1)));
	while (isNaN(sc)) {
		// Loop until user enters a number
		sc = parseInt(prompt("Invalid input. Enter the score for student # " + (i + 1)));
	}
	return sc;
}

// Validate the demographics form by validating zip code, email, and age.
function validateDemographics(form) {
	var zipVal = validateZip(form);
	if (!zipVal) {
		return zipVal;
	}
	var emailVal = validateEmail(form);
	if (!emailVal) {
		console.log(emailVal);
		return emailVal;
	}

	var age = document.getElementById("select_age").value;
	if (age === "SelectRange") {
		alert("You must enter your age.");
		return false;
	}
}

//-------------------------------------------------------------------
// Source: http://www.mattkruse.com/javascript/validations/source.html
// isDigit(value)
//   Returns true if value is a 1-character digit
//-------------------------------------------------------------------
function isDigit(num) {
    if (num.length>1){return false;}
    var string="1234567890";
    if (string.indexOf(num)!=-1){return true;}
    return false;
}

// This function validates a zipcode to make sure that 5 digits are entered.
// If valid, it returns true. Else, it returns false.
function validateZip(theForm)
{
	var str = "-";
    zipStr = theForm.zipCode.value;
    if (zipStr.length != 5)
    {
    	if (zipStr.length == 10 && zipStr.charAt(5) == "-") {
    		
    	} else {
        	alert("Invalid zip code syntax.");
        	return false; // abort submission
    	}
    }
    // length is good ... now check for all digits
    // go thru each of the chars in the zipcode string
    for (var i = 0; i < zipStr.length; i++)
    {
        aChar = zipStr.charAt(i);
        if (!isDigit(aChar) && i != 5) {
        	alert("char " + aChar + " is NOT a digit");
            return false; // abort submission
        }
    }
    return true; // proceed with submission
}

// Validates the email by checking for out-of-syntax symbols.
function validateEmail(form) {
	var email = form.Email.value;
	var at = "@";
	if (email.charAt(0) === "@" || email.charAt(email.length-1) === "@") {
		alert("Cannot have '@' sign at beginning or end of email.");
		return false;
	}
	if ((email.split("@").length-1) != 1) {
		alert("Cannot have more than one '@' sign in email.");
	}
	if (email.charAt(0) === "." || email.charAt(email.length-1) === ".") {
		alert("Cannot have period at beginning or end of email.");
		return false;
	}
	var afterAtSymbol = email.split("@")[1];
	if (afterAtSymbol.charAt(0) === ".") {
		alert("Cannot have period immediately after '@' sign in email.");
		return false;
	}
	if (afterAtSymbol.indexOf(".") == -1) {
		alert("Must have a period after the '@' sign in email.");
		return false;
	}
	return true;	
	var num = 0;
}