const express = require('express')
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("it is works")
})
app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log("server is runnig in the port 3000")
})
