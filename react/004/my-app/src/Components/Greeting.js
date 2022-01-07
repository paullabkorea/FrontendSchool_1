import React from "react";

const Greeting = () => {
    const onMouseEnter = () => {
        console.log("안녕하세요!");
    };

    const onMouseLeave = () => {
        console.log("안녕히가세요");
    };

    return (
    <div>
        <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            여기에 마우스를 올려보세요!
        </p>
    </div>
    );
};

export default Greeting;