require("dotenv").config({ path: "./config/.env" })
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyparser = require("body-parser")

//Database connection is here
require("./config/db")()

app.set("view engine", "pug")
app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: false }))
app.use("/", require("./routes/index"))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
