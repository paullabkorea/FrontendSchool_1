import React from 'react';
import '../App.css'; //파일의 위치가 달라졌으니 css의 주소도 바꿔줍니다.

function Resume(props) {
    return(
        <div>
            <p>{props.hello}</p>
            <p>{props.name}</p>
            <p>{props.hobby}</p>
            <p style={{color:props.color}}>hello world</p>
        </div>
    )
}

export default Resume;