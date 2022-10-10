import './BarGraph.css';
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import PropTypes from 'prop-types';


function BarGraph({sessionsList, activityList}) {
  const data = [];
  for(let i = 0; i < sessionsList.length; i++){
    let newData = {
      "day": sessionsList[i].day,
      "poids": activityList[i].kilogram,
      "calories": activityList[i].calories,
      "sessionDuration": sessionsList[i].sessionLength,
    }
    data.push(newData);
  }

  return (
    <div className='barGraph'>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart className='barGraphPos'data={data}>
          <p className='activiteQuoti'>Activité quotidienne</p>
          <Legend
            align='right'
            verticalAlign='top'
            iconType={'circle'}
            height={50}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="poids" orientation="right"/>
          <Tooltip />
          <Bar dataKey="poids" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} name={'Poids (kg)'}/>
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} name={'Calories brulées (kCal)'}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarGraph.propTypes = {
  sessionsList: PropTypes.array,
  activityList: PropTypes.array,
}

export default BarGraph;