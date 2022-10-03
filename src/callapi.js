class callAPI{

    static async getUserInfo(id){
        let _data = await fetch(`http://localhost:4000/user/${id}`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }

    static async getUserActivity(id){
        let _data = await fetch(`http://localhost:4000/user/${id}/activity`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }

    static async getUserPerformance(id){
        let _data = await fetch(`http://localhost:4000/user/${id}/performance`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }

    static async getUserAverageSession(id){
        let _data = await fetch(`http://localhost:4000/user/${id}/average-sessions`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
    }
}

export default callAPI;