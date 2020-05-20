const express = require('express')
const app = express()
// var faker = require('faker')


app.use(express.static('views'))

app.get('/',(req,res)=>{
    // res.sendFile('index.ejs')
    // var route = req.params.id
    var yrname = 'strap'
    // var fakeName = faker.name.findName
    // var fakeJob = faker.name.jobTitle
    // var fakeJobDesc = faker.name.jobDescriptor
    res.render("index.ejs",{name: yrname})
})


app.listen(8000,()=>{
    console.log('server started @8000')
})