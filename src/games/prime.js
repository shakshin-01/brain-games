import { cons } from '@hexlet/pairs';
import startGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const maxNumber = 100;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
