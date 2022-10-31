class DataFormat{
    static dataFormat_BarGraph(sessions,activities){
        const data = [];
        /**
         * create an array of object composed of the two arrays in parameter
         */
        for(let i = 0; i < sessions.length; i++){
            let newData = {
            "day": sessions[i].day,
            "poids": activities[i].kilogram,
            "calories": activities[i].calories,
            "sessionDuration": sessions[i].sessionLength,
            }
            data.push(newData);
        }
        return data;
    }

    static dataFormat_LineGraph(sessions){
        const days =["L","M","M","J","V","S","D"];
        const data = [];
    
        /**
         * build an array of object with session duration per day
         */
        for(let i = 0; i < days.length; i++){
            let newData = 
                {
                    day: days[i],
                    sessionDuration: sessions[i].sessionLength
                }
            data.push(newData);
        }; 

        return data;
    }

    static dataFormat_RadarGraph(performances){
        const data = [];
        for(let i = 0; i < performances.data.length; i++){
            //switch to translate the type of activity in French
            let type = "";
            switch (performances.kind[i+1]) {
                  case "cardio":
                    type ="Cardio";
                    break;
                  case "energy":
                    type ="Energie";
                    break;
                  case "strength":
                    type ="Force";
                    break;
                  case "endurance":
                    type ="Endurance";
                    break;
                  case "speed":
                    type ="Vitesse";
                    break;
                  case "intensity":
                      type="Intensité"
                      break;
                  default:
                    type = "type";
                    break;
              }
            let newData = 
                {
                    type: type,
                    value: performances.data[i].value
                }
            data.push(newData);
          }

        return data;
    }
}

export default DataFormat;