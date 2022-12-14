const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
  res.json('hello world')
})

app.get('/test', (req, res) => {
 
    console.log('results')
    
      const response = axios('http://localhost:3000/device/apple_iphone_13_pro_max-11089')
      res.json(response)

  
})

app.listen(8000, () => (`Server is running in port ${PORT}`))