const Client = require('../models/Client')

module.exports = {
    getAll: (req, res) => {
        console.log("*** get all clients ***")
        Client.find({}, (error, clients)=>{
            if(error){
                return res.status(500).json({
                    message: "Error fetching all clients"
                })
            }
            console.log(clients)
            return res.json({length: clients.length, recordset:clients});
            
        })
    }
}

