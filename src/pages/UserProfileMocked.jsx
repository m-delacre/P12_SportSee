import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import './UserProfile.css';
import mockedData from '../mockapi';
import MacroCard from '../components/macroCard/MacroCard.jsx';
import VerticalNav from '../components/verticalNav/VerticalNav';
import BarGraph from '../components/barGraph/BarGraph.jsx';
import RadarGraph from '../components/radarGraph/radarGraph';
import RadialGraph from '../components/radialGraph/RadialGraph';
import LineGraph from '../components/lineGraph/LineGraph';
import { useParams } from 'react-router-dom';
import DataFormat from '../data/dataFormat';

/**
 * Component for showing a user's personal page
 * 
 * @returns a component with all the user info 
 */
function UserProfileMocked(){
    const {mockuserid} = useParams();
    const id = parseInt(mockuserid);
    const [userData, setUserData] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const [userAverageSession, setUserAverageSession] = useState();
    
    /**
     * Use mocked data
     */
     useEffect(() => {
        //user info
        const dataUser = mockedData.getMockUserInfo(id)
        setUserData(dataUser);
        //user activity
        const dataActivity = mockedData.getMockUserActivity(id)
        setUserActivity(dataActivity);
        //user perf
        const dataPerformance = mockedData.getMockUserPerformance(id)
        setUserPerformance(dataPerformance);
        //user sessions
        const dataSessions = mockedData.getMockUserAverageSession(id)
        setUserAverageSession(dataSessions);
    }, []);

    if (userData === undefined || userActivity === undefined || userPerformance === undefined || userAverageSession === undefined) {
        return (
            <div className="userpage">
            <div className='userpage-header'>
                <Header/>
            </div>
            <div className='userpage-content'>
                <div className='verticalNav'>
                   <VerticalNav/> 
                </div>
                <div className='content-info'>
                    <p className='apinotworking'>Pas de réponse de l'API...</p>
                </div>
            </div>
        </div>
        );
    }
    

    //user info variables
    const firstName = userData.userInfos.firstName;
    const calorie = userData.keyData.calorieCount;
    const proteine = userData.keyData.proteinCount;
    const glucide = userData.keyData.carbohydrateCount;
    const lipide = userData.keyData.lipidCount;
    const userScore = userData.todayScore ;
    const sessionsList = userAverageSession.sessions;
    const activityList = userActivity.sessions;

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
                            <p>Bonjour <em>{firstName}</em></p>
                        </div>
                        <div className='congrats'>
                            <p>Félicitation vous avez explosé vos objectifs hier 👏</p>
                        </div>
                    </div>
                    <div className='content-info-stats'>
                        <div className='info-graphs'>
                            <div className='graphs-top'>
                                <div className='graphs-bar'>
                                    <BarGraph data={DataFormat.dataFormat_BarGraph(sessionsList,activityList)}/>
                                </div>
                            </div>
                            <div className='graphs-bot'>
                                <div className='graphs-line'>
                                    <LineGraph data={DataFormat.dataFormat_LineGraph(sessionsList)}/>
                                </div>
                                <div className='graphs-radar'>
                                    <RadarGraph data={DataFormat.dataFormat_RadarGraph(userPerformance)}/>
                                </div>
                                <div className='graphs-radial'>
                                    <RadialGraph userScore={userScore}/>
                                </div>
                            </div>
                        </div>
                        <div className='info-macro'>
                            <MacroCard
                                calories = {calorie}
                                proteines = {proteine}
                                glucides = {glucide}
                                lipides = {lipide}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileMocked;
