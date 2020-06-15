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
const styles = 'background: #ff5826; color: white; padding: 2px;';

console.log(
  '%c ************************ START CHALLENGE ************************',
  styles
);

function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️

///// M V P ///////
console.log(
  '%c ************************ TASK 1 ************************',
  styles
);
console.log('answers to questions found on index.js');

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *    Counter 1 is a function that returns another function that makes use of closures.  Because the count variable was declared inside of the counterMaker function context, and because counterMaker returns a function, the returend function will have access to all the variables that were living inside of the counterMaker context.  This means that the count variable along with it's value will be accessible to the returned function.
 *
 *    With the counter 2 function, the variable count was declared globally, which means that the counter2 function has access to it.  Counter 2 will directly access and mutate the count variable.  Because count was declared globally, all scopes will have access to this variable.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *  The counter 1 uses a closure because it makes use of the varibles that exists inside of the enviornment in which it was called.
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
  '%c ************************ TASK 2 ************************',
  styles
);
/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

console.log(inning());

console.log(
  '%c ************************ TASK 3 ************************',
  styles
);
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
  const score = { Home: 0, Away: 0 };
  for (let i = 0; i < numOfInnings; i++) {
    score.Home += funct();
    score.Away += funct();
  }
  return score;
}

console.log(finalScore(inning, 9));

console.log(
  '%c ************************ TASK 4 ************************',
  styles
);
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
  let score1 = 0;
  let score2 = 0;
  let innings = 0;
  let inningsScore = [];
  for (let i = 0; i < numOfInnings; i++) {
    innings++;
    score1 += funct();
    score2 += funct();
    let ordinal = 'th';
    if (innings === 1) {
      ordinal = 'st';
    } else if (innings === 2) {
      ordinal = 'nd';
    } else if (innings === 3) {
      ordinal = 'rd';
    }
    console.log(`${innings}${ordinal} inning: ${score1} - ${score2} `);
    inningsScore.push(`${innings}${ordinal} inning: ${score1} - ${score2} `);
  }
  console.log(`Final Score: ${score1} - ${score2}`);
  return inningsScore;
}

console.log(scoreboard(inning, 9));
