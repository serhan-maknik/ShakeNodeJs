const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
//app.use(bodyParser.json());
const port = 3000;

// CORS middleware
app.use(cors());

app.post('/shake', (req, res) => {
  // req.body içindeki JSON verisine erişin
  const jsonData = req.body;

  const header = req.header("Accept");
  // console.log(header);
  //  var data = JSON.parse(jsonData);
  console.log(jsonData)

  var obj = {
    isOk: true
  }
  res.send(obj)

});


app.post('/location', (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  var obj = {
    isOk: true
  }
  res.send(obj)
})

app.post('/gps-closed', (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  var obj = {
    isOk: true
  }
  res.send(obj)
})


app.post('/mock-location', (req, res) => {
  const jsonData = req.body;
 // console.log(jsonData);
 console.log("/mock-location");
  var obj = {
    isOk: true
  }
  res.send(obj)
})

app.post('/', (req, res) => {

  //const jsonData = req.body;

  const header = req.header("Accept");
  console.log("list");
  //  var data = JSON.parse(jsonData);
  //console.log("POST",jsonData)

  var obj = {
    isOk: true
  }
  res.send(obj)

});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


