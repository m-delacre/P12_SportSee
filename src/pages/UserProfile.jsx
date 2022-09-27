import Header from '../components/header/Header';
import './UserProfile.css';
import MacroCard from '../components/macroCard/MacroCard.jsx'

function UserProfile(){
    return(
        <div className="userpage">
            <div className='userpage-header'>
                <Header/>
            </div>
            <div className='userpage-content'>
                <div className='content-nav'>
                    <div className='nav-waiter'>
                        <div className='squareWait'></div>
                        <div className='squareWait'></div>
                        <div className='squareWait'></div>
                        <div className='squareWait'></div>
                    </div>
                    
                    <div className='nav-legal'>
                        <p>Copiryght, SportSee 2020</p>
                    </div>
                </div>
                <div className='content-info'>
                    <div className='content-info-hello'>
                        <p>Bonjour<em>Thomas</em></p>
                        <p>Félicitation vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className='info-graphs'>

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
    )
}

export default UserProfile;
