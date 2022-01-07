import React from 'react';
import '../App.css'; //파일의 위치가 달라졌으니 css의 주소도 바꿔줍니다.

function Hello(props) {
    const someStyle = {backgroundColor:"black", color:"white"};
    return(
        <div>
            <h1 style={someStyle}>안녕, {props.name} 1호</h1>
            <h1>안녕, {props.name} 2호!</h1>
            <div className="newClass"/>
        </div>
    )
}

export default Hello; //밖에서 사용할 수 있도록 해줍니다!