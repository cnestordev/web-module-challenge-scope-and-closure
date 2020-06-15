// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️

///// M V P ///////
console.log('**************************** TASK 1 ****************************');

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *  Counter 1 declared the variable locally, which means that each time the function is invoked, it will create it's own private "counter"
 *  which no other part of your code will have access to.  For example, if you were to create a variable and store the value of what the function returns,
 *  it will have it's own private "counter".
 *  const myCounter = counterMaker()
 *  const yourCounter = counterMaker()
 *  Both these variables will have their own privately scoped "counter" variable.
 *
 *  Counter 2 has declared the variable globally, which means that it cannot be scoped to any one variable, and all variables will have access
 *  to the SAME variable and mutate the same variable.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *  The counter 1 uses a closure because it passes along it's own scoped variable to it's nested variable.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 *    Scenario 1 would most likely be preferable when you will only ever need one instance of the variable and you want multiple functions to
 *    have access to that variable and be able to mutate it.
 *    Scenario 2 would be preferable when you want to create multiple instances of the same variable, and don't want any other part of your code to have access to it.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log(
  '************************ task 2 ****************************************'
);
/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

console.log(inning());

console.log('***************** task 3 *****************');
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(funct, numOfInnings) {
  const score = {};
  score.Home = 0;
  score.Away = 0;
  for (let i = 0; i < numOfInnings; i++) {
    score.Home += funct();
    score.Away += funct();
  }
  return score;
}

console.log(finalScore(inning, 9));

console.log('*********************** task 4 **********************');
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(funct, numOfInnings) {
  let inning = 1;
  let score1 = 0;
  let score2 = 0;
  for (let i = 0; i < numOfInnings; i++) {
    score1 += funct();
    score2 += funct();
    console.log(
      `${inning}${inning > 1 ? 'th' : 'st'} inning: ${score1} - ${score2} `
    );
  }
  console.log(`Final Score: ${score1} - ${score2}`);
}

scoreboard(inning, 9);
