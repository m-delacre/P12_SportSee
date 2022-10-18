import PropTypes from 'prop-types';
import './NavIcon.css';


/**
 * Component for showing activity icon in the vertical nav
 * 
 * @param {string} src - icon image 
 * @param {string} descripition - icon image text for alt
 * @returns  an icon component 
 */
function NavIcon({src, descripition}){
    return(
        <div className="navIcon">
            <img src={src} alt={descripition}/>
        </div>
    )
}

NavIcon.propTypes = {
    /**
     * icon image
     */
    src: PropTypes.string,

    /**
     * icon image text for accessibility
     */
    descripition: PropTypes.string,
}

export default NavIcon;
