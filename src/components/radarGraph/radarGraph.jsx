import './radarGraph.css';
import React from "react";
import {ResponsiveContainer,Radar,RadarChart,PolarGrid,PolarAngleAxis} from "recharts";
import PropTypes from 'prop-types';

/**
 * Component for showing user scores per activity
 * 
 * @param {array} performance - user scores per activity
 * @returns a BarChart component using recharts library 
 */
function RadarGraph({performance}){
    const data = [];
    /**
     * create an array of object composed only of the data that we need from the array in parameter(performance)
     */
    for(let i = 0; i < performance.data.length; i++){
      //switch to translate the type of activity in French
      let type = "";
      switch (performance.kind[i+1]) {
            case "cardio":
              // Instructions à exécuter lorsque le résultat
              // de l'expression correspond à valeur1
              type ="Cardio";
              break;
            case "energy":
              // Instructions à exécuter lorsque le résultat
              // de l'expression correspond à valeur2
              type ="Energie";
              break;
            case "strength":
              // Instructions à exécuter lorsque le résultat
              // de l'expression correspond à valeur2
              type ="Force";
              break;
            case "endurance":
              // Instructions à exécuter lorsque le résultat
              // de l'expression correspond à valeur2
              type ="Endurance";
              break;
            case "speed":
              // Instructions à exécuter lorsque le résultat
              // de l'expression correspond à valeur2
              type ="Vitesse";
              break;
            case "intensity":
                type="Intensité"
                break;
            default:
              // Instructions à exécuter lorsqu'aucune des valeurs
              // ne correspond
              type = "type";
              break;
        }
      let newData = 
          {
              type: type,
              value: performance.data[i].value
          }
      data.push(newData);
    }
    
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
    performance: PropTypes.object,
}

export default RadarGraph;