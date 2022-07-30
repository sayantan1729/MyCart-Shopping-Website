import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token =req.body.token
        let user= jwt.verify(token,'jwtsecret')
        let dbuser= await User.findOne({email:user.email})
        const bytes  = CryptoJS.AES.decrypt(dbuser.password, 'secret123');
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        
        if(req.body.npassword==req.body.cpassword){
        let dbusern= await User.findOneAndUpdate({email:user.email}, {password : CryptoJS.AES.encrypt(req.body.cpassword,'secret123').toString()})

        res.status(200).json({success: true})
        }
    }
    else {
        res.status(400).json({ error: "error" })
    }

}
export default connectDb(handler);
  