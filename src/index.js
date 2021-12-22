// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import { displayTable } from './tablero';
import { addScoreBox } from './addScore';

const titleh1 = document.getElementById('title-h1');
const titulo = document.createElement('h1')
titulo.innerHTML = 'Leaderboard';
titulo.classList.add('display-1');
titleh1.appendChild(titulo);
 
const contenedor = document.getElementById('container');
contenedor.classList.add('d-flex');
contenedor.appendChild(displayTable());
contenedor.appendChild(addScoreBox());