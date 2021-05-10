import { cons } from '@hexlet/pairs';

import startGameEngine from '../index.js';

import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const calculateNumbers = (firstNum, secondNum, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const mathOperator = mathOperators[getRandomNumber(0, mathOperators.length)];
  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
  const answer = String(calculateNumbers(firstNumber, secondNumber, mathOperator));
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
