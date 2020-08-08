import _ from 'lodash';
// import { NAME as NAME_OF_MEG } from './utiles';
import Lion from './utiles';

console.log(Lion.say());
// console.log(NAME_OF_MEG);
// console.log(Nijou(10));
// console.log(NAME);

function compopnent() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!?!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(compopnent());
