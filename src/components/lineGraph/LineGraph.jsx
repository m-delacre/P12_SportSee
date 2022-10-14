import './LineGraph.css';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from 'prop-types';

function LineGraph({sessionsList}){
    const days =["L","M","M","J","V","S","D"];
    const data = [];

    /**
     * build an array of object with session duration per day
     */
    for(let i = 0; i < days.length; i++){
        let newData = 
            {
                day: days[i],
                sessionDuration: sessionsList[i].sessionLength
            }
        data.push(newData);
    };

    /**
     * 
     * 
     * @returns custom tooltip or null if not active
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='custom-tooltip-duration'>
                    <p className='custom-tooltip-duration-text'>{payload[0].value} min</p>
                </div>
            );
        }
    
        return null;
    };

    return(
        <div className='lineGraph'>
            <p className='lineGraph-title'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                    <XAxis dataKey="day" stroke="white"/>
                    <Tooltip offset={15} content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="sessionDuration"
                        stroke="white"
                        dot={false}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

LineGraph.propTypes = {
    sessionsList: PropTypes.array,
}

export default LineGraph;