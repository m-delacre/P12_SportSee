import muscu from '../../assets/muscu.svg';
import piscine from '../../assets/piscine.svg';
import velo from '../../assets/velo.svg';
import yoga from '../../assets/yoga.svg';
import NavIcon from '../navIcon/NavIcon';
import './VerticalNav.css';

/**
 * Component for showing a vertical navigation
 * 
 * @returns a component 
 */
function VerticalNav(){
    return(
        <div className='vNav'>
            <div className='vNav-icon'>
                <div className='icon'>
                    <NavIcon
                        src={yoga}
                        descripition = "yoga"
                    />
                </div>
                <div className='icon'>
                    <NavIcon
                        src={piscine}
                        descripition = "piscine"
                    />
                </div>
                <div className='icon'>
                    <NavIcon
                        src={velo}
                        descripition = "velo"
                    />
                    </div>
                <div className='icon'>
                    <NavIcon
                        src={muscu}
                        descripition = "muscu"
                    />
                </div>
            </div>
                    
            <div className='vNav-text'>
                <p>Copiryght, SportSee 2020</p>
            </div>
        </div>
    )
}

export default VerticalNav;