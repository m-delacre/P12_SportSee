import './MacroCard.css';
import PropTypes from 'prop-types';
import burger from '../../assets/Lipides.svg'
import flamme from '../../assets/Calories.svg'
import pomme from '../../assets/Glucides.svg'
import poulet from '../../assets/Proteines.svg'

function MacroCard({calories, proteines, glucides, lipides}){
    return(
        <div className='allCards'>
            {/* carte calories*/}
            <div className='card'>
                <div className='card-icon'>
                    <img src={flamme} alt='flamme icon'/>
                </div>
                <div className='card-text'>
                    <p className='mesure'>{calories}kCal</p>
                    <p>Calories</p>
                </div>
            </div>
            {/* carte Proteines*/}
            <div className='card'>
                <div className='card-icon'>
                    <img src={poulet} alt='poulet icon'/>
                </div>
                <div className='card-text'>
                    <p className='mesure'>{proteines}g</p>
                    <p>Proteines</p>
                </div>
            </div>
            {/* carte calories*/}
            <div className='card'>
                <div className='card-icon'>
                    <img src={pomme} alt='pomme icon'/>
                </div>
                <div className='card-text'>
                    <p className='mesure'>{glucides}g</p>
                    <p>Glucides</p>
                </div>
            </div>
            {/* carte calories*/}
            <div className='card'>
                <div className='card-icon'>
                    <img src={burger} alt='burger icon'/>
                </div>
                <div className='card-text'>
                    <p className='mesure'>{lipides}g</p>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

MacroCard.propTypes = {
    calories: PropTypes.number,
    proteines: PropTypes.number,
    glucides: PropTypes.number,
    lipides: PropTypes.number,
}

export default MacroCard;