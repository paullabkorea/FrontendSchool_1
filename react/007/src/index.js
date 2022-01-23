import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function App() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };

  useEffect(() => {  // 1 - useEffect
    alert('hello Component');
    console.log("ComponentDidMount");
  }, []); 
 

  useEffect(() => { // 2 - useEffect
    alert('Component Update')
    console.log("componentDidUpdate");
    return console.log("componentWillUnmount");
  }, [num]);
  return <button onClick={onClick}>{num}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));