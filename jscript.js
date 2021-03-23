var chal = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var don = 0;
var pickA = 0;
var pickB = 0;
var pickC = 0;
var pickD = 0;
var time = 10;
var score = 0;
var quests = 0;
var chose = 0;
var check = "Time's Up!";
			
document.getElementById("timer").style.display = "none";
document.getElementById("Quiz").style.display = "none";
		
function NewQuestion() {
	"use strict";
	document.getElementById("timer").style.display = "block";
	document.getElementById("Quiz").style.display = "block";
	document.getElementById("a").style.color = "";
	document.getElementById("b").style.color = "";
	document.getElementById("c").style.color = "";
	document.getElementById("d").style.color = "";
	document.getElementById("a").style.borderColor = "";
	document.getElementById("b").style.borderColor = "";
	document.getElementById("c").style.borderColor = "";
	document.getElementById("d").style.borderColor = "";
				
	do {

		chal = Math.floor((Math.random() * 13));
		pickA = 0;
		pickB = 0;
		pickC = 0;
		pickD = 0;
		check = "Time's Up!";
		
		document.getElementById("a").disabled = false;
		document.getElementById("b").disabled = false;
		document.getElementById("c").disabled = false;
		document.getElementById("d").disabled = false;

		if (chal === 0 && a === 0) {
			a = 1;
			don = 1;
			quests = quests + 1;
			pickD = 1;
			document.getElementById("Question").innerHTML = "What is the first line of defense of plants against damage and pathogens?";
			document.getElementById("a").value = "Vascular Tissue System";
			document.getElementById("b").value = "Ground Tissue System";
			document.getElementById("c").value = "Meristematic Tissue System";
			document.getElementById("d").value = "Dermal Tissue System";
		} else if (chal === 1 && b === 0) {
			b = 1;
			don = 1;
			quests = quests + 1;
			pickA = 1;
			document.getElementById("Question").innerHTML = "What describes the relationship between pressure and volume?";
			document.getElementById("a").value = "Boyle’s law";
			document.getElementById("b").value = "Charles’ law";
			document.getElementById("c").value = "Avogrado’s law";
			document.getElementById("d").value = "Ideal Gas Law";
		} else if (chal === 2 && c === 0) {
			c = 1;
			don = 1;
			quests = quests + 1;
			pickC = 1;
			document.getElementById("Question").innerHTML = "What does ‘CSS’ stand for?";
			document.getElementById("a").value = "Cute Style Sheet";
			document.getElementById("b").value = "Computer Science Sheet";
			document.getElementById("c").value = "Cascading Style Sheet";
			document.getElementById("d").value = "Computer Style Sheet";
		} else if (chal === 3 && d === 0) {
			d = 1;
			don = 1;
			quests = quests + 1;
			pickB = 1;
			document.getElementById("Question").innerHTML = "What was considered the Golden Age of novels?";
			document.getElementById("a").value = "Edwardian Period";
			document.getElementById("b").value = "Victorian Period";
			document.getElementById("c").value = "Modern Period";
			document.getElementById("d").value = "Monthly Period";
		} else if (chal === 4 && e === 0) {
			e = 1;
			don = 1;
			quests = quests + 1;
			pickC = 1;
			document.getElementById("Question").innerHTML = "Sino ang kumuha kay Juli bilang katulong?";
			document.getElementById("a").value = "Basilio";
			document.getElementById("b").value = "Donya Victorina";
			document.getElementById("c").value = "Hermana Penchang";
			document.getElementById("d").value = "Kabesang Tales";
		} else if (chal === 5 && f === 0) {
			f = 1;
			don = 1;
			quests = quests + 1;
			pickC = 1;
			document.getElementById("Question").innerHTML = "What is the number one cause of mortality in the Philippines?";
			document.getElementById("a").value = "Tuberculosis";
			document.getElementById("b").value = "Pneumonia";
			document.getElementById("c").value = "Coronary Heart Disease";
			document.getElementById("d").value = "HIV";
		} else if (chal === 6 && g === 0) {
			g = 1;
			don = 1;
			quests = quests + 1;
			pickA = 1;
			document.getElementById("Question").innerHTML = "What is the name of Arayat’s adviser?";
			document.getElementById("a").value = "Jan Derrick Junio";
			document.getElementById("b").value = "John Daniel Junio";
			document.getElementById("c").value = "Jan Michael Ibanez";
			document.getElementById("d").value = "John Michael Santos";
		} else if (chal === 7 && h === 0) {
			h = 1;
			don = 1;
			quests = quests + 1;
			pickC = 1;
			document.getElementById("Question").innerHTML = "What is the value of log10?";
			document.getElementById("a").value = "10";
			document.getElementById("b").value = "2.3";
			document.getElementById("c").value = "1.0";
			document.getElementById("d").value = "100,000,000,000";
		} else if (chal === 8 && i === 0) {
			i = 1;
			don = 1;
			quests = quests + 1;
			pickA = 1;
			document.getElementById("Question").innerHTML = "Which kind of chant was named after a pope?";
			document.getElementById("a").value = "Gregorian Chant";
			document.getElementById("b").value = "Franciscan Chant";
			document.getElementById("c").value = "Innocent Chant";
			document.getElementById("d").value = "Benedictine Chant";
		} else if (chal === 9 && j === 0) {
			j = 1;
			don = 1;
			quests = quests + 1;
			pickB = 1;
			document.getElementById("Question").innerHTML = "What is the maximum heart rate of a newborn (during exercise)?";
			document.getElementById("a").value = "323 bpm";
			document.getElementById("b").value = "217 bpm";
			document.getElementById("c").value = "198 bpm";
			document.getElementById("d").value = "143 bpm";
		} else if (chal === 10 && k === 0) {
			k = 1;
			don = 1;
			quests = quests + 1;
			pickD = 1;
			document.getElementById("Question").innerHTML = "What is the acceleration due to gravity on Earth?";
			document.getElementById("a").value = "6.3m/s";
			document.getElementById("b").value = "6.3m/s^2";
			document.getElementById("c").value = "9.8m/s";
			document.getElementById("d").value = "9.8m/s^2";
		} else if (chal === 11 && l === 0) {
			l = 1;
			don = 1;
			quests = quests + 1;
			pickD = 1;
			document.getElementById("Question").innerHTML = "All of these were real empires EXCEPT:";
			document.getElementById("a").value = "Safavid";
			document.getElementById("b").value = "Ottoman";
			document.getElementById("c").value = "Mughal";
			document.getElementById("d").value = "Mataw";
		} else if (chal === 12 && m === 0) {
			m = 1;
			don = 1;
			quests = quests + 1;
			pickD = 1;
			document.getElementById("Question").innerHTML =  "What is another word for a normal curve?";
			document.getElementById("a").value  =  "Perfect Curve";
			document.getElementById("b").value  =  "Ghost Curve";
			document.getElementById("c").value  =  "Hill Curve";
			document.getElementById("d").value  =  "Bell Curve";
		} else {
			don = 0;
		}
	} while (don === 0);
	document.getElementById("startbar").style.display = "none";
	document.getElementById("start").style.display = "none";
	if (a === 1 && b === 1 && c === 1 && d === 1 && e === 1 && f === 1 && g === 1
			&& h === 1 && i === 1 && j === 1 && k === 1 && l === 1 && m === 1) {
		document.getElementById("yourScore").innerHTML = score;
		document.getElementById("Next").style.display = "none";
		document.getElementById("Quiz").style.display = "none";
		document.getElementById("timer").style.display = "none";
		document.getElementById("Summary").style.display = "block";
		document.getElementById("status").style.display = "none";
		document.getElementById("tryagain").style.display = "block";
	}
}


function butA() {
	"use strict";
	chose = 1;
	if (pickA === 1) {
		score = score + 1;
		check = "Correct!";
	} else {
		check = "Wrong!";
	}
}

function butB() {
	"use strict";
	chose = 1;
	if (pickB === 1) {
		score = score + 1;
		check = "Correct!";
	} else {
		check = "Wrong!";
	}
}

function butC() {
	"use strict";
	chose = 1;
	if (pickC === 1) {
		score = score + 1;
		check = "Correct!";
	} else {
		check = "Wrong!";
	}
}

function butD() {
	"use strict";
	chose = 1;
	if (pickD === 1) {
		score = score + 1;
		check = "Correct!";
	} else {
		check = "Wrong!";
	}
}

function timer() {
	"use strict";
	if (time > 0 && chose === 0) {
		if (time < 5) {
			document.getElementById("timer").style.transition = "all 0.2s";
			time = time - 1;
			document.getElementById("timer").innerHTML = time;
			document.getElementById("timer").style.backgroundColor = "#F65C51";
		} else {
			time = time - 1;
			document.getElementById("timer").innerHTML = time;
		}
	} else {
		document.getElementById("status").innerHTML = check;
		document.getElementById("a").disabled = true;
		document.getElementById("b").disabled = true;
		document.getElementById("c").disabled = true;
		document.getElementById("d").disabled = true;
		document.getElementById("Next").style.display = "block";
					
		if (pickA === 1) {
			document.getElementById("a").style.borderColor = "#68BB59";
			document.getElementById("a").style.backgroundColor = "#68BB59";
			document.getElementById("a").style.color = "#FFFDFA";
		} else {
			document.getElementById("a").style.backgroundColor = "#F65C51";
			document.getElementById("a").style.color = "#FFFDFA";
		}
		
		if (pickB === 1) {
			document.getElementById("b").style.borderColor = "#68BB59";
			document.getElementById("b").style.backgroundColor = "#68BB59";
			document.getElementById("b").style.color = "#FFFDFA";
		} else {
			document.getElementById("b").style.backgroundColor = "#F65C51";
			document.getElementById("b").style.color = "#FFFDFA";
		}

		if (pickC === 1) {
			document.getElementById("c").style.borderColor = "#68BB59";
			document.getElementById("c").style.backgroundColor = "#68BB59";
			document.getElementById("c").style.color = "#FFFDFA";
		} else {
			document.getElementById("c").style.backgroundColor = "#F65C51";
			document.getElementById("c").style.color = "#FFFDFA";
		}

		if (pickD === 1) {
			document.getElementById("d").style.borderColor = "#68BB59";
			document.getElementById("d").style.backgroundColor = "#68BB59";
			document.getElementById("d").style.color = "#FFFDFA";
		} else {
			document.getElementById("d").style.backgroundColor = "#F65C51";
			document.getElementById("d").style.color = "#FFFDFA";
		}
		
	}
				
				
	
}

function next() {
	"use strict";
	if (quests < 13) {
		time = 10;
		chose = 0;

		document.getElementById("timer").innerHTML = time;
		document.getElementById("status").innerHTML = "<br>";
		document.getElementById("Next").style.display = "none";
		document.getElementById("a").style.backgroundColor = "";
		document.getElementById("b").style.backgroundColor = "";
		document.getElementById("c").style.backgroundColor = "";
		document.getElementById("d").style.backgroundColor = "";
		document.getElementById("timer").style.backgroundColor = "";
	} else {
		document.getElementById("yourScore").innerHTML = score;
		document.getElementById("Next").style.display = "none";
		document.getElementById("Quiz").style.display = "none";
		document.getElementById("timer").style.display = "none";
		document.getElementById("Summary").style.display = "block";
		document.getElementById("status").style.display = "none";
		document.getElementById("tryagain").style.display = "block";
	}
}