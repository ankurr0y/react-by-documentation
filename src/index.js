import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name="Ankur Roy";
const hello = <h1>Hello {name}</h1>;

ReactDOM.render(
  hello,
  document.getElementById('root')
);

function GetTime() {
  const time_element = (
    <div className='time'>
      <h3>The time is {new Date().toLocaleTimeString()}</h3>
    </div>
  );
  ReactDOM.render(
    time_element,
    document.getElementById('watch')
  );
}

setInterval(GetTime,1000);