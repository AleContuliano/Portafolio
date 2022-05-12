const express = requiere('express')

const app = express()

app.get('/api/index', (req, res)=>{
    res.send('hola prueba')
})

module.exports = app