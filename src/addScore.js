const addScoreBox = () => {
  const divAddScore = document.createElement('div');
  divAddScore.classList.add('col-5');
  const addTitle = document.createElement('h3');
  addTitle.innerHTML = 'Add your score';
  addTitle.classList.add('display-4');
  divAddScore.appendChild(addTitle);
  const divForm = document.createElement('form');
  divForm.classList.add('d-flex', 'flex-column');
  const inputName = document.createElement('input');
  inputName.classList.add('form-control', 'my-3', 'name-input');
  inputName.placeholder = 'Your Name';
  const inputScore = document.createElement('input');
  inputScore.classList.add('form-control', 'my-3', 'score-input');
  inputScore.placeholder = 'Your Score';
  const btnSubmit = document.createElement('button');
  btnSubmit.innerText = 'Submit';
  btnSubmit.classList.add('my-3', 'btn', 'btn-primary', 'submit-btn');
  const scoreMsg = document.createElement('div');
  scoreMsg.classList.add('display-msg');
  divForm.appendChild(inputName);
  divForm.appendChild(inputScore);
  divForm.appendChild(btnSubmit);
  divAddScore.appendChild(divForm);
  return divAddScore;
};
// eslint-disable-next-line import/prefer-default-export
export { addScoreBox };