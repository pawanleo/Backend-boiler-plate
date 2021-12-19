const { createUserServices } = require("../services/authservice")

exports.signUp=async(req,res)=>{

    try {
        
        const data =await createUserServices(req);

        res.json({message:"Success", data:data})
    } catch (error) {
        //middleware to handle error-->
    }

     

}