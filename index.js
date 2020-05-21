const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
// var faker = require('faker')

mongoose.connect("mongodb+srv://admin:<password>@cluster0-tntjf.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)})

app.use(bodyParser.urlencoded(
    { extended: true }
))

app.use(express.static('views'))

app.get('/',(req,res)=>{
    // res.sendFile('index.ejs')
    // var route = req.params.id
    // var yrname = 'strap'
    // var fakeName = faker.name.findName
    // var fakeJob = faker.name.jobTitle
    // var fakeJobDesc = faker.name.jobDescriptor
    res.render("index.ejs")
})

app.post('/test',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

app.listen(8000,()=>{
    console.log('server started @8000')
})