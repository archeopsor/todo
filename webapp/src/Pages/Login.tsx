import { useState } from 'react';
import "./css/Login.css";

import LoginBox from "../Components/Login";

interface LoginProps {
    login: boolean;
}

export const LoginPage = (props: LoginProps) => {

    return (
        <div className="container">
            <div className = "loginbox">
                <LoginBox login={props.login} />
            </div>
        </div>
    )
}

// export const LoginPage = () => {
//     const [signup, setSignup] = useState(false);

//     const loginForm = () => {
//         <form id="login" className="input-group">
//             <input type="text" className="input-field" placeholder="Username" required />
//             <input type="password" className="input-field" placeholder="Password" required />
//             <input type="checkbox" className="checkbox" /><span>Remember Me</span>
//             <button type="submit" className="submit-btn">Log in</button>
//         </form>
//     }

//     const signupForm = () => {
//         <form id="signup" className="input-group">
//             <input type="text" className="input-field" placeholder="Username" required />
//             <input type="password" className="input-field" placeholder="Password" required />
//             <input type="email" className="input-field" placeholder="Email address" required />
//             <button type="submit" className="submit-btn">Sign Up</button>
//         </form>
//     }

//     return (
//         <div className="login-page">
//             <div className="login-box">
//                 <div className="button-box">
//                     <div id="btn"></div>
//                     <button type="button" className="toggle-btn">Log In</button>
//                     <button type="button" className="toggle-btn">Sign Up</button>
//                 </div>
//                 {signup? signupForm() : loginForm()}
//             </div>
//         </div>
//     )
// }