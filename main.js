const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const database = require('./data.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/u/:id', (req, res) => {
    const shortCode = req.params.id
    const url = getUrl(shortCode)
    if (url){
        res.redirect(url)
    }else{
      res.send(`ERROR | Url (${shortCode}) not founded.`)
    }
})

const getUrl = (shortCode) => {
    const db = JSON.parse(JSON.stringify(database))
    console.log(shortCode)
    const url = db[shortCode]
    console.log(url)
    return url
}


app.listen(port, () => {
  console.log(`Webserver started`)
})