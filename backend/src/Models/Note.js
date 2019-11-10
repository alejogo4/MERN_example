const {Schema, model} = require("mongoose");

const NoteSchema = new Schema({
    tittle:String,
    description:{
        type:String,
        required: true
    },
    author:String,
    date:{
        type:Date,
        default: Date.now
    }
},{
    timestamps:true
})

module.exports = model("Note",NoteSchema);