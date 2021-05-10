import { cons } from '@hexlet/pairs';
import startGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const maxNumber = 100;

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, maxNumber);
  const secondNumber = getRandomNumber(0, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber).toString();
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
