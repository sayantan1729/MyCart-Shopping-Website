const mongoose = require('mongoose');

const UserDetailSchema= new mongoose.Schema({
    name: {type: String, required:true},
    address: {type: String, required:true},
    phone: {type: String, required:true}
    
    
  },{timestamps: true});

  // mongoose.models={}
  
  export default mongoose.models.UserDetail || mongoose.model("UserDetail",UserDetailSchema);