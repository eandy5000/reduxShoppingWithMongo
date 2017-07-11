"use strict"

const express = require('express')
const app = express()
const path = require('path')

app.set('port', (process.env.PORT || 4000))

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(app.get('port'), () => {
    console.log(`Listening on port: ${app.get('port')}`)
})