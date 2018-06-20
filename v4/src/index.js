import './index.css';
import './c.css';

import './common';
import logo from './logo.png';

const body = document.querySelector('body');
const p = document.createElement('p');

p.innerHTML = 'this is home page';

p.setAttribute('class', 'title');

body.appendChild(p);
const img = new Image();
img.src = logo;

body.appendChild(img);