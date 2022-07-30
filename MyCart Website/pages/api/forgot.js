import Forgot from "../../models/Forgot"
import User from '../../models/User'

export default function handler(req, res) {
    if(req.body.sendMail){
    let token=`1jvjhdhdgkjlhkfhd24bfhgdgxg3bk8cd`
    let forgot= new Forgot({
        email:req.body.email,
        token:token
    })
    let email= `We have sent you this email in response to your request to reset your password on MyCart.com. 
    <br/><br/>

    To reset your password, please follow the link below:

    <a href="https://localhost:3000/forgot?token=${token}">Click here to reset your password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your My Account Page and change your password.

    <br/><br/>`
}
else{
     console.log('Reset user password')
}
    res.status(200).json({ success:true })
  }
  