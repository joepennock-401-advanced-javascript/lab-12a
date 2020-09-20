'use strict';
const  express = require('express');
const auth0 = require('./middleware/auth0.js');
const app = express();

var session = require('express-session');

var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {secure: true},
  resave: false,
  saveUninitialized: true
};

app.use(express.static('./public'));
app.use(express.json());

// const router = express.Router();

app.get('/callback', auth0, (req, res)=>{
  
  res.status(200).send(req.token);

});

const fourOfour = require('./middleware/404');

app.use('*', fourOfour);

const errors = require('./middleware/error');

app.use(errors);



module.exports = {
  server: app,
  start: port => {
    let PORT = 3000;
    app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

  },
};
