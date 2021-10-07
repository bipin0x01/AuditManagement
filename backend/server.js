import express from "express"

const app=express()

app.get("/",(req,res)=>{
    res.send("Kaji is gay")
})

app.listen(5000,()=>{
    console.log("Listening on 5000")
})