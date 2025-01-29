import {RESTAURANT_LOGO_URL} from "../utils/constants"
import {useState} from 'react';

const Header = () => {
    const [loginBtnName, setLoginBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={RESTAURANT_LOGO_URL} />
            </div>
            <div className="nav-itmes">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtnName === "Login" ? setLoginBtnName('Logout') : setLoginBtnName("Login");
                    }}>
                        {loginBtnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;