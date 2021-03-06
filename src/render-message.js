const displayMsg = document.getElementById('display-msg');
document.getElementById('display-msg').style.color = 'red';
document.getElementById('display-msg').style.background = 'white';
const renderMsg = (status, msg) => {
  displayMsg.classList.toggle(status);
  displayMsg.textContent = msg;
  setTimeout(() => {
    displayMsg.classList.toggle(status);
    displayMsg.textContent = '';
  }, 3000);
};

export const renderError = (msg) => {
  renderMsg('display-msg-error', msg);
};

export const renderSucces = (msg) => {
  renderMsg('display-msg-succes', msg);
};