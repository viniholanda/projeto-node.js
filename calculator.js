const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({extended: true})) //necessario para usar body parser


app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html') //dirname acha o diretorio
})

app.post("/", function(req, res) {

var num1 = Number(req.body.n1) //Number é para trabalhar com numeros, sem ele o valor vira string
var num2 = Number(req.body.n2) 

var result = num1 + num2

  res.send("The result is " + result)
})

app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function(req, res){

let weight = parseFloat(req.body.weight) 
let height = parseFloat(req.body.height)

let bmi = weight / (height * height)

res.send("Your BMI is " + bmi)

})

app.listen(port, () => console.log(`Example app listening on port 
!`))