// eslint-disable-next-line import/no-cycle
import { populateContainer } from './index.js';

const displayMsg = document.querySelector('.display-msg');
const renderMsg = (msg) => {
  displayMsg.textContent = msg;
};

export const sendNewData = (username, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FRQ4BNagXuOdP7UyIiqT/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((data) => {
      if (data.ok) {
        renderMsg('Succesfully added a new record');
      } else {
        throw new Error('No response: ${data.status}');
      }
    });
};

export const receiveData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FRQ4BNagXuOdP7UyIiqT/scores/');
  const data = await response.json();
  const sortedScores = data.result.sort((a, b) => a.score - b.score);
  populateContainer(sortedScores);
};