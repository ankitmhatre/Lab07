const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.json({
        "status" : "active"
    })

})
app.get('/products', (req, res) => {

    
    fs.readFile('./assets/products.json', (err, json) => {
        let obj = JSON.parse(json);

        res.json(obj);
    });


})


app.use('/static', express.static(path.join(__dirname, './assets/images')))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})