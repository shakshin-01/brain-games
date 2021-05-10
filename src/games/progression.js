import { cons } from '@hexlet/pairs';
import startGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const maxBeginOfProgression = 10;
const maxNumberOfSteps = 10;
const lengthOfProgression = getRandomNumber(4, 10);

const createProgression = (begin, step, length, questionIndex) => {
  const iter = (counter) => {
    const current = begin + step * counter;
    if (counter === length) {
      return current;
    }
    if (counter === questionIndex) {
      return `.. ${iter(counter + 1)}`;
    }
    return `${current} ${iter(counter + 1)}`;
  };
  return iter(0);
};

const getQuestionAndAnswer = () => {
  const beginOfProgression = getRandomNumber(0, maxBeginOfProgression);
  const step = getRandomNumber(1, maxNumberOfSteps);
  const questionIndex = getRandomNumber(0, lengthOfProgression);
  const question = createProgression(beginOfProgression, step, lengthOfProgression, questionIndex);
  const answer = (beginOfProgression + step * questionIndex).toString();
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
