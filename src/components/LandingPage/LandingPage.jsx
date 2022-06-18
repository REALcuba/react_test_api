import React from "react";
const signUp = () => {
    alert("sign up")
}
const logIn = () => {
    alert("login")
}

const LandingPage = () => {
    return (
        <div className="dataCentered">
            <input type="text" placeholder="userName" />
            <input type="text" placeholder="password" />
            <button onClick={signUp}>Sign Up</button>
            <button onClick={logIn}>Log In</button>


        </div>
    );
};


export default LandingPage;
