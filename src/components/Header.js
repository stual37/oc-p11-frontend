
import logo from '../img/logo.png';
import '../css/Header.css';
//import App from './App';
//import Hospitals from './Hospitals';
//import Specialities from './Specialities';

function Header() {
    return(
        <div className='Header'>
            <img src={logo} className="Logo" alt="logo" />
        </div>
    );
}

export default Header;
