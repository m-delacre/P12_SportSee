class callAPI{

    /** getUserInfo function
     * 
     * retrieve data from an API
     * 
     * @param {number} id 
     * @returns info about the user like her/his name, age, score, macro count
     */
    static async getUserInfo(id){
        let _data = await fetch(`http://localhost:4000/user/${id}`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }


    /** getUserActivity function
     * 
     * retrieve data from an API
     * 
     * @param {number} id 
     * @returns session information (session date, the weight of the user during this sessions , number of calories burned)
     */
    static async getUserActivity(id){
        let _data = await fetch(`http://localhost:4000/user/${id}/activity`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }


    /** getUserPerformance function
     * 
     * retrieve data from an API
     *  
     * @param {number} id 
     * @returns a performance score on a given activity
     */
    static async getUserPerformance(id){
        let _data = await fetch(`http://localhost:4000/user/${id}/performance`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }


    /** getUserAverageSession function
     * 
     * retrieve data from an API
     *  
     * @param {number} id 
     * @returns how long a session lasts 
     */
    static async getUserAverageSession(id){
        let _data = await fetch(`http://localhost:4000/user/${id}/average-sessions`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }
}

export default callAPI;