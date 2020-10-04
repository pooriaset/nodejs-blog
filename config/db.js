const mongoose = require('mongoose')

module.exports = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected!")
    } catch (error) {
        console.log(error)
        throw error
    }
}

