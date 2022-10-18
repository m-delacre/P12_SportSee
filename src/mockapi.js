import { USER_MAIN_DATA } from "./data/localdata.js";
import { USER_ACTIVITY } from "./data/localdata.js";
import { USER_PERFORMANCE } from "./data/localdata.js";
import { USER_AVERAGE_SESSIONS } from "./data/localdata.js";

class mockedData{

    /** getMockUserInfo function
     * 
     * @param {number} id 
     * @returns info about the user like her/his name, age, score, macro count
     */
    static getMockUserInfo(id){
        let _data = USER_MAIN_DATA
        _data = _data.find(user => user.id === id)
        return(_data)
    }


    /** getMockUserActivity function
     * 
     * @param {number} id 
     * @returns session information (session date, the weight of the user during this sessions , number of calories burned)
     */
    static getMockUserActivity(id){
        let _data = USER_ACTIVITY
        _data = _data.find(user => user.userId === id)
        return(_data)
    }


    /** getMockUserPerformance function
     * 
     * @param {number} id 
     * @returns a performance score on a given activity
     */
    static getMockUserPerformance(id){
        let _data = USER_PERFORMANCE
        _data = _data.find(user => user.userId === id)
        return(_data)
    }

    /** getMockUserAverageSession function
     * 
     * @param {number} id 
     * @returns how long a session lasts 
     */
    static getMockUserAverageSession(id){
        let _data = USER_AVERAGE_SESSIONS
        _data = _data.find(user => user.userId === id)
        return(_data)
    }
}

export default mockedData;