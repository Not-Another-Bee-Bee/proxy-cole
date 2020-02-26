const newrelic = require('newrelic');
const express = require('express')
const axios = require('axios');
const morgan = require('morgan');
const app = express()
const port = 3000
app.use(morgan('dev'));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/listings/:listingID', (req, res) => {
  const id  = req.params.listingID
  axios.get(`http://localhost:3001/listings/${id}`)
  .then(response => {
  
    res.send(response.data);
  })
  .catch(err => {
    console.log(err)
  })
});


app.get('/bundle.js', (req, res) => {
  axios.get(`http://13.57.25.65:3001/bundle.js`)
  .then(response => {
  
    res.send(response.data);
  })
  .catch(err => {
    console.log(err)
  })
});



// app.get('/seed', (req, res) => {
//   axios.get('http://localhost:3003/seed')
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(err => {
//       console.log(err)
//     })
// });

// app.get('/houses', (req, res) => {
//   axios.get('http://localhost:3004/houses')
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(err => {
//       console.log(err)
//     })
// });

// app.get('/listings', (req, res) => {
//   axios.get('http://localhost:3001/listings')
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(err => {
//       console.log(err)
//     })
// });

// app.get('/api/summary/data/:id', (req, res) => {
//   const id = req.params.id;
//   axios.get(`http://localhost:3002/api/summary/data/${id}`)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))