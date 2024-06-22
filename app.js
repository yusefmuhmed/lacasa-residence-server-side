const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
require("./DB/connect")
app.use(express.json())


app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})
module.exports = app