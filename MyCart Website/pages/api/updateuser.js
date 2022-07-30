import UserDetail from "../../models/UserDetail"
import connectDb from "../../middleware/mongoose"
var jwt = require('jsonwebtoken');

const handler=async(req,res)=>{
    if(req.method =='POST'){
        let token=req.body.token
        let user= jwt.verify(token,'jwtsecret')
        let dbuser= await UserDetail.findOne({email:user.email})
        const{name,email,phone,address}= dbuser
        res.status(200).json({ name,email,phone,address})
    }
    else{
        res.status(400).json({ error:"error"})
    }
    
}
export default connectDb(handler);
  