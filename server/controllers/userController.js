const User = require('../models/User')

module.exports = {
    getUser: (req, res) => {
        console.log("*** get specific user ***")
        var email = req.params.email
        console.log(email)
        User.find({email:email}, (error, user)=>{
            if(error){
                return res.status(500).json({
                    message: "Error fetching specific user"
                })
            }
            console.log(user)
            return res.json({length: user.length, recordset:user});
            
        })
    }
}

