import { getTokens } from "../Requests/Login";
import { Button, Form } from 'react-bootstrap';
import React, { useState } from "react";

const LoginBox = () => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

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

    return (
        <div>
            <Form onSubmit={handleSubmitEvents}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" onChange={usernameChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={pwdChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default LoginBox