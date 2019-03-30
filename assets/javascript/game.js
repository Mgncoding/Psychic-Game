
//Want to have pop up(s) upon opening page. (for no reason)
var name = prompt("Please enter your name:", "Wizard");
    alert("Be prepared to be psyched OUT. Guess the letter of This Computer!"); 
        alert( name + " Don't use console log");




//What the computer randomly guesses
var compThoughts = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compThoughts2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//My counters
var wins = 0;
var losses = 0;
var numGuess = 10;
var letGuess = [];


//My reference for HTML where we want 
var directionText = document.getElementById("direction-text");
//var compThoughtsText = document.getElementById("compThoughts-text"); 
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numGuessText = document.getElementById("numGuess-text");
var letGuessText = document.getElementById("letGuess-text");


var computerGuess = compThoughts[Math.floor(Math.random() * compThoughts.length)];
console.log(computerGuess);
function reset(){
     computerGuess = compThoughts[Math.floor(Math.random() * compThoughts.length)];
     numGuess = 10;
     numGuessText.textContent = "Number of Guesses: " + numGuess;
     letGuess = [];
     console.log(computerGuess)
}

//User push on key to try and guess Computers guess
document.onkeypress = function(event) {
    var userGuess = event.key;   

//User guess is the computer guess: Wins
    if(userGuess === computerGuess){
        wins++ 
        winsText.textContent = "Wins: " + wins;
        reset()
        //User does not guess coreectly, loss a guess; nine guesses total
    }else{
        numGuess--;
        numGuessText.textContent = "Number of Guess: " + numGuess;
        if(numGuess === 0){
            losses++
            lossesText.textContent = "Losses: " + losses; 
            reset();
        }//Number of guess reset back to 9 when player guesses computers thoughts or a loss occurs. 
        else{
            letGuess.push(userGuess);
            letGuessText.textContent = "Letters Guessed: " + letGuess.join(",")
        }
    }} 
    //     if(wins === 3)
    // alert("Prepare for a higher difficulty")
 
    
    
        

   

    

   
    
    
    
    
    


