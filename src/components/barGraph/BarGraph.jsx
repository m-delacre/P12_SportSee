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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      console.log(payload)
        return (
            <div className='custom-tooltip-kgKcal'>
                <p className='custom-tooltip-kgKcal-text'>{payload[0].value} kg</p>
                <p className='custom-tooltip-kgKcal-text'>{payload[1].value} Kcal</p>
            </div>
        );
    }

    return null;
  };

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
          <Tooltip offset={50} content={<CustomTooltip payload={data} />} />
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