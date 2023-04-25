//import
const express = require('express')
const cors = require('cors')

//invoke
const app = express()

//mildware
app.use(express.json())
app.use(cors())

//endpoints
const {getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

app.get(`/api/houses`, getAllHouses)
app.delete(`/api/houses/:house_id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:house_id`, updateHouse)

//listen 
app.listen(4004, () => console.log(`running on 4004`))