const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  console.log('results backend_1')
  res.json('hello world')
})

app.get('/device/:device', (req, res) => {
 
  console.log('results backend_2')
  const { device } = req.params
  axios.get(`http://node-express-env.eba-fsapbi4a.us-east-2.elasticbeanstalk.com/device/${device}`)
    .then(function (response) {
      // handle success
      res.json(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })


})

app.get('/search/:dynamic', (req, res) => {
 
  console.log('results backend_3')
  const { dynamic }  = req.params

  axios.get(`http://node-express-env.eba-fsapbi4a.us-east-2.elasticbeanstalk.com/search/${dynamic}`)
    .then(function (response) {
      // handle success
      res.json(response.data)
      //res.send({'text': text})
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })

})

app.listen(8000, () => (`Server is running in port ${PORT}`))

//http://localhost:3000/device/apple_iphone_13_pro_max-11089 /device/:device
//http://localhost:3000/device/samsung_galaxy_s20_fe_5g-10377
//http://localhost:3000/brand/apple-phones-48 /brand/:brand
//http://localhost:3000/search/casio /search/:device