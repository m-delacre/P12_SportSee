import './RadialGraph.css';
import React from "react";
import {ResponsiveContainer,RadialBarChart, RadialBar} from "recharts";
import PropTypes from 'prop-types';

/**
 * Component for showing where the user is in their goals
 * 
 * @param {number} userScore - todayScore example : 0.12
 * @returns a RadialBarChart component using recharts library 
 */
function RadialGraph({userScore}){
    let getScore = userScore
    let score = 0
    //percentage converter
    getScore === 1 ? score = 100 : score = (getScore * 100).toFixed(0)
    const data = [
        {
          todayScore:100,
          fill: "white"
        },
        {
          todayScore: score,
          fill: "#E60000"
        }
    ]
    
    return(
        <div className='radialGraph'>
            <p className='score'>Score</p>
            <div className='infoScore'>
                <p id='scoreGras'>{score}%</p>
                <p>de votre</p>
                <p>objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    startAngle = {90}
                    endAngle = {450}
                    width={500}
                    height={300}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={130}
                    barSize={15}
                    data={data}
                    isAnimationActive = {false}
                    >
                    <RadialBar
                        minAngle={15}
                        background = {false}
                        clockWise
                        dataKey="todayScore"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

RadialGraph.propTypes = {
    /**
     * user score
     */
    userScore: PropTypes.number,
}

export default RadialGraph;