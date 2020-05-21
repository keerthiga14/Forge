const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
// var faker = require('faker')

mongoose.connect("mongodb+srv://admin:admin@cluster0-cwqar.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)})

const dataSchema = new mongoose.Schema({
    name:"String",
    team:"String"
})

var User = mongoose.model("User",dataSchema)

app.use(bodyParser.urlencoded(
    { extended: true }
))

app.use(express.static('views'))

// app.get('/',(req,res)=>{
//     // res.sendFile('index.ejs')
//     // var route = req.params.id
//     // var yrname = 'strap'
//     // var fakeName = faker.name.findName
//     // var fakeJob = faker.name.jobTitle
//     // var fakeJobDesc = faker.name.jobDescriptor
//     res.render("index.ejs")
// })
app.get('/', (req,res)=>
{
   User.find({},(err,data)=>{
       if(err){
           console.log('Cannot find data',err)
       }
       else{
           res.render('index.ejs',{user:data})
       }
   })
    // res.render('index.ejs')
})

app.post('/test',(req,res)=>{
    // console.log(req.body)
    var newUser = new User({
        name:req.body.name,
        team:req.body.team
    }).save().then(savedData => console.log("data saved",savedData)).catch(err => console.log)
    res.redirect('/')
})

app.listen(8000,()=>{
    console.log('server started @8000')
})