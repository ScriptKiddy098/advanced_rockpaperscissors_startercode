//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION


//OLD CODE----------------------------------------------------------------------
//---- 3 images resembling choices, chocies contain values to resemble your choice, computers 

        

//var userChoice = prompt("Do you choose Rock, Paper or Scissors?");
var computerChoice = Math.random();

if (computerChoice <= 0.24) {
    computerChoice = "Rock";
} else if (computerChoice > 0.24 && computerChoice <= 0.50) {
    computerChoice = "Paper";
} else if (computerChoice > 0.50 && computerChoice <= 0.75) {
    computerChoice = "Scissors";
}


console.log("Computer choose: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return userChoice = prompt("The result is a tie! Please make a new choice...");
    }
    
    if (choice1 === "Rock") {
        if (choice2 === "Paper") {
            return "Paper Wins!";
        } else if (choice2 === "Scissors") {
            return "Rock Wins!";
        } else {
            return "Rope Wins!";
        }
    }

    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Rock Wins!";
        } else if (choice2 === "Scissors") {
            return "Scissors Wins!";
        } else {
            return "Rope Wins!";
        }
    }

    if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            return "Rock Wins!";
        } else if (choice2 === "Paper") {
            return "Scissors Wins!";
        } else {
            return "Scissors Wins!";
        }
    }

    if (choice1 === "Rope") {
        if (choice2 === "Rock") {
            return "Rope Wins!";
        } else if (choice2 === "Paper") {
            return "Rope Wins!";
        } else {
            return "Scissors Wins!";
        }
    }
};


$(document).ready(function()){ 
        $('#Rock').click(function()){
                compare('Rock',computerChoice);
}; 
        ///
        $('#Scissors').click(function()){
                compare('Scissors',computerChoice);
}; 
        ///
        $('#Paper').click(function()){
                compare('Paper',computerChoice);
                
}; 

return(compare); 
)};

var input = document.querySelector('.search-form');
var search = document.querySelector('input')
var button = document.querySelector('button');
button.addEventListener('click', function(e) {
  e.preventDefault();
  input.classList.toggle('active');
})
search.addEventListener('focus', function() {
  input.classList.add('focus');
})

search.addEventListener('blur', function() {
  search.value.length != 0 ? input.classList.add('focus') : input.classList.remove('focus');
})
//compare(userChoice,computerChoice);


