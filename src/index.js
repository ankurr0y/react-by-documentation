import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name="Ankur Roy";
const hello = <h1>Hello {name}</h1>;

ReactDOM.render(
  hello,
  document.getElementById('root')
);
