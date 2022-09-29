import PropTypes from 'prop-types';
import './NavIcon.css';

function NavIcon({src, descripition}){
    return(
        <div className="navIcon">
            <img src={src} alt={descripition}/>
        </div>
    )
}

NavIcon.propTypes = {
    src: PropTypes.string,
    descripition: PropTypes.string,
}

export default NavIcon;
