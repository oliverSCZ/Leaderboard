const addScoreBox = () => {
  const divAddScore = document.createElement('div');
  divAddScore.classList.add('col-5');
  const addTitle = document.createElement('h3');
  addTitle.innerHTML = 'Add your score';
  addTitle.classList.add('display-4');
  divAddScore.appendChild(addTitle);
  const divForm = document.createElement('form');
  divForm.classList.add('d-flex','flex-column');
  const inputName = document.createElement('input');
  inputName.classList.add('form-control', 'my-3');
  inputName.placeholder = 'Your Name';
  const inputScore = document.createElement('input');
  inputScore.classList.add('form-control', 'my-3');
  inputScore.placeholder = 'Your Score';
  const btnSubmit = document.createElement('button');
  btnSubmit.innerText = 'Submit';
  btnSubmit.classList.add('my-3', 'btn', 'btn-primary');
  divForm.appendChild(inputName);
  divForm.appendChild(inputScore);
  divForm.appendChild(btnSubmit);
  divAddScore.appendChild(divForm);
  return divAddScore;
};


export { addScoreBox };