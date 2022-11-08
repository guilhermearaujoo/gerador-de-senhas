import { nanoid } from 'nanoid'
import copy from 'clipboard-copy';
import './style.css';


const button = document.querySelector('button');
const h2 = document.querySelector('h2');


button.addEventListener('click', () => {
  h2.innerHTML = nanoid();
});


h2.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});