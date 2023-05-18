let number = Math.floor(Math.random() * 10) + 1;
let points = 100;
//console.log(number);
let userInput = prompt("Guess the number b/w 1-10");

while(userInput != number)
  {
    points -= 10;
    
    if(userInput > number)
      console.log("HINT: You have entered greater number");
    else
      console.log("HINT: You have entered smaller number")
    
    userInput = prompt("Try again");
    
  }

console.log("Number Matched! \nYou have scored-");
console.log(points);
