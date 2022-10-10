import './LineGraph.css';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend } from "recharts";
//import PropTypes from 'prop-types';

function LineGraph({sessionsList}){
    const jours =["L","M","M","J","V","S","D"];
    const data = [];
    for(let i = 0; i < jours.length; i++){
        let newData = 
            {
                day: jours[i],
                sessionDuration: sessionsList[i].sessionLength
            }
        data.push(newData);
    }

    return(
        <div className='lineGraph'>
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
                    <Tooltip content={`${data.sessionDuration}min`} />
                    <Line
                        type="monotone"
                        dataKey="sessionDuration"
                        stroke="white"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

LineGraph.propTypes = {
    //performance: PropTypes.object,
}

export default LineGraph;