
// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
// The scenario is similar for wrong answers and time-outs.
// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// Start Game

// Click game Starts
//List the first question and the answers in a click function.

// Start timer.

// If user guess == right answer, stop timer, display that the user got the answer correct. 
	// correctAnswers++
	// Display question2
// If user guesses wrong, display that 

//





// GLOBAL VARIABLES
// =================================================================
// Arrays and variables for holding data

var correct = 0;
var wrong = 0;

var question1 = {
	question: "Who is the main character in Lion King?",
	rightAnswer: "Simba",
	possibleAnswers: ["Jar Jar Binks", "Simba", "Scar", "Marshmello"],
};

var question2 ={
	question: "Who took a dive in a pool of red marshmellow?",
	rightAnswer: "Dufus",
	possibleAnswers: ["Boo pop","Jomal", "Dufus", "I keed"],
};		

var people = ["bob", "joe", "billy", "joel", "stacy"]
var questions = [question1, question2];
var currentQuestion = 0;



// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// =================================================================
// for(var i = 0; i < 4; i++){
// 	var answersListOnPage =
// 	$("<div>").html(questions[currentQuestion].possibleAnswers[i])
// 			  .addClass('answersBox'); // Display possible answers
// };

function questionsList (){
	// Grab element #answers
	var answersListOnPage = document.getElementById("answers");

	for (var i = 0; i < 4; i++){
		// Creates a new div and adds class
		var newAnswersListOnPage = document.createElement("div");
		$(newAnswersListOnPage).addClass('answers');

		// Creats content for each answer
		newAnswersListOnPage.innerHTML = questions[currentQuestion].possibleAnswers[i];

		// It then adds this new div to the drinkList div.
		answersListOnPage.appendChild(newAnswersListOnPage);
	}
};

function startGame (){
if(currentQuestion == questions.length){
	alert("gameOver!")
}
else{
	questionsList ()

	// Display Question
	$('#questions').html(questions[currentQuestion].question);

		//On clicking an answer
		$( ".answers" ).click(function() {
			  $(this).addClass("clickedAnswer");

			  		//If I click the correct answer, 
				  if( $('.clickedAnswer').html() === questions[currentQuestion].rightAnswer){
				  		alert("true!");
				  		currentQuestion++
				  		correct++
				  		$(".answers").remove();
				  		startGame();
				  }
				  else{
				  	alert("wrong!")
				  	currentQuestion++
				  	wrong++
				  	$(".answers").remove();
				  	startGame();
				  };
				  
		}); //End clicking answers action

};//If currentQuestion === # of questions, end game
}; //Function for Start Game



// MAIN PROCESS
// =================================================================
startGame(); // Start Game







