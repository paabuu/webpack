import './index.css';
import './c.css';

import './common';

const body = document.querySelector('body');
const p = document.createElement('p');

p.innerHTML = 'this is home page';

p.setAttribute('class', 'title');

body.appendChild(p);
console.log('hahah111');