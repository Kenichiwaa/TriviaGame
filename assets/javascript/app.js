
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
	question: "'Godzilla' is a nickname for which sports car?",
	rightAnswer: "Nissan GT-R",
	possibleAnswers: ["Ferrari 458 Italia", "Nissan GT-R", "Godzilla is a Giant Lizard smh.", "Who is Marshmello"],
	image: ["http://www.stancenation.com/wp-content/uploads/2012/07/1310.jpg"],
	explanation: ["The Nissan GT-R held the Track Record for production cars at the Nürburgring Northloop, the most difficult racetrack of the world, until the Porsche 996."]
};

var question2 ={
	question: "When was the electric car invented?",
	rightAnswer: "1834",
	possibleAnswers: ["1834", "1934", "2001", "2034"],
	image: ["http://www.automostory.com/images/first-electric-car.jpg"],
	explanation: ["In the beginning, only EV automobiles were in production. It was only after the invention of the alternator, did petrol vehicles become popular."]
};	

var question3 ={
	question: "To participate in the Peking to Paris Rally 'Vintageant' Category, your vehicle must have a manufactured date prior to..",
	rightAnswer: "1941",
	possibleAnswers: ["1956","Dude! Spaceships!", "1941", "1975"],
	image: ["http://vintagebentley.com/wp-content/uploads/p2p-header.jpeg"],
};	

var question3 ={
	question: "What is the largest category in the Dakar Rally Race?",
	rightAnswer: "Trucks",
	possibleAnswers: ["32 inch Chome Wheels Yo!", "Trucks", "Apache Helicopters", "Tanks"],
	image: ["https://s-media-cache-ak0.pinimg.com/originals/2e/98/ab/2e98abee4e48319c8bd7332782593990.jpg"],
};

var question4 ={
	question: "What is the largest category in the Dakar Rally?",
	rightAnswer: "trucks",
	possibleAnswers: ["automobiles with 22 inch chome wheels yo!", "trucks", "apache helicopters", "tanks"],
};

var question4 ={
	question: "What is the largest category in the Dakar Rally?",
	rightAnswer: "trucks",
	possibleAnswers: ["automobiles with 22 inch chome wheels yo!", "trucks", "apache helicopters", "tanks"],
};

var questions = [question1, question2, question3];
var currentQuestion = 0;

var button = '<p><a class="btn btn-primary btn-lg" href="#" role="button">Next</a></p>';


// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// =================================================================
// for(var i = 0; i < 4; i++){
// 	var answersListOnPage =
// 	$("<div>").html(questions[currentQuestion].possibleAnswers[i])
// 			  .addClass('answersBox'); // Display possible answers
// };


// DISPLAY QUESTIONS ON THE SCREEN
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

				  		// $("#answersExplanation").html('<img class="image" src="' + questions[currentQuestion].image + '">')
				  		// 						.append(questions[currentQuestion].explanation)
				  		// 						.append(button)
				  		// 						.addClass("answersExplanation");


// SHOWS EXPLANATION TO QUESTION
function answersExplained(){ 
	$("#answersExplanation").html('<img class="image" src="' + questions[currentQuestion].image + '">')
							.append(questions[currentQuestion].explanation)
							.append(button)
							.addClass("answersExplanation");
	currentQuestion++
	correct++	
	$(".answers").remove();

	$(".btn").click(function(){
		startGame(); 
		$("#answersExplanation").empty();
		number = 5;
		counter = setInterval(decrement, 1000);
	}); 
};


function startGame (){
	if(currentQuestion == questions.length){
		alert(correct)
		$("#answersExplanation").html('<p>' + correct + '</p>').append(wrong);
	}
	else{
		questionsList () // Grabs answers to the question 

			// Display Question
			$('#questions').html(questions[currentQuestion].question);

			//On clicking an answer
			$( ".answers" ).click(function() {
				  $(this).addClass("clickedAnswer");

				  	  //If I click the correct answer..
					  if( $('.clickedAnswer').html() === questions[currentQuestion].rightAnswer){
					  			answersExplained()
					  			stop();
					  			$("#questions").text("Correct!");	
	 		
					  } // End if I click the correct answer.

					  // If I click the wrong answer..
					  else{  
					  	answersExplained()
					  	stop();
					  	$("#questions").text("Wrong!");	
					  }; // End else I click the wrong answer 
					  
			}); //End clicking answers action
		
	};//If currentQuestion === # of questions, end game
}; //Function for Start Game



        // Set our number counter to 100.
        var number = 5;

        function run(){
            counter = setInterval(decrement, 1000);
        }

        // The decrement function.
        function decrement(){
            // Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $('#show-number').html('<h2>' + number + '</h2>');

            // Once number hits zero...
            if (number === 0){
                // ...run the stop function.
                stop();
				answersExplained(); 	
            }
        }

        function stop(){
        	clearInterval(counter);
        	$("#questions").text("Time is Up!");
            // Clears our "counter" interval.
            // We just pass the name of the interval
            // to the clearInterval function.
            //clearInterval(counter);
        }

// MAIN PROCESS
// =================================================================
startGame(); // Start Game

run();





