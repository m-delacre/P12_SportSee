import logo from '../../assets/logo_sportsee.png';
import './Header.css';
import { Link } from 'react-router-dom';

/**
 * 
 * @returns returns header and navigation
 */
function Header(){
    return(
        <div className="header">
            <Link to="/">
                <img src={logo} alt="sportsee logo"/>
            </Link>
            
            <div className='header-nav'>
                <Link to="/">
                    <p>Accueil</p>
                </Link>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </div>
            
        </div>
    )
}

export default Header;
