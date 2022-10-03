import './BarGraph.css';
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import PropTypes from 'prop-types';


function BarGraph({sessionsList, activityList}) {
  const data = [];
  for(let i = 0; i < 7; i++){
    let newData = {
      "day": sessionsList[i].day,
      "poids": activityList[i].kilogram,
      "calories": activityList[i].calories,
      "sessionDuration": sessionsList[i].sessionLength,
    }
    data.push(newData);
  }

  let a = 0.954
  let b = 0
  a === 1 ? b = 100 : b = (a * 100).toFixed(0)
  console.log(b)

  return (
    <div className='barGraph'>
      <BarChart width={900} height={200} data={data}>
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="poids" orientation="right"/>
        <Tooltip />
        <Bar dataKey="day" fill="#282D30" />
        <Bar dataKey="sessionLength" fill="#E60000" />
      </BarChart>
    </div>
  );
}

BarGraph.propTypes = {
  sessionsList: PropTypes.array,
  activityList: PropTypes.array,
}

export default BarGraph;