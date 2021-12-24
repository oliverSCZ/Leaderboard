// import _ from 'lodash';
import './style.css';
// eslint-disable-next-line
import { sendNewData, receiveData } from './dataAPI';

export const scoresContainer = document.querySelector('.scores-container');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const addScoreBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

export const populateContainer = (value) => {
  value.forEach((el) => {
    const textHtml = `<li class="specific-score">${el.user}&#58; ${el.score}</li>`;
    scoresContainer.insertAdjacentHTML('afterbegin', textHtml);
  });
};

const addScoreFunc = () => {
  sendNewData(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
};

window.onload = () => {
  receiveData();

  addScoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addScoreFunc();
  });

  refreshBtn.addEventListener('click', () => {
    scoresContainer.innerHTML = '';
    receiveData();
  });
};