import logo from '../../assets/logo_sportsee.png';
import './Header.css';

function Header(){
    return(
        <div className="header">
            <img src={logo} alt="sportsee logo"/>
            <div className='header-nav'>
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </div>
            
        </div>
    )
}

export default Header;
