import './radarGraph.css';
import React from "react";
import {ResponsiveContainer,Radar,RadarChart,PolarGrid,PolarAngleAxis} from "recharts";
import PropTypes from 'prop-types';

/**
 * Component for showing user scores per activity
 * 
 * @param {array} data - user scores per activity
 * @returns a BarChart component using recharts library 
 */
function RadarGraph({data}){   
    return(
        <div className='radarGraph'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    width={200}
                    height={200}
                    data={data}
                    >
                    <PolarGrid />
                    <PolarAngleAxis dataKey={"type"} tick={{fontSize: 10,fill: 'white' }}/>
                    
                    <Radar
                        dataKey="value"
                        stroke="#E60000"
                        fill="#E60000"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

RadarGraph.propTypes = {
    /**
     * user activities
     */
    data: PropTypes.array,
}

export default RadarGraph;