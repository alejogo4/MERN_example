const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    username:{
        type:String,
        trim:true,
        unique:true
    }
    
},{
    timestamps:true
})

module.exports = model("User",UserSchema);