import connectDb from "../../middleware/mongoose"
import UserDetail from "../../models/UserDetail"
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token =req.body.token
        let user= jwt.verify(token,'jwtsecret')
        let dbuser= await UserDetail.findOneAndUpdate({email:user.email},{name:req.body.name, phone:req.body.phone, address:req.body.address})
        const{name,phone,address}=dbuser

        res.status(200).json({name,phone,address})
    }
    else {
        res.status(400).json({ error: "error" })
    }

}
export default connectDb(handler);
  