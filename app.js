const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
// parsed data which comes with header to json and attaches to the request object
app.use(express.json()); 

// view-engine
app.set('view engine', 'ejs');

// database connection
const dburi = 'mongodb+srv://kalp07:kalp07@cluster1.ngkrv9w.mongodb.net/jwt-auth?retryWrites=true&w=majority'
mongoose.connect(dburi, { useNewUrlParser:true, useUnifiedTopology: true})
.then((result)=> app.listen(3000))
.catch((err)=>console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/animes', (req, res) => res.render('animes'));
app.use(authRoutes);