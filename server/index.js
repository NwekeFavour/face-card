require("dotenv").config()
const express = require("express")
const app = express();
const cors= require("cors")


app.use(cors())
const PORT = 3000 || process.env.PORT

app.get("/", (req,res) => {
    res.json({message:"welcome to my site!!"})
})

  
app.listen(PORT, () => {
    console.log(`server running on ${PORT} : http://localhost:${PORT}`)
})