const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.use(express.static('pages'));   // allows to serve static images through express server
app.use('/image', express.static('image'));     // fetches image folder to server
app.use('/style', express.static('style'));  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/home.html'))
})

app.get('/student-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/student-form.html'))
})

app.get('/company-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/company-form.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/login.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})