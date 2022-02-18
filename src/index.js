import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Welcome from "./Welcome";
import Clock from "./Clock";
import ToggleButton from "./ToggleButton";

// const name="Ankur Roy";
// const hello = <h1>Hello {name}</h1>;

// ReactDOM.render(
//   hello,
//   document.getElementById('root')
// );

// function GetTime() {
//   const time_element = (
//     <div className='time'>
//       <h3>The time is {new Date().toLocaleTimeString()}</h3>
//     </div>
//   );
//   ReactDOM.render(
//     time_element,
//     document.getElementById('watch')
//   );
// }

// setInterval(GetTime,1000);
function Names() {
  return (
    <>
      <Welcome name="Ankur"></Welcome>
      <br></br>
      <Welcome name="Ram"></Welcome>
      <br></br>
      <Welcome name="Hari"></Welcome>
      <br></br>
    </>
  );
}

ReactDOM.render(<Names></Names>, document.getElementById("root"));

ReactDOM.render(
  <Clock ></Clock>,
  document.getElementById("watch")
);

ReactDOM.render(
  <ToggleButton></ToggleButton>,
  document.getElementById('butt')
);
