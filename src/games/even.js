import readlineSync from 'readline-sync';
import name from '../cli.js';

const gameLogic = () => {
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  const isEven = (num) => num % 2 === 0;

  const block = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const getRandomArbitrary = (maxNumber) => Math.floor(Math.random() * maxNumber);
    const number = getRandomArbitrary(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (boolean, count = 0) => {
      if (boolean === true) {
        console.log('Correct!');
        return block(count);
      }
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.\nLet's try again, ${name}!`);
    };
    const checkAnswer = (ans) => {
      if ((ans === 'no') && (number % 2 !== 0)) {
        return correctAnswer(true, counter + 1);
      }
      if ((ans === 'yes') && (number % 2 === 0)) {
        return correctAnswer(true, counter + 1);
      }
      return correctAnswer(false);
    };
    return checkAnswer(answer);
  };
  block(0);
};
export default gameLogic;
