const displayTable = () => {
  const divScore = document.createElement('div');
  divScore.classList.add('col-6');
  const divLeft = document.createElement('div');
  divLeft.classList.add('d-flex', 'justify-content-around', 'mt-4');
  const recentScoreT = document.createElement('h2');
  recentScoreT.innerHTML = 'Recent Scores';
  recentScoreT.classList.add('display-4');
  divLeft.appendChild(recentScoreT);
  const refreshBtn = document.createElement('button');
  refreshBtn.innerHTML = 'Refresh';
  refreshBtn.classList.add('btn-secondary', 'refresh-btn');
  divLeft.appendChild(refreshBtn);
  divScore.appendChild(divLeft);
  const scoreTable = document.createElement('table');
  scoreTable.classList.add(
    'scores-container',
    'table',
    'table-dark',
    'table-striped',
    'mx-5',
    'mt-4',
    'w-75',
    'border',
    'border-secondary',
  );
  const tableBody = document.createElement('tbody');
  const oliver = 'hola';
  tableBody.innerHTML = `
    <tr>
        <td>${oliver}: 100</td>
     </tr>`;
  scoreTable.appendChild(tableBody);
  divScore.appendChild(scoreTable);
  return divScore;
};
// eslint-disable-next-line import/prefer-default-export
export { displayTable };