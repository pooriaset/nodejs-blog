const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email : {type : String , required : true},
    firstname : {type :String},
    lastname : {type : String}
})

module.exports = mongoose.model("user" , userSchema)
