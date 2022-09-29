import Header from '../components/header/Header';
import './UserProfile.css';
import MacroCard from '../components/macroCard/MacroCard.jsx';
import VerticalNav from '../components/verticalNav/VerticalNav';

function UserProfile(){
    return(
        <div className="userpage">
            <div className='userpage-header'>
                <Header/>
            </div>
            <div className='userpage-content'>
                <div className='verticalNav'>
                   <VerticalNav/> 
                </div>
                <div className='content-info'>
                    <div className='content-info-hello'>
                        <div className='hello'>
                            <p>Bonjour <em>Thomas</em></p>
                        </div>
                        <div className='congrats'>
                            <p>Félicitation vous avez explosé vos objectifs hier 👏</p>
                        </div>
                    </div>
                    <div className='content-info-stats'>
                        <div className='info-graphs'>
                            <div className='graphs-top'>
                                <div className='graphs-bar'>

                                </div>
                            </div>
                            <div className='graphs-bot'>
                                <div className='graphs-line'>

                                </div>
                                <div className='graphs-radar'>

                                </div>
                                <div className='graphs-radial'></div>
                            </div>
                        </div>
                        <div className='info-macro'>
                            <MacroCard
                                calories = {1930}
                                proteines = {155}
                                glucides = {290}
                                lipides = {50}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
