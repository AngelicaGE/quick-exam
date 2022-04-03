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
    },
    getAllFields: (req, res) => {
        let g, c, s = []
       Client.distinct('gender',  (error, genders)=>{
        if(error){
            return res.status(500).json({
                message: "Error fetching all clients"
            })
        }
        console.log(genders)
        g = genders;
        Client.distinct('country',  (error, countries)=>{
            if(error){
                return res.status(500).json({
                    message: "Error fetching all clients"
                })
            }
            console.log(countries)
            c = countries;
            Client.distinct('state',  (error, states)=>{
                if(error){
                    return res.status(500).json({
                        message: "Error fetching all clients"
                    })
                }
                console.log(states)
                s = states;
                let filters = [
                    {title: 'Género', options: g, field: "gender"},
                    {title: 'País', options: c, field: "country"},
                     {title: 'Estado', options: s, field: "state"}
               ]
               console.log("filters: ")
               console.log(filters)
        
                return res.json(filters);
            })
        })
    })
       




    }
}

