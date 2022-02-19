import { getTokens } from "../Requests/Login";
import React, { useState } from "react";
import "./css/Login.css";

interface LoginProps {
    login: boolean;
}

const LoginBox = (props: LoginProps) => {
    const [login, setLogin] = useState(props.login);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [invalid, setInvalid] = useState(false);

    const handleSubmitEvents = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getTokens(username, pwd); //TODO add this and loggedInUser stuff to redux store
       // Get token(s) from cookies
    }

    // This is probably a bad way to handle input changes
    const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const pwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(event.target.value);
    }

    const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const loginMode = () => {
        return (
            <form className="loginForm" onSubmit={handleSubmitEvents}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" onChange={usernameChange}></input>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" onChange={pwdChange}></input>
                <button type="submit">Log In</button>
            </form>
        )
    }

    const signupMode = () => {
        return (
            <form className="loginForm" onSubmit={handleSubmitEvents}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" onChange={emailChange}></input>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" onChange={usernameChange}></input>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" onChange={pwdChange}></input>
                <button type="submit">Sign Up</button>
            </form>
        )
    }

    return (
        <div id="loginbox">
            <div className="modeSwitch">
                <ul>
                    <li className={login? "active" : "inactive"}><button onClick={e => {return(setLogin(true))}}>Log In</button></li>
                    <li className={login? "inactive" : "active"}><button onClick={e => {return(setLogin(false))}}>Sign Up</button></li>
                </ul>
            </div>
            {login ? loginMode() : signupMode()}
        </div>
    )
}

export default LoginBox