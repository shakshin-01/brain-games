import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const maxNumber = 100;

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const gameIteration = () => {
  const firstNumber = getRandomNumber(0, maxNumber);
  const secondNumber = getRandomNumber(0, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber).toString();
  return cons(question, answer);
};

export default () => playGame(gameDescription, gameIteration);
