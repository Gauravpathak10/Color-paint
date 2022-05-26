import express from "express";
import cors from'cors'
import mongoose from "mongoose";
import bodyparser from 'body-parser'
import router from "./Settings/Route";
const app = express()



app.use(bodyparser.json())
app.use(cors())
app.use('/', router)

mongoose.connect('mongodb://localhost:27017/draw')
    .then((res) => {
        console.log('momgodb connected')
    })
    .catch((err) => {
        console.log(err)
    })




app.listen(5000, () => {
    console.log('server running')
})
