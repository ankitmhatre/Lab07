const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.json({
        "status" : "active"
    })

})
app.get('/products', (req, res) => {

    
    res.sendFile(path.join(__dirname, '/assets', 'products.json'));

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})