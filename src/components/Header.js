import {RESTAURANT_LOGO_URL} from "../utils/constants"
const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;