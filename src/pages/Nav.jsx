import './Nav.css';
import logo from '../assets/just-logo.svg';

function Nav(){
    return (
        <div className={"section-nav"}>
            <div><img className={"logo"} src={logo} alt=""/></div>
            <h6>210-888-9050</h6>

        </div>
    );
}

export default Nav;