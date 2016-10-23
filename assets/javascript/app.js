
// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
// The scenario is similar for wrong answers and time-outs.
// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// Start Game

// When game starts, list the first question and list the answers in a click function.
// Start timer. 
// If user guess == right answer, stop timer, display that the user got the answer correct. 
	// correctAnswers++
	// Display question2
// If user guesses wrong, display that 







// GLOBAL VARIABLES
// =================================================================
// Arrays and variables for holding data

var timeRemaining;

var correctAnswers;

var userAnswer;

var question1 = {
	question: "Who is the main character in Lion King?",
	rightAnswer: 1,
	wrongAnswer: ["Jar Jar Binks", "Simba", "Scar", "Marshmello"],
};

var question2 ={
	question: "Who took a dive in a pool of red marshmellow?",
	rightAnswer: 0,
	wrongAnswer: ["Boo pop","Jomal", "Dufus", "I keed"],
};



// FUNCTIONS (Reusavle vlocks of code that I will call upon when needed)
// =================================================================
// for(var i=0; i < (question1.wrongAnswer).length; i++);


function startGame (){

$("#questions").html(question1.question);

	$("#answer1").html(question1.wrongAnswer[0]);
	$("#answer2").html(question1.wrongAnswer[1]);
	$("#answer3").html(question1.wrongAnswer[2]);
	$("#answer4").html(question1.wrongAnswer[3]);

	$("#answer2").click(function() {
		  alert("Your are correct!");
		  secondQuestion();
	});

		$("#answer1").click(function() {
		  alert("Wrong!");
		  secondQuestion();
	});
};

function secondQuestion (){

$("#questions").html(question2.question);

	$("#answer1").html(question2.wrongAnswer[0]);
	$("#answer2").html(question2.wrongAnswer[1]);
	$("#answer3").html(question2.wrongAnswer[2]);
	$("#answer4").html(question2.wrongAnswer[3]);

	$("#answer3").click(function() {
		  alert("Your are correct!");
		  secondQuestion();
	});

};


// MAIN PROCESS
// =================================================================
startGame();







