const mongoose = require("mongoose")

let articleSchema = new mongoose.Schema({
    title : {type : String , required : true},
    content : {type : String , required : true},
    isDeActive : {type : Boolean},
    date : {type : Date , default : new Date()},
    user_id : {type : mongoose.Types.ObjectId}
});

module.exports = mongoose.model("article" , articleSchema)
