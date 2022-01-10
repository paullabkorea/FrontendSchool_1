import React from "react";

function Hello(props) {
  const someStyle = { backgroundColor: "black", color: "white" };

  if (props.name === undefined) {
    return (
      <div>
        <h1>컴포넌트에 이름이 설정되지 않았습니다!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={someStyle}>안녕, {props.name} 1호</h1>
        <h1>안녕, {props.name} 2호!</h1>
        <div className="newClass" />
      </div>
    );
  }
}

export default Hello;
