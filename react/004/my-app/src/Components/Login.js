import React from "react";

const Login = () => {
    const LoginSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    const LoginInput = (e) => {
        console.log("id", e.target.value);
    };

    const passwordInput = (e) => {
        console.log("pw", e.target.value);
    };

    return (
    <form onSubmit={LoginSubmit}>
        <label>
            아이디 : <input type="text" onChange={LoginInput} />
        </label>
        <label>
            비밀번호 : <input type="password" onChange={passwordInput} />
        </label>
        <button type="submit">로그인</button>
    </form>
    );
};

export default Login;