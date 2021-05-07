import { cons } from '@hexlet/pairs';

import startGameEngine from '../index.js';

import getRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(String(question), answer);
};
export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
