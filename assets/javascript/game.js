// Global Variables
//=============================================================

//CRYSTAL VARIABLES
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};

// Scores (current and target)
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount    = 0;
var lossCount   = 0;


//FUNCTIONS
//=============================================================

//Helper function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startGame = function() {
    //reset the current score
    var currentScore = 0;
    // set a new target score (between 19 and 120)
    targetScore = getRandom(19, 120);
    //set different values for each of the crystals (between 1 and 12)
    crystal.blue.value      = getRandom(1, 12);
    crystal.green.value     = getRandom(1, 12);
    crystal.red.value       = getRandom(1, 12);
    crystal.yellow.value    = getRandom(1, 12);
    // change the html to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);




    //Testing console
    console.log("----------------------------");
    console.log("Target Score " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.red.value)
    console.log("----------------------------");
}

//Respond to clicks on the crystals
var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;
    //testing console
    console.log("Your Score: " + currentScore);

}

//MAIN PROCESS
//=============================================================

//Starts the game the first time
startGame();

$("#blue").click(function(){
    
    addValues(crystal.blue);
});
$("#red").click(function(){
    
});
$("#green").click(function(){
    
});
$("#yellow").click(function(){
    
}); 