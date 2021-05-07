import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;

const showResult = (userName, isWin) => {
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const gameRound = (currentRound, gameIteration) => {
  if (currentRound === numberOfRounds) {
    return true;
  }

  const gamePair = gameIteration();
  const question = car(gamePair);
  const rightAnswer = cdr(gamePair);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return gameRound(currentRound + 1, gameIteration);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export default (description, gameIteration) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const isWin = gameRound(0, gameIteration);
  showResult(userName, isWin);
};
