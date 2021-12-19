const { createUserDao } = require("../dao/authdao")

exports.createUserServices= async(req)=>{
    try {
        return createUserDao(req.body);
    }
    catch(error){
        throw new Error(error)
    }
}