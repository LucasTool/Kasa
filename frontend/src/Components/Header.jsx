import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Header.scss'



const Header = () => {
    return (
        <header>
            <nav className='navigation'>
                <NavLink to="/" className="logo-link">
                    <img src={Logo} alt="Logo Kasa" className='Logo.png' />
                </NavLink>
                <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'liActif' : ''}>
                                Accueil
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'liActif' : ''}>
                                A propos
                            </NavLink>
                        </li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Header;